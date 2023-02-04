import { GTM, ResultOk } from "./types";
import { getAxiosClient } from "./utils";
import { AxiosInstance } from "axios";
export class Tafalo {
    private appId: string;
    private tokenId: string;
    private client: AxiosInstance;
    private deleted: boolean = false;
    constructor(_appId: string) {
        this.appId = _appId;
        this.client = getAxiosClient("", {});
        let cc = this.getCookie('token');
        if (cc != null) {
            this.tokenId = cc;
          }
    }
    

    setCookie(cname: string, cvalue: string, exdays = 0):void {
        if (cname == 'token') {
            this.tokenId = cvalue;
        }

        window.localStorage.setItem(cname, cvalue)
    }
    getCookie(cname: string):string | null {
        return window.localStorage.getItem(cname);
    }
    removeCookie(ckey: string, callback: () => void) {
        window.localStorage.removeItem(ckey);
        if (typeof callback == 'function') {
            callback();
        }
    }
     getTime(str:string, gtm: string):any {
        try {
          if (str) {
            return new Date(str.replace("+00:00", gtm || "+07:00")).getTime();
          }
          return '';
        } catch (ex) {
          return '';
        }
      }
      
       strToJson(str:string) {
        try {
          if (typeof str == 'string') {
            return JSON.parse(str);
          }
        } catch (error) {
          return null;
        }
      }
    public async postData(path:string, payload:any):Promise<ResultOk> {
        try {
            var rs = await this.client.post(path, payload);
            var dt = <ResultOk> rs.data;
            return dt;
        } catch (error) {
            return { result: false, timestamp: Date.now()}
        }
    }
    public  login(username: string, password: string, callback: (data:ResultOk) => void): void{
        this.postData("/login", { username: username, password: password }).then(rs => {
            if(rs.result && rs.data && rs.data.token) {
                this.setCookie("token", rs.data.token);
            }
            callback(rs);
        });
        
    }

    
  public logout(callback: (data: ResultOk) => void): void {

  }
  public createAcount(callback: (data: ResultOk) => void): void {
    
  }
  public updateAcount(callback: (data: ResultOk) => void): void {
    
  }
  public updateApp(callback: (data: ResultOk) => void): void {
    
  }
  public removeApp(callback: (data: ResultOk) => void): void {
    
  }
  public getApp(callback: (data: ResultOk) => void): void {
    
  }
  public updateRole(callback: (data: ResultOk) => void): void {
    
  }
  public removeRole(callback: (data: ResultOk) => void): void {
    
  }
  public updateUserRole(callback: (data: ResultOk) => void): void {
    
  }
  public updateDocs(callback: (data: ResultOk) => void): void {
    
  }
  public removeDocs(callback: (data: ResultOk) => void): void {
    
  }
  public getDocs(callback: (data: ResultOk) => void): void {
    
  }
}