import { toUserMissionResponse, toUserSignUpResponse, toUserUpdateResponse, } from "../dtos/user.dto.js";
import { getUser, getUserByEmail, addUser, updateUser, setPreference, getUserPreferencesByUserId, addUserMission, getUserMission, getUserMissions, updateUserMissionStatus, } from "../repositories/user.repository.js";
import { getMission } from "../../mission/repository/mission.repository.js";
import { UserMissionStatus } from "../../../generated/prisma/index.js";
import { UserNotFoundError, MissionNotFoundError, AlreadyChallengingError, NotChallengingError, DuplicateUserEmailError, } from "../../../common/errors/error.js";
import bcrypt from "bcrypt";
export const userSignUp = async (data) => {
    const existingUser = await getUserByEmail(data.email);
    if (existingUser) {
        throw new DuplicateUserEmailError();
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await addUser({ ...data, password: hashedPassword });
    for (const preference of data.preferences) {
        await setPreference(user.id, preference);
    }
    const preferences = await getUserPreferencesByUserId(user.id);
    return toUserSignUpResponse(user, preferences);
};
export const userUpdate = async (userId, data) => {
    const user = await getUser(userId);
    if (!user) {
        throw new UserNotFoundError();
    }
    const updatedUser = await updateUser(userId, data);
    return toUserUpdateResponse(updatedUser);
};
export const userMissionAdd = async (userId, data) => {
    const user = await getUser(userId);
    if (!user) {
        throw new UserNotFoundError();
    }
    const mission = await getMission(data.missionId);
    if (!mission) {
        throw new MissionNotFoundError();
    }
    const existing = await getUserMission(userId, data.missionId, UserMissionStatus.CHALLENGING);
    if (existing) {
        throw new AlreadyChallengingError();
    }
    const userMission = await addUserMission(userId, data.missionId, UserMissionStatus.CHALLENGING);
    return toUserMissionResponse(userMission);
};
export const userMissionList = async (userId, cursor) => {
    const user = await getUser(userId);
    if (!user) {
        throw new UserNotFoundError();
    }
    const userMissions = await getUserMissions(BigInt(userId), UserMissionStatus.CHALLENGING, cursor);
    return {
        userMissions: userMissions.map(toUserMissionResponse),
    };
};
export const userMissionComplete = async (userId, missionId) => {
    const user = await getUser(userId);
    if (!user) {
        throw new UserNotFoundError();
    }
    const mission = await getMission(missionId);
    if (!mission) {
        throw new MissionNotFoundError();
    }
    const existing = await getUserMission(userId, missionId, UserMissionStatus.CHALLENGING);
    if (!existing) {
        throw new NotChallengingError();
    }
    const result = await updateUserMissionStatus(BigInt(userId), BigInt(missionId));
    return { count: result.count };
};
//# sourceMappingURL=user.service.js.map