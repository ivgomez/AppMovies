import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable()
export class PeliculasService {

  private apikey:string = "461fefc7fdae1406bc5a221d14a0e948";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  constructor( private jsonp:Jsonp ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map( res=> res.json()));
                
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).pipe(map( res=> res.json()));
                
  }

}
