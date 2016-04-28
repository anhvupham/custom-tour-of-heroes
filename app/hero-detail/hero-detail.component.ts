import {Component, OnInit} from "angular2/core";
import {Hero} from "../classes/hero/hero";
import {RouteParams} from "angular2/router";
import {HeroService} from "../services/hero/hero.service";

@Component({
    selector: "my-hero-detail",
    template: `
		<div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: {{hero.id}}</label></div>
			<div>
				<label>name: </label>
				<input type="text" placeholder="Name" [(ngModel)]="hero.name" />
			</div>
		</div>
		<button (click)="goBack()">Back</button>
		`,
    styleUrls: ["app/hero-detail/hero-detail.component.css"]
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;
    ngOnInit() {
        let id = +this._routeParams.get("id");
        this._heroService.getHero(id).then(hero => this.hero = hero);
    }
    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }
    goBack() {
        window.history.back();
    }
}
