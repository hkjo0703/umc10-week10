export interface UserMissionAddRequest {
  /**
   * 도전할 미션 ID
   * @example 1
   */
  missionId: number;
}

export interface UserMissionAddResponse {
  /** 유저 미션 ID */
  id: number;
  /** 유저 ID */
  userId: number;
  /** 미션 ID */
  missionId: number;
  /** 미션 상태 (CHALLENGING / DONE) */
  status: string;
}

export interface UserMissionListResponse {
  /** 유저 미션 목록 */
  userMissions: UserMissionAddResponse[];
}

export interface UserMissionCompleteResponse {
  /** 업데이트된 미션 수 */
  count: number;
}

export interface UserMissionAddApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserMissionAddResponse | null;
}

export interface UserMissionListApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserMissionListResponse | null;
}

export interface UserMissionCompleteApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserMissionCompleteResponse | null;
}

export const toUserMissionResponse = (userMission: any): UserMissionAddResponse => {
  return {
    id: Number(userMission.id),
    userId: Number(userMission.userId),
    missionId: Number(userMission.missionId),
    status: userMission.status,
  };
};

export interface UserSignUpRequest {
  /**
   * 유저 이메일
   * @example "test@example.com"
   */
  email: string;
  /**
   * 유저 이름
   * @example "홍길동"
   */
  name: string;
  /**
   * 성별
   * @example "MALE"
   */
  gender: string;
  /**
   * 생년월일
   * @example "2000-01-01"
   */
  birth: string;
  /**
   * 주소 (선택)
   * @example "서울시 강남구"
   */
  address?: string;
  /**
   * 상세주소 (선택)
   * @example "역삼동 123-45"
   */
  detailAddress?: string;
  /**
   * 비밀번호
   * @example "password123"
   */
  password: string;
  /**
   * 전화번호
   * @example "010-1234-5678"
   */
  phoneNumber: string;
  /**
   * 선호 카테고리 ID 배열
   * @example [1, 2]
   */
  preferences: number[];
}

export interface UserSignUpResponse {
  /** 유저 이메일 */
  email: string;
  /** 유저 이름 */
  name: string;
  /** 선호 카테고리 */
  preferCategory: string[];
}

export interface UserSignUpApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserSignUpResponse | null;
}

export const toUserSignUpResponse = (user: any, preferences: any[]): UserSignUpResponse => {
  return {
    email: user.email,
    name: user.name,
    preferCategory: preferences.map((p) => String(p.foodCategoryId)),
  };
};

// 사용자 정보 수정 DTO
export interface UserUpdateRequest {
  /**
   * 전화번호 (선택)
   * @example "010-1234-5678"
   */
  phoneNumber?: string;
  /**
   * 생년월일 (선택)
   * @example "2000-01-01"
   */
  birth?: string;
  /**
   * 주소 (선택)
   * @example "서울시 강남구"
   */
  address?: string;
  /**
   * 성별 (선택)
   * @example "MALE"
   */
  gender?: string;
}

export interface UserUpdateResponse {
  /** 유저 ID */
  id: number;
  /** 유저 이메일 */
  email: string;
  /** 유저 이름 */
  name: string;
}

export interface UserUpdateApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: UserUpdateResponse | null;
}

export const toUserUpdateResponse = (user: any): UserUpdateResponse => {
  return {
    id: Number(user.id),
    email: user.email,
    name: user.name,
  };
};