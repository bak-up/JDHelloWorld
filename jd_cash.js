"use strict";
/**
 * 领现金
 * cron: 8 0,9,15 * * *
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var h5st_pro_1 = require("./utils/h5st_pro");
var Jd_Cash = /** @class */ (function (_super) {
    __extends(Jd_Cash, _super);
    function Jd_Cash() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_Cash.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        _b = process.env.FP_c8815;
                        if (_b) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getFp()];
                    case 1:
                        _b = (_c.sent());
                        _c.label = 2;
                    case 2:
                        _a.fp = _b;
                        return [4 /*yield*/, this.run(this)];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_Cash.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                appid: 'signed_mp',
                                body: JSON.stringify(body),
                                client: 'wh5',
                                clientVersion: '1.0.0',
                                functionId: fn,
                                t: timestamp.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/', "loginType=2&clientType=wxapp&client=wh5&clientVersion=1.0.0&appid=signed_mp&t=".concat(timestamp, "&functionId=").concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&loginWQBiz=pet-town&h5st=").concat(h5st, "&_ste=2"), {
                                'Host': 'api.m.jd.com',
                                'user-agent': this.user.UserAgent,
                                'referer': 'https://servicewechat.com/wx91d27dbf599dff74/707/page-frame.html',
                                'wqreferer': 'http://wq.jd.com/wxapp/pages/ac/get_cash/pages/index/index',
                                'X-Referer-Page': '/pages/ac/get_cash/pages/index/index',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_Cash.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        this.user = user;
                        this.h5stTool = new h5st_pro_1.H5ST("c8815", this.user.UserAgent, this.fp, 'https://servicewechat.com/wx91d27dbf599dff74/707/page-frame.html', 'https://servicewechat.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.api('cash_mob_home', { "version": "1", "channel": "applet" })];
                    case 2:
                        res = _a.sent();
                        console.log('signedStatus', res.data.result.signedStatus);
                        // this.o2s(res)
                        console.log('助力码', res.data.result.inviteCode);
                        this.shareCodeSelf.push({
                            inviteCode: res.data.result.inviteCode,
                            shareDate: res.data.result.shareDate
                        });
                        return [4 /*yield*/, this.post('https://api.m.jd.com/', "appid=wh5_mp&client=wh5&t=".concat(Date.now(), "&clientVersion=1.0.0&functionId=cash_mini_app_detail&body=%7B%22version%22%3A%221%22%2C%22channel%22%3A%22applet%22%2C%22type%22%3A3%7D&loginType=2&loginWQBiz=pet-town"), {
                                'Host': 'api.m.jd.com',
                                'user-agent': this.user.UserAgent,
                                'referer': 'https://servicewechat.com/wx91d27dbf599dff74/710/page-frame.html',
                                'wqreferer': 'http://wq.jd.com/wxapp/pages/ac/get_cash/pages/details/index',
                                'Content-Type': 'application/x-www-form-urlencoded',
                                'Cookie': this.user.cookie
                            })];
                    case 3:
                        res = _a.sent();
                        console.log('收到助力', res.data.result.assistDetail[0].assistResult.length);
                        if (!(res.data.result.signedStatus !== 1)) return [3 /*break*/, 5];
                        console.log('签到');
                        return [4 /*yield*/, this.api('cash_mob_sign', { "version": "1", "channel": "applet", "remind": 0 })];
                    case 4:
                        res = _a.sent();
                        if (res.data.bizCode === 0) {
                            console.log('签到成功', res.data.result.signCash);
                        }
                        else {
                            this.o2s(res, '签到失败');
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 7];
                    case 7: return [4 /*yield*/, this.wait(15000)];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_Cash.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, temp, shareCodeHW, _i, temp_1, t, _a, users_1, user, shareCode, _b, shareCode_1, code, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        return [4 /*yield*/, this.getshareCodeHW('cash')];
                    case 1:
                        temp = _c.sent();
                        shareCodeHW = [];
                        for (_i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                            t = temp_1[_i];
                            shareCodeHW.push({ inviteCode: t.inviteCode, shareDate: t.shareDate });
                        }
                        _a = 0, users_1 = users;
                        _c.label = 2;
                    case 2:
                        if (!(_a < users_1.length)) return [3 /*break*/, 14];
                        user = users_1[_a];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 10, , 11]);
                        this.user = user;
                        shareCode = void 0;
                        if (user.index === 0)
                            shareCode = __spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true);
                        else
                            shareCode = __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true);
                        this.h5stTool = new h5st_pro_1.H5ST("c8815", this.user.UserAgent, this.fp, 'https://servicewechat.com/wx91d27dbf599dff74/707/page-frame.html', 'https://servicewechat.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 4:
                        _c.sent();
                        _b = 0, shareCode_1 = shareCode;
                        _c.label = 5;
                    case 5:
                        if (!(_b < shareCode_1.length)) return [3 /*break*/, 9];
                        code = shareCode_1[_b];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.inviteCode));
                        return [4 /*yield*/, this.api('cash_qr_code_assist', { "version": "1", "channel": "applet", "type": 2, "inviteCode": code.inviteCode, "shareDate": code.shareDate, "lng": "", "lat": "" })];
                    case 6:
                        res = _c.sent();
                        if (res.data.bizCode === 0) {
                            console.log('助力成功');
                            return [3 /*break*/, 9];
                        }
                        else if (res.data.bizCode === 207) {
                            console.log('上限');
                            return [3 /*break*/, 9];
                        }
                        else {
                            this.o2s(res, '助力结果');
                        }
                        return [4 /*yield*/, this.wait(15000)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        _b++;
                        return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_2 = _c.sent();
                        console.log(e_2);
                        return [3 /*break*/, 11];
                    case 11: return [4 /*yield*/, this.wait(15000)];
                    case 12:
                        _c.sent();
                        _c.label = 13;
                    case 13:
                        _a++;
                        return [3 /*break*/, 2];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_Cash;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_Cash().init().then();
