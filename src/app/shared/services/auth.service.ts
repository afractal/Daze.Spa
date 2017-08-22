import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../../shared/models/login.model';
import { environment } from '../../../environments/environment';
import IApiService = Daze.Interfaces.IApiService;
import ILoginResponse = Daze.Interfaces.ILoginResponse;

@Injectable()
export class AuthService implements IApiService {
    readonly requestUri = environment.apiUrl + 'authenticate/';
    readonly loginRequestUri = environment.apiUrl + 'login/';

    constructor(private readonly _http: HttpClient) { }

    authenticate(model: LoginModel) {
        const encodedCredentials = btoa(`${model.username}:${model.password}`)
        let headers = new HttpHeaders();
        headers.append('content-type', 'application/json');
        headers.append('authorization', `Basic ${encodedCredentials}`);
        return this._http.post<boolean>(this.requestUri, null, {
            headers: headers
        })
            .map(r => r);
    }

    login(model: LoginModel) {
        let headers = new HttpHeaders();
        headers.append('content-type', 'application/json');

        this._http.post<ILoginResponse>(this.loginRequestUri, model, {
            headers: headers
        })
            .map(r => r)
            .subscribe(r => {
                localStorage.removeItem('currentuser');
                if (r.success == 'True') {
                    const currentUserified = JSON.stringify({
                        username: model.username,
                        password: r.password
                    });
                    localStorage.setItem('currentuser', currentUserified);
                }
            });
    }


    generateHeadersFromStorage() {
        const currentUser = JSON.parse(localStorage.getItem('currentuser')) as LoginModel;
        if (currentUser) {
            let headers = new HttpHeaders();
            headers.append('authorization', `Basic ${currentUser.password}`);
            return headers;
        }
        console.log("Could not generate headers, the user is not logged in");
        return null;
    }
}


