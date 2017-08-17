// Imports
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class BaseService {

    private baseUri: string = 'http://cpt.innovation.euromonitor.local/techradarservice'

    constructor(private http: Http) {

    }

    protected post(uri: string, obj: any): Observable<Response> {
        const headers = new Headers();

        const jwtToken = localStorage.getItem('jwt.token');

        if (jwtToken !== null || jwtToken === '') {
            headers.append('Authorization', 'Bearer ' + jwtToken);
        }

        return this.http.post(`${this.baseUri}${uri}`, obj, {
            headers,
        });
    }

    protected get(uri: string): Observable<Response> {
        const headers = new Headers();

        const jwtToken = localStorage.getItem('jwt.token');

        if (jwtToken !== null || jwtToken === '') {
            headers.append('Authorization', 'Bearer ' + jwtToken);
        }

        return this.http.get(`${this.baseUri}${uri}`, {
            headers,
        });
    }

    protected getExternal(uri: string): Observable<Response> {
        const headers = new Headers();

        const jwtToken = localStorage.getItem('jwt.token');

        if (jwtToken !== null || jwtToken === '') {
            headers.append('Authorization', 'Bearer ' + jwtToken);
        }

        return this.http.get(`${uri}`, {
            headers,
        });
    }
}