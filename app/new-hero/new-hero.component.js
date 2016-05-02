System.register(["angular2/core", "../services/hero/hero.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1;
    var NewHeroComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            NewHeroComponent = (function () {
                function NewHeroComponent(_heroService) {
                    this._heroService = _heroService;
                }
                NewHeroComponent.prototype.create = function (name) {
                    this._heroService.getHeroes().then(function (heroes) {
                        var id = heroes[heroes.length - 1].id + 1;
                        // let newhero: Hero = {
                        //     id: id,
                        //     name: name
                        // };
                        // this._heroService.newHero(newhero);
                    });
                };
                NewHeroComponent = __decorate([
                    core_1.Component({
                        selector: "new-hero",
                        template: "\n\t\t<h3>Create new hero</h3>\n\t\t<input #name (keyup.enter)=\"create(name.value)\" class=\"form-control\" />\n\t\t<button (click)=\"create(name.value)\" class=\"btn btn-default\">Create</button>\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService])
                ], NewHeroComponent);
                return NewHeroComponent;
            }());
            exports_1("NewHeroComponent", NewHeroComponent);
        }
    }
});
//# sourceMappingURL=new-hero.component.js.map