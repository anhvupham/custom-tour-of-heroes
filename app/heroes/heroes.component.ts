import {Component, OnInit} from 'angular2/core';
import {Hero} from "../classes/hero/hero"
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../services/hero/hero.service"
import {Router} from "angular2/router";
import {NewHeroComponent} from "../new-hero/new-hero.component";


@Component({
    selector: 'my-heroes',
    templateUrl: "app/heroes/heroes.component.html",
    styleUrls: ["app/heroes/heroes.component.css"],
	directives: [NewHeroComponent]
})

export class HeroesComponent implements OnInit {
    ngOnInit() {
        this.getHeroes();
    }
    constructor(
        private _heroService: HeroService,
        private _router: Router) {
    }
    selectedHero: Hero;
    heroes: Hero[];
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    goToDetail(hero: Hero) {
        let link = ["HeroDetail", { id: hero.id }];
        this._router.navigate(link);
    }
}
