webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/Till/cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tillRepository__ = __webpack_require__("./ClientApp/app/Till/tillRepository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_menuLine_model__ = __webpack_require__("./ClientApp/app/models/menuLine.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_functionKey_model__ = __webpack_require__("./ClientApp/app/models/functionKey.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Cart = /** @class */ (function () {
    function Cart(trepo) {
        this.trepo = trepo;
        this.displayLines = new Array();
        this.paid = 0;
        this.change = 0;
        this.qty = 0;
        this.price = 0;
        this.displayLines.push("www.visualbusinessretail.com");
        this.displayLines.push("Support: 02080901449");
        this.displayLines.push("Customer Id: C00050");
        this.displayLines.push("Copyright @ 2018 VBR");
        this.orderType = "Table";
        this.orderId = 2;
        this.seates = "1";
        this.slipNo = 0;
        this.menuHeaderId = "MAIN";
        this.menuHeaderCurrentPage = 1;
        this.menuLineCurrentPage = 1;
        if (this.menuLine == null) {
            this.menuLine = new __WEBPACK_IMPORTED_MODULE_2__models_menuLine_model__["a" /* MenuLine */]();
        }
        this.trepo.getMenuHeaders();
        this.trepo.getMenuLines(this.menuHeaderId);
        this.trepo.getFunctionKeys();
        if (this.functionKey == null) {
            this.functionKey = new __WEBPACK_IMPORTED_MODULE_3__models_functionKey_model__["a" /* FunctionKey */]();
        }
        this.mod = "START";
    }
    Cart.prototype.getItemCount = function () {
        if (this.trepo.eposTransLines != null && this.trepo.eposTransLines.length > 0) {
            return this.trepo.eposTransLines.filter(function (l) { return ((!l.lineStatus) && (l.entryType == 0)); }).length;
        }
        else {
            return 0;
        }
    };
    Cart.prototype.getPurchaseTotalIncDiscount = function () {
        try {
            if (this.trepo.eposTransLines != null && this.trepo.eposTransLines.length > 0) {
                return this.trepo.eposTransLines.filter(function (l) { return ((!l.lineStatus) && (l.entryType == 0)); })
                    .map(function (e) { return e.amount; }).reduce(function (s, u) { return s + u + 0; });
            }
            else {
                return 0;
            }
        }
        catch (_a) {
            return 0;
        }
    };
    Cart.prototype.getPurchaseTotalExcDiscount = function () {
        try {
            if (this.trepo.eposTransLines != null && this.trepo.eposTransLines.length > 0) {
                return this.trepo.eposTransLines.filter(function (l) { return ((!l.lineStatus) && (l.entryType == 0)); })
                    .map(function (e) { return e.netAmount; }).reduce(function (s, u) { return s + u + 0; });
            }
            else {
                return 0;
            }
        }
        catch (_a) {
            return 0;
        }
    };
    Cart.prototype.getTotal = function () {
        try {
            if (this.trepo.eposTransLines != null && this.trepo.eposTransLines.length > 0) {
                return this.trepo.eposTransLines.filter(function (l) { return ((!l.lineStatus)); })
                    .map(function (e) { return e.netAmount; }).reduce(function (s, u) { return s + u + 0; });
            }
            else {
                return 0;
            }
        }
        catch (_a) {
            return 0;
        }
    };
    Cart.prototype.getDiscount = function () {
        try {
            if (this.trepo.eposTransLines != null && this.trepo.eposTransLines.length > 0) {
                return this.trepo.eposTransLines.filter(function (l) { return ((!l.lineStatus) && (l.entryType == 0)); })
                    .map(function (e) { return e.discountAmount; }).reduce(function (s, u) { return s + u + 0; });
            }
            else {
                return 0;
            }
        }
        catch (_a) {
            return 0;
        }
    };
    Cart.prototype.getPaidAmount = function () {
        try {
            if (this.trepo.eposTransLines != null && this.trepo.eposTransLines.length > 0) {
                this.paid = this.trepo.eposTransLines.filter(function (l) { return ((!l.lineStatus) && (l.entryType == 2) && (!l.isChange)); })
                    .map(function (e) { return e.netAmount; }).reduce(function (s, u) { return s + u + 0; });
                return this.paid;
            }
            else {
                return this.paid;
            }
        }
        catch (_a) {
            return this.paid;
        }
    };
    Cart.prototype.getChangeAmount = function () {
        try {
            if (this.trepo.eposTransLines != null && this.trepo.eposTransLines.length > 0) {
                this.change = this.trepo.eposTransLines.filter(function (l) { return ((!l.lineStatus) && (l.entryType == 2) && (l.isChange)); })
                    .map(function (e) { return e.netAmount; }).reduce(function (s, u) { return s + u + 0; });
                return this.change;
            }
            else {
                return this.change;
            }
        }
        catch (_a) {
            return this.change;
        }
    };
    Cart.prototype.focusJournalInput = function () {
        document.getElementById("journalInput").focus();
    };
    Object.defineProperty(Cart.prototype, "journalInputElementValue", {
        get: function () {
            return document.getElementById("journalInput").value;
        },
        enumerable: true,
        configurable: true
    });
    Cart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tillRepository__["a" /* TillRepository */]])
    ], Cart);
    return Cart;
}());



/***/ }),

/***/ "./ClientApp/app/Till/details.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row w-100 m-0 p-0\" style=\"min-height:25px;max-height:25px\">\r\n    <table class=\"table table-condensed m-0 p-0\"  style=\"min-height:25px;max-height:25px\">\r\n        <tr class=\"m-0 p-0 text-success\" style=\"min-height:25px;max-height:25px\">\r\n            <th class=\"m-0 p-0 text-left\">{{mod}}</th>\r\n            <th class=\"m-0 p-0 text-center\">{{orderType}} Id: {{orderId}} Seats: {{seats}}</th>\r\n            <th class=\"m-0 p-0 px-2 text-right\">Items: {{noOfItems}}</th>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<div class=\"row w-100 m-0 p-0\" style=\"min-height:100px;max-height:100px\">\r\n    <div class=\"col m-0 p-0 text-info text-left\" style=\"overflow-y:scroll; height:100px\">\r\n        <table class=\"table table-striped m-0 p-0\"  style=\"min-height:100px;max-height:100px\">\r\n            <tr class=\"m-0 p-0\" style=\"min-height:25px;max-height:25px\" *ngFor=\"let line of displayLines\">\r\n                <td class=\"m-0 p-0\">{{line}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col m-0 p-0 text-right\">\r\n        <table class=\"table table-striped m-0 p-0\"  style=\"min-height:100px;max-height:100px\">\r\n            <tr class=\"m-0 p-0\" style=\"min-height:25px;max-height:25px\">\r\n                <th class=\"my-0 py-0 text-danger text-left \">TOTAL</th>\r\n                <th class=\"m-0 p-0 px-2 text-danger text-right\">{{total?.toFixed(2)}}</th>\r\n            </tr>\r\n            <tr class=\"m-0 p-0\" style=\"min-height:25px;max-height:25px\">\r\n                <th class=\"my-0 py-0 text-warning text-left\">DISCOUNT</th>\r\n                <th class=\"m-0 p-0 px-2 text-warning text-right\">{{discount?.toFixed(2)}}</th>\r\n            </tr>\r\n            <tr class=\"m-0 p-0\" style=\"min-height:25px;max-height:25px\">\r\n                <th class=\"my-0 py-0 text-success text-left\">PAID</th>\r\n                <th class=\"m-0 p-0 px-2 text-success text-right\">{{paid?.toFixed(2)}}</th>\r\n            </tr>\r\n            <tr class=\"m-0 p-0\" style=\"min-height:25px;max-height:25px\">\r\n                <th class=\"my-0 py-0 text-info  text-left\">CHANGE</th>\r\n                <th class=\"m-0 p-0 px-2 text-info text-right\">{{change?.toFixed(2)}}</th>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/Till/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__("./ClientApp/app/Till/cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(cart) {
        this.cart = cart;
    }
    Object.defineProperty(DetailsComponent.prototype, "purchaseTotalIncDiscount", {
        get: function () {
            return this.cart.getPurchaseTotalIncDiscount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "purchaseTotalExcDiscount", {
        get: function () {
            return this.cart.getPurchaseTotalExcDiscount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "noOfItems", {
        get: function () {
            return this.cart.getItemCount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "total", {
        get: function () {
            return this.cart.getTotal();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "discount", {
        get: function () {
            return this.cart.getDiscount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "paid", {
        get: function () {
            return this.cart.getPaidAmount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "change", {
        get: function () {
            return this.cart.getChangeAmount();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "displayLines", {
        get: function () {
            return this.cart.displayLines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "orderType", {
        get: function () {
            return this.cart.orderType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "orderId", {
        get: function () {
            return this.cart.orderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "seats", {
        get: function () {
            return this.cart.seates;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DetailsComponent.prototype, "mod", {
        get: function () {
            return this.cart.mod;
        },
        enumerable: true,
        configurable: true
    });
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "details-lines",
            template: __webpack_require__("./ClientApp/app/Till/details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart__["a" /* Cart */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/Till/functionKey.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\" style=\"min-height:200px\">\r\n    <div class=\"col m-0 p-0\">\r\n        <table class=\"table m-0 p-0\">\r\n            <tr *ngFor=\"let line1 of functionKeys1\" class=\"m-0 p-0\">\r\n                <td class=\"m-0 p-0\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-block text-white m-0 p-0\" \r\n                    style=\"min-height:50px\"\r\n                    [style.background]=\"line1==functionKey ?'black':line1.htmlColour\"\r\n                    (click)=\"setFunctionKey(line1)\">\r\n                            {{line1.description}}\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col m-0 p-0\">\r\n        <table class=\"table m-0 p-0\">\r\n            <tr *ngFor=\"let line2 of functionKeys2\" class=\"m-0 p-0\">\r\n                <td class=\"m-0 p-0\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-block text-white m-0 p-0\" \r\n                    style=\"min-height:50px\"\r\n                    [style.background]=\"line2==functionKey ?'black':line2.htmlColour\"\r\n                    (click)=\"setFunctionKey(line2)\">\r\n                            {{line2.description}}\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col m-0 p-0\">\r\n        <table class=\"table m-0 p-0\">\r\n            <tr *ngFor=\"let line3 of functionKeys3\" class=\"m-0 p-0\">\r\n                <td class=\"m-0 p-0\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-block text-white m-0 p-0\" \r\n                    style=\"min-height:50px\"\r\n                    [style.background]=\"line3==functionKey ?'black':line3.htmlColour\"\r\n                    (click)=\"setFunctionKey(line3)\">\r\n                            {{line3.description}}\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/Till/functionKey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionKeyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__("./ClientApp/app/Till/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tillRepository__ = __webpack_require__("./ClientApp/app/Till/tillRepository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FunctionKeyComponent = /** @class */ (function () {
    function FunctionKeyComponent(trepo, cart) {
        this.trepo = trepo;
        this.cart = cart;
    }
    FunctionKeyComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(FunctionKeyComponent.prototype, "functionKeys1", {
        get: function () {
            var _this = this;
            if (this.trepo.functionKeys != null) {
                return this.trepo.functionKeys.filter(function (m) { return m.mod.toUpperCase() == _this.cart.mod; })
                    .filter(function (l) { return l.index % 3 == 1; });
            }
            else {
                this.trepo.functionKeys;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionKeyComponent.prototype, "functionKeys2", {
        get: function () {
            var _this = this;
            if (this.trepo.functionKeys != null) {
                return this.trepo.functionKeys.filter(function (m) { return m.mod.toUpperCase() == _this.cart.mod; })
                    .filter(function (l) { return l.index % 3 == 2; });
            }
            else {
                this.trepo.functionKeys;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FunctionKeyComponent.prototype, "functionKeys3", {
        get: function () {
            var _this = this;
            if (this.trepo.functionKeys != null) {
                return this.trepo.functionKeys.filter(function (m) { return m.mod.toUpperCase() == _this.cart.mod; })
                    .filter(function (l) { return l.index % 3 == 0; });
            }
            else {
                this.trepo.functionKeys;
            }
        },
        enumerable: true,
        configurable: true
    });
    FunctionKeyComponent.prototype.setFunctionKey = function (line) {
        this.cart.functionKey = line;
    };
    Object.defineProperty(FunctionKeyComponent.prototype, "functionKey", {
        get: function () {
            return this.cart.functionKey;
        },
        enumerable: true,
        configurable: true
    });
    FunctionKeyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "function-key",
            template: __webpack_require__("./ClientApp/app/Till/functionKey.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__tillRepository__["a" /* TillRepository */], __WEBPACK_IMPORTED_MODULE_1__cart__["a" /* Cart */]])
    ], FunctionKeyComponent);
    return FunctionKeyComponent;
}());



/***/ }),

/***/ "./ClientApp/app/Till/item.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Ttem</th></tr>\r\n    <tr><th>Name</th><td>{{item?.description || 'No Data'}}</td></tr>\r\n    <tr><th>Category</th><td>{{item?.department || 'No Data'}}</td></tr>\r\n</table>"

/***/ }),

/***/ "./ClientApp/app/Till/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tillRepository__ = __webpack_require__("./ClientApp/app/Till/tillRepository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = /** @class */ (function () {
    function ItemComponent(trepo, router, activeRoute) {
        this.trepo = trepo;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var id = this.activeRoute.snapshot.params["id"];
        if (id) {
            this.trepo.getItem(id);
        }
        else {
            this.router.navigateByUrl("/");
        }
    };
    Object.defineProperty(ItemComponent.prototype, "item", {
        get: function () {
            return this.trepo.item;
        },
        enumerable: true,
        configurable: true
    });
    ItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "item-details",
            template: __webpack_require__("./ClientApp/app/Till/item.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tillRepository__["a" /* TillRepository */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./ClientApp/app/Till/journal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\" style=\"min-height:400px;max-height:400px\" (click)=\"focusJournalInput()\">\r\n\r\n    <input id=\"journalInput\" name=\"journalInput\" class=\"form-control m-0 p-0\" \r\n        style=\"max-height:25px;min-height:25px\" (keyup)=\"onKey($event)\" autofocus/>\r\n    <label class=\"form-control m-0 p-0\" style=\"max-height:25px;min-height:25px\">{{journalText}}</label>\r\n\r\n    <div class=\"w-100 m-0 p-0\" style=\"overflow-y:scroll; height:350px\">\r\n        <table class=\"table table-striped m-0 p-0\"  style=\"min-height:350px;max-height:350px\">\r\n            <thead class=\"m-0 p-0\">\r\n                <tr class=\"m-0 p-0\" style=\"min-height:25px;max-height:25px\">\r\n                    <th class=\"m-0 p-0 pl-1\">Description</th>\r\n                    <th class=\"m-0 p-0 text-center\">QTY</th>\r\n                    <th class=\"m-0 p-0 text-right\">Price</th>\r\n                    <th class=\"m-0 p-0 text-right\">DIS%</th>\r\n                    <th class=\"m-0 p-0 pr-1 text-right\">Amount</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class=\"m-0 p-0\">\r\n                <tr *ngFor=\"let eposTransline of eposTranslines\" class=\"m-0 p-0\" style=\"min-height:25px;max-height:25px\"\r\n                    [ngClass]=\"{'text-danger':eposTransline.lineStatus}\">\r\n                    <td class=\"m-0 p-0 pl-1\">\r\n                        {{eposTransline.description}}\r\n                    </td>\r\n                    <td class=\"m-0 p-0 text-center\">\r\n                        {{eposTransline.quantity}}\r\n                    </td>\r\n                    <td class=\"m-0 p-0 text-right\">\r\n                        {{eposTransline.price.toFixed(2)}}\r\n                    </td>\r\n                    <td class=\"m-0 p-0 text-right\">\r\n                            {{eposTransline.discountPercentage.toFixed(2)}}\r\n                        </td>\r\n                    <td class=\"m-0 p-0 pr-1 text-right\">\r\n                        {{eposTransline.netAmount.toFixed(2)}}\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/Till/journal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tillRepository__ = __webpack_require__("./ClientApp/app/Till/tillRepository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__("./ClientApp/app/Till/cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JournalComponent = /** @class */ (function () {
    function JournalComponent(trepo, cart) {
        this.trepo = trepo;
        this.cart = cart;
    }
    JournalComponent.prototype.ngOnInit = function () {
        this.cart.slipNo = 1204594;
        this.trepo.getEposTransaction(this.cart.slipNo);
        this.trepo.getEposTransLines(this.cart.slipNo);
    };
    JournalComponent.prototype.onKey = function (event) {
        if (event.keyCode == 13) {
            this.inputValue = this.cart.journalInputElementValue;
            this.journalText = this.inputValue;
        }
    };
    JournalComponent.prototype.getInputValue = function () {
        this.inputValue = this.cart.journalInputElementValue;
        this.journalText = this.inputValue;
    };
    JournalComponent.prototype.focusJournalInput = function () {
        this.cart.focusJournalInput();
    };
    Object.defineProperty(JournalComponent.prototype, "journalText", {
        get: function () {
            return this.cart.journalText;
        },
        set: function (newText) {
            this.cart.journalText = newText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JournalComponent.prototype, "eposTranslines", {
        get: function () {
            return this.trepo.eposTransLines;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JournalComponent.prototype, "qty", {
        get: function () {
            return this.cart.qty;
        },
        set: function (newQty) {
            this.cart.qty = newQty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JournalComponent.prototype, "price", {
        get: function () {
            return this.cart.price;
        },
        set: function (newPrice) {
            this.cart.price = newPrice;
        },
        enumerable: true,
        configurable: true
    });
    JournalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "journal-lines",
            template: __webpack_require__("./ClientApp/app/Till/journal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tillRepository__["a" /* TillRepository */], __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* Cart */]])
    ], JournalComponent);
    return JournalComponent;
}());



/***/ }),

/***/ "./ClientApp/app/Till/menuBtn.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\" style=\"min-height:450px\">\r\n    <div class=\"col m-0 p-0\">\r\n        <table class=\"table m-0 p-0\">\r\n            <tr *ngFor=\"let menuLine1 of menuLines1\" class=\"m-0 p-0\">\r\n                <td class=\"m-0 p-0\">\r\n                        <button type=\"button\" class=\"btn btn-sm btn-block text-white m-0 p-0\" \r\n                        style=\"min-height:50px\"\r\n                        [style.background]=\"menuLine==menuLine1 ?'black':menuLine1.htmlColour\"\r\n                        (click)=\"setMenuLine(menuLine1)\">\r\n                                {{menuLine1.description}}\r\n                        </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col m-0 p-0\">\r\n        <table class=\"table m-0 p-0\">\r\n            <tr *ngFor=\"let menuLine2 of menuLines2\" class=\"m-0 p-0\">\r\n                <td class=\"m-0 p-0\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-block text-white m-0 p-0\" \r\n                        style=\"min-height:50px\"\r\n                        [style.background]=\"menuLine==menuLine2 ?'black':menuLine2.htmlColour\"\r\n                        (click)=\"setMenuLine(menuLine2)\">\r\n                            {{menuLine2.description}}\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"col m-0 p-0\">\r\n        <table class=\"table m-0 p-0\">\r\n            <tr *ngFor=\"let menuHeader of menuHeaders\" class=\"m-0 p-0\">\r\n                <td class=\"m-0 p-0\">\r\n                    <button type=\"button\" class=\"btn btn-sm btn-block text-white m-0 p-0\" \r\n                        style=\"min-height:50px\"\r\n                        [style.background]=\"menuHeaderId==menuHeader.menuId?'black':menuHeader.htmlColour\"\r\n                        (click)=\"setMenuHeaderId(menuHeader.menuId)\">\r\n                            {{menuHeader.description}}\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>  \r\n</div>\r\n<div class=\"row m-0 p-0\">\r\n    <div class=\"col m-0 p-0\">\r\n        <div *ngIf=\"MenuLinePages.length > 1\" class=\"text-left my-1\">\r\n            <button *ngFor=\"let page of MenuLinePages\" class=\"btn btn-outline-primary btn-sm mx-1\"\r\n                [class.active]=\"CurrentMenuLinePage == page\"\r\n                (click)=\"ChangeMenuLinePage(page)\">\r\n                    {{page}}\r\n            </button>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"col text-right my-1\">\r\n        <div class=\"btn-group m-0 p-0\">\r\n            <button type=\"button\" class=\"btn btn-success btn-sm mx-1\">\r\n                <i class=\"fa fa-cutlery fa-lg\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-success btn-sm mx-1\">\r\n                <i class=\"fa fa-beer fa-lg\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-success btn-sm mx-1\"\r\n                (click)=\"setMenuHeaderId('MAIN')\">\r\n                <i class=\"fa fa-refresh fa-lg\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col m-0 p-0\">\r\n        <div *ngIf=\"TotalMenuHeaderPages > 1\" class=\"text-center my-1\">\r\n            <button type=\"button\" class=\"btn btn-warning btn-sm\"\r\n                (click)=\"ChangeMenuHeaderPageBack()\">\r\n                    <i class=\"fa fa-arrow-circle-left fa-lg\"></i>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-success btn-sm\">\r\n                <span class=\"badge badge-light\">{{CurrentMenuHeaderPage}}</span>of\r\n                <span class=\"badge badge-light\">{{TotalMenuHeaderPages}}</span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-warning btn-sm\"\r\n                (click)=\"ChangeMenuHeaderPageNext()\">\r\n                    <i class=\"fa fa-arrow-circle-right fa-lg\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/Till/menuBtn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tillRepository__ = __webpack_require__("./ClientApp/app/Till/tillRepository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__("./ClientApp/app/Till/cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuBtnComponent = /** @class */ (function () {
    function MenuBtnComponent(trepo, cart) {
        this.trepo = trepo;
        this.cart = cart;
    }
    MenuBtnComponent.prototype.ngOnInit = function () {
        this.linesPerPage = 9;
    };
    Object.defineProperty(MenuBtnComponent.prototype, "menuLine", {
        get: function () {
            return this.cart.menuLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "menuHeaderId", {
        get: function () {
            return this.cart.menuHeaderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "menuLines1", {
        get: function () {
            var pageIndex = (this.cart.menuLineCurrentPage - 1) * this.linesPerPage;
            if (this.trepo.menuLines != null) {
                return this.trepo.menuLines.filter(function (l) { return l.keyId % 2 == 1; }).slice(pageIndex, pageIndex + this.linesPerPage);
            }
            else {
                this.trepo.menuLines;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "menuLines2", {
        get: function () {
            var pageIndex = (this.cart.menuLineCurrentPage - 1) * this.linesPerPage;
            if (this.trepo.menuLines != null) {
                return this.trepo.menuLines.filter(function (l) { return l.keyId % 2 == 0; }).slice(pageIndex, pageIndex + this.linesPerPage);
            }
            else {
                this.trepo.menuLines;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "menuHeaders", {
        get: function () {
            var pageIndex = (this.cart.menuHeaderCurrentPage - 1) * this.linesPerPage;
            if (this.trepo.menuHeaders != null) {
                return this.trepo.menuHeaders.slice(pageIndex, pageIndex + this.linesPerPage);
            }
            else {
                return this.trepo.menuHeaders;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "TotalMenuHeaderPages", {
        get: function () {
            if (this.trepo.menuHeaders != null) {
                return (Math.ceil(this.trepo.menuHeaders.length / this.linesPerPage));
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "MenuLinePages", {
        get: function () {
            if (this.trepo.menuLines != null) {
                var btnPerPage = this.linesPerPage * 2;
                return Array(Math.ceil(this.trepo.menuLines.length / btnPerPage)).fill(0).map(function (x, i) { return i + 1; });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "CurrentMenuHeaderPage", {
        get: function () {
            return this.cart.menuHeaderCurrentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuBtnComponent.prototype, "CurrentMenuLinePage", {
        get: function () {
            return this.cart.menuLineCurrentPage;
        },
        enumerable: true,
        configurable: true
    });
    MenuBtnComponent.prototype.ChangeMenuHeaderPageNext = function () {
        if (this.cart.menuHeaderCurrentPage < this.TotalMenuHeaderPages) {
            this.cart.menuHeaderCurrentPage++;
        }
        else {
            this.cart.menuHeaderCurrentPage = 1;
        }
    };
    MenuBtnComponent.prototype.ChangeMenuHeaderPageBack = function () {
        if (this.cart.menuHeaderCurrentPage > 1) {
            this.cart.menuHeaderCurrentPage--;
        }
        else {
            this.cart.menuHeaderCurrentPage = this.TotalMenuHeaderPages;
        }
    };
    MenuBtnComponent.prototype.ChangeMenuLinePage = function (newPage) {
        this.cart.menuLineCurrentPage = newPage;
    };
    MenuBtnComponent.prototype.setMenuLine = function (line) {
        this.cart.menuLine = line;
        if (line.keyCommand == 1) {
            this.cart.menuHeaderId = line.keyValue;
            this.trepo.getMenuLines(line.keyValue);
            this.cart.menuLineCurrentPage = 1;
        }
        else {
            this.trepo.eposTransLines.length = 0;
            this.trepo.getEposTransLines(1206740);
        }
    };
    MenuBtnComponent.prototype.setMenuHeaderId = function (id) {
        this.cart.menuHeaderId = id;
        this.cart.menuLineCurrentPage = 1;
        this.trepo.getMenuLines(id);
    };
    MenuBtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "menu-btn",
            template: __webpack_require__("./ClientApp/app/Till/menuBtn.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tillRepository__["a" /* TillRepository */], __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* Cart */]])
    ], MenuBtnComponent);
    return MenuBtnComponent;
}());



/***/ }),

/***/ "./ClientApp/app/Till/number.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0 text-center\" style=\"min-height:27px;max-height:27px\">\r\n    <table class=\"table table-condensed m-0 p-0\"  style=\"min-height:27px;max-height:27px\">\r\n        <tr class=\"m-0 p-0 text-success\" style=\"min-height:27px;max-height:27px\">\r\n            <td class=\"m-0 p-0 text-left\"><current-time></current-time></td>\r\n            <td class=\"m-0 p-0 text-left\">\r\n                    <button class=\"btn btn-sm btn-success\" (click)=\"gohome()\">\r\n                            <i class=\"fa fa-home fa-sm\"></i>\r\n                    </button>\r\n            </td>\r\n            <td class=\"m-0 p-0 text-right\">\r\n                    Pos: {{tillId}}\r\n                </td>\r\n            <td class=\"m-0 p-0 text-right\">\r\n                Device: {{deviceId}}\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<div class=\"row w-100 m-0 p-0\" style=\"min-height:200px;max-height:200px\">\r\n    <table class=\"table m-0 p-0\">\r\n        <tr class=\"m-0 p-0\">\r\n            <th class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    £0\r\n                </button>\r\n            </th>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    7\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    8\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    9\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-success m-0 p-0\"\r\n                    style=\"min-height:50px\">\r\n                    CLEAR\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        <tr class=\"m-0 p-0\">\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    £0\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    4\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    5\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    6\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-success m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    ENTER\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        <tr class=\"m-0 p-0\">\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    £0\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    1\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    2\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    3\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-danger m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    CARD\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        <tr class=\"m-0 p-0\">\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    £0\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    0\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    00\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-primary m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    X\r\n                </button>\r\n            </td>\r\n            <td class=\"m-0 p-0\" style=\"min-width:35px\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-danger m-0 p-0\" \r\n                    style=\"min-height:50px\">\r\n                    CASH\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/Till/number.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart__ = __webpack_require__("./ClientApp/app/Till/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NumberComponent = /** @class */ (function () {
    function NumberComponent(cart, repo, router) {
        this.cart = cart;
        this.repo = repo;
        this.router = router;
    }
    NumberComponent.prototype.gohome = function () {
        this.router.navigateByUrl("");
    };
    Object.defineProperty(NumberComponent.prototype, "deviceId", {
        get: function () {
            return this.repo.device.deviceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberComponent.prototype, "tillId", {
        get: function () {
            return this.repo.device.tillId;
        },
        enumerable: true,
        configurable: true
    });
    NumberComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "number-lines",
            template: __webpack_require__("./ClientApp/app/Till/number.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cart__["a" /* Cart */], __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], NumberComponent);
    return NumberComponent;
}());



/***/ }),

/***/ "./ClientApp/app/Till/till.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\" style=\"min-height: 768px\">\r\n\t<div class=\"col-6 m-0 p-0 text-left\">\r\n\t\t<journal-lines></journal-lines>\r\n\t\t<details-lines></details-lines>\r\n\t\t<function-key></function-key>\r\n\t</div>\r\n\t<div class=\"col-6 m-0 p-0 text-right\">\r\n\t\t<menu-btn></menu-btn>\r\n\t\t<number-lines></number-lines>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/Till/till.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TillComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TillComponent = /** @class */ (function () {
    function TillComponent() {
    }
    TillComponent.prototype.ngOnInit = function () { };
    TillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'till-component',
            template: __webpack_require__("./ClientApp/app/Till/till.component.html")
        })
    ], TillComponent);
    return TillComponent;
}());



/***/ }),

/***/ "./ClientApp/app/Till/till.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TillModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tillRepository__ = __webpack_require__("./ClientApp/app/Till/tillRepository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart__ = __webpack_require__("./ClientApp/app/Till/cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menuBtn_component__ = __webpack_require__("./ClientApp/app/Till/menuBtn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__journal_component__ = __webpack_require__("./ClientApp/app/Till/journal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_component__ = __webpack_require__("./ClientApp/app/Till/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__till_component__ = __webpack_require__("./ClientApp/app/Till/till.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__details_component__ = __webpack_require__("./ClientApp/app/Till/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__number_component__ = __webpack_require__("./ClientApp/app/Till/number.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__functionKey_component__ = __webpack_require__("./ClientApp/app/Till/functionKey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__time_component__ = __webpack_require__("./ClientApp/app/Till/time.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var TillModule = /** @class */ (function () {
    function TillModule() {
    }
    TillModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__menuBtn_component__["a" /* MenuBtnComponent */], __WEBPACK_IMPORTED_MODULE_5__journal_component__["a" /* JournalComponent */], __WEBPACK_IMPORTED_MODULE_7__till_component__["a" /* TillComponent */], __WEBPACK_IMPORTED_MODULE_6__item_component__["a" /* ItemComponent */], __WEBPACK_IMPORTED_MODULE_8__details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__number_component__["a" /* NumberComponent */], __WEBPACK_IMPORTED_MODULE_10__functionKey_component__["a" /* FunctionKeyComponent */], __WEBPACK_IMPORTED_MODULE_11__time_component__["a" /* TimeComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__tillRepository__["a" /* TillRepository */], __WEBPACK_IMPORTED_MODULE_3__cart__["a" /* Cart */]]
        })
    ], TillModule);
    return TillModule;
}());



/***/ }),

/***/ "./ClientApp/app/Till/tillRepository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TillRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var itemsUrl = "/api/items";
var menuHeadersUrl = "/api/menuHeaders";
var menuLinesUrl = "/api/menuLines";
var eposTransactionsUrl = "/api/eposTransactions";
var eposTransLinesUrl = "/api/eposTransLines";
var functionKeysUrl = "/api/functionKeys";
var TillRepository = /** @class */ (function () {
    function TillRepository(http, repo) {
        this.http = http;
        this.repo = repo;
    }
    TillRepository.prototype.getItem = function (id) {
        var _this = this;
        var url = itemsUrl + "/" + id;
        url += "?customerId=" + this.repo.filter.customerId;
        url += "&storeId=" + this.repo.filter.storeId;
        this.repo.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.item = response; });
    };
    TillRepository.prototype.getMenuLines = function (id) {
        var _this = this;
        var url = menuLinesUrl + "/" + id;
        url += "?customerId=" + this.repo.filter.customerId;
        url += "&storeId=" + this.repo.filter.storeId;
        this.repo.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.menuLines = response; });
    };
    TillRepository.prototype.getMenuHeaders = function () {
        var _this = this;
        var url = menuHeadersUrl + "?customerId=" + this.repo.filter.customerId;
        url += "&storeId=" + this.repo.filter.storeId;
        this.repo.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.menuHeaders = response; });
    };
    TillRepository.prototype.getFunctionKeys = function () {
        var _this = this;
        var url = functionKeysUrl + "?customerId=" + this.repo.filter.customerId;
        url += "&storeId=" + this.repo.filter.storeId;
        this.repo.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.functionKeys = response; });
    };
    TillRepository.prototype.getEposTransaction = function (id) {
        var _this = this;
        var url = eposTransactionsUrl + "/" + id;
        url += "?customerId=" + this.repo.filter.customerId;
        url += "&storeId=" + this.repo.filter.storeId;
        url += "&tillId=" + this.repo.filter.tillId;
        this.repo.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.eposTransaction = response; });
    };
    TillRepository.prototype.getEposTransLines = function (id) {
        var _this = this;
        var url = eposTransLinesUrl + "/" + id;
        url += "?customerId=" + this.repo.filter.customerId;
        url += "&storeId=" + this.repo.filter.storeId;
        url += "&tillId=" + this.repo.filter.tillId;
        this.repo.sendRequest(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.eposTransLines = response; });
    };
    TillRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__models_repository__["a" /* Repository */]])
    ], TillRepository);
    return TillRepository;
}());



/***/ }),

/***/ "./ClientApp/app/Till/time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeComponent = /** @class */ (function () {
    function TimeComponent() {
        var _this = this;
        this.now = new Date();
        setInterval(function () {
            _this.now = new Date();
        }, 1000);
    }
    TimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "current-time",
            template: "{{ now |date: 'dd. MMMM yyyy hh:mm:ss' }}"
        }),
        __metadata("design:paramtypes", [])
    ], TimeComponent);
    return TimeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"px-2 m-0 w-100 h-100\" id=\"pos\">\r\n        <div class=\"navbar navbar-expand-xs bg-info navbar-dark m-0 p-0\" style=\"max-height:30px\">\r\n                <table class=\"table m-0 p-0\">\r\n                        <tr class=\"m-0 p-0\">\r\n                                <td class=\"m-0 p-0\">\r\n                                        <a class=\"navbar-brand\" href=\"#\">{{Device?.storeName||'VBR'}}</a>\r\n                                </td>\r\n                                <td class=\"m-0 p-0  text-left\">\r\n                                                <button class=\"btn btn-sm btn-success\" (click)=\"gohome()\">\r\n                                                        <i class=\"fa fa-home fa-lg\"></i>\r\n                                                </button>\r\n                                        </td>\r\n                                <td class=\"m-0 p-0  text-right\">\r\n                                        <button class=\"btn btn-sm btn-success\" (click)=\"fullscreen()\">\r\n                                                <i class=\"fa fa-window-restore fa-lg\"></i>\r\n                                        </button>\r\n                                </td>\r\n                                <td class=\"m-0 p-0 text-right\">\r\n                                        <a class=\"navbar-brand\" href=\"#\">{{Device?.customerId}}</a>\r\n                                </td>\r\n                        </tr>\r\n                </table>  \r\n        </div>\r\n        <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__ = __webpack_require__("./ClientApp/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(repo, router, authService) {
        this.repo = repo;
        this.router = router;
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repo.getSessionData("device").subscribe(function (response) {
            if (response != null) {
                _this.repo.setDevice(response);
                if ((response.UserId != "") && (response.Password != "")) {
                    _this.authService.userId = response.UserId;
                    _this.authService.password = response.Password;
                }
            }
        });
        if ((this.repo.device != null) && (!this.authService.authenticated)) {
            this.router.navigateByUrl("/login");
        }
        if (this.repo.device == null) {
            this.router.navigateByUrl("");
        }
    };
    Object.defineProperty(AppComponent.prototype, "Device", {
        get: function () {
            return this.repo.device;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.fullscreen = function () {
        this.repo.fullscreen();
    };
    AppComponent.prototype.gohome = function () {
        this.router.navigateByUrl("");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__models_repository__["a" /* Repository */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model_module__ = __webpack_require__("./ClientApp/app/models/model.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./ClientApp/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Till_till_module__ = __webpack_require__("./ClientApp/app/Till/till.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__ = __webpack_require__("./ClientApp/app/auth/auth.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__models_model_module__["a" /* ModelModule */], __WEBPACK_IMPORTED_MODULE_7__Till_till_module__["a" /* TillModule */], __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* RoutingConfig */], __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__["a" /* AuthModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Till_till_component__ = __webpack_require__("./ClientApp/app/Till/till.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Till_item_component__ = __webpack_require__("./ClientApp/app/Till/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_authentication_component__ = __webpack_require__("./ClientApp/app/auth/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_vbr_component__ = __webpack_require__("./ClientApp/app/auth/vbr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_clearDevice_component__ = __webpack_require__("./ClientApp/app/auth/clearDevice.component.ts");






var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_4__auth_vbr_component__["a" /* VbrComponent */] },
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_3__auth_authentication_component__["a" /* AuthenticationComponent */] },
    { path: "till", component: __WEBPACK_IMPORTED_MODULE_1__Till_till_component__["a" /* TillComponent */] },
    { path: "clear", component: __WEBPACK_IMPORTED_MODULE_5__auth_clearDevice_component__["a" /* ClearDeviceComponent */] },
    { path: "detail/:id", component: __WEBPACK_IMPORTED_MODULE_2__Till_item_component__["a" /* ItemComponent */] }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "./ClientApp/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("./ClientApp/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_component__ = __webpack_require__("./ClientApp/app/auth/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vbr_component__ = __webpack_require__("./ClientApp/app/auth/vbr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clearDevice_component__ = __webpack_require__("./ClientApp/app/auth/clearDevice.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__vbr_component__["a" /* VbrComponent */], __WEBPACK_IMPORTED_MODULE_7__clearDevice_component__["a" /* ClearDeviceComponent */], __WEBPACK_IMPORTED_MODULE_5__authentication_component__["a" /* AuthenticationComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./ClientApp/app/auth/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\" style=\"min-height:200px\">\r\n    <div class=\"col-sm-6 offset-sm-3\">\r\n        <table class=\"table table-sm table-striped\">\r\n            <tr><th>Store Name</th><td>{{Device?.storeName}}</td></tr>\r\n            <tr><th>Device Id</th><td>{{Device?.deviceId}}</td></tr>\r\n            <tr><th>Customer Id</th><td>{{Device?.customerId}}</td></tr>\r\n            <tr><th>Store ID</th><td>{{Device?.storeId}}</td></tr>\r\n            <tr><th>Till Id</th><td>{{Device?.tillId}}</td></tr>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=\"row w-100 m-0 p-0\">\r\n    <div class=\"col-sm-6 offset-sm-3\">\r\n        <h6 *ngIf=\"showError\" class=\"p-2 bg-warning text-white\">\r\n            Invalid username or password\r\n        </h6>\r\n        <form novalidate #authForm=\"ngForm\" class=\"m-1 p-1\">\r\n            <div class=\"form-group\">\r\n                <label>UserId:</label>\r\n                <input #name=\"ngModel\" name=\"name\" class=\"form-control\"\r\n                [(ngModel)]=\"UserId\" required />\r\n                <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n                    Please enter your user name\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Password:</label>\r\n                <input type=\"password\" #password=\"ngModel\" name=\"password\"\r\n                    class=\"form-control\" [(ngModel)]=\"Password\" required />\r\n                <div *ngIf=\"password.invalid\" class=\"text-danger\">\r\n                    Please enter your password\r\n                </div>\r\n            </div>\r\n                <div class=\"col text-center pt-2\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"authForm.invalid\"\r\n                    (click)=\"login()\">Login</button>\r\n                </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/auth/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("./ClientApp/app/auth/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService, repo) {
        this.authService = authService;
        this.repo = repo;
        this.showError = false;
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        if (this.repo.staffs == null) {
            this.repo.getStaffs();
        }
    };
    AuthenticationComponent.prototype.login = function () {
        this.showError = false;
        this.authService.login();
        if (!this.authService.authenticated) {
            this.showError = true;
        }
        else {
            this.repo.fullscreen();
        }
    };
    Object.defineProperty(AuthenticationComponent.prototype, "Device", {
        get: function () {
            return this.repo.device;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "UserId", {
        get: function () {
            return this.authService.userId;
        },
        set: function (newUserId) {
            this.authService.userId = newUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "Password", {
        get: function () {
            return this.authService.password;
        },
        set: function (newPassword) {
            this.authService.password = newPassword;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./ClientApp/app/auth/authentication.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./ClientApp/app/auth/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(repo, router) {
        this.repo = repo;
        this.router = router;
        this.authenticated = false;
    }
    AuthenticationService.prototype.login = function () {
        var _this = this;
        this.authenticated = false;
        if (this.repo.staffs != null) {
            var logedInStaff = this.repo.staffs
                .filter(function (u) { return u.userId == _this.userId && u.password == _this.password; });
            if (logedInStaff.length > 0) {
                this.repo.logedInStaff = logedInStaff[0];
                this.authenticated = true;
                this.repo.device.userId = this.userId;
                this.repo.device.password = this.password;
                this.repo.storeSessionData('device', this.repo.device);
                this.router.navigateByUrl(this.callbackUrl || "");
            }
            else {
                this.authenticated = false;
            }
        }
    };
    AuthenticationService.prototype.logout = function () {
        this.authenticated = false;
        this.repo.logedInStaff = null;
        this.repo.device.userId = "";
        this.repo.device.password = "";
        this.repo.storeSessionData('device', this.repo.device);
        this.router.navigateByUrl("/login");
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./ClientApp/app/auth/clearDevice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\" style=\"min-height:200px\"></div>\r\n<div class=\"row w-100 m-0 p-0\">\r\n        <div class=\"col-sm-6 offset-sm-3\">\r\n            <h6  class=\"p-2 bg-danger text-white\">Delete device details?</h6>\r\n            <table class=\"table table-sm table-striped\">\r\n                <tr><th>Store Name</th><td>{{Device?.storeName}}</td></tr>\r\n                <tr><th>Device Id</th><td>{{Device?.deviceId}}</td></tr>\r\n                <tr><th>Customer Id</th><td>{{Device?.customerId}}</td></tr>\r\n                <tr><th>Store ID</th><td>{{Device?.storeId}}</td></tr>\r\n                <tr><th>Till Id</th><td>{{Device?.tillId}}</td></tr>\r\n                <tr>\r\n                    <td class=\"text-left\">\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"claerDevice()\">Delete</button>\r\n                    </td>\r\n                    <td class=\"text-right\">\r\n                        <button type=\"button\" class=\"btn btn-success\" routerLink=\"\">Back</button>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/auth/clearDevice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearDeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClearDeviceComponent = /** @class */ (function () {
    function ClearDeviceComponent(repo, location, router) {
        this.repo = repo;
        this.location = location;
        this.router = router;
    }
    ClearDeviceComponent.prototype.claerDevice = function () {
        this.repo.clearDevices();
    };
    ClearDeviceComponent.prototype.Back = function () {
        if (this.repo.device == null) {
            location.reload();
        }
        else {
            this.router.navigateByUrl("");
        }
    };
    Object.defineProperty(ClearDeviceComponent.prototype, "Device", {
        get: function () {
            return this.repo.device;
        },
        enumerable: true,
        configurable: true
    });
    ClearDeviceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'clear-device',
            template: __webpack_require__("./ClientApp/app/auth/clearDevice.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ClearDeviceComponent);
    return ClearDeviceComponent;
}());



/***/ }),

/***/ "./ClientApp/app/auth/vbr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row w-100 m-0 p-0\" style=\"min-height:200px\"></div>\r\n<div class=\"row w-100 m-0 p-0\">\r\n        <div class=\"col-sm-6 offset-sm-3\">\r\n                <div *ngIf=\"Device==null; else deviceDetails\">\r\n                        <h6 class=\"text-center bg-warning text-white p-2\">DEVICE ID</h6>\r\n                        <form novalidate #authForm=\"ngForm\" class=\"m-1 p-1\">\r\n                                <div class=\"form-group\">\r\n                                        <input #deviceId=\"ngModel\" name=\"deviceId\" class=\"form-control\"\r\n                                        [(ngModel)]=\"id\" required />\r\n                                        <div *ngIf=\"deviceId.invalid\" class=\"text-danger\">\r\n                                                Please enter your device Id\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"text-center pt-2\">\r\n                                        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"authForm.invalid\"\r\n                                        (click)=\"apply()\">Apply</button>\r\n                                </div>\r\n                        </form>\r\n                </div>\r\n                <ng-template #deviceDetails>\r\n                        <div *ngIf=\"!Authenticated; else selectBtn\">\r\n                                <table class=\"table table-sm table-striped\">\r\n                                        <tr><th>Store Name</th><td>{{Device?.storeName}}</td></tr>\r\n                                        <tr><th>Device Id</th><td>{{Device?.deviceId}}</td></tr>\r\n                                        <tr><th>Customer Id</th><td>{{Device?.customerId}}</td></tr>\r\n                                        <tr><th>Store ID</th><td>{{Device?.storeId}}</td></tr>\r\n                                        <tr><th>Till Id</th><td>{{Device?.tillId}}</td></tr>\r\n                                        <tr>\r\n                                                <td class=\"text-left\">\r\n                                                        <button type=\"button\" class=\"btn btn-danger\" (click)=\"claerDevice()\">Clear</button>\r\n                                                </td>\r\n                                                <td class=\"text-right\">\r\n                                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">LogIn</button>\r\n                                                </td>\r\n                                        </tr>\r\n                                </table>\r\n                        </div>\r\n                        <ng-template #selectBtn>\r\n                                <table class=\"table table-sm table-striped\">\r\n                                        <tr><th colspan=2>Store Name</th><td>{{Device?.storeName}}</td></tr>\r\n                                        <tr><th colspan=2>Device Id</th><td>{{Device?.deviceId}}</td></tr>\r\n                                        <tr><th colspan=2>Customer Id</th><td>{{Device?.customerId}}</td></tr>\r\n                                        <tr><th colspan=2>Store ID</th><td>{{Device?.storeId}}</td></tr>\r\n                                        <tr><th colspan=2>Till Id</th><td>{{Device?.tillId}}</td></tr>\r\n                                        <tr><th colspan=2>UserId</th><td>{{LogedInStaff?.userId}}</td></tr>\r\n                                        <tr><th colspan=2>User Name</th><td>{{LogedInStaff?.name}}</td></tr>\r\n                                        <tr>\r\n                                                <td class=\"text-left m-0 p-0\">\r\n                                                        <button class=\"btn btn-danger\" (click)=\"logOut()\">\r\n                                                                Logout\r\n                                                        </button>    \r\n                                                </td>\r\n\r\n                                                <td class=\"text-center\">\r\n                                                        <button class=\"btn btn-success\" (click)=\"goToTill()\">\r\n                                                                TILL\r\n                                                        </button>\r\n                                                </td>\r\n                                                <td class=\"text-right\">\r\n                                                        <button class=\"btn btn-info\">\r\n                                                                BackOffice\r\n                                                        </button>    \r\n                                                </td>\r\n                                        </tr>\r\n                                </table>\r\n                        </ng-template>\r\n                </ng-template>\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/auth/vbr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VbrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("./ClientApp/app/auth/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VbrComponent = /** @class */ (function () {
    function VbrComponent(authService, router, repo) {
        this.authService = authService;
        this.router = router;
        this.repo = repo;
    }
    VbrComponent.prototype.apply = function () {
        this.repo.getDevices(this.id);
        this.router.navigateByUrl("");
    };
    VbrComponent.prototype.claerDevice = function () {
        this.router.navigateByUrl("clear");
    };
    VbrComponent.prototype.login = function () {
        this.router.navigateByUrl("login");
    };
    VbrComponent.prototype.logOut = function () {
        this.authService.logout();
        this.authService.userId = "";
        this.authService.password = "";
        this.router.navigateByUrl("login");
        if (this.repo.isFullScreen) {
            this.repo.fullscreen();
        }
    };
    VbrComponent.prototype.goToTill = function () {
        this.router.navigateByUrl("till");
    };
    Object.defineProperty(VbrComponent.prototype, "Device", {
        get: function () {
            return this.repo.device;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VbrComponent.prototype, "Authenticated", {
        get: function () {
            return this.authService.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VbrComponent.prototype, "LogedInStaff", {
        get: function () {
            return this.repo.logedInStaff;
        },
        enumerable: true,
        configurable: true
    });
    VbrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'vbr-root',
            template: __webpack_require__("./ClientApp/app/auth/vbr.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]])
    ], VbrComponent);
    return VbrComponent;
}());



/***/ }),

/***/ "./ClientApp/app/models/configClasses.repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.reset = function () {
        this.customerId = null;
        this.storeId = null;
        this.tillId = null;
    };
    return Filter;
}());



/***/ }),

/***/ "./ClientApp/app/models/device.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Device; });
var Device = /** @class */ (function () {
    function Device(deviceId, customerId, storeId, tillId, storeName, userId, password) {
        this.deviceId = deviceId;
        this.customerId = customerId;
        this.storeId = storeId;
        this.tillId = tillId;
        this.storeName = storeName;
        this.userId = userId;
        this.password = password;
    }
    return Device;
}());



/***/ }),

/***/ "./ClientApp/app/models/functionKey.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionKey; });
var FunctionKey = /** @class */ (function () {
    function FunctionKey(index, mod, description, job, colour, htmlColour, bootstrapButton, visible) {
        this.index = index;
        this.mod = mod;
        this.description = description;
        this.job = job;
        this.colour = colour;
        this.htmlColour = htmlColour;
        this.bootstrapButton = bootstrapButton;
        this.visible = visible;
    }
    return FunctionKey;
}());



/***/ }),

/***/ "./ClientApp/app/models/menuLine.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuLine; });
var MenuLine = /** @class */ (function () {
    function MenuLine(bootstrapButton, colour, description, htmlColour, imagePath, isImage, keyCommand, keyId, keyValue, menuId) {
        this.bootstrapButton = bootstrapButton;
        this.colour = colour;
        this.description = description;
        this.htmlColour = htmlColour;
        this.imagePath = imagePath;
        this.isImage = isImage;
        this.keyCommand = keyCommand;
        this.keyId = keyId;
        this.keyValue = keyValue;
        this.menuId = menuId;
    }
    return MenuLine;
}());



/***/ }),

/***/ "./ClientApp/app/models/model.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__("./ClientApp/app/models/repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = /** @class */ (function () {
    function ModelModule() {
    }
    ModelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
        })
    ], ModelModule);
    return ModelModule;
}());



/***/ }),

/***/ "./ClientApp/app/models/repository.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device_model__ = __webpack_require__("./ClientApp/app/models/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configClasses_repository__ = __webpack_require__("./ClientApp/app/models/configClasses.repository.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var devicesUrl = "/api/devices";
var staffUrl = "/api/account/login";
var Repository = /** @class */ (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_4__configClasses_repository__["a" /* Filter */]();
    }
    Repository.prototype.setDevice = function (response) {
        if (response != null) {
            if (response.DeviceId != "") {
                this.device = new __WEBPACK_IMPORTED_MODULE_0__device_model__["a" /* Device */];
                this.device.deviceId = response.DeviceId;
                this.device.customerId = response.CustomerId;
                this.device.storeId = response.StoreId;
                this.device.tillId = response.TillId;
                this.device.storeName = response.StoreName;
                this.device.userId = response.UserId;
                this.device.password = response.Password;
                this.filter.customerId = this.device.customerId;
                this.filter.storeId = this.device.storeId;
                this.filter.tillId = this.device.tillId;
            }
        }
    };
    Repository.prototype.getDevices = function (id) {
        var _this = this;
        if (id != "") {
            var url = devicesUrl + "/" + id;
            this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, url)
                .subscribe(function (responce) {
                _this.device = responce;
                if ((_this.device.customerId != "") && (_this.device.storeId != "")) {
                    _this.filter.customerId = _this.device.customerId;
                    _this.filter.storeId = _this.device.storeId;
                    _this.filter.tillId = _this.device.tillId;
                }
                else {
                    _this.device = null;
                }
            });
        }
        else {
            this.device = null;
        }
    };
    Repository.prototype.clearDevices = function () {
        this.device.deviceId = "";
        this.device.customerId = "";
        this.device.storeId = "";
        this.device.tillId = "";
        this.device.storeName = "";
        this.device.userId = "";
        this.device.password = "";
        this.storeSessionData('device', this.device);
        this.device = null;
    };
    Repository.prototype.getStaffs = function () {
        var _this = this;
        var url = staffUrl;
        url += "?customerId=" + this.filter.customerId;
        url += "&storeId=" + this.filter.storeId;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, url)
            .subscribe(function (response) { return _this.staffs = response; });
    };
    Repository.prototype.storeSessionData = function (dataType, data) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post, "/api/session/" + dataType, data)
            .subscribe(function (response) { });
    };
    Repository.prototype.getSessionData = function (dataType) {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Get, "/api/session/" + dataType);
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Request */]({
            method: verb, url: url, body: data
        })).map(function (response) {
            return response.headers.get("Content-Length") != "0" ? response.json() : null;
        });
    };
    Repository.prototype.fullscreen = function () {
        var elem = document.getElementById("pos");
        if (!this.isFullScreen()) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
            else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            }
        }
        else {
            document.webkitExitFullscreen();
        }
    };
    Repository.prototype.isFullScreen = function () {
        if (document.webkitIsFullScreen) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    Repository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], Repository);
    return Repository;
}());



/***/ }),

/***/ "./ClientApp/boot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");


var bootApplication = function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=__webpack_hmr&dynamicPublicPath=true");
module.exports = __webpack_require__("./ClientApp/boot.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map