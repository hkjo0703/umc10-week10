import dotenv from "dotenv";
import express from "express";
import passport from "passport";
import { googleStrategy, jwtStrategy, kakaoStrategy } from "./auth.config.js";
import cors from "cors";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { RegisterRoutes } from "./generated/routes.js";
import { AppError } from "./common/errors/app.error.js";
import swaggerUi from "swagger-ui-express";
// ESM 환경에서는 JSON 파일을 가져올 때 아래와 같이 처리합니다.
import path from "path";
import fs from "fs";
// bigint json 직렬화 오류로 인해 추가
BigInt.prototype.toJSON = function () {
    return this.toString();
};
// 1. 환경 변수 설정
dotenv.config();
passport.use(googleStrategy);
passport.use(jwtStrategy);
passport.use(kakaoStrategy);
const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(cookieParser());
// 2. 미들웨어 설정
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
// 3. 기본 라우트
app.get("/", (req, res) => {
    res.send("Hello World! This is TypeScript Server!");
});
const router = express.Router();
RegisterRoutes(router);
app.use("/api/v1", router);
app.use((err, req, res, next) => {
    console.error(err);
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            statusCode: err.statusCode,
            message: err.message,
            data: null,
        });
    }
    return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    });
});
// 1. TSOA가 생성한 swagger.json 읽어오기
const swaggerFile = JSON.parse(fs.readFileSync(path.resolve("dist/swagger.json"), "utf8"));
// 2. Swagger UI 연결
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// 쿠키 만드는 라우터 
app.get('/setcookie', (req, res) => {
    // 'myCookie'라는 이름으로 'hello' 값을 가진 쿠키를 생성
    res.cookie('myCookie', 'hello', { maxAge: 60000 }); // 60초간 유효
    res.send('쿠키가 생성되었습니다!');
});
// 쿠키 읽는 라우터 
app.get('/getcookie', (req, res) => {
    // cookie-parser 덕분에 req.cookies 객체에서 바로 꺼내 쓸 수 있음
    const myCookie = req.cookies.myCookie;
    if (myCookie) {
        console.log(req.cookies); // { myCookie: 'hello' }
        res.send(`당신의 쿠키: ${myCookie}`);
    }
    else {
        res.send('쿠키가 없습니다.');
    }
});
const isLogin = passport.authenticate('jwt', { session: false });
app.get('/mypage', isLogin, (req, res) => {
    if (!req.user) {
        return res.status(401).json({
            message: "인증되지 않은 사용자입니다.",
        });
    }
    res.status(200).json({
        message: `인증 성공! ${req.user.name}님의 마이페이지입니다.`,
        user: req.user,
    });
});
app.get("/oauth2/login/google", passport.authenticate("google", { session: false }));
app.get("/oauth2/callback/google", passport.authenticate("google", { session: false, failureRedirect: "/login-failed" }), (req, res) => {
    res.status(200).json({ success: true, tokens: req.user });
});
app.get("/oauth2/login/kakao", passport.authenticate("kakao", { session: false }));
app.get("/oauth2/callback/kakao", passport.authenticate("kakao", { session: false, failureRedirect: "/login-failed" }), (req, res) => {
    res.status(200).json({ success: true, tokens: req.user });
});
// 4. 서버 시작
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map