"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CookieService = /** @class */ (function () {
    function CookieService() {
        this.isConsented = false;
        /*
            private consent(isConsent: boolean, e: any) {
                if (!isConsent) {
                    return this.isConsented;
                } else if (isConsent) {
                    this.set_cookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
                    this.isConsented = true;
                    e.preventDefault();
                }
            }
            */
    }
    //constructor() {
    //this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    //}
    CookieService.prototype.get_cookie = function (name) {
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    CookieService.prototype.delete_cookie = function (name) {
        this.set_cookie(name, '', -1);
    };
    CookieService.prototype.set_cookie = function (name, value, expireDays, path) {
        if (path === void 0) { path = ''; }
        var d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        var cpath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    return CookieService;
}());
exports.CookieService = CookieService;
