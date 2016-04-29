import {Component} from "angular2/core";
import {HeroService} from "../services/hero/hero.service"
import {Hero} from "../classes/hero/hero";

@Component({
    selector: "new-hero",
    template: `
		<h3>Create new hero</h3>
		<input #name (keyup.enter)="create(name.value)" class="form-control" />
		<button (click)="create(name.value)" class="btn btn-default">Create</button>
		`
})

export class NewHeroComponent {
    constructor(
        private _heroService: HeroService
    ) { }
    create(name: string) {
        this._heroService.getHeroes().then(heroes => {
            let id = heroes[heroes.length - 1].id + 1;
            let newhero: Hero = {
                id: id,
                name: name
            };
            this._heroService.newHero(newhero);
        });
    }
}
