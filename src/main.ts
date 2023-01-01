import {z} from "zod";

console.log('Hello world!');

enum Hobbies {
    Reading = 'reading',
    Writing = 'writing',
    Coding = 'coding',
}

const hobbies = ['programming', 'reading', 'sleeping'] as const;

const UserSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email().optional(),
    age: z.number().gt(0).default(Math.random() * 100),
    salary: z.number().default(1000),
    birthDate: z.date().nullish(),
    isAlive: z.literal(true),
    hobby: z.enum(hobbies),
    hobby2: z.nativeEnum(Hobbies),
});

type User = z.infer<typeof UserSchema>;

const validUser = {
    username: "Gilles",
    email: "toto@toto.to",
    birthDate: undefined,
    isAlive: true,
    hobby: 'programming',
    hobby2: Hobbies.Coding,
};


// Valid user
console.log(UserSchema.parse(validUser));



