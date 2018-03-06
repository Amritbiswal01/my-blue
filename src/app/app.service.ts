import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AppService{
    constructor(private http: Http){   
    }

    storeData(data: any[]){
        const headers = new Headers({'Content-Type':'application/json'})
        return this.http.post('url',data, {headers: headers});
    }

    getData(){
        return this.http.get('url');
    }

}