import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/retry';
import IProject = Daze.Interfaces.IProject;
import IApiService = Daze.Interfaces.IApiService;
// import IResponse = Daze.Interfaces.IResponse;

@Injectable()
export class ProjectService implements IApiService {
    readonly requestUri = environment.apiUrl + 'project/';
    constructor( @Inject(AuthService) private readonly _authService: AuthService,
        private readonly _http: HttpClient) { }

    getProjects() {
        return this._http
            .get<Daze.Interfaces.IResponse<Array<IProject>>>(this.requestUri)
            .retry(3)
            .map(r => r._embedded)
            .exhaustMap(projects => projects);
    }

    findProjectById(id: string) {
        return this._http
            .get<Daze.Interfaces.IResponse<IProject>>(`${this.requestUri}${id}`)
            .retry(3)
            .map(r => r._embedded);
    }

    createProject(project: IProject) {
        let headers = this._authService.generateHeadersFromStorage();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.requestUri, project, {
            headers: headers,
            withCredentials: true
        });
    }

    updateProject(project: IProject) {
        let headers = this._authService.generateHeadersFromStorage();
        headers.append('Content-Type', 'application/json');
        return this._http.put(this.requestUri, project, {
            headers: headers
        });
    }

    deleteProject(id: string) {
        let headers = this._authService.generateHeadersFromStorage();
        return this._http.delete(`${this.requestUri}${id}`, {
            observe: 'response',
            headers: headers
        });
    }
}

