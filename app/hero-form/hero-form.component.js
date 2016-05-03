System.register(["angular2/core", "angular2/router", "../classes/hero/hero", "../services/hero/hero.service"], function(exports_1, context_1) {
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
    var core_1, router_1, hero_1, hero_service_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent(_heroService, _router) {
                    this._heroService = _heroService;
                    this._router = _router;
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new hero_1.Hero(0, '', this.powers[0], '');
                    this.submitted = false;
                    this.active = true;
                }
                HeroFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this._heroService.getHeroes().then(function (heroes) {
                        if (_this.model.id) {
                            _this._heroService.updateHero(_this.model);
                        }
                        else {
                            _this.model.id = heroes[heroes.length - 1].id + 1;
                            _this._heroService.newHero(_this.model);
                        }
                    });
                };
                HeroFormComponent.prototype.goToList = function () {
                    this._router.navigate(["Heroes"]);
                };
                HeroFormComponent.prototype.newHero = function () {
                    var _this = this;
                    this.model = new hero_1.Hero(42, "", "");
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: "hero-form",
                        templateUrl: "app/hero-form/hero-form.component.html"
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
                ], HeroFormComponent);
                return HeroFormComponent;
            }());
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
//# sourceMappingURL=hero-form.component.js.map