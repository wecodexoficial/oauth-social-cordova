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
var Meetup = /** @class */ (function (_super) {
    __extends(Meetup, _super);
    function Meetup(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.authUrl = 'https://secure.meetup.com/oauth2/authorize/';
        _this.defaults = {
            responseType: 'token'
        };
        return _this;
    }
    return Meetup;
}(provider_1.OAuthProvider));
exports.Meetup = Meetup;
