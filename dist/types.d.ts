import { AxiosInstance } from "axios";
export type AxiosClientOptions = {
    baseUrl?: string;
};
export type ResultOk = {
    result: boolean;
    msg?: string | Array<string>;
    data?: Object | any;
};
enum GTM {
    "GTM+7" = "+07:00",
    "GTM-7" = "-07:00"
}
export const getAxiosClient: (apiKey: string, options: AxiosClientOptions | null) => AxiosInstance;
export class Tafalo {
    constructor(_appId: string);
    setCookiec(cname: string, cvalue: string, exdays?: number): void;
    getCookie(cname: string): string | null;
    removeCookiec(ckey: string, callback: () => void): void;
    convertGTM(str: string, gtm: GTM): number | "";
    strToJson(str: string): any;
    loginAsync(username: string, password: string): Promise<ResultOk>;
    updateAppAsync(payload: any): Promise<ResultOk>;
}
export default Tafalo;
