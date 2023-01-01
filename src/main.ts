import {z} from "zod";

console.log('Hello world!');

const UserSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email().optional(),
    age: z.number().gt(0).default(Math.random() * 100),
    salary: z.number().default(1000),
    birthDate: z.date().nullish(),
    isAlive: z.boolean().nullable(),
});

type User = z.infer<typeof UserSchema>;

const validUser = {
    username: "Gilles",
    email: "totofaitdubato@toto.to",
    birthDate: undefined,
    isAlive: null,
};


// Valid user
console.log(UserSchema.parse(validUser));



