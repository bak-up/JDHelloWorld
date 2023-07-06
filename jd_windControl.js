"use strict";
/**
 * 我的PLUS综合分
 * cron: 30 9 * * 1
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
var jd_WindControl = /** @class */ (function (_super) {
    __extends(jd_WindControl, _super);
    function jd_WindControl() {
        return _super.call(this) || this;
    }
    jd_WindControl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.getFp()];
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
    jd_WindControl.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.h5stTool.__genH5st({
                            appid: 'plus_business',
                            body: JSON.stringify(body),
                            functionId: fn,
                        })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.post("https://api.m.jd.com/api?functionId=".concat(fn), new URLSearchParams({
                                appid: 'plus_business',
                                loginType: '2',
                                loginWQBiz: '',
                                functionId: fn,
                                body: '{}',
                                h5st: h5st,
                            }), {
                                'Host': 'api.m.jd.com',
                                'x-rp-client': 'h5_1.0.0',
                                'Origin': 'https://plus.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://plus.m.jd.com/rights/windControl',
                                'x-referer-page': 'https://plus.m.jd.com/rights/windControl',
                                'Cookie': this.user.cookie,
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    jd_WindControl.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.user = user;
                        res = void 0;
                        this.h5stTool = new h5st_pro_1.H5ST('b63ff', this.user.UserAgent, this.fp, 'https://plus.m.jd.com/rights/windControl', 'https://plus.m.jd.com');
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.api('windControl_queryScore_v1', {})];
                    case 2:
                        res = _a.sent();
                        console.log('综合：', res.rs.userSynthesizeScore.totalScore);
                        console.log('信用：', res.rs.userDimensionScore.baiScore);
                        console.log('购物合规：', res.rs.userDimensionScore.shop);
                        console.log('售后行为：', res.rs.userDimensionScore.active);
                        console.log('账户信息：', res.rs.userDimensionScore.accountInfo);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, this.wait(3000)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return jd_WindControl;
}(TS_JDHelloWorld_1.JDHelloWorld));
new jd_WindControl().init().then();
