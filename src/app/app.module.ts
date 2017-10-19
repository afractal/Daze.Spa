import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LeftNavbarComponent } from './leftnavbar/leftnavbar.component';
import { AvatarComponent } from './leftnavbar/avatar/avatar.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { PostComponent } from './dashboard/posts/post/post.component';
import { SkillsComponent } from './dashboard/skills/skills.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { AboutComponent } from './dashboard/about/about.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { PagerComponent } from './shared/pager/pager.component';
import { UpComponent } from './shared/up/up.component';

import { LoginComponent } from './admin/login/login.component'
import { AdminComponent } from './admin/admin.component';
import { AdminPostsComponent } from './admin/posts/admin.posts.component';
import { AdminPostsCreateComponent } from './admin/posts/create/admin.posts.create.component';
import { AdminPostsUpdateComponent } from './admin/posts/update/admin.posts.update.component';
import { AdminProjectsComponent } from './admin/projects/admin.projects.component';
import { AdminProjectsCreateComponent } from './admin/projects/create/admin.projects.create.component';
import { AdminProjectsUpdateComponent } from './admin/projects/update/admin.projects.update.component';
import { AdminSkillsComponent } from './admin/skills/admin.skills.component';
import { AdminSkillsCreateComponent } from './admin/skills/create/admin.skills.create.component';
import { AdminSkillsUpdateComponent } from './admin/skills/update/admin.skills.update.component';

import { AppComponent } from './app.component';
import { LoginGuard } from "./shared/guards/login.guard";
import { AuthService } from "./shared/services/auth.service";
import { MarkdownParserService } from './shared/services/markdown-parser.service';
import { MarkdownPipe } from './shared/pipes/markdown.pipe';
import { DomSanitizerPipe } from './shared/pipes/dom-sanitizer.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LeftNavbarComponent,
        AvatarComponent,
        PostsComponent,
        PostComponent,
        SkillsComponent,
        ProjectsComponent,
        AboutComponent,
        NotFoundComponent,
        SpinnerComponent,
        PagerComponent,
        UpComponent,
        LoginComponent,
        AdminComponent,
        AdminPostsComponent,
        AdminPostsCreateComponent,
        AdminPostsUpdateComponent,
        AdminProjectsComponent,
        AdminProjectsCreateComponent,
        AdminProjectsUpdateComponent,
        AdminSkillsComponent,
        AdminSkillsCreateComponent,
        AdminSkillsUpdateComponent,
        MarkdownPipe,
        DomSanitizerPipe
    ],
    providers: [
        HttpClient,
        MarkdownParserService,
        AuthService,
        LoginGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
