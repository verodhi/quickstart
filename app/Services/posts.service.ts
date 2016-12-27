import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'fxjsadd/operator/map'

@Injectable()

export class PostsService {
    constructor(private http: Http){
        console.log('PostServices initialized ... ')
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}