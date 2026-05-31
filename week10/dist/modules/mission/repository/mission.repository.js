import { prisma } from "../../../db.config.js";
export const addMission = async (data) => {
    return await prisma.mission.create({
        data: {
            storeId: data.storeId,
            content: data.content,
            rewardPoint: data.rewardPoint,
            deadline: data.deadline,
            createdAt: new Date(),
        },
        select: {
            id: true,
        },
    });
};
export const getMission = async (missionId) => {
    return await prisma.mission.findUnique({
        where: { id: missionId },
        select: {
            id: true,
            storeId: true,
            content: true,
            rewardPoint: true,
            deadline: true,
        },
    });
};
export const getStoreMissions = async (storeId, cursor) => {
    return await prisma.mission.findMany({
        where: { storeId },
        select: {
            id: true,
            storeId: true,
            content: true,
            rewardPoint: true,
            deadline: true,
        },
        orderBy: { createdAt: "desc" },
        take: 10,
        skip: cursor ? 1 : 0,
        ...(cursor ? { cursor: { id: cursor } } : {}),
    });
};
//# sourceMappingURL=mission.repository.js.map