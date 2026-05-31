var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Patch, Path, Post, Queries, Route, Tags, Middlewares, Request, Response, SuccessResponse, Example } from "tsoa";
import { userSignUp, userUpdate, userMissionList, userMissionComplete } from "../services/user.service.js";
import { success } from "../../../common/responses/response.js";
import { StatusCodes } from "http-status-codes";
import { authorizeUser, authenticateJwt } from "../../../common/middlewares/auth.middleware.js";
import { AppError } from "../../../common/errors/app.error.js";
let UserController = class UserController extends Controller {
    /**
     * 회원가입 API
     * @summary 회원가입을 처리하는 엔드포인트입니다.
     */
    async handleUserSignUp(body) {
        try {
            const user = await userSignUp(body);
            return success(StatusCodes.OK, "회원가입 성공", user);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
    /**
     * 사용자 정보 수정 API
     * @summary 로그인한 사용자의 정보를 수정하는 엔드포인트입니다.
     */
    async handleUserUpdate(body, req) {
        try {
            const userId = Number(req.user.id);
            const user = await userUpdate(userId, body);
            return success(StatusCodes.OK, "사용자 정보 수정 성공", user);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
    /**
     * 진행 중인 미션 목록 조회 API
     * @summary 로그인한 사용자의 진행 중인 미션 목록을 조회하는 엔드포인트입니다.
     */
    async handleGetUserMissions(req, query) {
        try {
            const userId = Number(req.user.id);
            const userMissions = await userMissionList(userId, query.cursor);
            return success(StatusCodes.OK, "미션 목록 조회 성공", userMissions);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
    /**
     * 미션 완료 API
     * @summary 진행 중인 미션을 완료로 변경하는 엔드포인트입니다.
     */
    async handleCompleteUserMission(missionId, req) {
        try {
            const userId = Number(req.user.id);
            const result = await userMissionComplete(userId, missionId);
            return success(StatusCodes.OK, "미션 완료 성공", result);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
    async handleGuestPage() {
        return `
      <h1>게스트 페이지</h1>
      <p>이 페이지는 로그인이 필요 없습니다.</p>
      <ul>
        <li><a href="/api/v1/users/mypage">마이페이지 (로그인 필요)</a></li>
      </ul>
    `;
    }
    async handleLoginPage() {
        return "<h1>로그인 페이지</h1><p>로그인이 필요한 페이지에서 튕겨나오면 여기로 옵니다.</p>";
    }
    async handleMypage(req) {
        return `
      <h1>마이페이지</h1>
      <p>환영합니다, ${req.cookies.username}님!</p>
      <p>이 페이지는 로그인한 사람만 볼 수 있습니다.</p>
    `;
    }
    async handleSetLogin(req) {
        req.res.cookie("username", "UMC10th", { maxAge: 3600000 });
        return '로그인 쿠키(username=UMC10th) 생성 완료! <a href="/api/v1/users/mypage">마이페이지로 이동</a>';
    }
    async handleSetLogout(req) {
        req.res.clearCookie("username");
        return '로그아웃 완료 (쿠키 삭제). <a href="/api/v1/users/guest">메인으로</a>';
    }
};
__decorate([
    Post("signup"),
    SuccessResponse(200, "회원가입 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "회원가입 성공",
        data: {
            email: "test@example.com",
            name: "홍길동",
            preferCategory: ["1", "2"],
        },
    }),
    Response(409, "이미 존재하는 이메일입니다.", {
        success: false,
        statusCode: 409,
        message: "이미 존재하는 이메일입니다.",
        data: null,
    }),
    Response(500, "서버 내부 오류", {
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    }),
    __param(0, Body())
], UserController.prototype, "handleUserSignUp", null);
__decorate([
    Patch("me"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "사용자 정보 수정 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "사용자 정보 수정 성공",
        data: { id: 1, email: "test@example.com", name: "홍길동" },
    }),
    Response(401, "로그인이 필요합니다.", {
        success: false,
        statusCode: 401,
        message: "로그인이 필요합니다.",
        data: null,
    }),
    Response(404, "존재하지 않는 사용자입니다.", {
        success: false,
        statusCode: 404,
        message: "존재하지 않는 사용자입니다.",
        data: null,
    }),
    Response(500, "서버 내부 오류", {
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    }),
    __param(0, Body()),
    __param(1, Request())
], UserController.prototype, "handleUserUpdate", null);
__decorate([
    Get("missions"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "미션 목록 조회 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "미션 목록 조회 성공",
        data: { userMissions: [{ id: 1, userId: 1, missionId: 1, status: "CHALLENGING" }] },
    }),
    Response(401, "로그인이 필요합니다.", {
        success: false,
        statusCode: 401,
        message: "로그인이 필요합니다.",
        data: null,
    }),
    Response(500, "서버 내부 오류", {
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    }),
    __param(0, Request()),
    __param(1, Queries())
], UserController.prototype, "handleGetUserMissions", null);
__decorate([
    Patch("missions/{missionId}"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "미션 완료 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "미션 완료 성공",
        data: { count: 1 },
    }),
    Response(401, "로그인이 필요합니다.", {
        success: false,
        statusCode: 401,
        message: "로그인이 필요합니다.",
        data: null,
    }),
    Response(404, "존재하지 않는 사용자 또는 미션입니다.", {
        success: false,
        statusCode: 404,
        message: "존재하지 않는 사용자 또는 미션입니다.",
        data: null,
    }),
    Response(400, "진행 중인 미션이 아닙니다.", {
        success: false,
        statusCode: 400,
        message: "진행 중인 미션이 아닙니다.",
        data: null,
    }),
    Response(500, "서버 내부 오류", {
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    }),
    __param(0, Path()),
    __param(1, Request())
], UserController.prototype, "handleCompleteUserMission", null);
__decorate([
    Get("guest")
], UserController.prototype, "handleGuestPage", null);
__decorate([
    Get("login")
], UserController.prototype, "handleLoginPage", null);
__decorate([
    Get("mypage"),
    Middlewares(authorizeUser()),
    __param(0, Request())
], UserController.prototype, "handleMypage", null);
__decorate([
    Get("set-login"),
    __param(0, Request())
], UserController.prototype, "handleSetLogin", null);
__decorate([
    Get("set-logout"),
    __param(0, Request())
], UserController.prototype, "handleSetLogout", null);
UserController = __decorate([
    Route("users"),
    Tags("Users")
], UserController);
export { UserController };
//# sourceMappingURL=user.controller.js.map