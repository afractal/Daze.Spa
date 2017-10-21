import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import IPost = Daze.Interfaces.IPost;

@Component({
    selector: 'posts',
    providers: [PostService],
    templateUrl: './posts.template.html',
    styleUrls: ['./posts.style.sass']
})
export class PostsComponent implements OnInit {
    private static _currentPage = 1;
    private readonly _numberOfItemsPerPage = 2;
    posts = new Array<IPost>();
    isLoading = true;
    isPaginatable = false;
    constructor(private readonly _postService: PostService) { }

    onLoadmore() {
        ++PostsComponent._currentPage;

        this._postService.getPagedPosts(PostsComponent._currentPage, this._numberOfItemsPerPage)
            .subscribe(p => this.posts.push(p),
            _ => _,
            () => this.isLoading = false);
    }

    async ngOnInit() {
        this.isPaginatable = await this._postService.isPaginatableAsync(this._numberOfItemsPerPage);

        this._postService.getPagedPosts(1, this._numberOfItemsPerPage)
            .subscribe(p => this.posts.push(p),
            _ => _,
            () => this.isLoading = false);
    }
}
