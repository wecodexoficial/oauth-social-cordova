"use strict";
// Spotify web api authorization guide and scopes
// https://developer.spotify.com/web-api/authorization-guide
// https://developer.spotify.com/web-api/using-scopes/
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
var Spotify = /** @class */ (function (_super) {
    __extends(Spotify, _super);
    function Spotify() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.authUrl = 'https://accounts.spotify.com/authorize';
        _this.APP_SCOPE_DELIMITER = ' ';
        _this.defaults = {
            responseType: 'token'
        };
        return _this;
    }
    return Spotify;
}(provider_1.OAuthProvider));
exports.Spotify = Spotify;
