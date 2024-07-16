const express = require('express')      //creates the Express application
const app = express()
const port = 3000                       //The port that index.html runs on.
                                        //See note below.


// Serving static files (HTML, CSS, JS)
app.use(express.static('public'))
   
// Defines a route for handling client communication
app.get("/", function (res) { 
    res.sendFile("index.html"); 
}); 

app.listen(port, () => {                //Starts the server and listens on port 3000 for connections.
  console.log(`Server listening on port ${port}`)
})