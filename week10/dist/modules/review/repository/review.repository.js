import { prisma } from "../../../db.config.js";
export const addReview = async (data) => {
    return await prisma.review.create({
        data: {
            storeId: data.storeId,
            userId: data.userId,
            rating: data.rating,
            content: data.content,
            createdAt: new Date(),
        },
        select: {
            id: true,
        },
    });
};
export const getReview = async (reviewId) => {
    return await prisma.review.findUnique({
        where: { id: reviewId },
        select: {
            id: true,
            storeId: true,
            userId: true,
            rating: true,
            content: true,
        },
    });
};
export const getUserReviews = async (userId) => {
    return await prisma.review.findMany({
        where: { userId },
        select: {
            id: true,
            storeId: true,
            userId: true,
            rating: true,
            content: true,
        },
        orderBy: { createdAt: "desc" },
    });
};
//# sourceMappingURL=review.repository.js.map