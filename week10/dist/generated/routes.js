import { fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../modules/users/controllers/user.controller.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StoreController } from './../modules/store/controller/store.controller.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReviewController } from './../modules/review/controller/review.controller.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MissionController } from './../modules/mission/controller/mission.controller.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "UserSignUpResponse": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "preferCategory": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserSignUpResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserSignUpResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserSignUpApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserSignUpResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserSignUpRequest": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "gender": { "dataType": "string", "required": true },
            "birth": { "dataType": "string", "required": true },
            "address": { "dataType": "string" },
            "detailAddress": { "dataType": "string" },
            "password": { "dataType": "string", "required": true },
            "phoneNumber": { "dataType": "string", "required": true },
            "preferences": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserUpdateResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "email": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserUpdateResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserUpdateResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserUpdateApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserUpdateResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserUpdateRequest": {
        "dataType": "refObject",
        "properties": {
            "phoneNumber": { "dataType": "string" },
            "birth": { "dataType": "string" },
            "address": { "dataType": "string" },
            "gender": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionAddResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "userId": { "dataType": "double", "required": true },
            "missionId": { "dataType": "double", "required": true },
            "status": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionListResponse": {
        "dataType": "refObject",
        "properties": {
            "userMissions": { "dataType": "array", "array": { "dataType": "refObject", "ref": "UserMissionAddResponse" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserMissionListResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserMissionListResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionListApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserMissionListResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionListQuery": {
        "dataType": "refObject",
        "properties": {
            "cursor": { "dataType": "double" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionCompleteResponse": {
        "dataType": "refObject",
        "properties": {
            "count": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserMissionCompleteResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserMissionCompleteResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionCompleteApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserMissionCompleteResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StoreAddResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "regionId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_StoreAddResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "StoreAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StoreAddApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "StoreAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StoreAddRequest": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "foodCategoryId": { "dataType": "double", "required": true },
            "regionId": { "dataType": "double", "required": true },
            "address": { "dataType": "string", "required": true },
            "latitude": { "dataType": "double", "required": true },
            "longitude": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewAddResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "storeId": { "dataType": "double", "required": true },
            "userId": { "dataType": "double", "required": true },
            "rating": { "dataType": "double", "required": true },
            "content": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ReviewAddResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "ReviewAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewAddApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "ReviewAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewAddRequest": {
        "dataType": "refObject",
        "properties": {
            "rating": { "dataType": "double", "required": true },
            "content": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewListResponse": {
        "dataType": "refObject",
        "properties": {
            "reviews": { "dataType": "array", "array": { "dataType": "refObject", "ref": "ReviewAddResponse" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ReviewListResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "ReviewListResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewListApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "ReviewListResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserMissionAddResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserMissionAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserMissionAddApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "UserMissionAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionAddResponse": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "storeId": { "dataType": "double", "required": true },
            "content": { "dataType": "string", "required": true },
            "rewardPoint": { "dataType": "double", "required": true },
            "deadline": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_MissionAddResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "MissionAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionAddApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "MissionAddResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionAddRequest": {
        "dataType": "refObject",
        "properties": {
            "content": { "dataType": "string", "required": true },
            "rewardPoint": { "dataType": "double", "required": true },
            "deadline": { "dataType": "double" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionListResponse": {
        "dataType": "refObject",
        "properties": {
            "missions": { "dataType": "array", "array": { "dataType": "refObject", "ref": "MissionAddResponse" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_MissionListResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "MissionListResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionListApiResponse": {
        "dataType": "refObject",
        "properties": {
            "success": { "dataType": "boolean", "required": true },
            "statusCode": { "dataType": "double", "required": true },
            "message": { "dataType": "string", "required": true },
            "data": { "dataType": "union", "subSchemas": [{ "ref": "MissionListResponse" }, { "dataType": "enum", "enums": [null] }], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MissionListQuery": {
        "dataType": "refObject",
        "properties": {
            "cursor": { "dataType": "double" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
export function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsUserController_handleUserSignUp = {
        body: { "in": "body", "name": "body", "required": true, "ref": "UserSignUpRequest" },
    };
    app.post('/users/signup', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleUserSignUp)), async function UserController_handleUserSignUp(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleUserSignUp, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleUserSignUp',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleUserUpdate = {
        body: { "in": "body", "name": "body", "required": true, "ref": "UserUpdateRequest" },
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.patch('/users/me', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleUserUpdate)), async function UserController_handleUserUpdate(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleUserUpdate, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleUserUpdate',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleGetUserMissions = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        query: { "in": "queries", "name": "query", "required": true, "ref": "UserMissionListQuery" },
    };
    app.get('/users/missions', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleGetUserMissions)), async function UserController_handleGetUserMissions(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleGetUserMissions, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleGetUserMissions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleCompleteUserMission = {
        missionId: { "in": "path", "name": "missionId", "required": true, "dataType": "double" },
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.patch('/users/missions/:missionId', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleCompleteUserMission)), async function UserController_handleCompleteUserMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleCompleteUserMission, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleCompleteUserMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleGuestPage = {};
    app.get('/users/guest', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleGuestPage)), async function UserController_handleGuestPage(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleGuestPage, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleGuestPage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleLoginPage = {};
    app.get('/users/login', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleLoginPage)), async function UserController_handleLoginPage(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleLoginPage, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleLoginPage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleMypage = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/mypage', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleMypage)), async function UserController_handleMypage(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleMypage, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleMypage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleSetLogin = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/set-login', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleSetLogin)), async function UserController_handleSetLogin(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleSetLogin, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleSetLogin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleSetLogout = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/set-logout', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleSetLogout)), async function UserController_handleSetLogout(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleSetLogout, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleSetLogout',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStoreController_handleAddStore = {
        body: { "in": "body", "name": "body", "required": true, "ref": "StoreAddRequest" },
    };
    app.post('/stores', ...(fetchMiddlewares(StoreController)), ...(fetchMiddlewares(StoreController.prototype.handleAddStore)), async function StoreController_handleAddStore(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStoreController_handleAddStore, request, response });
            const controller = new StoreController();
            await templateService.apiHandler({
                methodName: 'handleAddStore',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsReviewController_handleAddReview = {
        storeId: { "in": "path", "name": "storeId", "required": true, "dataType": "double" },
        body: { "in": "body", "name": "body", "required": true, "ref": "ReviewAddRequest" },
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.post('/stores/:storeId/reviews', ...(fetchMiddlewares(ReviewController)), ...(fetchMiddlewares(ReviewController.prototype.handleAddReview)), async function ReviewController_handleAddReview(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsReviewController_handleAddReview, request, response });
            const controller = new ReviewController();
            await templateService.apiHandler({
                methodName: 'handleAddReview',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsReviewController_handleGetUserReviews = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/reviews', ...(fetchMiddlewares(ReviewController)), ...(fetchMiddlewares(ReviewController.prototype.handleGetUserReviews)), async function ReviewController_handleGetUserReviews(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsReviewController_handleGetUserReviews, request, response });
            const controller = new ReviewController();
            await templateService.apiHandler({
                methodName: 'handleGetUserReviews',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_handleAddUserMission = {
        missionId: { "in": "path", "name": "missionId", "required": true, "dataType": "double" },
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.post('/missions/:missionId/challenge', ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.handleAddUserMission)), async function MissionController_handleAddUserMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_handleAddUserMission, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'handleAddUserMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_handleAddMission = {
        storeId: { "in": "path", "name": "storeId", "required": true, "dataType": "double" },
        body: { "in": "body", "name": "body", "required": true, "ref": "MissionAddRequest" },
    };
    app.post('/missions/stores/:storeId', ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.handleAddMission)), async function MissionController_handleAddMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_handleAddMission, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'handleAddMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_handleGetStoreMissions = {
        storeId: { "in": "path", "name": "storeId", "required": true, "dataType": "double" },
        query: { "in": "queries", "name": "query", "required": true, "ref": "MissionListQuery" },
    };
    app.get('/missions/stores/:storeId', ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.handleGetStoreMissions)), async function MissionController_handleGetStoreMissions(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_handleGetStoreMissions, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'handleGetStoreMissions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map