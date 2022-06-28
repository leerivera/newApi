const express = require('express')
const app = express()

const PORT = 8000


const superheros = {
    'spiderman': {
        'birthName': 'Peter Parker',
        'powers': 'super strenght, spidey-sense, wall-crawling'

    },
    'the punisher':{
        'birthName': 'Frank Castle',
        'powers': 'none, skilled combatant'
    }

}


app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:superheroName', (request, response) => {
     console.log(request.params.superheroName)
     response.json(superheros)
})


app.listen(PORT, () => {
    console.log(`the server is running on ${PORT}! damn that's fast`)
})