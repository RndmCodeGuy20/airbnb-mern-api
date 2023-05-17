/**
 * @desc This class is used to handle errors in the hotel module
 */
class HotelApiError extends Error {
  /**
	 * @param {String} message
	 * @param {string} httpStatus
	 * @param {String} errorCode
	 */
  constructor(message, httpStatus, errorCode) {
    super(message);
    this.name = 'HotelApiError';
    this.status = httpStatus;
    this.errorCode = errorCode;
  }
}

export { HotelApiError };
