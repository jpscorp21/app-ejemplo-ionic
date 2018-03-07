import { Injectable } from "@angular/core";
import { Animes } from '../../models/animes';

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
