import dotenv from "dotenv";
import path from "path";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as KakaoStrategy } from "passport-kakao";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import jwt from "jsonwebtoken";
import { prisma } from "./db.config.js";
import { UserGender } from "./generated/prisma/index.js";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
// 1. JWT 토큰 생성 함수
export const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id.toString(), email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
export const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id.toString() }, process.env.JWT_SECRET, { expiresIn: "14d" });
};
// 2. Google Verify 로직
const googleVerify = async (profile) => {
    const email = profile.emails?.[0]?.value;
    if (!email)
        throw new Error("Google 프로필에 이메일이 없습니다.");
    let user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
        user = await prisma.user.create({
            data: {
                email,
                name: profile.displayName,
                gender: UserGender.NONE,
                birthDate: new Date(1970, 0, 1),
                address: "추후 수정",
                phone: "추후 수정",
                regionId: 1,
                latitude: 0,
                longitude: 0,
                createdAt: new Date(),
            },
        });
    }
    return { id: user.id, email: user.email, name: user.name };
};
// 3. Kakao Verify 로직
const kakaoVerify = async (profile) => {
    const email = profile._json?.kakao_account?.email;
    const name = profile.displayName || profile._json?.properties?.nickname || "카카오 사용자";
    if (!email)
        throw new Error("카카오 프로필에 이메일이 없습니다.");
    let user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
        user = await prisma.user.create({
            data: {
                email,
                name,
                gender: UserGender.NONE,
                birthDate: new Date(1970, 0, 1),
                address: "추후 수정",
                phone: "추후 수정",
                regionId: 1,
                latitude: 0,
                longitude: 0,
                createdAt: new Date(),
            },
        });
    }
    return { id: user.id, email: user.email, name: user.name };
};
// 4. Google Strategy
export const googleStrategy = new GoogleStrategy({
    clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
    clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
    callbackURL: "/oauth2/callback/google",
    scope: ["email", "profile"],
}, async (_accessToken, _refreshToken, profile, cb) => {
    try {
        const user = await googleVerify(profile);
        const tokens = {
            accessToken: generateAccessToken(user),
            refreshToken: generateRefreshToken(user),
        };
        return cb(null, tokens);
    }
    catch (err) {
        return cb(err);
    }
});
// 5. Kakao Strategy
export const kakaoStrategy = new KakaoStrategy({
    clientID: process.env.PASSPORT_KAKAO_CLIENT_ID,
    clientSecret: process.env.PASSPORT_KAKAO_CLIENT_SECRET,
    callbackURL: "/oauth2/callback/kakao",
}, async (_accessToken, _refreshToken, profile, cb) => {
    try {
        const user = await kakaoVerify(profile);
        const tokens = {
            accessToken: generateAccessToken(user),
            refreshToken: generateRefreshToken(user),
        };
        return cb(null, tokens);
    }
    catch (err) {
        return cb(err);
    }
});
// 6. JWT Strategy
export const jwtStrategy = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
}, async (payload, done) => {
    try {
        const user = await prisma.user.findFirst({ where: { id: payload.id } });
        return user ? done(null, user) : done(null, false);
    }
    catch (err) {
        return done(err, false);
    }
});
//# sourceMappingURL=auth.config.js.map