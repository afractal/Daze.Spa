import { Component } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import IPost = Daze.Interfaces.IPost;

@Component({
    selector: 'adminPosts',
    providers: [PostService],
    styleUrls: ['../admin.style.css'],
    templateUrl: './admin.posts.template.html'
})
export class AdminPostsComponent {
    posts = new Array<IPost>();
    selectedPost: IPost | null | undefined = null;
    isLoading = true;
    constructor(private readonly _postService: PostService) { }

    onPostClick(id: string) {
        this.selectedPost = this.posts.find(p => p.id == id);
    }

    onPostDelete(id: string) {
        const confirmation = confirm("Are you sure?");
        if (confirmation) {
            this._postService.deletePost(id)
                .subscribe(res => (res.status == 200) ?
                    console.log("post deleted") :
                    console.log("error"));
            this.posts = this.posts.filter(p => p.id != id);
            this.selectedPost = null;
        }
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(p => this.posts.push(p),
            _ => _,
            () => this.isLoading = false);
    }
}

