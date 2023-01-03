import {z} from "zod";

console.log('Hello world!');

const UserMap = z.record(z.string(), z.number());

const validUserMap = {
    zdadazdazd: 12,
    53: 12
};

// Valid user
console.log(UserMap.parse(validUserMap));



