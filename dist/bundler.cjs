var $gwQPx$axios = require("axios");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $eb5826f535f7cd1a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Tafalo", () => $e06e4ff2c125ff8d$export$8459e66a80554f45);
$parcel$export(module.exports, "getAxiosClient", () => $589f0fa21786f068$export$d095d819e7e6a3a9);

const $589f0fa21786f068$export$d095d819e7e6a3a9 = (apiKey, options)=>{
    const axiosClient = (0, ($parcel$interopDefault($gwQPx$axios))).create({
        baseURL: options?.baseUrl || window.location.origin,
        timeout: 20000,
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    });
    return axiosClient;
};


let $2c093d14c9075ea0$export$b974114a7c8ac519;
(function(GTM) {
    GTM["GTM+7"] = "+07:00";
    GTM["GTM-7"] = "-07:00";
})($2c093d14c9075ea0$export$b974114a7c8ac519 || ($2c093d14c9075ea0$export$b974114a7c8ac519 = {}));



class $e06e4ff2c125ff8d$export$8459e66a80554f45 {
    deleted = false;
    constructor(_appId){
        this.appId = _appId;
        this.client = (0, $589f0fa21786f068$export$d095d819e7e6a3a9)("", {});
        let cc = this.getCookie("token");
        if (cc != null) this.tokenId = cc;
    }
    setCookiec(cname, cvalue, exdays = 0) {
        if (cname == "token") this.tokenId = cvalue;
        window.localStorage.setItem(cname, cvalue);
    }
    getCookie(cname) {
        return window.localStorage.getItem(cname);
    }
    removeCookiec(ckey, callback) {
        window.localStorage.removeItem(ckey);
        if (typeof callback == "function") callback();
    }
    convertGTM(str, gtm) {
        try {
            if (str) return new Date(str.replace("+00:00", gtm.toString() || (0, $2c093d14c9075ea0$export$b974114a7c8ac519)["GTM+7"].toString())).getTime();
            return "";
        } catch (ex) {
            return "";
        }
    }
    strToJson(str) {
        try {
            if (typeof str == "string") return JSON.parse(str);
        } catch (error) {
            return null;
        }
    }
    async loginAsync(username, password) {
        try {
            var rs = await this.client.post("/login", {
                username: username,
                password: password
            });
            var dt = rs.data;
            return dt;
        } catch (error) {
            return {
                result: false
            };
        }
    }
    async updateAppAsync(payload) {
        try {
            var kq = await this.client.post("/apps", payload);
            return kq.data;
        } catch (error) {
            return {
                result: false,
                msg: error.message()
            };
        }
    }
}


var $eb5826f535f7cd1a$export$2e2bcd8739ae039 = (0, $e06e4ff2c125ff8d$export$8459e66a80554f45);


