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
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.authUrl = 'https://api.instagram.com/oauth/authorize';
        _this.APP_SCOPE_DELIMITER = '+';
        _this.defaults = {
            responseType: 'token'
        };
        return _this;
    }
    return Instagram;
}(provider_1.OAuthProvider));
exports.Instagram = Instagram;
