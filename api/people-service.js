const fs = require('fs');
const HTTP_NOT_FOUND = 404;
const HTTP_OK = 200;

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        let aPeople = this.peoples[id]
        //== n'est pas eslint mais ici je n'avais pas le choix
        if (aPeople == null) {
            return HTTP_NOT_FOUND;
        }
        this.peoples[id] = people;
        return HTTP_OK;
    }
    

    // j'ai retiré le parametre filter car je n'ai pas reussit a le traiter
    getPeople() {
        return this.peoples;
    }
}