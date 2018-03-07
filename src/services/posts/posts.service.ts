import { Injectable } from "@angular/core";
import { RestApiService } from "../rest-api.service";

@Injectable()
export class PostsService {
  url: string;
  constructor(private api: RestApiService) {
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  query() {
    return this.api.get(this.url, "/");
  }
}
