import { z } from "zod";

console.log('Hello world!');

const UserSchema = z.object({
    username: z.string(),
    age: z.number(),
    salary: z.bigint().optional(),
    birthDate: z.date(),
    isAlive: z.boolean()
});

type User = z.infer<typeof UserSchema>;

const validUser = {
    username: "Gilles",
    age: 99,
    birthDate: new Date(),
    isAlive: true
};


// Valid user
console.log(UserSchema.safeParse(validUser).success);



