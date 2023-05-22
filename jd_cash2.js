"use strict";
/**
 * 京东领现金2
 * cron: 6 0,5,18 * * *
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
exports.__esModule = true;
var h5st_pro_1 = require("./utils/h5st_pro");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_Cash2 = /** @class */ (function (_super) {
    __extends(Jd_Cash2, _super);
    function Jd_Cash2() {
        var _this = _super.call(this, "微信签到") || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_Cash2.prototype.init = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, _c, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 4, , 5]);
                        _b = this;
                        if (!((_a = process.env.FP_B3F11) !== null && _a !== void 0)) return [3 /*break*/, 1];
                        _c = _a;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.getFp()];
                    case 2:
                        _c = _d.sent();
                        _d.label = 3;
                    case 3:
                        _b.fp = _c;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _d.sent();
                        console.log('FP Error: ', e_1.message);
                        process.exit(0);
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, this.run(this)];
                    case 6:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_Cash2.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var t, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = Date.now();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                appid: "activities_platform",
                                body: JSON.stringify(body),
                                client: "ios",
                                clientVersion: "12.0.1",
                                functionId: fn,
                                t: t.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.post('https://api.m.jd.com/api', "functionId=".concat(fn, "&body=").concat(JSON.stringify(body), "&t=").concat(t, "&appid=activities_platform&client=ios&clientVersion=12.0.1&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://prodev.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_Cash2.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, lotteryTimes, i, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 10, , 11]);
                        this.user = user;
                        res = void 0, data = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST("eb67b", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html', 'https://prodev.m.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.api('inviteFissionHome', { "linkId": "c6Bkpjp7dYcvQwO9-PR7-g", "inviter": "" })];
                    case 2:
                        res = _a.sent();
                        console.log('助力码', res.data.inviteCode);
                        this.shareCodeSelf.push({ inviteCode: res.data.inviteCode, inviter: res.data.inviter });
                        this.h5stTool = new h5st_pro_1.H5ST("b3f11", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html', 'https://prodev.m.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.api('inviteFissionPoll', { "linkId": "c6Bkpjp7dYcvQwO9-PR7-g" })];
                    case 4:
                        res = _a.sent();
                        lotteryTimes = res.data.lotteryTimes;
                        console.log('可抽奖', lotteryTimes);
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < lotteryTimes)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.api('inviteFissionDrawPrize', { "linkId": "c6Bkpjp7dYcvQwO9-PR7-g" })];
                    case 6:
                        data = _a.sent();
                        data.data.prizeType === 4 ? console.log('抽到现金', data.data.prizeValue * 1) : console.log('抽到其他', data.data);
                        return [4 /*yield*/, this.wait(6000)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_2 = _a.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    Jd_Cash2.prototype.help = function (users) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res, temp, shareCodeHW, _i, temp_1, t, _c, users_1, user, shareCode, _d, shareCode_1, code, e_3;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.o2s(this.shareCodeSelf, '内部助力');
                        return [4 /*yield*/, this.getshareCodeHW('cash2')];
                    case 1:
                        temp = _e.sent();
                        shareCodeHW = [];
                        for (_i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                            t = temp_1[_i];
                            shareCodeHW.push({ inviteCode: t.inviteCode, inviter: t.inviter });
                        }
                        _c = 0, users_1 = users;
                        _e.label = 2;
                    case 2:
                        if (!(_c < users_1.length)) return [3 /*break*/, 12];
                        user = users_1[_c];
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 10, , 11]);
                        this.user = user;
                        shareCode = void 0;
                        shareCode = user.index === 0 ? __spreadArray(__spreadArray([], shareCodeHW, true), this.shareCodeSelf, true) : __spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodeHW, true);
                        this.h5stTool = new h5st_pro_1.H5ST("02f8d", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/mall/active/uFdv8vAHsiLz4MGsg4HEauwte8d/index.html', 'https://prodev.m.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 4:
                        _e.sent();
                        _d = 0, shareCode_1 = shareCode;
                        _e.label = 5;
                    case 5:
                        if (!(_d < shareCode_1.length)) return [3 /*break*/, 9];
                        code = shareCode_1[_d];
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code.inviteCode));
                        return [4 /*yield*/, this.api('inviteFissionBeforeHome', { "linkId": "c6Bkpjp7dYcvQwO9-PR7-g", "isJdApp": true, "inviter": code.inviter })];
                    case 6:
                        res = _e.sent();
                        if (((_a = res.data) === null || _a === void 0 ? void 0 : _a.helpResult) === 1) {
                            console.log('助力成功');
                        }
                        else if (((_b = res.data) === null || _b === void 0 ? void 0 : _b.helpResult) === 6) {
                            console.log('已助力过');
                        }
                        else {
                            console.log('其他结果', res.data.helpResult);
                        }
                        return [4 /*yield*/, this.wait(10000)];
                    case 7:
                        _e.sent();
                        _e.label = 8;
                    case 8:
                        _d++;
                        return [3 /*break*/, 5];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        e_3 = _e.sent();
                        console.log(e_3);
                        return [3 /*break*/, 11];
                    case 11:
                        _c++;
                        return [3 /*break*/, 2];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_Cash2;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_Cash2().init().then();
