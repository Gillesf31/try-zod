import { z } from "zod";

console.log('Hello world!');

const UserSchema = z.object({ username: z.string() });

type User = z.infer<typeof UserSchema>;

const validUser = { username: "Gilles"};
const invalidUser = { username: 123};
const user: User = { username: "Gilles"};

// Valid user
console.log(UserSchema.parse(validUser));

// Invalid user // Uncomment to see error
// console.log(UserSchema.parse(invalidUser));

// Valid user
console.log(UserSchema.parse(user));


