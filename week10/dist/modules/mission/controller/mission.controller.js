var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Path, Post, Queries, Route, Tags, Response, SuccessResponse, Example, Middlewares, Request } from "tsoa";
import { missionAdd, storeMissionList } from "../service/mission.service.js";
import { userMissionAdd } from "../../users/services/user.service.js";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../../../common/errors/app.error.js";
import { success } from "../../../common/responses/response.js";
import { authenticateJwt } from "../../../common/middlewares/auth.middleware.js";
let MissionController = class MissionController extends Controller {
    /**
     * 미션 도전 API
     * @summary 사용자가 특정 미션에 도전하는 엔드포인트입니다.
     */
    async handleAddUserMission(missionId, req) {
        try {
            const userId = Number(req.user.id);
            const userMission = await userMissionAdd(userId, { missionId });
            return success(StatusCodes.OK, "미션 도전 성공", userMission);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
    /**
     * 미션 추가 API
     * @summary 특정 가게에 미션을 추가하는 엔드포인트입니다.
     */
    async handleAddMission(storeId, body) {
        try {
            const mission = await missionAdd(storeId, body);
            return success(StatusCodes.OK, "미션 추가 성공", mission);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
    /**
     * 가게 미션 목록 조회 API
     * @summary 특정 가게의 미션 목록을 조회하는 엔드포인트입니다.
     */
    async handleGetStoreMissions(storeId, query) {
        try {
            const missions = await storeMissionList(storeId, query.cursor);
            return success(StatusCodes.OK, "미션 목록 조회 성공", missions);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
};
__decorate([
    Post("{missionId}/challenge"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "미션 도전 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "미션 도전 성공",
        data: { id: 1, userId: 1, missionId: 1, status: "CHALLENGING" },
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
    Response(409, "이미 도전 중인 미션입니다.", {
        success: false,
        statusCode: 409,
        message: "이미 도전 중인 미션입니다.",
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
], MissionController.prototype, "handleAddUserMission", null);
__decorate([
    Post("stores/{storeId}"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "미션 추가 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "미션 추가 성공",
        data: { id: 1, storeId: 1, content: "1만원 이상 주문하기", rewardPoint: 500, deadline: 30 },
    }),
    Response(401, "로그인이 필요합니다.", {
        success: false,
        statusCode: 401,
        message: "로그인이 필요합니다.",
        data: null,
    }),
    Response(404, "존재하지 않는 가게입니다.", {
        success: false,
        statusCode: 404,
        message: "존재하지 않는 가게입니다.",
        data: null,
    }),
    Response(500, "서버 내부 오류", {
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    }),
    __param(0, Path()),
    __param(1, Body())
], MissionController.prototype, "handleAddMission", null);
__decorate([
    Get("stores/{storeId}"),
    SuccessResponse(200, "미션 목록 조회 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "미션 목록 조회 성공",
        data: { missions: [{ id: 1, storeId: 1, content: "1만원 이상 주문하기", rewardPoint: 500, deadline: 30 }] },
    }),
    Response(404, "존재하지 않는 가게입니다.", {
        success: false,
        statusCode: 404,
        message: "존재하지 않는 가게입니다.",
        data: null,
    }),
    Response(500, "서버 내부 오류", {
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    }),
    __param(0, Path()),
    __param(1, Queries())
], MissionController.prototype, "handleGetStoreMissions", null);
MissionController = __decorate([
    Route("missions"),
    Tags("Missions")
], MissionController);
export { MissionController };
//# sourceMappingURL=mission.controller.js.map