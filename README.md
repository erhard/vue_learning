# login

Login is a frontend webcomponent for login.
You simply load a javascriptfile and use a tag (my-login) to get the login. There a examples and also an example backend inluded in this 
repository.

If you simply wnat to use it You only need to download one file :  app.js from the dist folder.
An example for the usage is in the index.html in the dist folder.



###Testserver

```
cd attic
yarn install
cd server
yarn server.js
```

A Testserver is running on port 9001. This server exposes the url /login as post which accepts username and password in json and returns a status and a jwt token. This server is not for production. To run the demo the server must run.


###The frontend Webcomponent
The frontend is an example plain vanilla javascript in an index.html file which uses the login.
To start the example index.html start the pageserver.

```
cd attic
yarn install
cd server
yarn pageserver.js
```
Now a server runs in port 8080
Now go to your browser and enter localhost:8080


##Minimal
Just download app.js from dist-folder and put it your html file.

##Configuration
To configure the login you can set params.

| parameter     | sense                | example                       |
| ------------- |:--------------------:| -----------------------------:|
| backend       | uri retruns the token| backend='localhost:9001/login'|
| register      | switch for register  |                               |
|               | not yet implemented  | register='true'               |
| locStore      | writes the jwt token | locStore= 'false'             |
|               | not yet implemented  |                               |

###CSS Configuration
The css has a default configuration which is the mdc (material webcomponents) basis.
[material-componens](https://material-components.github.io/material-components-web-catalog/#/)
It can be customized to your needs by overwirting the classes in your own file. 
To do this You have to checkout the project, setup it, change the public/individual.css (referenece to another file) and compile it.

Within that file you can overwrite all css classes defined in the mdc-Components by adding a double-dash before the classname adn sourround ist in a component name block. (For detailes see file public/individual_styles.css.

##The communication with your application

The loginComponent emits a message wether the login succeeded or not.
If ok it emit the content of the jwt - token as hash (Whatever the auth server putted in the token). Look at the index.html in the dist folder, there is vanilla js code which caches the event.
Additionally it stores the token on the localStorage

## The Backend
What You need is a backend  In this LoginFrontend a Testbackend is included which You can use as guideline. 

The login frontend expects a 403 if the login is denied.
or a status 200 when the access is passed.




