import {z} from "zod";

console.log('Hello world!');

const UserSchema = z.object({
    username: z.string(),
}).strict();

type User = z.infer<typeof UserSchema>;

const validUser = {
    username: "Gilles",
    name: "Ferrand",
};


// Valid user
console.log(UserSchema.parse(validUser));



