import { z } from "zod";

console.log('Hello world!');

type User = {
    username: string;
}

const UserSchema = z.object({ username: z.string() });

const validUser = { username: "Gilles"};
const invalidUser = { username: 123};
const user: User = { username: "Gilles"};

// Valid user
console.log(UserSchema.parse(validUser));

// Invalid user // Uncomment to see error
// console.log(UserSchema.parse(invalidUser));

// Valid user
console.log(UserSchema.parse(user));


