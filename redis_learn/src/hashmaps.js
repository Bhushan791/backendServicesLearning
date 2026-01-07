import client  from "./client.js";




async function hasFunc() { 


    // const fields = await client.hget('bike:1' ,'model' ) 
    // console.log(fields);    //single element




    //arra of element


    const data   = await client.hmget('bike:1'  , ['model' , 'price']) ; 


    console.log(data)
}

hasFunc() ; 