const express = require ("express")
require("dotenv").config()

//initialize the server
const server = express()

PORT = process.env.PORT;

// testing is server is active
server.get("/home", (request, response)=>{
	response.send(`All looks good`)
})

server.listen(PORT,()=>{
	console.log(`this server is listening on http://localhost:${PORT}`)
})




