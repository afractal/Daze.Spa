import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import IApiService = Daze.Interfaces.IApiService;
import ITag = Daze.Interfaces.ITag;

@Injectable()
export class TagService implements IApiService {
    readonly requestUri = environment.apiUrl + 'tag/';
    constructor(private readonly _http: Http) { }

    getTags() {
        return this._http.get(this.requestUri)
            .map(r => r.json() as Array<ITag>)
            .exhaustMap(tags => tags);
    }
}

