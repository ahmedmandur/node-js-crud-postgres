const winston = require("winston");
const dotenv = require("dotenv").config();

const dateFormat = () => new Date().toLocaleString();

class LoggerService {
  constructor(route) {
    this.route = route;

    const logger = winston.createLogger({
      level: "info",
      format: winston.format.printf((info) => {
        var message = `${dateFormat()} | ${info.level.toUpperCase()} | ${
          info.message
        }`;

        message = info.obj
          ? `${message} | ${JSON.stringify(info.obj)}`
          : message;

        return message;
      }),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `${process.env.LOG_FILE_PATH}/${route}.log`,
        }),
      ],
    });

    this.logger = logger;
  }

  async info(message) {
    this.logger.info(message);
  }

  async info(message, obj) {
    this.logger.info(message, { obj });
  }

  async error(message) {
    this.logger.error(message);
  }

  async error(message, obj) {
    this.logger.error(message, { obj });
  }

  async debug(message) {
    this.logger.debug(message);
  }

  async debug(message, obj) {
    this.logger.debug(message, { obj });
  }
}

module.exports = LoggerService;
