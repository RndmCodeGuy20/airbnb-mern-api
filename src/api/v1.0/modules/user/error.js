/**
 * UserApiError
 */
class UserApiError extends Error {
  /**
	 * @param {String} message
	 * @param {string} httpStatus
	 * @param {StatusCodes.BAD_REQUEST} errorCode
	 */
  constructor(message, httpStatus, errorCode) {
    super(message);
    this.name = 'UserApiError';
    this.status = httpStatus;
    this.errorCode = errorCode;
  }
}

export { UserApiError };
