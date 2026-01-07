import client from "./client.js";

async function hello() {
    const streamData = await client.xAdd(
        'temp',        // stream key
        '*',           // auto-generated ID
        { value: 't' } // field-value pair
    );

    console.log(streamData);
}

hello();
