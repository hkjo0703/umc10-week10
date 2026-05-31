export const toStoreResponse = (store) => {
    return {
        id: Number(store?.id),
        name: store?.name ?? "",
        regionId: Number(store?.regionId),
    };
};
//# sourceMappingURL=store.dto.js.map