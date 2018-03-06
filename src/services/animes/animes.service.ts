import { Injectable } from "@angular/core";

@Injectable()
export class AnimesService {

  animes: Animes;

  constructor() {
  }


}

export interface Animes {
  titulo: string;
  num_episodio: number;
  genero: string[];
}
