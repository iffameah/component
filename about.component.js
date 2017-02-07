"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var config_service_1 = require("./config.service");
var video_1 = require("./video");
var AboutComponent = (function () {
    function AboutComponent() {
        /*using the class var in data binding & using call fn for codes in Config*/
        this.mainHeading = config_service_1.Config.MAIN_HEADING;
        /*inserting information about the videos*/
        this.videos = [
            new video_1.Video(1, "Fairy Tail", "f9Q4BHPr674", "watch it on9 baby!"),
            new video_1.Video(2, "Deadpool", "4eP49zRmMFM", "suckerss!hahahahhaa"),
            new video_1.Video(3, "Civil War", "0NHyXQCKsaU", "CAPTAIN <3!"),
        ];
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: './components/about.component.html'
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map