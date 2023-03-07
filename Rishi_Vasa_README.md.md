<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 


# CSCI 5709 - Winter 2023 - Tutorial 2

* *Date Created*: 06 March 2023
* *Last Modification Date*: 06 March 2023


* *Deployed Netlify Application URL*: https://csci5709-rishivasa-tutorial4.netlify.app/

* *Tutorial 4 Private Git URL*: https://git.cs.dal.ca/vasa/csci5709_individual_b00902815/-/tree/tutorial4



## Authors

* Rishi Vasa (rishi.vasa@dal.ca) (B00902815) - Developer


## Getting Started

### Prerequisites

To have a local copy of this lab / assingnment / project up and running on your local machine, you will first need to install the following software / libraries / plug-ins

```
Node.js (npm and npx is required to install React)

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

1) Install Node.js
```
https://nodejs.org/en/download/

```

2) Run the following command in terminal:
```
> npx create-react-app app-name
```


## Deployment
1) Create an account on Netlify
2) Select Deploy Project --> Import from Git
3) Select GitLab (or whatever repository you chose)
4) Authorize Netlify to connect to your personal GitHub account
5) Select the branch you want to deploy from and configure build options
6) Site will be deployed on Netlify and a URL will be generated which you can modify (https://csci5709-rishivasa-tutorial4.netlify.app/)

## Built With
1) Node.js - JavaScript based Back End

2) React - Front End JavaScript Library

3) Netlify - Deployment Environment


## Sources Used

I have referred to the following documentation and sample code for completing the assignment:

1) For Dark Mode:
https://mui.com/material-ui/customization/dark-mode/

2) For Post Request: 
https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples

3) For get request: 
https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples

4) For useEffect and setting state:
https://reactjs.org/docs/hooks-reference.html#useeffect

5) For List iterating:
https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs

6) For useLocation:
https://reactrouter.com/en/main/hooks/use-location

### LoginForm.js

*Lines 19 - 31*

```
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "username": email, "password": password })
    };
    const response = await fetch('https://express-t4.onrender.com/api/login', requestOptions);
    const apiResponse = await response.json();

    if (apiResponse.message === "Login success!") {
        navigate("/profiles");
    } else {
        alert(apiResponse.message);
    }

```

The code above was created by adapting the code in [React + Fetch - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples) as shown below: 

```

async componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    const response = await fetch('https://reqres.in/api/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
}

```

- <!---Why---> [React + Fetch - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples) 's Code was used because I needed to learn how to send an HTTP POST request from frontend React js without using Node/Express
- <!---How---> [React + Fetch - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples) 's Code was modified by me as I did not use the deprecated componentDidMount method. Instead, I wrote the logic within the default function itself. Also, I changed the JSON request, fetch endpoint, and did not use state. I parsed the response directly and used it to navigate it to next page upon successful login


### ProfileList.js

*Lines 21 - 25*

```
    useEffect(() => {
        fetch('https://express-t4.onrender.com/api/users')
            .then(results => results.json())
            .then(data => { setUsersList(data) })
    }, []);

```

The code above was created by referring the code in both [React + Fetch - HTTP GET Request Examples](https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples) and [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#useeffect) as shown below: 

```

componentDidMount() {
    // Simple GET request using fetch
    fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => this.setState({ totalReactPackages: data.total }));
}


```

- <!---Why---> [React + Fetch - HTTP GET Request Examples](https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples) and [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#useeffect)  's Code was used because I needed to learn how to send an HTTP GET request on page render from frontend React js without using Node/Express
- <!---How---> [React + Fetch - HTTP GET Request Examples](https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples) and [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#useeffect)  's Code was modified by me as I did not use the deprecated componentDidMount method. Instead, I wrote the logic within the useEffect Hookso that it works as the page renders. Also, I changed the fetch endpoint, and used set function instead of setState.


## Acknowledgments

* Google
* Netlify
* Brightspace
* TAs of CSCI 5709 and Professor Mosquera 
