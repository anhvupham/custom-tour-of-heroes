System.register(["angular2/core", "../heroes/heroes.component", "../services/hero/hero.service", 'angular2/router', "../dashboard/dashboard.component", "../hero-detail/hero-detail.component", "../hero-form/hero-form.component", "../services/logger/logger.service"], function(exports_1, context_1) {
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
    var core_1, heroes_component_1, hero_service_1, router_1, dashboard_component_1, hero_detail_component_1, hero_form_component_1, logger_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Tour of Heroes";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        template: "\n    <div class=\"container\">\n  \t\t<h1>{{title}}</h1>\n  \t    <nav>\n  \t  \t\t  <a [routerLink]=\"['Heroes']\">Heroes</a>\n  \t      \t<a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['HeroForm']\">Hero Form</a>\n  \t    </nav>\n  \t\t<router-outlet></router-outlet>\n    </div>\n\t\t",
                        styleUrls: ["app/scaffolder/app.component.css"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [hero_service_1.HeroService, router_1.ROUTER_PROVIDERS, logger_service_1.LoggerService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: "/heroes",
                            name: "Heroes",
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: "/dashboard",
                            name: "Dashboard",
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: "/detail/:id",
                            name: "HeroDetail",
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: "/heroform",
                            name: "HeroForm",
                            component: hero_form_component_1.HeroFormComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map