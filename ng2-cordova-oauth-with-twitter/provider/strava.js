"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var provider_1 = require("../provider");
var Strava = /** @class */ (function (_super) {
    __extends(Strava, _super);
    function Strava() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.authUrl = 'https://www.strava.com/oauth/authorize';
        _this.defaults = {
            responseType: 'code'
        };
        return _this;
    }
    return Strava;
}(provider_1.OAuthProvider));
exports.Strava = Strava;
