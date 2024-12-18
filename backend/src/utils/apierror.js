class APIError extends Error {
  constructor(
    statusCode, // Fix typo from 'statuseCode'
    message = "Something went wrong",
    errors = []
  ) {
    super(message); // Call parent constructor with the message
    this.statusCode = statusCode;
    this.success = false;
    this.data = null;
    this.errors = errors;

    // Capture stack trace, excluding constructor call from it
    Error.captureStackTrace(this, this.constructor);
  }
}

export { APIError };
