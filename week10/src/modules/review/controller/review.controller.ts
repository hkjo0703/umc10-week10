import { Body, Controller, Get, Path, Post, Route, Tags, Response, SuccessResponse, Example, Middlewares, Request } from "tsoa";
import { ReviewAddRequest, ReviewAddResponse, ReviewListResponse, ReviewAddApiResponse, ReviewListApiResponse } from "../dto/review.dto.js";
import { reviewAdd, reviewList } from "../service/review.service.js";
import { AppError } from "../../../common/errors/app.error.js";
import { ApiResponse, success } from "../../../common/responses/response.js";
import { StatusCodes } from "http-status-codes";
import { authenticateJwt } from "../../../common/middlewares/auth.middleware.js";
import { Request as ExpressRequest } from "express";

@Route("")
@Tags("Reviews")
export class ReviewController extends Controller {
  /**
   * 리뷰 추가 API
   * @summary 특정 가게에 리뷰를 추가하는 엔드포인트입니다.
   */
  @Post("stores/{storeId}/reviews")
  @Middlewares(authenticateJwt())
  @SuccessResponse(200, "리뷰 추가 성공")
  @Example<ReviewAddApiResponse>({
    success: true,
    statusCode: 200,
    message: "리뷰 추가 성공",
    data: { id: 1, storeId: 1, userId: 1, rating: 4.5, content: "정말 맛있어요!" },
  })
  @Response<ReviewAddApiResponse>(401, "로그인이 필요합니다.", {
    success: false,
    statusCode: 401,
    message: "로그인이 필요합니다.",
    data: null,
  })
  @Response<ReviewAddApiResponse>(404, "존재하지 않는 가게 또는 사용자입니다.", {
    success: false,
    statusCode: 404,
    message: "존재하지 않는 가게 또는 사용자입니다.",
    data: null,
  })
  @Response<ReviewAddApiResponse>(500, "서버 내부 오류", {
    success: false,
    statusCode: 500,
    message: "서버 내부 오류",
    data: null,
  })
  public async handleAddReview(
    @Path() storeId: number,
    @Body() body: ReviewAddRequest,
    @Request() req: ExpressRequest,
  ): Promise<ApiResponse<ReviewAddResponse>> {
    try {
      const userId = Number((req.user as any).id);
      const review = await reviewAdd(storeId, userId, body);
      return success(StatusCodes.OK, "리뷰 추가 성공", review);
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        (err as Error).message || "서버 내부 오류"
      );
    }
  }

  /**
   * 내 리뷰 목록 조회 API
   * @summary 로그인한 사용자가 작성한 리뷰 목록을 조회하는 엔드포인트입니다.
   */
  @Get("users/reviews")
  @Middlewares(authenticateJwt())
  @SuccessResponse(200, "리뷰 목록 조회 성공")
  @Example<ReviewListApiResponse>({
    success: true,
    statusCode: 200,
    message: "리뷰 목록 조회 성공",
    data: { reviews: [{ id: 1, storeId: 1, userId: 1, rating: 4.5, content: "정말 맛있어요!" }] },
  })
  @Response<ReviewListApiResponse>(401, "로그인이 필요합니다.", {
    success: false,
    statusCode: 401,
    message: "로그인이 필요합니다.",
    data: null,
  })
  @Response<ReviewListApiResponse>(500, "서버 내부 오류", {
    success: false,
    statusCode: 500,
    message: "서버 내부 오류",
    data: null,
  })
  public async handleGetUserReviews(
    @Request() req: ExpressRequest,
  ): Promise<ApiResponse<ReviewListResponse>> {
    try {
      const userId = Number((req.user as any).id);
      const reviews = await reviewList(userId);
      return success(StatusCodes.OK, "리뷰 목록 조회 성공", reviews);
    } catch (err) {
      if (err instanceof AppError) {
        throw err;
      }
      throw new AppError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        (err as Error).message || "서버 내부 오류"
      );
    }
  }
}