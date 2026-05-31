import { prisma } from "../../../db.config.js";
export const addStore = async (data) => {
    return await prisma.store.create({
        data: {
            name: data.name,
            foodCategoryId: data.foodCategoryId,
            regionId: data.regionId,
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            createdAt: new Date(),
        },
        select: {
            id: true,
        },
    });
};
export const getStore = async (storeId) => {
    return await prisma.store.findUnique({
        where: { id: storeId },
        select: {
            id: true,
            name: true,
            regionId: true,
            address: true,
        },
    });
};
//# sourceMappingURL=store.repository.js.map