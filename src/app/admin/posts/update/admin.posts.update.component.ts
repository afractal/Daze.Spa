import { Component, OnInit } from '@angular/core'
import { PostService } from '../../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Post } from '../../../shared/models/post.model';

@Component({
    selector: 'adminPostsUpdate',
    providers: [PostService, FormBuilder],
    templateUrl: './admin.posts.update.template.html',
    styleUrls: ['./admin.posts.update.style.css']
})
export class AdminPostsUpdateComponent implements OnInit {
    post: Post = null;
    postId: string;
    updatePostForm: FormGroup;
    constructor(private readonly _postService: PostService,
        private readonly _router: ActivatedRoute,
        private readonly _formBuilder: FormBuilder) { }

    onFormSubmit(event: MouseEvent) {
        if (this.post) {
            this.post.id = this.postId;
            this._postService.updatePost(this.post)
                .subscribe(p => console.log('p was added, ', p),
                err => console.log(err),
                () => { });
        }
    }

    onValueChanged(data?: Post) {
        this.post = !!data ? data : new Post();
    }

    populateForm(post?: Post) {
        if (post) {
            this.updatePostForm = this._formBuilder.group({
                title: [post.title, Validators.required],
                content: [post.content, Validators.required]
            });
            this.updatePostForm.valueChanges.subscribe(data => this.onValueChanged(data));
            this.onValueChanged(); // (re)set validation messages now
        } else {
            this.updatePostForm = this._formBuilder.group({
                title: new FormControl(),
                content: new FormControl()
            });
        }
    }

    ngOnInit() {
        this.populateForm();
        this._router.params.subscribe(par => {
            const postId = par['id'];
            this.postId = postId;
            this._postService.findPostById(postId)
                .subscribe(p => {
                    this.post = p;
                    this.populateForm(p);
                });
        });
    }
}
