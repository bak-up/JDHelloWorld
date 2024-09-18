"use strict";
/**
 * 微信小程序-领红包
 * cron: 15 0,2,8 * * *
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
Object.defineProperty(exports, "__esModule", { value: true });
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var h5st_1 = require("./utils/h5st");
var Jd_Hbrain = /** @class */ (function (_super) {
    __extends(Jd_Hbrain, _super);
    function Jd_Hbrain() {
        return _super.call(this) || this;
    }
    Jd_Hbrain.prototype.init = function () {
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
    Jd_Hbrain.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = Date.now();
                        h5st = this.h5stTool.genH5st('hot_channel', body, 'android', '8.21.260', fn, ts);
                        return [4 /*yield*/, this.post("https://api.m.jd.com/".concat(fn), "loginType=2&client=android&clientVersion=8.21.260&functionId=".concat(fn, "&t=").concat(ts, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=hot_channel&d_name=&h5st=").concat(h5st, "&_ste=2"), {
                                'Host': 'api.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Cookie': this.user.cookie,
                                'X-Referer-Package': 'wx91d27dbf599dff74',
                                'wqreferer': 'http://wq.jd.com/wxapp/pages/yixiaoshida/index/index',
                                'X-Rp-Client': 'mini_2.0.0',
                                'X-Referer-Page': '/pages/yixiaoshida/index/index',
                                'referer': 'https://servicewechat.com/wx91d27dbf599dff74/728/page-frame.html'
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_Hbrain.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var data, res, shareCode, _i, _a, t, _b, _c, t, e_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 19, , 21]);
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF XWEB/30817";
                        this.h5stTool = new h5st_1.H5ST('60d61', this.fp, this.user.UserAgent, this.user.UserName, 'https://servicewechat.com/wx91d27dbf599dff74/728/page-frame.html', 'https://servicewechat.com');
                        return [4 /*yield*/, this.h5stTool.genAlgo()];
                    case 1:
                        _d.sent();
                        data = void 0, res = void 0;
                        return [4 /*yield*/, this.api('MiniTask_ChannelPage', { "source": "task" })];
                    case 2:
                        res = _d.sent();
                        this.o2s(res);
                        return [4 /*yield*/, this.getshareCodeHW('miniTask')];
                    case 3:
                        shareCode = _d.sent();
                        _i = 0, _a = res.data.signInfo.signTaskList;
                        _d.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 10];
                        t = _a[_i];
                        if (!(t.currentDay && t.signStatus === 0)) return [3 /*break*/, 9];
                        if (!(this.user.index === 0)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.api('miniTask_assistCheck', { "itemId": shareCode[0] })];
                    case 5:
                        data = _d.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.api('miniTask_doSign', { "itemId": "1" })];
                    case 7:
                        data = _d.sent();
                        _d.label = 8;
                    case 8:
                        if (res.subCode === 0) {
                            console.log('签到成功', res.data.toastMsg, '连续签到:', res.data.signDays);
                        }
                        else {
                            console.log(res.message);
                        }
                        _d.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 4];
                    case 10:
                        _b = 0, _c = res.data.scanTaskList;
                        _d.label = 11;
                    case 11:
                        if (!(_b < _c.length)) return [3 /*break*/, 18];
                        t = _c[_b];
                        if (!(t.status === 0)) return [3 /*break*/, 17];
                        console.log(t.title);
                        return [4 /*yield*/, this.api('MiniTask_ScanTask', { "actionType": 1, "scanAssignmentId": t.scanAssignmentId, "itemId": t.itemId })];
                    case 12:
                        data = _d.sent();
                        if (!(data.subCode === 0)) return [3 /*break*/, 17];
                        console.log('开始任务');
                        return [4 /*yield*/, this.wait((t.times + 1) * 1000)];
                    case 13:
                        _d.sent();
                        return [4 /*yield*/, this.api('MiniTask_ScanTask', { "actionType": 0, "scanAssignmentId": t.scanAssignmentId, "itemId": t.itemId })];
                    case 14:
                        data = _d.sent();
                        if (!(data.subCode === 0)) return [3 /*break*/, 17];
                        console.log('任务完成');
                        return [4 /*yield*/, this.wait(1000)];
                    case 15:
                        _d.sent();
                        return [4 /*yield*/, this.api('MiniTask_ScanReward', { "scanAssignmentId": t.scanAssignmentId })];
                    case 16:
                        data = _d.sent();
                        console.log(data);
                        console.log('领取奖励', data.data[0].discount);
                        _d.label = 17;
                    case 17:
                        _b++;
                        return [3 /*break*/, 11];
                    case 18: return [3 /*break*/, 21];
                    case 19:
                        e_1 = _d.sent();
                        console.log(e_1.message);
                        return [4 /*yield*/, this.wait(5000)];
                    case 20:
                        _d.sent();
                        return [3 /*break*/, 21];
                    case 21: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_Hbrain;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_Hbrain().init().then();
