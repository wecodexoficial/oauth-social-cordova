import { OAuthProvider, IOAuthOptions } from "../provider";
export interface IFacebookOptions extends IOAuthOptions {
    authType?: string;
}
export declare class FacebookOauth extends OAuthProvider {
    options: IFacebookOptions;
    protected authUrl: string;
    protected defaults: Object;
    constructor(options?: IFacebookOptions);
    protected optionsToDialogUrl(options: any): string;
}
