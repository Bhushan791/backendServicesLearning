import client from "./client.js"; 



async function hello() { 


//all data in sorted order
    // const data   = await client.zrange('score',0, -1) ;
    // console.log(data); 
    
//to reverse sort use zrevrange


//to get only one data 


const data =  await client.zscore('score', 'piyush')

console.log(data)
    
}
hello() ;