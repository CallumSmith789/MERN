const router = require("express").Router();
const Person = require("../db");

router.get('/getAll', (req, res, next) => {
    Person.find().then((results) =>  {
         return res.json(results);
    }).catch(err => next({status: 400, message: err.message}));
});

router.get('/get/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);

    if (id == null || undefined || id === NaN) 
        return next({ status: 400, message: "Invalid id" });
    else if (id > data.length) 
        return next({ status: 404, message: "No person found with id " + id });
    
    res.json(data[id]);
});

router.post('/create', (req, res, next) => {
    const Person = req.body;
    new Person(person).save().then(() => {
        res.status(201).send("Successfully created");
    }).catch(err => next({status: 400, message: err.message}));
});

router.put('/replace/:index', (req, res,) => {
    const newPerson = req.query;
    const id = Number.parseInt(req.params.id);

    if (id === null || undefined || id === NaN) 
        return next({ status: 400, message: "Invalid id" });
    else if (id > data.length) 
        return next({ status: 404, message: "No person found with id " + id });
    
    data.splice(id, 1, newPerson);
    res.status(202).json(data[id]);
});

router.get('/remove/:id', (req, res, next) => {
    const id = Number.parseInt(req.params.id);

    if (id === null || undefined || id === NaN) 
        return next({ status: 400, message: "Invalid id" });
    else if (id > data.length) 
        return next({ status: 404, message: "No person found with id " + id });

    data.splice(id, 1);
    res.sendStatus(204);
});

module.exports = router;