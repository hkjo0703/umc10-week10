import passport from "passport";
export function authorizeUser() {
    return async (req, res, next) => {
        const { username } = req.cookies;
        if (username) {
            console.log(`[인증 성공] ${username}님, 환영합니다.`);
            next();
        }
        else {
            console.log("[인증 실패] 로그인이 필요합니다.");
            res
                .status(401)
                .send('<script>alert("로그인이 필요합니다!");location.href="/api/v1/users/login";</script>');
        }
    };
}
// JWT 인증 미들웨어
export function authenticateJwt() {
    return (req, res, next) => {
        passport.authenticate("jwt", { session: false }, (err, user) => {
            if (err || !user) {
                return res.status(401).json({
                    success: false,
                    statusCode: 401,
                    message: "로그인이 필요합니다.",
                    data: null,
                });
            }
            req.user = user;
            next();
        })(req, res, next);
    };
}
//# sourceMappingURL=auth.middleware.js.map