const { z } = require("zod");

const studentform = z.object({
  fullname: z.string().nonempty(),
  email: z.string().nonempty(),
  gender: z.string().nonempty(),
  grade: z.number(),
});

const auth = z.object({
  email: z.string().nonempty(),
});

module.exports = { studentform, auth };
