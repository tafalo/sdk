import $7al1R$axios from "axios";


const $45492182f7b47476$export$d095d819e7e6a3a9 = (apiKey, options)=>{
    const axiosClient = (0, $7al1R$axios).create({
        baseURL: options?.baseUrl || window.location.origin,
        timeout: 20000,
        headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        }
    });
    return axiosClient;
};


let $95b76a586d5e6d6b$export$b974114a7c8ac519;
(function(GTM) {
    GTM["GTM+7"] = "+07:00";
    GTM["GTM-7"] = "-07:00";
})($95b76a586d5e6d6b$export$b974114a7c8ac519 || ($95b76a586d5e6d6b$export$b974114a7c8ac519 = {}));



class $765e4ebd3643ddb7$export$8459e66a80554f45 {
    deleted = false;
    constructor(_appId){
        this.appId = _appId;
        this.client = (0, $45492182f7b47476$export$d095d819e7e6a3a9)("", {});
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
            if (str) return new Date(str.replace("+00:00", gtm.toString() || (0, $95b76a586d5e6d6b$export$b974114a7c8ac519)["GTM+7"].toString())).getTime();
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


var $1c5292861a8a6d1c$export$2e2bcd8739ae039 = (0, $765e4ebd3643ddb7$export$8459e66a80554f45);


export {$1c5292861a8a6d1c$export$2e2bcd8739ae039 as default, $765e4ebd3643ddb7$export$8459e66a80554f45 as Tafalo, $45492182f7b47476$export$d095d819e7e6a3a9 as getAxiosClient};
