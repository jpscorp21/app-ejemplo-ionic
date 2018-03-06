import { Injectable } from "@angular/core";

@Injectable()
export class AnimesService {

  private animes: Animes[] = [];

  constructor() {
  }

  query() {
    return this.animes;
  }

  add(anime: Animes) {
    this.animes.push(anime);
  }

  delete(anime: Animes) {
    this.animes.splice(this.animes.indexOf(anime), 1);
  }

}

export interface Animes {
  titulo: string;
  num_episodio: number;
  genero: string[];
}
