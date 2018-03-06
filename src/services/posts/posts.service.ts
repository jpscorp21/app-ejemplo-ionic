import { Injectable } from "@angular/core";
import { RestApiService } from "../rest-api.service";

@Injectable()
export class PostsService {
  constructor(private api: RestApiService) {
    this.api.url = "https://jsonplaceholder.typicode.com/posts";
  }

  query() {
    return this.api.get("/");
  }
}
