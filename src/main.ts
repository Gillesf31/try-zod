import {z} from "zod";

console.log('Hello world!');

const UserSchema = z.object({
    id: z.discriminatedUnion("status", [
        z.object({ status: z.literal("success"), data: z.string() }),
        z.object({ status: z.literal("failed"), data: z.instanceof(Error) }),
    ])
}).strict();

type User = z.infer<typeof UserSchema>;

const validUser = {
    id: {
        status: "failed",
        data: new Error('toto')
    },
};

// Valid user
console.log(UserSchema.parse(validUser));



