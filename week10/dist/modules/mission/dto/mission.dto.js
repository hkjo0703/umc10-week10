export const toMissionResponse = (mission) => {
    return {
        id: Number(mission.id),
        storeId: Number(mission.storeId),
        content: mission.content,
        rewardPoint: Number(mission.rewardPoint),
        deadline: mission.deadline ? Number(mission.deadline) : null,
    };
};
//# sourceMappingURL=mission.dto.js.map