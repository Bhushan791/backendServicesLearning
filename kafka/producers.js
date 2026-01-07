import { read } from "fs";
import kafka from "./client.js";   
import readline from "readline"  ;

const rl = readline.createInterface({ 
    input :process.stdin,
    output :process.stdout
})
async function init() { 
    const producer = kafka.producer() ;

console.log("connecting producer..");
    await producer.connect() ;  // conn producer
    console.log("producer connected")


    rl.setPrompt('>> ');
    rl.prompt();

rl.on('line', async function(line){
    const parts = line.trim().split(/\s+/);
    const riderName = parts[0];
    const location = parts[parts.length - 1];

        
    await producer.send({
        topic : 'rider-updates',
        messages : [
           {
            partition : location.toLowerCase()=== "north"? 0 :1, 
             key: 'location-update', 
            value: JSON.stringify({name: riderName, location}),
        } 
        ]
    })


    }).on('close', async ()=> {

        await producer.disconnect() ;
    })


   
}

init();