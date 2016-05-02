import {Component} from "angular2/core";
import {NgForm} from "angular2/common";
import {Hero} from "../classes/hero/hero";

@Component({
    selector: "hero-form",
    templateUrl: "app/hero-form/hero-form.component.html"
})

export class HeroFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;
    onSubmit() { this.submitted = true; }

    active = true;
    newHero() {
        this.model = new Hero(42, "", "");
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
