const axios = require("axios");
module.exports={

    get:async function(code){
        const {data} = await axios.get("http://localhost:82/loan/"+code);
        return data[0]; 
    },
    changeStatus: async function(code, status){
        const {data} = await axios.put("http://localhost:82/loan/"+code, {status});
    }
}