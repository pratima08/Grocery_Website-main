class APIResponse {
  constructor(statusCode, data = null, message = "success", errors = []) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
    this.errors = errors; // Optional field for additional info if needed
  }
}

export { APIResponse };
