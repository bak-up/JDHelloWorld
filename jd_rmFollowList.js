"use strict";
/**
 * 取消收藏店铺
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
exports.__esModule = true;
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Jd_RmFollowList = /** @class */ (function (_super) {
    __extends(Jd_RmFollowList, _super);
    function Jd_RmFollowList() {
        return _super.call(this) || this;
    }
    Jd_RmFollowList.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.run(this)];
                    case 1:
                        _a.sent();
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
                            'referer': 'https://wqs.jd.com/'
                        }, params)];
                    case 1:
                        res = _a.sent();
                        res = JSON.parse(res.match(/\(([\S\s]+)\);/)[1]);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    Jd_RmFollowList.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, venderIdList, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.api('QueryShopFavList', {
                                'cp': '1',
                                'pageSize': '10',
                                'g_login_type': '0',
                                'appCode': 'msd95910c4',
                                'callback': "jsonpCBK".concat(this.getRandomWord())
                            })];
                    case 2:
                        res = _a.sent();
                        console.log('当前关注店铺', res.totalNum * 1);
                        venderIdList = res.data.map(function (t) {
                            console.log(t.shopName);
                            return t.shopId;
                        });
                        if (!(venderIdList.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.api('batchunfollow', {
                                'shopId': venderIdList.join(','),
                                '_': Date.now(),
                                'g_login_type': 0,
                                'appCode': 'msd95910c4',
                                'callback': "jsonpCBK".concat(this.getRandomWord())
                            })];
                    case 3:
                        res = _a.sent();
                        res.iRet === '0' && console.log('取关成功');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.log('error', e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Jd_RmFollowList;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_RmFollowList().init().then();
