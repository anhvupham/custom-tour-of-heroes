import {Component} from "angular2/core";
import {HeroesComponent} from "../heroes/heroes.component"
import {HeroService} from "../services/hero/hero.service";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from "../dashboard/dashboard.component"
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroFormComponent} from "../hero-form/hero-form.component";

@Component({
    selector: "my-app",
    template: `
    <div class="container">
  		<h1>{{title}}</h1>
  	    <nav>
  	  		  <a [routerLink]="['Heroes']">Heroes</a>
  	      	<a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['HeroForm']">Hero Form</a>
  	    </nav>
  		<router-outlet></router-outlet>
    </div>
		`,
    styleUrls: ["app/scaffolder/app.component.css"],
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: "/heroes",
        name: "Heroes",
        component: HeroesComponent
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: "/detail/:id",
        name: "HeroDetail",
        component: HeroDetailComponent
    },
    {
        path: "/heroform",
        name: "HeroForm",
        component: HeroFormComponent
    }
])

export class AppComponent {
    title = "Tour of Heroes";
}
