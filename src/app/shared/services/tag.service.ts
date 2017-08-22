import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import IApiService = Daze.Interfaces.IApiService;
import ITag = Daze.Interfaces.ITag;
// import IResponse = Daze.Interfaces.IResponse;

@Injectable()
export class TagService implements IApiService {
    readonly requestUri = environment.apiUrl + 'tag/';
    constructor(private readonly _http: HttpClient) { }

    getTags() {
        return this._http
            .get<Daze.Interfaces.IResponse<Array<ITag>>>(this.requestUri)
            .map(r => r._embedded)
            .exhaustMap(tags => tags);
    }
}

