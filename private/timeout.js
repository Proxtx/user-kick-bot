import { timeoutUser } from "../public/bot.js";

export const server = async (document, options) => {
  await timeoutUser(
    options.req.query.pwd,
    options.req.query.gId,
    options.req.query.uId,
    options.req.query.duration
  );
};
