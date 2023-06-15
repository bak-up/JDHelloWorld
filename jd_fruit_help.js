"use strict";
/**
 * 种树助力
 * cron: 35 0,6,12,18,23 * * *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var h5st_1 = require("./utils/h5st");
var Jd_fruit_help = /** @class */ (function (_super) {
    __extends(Jd_fruit_help, _super);
    function Jd_fruit_help() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        _this.appid = '235ec';
        _this.fp = 'gng5gi963mznng63';
        return _this;
    }
    Jd_fruit_help.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.fp) {
                            process.exit();
                        }
                        return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit_help.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        return [4 /*yield*/, (0, h5st_1.getH5ST)(fn, body, this.appid, this.fp, this.user.UserAgent)];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=initForFarm&body=".concat(encodeURIComponent(JSON.stringify(body)), "&appid=signed_mp&timestamp=").concat(timestamp, "&client=mac&clientVersion=3.8.0&loginType=2&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'user-agent': this.user.UserAgent,
                                'referer': 'https://servicewechat.com/wx91d27dbf599dff74/712/page-frame.html',
                                'Content-Type': 'application/json',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fruit_help.prototype.main = function (user) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF XWEB/30515";
                        res = void 0;
                        return [4 /*yield*/, this.api('initForFarm', { "PATH": "1", "PTAG": "", "ptag": "", "navStart": new Date().toISOString(), "referer": "http://wq.jd.com/wxapp/pages/index/index", "originUrl": "/pages/farm/pages/index/index", "originParams": { "ptag": "" }, "originOpts": {}, "imageUrl": "", "nickName": "", "version": 22, "channel": 2, "babelChannel": 0, "lat": "", "lng": "" })];
                    case 1:
                        res = _b.sent();
                        if ((_a = res === null || res === void 0 ? void 0 : res.farmUserPro) === null || _a === void 0 ? void 0 : _a.shareCode) {
                            console.log('助力码', res.farmUserPro.shareCode);
                            this.shareCodeSelf.push(res.farmUserPro.shareCode);
                        }
                        else {
                            console.log('获取助力码失败');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        console.log('error', e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [4 /*yield*/, this.wait(15000)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_fruit_help.prototype.help = function (users) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, users_1, user, shareCodePool, shareCode, _b, shareCode_1, code, e_2, e_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _i = 0, users_1 = users;
                        _c.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 16];
                        user = users_1[_i];
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 12, , 13]);
                        this.user = user;
                        return [4 /*yield*/, this.getShareCodePool('farm', 50)];
                    case 3:
                        shareCodePool = _c.sent();
                        shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodePool, true);
                        _b = 0, shareCode_1 = shareCode;
                        _c.label = 4;
                    case 4:
                        if (!(_b < shareCode_1.length)) return [3 /*break*/, 11];
                        code = shareCode_1[_b];
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(this.shareCodeSelf.includes(code) ? '*内部*' : ''));
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?functionId=initForFarm&body=".concat(encodeURIComponent(JSON.stringify({
                                imageUrl: "",
                                nickName: "",
                                shareCode: code,
                                babelChannel: "3",
                                version: 2,
                                channel: 1
                            })), "&appid=wh5"), {
                                "Host": "api.m.jd.com",
                                "Accept": "*/*",
                                "Origin": "https://carry.m.jd.com",
                                "Accept-Encoding": "gzip, deflate, br",
                                "User-Agent": this.user.UserAgent,
                                "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                                "Referer": "https://carry.m.jd.com/",
                                "Cookie": this.user.cookie
                            })];
                    case 6:
                        // res = await this.api('initForFarm', {"ad_od": "share", "mpin": "", "shareCode": code, "utm_campaign": "t_335139774", "utm_medium": "appshare", "utm_source": "androidapp", "utm_term": "Wxfriends", "imageUrl": "", "nickName": "", "version": 22, "channel": 2, "babelChannel": 0, "lat": "", "lng": ""})
                        res = _c.sent();
                        this.o2s(res);
                        if (((_a = res === null || res === void 0 ? void 0 : res.helpResult) === null || _a === void 0 ? void 0 : _a.remainTimes) === 0)
                            return [3 /*break*/, 11];
                        return [3 /*break*/, 8];
                    case 7:
                        e_2 = _c.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 8];
                    case 8: return [4 /*yield*/, this.wait(30000)];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10:
                        _b++;
                        return [3 /*break*/, 4];
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        e_3 = _c.sent();
                        console.log(e_3);
                        return [3 /*break*/, 13];
                    case 13: return [4 /*yield*/, this.wait(60000)];
                    case 14:
                        _c.sent();
                        _c.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 1];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fruit_help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fruit_help().init().then();
