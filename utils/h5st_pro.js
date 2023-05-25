"use strict";
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
exports.H5ST = void 0;
var axios_1 = require("axios");
var date_fns_1 = require("date-fns");
var CryptoJS = require("crypto-js");
var H5ST = /** @class */ (function () {
    function H5ST(appId, ua, fp, url, og, pin) {
        this.appId = appId;
        this.ua = ua;
        this.iosVer = ua.match(/iPhone OS (\d{2}_\d)/)[1];
        this.fp = fp;
        this.url = url;
        this.og = og;
        this.pin = pin || '';
        this.api = 'https://sharecodepool.cnmb.win/api';
    }
    H5ST.prototype.__genAlgo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expandParams, algo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.time = Date.now();
                        this.timestamp = (0, date_fns_1.format)(this.time, "yyyyMMddHHmmssSSS");
                        return [4 /*yield*/, axios_1.default.post("".concat(this.api, "/expandParams"), {
                                iosVer: this.iosVer,
                                ua: this.ua,
                                pin: this.pin,
                                url: this.url,
                                og: this.og,
                                appId: this.appId,
                                fp: this.fp
                            })];
                    case 1:
                        expandParams = (_a.sent()).data;
                        return [4 /*yield*/, axios_1.default.post("https://cactus.jd.com/request_algo?g_ty=ajax", {
                                'version': '3.1',
                                'fp': this.fp,
                                'appId': this.appId.toString(),
                                'timestamp': this.time,
                                'platform': 'web',
                                'expandParams': expandParams
                            }, {
                                headers: {
                                    'authority': 'cactus.jd.com',
                                    'accept': 'application/json',
                                    'content-type': 'application/json',
                                    'origin': this.og,
                                    'referer': this.og,
                                    'user-agent': this.ua
                                }
                            })];
                    case 2:
                        algo = (_a.sent()).data;
                        this.tk = algo.data.result.tk;
                        this.rd = algo.data.result.algo.match(/rd='(.*)'/)[1];
                        this.enc = algo.data.result.algo.match(/algo\.(.*)\(/)[1];
                        return [2 /*return*/];
                }
            });
        });
    };
    H5ST.prototype.__genKey = function (tk, fp, ts, ai, algo) {
        var str = "".concat(tk).concat(fp).concat(ts).concat(ai).concat(this.rd);
        return algo[this.enc](str, tk);
    };
    H5ST.prototype.__genH5st = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var y, s, _i, _a, key, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        y = this.__genKey(this.tk, this.fp, this.timestamp, this.appId, CryptoJS).toString(CryptoJS.enc.Hex);
                        s = '';
                        for (_i = 0, _a = Object.keys(body); _i < _a.length; _i++) {
                            key = _a[_i];
                            key === 'body' ? s += "".concat(key, ":").concat(CryptoJS.SHA256(body[key]).toString(CryptoJS.enc.Hex), "&") : s += "".concat(key, ":").concat(body[key], "&");
                        }
                        s = s.slice(0, -1);
                        return [4 /*yield*/, axios_1.default.post("".concat(this.api, "/h5st"), { s: s, y: y, iosVer: this.iosVer, pin: this.pin, fp: this.fp })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, encodeURIComponent("".concat(this.timestamp, ";").concat(this.fp, ";").concat(this.appId.toString(), ";").concat(this.tk, ";").concat(data.s, ";3.1;").concat(this.time.toString(), ";").concat(data.u))];
                }
            });
        });
    };
    return H5ST;
}());
exports.H5ST = H5ST;
