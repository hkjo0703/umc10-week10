export const toReviewResponse = (review) => {
    return {
        id: Number(review?.id),
        storeId: Number(review?.storeId),
        userId: Number(review?.userId),
        rating: Number(review?.rating),
        content: review?.content ?? null,
    };
};
//# sourceMappingURL=review.dto.js.map