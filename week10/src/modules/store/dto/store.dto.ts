export interface StoreAddRequest {
  /**
   * 가게 이름
   * @example "맛있는 한식당"
   */
  name: string;
  /**
   * 음식 카테고리 ID
   * @example 1
   */
  foodCategoryId: number;
  /**
   * 지역 ID
   * @example 1
   */
  regionId: number;
  /**
   * 가게 주소
   * @example "서울시 강남구 역삼동 123-45"
   */
  address: string;
  /**
   * 위도
   * @example 37.5012
   */
  latitude: number;
  /**
   * 경도
   * @example 127.0396
   */
  longitude: number;
}

export interface StoreAddResponse {
  /** 가게 ID */
  id: number;
  /** 가게 이름 */
  name: string;
  /** 지역 ID */
  regionId: number;
}

export interface StoreAddApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: StoreAddResponse | null;
}

export const toStoreResponse = (store: any): StoreAddResponse => {
  return {
    id: Number(store?.id),
    name: store?.name ?? "",
    regionId: Number(store?.regionId),
  };
};