import { OAuthProvider, IOAuthOptions } from "../provider";
export interface TwitterOptions extends IOAuthOptions {
    consumerKey?: string;
    consumerSecret?: string;
    token?: string;
    tokenSecret?: string;
}
export declare class Twitter extends OAuthProvider {
    options: TwitterOptions;
    protected authUrl: string;
    protected APP_SCOPE_DELIMITER: string;
    protected defaults: Object;
    constructor(options?: TwitterOptions);
}
