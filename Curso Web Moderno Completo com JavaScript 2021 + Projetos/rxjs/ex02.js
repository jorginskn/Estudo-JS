const { Observable } =require('rxjs');
 
const obs = new Observable(subscriber => {
  subscriber.next('Rxjs');
  subscriber.next('é');
  subscriber.next('Muito');
  if(Math.random() > 0.5){
    subscriber.complete()
  }else {
      throw "Eita carai!!!"
  }
  setTimeout(() => {
    subscriber.next('Bom');
    subscriber.complete();
  }, 3000);
});
 
obs.subscribe (
    texto =>  console.log(texto),
    err => console.log(err),
    () => console.log('Fim!')
)

 
