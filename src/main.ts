import {z} from "zod";

console.log('Hello world!');

const UserMap = z.set(z.number());

const validUserMap = new Set([1, 1, 1, 2]);

// Valid user
console.log(UserMap.parse(validUserMap));



