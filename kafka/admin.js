import kafka from "./client.js";

async  function init() { 

    //make admin to connect kakfa 

    const admin = kafka.admin() ; 

    console.log("admin connecting...") ; 

    admin.connect() ;

    console.log("admin connection success") ; 


    //making topic by using admin

    console.log("Creating topics")

   await admin.createTopics( {
        topics: [{
            topic: 'rider-updates' , 
            numPartitions: 2,



        }]
    })

    console.log("topics created success!");


    await admin.disconnect() ;


    console.log("disconnecting admin ..")

}


init() ;