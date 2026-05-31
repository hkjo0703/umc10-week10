export const toUserMissionResponse = (userMission) => {
    return {
        id: Number(userMission.id),
        userId: Number(userMission.userId),
        missionId: Number(userMission.missionId),
        status: userMission.status,
    };
};
export const toUserSignUpResponse = (user, preferences) => {
    return {
        email: user.email,
        name: user.name,
        preferCategory: preferences.map((p) => String(p.foodCategoryId)),
    };
};
export const toUserUpdateResponse = (user) => {
    return {
        id: Number(user.id),
        email: user.email,
        name: user.name,
    };
};
//# sourceMappingURL=user.dto.js.map