export type AxiosClientOptions = {
    baseUrl?: string;
  };
export type ResultOk = {
    result: boolean,
    msg?: string | Array<string>,
    data?: Object | any ,
    timestamp: number
}
export enum GTM  {
  "GTM+7" = "+07:00",
  "GTM-7" = "-07:00"
}