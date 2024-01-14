"use strict";
/**
 * 京东快递更新通知
 * cron: 0 0-23/4 * * *
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
Object.defineProperty(exports, "__esModule", { value: true });
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var h5st_1 = require("./utils/h5st");
var fs_1 = require("fs");
var sendNotify_1 = require("./sendNotify");
var Jd_track = /** @class */ (function (_super) {
    __extends(Jd_track, _super);
    function Jd_track() {
        var _this = _super.call(this) || this;
        _this.msg = '';
        return _this;
    }
    Jd_track.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFp4_1()];
                    case 1:
                        _a.fp = _b.sent();
                        this.arr = JSON.parse((0, fs_1.readFileSync)('json/jd_track.json').toString());
                        this.existOrderId = this.arr.map(function (t) {
                            return t.orderId;
                        });
                        return [4 /*yield*/, this.run(this)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Jd_track.prototype.api = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var ts, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = Date.now();
                        h5st = this.h5stTool.genH5st('new_order', body, 'mac', '3.8.2', 'common_order_list', ts);
                        return [4 /*yield*/, this.get("https://api.m.jd.com/client.action?t=".concat(ts, "&loginType=2&loginWQBiz=golden-trade&appid=new_order&client=mac&clientVersion=3.8.2&functionId=common_order_list&body=").concat(encodeURIComponent(JSON.stringify(body)), "&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'xweb_xhr': '1',
                                'X-Rp-Client': 'mini_2.0.0',
                                'User-Agent': this.user.UserAgent,
                                'X-Referer-Package': 'wx91d27dbf599dff74',
                                'X-Referer-Page': '/pages/order_taro/pages/list/index',
                                'Referer': 'https://servicewechat.com/wx91d27dbf599dff74/728/page-frame.html',
                                'Cookie': this.user.cookie
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_track.prototype.main = function (user) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var res, _loop_1, this_1, _i, _d, t, e_1;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 3, , 5]);
                        this.user = user;
                        this.user.UserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF XWEB/30817';
                        this.h5stTool = new h5st_1.H5ST('2d275', this.fp, this.user.UserAgent, this.user.UserName, 'https://servicewechat.com/wx91d27dbf599dff74/728/page-frame.html', 'https://servicewechat.com');
                        return [4 /*yield*/, this.h5stTool.genAlgo()];
                    case 1:
                        _e.sent();
                        return [4 /*yield*/, this.api({ "externalLoginType": 1, "appType": "1", "bizType": "2", "source": "-1", "token": "", "deviceUUId": "", "platform": 2, "uuid": "", "systemBaseInfo": "{\"SDKVersion\":\"2.32.3\",\"system\":\"Mac OS X 13.5.0\"}", "orderListTag": 128, "curTab": "waitReceipt", "referer": "http%3A%2F%2Fwq.jd.com%2Fwxapp%2Fpages%2Fmy%2Findex%2Findex", "page": 1, "pageSize": 10 })];
                    case 2:
                        res = _e.sent();
                        _loop_1 = function (t) {
                            var orderId = t.orderId, time = (_a = t.progressInfo) === null || _a === void 0 ? void 0 : _a.tip, content = (_c = (_b = t.progressInfo) === null || _b === void 0 ? void 0 : _b.content) !== null && _c !== void 0 ? _c : '', wareName = t.wareInfoList[0].wareName;
                            if (content) {
                                console.log(orderId, wareName, time, content);
                                if (!this_1.existOrderId.includes(orderId)) {
                                    this_1.arr.push({ user: this_1.user.UserName, orderId: orderId, wareName: wareName, time: time, content: content });
                                    this_1.msg += "".concat(this_1.user.UserName, "\n").concat(wareName, "\n").concat(time, " ").concat(content, "\n\n");
                                }
                                else {
                                    this_1.arr.forEach(function (order) {
                                        if (order.orderId === orderId && order.time !== time) {
                                            _this.msg += "".concat(_this.user.UserName, "\n").concat(wareName, "\n").concat(time, " ").concat(content, "\n\n");
                                        }
                                    });
                                }
                            }
                        };
                        this_1 = this;
                        for (_i = 0, _d = res.body.orderList; _i < _d.length; _i++) {
                            t = _d[_i];
                            _loop_1(t);
                        }
                        (0, fs_1.writeFileSync)('json/jd_track.json', JSON.stringify(this.arr, null, 2));
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _e.sent();
                        console.log(e_1.message);
                        return [4 /*yield*/, this.wait(5000)];
                    case 4:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Jd_track.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, sendNotify_1.sendNotify)('京东待收货', this.msg)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Jd_track;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_track().init().then();
