import {Component, OnInit} from "angular2/core";
import {HeroService} from "../services/hero/hero.service";
import {Hero} from "../classes/hero/hero";
import {Router} from "angular2/router";

@Component({
    selector: "my-dashboard",
    templateUrl: "app/dashboard/dashboard.component.html",
    styleUrls: ["app/dashboard/dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    constructor(
        private _heroService: HeroService,
        private _router: Router) {
    }
    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }
    goToDetail(hero: Hero) {
        let link = ["HeroDetail", { id: hero.id }];
        this._router.navigate(link);
    }
}
