var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let uniqueId = 1;
let reads = [
    {
        title: 'Refactoring',
        url: 'https://martinfowler.com/books/refactoring.html',
        category: 'Book',
        description: 'Techinques to refactor your code',
        isRead: false,
        id: uniqueId++
    },
    {
        title: 'Functional Programming',
        url: 'https://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming',
        category: 'Blog',
        description: 'Practical introduction to functional programming',
        isRead: true,
        id: uniqueId++
    }
];

/** Post the data for crickets */
app.post('/api/create', function (req, res) {
    console.log(req.body);
    let newRead = {
        title: req.body.title,
        url: req.body.url,
        category: req.body.category,
        isRead: req.body.isRead,
        description: req.body.description,
        id: uniqueId++
    }
    reads.push(newRead);
    res.json(newRead);
})

/**Get the player list */
app.get('/api/index', function (req, res) {
    res.json(reads);
})

app.patch('/api/update/:id', function (req, res) {
    const uniqueId = +req.params.id;
    console.log(req.params);
    let objectToBePatched = reads.find((read) => read.id === uniqueId);
    objectToBePatched.isRead = req.body.isRead;
    res.json(objectToBePatched);
})

app.put('/api/update', function (req, res) {
    const uniqueId = req.body.id;
    let objectToBeEdited = reads.find((read) => read.id === uniqueId);
    objectToBeEdited.title = req.body.title;
    objectToBeEdited.description = req.body.description;
    objectToBeEdited.url = req.body.url;
    objectToBeEdited.category = req.body.category;
    objectToBeEdited.isRead = req.body.isRead;
    res.json(objectToBeEdited);
})

/**Delete data */
app.delete('/api/delete/:id', function (req, res) {
    const indexToBeDeleted = reads.findIndex((read) => read.id === req.params.id);
    reads.splice(indexToBeDeleted, 1);
    res.json(req.params.id);
})

app.listen(3000, function () {
    console.log('App listening on port 3000!')
})