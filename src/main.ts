import { z } from "zod";

console.log('Hello world!');

const UserSchema = z.object({
    username: z.string(),
    age: z.number(),
    salary: z.bigint().optional(),
    birthDate: z.date(),
    isAlive: z.boolean(),
    test: z.undefined(),
    test2: z.null(),
});

type User = z.infer<typeof UserSchema>;

const validUser = {
    username: "Gilles",
    age: 99,
    birthDate: new Date(),
    isAlive: true,
    test: undefined,
    test2: null,
};


// Valid user
console.log(UserSchema.safeParse(validUser).success);



