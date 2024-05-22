const { z } = require("zod");

const studentform = z.object({
  fullname: z.string().nonempty(),
  email: z.string().email({ message: "Invalid email address" }),
  gender: z.string().nonempty(),
});

const auth = z.object({
  email: z.string().nonempty().email(),
});

module.exports = { studentform, auth };
