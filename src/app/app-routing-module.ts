import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { AuthGaurd } from "./auth-guard.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent },
      ]
    },
    {
      path: 'servers',canActivateChild:[AuthGaurd], component: ServersComponent, children: [
        { path: ':id/edit', component: EditServerComponent },
        { path: ':id', component: ServerComponent }
      ]
    },
    {path: 'not-found', component: PageNotFoundComponent, data: {message: "hello, this is an example for how to pass data in the route."}},
    {path: '**', redirectTo: 'not-found'}
  ]

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
  })
  
  export class AppRoutingModule {

  }