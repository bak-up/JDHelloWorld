"use strict";
/**
 * 极速抽奖
 * cron: 8 0-23/2 * * *
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
var Jd_simple = /** @class */ (function (_super) {
    __extends(Jd_simple, _super);
    function Jd_simple() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_simple.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFp4_1()];
                    case 1:
                        _a.fp = _b.sent();
                        return [4 /*yield*/, this.run(this)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_simple.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        return [4 /*yield*/, this.h5st('activities_platform', body, 'ios', '6.3.0', fn, Date.now(), this.appId, this.tk, this.rd, this.enc, this.fp, this.sua, this.user.UserName)];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/', "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=6.3.0&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'x-rp-client': 'h5_1.0.0',
                                'Origin': 'https://pro.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html',
                                'x-referer-page': 'https://pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_simple.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, lotteryTimes, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "jdltapp;iPhone;6.3.0;;;M/5.0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;hasOCPay/0;appBuild/1372;Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
                        this.appId = '02f8d';
                        return [4 /*yield*/, this.algo(this.appId, this.fp, this.user.UserAgent, this.user.UserName, 'https://pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html', 'https://pro.m.jd.com')];
                    case 1:
                        res = _a.sent();
                        this.tk = res.tk;
                        this.rd = res.rd;
                        this.enc = res.enc;
                        this.sua = res.sua;
                        return [4 /*yield*/, this.api('inviteFissionBeforeHome', { "linkId": "Wvzc_VpNTlSkiQdHT8r7QA", "isJdApp": true, "inviter": "" })];
                    case 2:
                        res = _a.sent();
                        console.log('助力码', res.data.inviter);
                        this.shareCodeSelf.push(res.data.inviter);
                        return [4 /*yield*/, this.api('inviteFissionHome', { "linkId": "Wvzc_VpNTlSkiQdHT8r7QA", "inviter": "" })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.api('inviteFissionPoll', { "linkId": "Wvzc_VpNTlSkiQdHT8r7QA" })];
                    case 4:
                        res = _a.sent();
                        lotteryTimes = res.data.lotteryTimes;
                        console.log('可抽奖', lotteryTimes);
                        if (!lotteryTimes) return [3 /*break*/, 10];
                        this.appId = 'c02c6';
                        return [4 /*yield*/, this.algo(this.appId, this.fp, this.user.UserAgent, this.user.UserName, 'https://pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html', 'https://pro.m.jd.com')];
                    case 5:
                        res = _a.sent();
                        this.tk = res.tk;
                        this.rd = res.rd;
                        this.enc = res.enc;
                        this.sua = res.sua;
                        i = 0;
                        _a.label = 6;
                    case 6:
                        if (!(i < lotteryTimes)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.api('inviteFissionDrawPrize', { "linkId": "Wvzc_VpNTlSkiQdHT8r7QA" })];
                    case 7:
                        data = _a.sent();
                        try {
                            if (data.data.prizeType === 2) {
                                console.log('🧧', data.data.prizeValue * 1);
                            }
                            else {
                                this.o2s(data);
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 6];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    Jd_simple.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, shareCodeHW, _i, users_1, user, shareCode, _a, shareCode_1, code, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        this.appId = '02f8d';
                        return [4 /*yield*/, this.algo(this.appId, this.fp, this.user.UserAgent, this.user.UserName, 'https://pro.m.jd.com/jdlite/active/23CeE8ZXA4uFS9M9mTjtta9T4S5x/index.html', 'https://pro.m.jd.com')];
                    case 1:
                        res = _b.sent();
                        this.tk = res.tk;
                        this.rd = res.rd;
                        this.enc = res.enc;
                        this.sua = res.sua;
                        shareCodeHW = [];
                        _i = 0, users_1 = users;
                        _b.label = 2;
                    case 2:
                        if (!(_i < users_1.length)) return [3 /*break*/, 13];
                        user = users_1[_i];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 11, , 12]);
                        if (!(shareCodeHW.length === 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getshareCodeHW('fission')];
                    case 4:
                        shareCodeHW = _b.sent();
                        _b.label = 5;
                    case 5:
                        this.user = user;
                        shareCode = user.index === 0 ? __spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true) : __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true);
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 6;
                    case 6:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 10];
                        code = shareCode_1[_a];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code));
                        return [4 /*yield*/, this.api('inviteFissionBeforeHome', { "linkId": "Wvzc_VpNTlSkiQdHT8r7QA", "isJdApp": true, "inviter": code })];
                    case 7:
                        res = _b.sent();
                        console.log(res.data.helpResult);
                        if (res.data.helpResult === 1) {
                            console.log('助力成功');
                            return [3 /*break*/, 10];
                        }
                        else if (res.data.helpResult === 3) {
                            console.log('上限');
                            return [3 /*break*/, 10];
                        }
                        else if (!res.data.helpResult) {
                            console.log('不能助力自己');
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        _a++;
                        return [3 /*break*/, 6];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        e_1 = _b.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 12];
                    case 12:
                        _i++;
                        return [3 /*break*/, 2];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_simple;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_simple().init().then();
