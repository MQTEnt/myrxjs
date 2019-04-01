import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { XMLHttpRequest } from 'xmlhttprequest';

function createXHR() {
  return new XMLHttpRequest();
}

const obs$ = ajax(
		{
			createXHR,
			url: 'http://localhost:8000/api/example', //Host from other Server
			crossDomain: true,
			withCredentials: false,
			method: 'GET',
			responseType: 'json'
		}).pipe(
			map(result => result.response),
			catchError(e => console.log('error: ', e))
		);
obs$.subscribe(result => console.log(result));