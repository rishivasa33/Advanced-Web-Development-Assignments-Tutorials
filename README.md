<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 


# CSCI 5709 - Winter 2023 - Tutorial 7

* *Date Created*: 01 April 2023
* *Last Modification Date*: 01 April 2023

* *Deployed Render Application URL*: https://csci5709-rishivasa-tutorial7.onrender.com/

* *Tutorial 5 Private Git URL*: https://git.cs.dal.ca/vasa/csci5709_individual_b00902815/-/tree/tutorial7



## Authors

* Rishi Vasa (rishi.vasa@dal.ca) (B00902815) - Developer


## Getting Started

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Node.js (npm is required)

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1) Install Node.js
```
https://nodejs.org/en/download/

```

2) Run the following command in terminal:
```
> npm init
```


## Deployment
1) Create an account on Render
2) Select New --> Web Service
3) Select GitLab (or whatever repository you chose)
4) Authorize Render to connect to your personal GitHub account
5) Select the branch you want to deploy from and configure build options
6) Site will be deployed on Render and a URL will be generated which you can modify (https://csci5709-rishivasa-tutorial7.onrender.com/)

## Built With
1) Node.js - JavaScript based Back End

2) Express.js - For Routing

3) Render - Deployment Environment


## Sources Used

I have referred to the following documentation and sample code for completing the assignment:

1) For MongoDB connections with Mongoose:
https://mongoosejs.com/docs/connections.html
https://www.workfall.com/learning/blog/how-to-connect-to-mongodb-using-mongoose-and-mongodb-atlas-in-node-js/

2) For Generating UUID: 
https://stackoverflow.com/questions/34386914/generate-unique-random-string-with-javascript

### UsersApp_Tutorial7.js

*Lines 144 - 146*

```
function generateUUID(length) {
    return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
}

```

The code above was created by adapting the code in [Generate unique random string with Javascript](https://stackoverflow.com/questions/34386914/generate-unique-random-string-with-javascript) as shown below: 

```
require("crypto").randomBytes(64).toString('hex')

```

- <!---Why---> [Generate unique random string with Javascript](https://stackoverflow.com/questions/34386914/generate-unique-random-string-with-javascript) 's Code was used because I needed to learn how to generate a random UUID in node.js
- <!---How---> [Generate unique random string with Javascript](https://stackoverflow.com/questions/34386914/generate-unique-random-string-with-javascript)'s Code was modified by me by slicing the generated ID by 8 characters (as passed in the method parameter) and using the length to generate random number of bytes too

## Acknowledgments

* Google
* Render
* Brightspace
* TAs of CSCI 5709 and Professor Mosquera 
