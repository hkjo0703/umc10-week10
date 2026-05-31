import { prisma } from "../../../db.config.js";
import { UserMissionStatus } from "../../../generated/prisma/index.js";
export const getUser = async (userId) => {
    return await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            email: true,
            name: true,
        },
    });
};
export const getUserByEmail = async (email) => {
    return await prisma.user.findFirst({
        where: { email },
        select: { id: true, email: true },
    });
};
export const addUser = async (data) => {
    return await prisma.user.create({
        data: {
            email: data.email,
            name: data.name,
            gender: data.gender,
            birthDate: new Date(data.birth),
            address: data.address || "",
            phone: data.phoneNumber,
            regionId: 1,
            latitude: 0,
            longitude: 0,
            createdAt: new Date(),
        },
        select: {
            id: true,
            email: true,
            name: true,
        },
    });
};
export const updateUser = async (userId, data) => {
    return await prisma.user.update({
        where: { id: userId },
        data: {
            ...(data.phoneNumber && { phone: data.phoneNumber }),
            ...(data.birth && { birthDate: new Date(data.birth) }),
            ...(data.address && { address: data.address }),
            ...(data.gender && { gender: data.gender }),
        },
        select: {
            id: true,
            email: true,
            name: true,
        },
    });
};
export const setPreference = async (userId, foodCategoryId) => {
    await prisma.userFoodCategory.create({
        data: {
            userId,
            foodCategoryId,
        },
    });
};
export const getUserPreferencesByUserId = async (userId) => {
    return await prisma.userFoodCategory.findMany({
        where: { userId },
        orderBy: { foodCategoryId: "asc" },
    });
};
export const getUserMission = async (userId, missionId, status) => {
    return await prisma.userMission.findFirst({
        where: { userId, missionId, status },
    });
};
export const addUserMission = async (userId, missionId, status) => {
    return await prisma.userMission.create({
        data: {
            userId,
            missionId,
            status,
            createdAt: new Date(),
        },
        select: {
            id: true,
            userId: true,
            missionId: true,
            status: true,
        },
    });
};
export const getUserMissions = async (userId, status, cursor) => {
    return await prisma.userMission.findMany({
        where: { userId, status },
        select: {
            id: true,
            userId: true,
            missionId: true,
            status: true,
        },
        orderBy: { createdAt: "desc" },
        take: 10,
        skip: cursor ? 1 : 0,
        ...(cursor ? { cursor: { id: cursor } } : {}),
    });
};
export const updateUserMissionStatus = async (userId, missionId) => {
    return await prisma.userMission.updateMany({
        where: {
            userId,
            missionId,
            status: UserMissionStatus.CHALLENGING,
        },
        data: {
            status: UserMissionStatus.DONE,
        },
    });
};
//# sourceMappingURL=user.repository.js.map