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
export type TypeCookies ={
  value: any,
  expired: number
}
// sum(abc) as t
export type fnFilterType = {
  fn: string,
  args: any[]
}
export type fieldFilterType = {
  fn: string,
  args: any[],
  as: string
}
export type filterRules = {
  field:fnFilterType | string | any, 
  value: any, 
  op?:string,
  filterRules?: filterRules[],
  

}
export type filterRuleTfl = {
  fields?: string[] | fieldFilterType[] | any,
  fieldIgnores?: string[],
  filterRules?: filterRules[],
  groupBy?: string[],
  having?: {type: string, filterRules: {field: fnFilterType | string | any, value: any, op?: string}[]}[],
  sort?: string,
  order?: string,
  page?: number,
  rows?: number,
  type?: string,
  

  t_table?: string
}

export type payloadType = {
  _tid: string,
  _tapp: string,
  _type: string,
  _set?: {[key:string]: any},
  _unset?: string[],
  _table?: string,
}

export type appType = {
  tid: string,
  type: string,
  tapp: string,
  [key:string]: any
}
export type accountType = {
  username: string,
  password: string,
  email: string,
  phone: string
}
