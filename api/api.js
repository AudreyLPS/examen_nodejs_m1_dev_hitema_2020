const express = require('express');
const bodyParser = require('body-parser');
const v1 = express.Router();

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1", v1);

//recupere l'ensemble des personnes
v1.get('/people', async (request, response) => {
    const peoples = peopleService.getPeople(request.query)
    response.send(peoples);
});

//recupere une personne + modification si l'objet people contient un attribut name >0
v1.put('/people/:id', async (request, response) => {
    const id = request.params.id;
    const people = request.body;

    const isValid = people.name.length > 0;

    const HTTP_BAD_REQUEST = 400; 
    isValid ? response.sendStatus(peopleService.updatePeople(id, people)) : response.sendStatus(HTTP_BAD_REQUEST);
    
});


module.exports = app;