const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
var crypto = require('crypto');

const PORT = 3000;

const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let listOfUsers =
    [
        {
            "email": "abc@abc.ca",
            "firstName": "ABC",
            "id": "5abf6783"
        },
        {
            "email": "xyz@xyz.ca",
            "firstName": "XYZ",
            "id": "5abf674563"
        }
    ];

app.get('/', (request, response) => {
    response.status(200).send("Hello, Welcome to Rishi's CSCI 5709 - Tutorial 5!!");
});

app.get('/users', (request, response) => {
    response.status(200).json({ "message": "Users retrieved", "success": "true", "users": listOfUsers });
});


app.put('/update/:id', (request, response) => {

    console.log("Request Recieved: " + JSON.stringify(request.body));
    const userID = request.params.id;
    if (request.body.email) {
        const newUserEmail = request.body.email;

        if (request.body.firstName) {
            const newUserFirstName = request.body.firstName;

            //Reference for finding element based on ID:
            //https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects
            const userToBeUpdated = listOfUsers.find((user) => user.id === userID);

            if (!userToBeUpdated) {
                return response.status(404).json({ "message": "User not found", "success": "false" });
            }

            userToBeUpdated.email = newUserEmail;
            userToBeUpdated.firstName = newUserFirstName;

            response.status(200).json({ "message": "User updated", "success": "true", "users": listOfUsers });

        } else {
            response.status(400).json({ "message": "Error! New User's First Name required", "success": "false" });
        }
    } else {
        response.status(400).json({ "message": "Error! New User's Email required", "success": "false" });
    }
});


app.post('/add', (request, response) => {
    console.log("Request Recieved: " + JSON.stringify(request.body));
    if (request.body.email) {
        const newUserEmail = request.body.email;

        if (request.body.firstName) {
            const newUserFirstName = request.body.firstName;

            const newUserUniqueID = generateUUID(8);
            listOfUsers.push({ newUserUniqueID, newUserEmail, newUserFirstName });

            response.status(200).json({ "message": "User added", "success": "true", "users": listOfUsers });

        } else {
            response.status(400).json({ "message": "Error! New User's First Name required", "success": "false" });
        }
    } else {
        response.status(400).json({ "message": "Error! New User's Email required", "success": "false" });
    }
});

app.get('/user/:id', (request, response) => {
    console.log("Request Recieved: " + JSON.stringify(request.body));
    const userID = request.params.id;
    const userToBeFetched = listOfUsers.find((user) => user.id === userID);
    if (userToBeFetched) {
        return response.json({ "success": "true", "user": userToBeFetched });
    }
    else {
        return response.status(404).json({ "message": "User not found", "success": "false" });
    }
});


//Reference for UUID generation:
//https://stackoverflow.com/questions/34386914/generate-unique-random-string-with-javascript
function generateUUID(length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});