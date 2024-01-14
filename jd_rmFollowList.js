"use strict";
/**
 * 取消关注商品、店铺
 * cron: 10 10 * * *
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
var h5st_pro_1 = require("./utils/h5st_pro");
var Jd_RmFollowList = /** @class */ (function (_super) {
    __extends(Jd_RmFollowList, _super);
    function Jd_RmFollowList() {
        return _super.call(this, '取消关注商品、店铺') || this;
    }
    Jd_RmFollowList.prototype.init = function () {
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
    Jd_RmFollowList.prototype.api = function (fn, params) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("https://wq.jd.com/fav/shop/".concat(fn), {
                            'Host': 'wq.jd.com',
                            'Cookie': this.user.cookie,
                            'user-agent': this.user.UserAgent,
                            'referer': 'https://wqs.jd.com/',
                        }, params)];
                    case 1:
                        res = _a.sent();
                        res = JSON.parse(res.match(/\(([\S\s]+)\);/)[1]);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Jd_RmFollowList.prototype.api2 = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.h5stTool.__genH5st({
                            appid: "jd-cphdeveloper-m",
                            body: JSON.stringify(body),
                            functionId: fn,
                        })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.get('https://api.m.jd.com/api', {
                                'cookie': this.user.cookie,
                                'origin': 'https://wqs.jd.com',
                                'referer': 'https://wqs.jd.com/',
                                'user-agent': this.user.UserAgent,
                                'x-referer-page': 'https://wqs.jd.com/my/fav/goods_fav.shtml',
                                'x-rp-client': 'h5_1.0.0'
                            }, {
                                'appid': 'jd-cphdeveloper-m',
                                'functionId': fn,
                                'body': JSON.stringify(body),
                                'loginType': '2',
                                'h5st': h5st,
                                'sceneval': '2',
                                'g_login_type': '1',
                                'g_ty': 'ajax',
                                'appCode': 'ms0ca95114'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_RmFollowList.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data, i, venderIdList, i, arr, _i, _a, t, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.user = user;
                        this.h5stTool = new h5st_pro_1.H5ST("c420a", this.user.UserAgent, this.fp, 'https://wqs.jd.com/', 'https://wqs.jd.com/', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 15, , 16]);
                        i = 0;
                        _b.label = 3;
                    case 3:
                        if (!(i < 3)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.api('QueryShopFavList', {
                                'cp': '1',
                                'pageSize': '10',
                                'g_login_type': '0',
                                'appCode': 'msd95910c4',
                                'callback': "jsonpCBK".concat(this.getRandomWord()),
                            })];
                    case 4:
                        res = _b.sent();
                        console.log('当前关注店铺', res.totalNum * 1);
                        venderIdList = res.data.map(function (t) {
                            console.log(t.shopName);
                            return t.shopId;
                        });
                        if (venderIdList.length === 0) {
                            return [3 /*break*/, 8];
                        }
                        return [4 /*yield*/, this.api('batchunfollow', {
                                'shopId': venderIdList.join(','),
                                '_': Date.now(),
                                'g_login_type': 0,
                                'appCode': 'msd95910c4',
                                'callback': "jsonpCBK".concat(this.getRandomWord())
                            })];
                    case 5:
                        res = _b.sent();
                        res.iRet === '0' && console.log('取关成功');
                        return [4 /*yield*/, this.wait(4000)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 3];
                    case 8:
                        this.user.UserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
                        i = 0;
                        _b.label = 9;
                    case 9:
                        if (!(i < 3)) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.api2('queryFollowProduct', { "cp": 1, "pageSize": 10, "category": "", "promote": 0, "cutPrice": 0, "coupon": 0, "stock": 0, "area": "", "tenantCode": "jgm", "bizModelCode": "6", "bizModeClientType": "M", "externalLoginType": "1" })];
                    case 10:
                        res = _b.sent();
                        console.log('关注商品', res.totalNum);
                        arr = [];
                        for (_i = 0, _a = res.followProductList; _i < _a.length; _i++) {
                            t = _a[_i];
                            console.log(t.commTitle);
                            arr.push(t.commId);
                        }
                        if (arr.length === 0)
                            return [3 /*break*/, 14];
                        return [4 /*yield*/, this.api2('delFollowProduct', { "commId": arr.join(','), "tenantCode": "jgm", "bizModelCode": "6", "bizModeClientType": "M", "externalLoginType": "1" })];
                    case 11:
                        data = _b.sent();
                        data.code === '0' && console.log('取关成功');
                        return [4 /*yield*/, this.wait(4000)];
                    case 12:
                        _b.sent();
                        _b.label = 13;
                    case 13:
                        i++;
                        return [3 /*break*/, 9];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        e_2 = _b.sent();
                        console.log('error', e_2);
                        return [3 /*break*/, 16];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_RmFollowList;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_RmFollowList().init().then();
