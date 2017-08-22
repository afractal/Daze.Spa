import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import IApiService = Daze.Interfaces.IApiService;

@Injectable()
export class VersionService implements IApiService {
    readonly requestUri = environment.apiUrl + 'version/';
    constructor(private readonly _http: HttpClient) { }

    getVersion() {
        return this._http
            .get(this.requestUri, {
                observe: 'body',
                responseType: "text"
            });
    }
}


