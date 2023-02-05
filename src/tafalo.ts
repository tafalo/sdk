import { filterRuleTfl, GTM, payloadType, ResultOk, TypeCookies } from "./types";
import { getAxiosClient } from "./utils";
import { AxiosInstance } from "axios";
export class Tafalo {
  private appId: string;
  private tokenId: string;
  private client: AxiosInstance;
  private deleted: boolean = false;
  private key_store: string = "__key_store_data";
  private storeCookies: { [key: string]: TypeCookies } = {}
  constructor(_appId: string) {
    this.appId = _appId;
    this.client = getAxiosClient("", {});
    var lstore = this.strToJson(window.localStorage.get(this.key_store));
    if (lstore) {
      this.storeCookies = lstore;
      this.tokenId = this.cookie("token");
    }

  }

  cookie(key: string, value?: any, expire?: number): any {
    if (typeof key === 'undefined') return null;
    let keyKey = key.slice(0, key.indexOf("."));
    let valueKey = "";
    var _expried = -1;
    if (keyKey.length < key.length) {
      valueKey = key.slice(key.indexOf(".") + 1);
    }


    if (typeof value == 'undefined') {
      let rsCookies = this.storeCookies[keyKey];
      if (rsCookies != null && Date.now() - rsCookies.expired > 0) {
        if (rsCookies.value && valueKey.length > 0) {
          try {
            return eval("rsCookies.value." + valueKey);
          } catch (error) {
            return null;
          }

        }
        return rsCookies.value;
      }
      return null;
    }
    else {
      if (typeof expire == 'number' && expire > 0) {
        _expried = Date.now() + expire;
      }
      if (value = null || (typeof value == 'string' && value.length == 0)) {
        delete this.storeCookies[keyKey];
        window.localStorage.setItem(this.key_store, JSON.stringify(this.storeCookies));
        return null;
      }

      this.storeCookies[keyKey] = { value: value, expired: _expried };
      window.localStorage.setItem(this.key_store, JSON.stringify(this.storeCookies));
      return value;
    }


  }

  getTime(str: string, gtm: string): any {
    try {
      if (str) {
        return new Date(str.replace("+00:00", gtm || "+07:00")).getTime();
      }
      return '';
    } catch (ex) {
      return '';
    }
  }

  strToJson(str: string) {
    try {
      if (str === null) return null;
      if (typeof str == 'string' && str.length > 0) {
        return JSON.parse(str);
      }
    } catch (error) {
      return null;
    }
  }
  public async postData(path: string, payload: any): Promise<ResultOk> {
    try {
      var rs = await this.client.post(path, payload);
      var dt = <ResultOk>rs.data;
      return dt;
    } catch (error) {
      return { result: false, timestamp: Date.now() }
    }
  }
  public login(username: string, password: string, callback: (data: ResultOk) => void): void {
    this.postData("/login", { username: username, password: password }).then(rs => {
      if (rs.result && rs.data && rs.data.token) {
        this.cookie("token", rs.data.token);
      }
      callback(rs);
    });

  }


  public logout(callback: (data: ResultOk) => void): void {
    this.postData("/logout", null).then(rs => {
      if (rs.result && rs.data && rs.data.token) {
        this.cookie("token", "");
      }
      callback(rs);
    });

  }
  public createAcount(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/create-acount", payload).then(rs => {

      callback(rs);
    });

  }
  public updateAcount(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/update-acount", payload).then(rs => {

      callback(rs);
    });
  }
  public removeAcount(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/remove-acount", payload).then(rs => {

      callback(rs);
    });
  }

  public getApp(payload: filterRuleTfl, callback: (data: ResultOk) => void): void {
    this.postData("/get-app", payload).then(rs => {
      callback(rs);
    });
  }
  public updateApp(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/update-app", payload).then(rs => {

      callback(rs);
    });
  }
  public removeApp(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/renove-app", payload).then(rs => {

      callback(rs);
    });
  }

  public updateRole(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/update-role", payload).then(rs => {
      callback(rs);
    })
  }
  public removeRole(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/remove-role", payload).then(rs => {

      callback(rs);
    });
  }
  public updateUserRole(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/update-role", payload).then(rs => {
      callback(rs);
    });
  }

  public getFiles(payload: filterRuleTfl, callback: (data: ResultOk) => void): void {
    this.postData("/get-file", payload).then(rs => {
      callback(rs);
    });
  }
  public updateFiles(payload: any, callback: (data: ResultOk) => void): void {
    this.postData("/update-files", payload).then(rs => {
      callback(rs);
    });
  }
  public uploadFiles(payload: any, callback: (data: ResultOk) => void): void {
    this.client.post("/upload-files", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(rs => {
      callback(rs.data)
    }).catch(err => {
      callback({ result: false, msg: err.message, timestamp: Date.now() })
    });

  }
  public getDocs(payload: filterRuleTfl | filterRuleTfl[], callback: (data: ResultOk) => void): void {
    this.postData("/get-docs", payload).then(rs => {
      callback(rs);
    });
  }

  public updateDoc(payload: payloadType, callback: (data: ResultOk) => void): void {
    this.postData("/update-doc", payload).then(rs => {
      callback(rs);
    });
  }

  public removeDoc(payload: payloadType, callback: (data: ResultOk) => void): void {
    this.postData("/remove-doc", payload).then(rs => {

      callback(rs);
    });
  }

}