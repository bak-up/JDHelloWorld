"use strict";
/**
 * 新版农场
 * cron: 15 8-10,18-20 * * *
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
var h5st_4_2_1 = require("./utils/h5st_4.2");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_farm = /** @class */ (function (_super) {
    __extends(Jd_farm, _super);
    function Jd_farm() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_farm.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFp4_1()];
                    case 1:
                        _a.fp41 = _b.sent();
                        return [4 /*yield*/, this.run(this)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_farm.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        h5st = this.h5stTool.h5st({
                            appid: 'signed_wh5',
                            body: body,
                            client: '',
                            clientVersion: '1.0.0',
                            functionId: fn,
                            t: timestamp
                        });
                        return [4 /*yield*/, this.post('https://api.m.jd.com/client.action', "appid=signed_wh5&client=&clientVersion=1.0.0&t=".concat(timestamp, "&body=").concat(JSON.stringify(body), "&functionId=").concat(fn, "&h5st=").concat(h5st), {
                                'authority': 'api.m.jd.com',
                                'cookie': this.user.cookie,
                                'origin': 'https://h5.m.jd.com',
                                'referer': 'https://h5.m.jd.com/',
                                'user-agent': this.user.UserAgent,
                                'x-referer-page': 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html',
                                'x-rp-client': 'h5_1.0.0'
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_farm.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, bottleWater, inviteCode, _i, _a, t, taskSourceUrl, taskInsert, i, _b, _c, t, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 25, , 27]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;12.2.2;;;M/5.0;appBuild/168923;jdSupportDarkMode/0;ef/1;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        res = void 0, data = void 0;
                        this.appId = 'c57f6';
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, this.api('farm_home', { "version": 1 })];
                    case 2:
                        res = _d.sent();
                        this.o2s(res);
                        bottleWater = res.data.result.bottleWater;
                        console.log('💧', bottleWater);
                        inviteCode = res.data.result.farmHomeShare.inviteCode;
                        console.log('助力码', inviteCode);
                        this.shareCodeSelf.push(inviteCode);
                        return [4 /*yield*/, this.api('farm_task_list', { "version": 1, "channel": 0 })];
                    case 3:
                        res = _d.sent();
                        this.appId = '28981';
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 4:
                        _d.sent();
                        _i = 0, _a = res.data.result.taskList;
                        _d.label = 5;
                    case 5:
                        if (!(_i < _a.length)) return [3 /*break*/, 17];
                        t = _a[_i];
                        if (!t.taskType.includes('BROWSE')) return [3 /*break*/, 11];
                        if (!!t.taskDoTimes) return [3 /*break*/, 10];
                        taskSourceUrl = t.taskSourceUrl, taskInsert = false;
                        if (!!t.taskSourceUrl) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.api('farm_task_detail', { "version": 1, "taskType": t.taskType, "taskId": t.taskId, "channel": 0 })];
                    case 6:
                        data = _d.sent();
                        taskSourceUrl = data.data.result.taskDetaiList[0].itemId;
                        taskInsert = true;
                        _d.label = 7;
                    case 7:
                        console.log('开始任务', t.mainTitle);
                        return [4 /*yield*/, this.api('farm_do_task', {
                                "version": 1, "taskType": t.taskType, "taskId": t.taskId, "taskInsert": taskInsert, "itemId": Buffer.from(taskSourceUrl, 'utf8').toString('base64'), "channel": 0
                            })];
                    case 8:
                        data = _d.sent();
                        return [4 /*yield*/, this.wait(3000)];
                    case 9:
                        _d.sent();
                        data.data.bizCode === 0 ? console.log('任务完成') : console.log('任务失败', data);
                        _d.label = 10;
                    case 10: return [3 /*break*/, 16];
                    case 11:
                        if (!(t.taskType === 'CUMULATIVE_TIMES')) return [3 /*break*/, 16];
                        console.log("\u4ECA\u65E5\u6D47\u6C34".concat(t.taskDoTimes, "/10"));
                        i = 0;
                        _d.label = 12;
                    case 12:
                        if (!(i < 10 - t.taskDoTimes)) return [3 /*break*/, 16];
                        if (bottleWater < 10)
                            return [3 /*break*/, 16];
                        return [4 /*yield*/, this.api('farm_water', { "version": 1, "waterType": 1 })];
                    case 13:
                        data = _d.sent();
                        if (data.data.bizCode === 0) {
                            console.log('浇水成功', t.taskDoTimes + i + 1);
                            bottleWater = data.data.result.bottleWater;
                        }
                        return [4 /*yield*/, this.wait(3000)];
                    case 14:
                        _d.sent();
                        _d.label = 15;
                    case 15:
                        i++;
                        return [3 /*break*/, 12];
                    case 16:
                        _i++;
                        return [3 /*break*/, 5];
                    case 17: return [4 /*yield*/, this.api('farm_task_list', { "version": 1, "channel": 0 })];
                    case 18:
                        res = _d.sent();
                        this.appId = '33e0f';
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 19:
                        _d.sent();
                        _b = 0, _c = res.data.result.taskList;
                        _d.label = 20;
                    case 20:
                        if (!(_b < _c.length)) return [3 /*break*/, 24];
                        t = _c[_b];
                        if (!(t.taskStatus === 2)) return [3 /*break*/, 23];
                        return [4 /*yield*/, this.api('farm_task_receive_award', { "version": 1, "taskType": t.taskType, "taskId": t.taskId, "channel": 0 })];
                    case 21:
                        data = _d.sent();
                        console.log('领取奖励💧', data.data.result.taskAward[0].awardValue);
                        return [4 /*yield*/, this.wait(2000)];
                    case 22:
                        _d.sent();
                        _d.label = 23;
                    case 23:
                        _b++;
                        return [3 /*break*/, 20];
                    case 24: return [3 /*break*/, 27];
                    case 25:
                        e_1 = _d.sent();
                        console.log(e_1.message);
                        return [4 /*yield*/, this.wait(30000)];
                    case 26:
                        _d.sent();
                        return [3 /*break*/, 27];
                    case 27: return [2 /*return*/];
                }
            });
        });
    };
    Jd_farm.prototype.help = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, users_1, user, shareCodePool, shareCode, _a, shareCode_1, code, e_2, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.appId = '28981';
                        _i = 0, users_1 = users;
                        _b.label = 1;
                    case 1:
                        if (!(_i < users_1.length)) return [3 /*break*/, 17];
                        user = users_1[_i];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 13, , 14]);
                        this.user = user;
                        this.user.UserAgent = "jdapp;iPhone;12.2.2;;;M/5.0;appBuild/168923;jdSupportDarkMode/0;ef/1;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_4_2_1.H5ST_42(this.appId, this.user.UserAgent, this.user.UserName, 'https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html', 'https://h5.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.algo()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.getShareCodePool('farm2', 50)];
                    case 4:
                        shareCodePool = _b.sent();
                        shareCode = Array.from(new Set(__spreadArray(__spreadArray([], this.shareCodeSelf, true), shareCodePool, true)));
                        _a = 0, shareCode_1 = shareCode;
                        _b.label = 5;
                    case 5:
                        if (!(_a < shareCode_1.length)) return [3 /*break*/, 12];
                        code = shareCode_1[_a];
                        _b.label = 6;
                    case 6:
                        _b.trys.push([6, 8, , 9]);
                        console.log("\u8D26\u53F7".concat(user.index + 1, " ").concat(user.UserName, " \u53BB\u52A9\u529B ").concat(code, " ").concat(this.shareCodeSelf.includes(code) ? '*内部*' : ''));
                        return [4 /*yield*/, this.api('farm_assist', { "version": 1, "inviteCode": code, "shareChannel": "ttt7", "assistChannel": "" })];
                    case 7:
                        res = _b.sent();
                        this.o2s(res, '助力结果');
                        if (res.code === 0 && res.data.bizCode === 0) {
                            console.log('助力成功');
                        }
                        else if (res.code === 0 && res.data.bizCode !== 0) {
                            console.log(res.data.bizMsg);
                        }
                        else {
                            console.log(res);
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        e_2 = _b.sent();
                        console.log(e_2.message);
                        return [3 /*break*/, 9];
                    case 9: return [4 /*yield*/, this.wait(5000)];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11:
                        _a++;
                        return [3 /*break*/, 5];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        e_3 = _b.sent();
                        console.log(e_3);
                        return [3 /*break*/, 14];
                    case 14: return [4 /*yield*/, this.wait(60000)];
                    case 15:
                        _b.sent();
                        _b.label = 16;
                    case 16:
                        _i++;
                        return [3 /*break*/, 1];
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_farm;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_farm().init().then();
