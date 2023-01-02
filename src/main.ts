import {z} from "zod";

console.log('Hello world!');

const UserSchema = z.object({
    username: z.string(),
    friends: z.array(z.string()).nonempty(),
}).strict();

type User = z.infer<typeof UserSchema>;

const validUser = {
    username: "Gilles",
    friends: ["John", "Jane"]
};

console.log(UserSchema.shape.friends.element);

// Valid user
console.log(UserSchema.parse(validUser));



