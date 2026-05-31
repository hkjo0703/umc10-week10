var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, Route, Tags, Response, SuccessResponse, Example, Middlewares } from "tsoa";
import { storeAdd } from "../service/store.service.js";
import { AppError } from "../../../common/errors/app.error.js";
import { success } from "../../../common/responses/response.js";
import { StatusCodes } from "http-status-codes";
import { authenticateJwt } from "../../../common/middlewares/auth.middleware.js";
let StoreController = class StoreController extends Controller {
    /**
     * 가게 추가 API
     * @summary 특정 지역에 가게를 추가하는 엔드포인트입니다.
     */
    async handleAddStore(body) {
        try {
            const store = await storeAdd(body);
            return success(StatusCodes.OK, "가게 추가 성공", store);
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
    Post("/"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "가게 추가 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "가게 추가 성공",
        data: { id: 1, name: "맛있는 한식당", regionId: 1 },
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
    __param(0, Body())
], StoreController.prototype, "handleAddStore", null);
StoreController = __decorate([
    Route("stores"),
    Tags("Stores")
], StoreController);
export { StoreController };
//# sourceMappingURL=store.controller.js.map