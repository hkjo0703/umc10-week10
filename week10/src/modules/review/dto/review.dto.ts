export interface ReviewAddRequest {
  /**
   * 별점 (1.0 ~ 5.0)
   * @example 4.5
   */
  rating: number;
  /**
   * 리뷰 내용 (선택)
   * @example "정말 맛있어요!"
   */
  content?: string;
}

export interface ReviewAddResponse {
  /** 리뷰 ID */
  id: number;
  /** 가게 ID */
  storeId: number;
  /** 유저 ID */
  userId: number;
  /** 별점 */
  rating: number;
  /** 리뷰 내용 */
  content: string | null;
}

export interface ReviewListResponse {
  /** 리뷰 목록 */
  reviews: ReviewAddResponse[];
}

export interface ReviewAddApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ReviewAddResponse | null;
}

export interface ReviewListApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ReviewListResponse | null;
}

export const toReviewResponse = (review: any): ReviewAddResponse => {
  return {
    id: Number(review?.id),
    storeId: Number(review?.storeId),
    userId: Number(review?.userId),
    rating: Number(review?.rating),
    content: review?.content ?? null,
  };
};