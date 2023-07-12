const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let friends = ["Robert", "Richard", "Demi", "Kayla", "Joe"];

//build an input on page with button
//when button clicks take input and send to server
//return friends that match or a message "no match"

app.get('/api/friends', (request, response) => {
    const { query } = request
    if (request.query.friend) {
        const filteredFriends = friends.filter(element => element.toLowerCase().includes(request.query.friend.toLowerCase()))
        response.status(200).send(filteredFriends)
    }
    else {
        response.status(200).send(friends)
    }

})



app.get('/api/users', (request, res) => {

    res.status(200).send(friends);
})

app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
})

const SERVER_PORT = 4000
app.listen(SERVER_PORT, () => console.log(`up and running on ${SERVER_PORT}`));