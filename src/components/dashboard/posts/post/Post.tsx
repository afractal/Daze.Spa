import * as React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

type PostProps = {
    slug: string
    title: string
    coverImage: string | undefined
    heroContent: string | undefined
};

export const Post = (props: PostProps) => (
    <li>
        <article className="postArticle card">
            <div className="postArticleImage">
                <img src={props.coverImage} alt="post image" />
            </div>
            <div className="postArticleBody">
                <h3 className="postArticleBodyTitle">
                    <Link to={`/posts/${props.slug}`} />
                    <span>{props.title}</span>
                </h3>
                <hr />
                <p className="postArticleBodyDetails">
                    {props.heroContent}
                </p>
            </div>
        </article>
    </li >
);

// <spinner [isSpinning] = "isLoading" ></spinner>
//     <article * ngIf="!!post && !isLoading" class="post-article markdown-body" >
//         <h2 class="post-article-title "> {{ post.title }} </h2>
//         <p class="post-article-content " [innerHTML] = "post.content | markdown | sanitize"></p>
//             <ul * ngIf=" !!post.Tags " class="post-article-tags ">
//                 <li * ngFor="let tag of post.tags" >
//                     <a> {{ tag.tagName }} </a>
//             </li>
//         </ul>
//     </article>

/*
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
*/
