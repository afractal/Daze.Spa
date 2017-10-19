import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/count';
import IPost = Daze.Interfaces.IPost;
import ITag = Daze.Interfaces.ITag;
import IApiService = Daze.Interfaces.IApiService;
import IResponse = Daze.Interfaces.IResponse;

@Injectable()
export class PostService implements IApiService {
    readonly requestUri = environment.apiUrl + 'post/';

    constructor(
        @Inject(AuthService) private readonly _authService: AuthService,
        private readonly _http: HttpClient) { }

    getPosts() {
        return this._http
            .get<IResponse<Array<IPost>>>(this.requestUri)
            .retry(2)
            .map(r => r._embedded)
            .exhaustMap(posts => posts);
    }

    getPagedPosts(page: number, pageSize: number) {
        return this._http
            .get<IResponse<Array<IPost>>>(`${this.requestUri}${page}/${pageSize}`)
            .map(r => r._embedded)
            .exhaustMap(posts => posts);
    }

    async getPostsArrayifiedAsync() {
        return await this._http
            .get<IResponse<Array<IPost>>>(this.requestUri)
            .retry(2)
            .map(res => res._embedded)
            .toPromise();
    }

    findPostById(id: string) {
        return this._http
            .get<IResponse<IPost>>(`${this.requestUri}${id}`)
            .retry(2)
            .map(res => res._embedded);
    }

    findPostBySlug(slug: string) {
        return this._http
            .get<IResponse<IPost>>(`${this.requestUri}slug/${slug}`)
            .retry(2)
            .map(res => res._embedded);
    }

    async isPaginatableAsync(numberOfItemsPerPage: number) {
        const postCount = await this._http
            .get<IResponse<Array<IPost>>>(`${this.requestUri}`)
            .map(r => r._embedded)
            .exhaustMap(posts => posts)
            .count()
            .toPromise();

        return (postCount > numberOfItemsPerPage);
    }

    createPost(post: IPost) {
        let headers = this._authService.generateHeadersFromStorage();
        headers.append('content-type', 'application/json');
        return this._http.post(this.requestUri, post, {
            headers: headers
        });
    }

    updatePost(post: IPost) {
        let headers = this._authService.generateHeadersFromStorage();
        headers.append('content-type', 'application/json');
        return this._http.put(this.requestUri, post, {
            headers: headers
        });
    }

    deletePost(id: string) {
        let headers = this._authService.generateHeadersFromStorage();
        return this._http.delete(`${this.requestUri}${id}`, {
            observe: 'response',
            headers: headers
        });
    }
}
