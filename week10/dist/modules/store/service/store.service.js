import { toStoreResponse } from "../dto/store.dto.js";
import { addStore, getStore } from "../repository/store.repository.js";
export const storeAdd = async (data) => {
    const store = await addStore(data);
    const storeData = await getStore(Number(store.id));
    return toStoreResponse(storeData);
};
//# sourceMappingURL=store.service.js.map