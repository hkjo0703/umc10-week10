var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Path, Post, Route, Tags, Response, SuccessResponse, Example, Middlewares, Request } from "tsoa";
import { reviewAdd, reviewList } from "../service/review.service.js";
import { AppError } from "../../../common/errors/app.error.js";
import { success } from "../../../common/responses/response.js";
import { StatusCodes } from "http-status-codes";
import { authenticateJwt } from "../../../common/middlewares/auth.middleware.js";
let ReviewController = class ReviewController extends Controller {
    /**
     * 리뷰 추가 API
     * @summary 특정 가게에 리뷰를 추가하는 엔드포인트입니다.
     */
    async handleAddReview(storeId, body, req) {
        try {
            const userId = Number(req.user.id);
            const review = await reviewAdd(storeId, userId, body);
            return success(StatusCodes.OK, "리뷰 추가 성공", review);
        }
        catch (err) {
            if (err instanceof AppError) {
                throw err;
            }
            throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR, err.message || "서버 내부 오류");
        }
    }
    /**
     * 내 리뷰 목록 조회 API
     * @summary 로그인한 사용자가 작성한 리뷰 목록을 조회하는 엔드포인트입니다.
     */
    async handleGetUserReviews(req) {
        try {
            const userId = Number(req.user.id);
            const reviews = await reviewList(userId);
            return success(StatusCodes.OK, "리뷰 목록 조회 성공", reviews);
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
    Post("stores/{storeId}/reviews"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "리뷰 추가 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "리뷰 추가 성공",
        data: { id: 1, storeId: 1, userId: 1, rating: 4.5, content: "정말 맛있어요!" },
    }),
    Response(401, "로그인이 필요합니다.", {
        success: false,
        statusCode: 401,
        message: "로그인이 필요합니다.",
        data: null,
    }),
    Response(404, "존재하지 않는 가게 또는 사용자입니다.", {
        success: false,
        statusCode: 404,
        message: "존재하지 않는 가게 또는 사용자입니다.",
        data: null,
    }),
    Response(500, "서버 내부 오류", {
        success: false,
        statusCode: 500,
        message: "서버 내부 오류",
        data: null,
    }),
    __param(0, Path()),
    __param(1, Body()),
    __param(2, Request())
], ReviewController.prototype, "handleAddReview", null);
__decorate([
    Get("users/reviews"),
    Middlewares(authenticateJwt()),
    SuccessResponse(200, "리뷰 목록 조회 성공"),
    Example({
        success: true,
        statusCode: 200,
        message: "리뷰 목록 조회 성공",
        data: { reviews: [{ id: 1, storeId: 1, userId: 1, rating: 4.5, content: "정말 맛있어요!" }] },
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
    __param(0, Request())
], ReviewController.prototype, "handleGetUserReviews", null);
ReviewController = __decorate([
    Route(""),
    Tags("Reviews")
], ReviewController);
export { ReviewController };
//# sourceMappingURL=review.controller.js.map