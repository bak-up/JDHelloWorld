"use strict";
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
var jsdom_1 = require("jsdom");
var fs_1 = require("fs");
var crypto_js_1 = require("crypto-js");
var Jd_fruit_help = /** @class */ (function (_super) {
    __extends(Jd_fruit_help, _super);
    function Jd_fruit_help() {
        var _this = _super.call(this) || this;
        _this.shareCodeSelf = [];
        return _this;
    }
    Jd_fruit_help.prototype.init = function () {
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
    Jd_fruit_help.prototype.h5stToolInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dom;
            return __generator(this, function (_a) {
                dom = new jsdom_1.JSDOM("<body><script>".concat((0, fs_1.readFileSync)('utils/h5st_47.js').toString(), "</script></body>"), {
                    url: "http://localhost",
                    userAgent: this.user.UserAgent,
                    runScripts: "dangerously",
                    resources: new jsdom_1.ResourceLoader({
                        userAgent: this.user.UserAgent
                    }),
                    includeNodeLocations: true,
                    storageQuota: 1000000000,
                    pretendToBeVisual: true,
                    virtualConsole: new jsdom_1.VirtualConsole()
                });
                this.h5stTool = new dom.window.ParamsSign({ appId: this.appId });
                return [2 /*return*/];
            });
        });
    };
    Jd_fruit_help.prototype.api = function (fn, body) {
        return __awaiter(this, void 0, void 0, function () {
            var t, h5st;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = Date.now();
                        return [4 /*yield*/, this.h5stTool.sign({
                                appid: 'hot_channel',
                                body: crypto_js_1.default.SHA256(JSON.stringify(body)).toString(crypto_js_1.default.enc.Hex),
                                client: 'android',
                                clientVersion: '9.17.240',
                                functionId: fn,
                                timestamp: t.toString()
                            })];
                    case 1:
                        h5st = (_a.sent()).h5st;
                        return [4 /*yield*/, this.post('https://api.m.jd.com/wxsport_hbrain_draw', "functionId=".concat(fn, "&body=").concat(encodeURIComponent(JSON.stringify(body)), "&appid=hot_channel&timestamp=").concat(t, "&client=android&clientVersion=9.17.240&h5st=").concat(h5st), {
                                'Host': 'api.m.jd.com',
                                'User-Agent': this.user.UserAgent,
                                'Cookie': this.user.cookie,
                                'xweb_xhr': '1',
                                'X-Rp-Client': 'mini_2.0.0',
                                'X-Referer-Package': 'wx91d27dbf599dff74',
                                'wqreferer': 'http://wq.jd.com/wxapp/pages/index/index',
                                'X-Referer-Page': '/pages/index/index',
                                'Referer': 'https://servicewechat.com/wx91d27dbf599dff74/752/page-frame.html'
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Jd_fruit_help.prototype.main = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.user = user;
                        this.user.UserAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X ".concat(this.getIosVer(), ") AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/6.8.0(0x16080000) NetType/WIFI MiniProgramEnv/Mac MacWechat/WMPF MacWechat/3.8.8(0x13080811) XWEB/1216");
                        this.appId = 'd983f';
                        return [4 /*yield*/, this.h5stToolInit()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.api('wxsport_hbrain_draw', {})];
                    case 2:
                        res = _a.sent();
                        this.o2s(res);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log('获取失败', e_1);
                        return [3 /*break*/, 4];
                    case 4: return [4 /*yield*/, this.wait(5000)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Jd_fruit_help;
}(TS_JDHelloWorld_1.JDHelloWorld));
new Jd_fruit_help().init().then();
