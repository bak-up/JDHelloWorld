"use strict";
/**
 * 极速版
 * cron: 35 10 * * *
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
var h5st_pro_1 = require("./utils/h5st_pro");
var TS_JDHelloWorld_1 = require("./TS_JDHelloWorld");
var Speed_Sign = /** @class */ (function (_super) {
    __extends(Speed_Sign, _super);
    function Speed_Sign() {
        return _super.call(this) || this;
    }
    Speed_Sign.prototype.init = function () {
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
    Speed_Sign.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = Date.now();
                        return [4 /*yield*/, this.h5stTool.__genH5st({
                                appid: 'activities_platform',
                                body: JSON.stringify({}),
                                client: 'ios',
                                clientVersion: '4.3.0',
                                functionId: fn,
                                t: timestamp.toString()
                            })];
                    case 1:
                        h5st = _a.sent();
                        return [4 /*yield*/, this.get("https://api.m.jd.com/?functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&t=").concat(timestamp, "&appid=activities_platform&client=ios&clientVersion=4.3.0&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://prodev.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Referer': 'https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html',
                                'Cookie': this.user.cookie
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Speed_Sign.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var i, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.user = user;
                        this.user.UserAgent = "jdltapp;iPhone;4.3.0;Mozilla/5.0 (iPhone; CPU iPhone OS ".concat(this.getIosVer(), " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;");
                        this.h5stTool = new h5st_pro_1.H5ST("07244", this.user.UserAgent, this.fp, 'https://prodev.m.jd.com/jdlite/active/31U4T6S4PbcK83HyLPioeCWrD63j/index.html', 'https://prodev.m.jd.com', this.user.UserName);
                        return [4 /*yield*/, this.h5stTool.__genAlgo()];
                    case 1:
                        _a.sent();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < 3)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.api('spring_reward_receive', { "inviter": "", "linkId": "Eu7-E0CUzqYyhZJo9d3YkQ" })];
                    case 3:
                        res = _a.sent();
                        try {
                            console.log(res.data.received.prizeDesc, res.data.received.amount);
                        }
                        catch (e) {
                            return [3 /*break*/, 6];
                        }
                        return [4 /*yield*/, this.wait(5000)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Speed_Sign;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Speed_Sign().init().then();
