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
var FacebookOauth = /** @class */ (function (_super) {
    __extends(FacebookOauth, _super);
    function FacebookOauth(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, options) || this;
        _this.authUrl = 'https://www.facebook.com/v5.0/dialog/oauth';
        _this.defaults = {
            responseType: 'token'
        };
        if (!options.appScope || options.appScope.length <= 0) {
            throw new Error("A " + _this.name + " app scope must exist");
        }
        return _this;
    }
    FacebookOauth.prototype.optionsToDialogUrl = function (options) {
        var url = _super.prototype.optionsToDialogUrl.call(this, options);
        if (options.authType) {
            url += "&auth_type=" + options.authType;
        }
        return url;
    };
    return FacebookOauth;
}(provider_1.OAuthProvider));
exports.FacebookOauth = FacebookOauth;
