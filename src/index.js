import { Observable } from 'rxjs';
/*
  Create an observable that emits 'Hello' and 'World' on subscription.
*/
const hello = Observable.create((observer) => {
  observer.next('Hello');
  observer.next('World');
});

const subscribe = hello.subscribe(val => console.log(val));
/*
 Output:
 >>> Hello
 >>> World
*/