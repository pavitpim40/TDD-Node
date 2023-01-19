module.exports = class EmailException extends Error {
  constructor() {
    super();
    this.message = 'email_failure';
    this.status = 502;
  }
};
