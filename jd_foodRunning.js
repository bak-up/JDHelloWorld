"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', cookiesArr = [], res;
var token2 = '', buyerNick = '', UserName;
var index, remain = 0;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, i_1, tasks, _i, _a, t, i_2, shopList, _b, _c, s, i_3;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, requireConfig()];
            case 1:
                _d.sent();
                i = 0;
                _d.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 33];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, getIsvToken2()];
            case 3:
                _d.sent();
                return [4 /*yield*/, api('setMixNick')];
            case 4:
                res = _d.sent();
                buyerNick = res.data.data.msg;
                console.log('buyerNick:', buyerNick);
                return [4 /*yield*/, api('UserInfo')];
            case 5:
                res = _d.sent();
                console.log('total:', res.data.data.totalChance, 'remain:', res.data.data.remainChance);
                remain = res.data.data.remainChance;
                // 换豆
                if (remain > 50000) {
                    console.log('乞丐版暂无换豆功能！');
                }
                return [4 /*yield*/, api('SendCoinNum')];
            case 6:
                // 333 * 3
                res = _d.sent();
                if (!(res.data.data.missionTypes.hasGotNum !== res.data.data.missionTypes.dayTop)) return [3 /*break*/, 11];
                i_1 = 0;
                _d.label = 7;
            case 7:
                if (!(i_1 < 3)) return [3 /*break*/, 11];
                return [4 /*yield*/, mission('treeCoin', i_1, 'treeCoin')];
            case 8:
                res = _d.sent();
                console.log(res);
                return [4 /*yield*/, wait(5000)];
            case 9:
                _d.sent();
                _d.label = 10;
            case 10:
                i_1++;
                return [3 /*break*/, 7];
            case 11: return [4 /*yield*/, api('DailyTask')];
            case 12:
                tasks = _d.sent();
                _i = 0, _a = tasks.data.data;
                _d.label = 13;
            case 13:
                if (!(_i < _a.length)) return [3 /*break*/, 32];
                t = _a[_i];
                if (!(t.dayTop !== t.hasGotNum)) return [3 /*break*/, 30];
                if (!(t.type === 'viewBanner')) return [3 /*break*/, 18];
                i_2 = 1;
                _d.label = 14;
            case 14:
                if (!(i_2 < 4)) return [3 /*break*/, 18];
                return [4 /*yield*/, mission('', i_2, t.type)];
            case 15:
                res = _d.sent();
                if (res.errorCode === 200 || res.errorCode === '200') {
                    console.log('任务完成，获得：', res.data.data.sendNum);
                }
                else {
                    console.log('任务失败：', res);
                }
                return [4 /*yield*/, wait(5000)];
            case 16:
                _d.sent();
                _d.label = 17;
            case 17:
                i_2++;
                return [3 /*break*/, 14];
            case 18:
                if (!(t.type === 'viewShop')) return [3 /*break*/, 24];
                console.log(t.missionName);
                return [4 /*yield*/, api('ShopList')];
            case 19:
                shopList = _d.sent();
                _b = 0, _c = shopList.data.data;
                _d.label = 20;
            case 20:
                if (!(_b < _c.length)) return [3 /*break*/, 24];
                s = _c[_b];
                console.log(s.id, s.shopTitle);
                return [4 /*yield*/, mission('', s.id, t.type)];
            case 21:
                res = _d.sent();
                if (res.errorCode === 200 || res.errorCode === '200') {
                    console.log('任务完成，获得：', res.data.data.sendNum);
                }
                else {
                    console.log('任务失败：', res);
                }
                return [4 /*yield*/, wait(5000)];
            case 22:
                _d.sent();
                _d.label = 23;
            case 23:
                _b++;
                return [3 /*break*/, 20];
            case 24:
                if (!(t.type === 'viewGoods')) return [3 /*break*/, 29];
                i_3 = 1;
                _d.label = 25;
            case 25:
                if (!(i_3 < 5)) return [3 /*break*/, 29];
                return [4 /*yield*/, mission('', i_3, t.type)];
            case 26:
                res = _d.sent();
                if (res.errorCode === 200 || res.errorCode === '200') {
                    console.log('任务完成，获得：', res.data.data.sendNum);
                }
                else {
                    console.log('任务失败：', res);
                }
                return [4 /*yield*/, wait(5000)];
            case 27:
                _d.sent();
                _d.label = 28;
            case 28:
                i_3++;
                return [3 /*break*/, 25];
            case 29: return [3 /*break*/, 31];
            case 30:
                console.log("".concat(t.missionName, "--\u5DF2\u5168\u90E8\u5B8C\u6210"));
                _d.label = 31;
            case 31:
                _i++;
                return [3 /*break*/, 13];
            case 32:
                i++;
                return [3 /*break*/, 2];
            case 33: return [2 /*return*/];
        }
    });
}); })();
function mission(fn, goodsNumId, missionType) {
    var _this = this;
    var body = {
        "jsonRpc": "2.0",
        "params": {
            "commonParameter": {
                "appkey": "51B59BB805903DA4CE513D29EC448375",
                "m": "POST",
                "sign": "0028b0b0431cdff0e69353b74a3aad8e",
                "timestamp": Date.now(),
                "userId": 10299171
            },
            "admJson": {
                "missionType": missionType,
                "method": "/foodRunning/complete/mission",
                "actId": "jd_food_running",
                "buyerNick": buyerNick,
                "pushWay": 1,
                "userId": 10299171
            }
        }
    };
    if (fn === 'jdAward1') {
        Object.assign(body.params.admJson, { awardId: fn });
    }
    else if (fn === 'treeCoin') {
        Object.assign(body.params.admJson, { which: goodsNumId });
    }
    else {
        Object.assign(body.params.admJson, { goodsNumId: goodsNumId });
    }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post("https://jinggengjcq-isv.isvjcloud.com/dm/front/foodRunning/complete/mission?open_id=&mix_nick=&bizExtString=&user_id=10299171", JSON.stringify(body), {
                        headers: {
                            'Origin': 'https://jinggengjcq-isv.isvjcloud.com',
                            'X-Requested-With': 'XMLHttpRequest',
                            'User-Agent': TS_USER_AGENTS_1.default,
                            'Referer': 'https://jinggengjcq-isv.isvjcloud.com/paoku/index.html',
                            'Content-Type': 'application/json; charset=UTF-8',
                            'Host': 'jinggengjcq-isv.isvjcloud.com',
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function api(fn) {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post("https://jinggengjcq-isv.isvjcloud.com/dm/front/foodRunning/".concat(fn, "?open_id=&mix_nick=&bizExtString=&user_id=10299171"), JSON.stringify({
                        "jsonRpc": "2.0",
                        "params": {
                            "commonParameter": {
                                "appkey": "51B59BB805903DA4CE513D29EC448375",
                                "m": "POST",
                                "sign": "c29adb1d2c970d64c233d66cbcf3fcdf",
                                "timestamp": Date.now(),
                                "userId": "10299171"
                            },
                            "admJson": {
                                "source": "01",
                                "strTMMixNick": token2,
                                "method": "/foodRunning/".concat(fn),
                                "actId": "jd_food_running",
                                "buyerNick": buyerNick,
                                "pushWay": 1,
                                "userId": "10299171"
                            }
                        }
                    }), {
                        headers: {
                            'Origin': 'https://jinggengjcq-isv.isvjcloud.com',
                            'X-Requested-With': 'XMLHttpRequest',
                            'User-Agent': TS_USER_AGENTS_1.default,
                            'Referer': 'https://jinggengjcq-isv.isvjcloud.com/paoku/index.html',
                            'Content-Type': 'application/json; charset=UTF-8',
                            'Host': 'jinggengjcq-isv.isvjcloud.com',
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function getIsvToken2() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post("https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.2&client=android&uuid=818aa057737ba6a4&st=1623934998790&sign=e571148c8dfb456a1795d249c6aa3956&sv=100", 'body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A//xinruidddj-isv.isvjcloud.com%22%7D', {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'user-agent': TS_USER_AGENTS_1.default,
                            'content-type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token2 = data.token;
                    cookie += 'IsvToken=' + token2 + ';';
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function requireConfig() {
    return new Promise(function (resolve) {
        console.log('\n====================Hello World====================\n');
        console.log('开始获取配置文件\n');
        var jdCookieNode = require('./jdCookie.js');
        Object.keys(jdCookieNode).forEach(function (item) {
            if (jdCookieNode[item]) {
                cookiesArr.push(jdCookieNode[item]);
            }
        });
        console.log("\u5171".concat(cookiesArr.length, "\u4E2A\u4EAC\u4E1C\u8D26\u53F7\n"));
        resolve(0);
    });
}
function wait(t) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, t);
    });
}
