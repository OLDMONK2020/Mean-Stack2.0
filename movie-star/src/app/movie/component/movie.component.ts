import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    title = 'movie-star';
    movieName: any = "";
    allData: any;
    searchHistory: Array<string> = [];
    favMovie: Array<string> = [];

    constructor(private movieService: MovieService) { }

    ngOnInit() {

    }

    searchMovie() {
        if (this.movieName) {
            this.movieService.getMovieDetails(this.movieName)
                .subscribe(res => {
                    if (res) {
                        this.allData = res;
                        this.searchHistory.push(this.allData.Title);
                    }
                }, error => {
                    alert(error);
                });
        }
    }

    addToFav(){
        this.favMovie.push(this.allData.Title);
    }
}
