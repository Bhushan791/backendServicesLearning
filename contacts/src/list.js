import client from "./client.js";

async function lisinit() { 

// await client.lpush('messages',1);
// await client.lpush('messages',2);
// await client.lpush('messages',3);
// await client.lpush('messages',4);

//right pop -- get amd pop
// const result = await client.rpop('messages');

//blpop -- waists for 40 sec looks if any value comes immediatly pops and exit 
const result = await client.blpop('messages', 40);
console.log(result) ; 



}
lisinit();