import { z } from "zod";

console.log('Hello world!');

const UserSchema = z.object({ username: z.string() });

type User = z.infer<typeof UserSchema>;

const validUser = { username: "Gilles"};
const invalidUser = { username: 123};
const user: User = { username: "Gilles"};

// Valid user
console.log(UserSchema.safeParse(validUser));

//  No broken code with safeParse
console.log(UserSchema.safeParse(invalidUser));

// Valid user
console.log(UserSchema.safeParse(user));


