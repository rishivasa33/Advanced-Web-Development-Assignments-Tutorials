const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
var crypto = require('crypto');

const PORT = 3000;

const app = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Hardcoded DB ID Password. Got Connection string from MongoDB Atlas Dashboard. 
//References:
//https://www.workfall.com/learning/blog/how-to-connect-to-mongodb-using-mongoose-and-mongodb-atlas-in-node-js/
//https://mongoosejs.com/docs/connections.html
mongoose.connect('mongodb+srv://root:root@tutorial6.cflxvbo.mongodb.net/Tutorial7DB?retryWrites=true&w=majority');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB Atlas DB: ' + db.name);
});

//Defining the Users Schema and Model
const UsersSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    id: { type: String, required: true, unique: true }
});

const User = mongoose.model('Users', UsersSchema);


app.get('/', (request, response) => {
    response.status(200).send("Hello, Welcome to Rishi's CSCI 5709 - Tutorial 7!!");
});


app.get('/users', async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json({ "message": "Users retrieved", "success": "true", "users": users });
    } catch (error) {
        response.status(500).json({ "message": "Internal server error: " + error.message, "success": "false" });
    }
});


app.put('/update/:id', async (request, response) => {
    console.log("Request Recieved: " + JSON.stringify(request.body));
    const userID = request.params.id;
    if (request.body.email) {
        const newUserEmail = request.body.email;

        if (request.body.firstName) {
            const newUserFirstName = request.body.firstName;

            try {
                const updatedUser = await User.findOneAndUpdate({ id: userID }, { email: newUserEmail, firstName: newUserFirstName }, { new: true });
                if (updatedUser) {
                    response.status(200).json({ "message": "User updated", "success": "true" });
                } else {
                    response.status(404).json({ "message": "User not found", "success": "false" });
                }
            } catch (error) {
                response.status(500).json({ "message": "Internal server error: " + error.message, "success": "false" });
            }

        } else {
            response.status(400).json({ "message": "Error! New User's First Name required", "success": "false" });
        }
    } else {
        response.status(400).json({ "message": "Error! New User's Email required", "success": "false" });
    }
});


app.post('/add', async (request, response) => {
    console.log("Request Recieved: " + JSON.stringify(request.body));
    if (request.body.email) {
        const newUserEmail = request.body.email;

        if (request.body.firstName) {
            const newUserFirstName = request.body.firstName;

            const newUserUniqueID = generateUUID(8);

            try {
                const newUser = new User({ email: newUserEmail, firstName: newUserFirstName, id: newUserUniqueID });
                await newUser.save();
            } catch (error) {
                response.status(500).json({ "message": "Internal server error: " + error.message, "success": "false" });
            }

            response.status(200).json({ "message": "User added", "success": "true" });

        } else {
            response.status(400).json({ "message": "Error! New User's First Name required", "success": "false" });
        }
    } else {
        response.status(400).json({ "message": "Error! New User's Email required", "success": "false" });
    }
});


app.get('/user/:id', async (request, response) => {
    console.log("Request Recieved: " + JSON.stringify(request.body));
    const userID = request.params.id;
    try {
        const user = await User.findOne({ id: userID });
        if (user) {
            response.status(200).json({ "success": "true", "user": user });
        } else {
            response.status(404).json({ "message": "User not found", "success": "false" });
        }
    } catch (error) {
        response.status(500).json({ "message": "Internal server error: " + error.message, "success": "false" });
    }
});


app.delete('/delete/:id', async (request, response) => {
    console.log("Request Recieved: " + JSON.stringify(request.body));
    const userID = request.params.id;
    try {
        const deletedUser = await User.findOneAndDelete({ id: userID });
        if (deletedUser) {
            return response.status(200).json({ "message": "User deleted", "success": "true" });
        } else {
            return response.status(404).json({ "message": "User not found", "success": "false" });
        }
    } catch (error) {
        return response.status(500).json({ "message": "Internal Server Error: " + error.message, "success": "false" });
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