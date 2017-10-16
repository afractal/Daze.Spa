import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../shared/services/post.service';
import IPost = Daze.Interfaces.IPost;

@Component({
    selector: 'post',
    providers: [PostService],
    templateUrl: './post.template.html',
    styleUrls: ['./post.style.css']
})
export class PostComponent implements OnInit {
    post: IPost | null = null;
    isLoading = true;

    constructor(private readonly _postService: PostService,
        private readonly _router: ActivatedRoute) { }

    ngOnInit() {
        this._router.params.subscribe(p => {
            const postSlug = p['slug'];

            this._postService.findPostBySlug(postSlug)
                .subscribe(post => {
                    this.post = post;
                    this.isLoading = false;
                });
        });
    }
}


