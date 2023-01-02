import {z} from "zod";

console.log('Hello world!');

const UserSchema = z.object({
    id: z.string().or(z.number()),
    username: z.string(),
    friends: z.array(z.string()).nonempty(),
    coords: z.tuple([z.number().gt(2).int(), z.string()]),
    coordsRest: z.tuple([z.number(), z.number()]).rest(z.number())
}).strict();

type User = z.infer<typeof UserSchema>;

const validUser = {
    id: false,
    username: "Gilles",
    friends: ["John", "Jane"],
    coords: [5, "Toto"],
    coordsRest: [5, 6, 7, 8]
};

console.log(UserSchema.shape.friends.element);

// Valid user
console.log(UserSchema.parse(validUser));



