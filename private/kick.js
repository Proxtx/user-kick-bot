import { kickUser } from "../public/bot.js";

export const server = async (document, options) => {
  await kickUser(
    options.req.query.pwd,
    options.req.query.gId,
    options.req.query.uId
  );
};
