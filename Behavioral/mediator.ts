// Middleware or broker
class Airplane {
    land() {}
}

class Ruunway {
    clear: boolean;
}

const runway25A = new Ruunway();
const runway25B = new Ruunway();
const runway7 = new Ruunway();

const a = new Airplane();
const b = new Airplane();
const c = new Airplane();

// Creating mediator class
class ControlCenter {
    clearForLanding(runway: Ruunway, plane: Airplane) {
        if (runway.clear) {
            console.log('Plane ${plane} is clear for landing');
        }
    }
}
// More practical example
// In the Express JS framework there is Request Middleware Response model

import express from 'express';
const app = express();

//Incoming requests and outgoinmg responses
// Middleware stays in the middle by intercepting every request 
// and transforms it into proper format for the response
function logger(request, response, next) {
    console.log('Request Type:', request.method);
    next();
}
app.use(logger);
app.get('/', (request, response) => {
    response.send('Hellow world!');
});
app.get('/about', (request, response) => {
    response.send('about');
});
