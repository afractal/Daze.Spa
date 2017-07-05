import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import IApiService = Daze.Interfaces.IApiService;


@Injectable()
export class VersionService implements IApiService {
    readonly requestUri = environment.apiUrl + 'version/';
    constructor(private readonly _http: Http) { }

    getVersion() {
        return this._http.get(this.requestUri)
            .map(r => r.json() as string);
    }
}


