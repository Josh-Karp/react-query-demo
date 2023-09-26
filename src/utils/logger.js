class Logger {
  error(message, error) {
    console.error(`[ERROR]: ${message}`);
  }

  warn(message) {
    console.warn(`[WARN]: ${message}`);
  }
}

export default new Logger();
