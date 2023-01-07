import {z} from "zod";
import {fromZodError} from 'zod-validation-error'

console.log('Hello world!');

const UserSchema = z.object({
    username: z.string().min(3, {message: 'Username must be at least 3 characters long'}),
    coords: z.tuple([z.number(), z.date()]).rest(z.number()),
})

type User = z.infer<typeof UserSchema>;

const user = {
    username: "Gi",
    coords: [12, new Date(), 1, 2 , 3]
}

const result = UserSchema.safeParse(user);

if (!result.success) {
    console.log(fromZodError(result.error));
}
