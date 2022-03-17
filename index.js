const express =require("express");
const parser = require("body-parser");

const app = express();

app.use(express.json());
app.use(parser.json());

app.get('/', (req, res) => res.send('Hello, my name is Callum!'));

let names = ['Callum', 'Conor', 'Tasnima', 'Keira', 'Aidan'];

const error = (err, req, res, next) => {
    console.log("error");
    return next();
};

app.use((err, req, res, next) => { 
    console.log("error");
    return next();
});

app.use((req, res, next) => {
    console.log(req.method, req.url, new Date())
    return next();
});

app.use("*", (req, res, next) => {
    return next({status: 404, message: "Invalid URL"});
});

app.use((err, req, res, next) => {
    res.status(err.status).send(err.message);
});

const server = app.listen(4494, () => {
    console.log("Server successfully started on port", server.address().port);
});