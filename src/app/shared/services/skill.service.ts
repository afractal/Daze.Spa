import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FocusArea } from '../types/focus_area';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import ISkill = Daze.Interfaces.ISkill;
import IApiService = Daze.Interfaces.IApiService;
// import IResponse = Daze.Interfaces.IResponse;

@Injectable()
export class SkillService implements IApiService {
    readonly requestUri = environment.apiUrl + 'skill/';
    constructor( @Inject(AuthService) private readonly _authService: AuthService,
        private readonly _http: HttpClient) { }

    getSkills() {
        return this._http
            .get<Daze.Interfaces.IResponse<Array<ISkill>>>(this.requestUri)
            .retry(3)
            .map(r => r._embedded)
            .exhaustMap(skills => skills);
    }

    getSkillsByFocusArea(focusArea: FocusArea) {
        return this._http
            .get<Daze.Interfaces.IResponse<Array<ISkill>>>(this.requestUri)
            .retry(3)
            .map(r => r._embedded)
            .exhaustMap(skills => skills)
            .filter(skill => skill.focusArea == focusArea);
    }

    findSkillById(id: string) {
        return this._http
            .get<Daze.Interfaces.IResponse<ISkill>>(`${this.requestUri}${id}`)
            .retry(3)
            .map(r => r._embedded);
    }

    updateSkill(skill: ISkill) {
        let headers = this._authService.generateHeadersFromStorage();
        headers.append('content-type', 'application/json');
        return this._http.put(this.requestUri, skill, {
            headers: headers
        });
    }

    createSkill(skill: ISkill) {
        let headers = this._authService.generateHeadersFromStorage();
        headers.append('content-type', 'application/json');
        return this._http.post(this.requestUri, skill, {
            headers: headers
        });
    }

    deleteSkill(id: string) {
        let headers = this._authService.generateHeadersFromStorage();
        return this._http.delete(`${this.requestUri}${id}`, {
            observe: 'response',
            headers: headers
        });
    }
}
