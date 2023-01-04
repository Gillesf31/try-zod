import {z} from "zod";

console.log('Hello world!');

const PromiseSchema = z.promise(z.string());

const promise = Promise.resolve('hello');

// Valid user
console.log(PromiseSchema.parse(promise));



