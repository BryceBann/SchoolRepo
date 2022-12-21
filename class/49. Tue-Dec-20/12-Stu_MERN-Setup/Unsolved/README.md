# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:
start - will start the sever 

devolp - starts the front and back end at the same time to run promises concurrently

install - will go into the sever file and install packages as well as the client file

seed - will seed the database with data

build - will build the production ready application 
```json
"scripts": {
  "start": "node server/server.js",
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:
is set up so all front end request to our API with the servers URL prefixed 
```json
"proxy": "http://localhost:3001",
```

## Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:
whe nthe app is completed and ready to send out we build a production version 
```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:
will send up a wildcard route for any non-api request come in 
```js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
