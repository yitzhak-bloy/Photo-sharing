class HttpError extends Error {
  constructor(massege, errorCode) {
    super(massege);
    this.code = errorCode;
  };
};

module.exports = HttpError;