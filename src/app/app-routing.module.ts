import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './dashboard/posts/posts.component';
import { PostComponent } from './dashboard/posts/post/post.component';
import { ProjectsComponent } from './dashboard/projects/projects.component';
import { AboutComponent } from './dashboard/about/about.component';
import { SkillsComponent } from './dashboard/skills/skills.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPostsComponent } from './admin/posts/admin.posts.component';
import { AdminPostsCreateComponent } from './admin/posts/create/admin.posts.create.component';
import { AdminProjectsComponent } from './admin/projects/admin.projects.component';
import { AdminPostsUpdateComponent } from './admin/posts/update/admin.posts.update.component';
import { AdminProjectsCreateComponent } from './admin/projects/create/admin.projects.create.component';
import { AdminProjectsUpdateComponent } from './admin/projects/update/admin.projects.update.component';
import { AdminSkillsUpdateComponent } from './admin/skills/update/admin.skills.update.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { AdminSkillsCreateComponent } from './admin/skills/create/admin.skills.create.component';
import { AdminSkillsComponent } from './admin/skills/admin.skills.component';
import { LoginGuard } from './shared/guards/login.guard';

const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: 'posts/:slug',
        component: PostComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/posts',
        component: AdminPostsComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/posts/create',
        component: AdminPostsCreateComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/posts/update/:id',
        component: AdminPostsUpdateComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/projects',
        component: AdminProjectsComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/projects/create',
        component: AdminProjectsCreateComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/projects/update/:id',
        component: AdminProjectsUpdateComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/skills',
        component: AdminSkillsComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/skills/create',
        component: AdminSkillsCreateComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'admin/skills/update/:id',
        component: AdminSkillsUpdateComponent,
        canActivate: [LoginGuard]
    },
    {
        path: '',
        component: PostsComponent,
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

