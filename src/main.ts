import {string, z} from "zod";

console.log('Hello world!');

const brandEmailSchema = z.string().email().refine(val => val.endsWith('@toto.com'), {
    message: "Email must be a Toto email",
});


console.log(brandEmailSchema.parse('gilles.ferrand@toto.com'));
