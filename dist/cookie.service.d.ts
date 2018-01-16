/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare class CookieService {
    private isConsented;
    get_cookie(name: string): string;
    delete_cookie(name: string): void;
    set_cookie(name: string, value: string, expireDays: number, path?: string): void;
}
