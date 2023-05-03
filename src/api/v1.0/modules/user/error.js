/**
 * UserApiError
 */
class UserApiError extends Error {
  /**
	 * @param {String} message
	 * @param {Number} httpStatus
	 * @param {String} errorCode
	 */
  constructor(message, httpStatus, errorCode) {
    super(message);
    this.name = 'UserApiError';
    this.status = httpStatus;
    this.errorCode = errorCode;
  }
}

export { UserApiError };
