// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { throwError, Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable({
//     providedIn: 'root'
// })

// export class MovieService {
//     constructor(private http: HttpClient) { }
//     configs: Observable<any>;
//     theApi: string = 'http://www.omdbapi.com/?apikey=1393a712&t=titanic';

//     handleError(error: HttpErrorResponse) {
//         let errorMessage = 'Unknown error!';
//         if (error.error instanceof ErrorEvent) {
//             // Client-side errors
//             errorMessage = `Error: ${error.error.message}`;
//         } else {
//             // Server-side errors
//             errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//         }
//         return throwError(errorMessage);
//     }

//     getMovieDetails(movieName: string) {
//         const apikey = '1393a712';
//         const movie = movieName;
//         const url = this.theApi + '?apikey=' + apikey + '&t=' + movie;

//         return this.http.get(url).pipe(catchError(this.handleError));
//     }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, delay, map, publishReplay, refCount } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class MovieService {
    httpOptions = {
        headers: new HttpHeaders({
            'x-rapidapi-host': 'joke3.p.rapidapi.com',
            'x-rapidapi-key': 'be2b3e0d7cmshb5ad01829f9e0aep13bff7jsn4511e33d557e'
        })
    };
    constructor(private httpClient: HttpClient) { }
    configs: Observable<any>;
    theApi: string = 'http://www.omdbapi.com/';

    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }

    getMovieDetails(movieName: string) {
        const apikey = '1393a712';
        const movie = movieName;
        const url = this.theApi + '?apikey=' + apikey + '&t=' + movie;
        return this.httpClient.get(url).pipe(catchError(this.handleError));
    }
}
