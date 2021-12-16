const {Observable, pipe} = require("rxjs")
const {map} = require("rxjs/operators")
const axios = require("axios")
 
function httpGet (url){
    return new Observable(subscriber => {
        axios.get(url)
            .then(resp =>{
                if(Array.isArray(resp.data)) {
                    resp.data.forEach(element => {
                        subscriber.next(element)
                    });
                }else {
                    subscriber.next(resp.data)

                }
            })
            .then(()=> subscriber.complete())
    })
}

httpGet("http://localhost:3001/films")
     .pipe(
        map(films => films.Actors)
    )
    .subscribe(dado => console.log(dado))
    