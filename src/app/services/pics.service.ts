import { Injectable } from '@angular/core';
import { Pic } from '../models/pic';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class PicsService {

    // DI
    public constructor(private httpClient: HttpClient) { }

    public getAllPics(): Observable<Pic[]> {
        //Returns Observable object:
        // return this.httpClient.get<Pic[]>("/assets/json/products.json");
        return this.httpClient.get<Pic[]>("https://jsonplaceholder.typicode.com/photos");

    }
}
//==================================

