const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

function mostrar_error() {
  throw new Error("mostrar error function");
}

try {
  mostrar_error();
} catch (e) {
  logger.log("error", e.toString());
}