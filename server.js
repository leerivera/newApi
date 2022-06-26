const express = require('express')
const app = express()

const PORT = 8000


const spiderman = {
    'age': 29,
     
}


app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.getMaxListeners('/api', (request, response) => {
     response.json()
})


app.listen(PORT, () => {
    console.log(`the server is running on ${PORT}! damn that's fast`)
})