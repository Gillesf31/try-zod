import {z} from "zod";

console.log('Hello world!');

const UserMap = z.map(z.string(), z.number());

const validUserMap = new Map([
    ['id', 12],
]);

// Valid user
console.log(UserMap.parse(validUserMap));



