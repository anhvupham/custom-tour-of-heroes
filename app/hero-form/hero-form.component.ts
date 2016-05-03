import {Component} from "angular2/core";
import {Router} from "angular2/router"

import {Hero} from "../classes/hero/hero";
import {HeroService} from "../services/hero/hero.service";


@Component({
    selector: "hero-form",
    templateUrl: "app/hero-form/hero-form.component.html"
})

export class HeroFormComponent {
    constructor(
        private _heroService: HeroService,
        private _router: Router
    ) { }

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(0, '', this.powers[0], '');

    submitted = false;
    onSubmit() {
        this.submitted = true;
        this._heroService.getHeroes().then(heroes=>{
            if (this.model.id) {
                this._heroService.updateHero(this.model);
            } else {
                this.model.id = heroes[heroes.length - 1].id + 1;
                this._heroService.newHero(this.model);
            }
        });
    }

    goToList() {
        this._router.navigate(["Heroes"]);
    }

    active = true;
    newHero() {
        this.model = new Hero(42, "", "");
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
