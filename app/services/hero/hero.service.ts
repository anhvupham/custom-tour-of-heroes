import {Injectable} from "angular2/core";
import {Hero} from "../../classes/hero/hero";
import {HEROES} from "../../data/mock-heroes"
import {LoggerService} from "../logger/logger.service";

@Injectable()
export class HeroService {
    constructor(private _logger: LoggerService) { }
    getHeroes() {
        this._logger.log("getHeroes");
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
        this._logger.log("getHeroesSlowly");
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }
    getHero(id: number) {
        this._logger.log("getHero");
        return Promise.resolve(HEROES).then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
    newHero(hero: Hero) {
        this._logger.log("newHero");
        HEROES.push(hero);
    }
    updateHero(hero: Hero) {
        let existedHero = HEROES.filter(h => h.id === hero.id)[0];
        existedHero = hero;
    }
}
