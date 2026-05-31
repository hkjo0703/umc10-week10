export class AppError extends Error {
    statusCode;
    success;
    constructor(statusCode, message) {
        super(message);
        this.success = false;
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, AppError.prototype);
    }
}
//# sourceMappingURL=app.error.js.map