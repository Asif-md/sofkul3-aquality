webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/general/general.module": [
		"../../../../../src/app/general/general.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: 'app/general/general.module#GeneralModule'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoggedIn()\" class=\"container-fluid\">\n\n\n  <nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background-color: rgb(255, 255, 255)\" >\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" style=\"color: #fff; margin-top:20px;\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\" style=\"color: #fff; height:25%;\"> <img src=\"../../../assets/dist/img/Aquality.jpg\" style=\"height:30%; width:180px; margin-top:8px; margin-left:15px;\" />  </a> \n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <form class=\"form-inline pull-right\" style=\"margin-top:20px; padding: 2px;\">\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"username\">Username:</label>\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter username\"  #username>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"sr-only\" for=\"pwd\">Password:</label>\n              <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" #password>\n            </div>\n            \n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"login(username.value,password.value)\">Log in</button>\n          </form>\n        </ul>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </nav>\n\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" style=\"margin-top: 90px;\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      </ol>\n  \n      <!-- Wrapper for slides -->\n      <div class=\"carousel-inner\" role=\"listbox\">\n        <div class=\"item active\">\n          <img src=\"../../../assets/dist/img/yourstory-renewable-energy.jpg\" style=\"height:400px; width: 100%;\" alt=\"Image\">\n        </div>\n  \n        <div class=\"item\">\n          <img src=\"../../../assets/dist/img/drop.jpg\" style=\"height:400px; width:100%;\" alt=\"Image\">\n        </div>\n  \n        <div class=\"item\">\n          <img src=\"../../../assets/dist/img/green_city_green.gif\" style=\"height:400px; width: 100%;\" alt=\"Image\">\n        </div>\n      </div>\n  \n      <!-- Left and right controls -->\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n  </div>\n\n  <div class=\"container text-center\">\n    <br>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <img src=\"../../../assets/dist/img/sustainable_1_lg.jpg\" class=\"img-responsive\" style=\"width:100%; height: 100%\" alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\">\n        <img src=\"../../../assets/dist/img/climateactionprogramme-org.jpg\" class=\"img-responsive\" style=\"width:100%; height: 100%\" alt=\"Image\">\n      </div>\n      <div class=\"col-sm-4\" style=\"font-weight: bold;font-style: italic;font-size: 16px; color: #6495ED;  text-align:  justify;\">\n        <div class=\"well\">\n         <p>We believe that innovation holds the key to growth and sustainability of any organization.</p>\n        </div>\n        <div class=\"well\">\n         <p>As an entrepreneurial firm in an era of extreme competitiveness we move ahead by creating value rather than pursuing business</p>\n        </div>\n        <div class=\"well\">\n         <p>The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand.</p>\n        </div>\n        <div class=\"well\">\n         <p>Water and air, the two essential fluids on which all life depends.</p>\n        </div>\n      </div>\n    </div>\n  </div><br>\n\n<!--Footer-->\n<footer class=\"page-footer center-on-small-only unique-color-dark pt-0\" style=\"background-color: #212529;\">\n\n    <div style=\"background-color: #6495ED;\">\n        <div class=\"container\">\n            <!--Grid row-->\n            <div class=\"row py-4 d-flex align-items-center\">\n\n                <!--Grid column-->\n                <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\" style=\"margin-top: 7px; color:#fff;\">\n                    <h4 class=\"mb-0 white-text\">Get connected with us on social networks!</h4>\n                </div>\n                <!--Grid column-->\n\n                <!--Grid column-->\n                <div class=\"col-md-6 col-lg-7 text-center text-md-right\" style=\"margin-top:4px;\">\n                  <!--Facebook-->\n                  <a href=\"#\" class=\"icons-sm fb-ic ml-0\"><i class=\"fa fa-facebook white-text mr-lg-6\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n                  <!--Twitter-->\n                  <a href=\"#\" class=\"icons-sm tw-ic\"><i class=\"fa fa-twitter white-text mr-lg-6\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n                  <!--Linkedin-->\n                  <a href=\"#\" class=\"icons-sm li-ic\"><i class=\"fa fa-linkedin white-text mr-lg-4\" style=\"font-size: 25px;  padding: 15px;\"> </i></a>\n                  <a href=\"#\" class=\"icons-sm ins-ic\"><i class=\"fa fa-youtube white-text mr-lg-4\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n                  <a href=\"#\" class=\"icons-sm ins-ic\"><i class=\"fa fa-pinterest white-text mr-lg-4\" style=\"font-size: 25px; padding: 15px;\"> </i></a>\n              </div>\n                <!--Grid column-->\n\n            </div>\n            <!--Grid row-->\n        </div>\n    </div>\n\n    <!--Footer Links-->\n    <div class=\"container-fluid mt-5 mb-4 text-md-left\" style=\"background-color: #365264; opacity: 0.8; color: #fff; font-size: 16px;\">\n      <div class=\"row mt-3\">\n\n          <!--First column-->\n          <div class=\"col-md-3 col-lg-4 col-xl-3 mb-r\">\n              <h4 class=\"title font-bold\"><strong>Aquality</strong></h4>\n              <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\" >\n              <p style=\"text-align: justify;\">We believe that innovation holds the key to growth and sustainability of any organization. While high growth remains a key parameter to success but that in itself may not ensure community development and environmental replenishment</p>\n          </div>\n          <!--/.First column-->\n\n          <!--Second column-->\n          <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-r\" style=\"color:#fff;\">\n              <h4 class=\"title font-bold\"><strong>Products</strong></h4>\n              <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\">\n              <p><a style=\"color:#fff;\" href=\"air.html\">Air</a></p>\n              <p><a style=\"color:#fff;\" href=\"water.html\">Water</a></p>\n              <p><a style=\"color:#fff;\" href=\"energysolutions.html\">Energy</a></p>\n            </div>\n\n          <!--Third column-->\n          <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto\" style=\"color:#fff;\">\n              <h4 class=\"title font-bold\"><strong>Useful links</strong></h4>\n              <hr class=\"accent-2 mb-4 mt-0 d-inline-block mx-auto color: #fff;\">\n              <div class=\"v1\">\n              <p><a style=\"color:#fff;\" href=\"#!\">Log in</a></p>\n              <p><a  style=\"color:#fff;\" href=\"#!\">Billing Application</a></p>\n              <p><a style=\"color:#fff;\" href=\"aqualityhome.html\">About Us</a></p>\n              <p><a style=\"color:#fff;\" href=\"#!\">Help</a></p>\n            </div>\n          </div>\n          <!--/.Third column-->\n\n          <!--Fourth column-->\n          <div class=\"col-md-4 col-lg-3 col-xl-3\">\n              <h4 class=\"title font-bold\"><strong>Contact</strong></h4>\n              <hr class=\"deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto\">\n              <p><i class=\"fa fa-home mr-3\"></i> # 8-1-284/OU/385/1&2 </p>\n              <p><i class=\"fa fa-home mr-3\"></i> 4th Floor Bait-ul-Rida</p>\n              <p><i class=\"fa fa-home mr-3\"></i> OU Colony Shaikpet, Lanco hills Lane</p>\n              <p><i class=\"fa fa-home mr-3\"></i> Hyderabad, Telangana 500 008, India</p>\n              <p><i class=\"fa fa-envelope mr-3\"></i> info@aquality.in | accounts@aquality.in</p>\n              <p><i class=\"fa fa-phone mr-3\"></i> + 91 40 6888 8486 | + 91 709 389 8486</p>\n          </div>\n          <!--/.Fourth column-->\n\n      </div>\n  </div>\n    <!--/.Footer Links-->\n\n    <!-- Copyright-->\n    <div class=\"footer-copyright\">\n        <div class=\"container-fluid\" style=\" text-align:center; padding: 12px;\">\n          \n            <span style=\"color: #fff ;\">\n            © 2018 Copyright:</span> <a href=\"http://aquality.co.in\" target=\"_blank\" style=\"color: #fff;\"> www.aquality.co.in</a>\n          \n        </div>\n    </div>\n    <!--/.Copyright -->\n\n</footer>\n<!--/.Footer-->\n\n\n</div>\n\n<!--<nav class=\"navbar navbar-fixed-top\" style=\"background-color:#2g2g2g;\">\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Aquality Billing Software</a>\n    </div>\n    <form class=\"form-inline pull-right\" style=\"margin-top:6px; padding: 2px;\">\n      <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"username\">Username:</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter username\"  #username>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" #password>\n      </div>\n      <div class=\"checkbox\">\n        <label><input type=\"checkbox\" name=\"remember\" style=\"color:white;\"> Remember me</label>\n      </div>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"login(username.value,password.value)\">Log in</button>\n    </form>\n\n    <div class=\"clearfix\"></div>\n\n    <div class=\"container-fluid\">\n\n      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">-->\n        <!-- Indicators -->\n        <!--<ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        </ol>-->\n\n        <!-- Wrapper for slides -->\n        <!--<div class=\"carousel-inner\">\n          <div class=\"item active\">\n            <img src=\"../assets/dist/img/photo2.png\" alt=\"Los Angeles\" style=\"width:100%;\">\n          </div>\n\n          <div class=\"item\">\n            <img src=\"../assets/dist/img/photo2.png\" alt=\"Chicago\" style=\"width:100%;\">\n          </div>\n\n          <div class=\"item\">\n            <img src=\"../assets/dist/img/photo1.png\" alt=\"\" style=\"width:100%;\">\n          </div>\n        </div>-->\n\n        <!-- Left and right controls -->\n        <!--<a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n</nav>-->\n\n\n\n\n\n\n<!--<div *ngIf=\"!isLoggedIn()\" class=\"container\">\n  <h1 style=\"text-align: center\" class=\"jumbotron\">CSBD Invoice App</h1>\n  <hr>\n  <br>\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Username</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" #username>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\">Password</label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" #password>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\"> Remember me\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"col-sm-offset-2 col-sm-10\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"login(username.value,password.value)\">Log in</button>\n      </div>\n    </div>\n  </form>\n</div>-->\n<app-dashboard *ngIf=\"isLoggedIn()\"></app-dashboard>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AppComponent.prototype.login = function (username, password) {
        if (username == 'admin' && password == 'admin') {
            this.authService.setLogin(true);
            localStorage.setItem('csbd-username', 'admin');
            localStorage.setItem('csbd-password', 'admin');
            location.reload();
        }
        else {
            this.authService.setLogin(false);
            localStorage.setItem('csbd-username', '');
            localStorage.setItem('csbd-password', '');
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__general_general_module__ = __webpack_require__("../../../../../src/app/general/general.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__ = __webpack_require__("../../../../ngx-qrcode2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__upload_service__ = __webpack_require__("../../../../../src/app/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularx_qrcode__ = __webpack_require__("../../../../angularx-qrcode/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// services





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                //routing module
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                //user defines modules
                __WEBPACK_IMPORTED_MODULE_6__general_general_module__["GeneralModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularx_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AutoCompleteModule"], __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PickListModule"], __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ConfirmDialogModule"], __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_10__custom_http_service__["a" /* CustomHttpService */],
                __WEBPACK_IMPORTED_MODULE_12__upload_service__["a" /* UploadService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/area/area-all/area-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/area/area-all/area-all.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content-header\">\n    <div class=\"col-xs-12\">\n        <h2>\n            All Areas\n        </h2>\n    </div>\n</section>\n<section class=\"content\">\n    <!--  Page Content Here -->\n\n    <div class=\"col-xs-12\">\n        <div class=\"box box-primary\">\n            <div class=\"box-header\">\n                <h3 class=\"box-title\">List Of All Areas</h3>\n                <br>\n            </div>\n            <!-- /.box-header -->\n            <div class=\"box-body table-responsive no-padding\">\n                <table class=\"table table-hover\">\n                    <tbody>\n                        <tr>\n                            <th>Name</th>\n                            <!--<th>Status</th>-->\n                            <th>Action</th>\n                        </tr>\n                        <tr *ngFor=\"let area of areas | paginate: { itemsPerPage: 15, currentPage: p }\">\n                            <td>{{ area.name }}</td>\n                            <!--<td *ngIf=\"area.status\">\n                                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(area._id,area.status)\"> Active</button>\n                            </td>\n                            <td *ngIf=\"!area.status\">\n                                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(area._id,area.status)\"> Inactive</button>\n                            </td>-->\n                            <td>\n                                <a type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"editArea(area._id)\"> Edit</a>\n                            </td>\n                        </tr>\n                    </tbody>\n\n                </table>\n            </div>\n            <!-- /.box-body -->\n        </div>\n        <!-- /.box -->\n        <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/area/area-all/area-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AreaAllComponent = (function () {
    function AreaAllComponent(areaService) {
        this.areaService = areaService;
        this.areas = [];
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showEditForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AreaAllComponent.prototype.ngOnInit = function () {
    };
    AreaAllComponent.prototype.toggleStatus = function (id, status) {
        var _this = this;
        var data = {
            id: id,
            status: !status
        };
        this.areaService.setStatus(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.statusChange.emit(true);
            }
            else {
                _this.statusChange.emit(false);
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    AreaAllComponent.prototype.editArea = function (id) {
        this.showEditForm.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AreaAllComponent.prototype, "areas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AreaAllComponent.prototype, "statusChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AreaAllComponent.prototype, "showEditForm", void 0);
    AreaAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area-all',
            template: __webpack_require__("../../../../../src/app/area/area-all/area-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/area/area-all/area-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__area_service__["a" /* AreaService */]])
    ], AreaAllComponent);
    return AreaAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/area/area-create/area-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/area/area-create/area-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:1000px\">\n  <div class=\"col-xs-12\">\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Area Added Successfully !!</div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n\n    <ol class=\"breadcrumb \">\n      <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n      <li><a [routerLink]=\"[ '/dashboard/area' ] \"><i class=\"fa fa-dashboard \"></i> Area</a></li>\n      <li class=\"active \">New</li>\n    </ol>\n  </div>\n  <section class=\" content-header \">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" type=\"button\"\n              (click)=\"createModeOn()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp;New Area\n      </button>\n      <h2 *ngIf=\"!editMode && createMode\">\n        Add New Area\n      </h2>\n      <h2 *ngIf=\"editMode && !createMode\">\n        Update Area\n      </h2>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"createMode || editMode\">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\">\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"areaCreateForm\" (submit)=\"submitCreateAreaForm()\">\n          <!--name-->\n          <div class=\" form-group\">\n            <label for=\"name\" class=\"col-sm-2 control-label \">Name</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"name\" type=\"text \" class=\"form-control\" id=\"name\" placeholder=\"area name \">\n            </div>\n          </div>\n\n          <div class=\"form-group \">\n            <div class=\"col-sm-offset-2 col-sm-10 \">\n              <button type=\"submit\" class=\"btn btn-success\" *ngIf=\"!editMode\">Save</button>\n              <button type=\"submit\" class=\"btn btn-warning\" *ngIf=\"editMode\">Update</button>\n              <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"editMode || createMode\" (click)=\"cancelEdit()\">Cancel</button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </section>\n  <app-area-all (showEditForm)=\"showEditForm($event)\" (statusChange)=\"statusChanged($event)\"\n                [areas]=\"areas\"></app-area-all>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/area/area-create/area-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AreaCreateComponent = (function () {
    function AreaCreateComponent(areaService, fb) {
        this.areaService = areaService;
        this.fb = fb;
        this.showSuccess = false;
        this.showError = false;
        this.areas = [];
        this.editMode = false;
        this.createMode = false;
    }
    AreaCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getAllArea();
    };
    AreaCreateComponent.prototype.buildForm = function () {
        this.areaCreateForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    AreaCreateComponent.prototype.submitCreateAreaForm = function () {
        var _this = this;
        this.showError = false;
        this.showSuccess = false;
        var data = {
            id: this.id,
            name: this.areaCreateForm.value.name,
            status: true
        };
        if (!this.editMode) {
            this.areaService.createArea(data)
                .subscribe(function (res) {
                if (res.status) {
                    _this.getAllArea();
                    _this.showSuccess = true;
                    _this.areaCreateForm.reset();
                }
                else {
                    _this.showError = true;
                }
            }, function (err) {
                console.log("ERROR from createArea");
                _this.showError = true;
            });
        }
        else {
            this.areaService.updateArea(data)
                .subscribe(function (res) {
                // console.log(res);
                _this.getAllArea();
                _this.areaCreateForm.reset();
                _this.editMode = false;
            }, function (err) {
            });
        }
    };
    AreaCreateComponent.prototype.getAllArea = function () {
        var _this = this;
        this.areaService.getAllArea()
            .subscribe(function (res) {
            _this.areas = res;
        }, function (err) {
            console.log(err);
        });
    };
    AreaCreateComponent.prototype.statusChanged = function (event) {
        this.getAllArea();
    };
    AreaCreateComponent.prototype.cancelEdit = function () {
        this.editMode = false;
        this.createMode = false;
        this.areaCreateForm.reset();
        this.getAllArea();
    };
    AreaCreateComponent.prototype.showEditForm = function (event) {
        var _this = this;
        this.editMode = true;
        this.createMode = false;
        this.id = event;
        this.areaService.getAreaById(event)
            .subscribe(function (res) {
            _this.areaCreateForm.patchValue({
                name: [res.name]
            });
        }, function (err) {
        });
    };
    AreaCreateComponent.prototype.createModeOn = function () {
        this.editMode = false;
        this.createMode = true;
        this.areaCreateForm.reset();
    };
    AreaCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-area-create',
            template: __webpack_require__("../../../../../src/app/area/area-create/area-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/area/area-create/area-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AreaCreateComponent);
    return AreaCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/area/area-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var areaRoutes = [];
var AreaRoutingModule = (function () {
    function AreaRoutingModule() {
    }
    AreaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(areaRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], AreaRoutingModule);
    return AreaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/area/area.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_create_area_create_component__ = __webpack_require__("../../../../../src/app/area/area-create/area-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_routing_module__ = __webpack_require__("../../../../../src/app/area/area-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_all_area_all_component__ = __webpack_require__("../../../../../src/app/area/area-all/area-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AreaModule = (function () {
    function AreaModule() {
    }
    AreaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__area_routing_module__["a" /* AreaRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__area_create_area_create_component__["a" /* AreaCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__area_all_area_all_component__["a" /* AreaAllComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__area_service__["a" /* AreaService */]
            ]
        })
    ], AreaModule);
    return AreaModule;
}());



/***/ }),

/***/ "../../../../../src/app/area/area.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AreaService = (function () {
    function AreaService(http) {
        this.http = http;
        this.areaUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'area/';
    }
    AreaService.prototype.createArea = function (data) {
        var url = this.areaUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    AreaService.prototype.getAllArea = function () {
        var url = this.areaUrl + 'all/';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AreaService.prototype.setStatus = function (data) {
        var url = this.areaUrl + 'status_change/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    AreaService.prototype.getAreaById = function (id) {
        var url = this.areaUrl + 'id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    AreaService.prototype.updateArea = function (data) {
        var url = this.areaUrl + 'update/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    AreaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], AreaService);
    return AreaService;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.isLoggedIn = function () {
        if (localStorage.getItem('csbd-username') == 'admin' && localStorage.getItem('csbd-password') == 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.setLogin = function (status) {
        this.loggedIn = status;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/custom-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomHttpService = (function () {
    function CustomHttpService(http) {
        this.http = http;
    }
    CustomHttpService.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.get(url, { headers: headers });
    };
    CustomHttpService.prototype.post = function (url, d) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.post(url, d, { headers: headers });
    };
    CustomHttpService.prototype.put = function (url, d) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.put(url, d, { headers: headers });
    };
    CustomHttpService.prototype.delete = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.http.delete(url, { headers: headers });
    };
    CustomHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CustomHttpService);
    return CustomHttpService;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-all/customer-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 15px;*/\n}\n\n.box-header {\n    margin-bottom: 20px;\n    margin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-all/customer-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3500px;\">\n  <div *ngIf=\"autoGenerateList\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isAutoGenerateError\">\n      Error in saving auto invoices\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isAutoGenerateSuccess\">\n      Auto Invoices saved successfully !!\n    </div>\n  </div>\n\n  <app-customer-search></app-customer-search>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        All Customers\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/customer/all' ]\"><i class=\"fa fa-dashboard\"></i> Customer</a></li>\n        <li class=\"active\">All</li>\n      </ol>\n    </div>\n  </section>\n\n  <section class=\"content\">\n    <!--  Page Content Here -->\n\n    <div class=\"col-xs-12\">\n\n      <div class=\"box box-primary\">\n        <div class=\"box-header\">\n          <h3 class=\"box-title\">List Of All Customers</h3>\n          <br>\n          <div class=\"box-tools\">\n            <div class=\"row\">\n              <div class=\"col-lg-4\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\"\n                         placeholder=\"Filter Customers List in this page\"\n                         (keyup)=\"quickSearch($event.target.value)\">\n                </div>\n                <br>\n                <button class=\"btn btn-primary pull-right\" (click)=\"generateAutoInvoice()\">Generate Invoice\n                </button>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <!-- /.row -->\n            <!-- /.row -->\n            <div class=\"col-md-offset-4\">\n              <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n            </div>\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:100px\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Email</th>\n              <th>Fullname</th>\n              <th>Product</th>\n              <th>Mobile</th>\n              <th>Location</th>\n              <th>Area</th>\n              <th>City</th>\n              <th>Status</th>\n              <th>Action</th>\n              <th>Auto generate <br> invoice monthly</th>\n            </tr>\n            <tr\n              *ngFor=\"let customer of customers | paginate: { itemsPerPage: 40, currentPage: p,totalItems:totalCustomerCount }\">\n              <td>{{ customer.username }}</td>\n              <td>{{ customer.email }}</td>\n              <td>{{ customer.fullname }}</td>\n              <!--<td><span *ngIf=\"customer.productData?.length>0\"> {{ customer.productData[0]?.name }} - <em *ngIf=\"customer.productData[0]?.rate\">{{ customer.productData[0]?.rate }} INR/month</em> </span><small class=\"label bg-blue\">{{ customer.productData.length }}</small></td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ customer.productData.length }}</small>\n              </td>\n              <td>{{ customer.mobile_primary }}</td>\n              <td>{{ customer.location }}</td>\n              <td>{{ customer.areaData?.name }}</td>\n              <td>{{ customer.city }}</td>\n              <td *ngIf=\"customer.status\">\n                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(customer)\"> Active</button>\n              </td>\n              <td *ngIf=\"!customer.status\">\n                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(customer)\"> Inactive</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\" [routerLink]=\"['/customer/detail',customer._id]\">\n                  Edit</a>\n              </td>\n              <td>\n                <input [attr.checked]=\"customer.isGenerateInvoiceMonthly ? 'checked' : null\"\n                       style=\"zoom: 1.5;margin-left: 10px;\" type=\"checkbox\"\n                       name=\"customer._id\" value=\"customer._id\" (click)=\"checkGenerateInvoice(customer)\">\n              </td>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n\n  </section>\n  <!--for generating invoice-->\n</div>\n<div class=\"col-md-12\" style=\"margin-top:-20px\">\n  <div *ngFor=\"let autoInvoice of autoGenerateList\">\n    <app-invoice-html [autoInvoice]=\"autoInvoice\"></app-invoice-html>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-all/customer-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerAllComponent = (function () {
    // public tempCustomer:Customer;
    function CustomerAllComponent(customerService, productService, areaService) {
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.customers = [];
        this.display = false;
        this.productList = [];
        this.searchMode = 'username';
        this.totalCustomerCount = 0;
        this.paginator = 1;
        this.autoGenerateList = [];
        this.isAutoGenerateSuccess = false;
        this.isAutoGenerateError = false;
        this.options = [
            {
                measure: 'length',
                display: 'Length'
            },
            {
                measure: 'area',
                display: 'Area'
            },
            {
                measure: 'volume',
                display: 'volume'
            },
            {
                measure: 'time',
                display: 'Time'
            },
            {
                measure: 'current',
                display: 'Current'
            },
            {
                measure: 'energy',
                display: 'Energy'
            },
        ];
    }
    CustomerAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAutoGenerateSuccess = false;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getAllCustomer(this.paginator);
    };
    CustomerAllComponent.prototype.getAllCustomer = function (paginator) {
        var _this = this;
        this.customers = [];
        this.customerService.getAllCustomers(paginator)
            .subscribe(function (res) {
            var data = [];
            data = res;
            // getting products
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](data, function (item) {
                item.productData = [];
                __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](item.productList, function (element) {
                    _this.productService.getProductById(element)
                        .subscribe(function (res) {
                        item.productData.push(res);
                    }, function (err) {
                    });
                });
                if (item.area) {
                    _this.areaService.getAreaById(item.area)
                        .subscribe(function (res) {
                        item.areaData = res;
                    }, function (err) {
                    });
                }
                _this.customers.push(item);
            });
        }, function (err) {
            console.log("Error In getAllCustomer");
        });
    };
    CustomerAllComponent.prototype.toggleStatus = function (customer) {
        var data = {
            id: customer['_id'],
            status: !customer['status']
        };
        this.customerService.setStatus(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['status'] = !customer['status'];
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    CustomerAllComponent.prototype.showDialog = function () {
        this.display = true;
    };
    CustomerAllComponent.prototype.getCustomerDetails = function (id) {
        this.customerService.getCustomerDetails(id)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    CustomerAllComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getAllCustomer(this.paginator);
            return;
        }
        var data = {
            text: event
        };
        if (this.searchMode == 'username') {
            var reg_1 = new RegExp(event, "i");
            var resArray_1 = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (item) {
                if (reg_1.test(item['username'])) {
                    resArray_1.push(item);
                }
            });
            this.customers = resArray_1;
        }
        else if (this.searchMode == 'mobile_number') {
            var reg_2 = new RegExp(event, "i");
            var resArray_2 = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (item) {
                if (reg_2.test(item['mobile_primary'])) {
                    resArray_2.push(item);
                }
            });
            this.customers = resArray_2;
        }
        else if (this.searchMode == 'area') {
            var reg_3 = new RegExp(event, "i");
            var resArray_3 = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (item) {
                if (reg_3.test(item['areaData'].name)) {
                    resArray_3.push(item);
                }
            });
            this.customers = resArray_3;
        }
    };
    CustomerAllComponent.prototype.buildSearchResult = function (customerList) {
        var _this = this;
        this.customers = [];
        // getting products
        __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](customerList, function (item) {
            item.productData = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](item.productList, function (element) {
                _this.productService.getProductById(element)
                    .subscribe(function (res) {
                    item.productData.push(res);
                }, function (err) {
                });
            });
            if (item.area) {
                _this.areaService.getAreaById(item.area)
                    .subscribe(function (res) {
                    item.areaData = res;
                }, function (err) {
                });
            }
            _this.customers.push(item);
        });
    };
    //change search filter
    CustomerAllComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    CustomerAllComponent.prototype.checkGenerateInvoice = function (customer) {
        var data = {
            id: customer['_id'],
            isGenerateInvoiceMonthly: !customer['isGenerateInvoiceMonthly']
        };
        this.customerService.setCheckGenerateInvoice(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['isGenerateInvoiceMonthly'] = !customer['isGenerateInvoiceMonthly'];
            }
        }, function (err) {
            console.log("Error in setCheckGenerateInvoice");
        });
    };
    //  for pagination
    CustomerAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllCustomer(this.paginator);
    };
    //  click event triggered for auto generate invoice
    CustomerAllComponent.prototype.generateAutoInvoice = function () {
        var _this = this;
        this.isAutoGenerateSuccess = false;
        this.isAutoGenerateError = false;
        this.autoGenerateList = [];
        __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](this.customers, function (customer) {
            if (customer.isGenerateInvoiceMonthly == true) {
                _this.customerService.generateAutoInvoice(customer['_id'])
                    .subscribe(function (res) {
                    _this.autoGenerateList.push(res);
                }, function (err) {
                    _this.isAutoGenerateSuccess = false;
                    _this.isAutoGenerateError = true;
                }, function () {
                    _this.isAutoGenerateSuccess = true;
                });
            }
        });
    };
    CustomerAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-all',
            template: __webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__area_area_service__["a" /* AreaService */]])
    ], CustomerAllComponent);
    return CustomerAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-create/customer-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}\n\n.productSelectBox {\n    margin-bottom: 10px\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-create/customer-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1500px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Create New Customer\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/customer/create' ] \"><i class=\"fa fa-dashboard \"></i> Customer</a></li>\n        <li class=\"active \">Create</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n\n      <div class=\"box box-primary\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Customer Created Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"customerCreateForm\" (submit)=\"submitCustomerCreateForm()\">\n          <!--username-->\n          <div class=\" form-group \">\n            <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                     placeholder=\"Username \" required>\n            </div>\n          </div>\n\n          <!--NID-->\n          <div class=\" form-group \">\n            <label for=\"nid\" class=\"col-sm-2 control-label \">NID</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"nid\" type=\"number\" class=\"form-control \" id=\"nid \" placeholder=\"NID \" required>\n            </div>\n          </div>\n          <!--email-->\n          <div class=\"form-group \">\n            <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \">\n            </div>\n          </div>\n          <!--fullname-->\n          <div class=\"form-group \">\n            <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                     placeholder=\"Fullname \">\n            </div>\n          </div>\n          <!--customer_currency-->\n          <!--<div class=\"form-group \">\n          <label for=\"customer_currency \" class=\"col-sm-2 control-label \">Customer Currency</label>\n          <div class=\"col-sm-10 \">\n              <input formControlName=\"customer_currency\" type=\"text \" class=\"form-control \" id=\"customer_currency \" placeholder=\"Customer Currency \">\n          </div>\n      </div>-->\n\n          <!--mobile_primary-->\n          <div class=\"form-group \">\n            <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                     placeholder=\"Mobile primary \">\n            </div>\n          </div>\n\n          <!--mobile_secondary-->\n          <div class=\"form-group \">\n            <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                     placeholder=\"Mobile secondary \">\n            </div>\n          </div>\n\n          <!--website-->\n          <div class=\"form-group \">\n            <label for=\"website \" class=\"col-sm-2 control-label \">Website</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"text\" formControlName=\"website\" class=\"form-control \" id=\"website \" placeholder=\"website \">\n            </div>\n          </div>\n\n          <!--country-->\n          <!--<div class=\"form-group \">\n              <label for=\"country \" class=\"col-sm-2 control-label \">Country</label>\n              <div class=\"col-sm-10 \">\n                  <input type=\"text\" formControlName=\"country\" class=\"form-control \" id=\"country \" placeholder=\"country \">\n              </div>\n          </div>-->\n\n          <!--location-->\n          <div class=\"form-group \">\n            <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                     placeholder=\"location \">\n            </div>\n          </div>\n\n          <!--area list-->\n          <div class=\"form-group \">\n            <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n            <div class=\"col-sm-10 \">\n              <select required *ngIf=\"areaList\" class=\"form-control\" formControlName=\"area\">\n                <option *ngFor=\"let area of areaList\" value=\"{{ area._id }}\">{{ area.name }}</option>\n              </select>\n            </div>\n          </div>\n\n          <!--city-->\n          <div class=\"form-group \">\n            <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \">\n            </div>\n          </div>\n           \n          <div class=\"form-group\">\n            <label for=\"description\" class=\"col-sm-2 control-label \">Remarks</label>\n            <div class=\"col-sm-10 \">\n              <textarea formControlName=\" description\" class=\"form-control\" id=\"description\"></textarea>\n            </div>\n          </div>\n\n          <!--postal_code-->\n          <div class=\"form-group \">\n            <label for=\"postal_code \" class=\"col-sm-2 control-label \">Postal Code</label>\n            <div class=\"col-sm-10 \">\n              <input type=\"text \" formControlName=\"postal_code\" class=\"form-control \" id=\"postal_code \"\n                     placeholder=\"Postal Code \">\n            </div>\n          </div>\n\n          <!--status-->\n          <div class=\"form-group \">\n            <label for=\"postal_code \" class=\"col-sm-2 control-label \">Status</label>\n            <div class=\"col-sm-10 \">\n              <select formControlName=\"status\" required class=\"form-control\">\n                <option value=\"true\">Active</option>\n                <option value=\"false\">Inactive</option>\n              </select>\n            </div>\n          </div>\n\n          <!--product list-->\n          <div class=\"form-group \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\n            <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n            <div class=\"col-sm-10 \">\n              <div class=\"productSelectBox\">\n                <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                  <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                    {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                  </option>\n                </select>\n                <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\"><i\n                  class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n              </div>\n            </div>\n          </div>\n          <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\n                                                                                             aria-hidden=\"true\"></i>\n            &nbsp; Add Product\n          </button>\n\n\n          <div class=\"form-group \">\n            <div class=\"col-sm-offset-2 col-sm-10 \">\n              <button type=\"submit\" class=\"btn btn-success \">Save</button>\n              <a type=\"button\" class=\"btn btn-primary \" [routerLink]=\"['/customer/all']\">Back</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-create/customer-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerCreateComponent = (function () {
    function CustomerCreateComponent(fb, customerService, productService, areaService) {
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.showSuccess = false;
        this.showError = false;
        this.productList = [];
        this.areaList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
    }
    CustomerCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAreaList();
    };
    CustomerCreateComponent.prototype.buildForm = function () {
        this.customerCreateForm = this.fb.group({
            username: [''],
            nid: [''],
            email: [''],
            fullname: [''],
            mobile_primary: ['+91'],
            mobile_secondary: ['+91'],
            website: [''],
            location: [''],
            area: [''],
            city: ['Hyderabad'],
            description: [''],
            postal_code: [''],
            status: [''],
            product: ['']
        });
    };
    CustomerCreateComponent.prototype.submitCustomerCreateForm = function () {
        var _this = this;
        this.showSuccess = false;
        this.showError = false;
        this.allProducts = __WEBPACK_IMPORTED_MODULE_3_underscore__["uniq"](this.allProducts);
        var data = {
            username: this.customerCreateForm.value.username,
            nid: this.customerCreateForm.value.nid,
            email: this.customerCreateForm.value.email,
            fullname: this.customerCreateForm.value.fullname,
            customer_currency: 'INR',
            mobile_primary: this.customerCreateForm.value.mobile_primary,
            mobile_secondary: this.customerCreateForm.value.mobile_secondary,
            website: this.customerCreateForm.value.website,
            country: 'India',
            location: this.customerCreateForm.value.location,
            area: this.customerCreateForm.value.area,
            city: this.customerCreateForm.value.city,
            description: this.customerCreateForm.value.description,
            postal_code: this.customerCreateForm.value.postal_code,
            status: this.customerCreateForm.value.status,
            productList: this.allProducts,
        };
        this.customerService.createNewCustomer(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.showSuccess = true;
                _this.customerCreateForm.reset();
            }
            else {
                _this.showError = true;
            }
        }, function (err) {
            _this.showError = true;
            console.log("Error in createNewCustomer");
        });
    };
    CustomerCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]._id);
        });
    };
    CustomerCreateComponent.prototype.getAreaList = function () {
        var _this = this;
        this.areaList = [];
        this.areaService.getAllArea()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.areaList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from getAreaList");
        });
    };
    CustomerCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    CustomerCreateComponent.prototype.addProduct = function () {
        this.allProductCounter++;
        var newProduct = this.productList[0]._id;
        this.allProducts.push(newProduct);
    };
    CustomerCreateComponent.prototype.onProductChange = function (event, index) {
        this.allProducts[index] = event.target.value;
    };
    CustomerCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    CustomerCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-create',
            template: __webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], CustomerCreateComponent);
    return CustomerCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-detail/customer-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-detail/customer-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;\">\n    <section class=\" content-header \" *ngIf=\"customer \">\n        <div class=\"col-xs-12\">\n            <h1>\n                Customer Details - <em>{{ customer.username }}</em>\n            </h1>\n            <ol class=\"breadcrumb \">\n                <li><a [routerLink]=\"[ '/' ] \"><i class=\"fa fa-dashboard \"></i> InvoiceApp</a></li>\n                <li><a [routerLink]=\"[ '/' ] \"><i class=\"fa fa-dashboard \"></i> Customer</a></li>\n                <li class=\"active \">All</li>\n            </ol>\n        </div>\n    </section>\n    <section class=\"content \">\n        <div class=\"col-md-offset-2 col-md-7\">\n            <div class=\"box box-primary\">\n                <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Customer Data Updated Successfully !!</div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n                <!--  Page Content Here -->\n                <form class=\"form-horizontal \" [formGroup]=\"customerDetailForm\" *ngIf=\"customer\" (submit)=\"submitCustomerDetail()\">\n                    <!--username-->\n                    <div class=\" form-group \">\n                        <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \" placeholder=\"Username \" ng-model=\"u\">\n                        </div>\n                    </div>\n\n                    <!--NID-->\n                    <div class=\" form-group \">\n                        <label for=\"nid\" class=\"col-sm-2 control-label \">NID</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"nid\" type=\"number\" class=\"form-control \" id=\"nid \" placeholder=\"NID \" required>\n                        </div>\n                    </div>\n                    <!--email-->\n                    <div class=\"form-group \">\n                        <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \">\n                        </div>\n                    </div>\n                    <!--fullname-->\n                    <div class=\"form-group \">\n                        <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \" placeholder=\"Fullname \">\n                        </div>\n                    </div>\n                    <!--customer_currency-->\n                    <div class=\"form-group \">\n                        <label for=\"customer_currency \" class=\"col-sm-2 control-label \">Customer Currency</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"customer_currency\" type=\"text \" class=\"form-control \" id=\"customer_currency \" placeholder=\"Customer Currency \">\n                        </div>\n                    </div>\n\n                    <!--mobile_primary-->\n                    <div class=\"form-group \">\n                        <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \" placeholder=\"Mobile primary \">\n                        </div>\n                    </div>\n\n                    <!--mobile_secondary-->\n                    <div class=\"form-group \">\n                        <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n                        <div class=\"col-sm-10 \">\n                            <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \" placeholder=\"Mobile secondary \">\n                        </div>\n                    </div>\n\n                    <!--website-->\n                    <div class=\"form-group\">\n                        <label for=\"website\" class=\"col-sm-2 control-label \">Website</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" formControlName=\"website\" class=\"form-control \" id=\"website \" placeholder=\"website \">\n                        </div>\n                    </div>\n\n                    <!--country-->\n                    <div class=\"form-group \">\n                        <label for=\"country \" class=\"col-sm-2 control-label \">Country</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text\" formControlName=\"country\" class=\"form-control \" id=\"country \" placeholder=\"website \">\n                        </div>\n                    </div>\n\n                    <!--location-->\n                    <div class=\"form-group \">\n                        <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n                        <div class=\"col-sm-10\">\n                            <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \" placeholder=\"location \">\n                        </div>\n                    </div>\n\n                    <!--area list-->\n                    <div class=\"form-group \">\n                        <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n                        <div class=\"col-sm-10 \">\n                            <select required *ngIf=\"areaList\" class=\"form-control\" formControlName=\"area\">\n                            <option  [selected]=\"area._id == customer.area\" *ngFor=\"let area of areaList\" value=\"{{ area._id }}\">{{ area.name }} </option>\n                        </select>\n                        </div>\n                    </div>\n\n                    <!--city-->\n                    <div class=\"form-group \">\n                        <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n                        <div class=\"col-sm-10 \">\n                            <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \">\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"description\" class=\"col-sm-2 control-label \">Remarks</label>\n                        <div class=\"col-sm-10 \">\n                          <textarea formControlName=\" description\" class=\"form-control\" id=\"description\"></textarea>\n                        </div>\n                      </div>\n                      \n                    <!--postal_code-->\n                    <div class=\"form-group \">\n                        <label for=\"postal_code \" class=\"col-sm-2 control-label \">Postal Code</label>\n                        <div class=\"col-sm-10 \">\n                            <input type=\"text \" formControlName=\"postal_code\" class=\"form-control \" id=\"postal_code \" placeholder=\"Postal Code \">\n                        </div>\n                    </div>\n\n                    <!--status-->\n                    <div class=\"form-group \">\n                        <label for=\"postal_code \" class=\"col-sm-2 control-label \">Status</label>\n                        <div class=\"col-sm-10 \">\n                            <select formControlName=\"status\" class=\"form-control\">\n                            <option value=\"true\">Active</option>\n                            <option value=\"false\">Inactive</option>\n                        </select>\n                        </div>\n                    </div>\n\n                    <!--product list-->\n                    <div class=\"form-group \" *ngFor=\"let myProduct of customer.productList;let i=index\">\n                        <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n                        <div class=\"col-sm-10 \">\n                            <div class=\"productSelectBox\">\n                                <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                                <option [selected]=\"product._id == myProduct\" *ngFor=\"let product of productList\" value=\"{{ product._id }}\">{{ product.name }} - <em> {{ product.rate }} BDT/month </em> </option>\n                                </select>\n                                <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                            </div>\n                        </div>\n                    </div>\n                    <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add Product</button>\n\n                    <div class=\"form-group \">\n                        <div class=\"col-sm-offset-2 col-sm-10 \">\n                            <button type=\"submit \" class=\"btn btn-success \">Update</button>\n                            \n                            <a type=\"button\" class=\"btn btn-primary \" [routerLink]=\"['/customer/all']\">Back</a>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-detail/customer-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerDetailComponent = (function () {
    function CustomerDetailComponent(areaService, productService, fb, route, router, customerService) {
        this.areaService = areaService;
        this.productService = productService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.customerService = customerService;
        this.productList = [];
        this.areaList = [];
        this.showSuccess = false;
        this.showError = false;
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.getAreaList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.getCustomerDetails(params['id']);
            _this.id = params['id'];
        });
    };
    CustomerDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CustomerDetailComponent.prototype.getCustomerDetails = function (id) {
        var _this = this;
        this.customerService.getCustomerDetails(id)
            .subscribe(function (res) {
            _this.customer = res;
            _this.allProductCounter = _this.customer.productList.length;
            console.log(_this.allProductCounter);
            _this.buildForm();
        }, function (err) {
            console.log(err);
        });
    };
    CustomerDetailComponent.prototype.buildForm = function () {
        var productId = '';
        if (this.customer.productList.length > 0) {
            productId = this.customer.productList[0]["_id"];
        }
        this.customerDetailForm = this.fb.group({
            username: [this.customer.username],
            nid: [this.customer.nid],
            email: [this.customer.email],
            fullname: [this.customer.fullname],
            customer_currency: [this.customer.customer_currency],
            mobile_primary: [this.customer.mobile_primary],
            mobile_secondary: [this.customer.mobile_secondary],
            website: [this.customer.website],
            country: [this.customer.country],
            location: [this.customer.location],
            area: [this.customer.area],
            city: [this.customer.city],
            description: [this.customer.description],
            postal_code: [this.customer.postal_code],
            status: [this.customer.status],
            product: ['']
        });
    };
    CustomerDetailComponent.prototype.submitCustomerDetail = function () {
        var _this = this;
        this.customer.productList = __WEBPACK_IMPORTED_MODULE_2_underscore__["uniq"](this.customer.productList);
        var data = {
            id: this.id,
            username: this.customerDetailForm.value.username,
            nid: this.customerDetailForm.value.nid,
            email: this.customerDetailForm.value.email,
            fullname: this.customerDetailForm.value.fullname,
            customer_currency: this.customerDetailForm.value.customer_currency,
            mobile_primary: this.customerDetailForm.value.mobile_primary,
            mobile_secondary: this.customerDetailForm.value.mobile_secondary,
            website: this.customerDetailForm.value.website,
            country: this.customerDetailForm.value.country,
            location: this.customerDetailForm.value.location,
            area: this.customerDetailForm.value.area,
            city: this.customerDetailForm.value.city,
            description: this.customerDetailForm.value.description,
            postal_code: this.customerDetailForm.value.postal_code,
            status: this.customerDetailForm.value.status,
            productList: this.customer.productList
        };
        this.customerService.updateCustomer(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.showSuccess = true;
            }
            else {
                _this.showError = true;
            }
        }, function (err) {
            _this.showError = true;
        });
    };
    CustomerDetailComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    CustomerDetailComponent.prototype.getAreaList = function () {
        var _this = this;
        this.areaList = [];
        this.areaService.getAllArea()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.areaList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from getAreaList");
        });
    };
    CustomerDetailComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    CustomerDetailComponent.prototype.onProductChange = function (event, index) {
        this.customer.productList[index] = event.target.value;
    };
    CustomerDetailComponent.prototype.removeProduct = function (index) {
        this.customer.productList.splice(index, 1);
    };
    CustomerDetailComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0]._id;
        this.customer.productList.push(newProduct);
    };
    CustomerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var customerUploadRoutes = [];
var CustomerRoutingModule = (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(customerUploadRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer-search/customer-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#search_form {\n  width: 100%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customer/customer-search/customer-search.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"col-xs-12\">\n    <div class=\"box box-primary\">\n      <h2 style=\"margin-left:10px\">Search All Customers</h2>\n      <hr>\n\n      <!--search result customers show box-->\n      <div class=\"box-body table-responsive no-padding\" style=\"margin-bottom:20px;margin-top:20px\" *ngIf=\"customer && searchResults.length>0\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <th>Username</th>\n            <th>Email</th>\n            <th>Fullname</th>\n            <th>Product</th>\n            <th>Mobile</th>\n            <th>Location</th>\n            <th>Area</th>\n            <th>City</th>\n            <th>Status</th>\n            <th>Action</th>\n            <th>Auto generate <br> invoice monthly</th>\n          </tr>\n          <tr>\n            <td>{{ customer.username }}</td>\n            <td>{{ customer.email }}</td>\n            <td>{{ customer.fullname }}</td>\n            <!--<td><span *ngIf=\"customer.productData?.length>0\"> {{ customer.productData[0]?.name }} - <em *ngIf=\"customer.productData[0]?.rate\">{{ customer.productData[0]?.rate }} BDT/month</em> </span><small class=\"label bg-blue\">{{ customer.productData.length }}</small></td>-->\n            <td>\n              <small class=\"label bg-blue\">{{ customer.productData.length }}</small>\n            </td>\n            <td>{{ customer.mobile_primary }}</td>\n            <td>{{ customer.location }}</td>\n            <td>{{ customer.areaData?.name }}</td>\n            <td>{{ customer.city }}</td>\n            <td *ngIf=\"customer.status\">\n              <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(customer)\"> Active</button>\n            </td>\n            <td *ngIf=\"!customer.status\">\n              <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(customer)\"> Inactive</button>\n            </td>\n            <td>\n              <a type=\"button\" class=\"btn btn-primary btn-xs\" [routerLink]=\"['/customer/detail',customer._id]\">\n                Edit</a>\n            </td>\n            <td>\n              <input [attr.checked]=\"customer.isGenerateInvoiceMonthly ? 'checked' : null\"\n                     style=\"zoom: 1.5;margin-left: 10px;\" type=\"checkbox\"\n                     name=\"customer._id\" value=\"customer._id\" (click)=\"checkGenerateInvoice(customer)\">\n            </td>\n          </tr>\n          </tbody>\n\n        </table>\n      </div>\n\n      <!--search box and functionality-->\n      <div class=\"container\">\n        <div class=\"col-lg-12\">\n          <form class=\"form-group\">\n            <input (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                   placeholder=\"Search All Customers\">\n          </form>\n\n          <!--search resultsa-->\n          <div *ngIf=\"searchResults.length>0\">\n            <strong style=\"font-size: 20px\"> Search results for: </strong> <span class=\"search_text\"\n                                                                                 style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n            <br>\n            <ul style=\"list-style-type:none\">\n              <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                <br>\n              </li>\n              <hr>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "../../../../../src/app/customer/customer-search/customer-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerSearchComponent = (function () {
    function CustomerSearchComponent(customerService, productService, areaService) {
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
    }
    CustomerSearchComponent.prototype.ngOnInit = function () {
    };
    CustomerSearchComponent.prototype.getSearchText = function (event) {
        var _this = this;
        this.customer = undefined;
        this.searchResults = [];
        this.searchText = event.target.value;
        this.customerService.globalSearch(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    CustomerSearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        this.searchText = '';
        var id = data['_id'];
        this.customerService.getCustomerDetails(id)
            .subscribe(function (customer) {
            customer.productData = [];
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](customer.productList, function (element) {
                _this.productService.getProductById(element)
                    .subscribe(function (res) {
                    customer.productData.push(res);
                });
            });
            if (customer.area) {
                _this.areaService.getAreaById(customer.area)
                    .subscribe(function (res) {
                    customer.areaData = res;
                    _this.customer = customer;
                });
            }
        }, function (err) {
        }, function () {
            console.log(_this.customer);
        });
    };
    CustomerSearchComponent.prototype.toggleStatus = function (customer) {
        var data = {
            id: customer['_id'],
            status: !customer['status']
        };
        this.customerService.setStatus(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['status'] = !customer['status'];
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    CustomerSearchComponent.prototype.checkGenerateInvoice = function (customer) {
        var data = {
            id: customer['_id'],
            isGenerateInvoiceMonthly: !customer['isGenerateInvoiceMonthly']
        };
        this.customerService.setCheckGenerateInvoice(data)
            .subscribe(function (res) {
            if (res['status']) {
                customer['isGenerateInvoiceMonthly'] = !customer['isGenerateInvoiceMonthly'];
            }
        }, function (err) {
            console.log("Error in setCheckGenerateInvoice");
        });
    };
    CustomerSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customer-search',
            template: __webpack_require__("../../../../../src/app/customer/customer-search/customer-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/customer/customer-search/customer-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_3__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__area_area_service__["a" /* AreaService */]])
    ], CustomerSearchComponent);
    return CustomerSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_routing_module__ = __webpack_require__("../../../../../src/app/customer/customer-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_all_customer_all_component__ = __webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_detail_customer_detail_component__ = __webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_create_customer_create_component__ = __webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__invoice_invoice_module__ = __webpack_require__("../../../../../src/app/invoice/invoice.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__customer_search_customer_search_component__ = __webpack_require__("../../../../../src/app/customer/customer-search/customer-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CustomerModule = (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__customer_routing_module__["a" /* CustomerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_11__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__customer_all_customer_all_component__["a" /* CustomerAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__customer_create_customer_create_component__["a" /* CustomerCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_12__customer_search_customer_search_component__["a" /* CustomerSearchComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */]
            ]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ }),

/***/ "../../../../../src/app/customer/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.customerUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'customer/';
    }
    CustomerService.prototype.globalSearch = function (data) {
        var url = this.customerUrl + 'global-search/' + data;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getAllCustomers = function (paginator) {
        var url = this.customerUrl + 'all/' + 'page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.setStatus = function (data) {
        var url = this.customerUrl + 'status_change/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getCustomerDetails = function (id) {
        var url = this.customerUrl + 'details/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.updateCustomer = function (data) {
        var url = this.customerUrl + 'details/update';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.createNewCustomer = function (data) {
        var url = this.customerUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.searchByUsername = function (data) {
        var url = this.customerUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.searchByMobileNumber = function (data) {
        var url = this.customerUrl + 'search/mobile_number/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.searchByArea = function (data) {
        var url = this.customerUrl + 'search/area/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getCustomerByArea = function (data) {
        var url = this.customerUrl + 'search/customerByArea/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.setCheckGenerateInvoice = function (data) {
        var url = this.customerUrl + 'check_change_generate_invoice_monthly';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.uploadFileContents = function (data) {
        var url = this.customerUrl + 'upload-file-contents';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getTotalCustomerCount = function () {
        var url = this.customerUrl + 'customer-count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.generateAutoInvoice = function (id) {
        var url = this.customerUrl + 'generate-auto-invoice/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService.prototype.getAutoGenerateList = function () {
        var url = this.customerUrl + 'get-auto-generate-list';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    CustomerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery-all/delivery-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-all/delivery-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        All Delivery Challan's\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/delivery/all' ]\"><i class=\"fa fa-dashboard\"></i> Delivery Challan</a></li>\n        <li class=\"active\">All</li>\n      </ol>\n    </div>\n  </section>\n\n  <section class=\"content\">\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">List Of All Delivery Challan's</h3>\n          <br>\n          <div class=\"box-tools\">\n            <div class=\"row\">\n              <!--<div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>-->\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Deliveries\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"deliveryList\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <!--<th>Due (INR)</th>\n              <th>Paid (INR)</th>-->\n              <th>Total (INR)</th>\n              <!--<th>Status</th>-->\n              <th>Delivery Challan Generated On</th>\n              <!--<th>Last Transaction Date</th>-->\n              <!--<th>Change Status</th>-->\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let delivery of deliveryList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalDeliveryCount }\">\n              <td>{{ delivery.customerData?.username }}</td>\n              <td>{{ delivery.customerData?.fullname }}</td>\n              <td>{{ delivery.customerData?.mobile_primary }}</td>\n              <td>{{ delivery.customerData?.areaData?.name }}</td>\n              <td><span *ngIf=\"delivery.customerData?.productData?.length>0\"> {{ delivery.customerData?.productData[0]?.name }} - <em *ngIf=\"delivery.customerData?.productData[0]?.rate\">{{ delivery.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ delivery.customerData?.productData.length }}</small>\n              </td>\n             <!-- <td>\n                <small class=\"label bg-blue\">{{ delivery.customerData?.productData?.length }}</small>\n              </td>-->\n             <!-- <td>{{ delivery?.amount_due }}</td>-->\n              <!--<td>{{ delivery?.total - delivery?.amount_due }}</td>-->\n              <td>{{ delivery?.total }}</td>\n             <!-- <td>\n                <label class=\"label label-danger\" *ngIf=\"delivery.status=='Due'\"> {{ delivery.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"delivery.status=='Paid'\"> {{ delivery.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"delivery.status=='Partially Paid'\"> {{ delivery.status\n                  }} </label>\n              </td>-->\n              <td>\n                {{ delivery?.created_on | date: 'yMMMd' }}\n              </td>\n              <!--<td *ngIf=\"delivery?.status=='Due' || delivery?.status=='Partially Paid'\">\n                {{ delivery?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"delivery?.status=='Paid'\">\n                {{ delivery?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',delivery)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',delivery)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',delivery)\"> Due</button>\n              </td>-->\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/delivery/view','all',delivery?._id]\">\n                  View</a>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <!--<div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialDelivery\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialDelivery?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialDelivery?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialDelivery?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialDelivery\">-->\n                        <!--amoount partially paid-->\n                        <!--<div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>-->\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-all/delivery-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_service__ = __webpack_require__("../../../../../src/app/delivery/delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeliveryAllComponent = (function () {
    function DeliveryAllComponent(customerService, router, deliveryService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.deliveryService = deliveryService;
        this.productService = productService;
        this.areaService = areaService;
        this.deliveryList = [];
        this.totalDeliveryCount = 0;
        this.paginator = 1;
    }
    DeliveryAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryService.getAllDeliveryCount()
            .subscribe(function (res) {
            _this.totalDeliveryCount = res.count;
        });
        this.getAllDelivery();
    };
    DeliveryAllComponent.prototype.getAllDelivery = function () {
        var _this = this;
        this.deliveryList = [];
        this.deliveryService.getAllDelivery(this.paginator)
            .subscribe(function (res) {
            if (res.length == 0) {
                _this.deliveryList = [];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](res, function (delivery) {
                    var customer;
                    _this.customerService.getCustomerDetails(delivery.customer_id)
                        .subscribe(function (res) {
                        customer = res;
                        customer.productData = [];
                        if (delivery.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](delivery.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        delivery.customerData = customer;
                        _this.deliveryList.push(delivery);
                    });
                });
            }
        }, function (err) {
            console.log('ERROR in getAllDelivery');
        });
    };
    DeliveryAllComponent.prototype.toggleSearchStatus = function (event) {
        console.log(event);
    };
    DeliveryAllComponent.prototype.filterChange = function (event) {
    };
    DeliveryAllComponent.prototype.quickSearch = function (event) {
    };
    DeliveryAllComponent.prototype.changeStatus = function (status, delivery) {
        if (status == 'Paid') {
            this.setPaidDateCounter(delivery);
            delivery.status = 'Paid';
            delivery.paid_date = Date.now();
            delivery.amount_due = 0;
        }
        else if (status == 'Due') {
            delivery.status = 'Due';
            delivery.amount_due = delivery.total;
            delivery.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialDelivery = delivery;
        }
        delivery['type'] = 'all';
        this.deliveryService.changeDeliveryStatus(delivery)
            .subscribe(function (res) {
        });
    };
    //  for pagination
    DeliveryAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllDelivery();
    };
    DeliveryAllComponent.prototype.setPaidDateCounter = function (delivery) {
        this.deliveryService.setPaidDateCounter(delivery)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    DeliveryAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery-all',
            template: __webpack_require__("../../../../../src/app/delivery/delivery-all/delivery-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delivery/delivery-all/delivery-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], DeliveryAllComponent);
    return DeliveryAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery-create/delivery-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-create/delivery-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Create New Delivery Challan\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/delivery/create' ] \"><i class=\"fa fa-dashboard \"></i> Delivery Challan</a></li>\n        <li class=\"active \">Create</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\" style=\"height:2000px\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Delivery Challan Created Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <br>\n        <!--customer list-->\n        <form class=\"form-horizontal \">\n          <div class=\"col-md-12\">\n            <div class=\" form-group \">\n              <label class=\"col-sm-2 control-label \">Choose Customer: </label>\n              <div class=\"col-sm-10 \">\n                <div>\n                  <select required *ngIf=\"customerList\" class=\"form-control\" (change)=\"getCustomer($event)\">\n                    <option *ngFor=\"let customer of customerList\" value=\"{{ customer._id }}\">\n                      <strong> {{ customer.username }} </strong> - <em> {{ customer.fullname }} </em>\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <br><br>\n        </form>\n\n\n        <form class=\"form-horizontal \" style=\"margin-top:30px\" [formGroup]=\"deliveryCreateForm\"\n              (submit)=\"submitDeliveryCreateForm()\">\n          <div class=\"col-md-12\" *ngIf=\"resCustomer\">\n            <!--username-->\n            <div class=\" form-group \">\n              <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                       placeholder=\"Username \" readonly>\n              </div>\n            </div>\n            <!--email-->\n            <div class=\"form-group \">\n              <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                       readonly>\n              </div>\n            </div>\n            <!--fullname-->\n            <div class=\"form-group \">\n              <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                       placeholder=\"Fullname \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_primary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                       placeholder=\"Mobile primary \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_secondary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                       placeholder=\"Mobile secondary \" readonly>\n              </div>\n            </div>\n\n            <!--location-->\n            <div class=\"form-group \">\n              <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                       placeholder=\"location \" readonly>\n              </div>\n            </div>\n\n            <!--area-->\n            <div class=\"form-group \">\n              <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--city-->\n            <div class=\"form-group \">\n              <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--<div class=\"form-group \">\n              <label for=\"status\" class=\"col-sm-2 control-label \">Status</label>\n              <div class=\"col-sm-10\">\n                <label class=\"label label-danger\">Due</label>\n              </div>\n            </div>-->\n            <br>\n\n            <!--delivery_created_date-->\n            <div class=\"form-group\">\n              <label for=\"date\" class=\"col-sm-2 control-label\">Delivery Date</label>\n              <div class=\"col-sm-10\">\n                <input type=\"date\" formControlName=\"date\">\n              </div>\n            </div>\n\n            <!--total amount-->\n            <div class=\"form-group \">\n              <label for=\"amount_due_minus_discount \" class=\"col-sm-2 control-label \">Total (INR)</label>\n              <div class=\"col-sm-10\">\n                <input type=\"number \" formControlName=\"total\" class=\"form-control \" id=\"amount_due_minus_discount \"\n                       placeholder=\"total \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--discount-->\n            <!--<div class=\"form-group \">-->\n            <!--<label for=\"discount \" class=\"col-sm-2 control-label \">Discount</label>-->\n            <!--<div class=\"col-sm-10\">-->\n            <!--<input type=\"number \" (keyup)=\"updateDiscount($event.target.value)\" formControlName=\"discount\"-->\n            <!--class=\"form-control \" id=\"discount \" placeholder=\"discount \"-->\n            <!--&gt;-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--product list-->\n            <div class=\"form-group \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\n              <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n              <div class=\"col-sm-10 \">\n                <div class=\"productSelectBox\">\n                  <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                    <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                      {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                    </option>\n                  </select>\n                  <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\">\n                    <i\n                      class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n            <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\n                                                                                               aria-hidden=\"true\"></i>\n              &nbsp; Add Product\n            </button>\n\n            <div class=\"form-group \">\n              <div class=\"col-md-offset-2 col-md-10\">\n                <button type=\"submit\" class=\"btn btn-success btn-lg\">Save</button>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\">Cancel</button>\n\n              </div>\n            </div>\n          </div>\n          <br>\n          <br>\n          <hr>\n          <div class=\"col-md-12\" *ngIf=\"isSaved\">\n            <div class=\"alert alert-success\" role=\"alert\">Delivery Challan Created Successfully !!</div>\n            <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/dashboard/delivery/display/all/',resultDelivery._id]\">Generate Delivery Challan Now</a>\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-create/delivery-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_service__ = __webpack_require__("../../../../../src/app/delivery/delivery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeliveryCreateComponent = (function () {
    function DeliveryCreateComponent(deliveryService, fb, customerService, productService, areaService) {
        this.deliveryService = deliveryService;
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.productList = [];
        this.showSuccess = false;
        this.showError = false;
        this.customerList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
        this.isSaved = false;
    }
    DeliveryCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAllCustomers();
    };
    DeliveryCreateComponent.prototype.buildForm = function () {
        var date = Date.now();
        this.deliveryCreateForm = this.fb.group({
            customer_id: [''],
            username: [''],
            email: [''],
            fullname: [''],
            location: [''],
            area: [''],
            city: [''],
            mobile_primary: [''],
            mobile_secondary: [''],
            amount_due: [''],
            total: [''],
            discount: [0],
            date: [date],
            status: ['Due'],
            productList: []
        });
    };
    DeliveryCreateComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerService.getAllCustomers('all')
            .subscribe(function (res) {
            _this.customerList = res;
        }, function (err) {
        });
    };
    DeliveryCreateComponent.prototype.getCustomer = function (event) {
        var _this = this;
        this.resCustomer = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.customerList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.deliveryCreateForm.patchValue({
            username: this.resCustomer.username,
            email: this.resCustomer.email,
            fullname: this.resCustomer.fullname,
            location: this.resCustomer.location,
            city: this.resCustomer.city,
            mobile_primary: this.resCustomer.mobile_primary,
            mobile_secondary: this.resCustomer.mobile_secondary,
        });
        this.resCustomer.productData = [];
        if (this.resCustomer.area) {
            this.areaService.getAreaById(this.resCustomer.area)
                .subscribe(function (res) {
                _this.resCustomer.areaData = res;
                _this.deliveryCreateForm.patchValue({
                    area: _this.resCustomer.areaData.name
                });
            }, function (err) {
            });
        }
    };
    DeliveryCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]);
            _this.deliveryCreateForm.patchValue({
                total: _this.productList[0].rate
            });
        });
    };
    DeliveryCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    DeliveryCreateComponent.prototype.addProduct = function () {
        this.allProductCounter++;
        var newProduct = this.productList[0];
        this.allProducts.push(newProduct);
        this.updateTotal();
    };
    DeliveryCreateComponent.prototype.onProductChange = function (event, index) {
        var result = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.productList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.allProducts[index] = result;
        this.updateTotal();
    };
    DeliveryCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    DeliveryCreateComponent.prototype.updateTotal = function () {
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.allProducts, function (product) {
            total += product['rate'];
        });
        this.deliveryCreateForm.patchValue({
            total: total
        });
    };
    DeliveryCreateComponent.prototype.submitDeliveryCreateForm = function () {
        var _this = this;
        var product_list = __WEBPACK_IMPORTED_MODULE_5_underscore__["pluck"](this.allProducts, '_id');
        this.deliveryCreateForm.patchValue({
            productList: product_list,
            customer_id: this.resCustomer['_id']
        });
        this.deliveryService.createNewDelivery(this.deliveryCreateForm.value)
            .subscribe(function (res) {
            _this.resultDelivery = res;
            _this.isSaved = true;
        });
    };
    DeliveryCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery-create',
            template: __webpack_require__("../../../../../src/app/delivery/delivery-create/delivery-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delivery/delivery-create/delivery-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], DeliveryCreateComponent);
    return DeliveryCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery-edit/delivery-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-edit/delivery-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showForm\" class=\"content-wrapper\" style=\"height: 2000px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Delivery Challan Details of <em>{{ delivery.customerData?.username }}</em>\n        <small>for the month of {{ delivery?.created_on | date:'MMMM'}}</small>\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/delivery/all' ] \"><i class=\"fa fa-dashboard \"></i> Delivery Challan</a></li>\n        <li class=\"active \">Edit</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\" *ngIf=\"delivery\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Delivery Challan Data Updated Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"deliveryDetailForm\" *ngIf=\"delivery\"\n              (submit)=\"submitDeliveryEditForm()\">\n          <div class=\"col-md-6\">\n            <!--username-->\n            <div class=\" form-group \">\n              <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                       placeholder=\"Username \" readonly>\n              </div>\n            </div>\n            <!--email-->\n            <div class=\"form-group \">\n              <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                       readonly>\n              </div>\n            </div>\n            <!--fullname-->\n            <div class=\"form-group \">\n              <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                       placeholder=\"Fullname \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_primary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                       placeholder=\"Mobile primary \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_secondary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                       placeholder=\"Mobile secondary \" readonly>\n              </div>\n            </div>\n\n            <!--location-->\n            <div class=\"form-group \">\n              <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                       placeholder=\"location \" readonly>\n              </div>\n            </div>\n\n            <!--area-->\n            <div class=\"form-group \">\n              <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--city-->\n            <div class=\"form-group \">\n              <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\n                       readonly>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <!--choose status-->\n            <!--<div class=\"form-group \">\n              <label for=\"status \" class=\"col-sm-6 control-label \">Payment Status</label>\n              <div class=\"col-sm-6\">\n                <label class=\"label label-warning\" *ngIf=\"delivery.status=='Partially Paid'\">{{ delivery.status }}</label>\n                <label class=\"label label-danger\" *ngIf=\"delivery.status=='Due'\">{{ delivery.status }}</label>\n                <label class=\"label label-success\" *ngIf=\"delivery.status=='Paid'\">{{ delivery.status }}</label>\n              </div>\n            </div>-->\n\n            <!--delivery_created_date-->\n            <!--<div class=\"form-group \">\n            <!--<label for=\"delivery_created_date \" class=\"col-sm-2 control-label \">Delivery Challan created on</label>-->\n            <!--<div class=\"col-sm-10\">-->\n            <!--<input type=\"date\" formControlName=\"delivery_created_date\">-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--payment_due_date-->\n            <!--<div class=\"form-group \" *ngIf=\"paymentStatus=='Due'\">\n                <label for=\"payment_due_date \" class=\"col-sm-2 control-label \">Payment Due Date</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"date\" formControlName=\"payment_due_date\" value=\"currentDate.toString('Y-m-d')\">\n                </div>\n            </div>-->\n\n            <!--for partial payment only-->\n            <div class=\"form-group \" *ngIf=\"delivery.status=='Partially Paid' \">\n              <div *ngFor=\"let x of delivery?.amount_partially_paid;let i = index\">\n                <label for=\"status \" class=\"col-sm-6 control-label \">Partial Payment : [{{ i+1 }}] </label>\n                <div class=\"col-sm-6\">\n                  <h5 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h5>\n                  <h5 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h5>\n                  <br>\n                </div>\n              </div>\n            </div>\n\n            <!--payment paid / partially paid date-->\n            <div class=\"form-group \" *ngIf=\"delivery.status=='Paid' && paymentStatus!='Due'\">\n              <label for=\"paid \" class=\"col-sm-2 control-label \">Payment Paid Date</label>\n              <div class=\"col-sm-10\">\n                <input type=\"date\" formControlName=\"paid_date\">\n              </div>\n            </div>\n\n            <!--amoount partially paid-->\n            <!--<div class=\"form-group \" *ngIf=\"delivery.status=='Partially Paid'\">-->\n            <!--<label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid (INR) </label>-->\n            <!--<div class=\"col-sm-10\">-->\n            <!--<input type=\"text \" (keyup)=\"getPartiallyPaid($event)\" formControlName=\"amount_partially_paid\" class=\"form-control \" id=\"amount_partially_paid \" placeholder=\"amount partially paid\">-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--amount_due-->\n            <!--<div class=\"form-group \" *ngIf=\"delivery.status!='Paid'\">\n              <label for=\"amount_due \" class=\"col-sm-2 control-label \">Amount Due (INR) </label>\n              <div class=\"col-sm-10\">\n                <input *ngIf=\"delivery.status=='Due'\" type=\"text \" formControlName=\"amount_due\" class=\"form-control \"\n                       id=\"amount_due \" placeholder=\"amount due\" readonly>\n                <input *ngIf=\"delivery.status=='Partially Paid'\" type=\"text \" formControlName=\"amount_due\"\n                       class=\"form-control \" id=\"amount_due \" placeholder=\"amount due\" readonly>\n              </div>\n            </div>-->\n\n\n            <!--discount-->\n            <!-- <div class=\"form-group \">\n              <label for=\"discount \" class=\"col-sm-2 control-label\">Discount (INR) </label>\n              <div class=\"col-sm-10\">\n                <input (keyup)=\"getDiscount($event)\" type=\"text\" formControlName=\"discount\" class=\"form-control \"\n                       id=\"discount \" placeholder=\"discount\">\n              </div>\n            </div>-->\n\n            <!--total-->\n            <div class=\"form-group \">\n              <label for=\"discount \" class=\"col-sm-2 control-label \">Total (INR) </label>\n              <div class=\"col-sm-10\">\n                <input *ngIf=\"delivery.status!='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                       id=\"total \" placeholder=\"total\">\n                <input *ngIf=\"delivery.status=='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                       id=\"total \" placeholder=\"total\" readonly>\n              </div>\n            </div>\n            <div>\n              <!--for products already list-->\n              <div class=\"form-group \" *ngFor=\"let myProduct of delivery.customerData?.productData;let i=index\">\n                <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n                <div class=\"col-sm-10 \">\n                  <div class=\"productSelectBox\">\n                    <select (change)=\"onProductChange($event,i,'my')\" required *ngIf=\"productList\" class=\"form-control\"\n                            style=\"margin-bottom:10px\">\n                      <option [selected]=\"product._id == myProduct._id\" *ngFor=\"let product of productList\"\n                              value=\"{{ product._id }}\">\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <!--for new additional products-->\n              <div class=\"form-group \" *ngFor=\"let newProduct of additionalProducts;let i=index\">\n                <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+delivery.customerData?.productData.length+1\n                  }}]</label>\n                <div class=\"col-sm-10 \">\n                  <div class=\"productSelectBox\">\n                    <select (change)=\"onProductChange($event,i,'add')\" required *ngIf=\"productList\" class=\"form-control\"\n                            style=\"margin-bottom:10px\">\n                      <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em></option>\n                    </select>\n                    <button *ngIf=\"delivery.status!='Paid'\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\"\n                            (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                  </div>\n                </div>\n              </div>\n              <button *ngIf=\"delivery.status!='Paid'\" (click)=\"addProduct()\" type=\"button\"\n                      class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add\n                Product\n              </button>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-1 col-sm-10 \" style=\"margin-top:10px\">\n              <!--<button type=\"submit \" class=\"btn btn-success\">Save</button>-->\n              <button type=\"submit\" class=\"btn btn-info btn-lg\">Generate Delivery Challan</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-edit/delivery-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_service__ = __webpack_require__("../../../../../src/app/delivery/delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DeliveryEditComponent = (function () {
    function DeliveryEditComponent(areaService, customerService, elementRef, productService, fb, deliveryService, route, router) {
        this.areaService = areaService;
        this.customerService = customerService;
        this.elementRef = elementRef;
        this.productService = productService;
        this.fb = fb;
        this.deliveryService = deliveryService;
        this.route = route;
        this.router = router;
        this.productList = [];
        this.additionalProducts = [];
        this.addProductCounter = 0;
        this.allProductsAdd = [];
        this.productSuggestions = [];
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]('en-US');
        this.paymentStatus = 'Due';
        this.showForm = false;
    }
    DeliveryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (_this.id) {
                _this.deliveryService.getDeliveryById(_this.type, _this.id)
                    .subscribe(function (res) {
                    _this.delivery = res;
                    _this.allProductsAdd = _this.delivery.productList;
                    _this.buildForm();
                }, function (err) {
                });
            }
        });
    };
    DeliveryEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.customerService.getCustomerDetails(this.delivery.customer_id)
            .subscribe(function (res) {
            _this.delivery.customerData = res;
            _this.delivery.customerData.productData = [];
            var total_partially_paid = 0;
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](_this.delivery.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    _this.delivery.customerData.productData.push(res);
                });
                total_partially_paid += item['amount'];
            });
            _this.deliveryDetailForm = _this.fb.group({
                username: [res['username']],
                email: [res['email']],
                fullname: [res['fullname']],
                location: [res['location']],
                area: [''],
                city: [res['city']],
                mobile_primary: [res['mobile_primary']],
                mobile_secondary: [res['mobile_secondary']],
                payment_due_date: [_this.delivery['payment_due_date']],
                amount_due: [_this.delivery['amount_due']],
                status: [_this.delivery['status']],
                total: [_this.delivery['total']],
                discount: [_this.delivery['discount']],
                delivery_created_date: [_this.delivery['delivery_created_date']],
                paid_date: [_this.delivery['paid_date']],
                amount_partially_paid: total_partially_paid
            });
            _this.areaService.getAreaById(res['area'])
                .subscribe(function (res) {
                _this.deliveryDetailForm.patchValue({
                    area: res['name']
                });
            });
            _this.showForm = true;
        });
    };
    DeliveryEditComponent.prototype.getProductSuggestions = function (event) {
        var _this = this;
        var data = {
            text: event.query
        };
        this.productService.searchByName(data)
            .subscribe(function (res) {
            _this.productSuggestions = res;
        }, function (err) {
        });
    };
    DeliveryEditComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    DeliveryEditComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0];
        this.additionalProducts.push(newProduct);
        this.allProductsAdd.push(newProduct._id);
        this.updatePayments();
    };
    DeliveryEditComponent.prototype.removeProduct = function (index) {
        var delIndex = this.allProductsAdd.indexOf(this.additionalProducts[index]);
        this.allProductsAdd.splice(delIndex, 1);
        this.additionalProducts.splice(index, 1);
        this.updatePayments();
    };
    DeliveryEditComponent.prototype.onProductChange = function (event, index, mode) {
        if (mode != 'my') {
            index = index + this.delivery.customerData.productData.length;
        }
        this.allProductsAdd[index] = event.target.value;
        this.updatePayments();
    };
    DeliveryEditComponent.prototype.submitDeliveryEditForm = function () {
        var _this = this;
        var data = {};
        data = {
            id: this.id,
            amount_due: this.deliveryDetailForm.value.amount_due,
            total: this.deliveryDetailForm.value.total,
            discount: this.deliveryDetailForm.value.discount,
            productList: this.allProductsAdd,
            amount_partially_paid: this.delivery.amount_partially_paid,
            type: this.type
        };
        this.deliveryService.preGenerateDeliveryUpdate(data)
            .subscribe(function (res) {
            _this.router.navigate(['dashboard/delivery/display', _this.type, _this.id]);
        }, function (err) {
            console.log('Error in Pre Generator');
        });
    };
    DeliveryEditComponent.prototype.changeStatus = function (event) {
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'Paid') {
            var currentDate = this.datePipe.transform(Date.now(), 'y-MM-dd');
            this.deliveryDetailForm.patchValue({
                paid_date: currentDate
            });
        }
    };
    DeliveryEditComponent.prototype.getPartiallyPaid = function (event) {
        this.deliveryDetailForm.patchValue({
            amount_partially_paid: event.target.value,
            amount_due: this.delivery.amount_due - event.target.value
        });
    };
    DeliveryEditComponent.prototype.getDiscount = function (event) {
        this.deliveryDetailForm.patchValue({
            total: this.deliveryDetailForm.value.amount_due - event.target.value
        });
    };
    DeliveryEditComponent.prototype.updatePayments = function () {
        var _this = this;
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](this.allProductsAdd, function (item) {
            var product = __WEBPACK_IMPORTED_MODULE_7_underscore__["findWhere"](_this.productList, { _id: item });
            total += product.rate;
        });
        this.deliveryDetailForm.patchValue({
            total: total,
            discount: 0,
            amount_due: total
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('productSelectBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], DeliveryEditComponent.prototype, "productSelectBox", void 0);
    DeliveryEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-delivery-edit',
            template: __webpack_require__("../../../../../src/app/delivery/delivery-edit/delivery-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delivery/delivery-edit/delivery-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], DeliveryEditComponent);
    return DeliveryEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery-html/delivery-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#delivery_box {\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#delivery_table {\n  background-color: #fff;\n  font-size: 20px;\n}\n\n#company_logo {\n  margin-top: 50px;\n  margin-left: 10px;\n  width: 210px;\n  height: 180px;\n}\n\n.row-divide {\n  border-bottom: 4px solid #d2d6de;\n}\n\n#delivery_box {\n  font-weight: 550;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-html/delivery-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;margin-left: 0vw;\">\n  <section class=\" content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Delivery Challan Display\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/delivery/all' ] \"><i class=\"fa fa-dashboard \"></i> Delivery Challan</a></li>\n        <li class=\"active \">Display</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"delivery\">\n    <div class=\"col-xs-12\" id=\"delivery_main\">\n      <div id=\"delivery_body\">\n        <!--delivery display starts here-->\n        <div class=\"\" id=\"delivery_box\" style=\"margin-top:10px\" #deliveryBox>\n          <!--head row-->\n          <div class=\"row \">\n            <!--left section-->\n            <div class=\"col-md-6\">\n              <img src=\"/assets/dist/img/Aquality.jpg\" style=\"width:40%; height:50%;\" id=\"company_logo\">\n            </div>\n            <!--right section-->\n            <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left; margin-top:8px;\">\n              <h3 style=\"font-size: 60px;\"></h3><br>\n\n            </div>\n\n            \n              <div class=row style=\"background-color:darkslategray; margin-top:150px; width:100%; height:200px;margin-left: 0vw;\">\n                <div class=\"col-md-4 col-xs-4\" >\n                  <div class=\"\" style=\"color:white; margin-left:40px;margin-top:20px; padding:10px; font-size:16px; \">\n                      <span> Delivery Challan for: </span><br>\n                      <strong> {{ delivery.customerData?.fullname }} </strong><br>\n                      <!--<span> {{ delivery.customerData?.location }} </span><br>-->\n                      <span> {{ delivery.customerData?.city }} </span><br>\n                      <span> India </span>\n                      <span> {{ delivery.customerData?.mobile_primary }} </span><br>\n                      <span> {{ delivery.customerData?.email }} </span><br>\n                      <!--<span> {{ delivery.customerData?.area }} </span><br>-->\n                      </div>\n                </div>\n                <div class=\"col-md-offset-2 col-md-6 col-xs-2\">\n                  <div style=\"padding-top:40px;\">\n                    <span style=\"color:rgb(245, 163, 10); font-size:70px;\">DELIVERY CHALLAN</span>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                    <span> Date: {{ delivery.created_on | date }} </span>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                    <span> Valid upto: DD/MM/YYYY</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> Delivery ref: #123456</span>\n                    </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                      \n                      <span> <strong>Delivery Number: </strong> #001</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> <strong>Mobile Number: </strong> {{ delivery.customerData?.mobile_primary }}</span>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                        <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    \n                  \n                      </div>\n                </div>\n\n              <!--table-->\n              <div id=\"delivery_table\">\n              <table class=\"table table-hover table-responsive\" *ngIf=\"delivery.productData\" style=\"width:100%; height:200px;margin-left: 0vw;\" >\n                  <thead style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                    <tr>\n                    \t<th> S.No.</th>\n                      <th>DESCRIPTION</th>\n                      <th>QUANTITY</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of delivery.productData;let i=index\"\n                    [ngClass]=\"i==delivery.productData.length-1 ? 'row-divide' : '' \">\n                      <td>1</td>\n                      <td>{{ product?.name }}</td>\n                      <td>1</td>\n                    </tr>\n\n                    \n\n                    <tr>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                    </tr>\n\n\n\n                    \n                  </tbody>\n                </table>\n                </div>\n                \n                        <!-- RECEIVED DELIVERED DISPATCHED -->\n<div id=\"delivery_table\">\n              <table class=\"table table-hover table-responsive\" *ngIf=\"delivery.productData\" style=\"width:100%; height:200px;margin-left: 0vw;\" >\n                  <thead style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                    <tr>\n                      <th> </th>\n                      <th> RECEIVER's SIGNATURE</th>\n                      <th>DELIVERED BY</th>\n                      <th>DISPATCHED BY</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <td>NAME</td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                    </tr>\n\n                    <tr>\n                      <td>SIGNATURE</td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                    </tr>\n\n\n                    <tr>\n                      <td>DATE</td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                    </tr>\n\n                    <tr>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                      <td></td>\n                    </tr>\n                  </tbody>\n                </table>\n                </div>\n                <br><br>\n<blockquote class=\"blockquote\">\n  <p class=\"mb-0\">*Goods once sold will not be taken back*</p>\n  <p class=\"mb-0\">*Mentioned Quantity has been received in Good Condition*</p>\n</blockquote>\n\n\n\n\n\n                      <div class=\"row\">\n                      <div class=\"col-md-6 col-xs-6\">\n                      <h3 class=\"well\">Bank Details</h3>\n                       <div class=\"table-responsive\">          \n                    <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th>AQUALITY Water Solutions Pvt Ltd</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          \n                          <td></td>\n                          <td>A/c No.</td>\n                          <td><strong>111 905 000 338</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>Bank</td>\n                          <td><strong>ICICI Bank - Filmnagar Br.</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>IFSC Code</td>\n                          <td><strong>ICIC 000 1119</strong></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                          \n                  </div>\n                  </div>\n\n                  <div class=\"col-md-6 col-xs-6\" style=\"margin-top:50px;\">\n                    <div style=\"text-align: -webkit-center; margin-top:20%; \">\n                       Name & Signature\n                    </div>\n                  </div>\n                  </div><br> <br>\n                  \n\n                 <div class=\"container-fluid\" style=\"background-color:none;\">\n                  <div class=\"footer\">\n                    <p><strong>THANK YOU FOR YOUR BUSINESS</strong> </p><hr>\n                    <div class=\"footer-header\">\n                      TERMS AND CONDITION\n\n                    </div>\n                  </div>\n\n                 </div>\n          \n\n            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">\n\n              <div>\n                <strong>Aquality Water Solutions Pvt Ltd.</strong><br>\n                <span># 8-1-284/OU/385/1&2, 4th Floor Bait-ul-Rida</span><br>\n                <span>OU Colony Shaikpet, Lanco hills Lane</span><br>\n                <span>Hyderabad, Telangana State - 500008</span><br>\n                <span>India</span><br><br>\n\n                <span>Phone: +91 40 6888 8486</span><br>\n                <span>Mobile: 709 389 8486</span><br>\n                <span>www.aquality.in</span>\n                <span>Email: accounts@aquality.in  | info@aquality.in</span>\n                <span></span>\n              </div>\n            </div>\n      \n            \n                <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left;line-height: 2;\">\n                    <span> <strong>Date: </strong> {{ delivery.created_on | date }} </span><br>\n                    <span> <strong>Delivery ref: </strong> #123456</span><br><br>\n                    \n                  \n                    <span> <strong>Valid upto: </strong> DD/MM/YYYY</span><br>\n                    <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    <span> <strong>Mobile Number: </strong> {{ delivery.customerData?.mobile_primary }}</span><br>\n                  <span> <strong>delivery Number: </strong> #001</span><br>\n                  <span> <strong>delivery Date: </strong> {{ delivery.created_on | date }} </span><br>\n                  <span> <strong>Payment Due: </strong> {{ delivery.created_on | date }}</span> <br>\n                  <span> <strong>Amount Due (INR): </strong> INR. {{ delivery.amount_due }}</span><br>\n                </div>-->\n\n                \n              \n          </div>\n          <hr>\n\n          <!--middle row-->\n          \n          \n        </div>\n        <!--table section-->\n        \n      </div>\n      <div style=\"margin-top:15px\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadPDF()\"><i class=\"fa fa-download\"\n                                                                                 aria-hidden=\"true\"></i>&nbsp;Download\n          as PDF\n        </button>\n        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>&nbsp;Export\n          as CSV\n        </button>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-html/delivery-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delivery_service__ = __webpack_require__("../../../../../src/app/delivery/delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeliveryHtmlComponent = (function () {
    function DeliveryHtmlComponent(generalService, productService, customerService, deliveryService, route) {
        this.generalService = generalService;
        this.productService = productService;
        this.customerService = customerService;
        this.deliveryService = deliveryService;
        this.route = route;
        this.type = '';
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]('en-US');
        this.isAutoDelivery = false;
    }
    DeliveryHtmlComponent.prototype.ngOnChanges = function (changes) {
        if (changes['autoDelivery']) {
            this.isAutoDelivery = true;
            this.tempDelivery = changes['autoDelivery'].currentValue;
        }
    };
    DeliveryHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.displaySidebar(false);
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (!_this.isAutoDelivery) {
                _this.getDeliveryById(params['id']);
            }
            else {
                _this.delivery = _this.tempDelivery;
                _this.delivery['created_on'] = _this.currentDate;
                _this.finalTotal = _this.delivery.amount_due - _this.delivery.discount;
                _this.finalTotalWords = _this.numberToEnglish(_this.delivery.total, '');
            }
        });
    };
    DeliveryHtmlComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DeliveryHtmlComponent.prototype.ngAfterContentInit = function () {
        // if (this.isAutoDelivery) {
        //   this.downloadPDF();
        //
        // }
    };
    DeliveryHtmlComponent.prototype.ngAfterViewInit = function () {
        if (this.isAutoDelivery) {
            this.downloadPDF();
        }
    };
    DeliveryHtmlComponent.prototype.downloadPDF = function () {
        var _this = this;
        html2canvas(document.getElementById('delivery_body'), {
            onrendered: function (canvas) {
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF("p", "mm", "a4");
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 200);
                if (_this.isAutoDelivery) {
                    var pdf = pdf.output('datauristring');
                    var data = {
                        pdf: pdf,
                        label: _this.delivery.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM')
                    };
                    console.log(data);
                    _this.deliveryService.saveAutoDelivery(data)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log("Error in auto pilot");
                    });
                }
                else {
                    pdf.save(_this.delivery.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM') + ".pdf");
                }
            }
        });
    };
    DeliveryHtmlComponent.prototype.getDeliveryById = function (id) {
        var _this = this;
        this.deliveryService.getDeliveryById(this.type, id)
            .subscribe(function (res) {
            _this.delivery = res;
            _this.delivery.total = 0;
            _this.delivery.productData = [];
            // get product data
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.delivery.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    res['amount_with_vat'] = res['rate'] + (res['rate'] * (res['vat'] / 100));
                    _this.delivery.productData.push(res);
                    _this.delivery.total = _this.delivery.total + res['amount_with_vat'];
                    _this.delivery.amount_due = _this.delivery.total;
                }, function (err) {
                }, function () {
                    if (_this.delivery.amount_partially_paid.length > 0) {
                        __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.delivery.amount_partially_paid, function (data) {
                            _this.delivery.amount_due = _this.delivery.amount_due - data['amount'];
                        });
                    }
                    if (_this.delivery.status == 'Paid') {
                        _this.delivery.amount_due = 0;
                    }
                    _this.finalTotal = _this.delivery.amount_due - _this.delivery.discount;
                    _this.finalTotalWords = _this.numberToEnglish(_this.delivery.total, '');
                });
            });
            //get customer data
            _this.customerService.getCustomerDetails(_this.delivery.customer_id)
                .subscribe(function (res) {
                _this.delivery.customerData = res;
            }, function (err) {
            }, function () {
                console.log(_this.delivery);
            });
        }, function (err) {
            console.log(err);
        });
    };
    DeliveryHtmlComponent.prototype.numberToEnglish = function (n, custom_join_character) {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        var and = custom_join_character || 'and';
        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'zero';
        }
        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {
            chunk = parseInt(chunks[i]);
            if (chunk) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }
                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }
                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }
                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }
                }
                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }
            }
        }
        return words.reverse().join(' ');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('deliveryBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DeliveryHtmlComponent.prototype, "deliveryBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DeliveryHtmlComponent.prototype, "autoDelivery", void 0);
    DeliveryHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery-html',
            template: __webpack_require__("../../../../../src/app/delivery/delivery-html/delivery-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delivery/delivery-html/delivery-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], DeliveryHtmlComponent);
    return DeliveryHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery-recent/delivery-recent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-recent/delivery-recent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1800px;\">\n\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isDeliverySaved\">Delivery Challan Data Saved Successfully !!</div>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isDeliveryError\">ERROR !! Please Try Again.</div>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Recent Deliveries\n        <small><em> Generated for the month of {{ currentDate | date: 'MMMM' }} </em></small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> InvoiceApp</a></li>\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Delivery Challan</a></li>\n        <li class=\"active\">Recent</li>\n      </ol>\n\n      <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delDelivery\">\n        <h4>\n          <strong>Delete Confirmation !!</strong> <br>\n          Delete the delivery challan for <em>{{ delDelivery.customerData?.username }} </em> ?\n        </h4>\n        <br>\n        <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"content\">\n\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">Recent Delivery Challan List</h3>\n          <br>\n          <div class=\"box-tools\">\n\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Deliveries\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"deliveryList\">\n\n          <br>\n          <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n          </div>\n          <br>\n\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let delivery of deliveryList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalCustomerCount }\">\n              <td>{{ delivery.customerData?.username }}</td>\n              <td>{{ delivery.customerData?.fullname }}</td>\n              <td>{{ delivery.customerData?.mobile_primary }}</td>\n              <td>{{ delivery.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"delivery.customerData?.productData?.length>0\"> {{ delivery.customerData?.productData[0]?.name }} - <em *ngIf=\"delivery.customerData?.productData[0]?.rate\">{{ delivery.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ delivery.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ delivery.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ delivery?.amount_due }}</td>\n              <td>{{ delivery?.total - delivery?.amount_due }}</td>\n              <td>{{ delivery?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"delivery.status=='Due'\"> {{ delivery.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"delivery.status=='Paid'\"> {{ delivery.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"delivery.status=='Partially Paid'\"> {{ delivery.status\n                  }} </label>\n              </td>\n              <td *ngIf=\"delivery?.status=='Due' || delivery?.status=='Partially Paid'\">\n                {{ delivery?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"delivery?.status=='Paid'\">\n                {{ delivery?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',delivery)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',delivery)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',delivery)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/delivery/view','recent',delivery?._id]\"> View</a>\n                <!--<button class=\"btn btn-xs btn-danger\" (click)=\"remove(delivery)\"><i class=\"fa fa-times\"-->\n                <!--aria-hidden=\"true\"></i></button>-->\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialDelivery\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialDelivery?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialDelivery?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialDelivery?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialDelivery\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-recent/delivery-recent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryRecentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_service__ = __webpack_require__("../../../../../src/app/delivery/delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeliveryRecentComponent = (function () {
    function DeliveryRecentComponent(customerService, router, deliveryService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.deliveryService = deliveryService;
        this.productService = productService;
        this.areaService = areaService;
        this.currentDate = Date.now();
        this.deliveryList = [];
        this.searchMode = 'username';
        this.isDeliverySaved = false;
        this.isDeliveryError = false;
        this.showRemoveConfirmation = false;
        this.paginator = 1;
        this.totalCustomerCount = 0;
    }
    DeliveryRecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getRecentDeliveryDB();
        // this.wakeUpDeliveryDemon();
    };
    //useless shitty method
    DeliveryRecentComponent.prototype.wakeUpDeliveryDemon = function () {
        var _this = this;
        this.deliveryService.cleanDelivery()
            .subscribe(function (res) {
            if (res.status) {
                _this.generateNewDelivery();
            }
            else {
                _this.getRecentDeliveryDB();
            }
        });
    };
    //useless shitty method
    DeliveryRecentComponent.prototype.generateNewDelivery = function () {
        var _this = this;
        this.deliveryService.dropRecentDelivery()
            .subscribe(function (res) {
            _this.buildAndSaveRecentDelivery();
        });
    };
    DeliveryRecentComponent.prototype.getRecentDeliveryDB = function () {
        var _this = this;
        this.deliveryList = [];
        this.deliveryService.getRecentDeliveryDB(this.paginator)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (delivery) {
                var customer;
                _this.customerService.getCustomerDetails(delivery.customer_id)
                    .subscribe(function (res) {
                    if (res['status']) {
                        customer = res;
                        customer.productData = [];
                        if (delivery.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](delivery.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer["productData"].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer["areaData"] = res;
                        });
                        delivery.customerData = customer;
                        _this.deliveryList.push(delivery);
                    }
                });
            });
        }, function (err) {
        }, function () {
            for (var i = 0; i < _this.deliveryList.length; i++) {
                console.log("Hello World");
            }
        });
    };
    DeliveryRecentComponent.prototype.buildAndSaveRecentDelivery = function () {
        var _this = this;
        this.deliveryService.buildAndSaveRecentDelivery()
            .subscribe(function (res) {
            _this.getRecentDeliveryDB();
        }, function (err) {
            console.log('Error in build and save');
        });
    };
    DeliveryRecentComponent.prototype.saveRecentDelivery = function (delivery) {
        this.deliveryService.saveRecentDelivery(delivery)
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    DeliveryRecentComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    DeliveryRecentComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getRecentDeliveryDB();
            return;
        }
        var reg = new RegExp(event, "i");
        var resArray = [];
        if (this.searchMode == 'username') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.deliveryList, function (item) {
                if (reg.test(item['customerData']['username'])) {
                    resArray.push(item);
                }
            });
            this.deliveryList = resArray;
        }
        else if (this.searchMode == 'mobile_number') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.deliveryList, function (item) {
                if (reg.test(item['customerData']['mobile_primary'])) {
                    resArray.push(item);
                }
            });
            this.deliveryList = resArray;
        }
        else if (this.searchMode == 'area') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.deliveryList, function (item) {
                if (reg.test(item['customerData']['areaData']['name'])) {
                    resArray.push(item);
                }
            });
            this.deliveryList = resArray;
        }
    };
    DeliveryRecentComponent.prototype.changeStatus = function (status, delivery) {
        if (status == 'Paid') {
            this.setPaidDateCounter(delivery);
            delivery.status = 'Paid';
            delivery.paid_date = Date.now();
            delivery.amount_due = 0;
        }
        else if (status == 'Due') {
            delivery.status = 'Due';
            delivery.amount_due = delivery.total;
            delivery.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialDelivery = delivery;
        }
        delivery['type'] = 'recent';
        this.deliveryService.changeDeliveryStatus(delivery)
            .subscribe(function (res) {
        });
    };
    DeliveryRecentComponent.prototype.setPaidDateCounter = function (delivery) {
        this.deliveryService.setPaidDateCounter(delivery)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    DeliveryRecentComponent.prototype.toggleSearchStatus = function (event) {
        var _this = this;
        this.getRecentDeliveryDB();
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'All') {
            return;
        }
        var resArray = [];
        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.deliveryList, function (item) {
            if (__WEBPACK_IMPORTED_MODULE_3_underscore__["isEqual"](item.status, _this.paymentStatus)) {
                resArray.push(item);
            }
        });
        this.deliveryList = resArray;
    };
    DeliveryRecentComponent.prototype.savePartialPay = function () {
        var _this = this;
        var data = {
            id: this.partialDelivery['_id'],
            amount_partially_paid: this.partialPay
        };
        this.deliveryService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getRecentDeliveryDB();
            }
        }, function (err) {
        });
    };
    DeliveryRecentComponent.prototype.remove = function (delDelivery) {
        this.showRemoveConfirmation = true;
        this.delDelivery = delDelivery;
    };
    DeliveryRecentComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.deliveryService.deleteDelivery(this.delDelivery)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.deliveryList = __WEBPACK_IMPORTED_MODULE_3_underscore__["without"](_this.deliveryList, __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](_this.deliveryList, {
                        _id: _this.delDelivery['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delDelivery = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    //  for pagination
    DeliveryRecentComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getRecentDeliveryDB();
    };
    DeliveryRecentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-delivery-recent',
            template: __webpack_require__("../../../../../src/app/delivery/delivery-recent/delivery-recent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delivery/delivery-recent/delivery-recent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], DeliveryRecentComponent);
    return DeliveryRecentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var deliveryRoutes = [];
var DeliveryRoutingModule = (function () {
    function DeliveryRoutingModule() {
    }
    DeliveryRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(deliveryRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], DeliveryRoutingModule);
    return DeliveryRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery-search/delivery-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-search/delivery-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:100vh\">\n\n  <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delDelivery\">\n    <h4>\n      <strong>Delete Confirmation !!</strong> <br>\n      Delete the Delivery Challan for <em>{{ delDelivery.customerData?.username }} </em>  ?\n    </h4>\n    <br>\n    <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n    <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n  </div>\n\n  <section class=\"content\">\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <h2 style=\"margin-left:10px\">Search Delivery Challanof any customer</h2>\n        <hr>\n\n        <!--search results for delivery show box-->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:20px;margin-bottom: 20px\"\n             *ngIf=\"deliveryList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <!--<th>Due (INR)</th>\n              <th>Paid (INR)</th>-->\n              <th>Total (INR)</th>\n              <!--<th>Status</th>-->\n              <th>Delivery Challan Generated On</th>\n              <!--<th>Last Transaction Date</th>\n              <th>Change Status</th>-->\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let delivery of deliveryList\">\n              <td>{{ delivery.customerData?.username }}</td>\n              <td>{{ delivery.customerData?.fullname }}</td>\n              <td>{{ delivery.customerData?.mobile_primary }}</td>\n              <td>{{ delivery.customerData?.areaData?.name }}</td>\n\n              <td><span *ngIf=\"delivery.customerData?.productData?.length>0\"> {{ delivery.customerData?.productData[0]?.name }} - <em *ngIf=\"delivery.customerData?.productData[0]?.rate\">{{ delivery.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ delivery.customerData?.productData.length }}</small>\n              </td>\n\n              <!--<td>\n                <small class=\"label bg-blue\">{{ delivery.customerData?.productData?.length }}</small>\n              </td>-->\n              <!--<td>{{ delivery?.amount_due }}</td>\n              <td>{{ delivery?.total - delivery?.amount_due }}</td>-->\n              <td>{{ delivery?.total }}</td>\n              <!--<td>\n                <label class=\"label label-danger\" *ngIf=\"delivery.status=='Due'\"> {{ delivery.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"delivery.status=='Paid'\"> {{ delivery.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"delivery.status=='Partially Paid'\"> {{ delivery.status\n                  }} </label>\n              </td>-->\n              <td>\n                {{ delivery?.created_on | date: 'yMMMd' }}\n              </td>\n              <!--<td *ngIf=\"delivery?.status=='Due' || delivery?.status=='Partially Paid'\">\n                {{ delivery?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"delivery?.status=='Paid'\">\n                {{ delivery?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',delivery)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',delivery)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',delivery)\"> Due</button>\n              </td>-->\n              <td>\n                <a type=\"button\" *ngIf=\"delivery?.type=='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/delivery/view','recent',delivery?._id]\">\n                  View</a>\n                <a type=\"button\" *ngIf=\"delivery?.type!='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/delivery/view','all',delivery?._id]\">\n                  View</a>\n\n                <button class=\"btn btn-xs btn-danger\" (click)=\"remove(delivery)\"><i class=\"fa fa-times\"\n                                                                                   aria-hidden=\"true\"></i></button>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialDelivery\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialDelivery?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialDelivery?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialDelivery?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialDelivery\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay(partialDelivery)\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n        <!--search box and functionality-->\n        <div class=\"container\">\n          <div class=\"col-lg-12\">\n            <form class=\"form-group\">\n              <input style=\"width:100%\" (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                     placeholder=\"Search for a customer\">\n            </form>\n\n            <!--search resultsa-->\n            <div *ngIf=\"searchResults.length>0\">\n              <strong style=\"font-size: 20px\"> Search results: </strong> <span class=\"search_text\"\n                                                                               style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n              <br>\n              <ul style=\"list-style-type:none\">\n                <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                  <br>\n                </li>\n                <hr>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/delivery/delivery-search/delivery-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliverySearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delivery_service__ = __webpack_require__("../../../../../src/app/delivery/delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeliverySearchComponent = (function () {
    function DeliverySearchComponent(customerService, deliveryService, productService, areaService) {
        this.customerService = customerService;
        this.deliveryService = deliveryService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
        this.deliveryList = [];
        this.showRemoveConfirmation = false;
    }
    DeliverySearchComponent.prototype.ngOnInit = function () {
    };
    DeliverySearchComponent.prototype.getSearchText = function (event) {
        this.deliveryList = [];
        this.searchResults = [];
        this.searchText = event.target.value;
        this.getGlobalDeliverySearchByCustomer();
    };
    DeliverySearchComponent.prototype.getGlobalDeliverySearchByCustomer = function () {
        var _this = this;
        this.deliveryService.globalDeliverySearchByCustomer(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    DeliverySearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        var id = data['_id'];
        this.deliveryList = [];
        this.deliveryService.getDeliveryByCustomerId(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (delivery) {
                var customer;
                if (delivery['type'] == '') {
                    delivery['type'] = 'recent';
                }
                _this.customerService.getCustomerDetails(delivery.customer_id)
                    .subscribe(function (res) {
                    customer = res;
                    if (customer['status']) {
                        customer.productData = [];
                        if (delivery.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](delivery.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        delivery.customerData = customer;
                        _this.deliveryList.push(delivery);
                    }
                });
            });
        }, function (err) {
            console.log('Error in getSearchDetails');
        });
    };
    DeliverySearchComponent.prototype.changeStatus = function (status, delivery) {
        if (status == 'Paid') {
            this.setPaidDateCounter(delivery);
            delivery.status = 'Paid';
            delivery.paid_date = Date.now();
            delivery.amount_due = 0;
        }
        else if (status == 'Due') {
            delivery.status = 'Due';
            delivery.amount_due = delivery.total;
            delivery.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialDelivery = delivery;
        }
        if (delivery['type'] != 'recent') {
            delivery['type'] = 'all';
        }
        this.deliveryService.changeDeliveryStatus(delivery)
            .subscribe(function (res) {
        });
    };
    DeliverySearchComponent.prototype.setPaidDateCounter = function (delivery) {
        this.deliveryService.setPaidDateCounter(delivery)
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    DeliverySearchComponent.prototype.savePartialPay = function (delivery) {
        var _this = this;
        var data = {
            id: this.partialDelivery['_id'],
            amount_partially_paid: this.partialPay
        };
        this.deliveryService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getSearchDetails({ _id: delivery.customer_id });
            }
        }, function (err) {
        });
    };
    DeliverySearchComponent.prototype.remove = function (delivery) {
        this.showRemoveConfirmation = true;
        this.delDelivery = delivery;
    };
    DeliverySearchComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.deliveryService.deleteDelivery(this.delDelivery)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.deliveryList = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.deliveryList, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.deliveryList, {
                        _id: _this.delDelivery['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delDelivery = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    DeliverySearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delivery-search',
            template: __webpack_require__("../../../../../src/app/delivery/delivery-search/delivery-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delivery/delivery-search/delivery-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__delivery_service__["a" /* DeliveryService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__area_area_service__["a" /* AreaService */]])
    ], DeliverySearchComponent);
    return DeliverySearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__delivery_routing_module__ = __webpack_require__("../../../../../src/app/delivery/delivery-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__delivery_all_delivery_all_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-all/delivery-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__delivery_create_delivery_create_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-create/delivery-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__delivery_service__ = __webpack_require__("../../../../../src/app/delivery/delivery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__delivery_recent_delivery_recent_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-recent/delivery-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__delivery_edit_delivery_edit_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-edit/delivery-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__delivery_html_delivery_html_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-html/delivery-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__delivery_search_delivery_search_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-search/delivery-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var DeliveryModule = (function () {
    function DeliveryModule() {
    }
    DeliveryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__delivery_routing_module__["a" /* DeliveryRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__delivery_all_delivery_all_component__["a" /* DeliveryAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__delivery_create_delivery_create_component__["a" /* DeliveryCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__delivery_recent_delivery_recent_component__["a" /* DeliveryRecentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__delivery_edit_delivery_edit_component__["a" /* DeliveryEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__delivery_html_delivery_html_component__["a" /* DeliveryHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_16__delivery_search_delivery_search_component__["a" /* DeliverySearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__delivery_html_delivery_html_component__["a" /* DeliveryHtmlComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__delivery_service__["a" /* DeliveryService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_11__area_area_service__["a" /* AreaService */],
                __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_15__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], DeliveryModule);
    return DeliveryModule;
}());



/***/ }),

/***/ "../../../../../src/app/delivery/delivery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeliveryService = (function () {
    function DeliveryService(http) {
        this.http = http;
        this.deliveryUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'delivery/';
    }
    DeliveryService.prototype.removeDelivery = function (delivery) {
        var url = this.deliveryUrl + 'remove-delivery';
        return this.http.post(url, delivery).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getDeliveryByCustomerId = function (id) {
        var url = this.deliveryUrl + 'by-customer-id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.globalDeliverySearchByCustomer = function (query) {
        var url = this.deliveryUrl + 'global-search-by-customer/' + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.saveAutoDelivery = function (data) {
        var url = this.deliveryUrl + 'save-auto-delivery';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getAllDelivery = function (paginator) {
        var url = this.deliveryUrl + 'all/page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getRecentDelivery = function () {
        var url = this.deliveryUrl + 'recent';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.storeDelivery = function (data) {
        var url = this.deliveryUrl + 'create';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.downloadPDF = function (data) {
        var url = this.deliveryUrl + 'generate/pdf';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getDeliveryById = function (type, id) {
        var url = this.deliveryUrl + type + '/id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.searchByUsername = function (data) {
        var url = this.deliveryUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.saveRecentDelivery = function (data) {
        var url = this.deliveryUrl + 'recent/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.dropRecentDelivery = function () {
        var url = this.deliveryUrl + 'drop/recent/all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.checkIfRecentDeliveryExists = function () {
        var url = this.deliveryUrl + 'recent_delivery/exists';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getRecentDeliveryDB = function (paginator) {
        var url = this.deliveryUrl + 'recent_delivery_db/paginator=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.cleanDelivery = function () {
        var url = this.deliveryUrl + 'clean_delivery';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.changeDeliveryStatus = function (data) {
        var url = this.deliveryUrl + 'change_status';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    //get total of all products in product list
    DeliveryService.prototype.getTotal = function (data) {
        var url = this.deliveryUrl + 'product_list/total';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.buildAndSaveRecentDelivery = function () {
        var url = this.deliveryUrl + 'recent/build_and_save';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.savePartialPay = function (data) {
        var url = this.deliveryUrl + 'recent/partial_pay/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.preGenerateDeliveryUpdate = function (data) {
        var url = this.deliveryUrl + 'pre_generate_update';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.deleteDelivery = function (delivery) {
        var url = this.deliveryUrl + 'delete';
        return this.http.post(url, delivery).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.setPaidDateCounter = function (delivery) {
        var url = this.deliveryUrl + 'set_paid_date_counter';
        return this.http.post(url, delivery).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getPaidDateCounter = function () {
        var url = this.deliveryUrl + 'get_paid_date_counter';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.getAllDeliveryCount = function () {
        var url = this.deliveryUrl + 'all_delivery_count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    DeliveryService.prototype.createNewDelivery = function (data) {
        var url = this.deliveryUrl + 'create/new';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    DeliveryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], DeliveryService);
    return DeliveryService;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <section class=\"content-header\">\n    <h1>\n      Upload File\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a [routerLink]=\"['/dashboard/home']\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n      <li class=\"active\">Upload Data File</li>\n    </ol>\n    <br>\n  </section>\n  <section class=\"content\">\n    <!--  Page Content Here -->\n    <h4>Customer Data File (.csv) </h4>\n    <div class=\"col-md-12\">\n      <div class=\"col-md-3\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isUploadSuccess\">Customers Data Successfully Inserted Into\n          Database\n        </div>\n        <div class=\"form-group\">\n          <label for=\"fileInput\">File input</label>\n          <input name=\"csvFile\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" id=\"fileInput\" placeholder=\"Upload File\" accept=\".csv\"\n                 (change)=\"getFile($event)\">\n          <p class=\"help-block\">* Uploading this file will rewrite your database of customers.</p>\n        </div>\n        <button class=\"btn btn-success\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload</button>\n      </div>\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelFileUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExcelFileUploaderComponent = (function () {
    function ExcelFileUploaderComponent(http, customerService, fb) {
        this.http = http;
        this.customerService = customerService;
        this.fb = fb;
        this.isUploadSuccess = false;
        this.uploadUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].api_server + 'customer/upload-file-contents';
        this.uploader = new __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.uploadUrl, itemAlias: 'csvFile' });
    }
    ExcelFileUploaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            if (status == 200) {
                _this.isUploadSuccess = true;
            }
        };
    };
    ExcelFileUploaderComponent.prototype.createForm = function () {
        this.fileUploadForm = this.fb.group({
            file: ''
        });
    };
    ExcelFileUploaderComponent.prototype.onSubmitForm = function () {
    };
    ExcelFileUploaderComponent.prototype.getFile = function (event) {
        var fileList = event.target.files;
        this.file = fileList[0];
    };
    ExcelFileUploaderComponent.prototype.errorHandler = function (event) {
        this.isFileRead = false;
        console.log("Error in uploading file");
    };
    ExcelFileUploaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-excel-file-uploader',
            template: __webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], ExcelFileUploaderComponent);
    return ExcelFileUploaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var fileUploadRoutes = [];
var FileUploadRoutingModule = (function () {
    function FileUploadRoutingModule() {
    }
    FileUploadRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(fileUploadRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], FileUploadRoutingModule);
    return FileUploadRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_upload_routing_module__ = __webpack_require__("../../../../../src/app/file-upload/file-upload-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__excel_file_uploader_excel_file_uploader_component__ = __webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_upload_service__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// components

//service



var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    FileUploadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__file_upload_routing_module__["a" /* FileUploadRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__excel_file_uploader_excel_file_uploader_component__["a" /* ExcelFileUploaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__excel_file_uploader_excel_file_uploader_component__["a" /* ExcelFileUploaderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__file_upload_service__["a" /* FileUploadService */],
                __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */]
            ]
        })
    ], FileUploadModule);
    return FileUploadModule;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileUploadService = (function () {
    function FileUploadService(http) {
        this.http = http;
        this.customerUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'customer/';
    }
    FileUploadService.prototype.createNewCustomer = function (data) {
        var url = this.customerUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res; });
    };
    FileUploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], FileUploadService);
    return FileUploadService;
}());



/***/ }),

/***/ "../../../../../src/app/general/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-navbar></app-navbar>\n\n    <app-sidebar *ngIf=\"isDisplaySideBar\"></app-sidebar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n    \n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/general/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(generalService) {
        this.generalService = generalService;
        this.isDisplaySideBar = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDisplaySideBar = true;
        this.generalService.displaySidebarConfirmed$.subscribe(function (status) {
            _this.isDisplaySideBar = status;
            console.log(status);
        });
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/general/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/dashboard/dashboard.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__general_service__["a" /* GeneralService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__general_service__["a" /* GeneralService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/general/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Footer -->\n<footer class=\"main-footer\">\n    <!-- To the right -->\n    <div class=\"pull-right hidden-xs\">\n        <strong>Powered by <a href=\"https://www.sofkul.com\" target=\"_blank\">Sofkul</a></strong>\n      <!--<i class=\"fa fa-heart\" aria-hidden=\"true\"></i><span> Angular </span> &nbsp;-->\n      <!--<i class=\"fa fa-bolt\" aria-hidden=\"true\"></i><span> Node.js</span>-->\n    </div>\n    <!-- Default to the left -->\n    <strong>Copyright © 2018 <a href=\"https://www.minovative.com\" target=\"_blank\">Minovative Technologies Private Limited.</a> All Rights Reserved</strong>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/general/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/general/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/general/general-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_body_home_body_component__ = __webpack_require__("../../../../../src/app/home/home-body/home-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__file_upload_excel_file_uploader_excel_file_uploader_component__ = __webpack_require__("../../../../../src/app/file-upload/excel-file-uploader/excel-file-uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_all_customer_all_component__ = __webpack_require__("../../../../../src/app/customer/customer-all/customer-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_customer_detail_customer_detail_component__ = __webpack_require__("../../../../../src/app/customer/customer-detail/customer-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_customer_create_customer_create_component__ = __webpack_require__("../../../../../src/app/customer/customer-create/customer-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_create_area_create_component__ = __webpack_require__("../../../../../src/app/area/area-create/area-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quotation_quotation_all_quotation_all_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quotation_quotation_recent_quotation_recent_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quotation_quotation_edit_quotation_edit_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__quotation_quotation_html_quotation_html_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quotation_quotation_create_quotation_create_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_search_quotation_search_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_all_invoice_all_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_recent_invoice_recent_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__invoice_invoice_edit_invoice_edit_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__invoice_invoice_html_invoice_html_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__report_location_due_report_location_due_report_component__ = __webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__invoice_invoice_create_invoice_create_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__invoice_invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__proforma_proforma_all_proforma_all_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-all/proforma-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__proforma_proforma_recent_proforma_recent_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-recent/proforma-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__proforma_proforma_edit_proforma_edit_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-edit/proforma-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__proforma_proforma_html_proforma_html_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-html/proforma-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__proforma_proforma_create_proforma_create_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-create/proforma-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__proforma_proforma_search_proforma_search_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-search/proforma-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__delivery_delivery_all_delivery_all_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-all/delivery-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__delivery_delivery_recent_delivery_recent_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-recent/delivery-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__delivery_delivery_edit_delivery_edit_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-edit/delivery-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__delivery_delivery_html_delivery_html_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-html/delivery-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__delivery_delivery_create_delivery_create_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-create/delivery-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__delivery_delivery_search_delivery_search_component__ = __webpack_require__("../../../../../src/app/delivery/delivery-search/delivery-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// components







//Quotation






// Invoice







//Proforma






//Delivery






var generalRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_body_home_body_component__["a" /* HomeBodyComponent */]
    },
    {
        path: 'upload-file',
        component: __WEBPACK_IMPORTED_MODULE_3__file_upload_excel_file_uploader_excel_file_uploader_component__["a" /* ExcelFileUploaderComponent */]
    },
    {
        path: 'customer/all',
        component: __WEBPACK_IMPORTED_MODULE_4__customer_customer_all_customer_all_component__["a" /* CustomerAllComponent */]
    },
    {
        path: 'customer/detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__customer_customer_detail_customer_detail_component__["a" /* CustomerDetailComponent */]
    },
    {
        path: 'customer/create',
        component: __WEBPACK_IMPORTED_MODULE_7__customer_customer_create_customer_create_component__["a" /* CustomerCreateComponent */]
    },
    {
        path: 'product',
        component: __WEBPACK_IMPORTED_MODULE_6__product_product_create_product_create_component__["a" /* ProductCreateComponent */]
    },
    {
        path: 'area',
        component: __WEBPACK_IMPORTED_MODULE_8__area_area_create_area_create_component__["a" /* AreaCreateComponent */]
    },
    {
        path: 'invoice/all',
        component: __WEBPACK_IMPORTED_MODULE_15__invoice_invoice_all_invoice_all_component__["a" /* InvoiceAllComponent */]
    },
    {
        path: 'invoice/search',
        component: __WEBPACK_IMPORTED_MODULE_21__invoice_invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */]
    },
    {
        path: 'invoice/create',
        component: __WEBPACK_IMPORTED_MODULE_20__invoice_invoice_create_invoice_create_component__["a" /* InvoiceCreateComponent */]
    },
    {
        path: 'invoice/recent',
        component: __WEBPACK_IMPORTED_MODULE_16__invoice_invoice_recent_invoice_recent_component__["a" /* InvoiceRecentComponent */]
    },
    {
        path: 'invoice/display/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_18__invoice_invoice_html_invoice_html_component__["a" /* InvoiceHtmlComponent */]
    },
    {
        path: 'invoice/view/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_17__invoice_invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */]
    },
    {
        path: 'quotation/all',
        component: __WEBPACK_IMPORTED_MODULE_9__quotation_quotation_all_quotation_all_component__["a" /* QuotationAllComponent */]
    },
    {
        path: 'quotation/search',
        component: __WEBPACK_IMPORTED_MODULE_14__quotation_quotation_search_quotation_search_component__["a" /* QuotationSearchComponent */]
    },
    {
        path: 'quotation/create',
        component: __WEBPACK_IMPORTED_MODULE_13__quotation_quotation_create_quotation_create_component__["a" /* QuotationCreateComponent */]
    },
    {
        path: 'quotation/recent',
        component: __WEBPACK_IMPORTED_MODULE_10__quotation_quotation_recent_quotation_recent_component__["a" /* QuotationRecentComponent */]
    },
    {
        path: 'quotation/display/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__quotation_quotation_html_quotation_html_component__["a" /* QuotationHtmlComponent */]
    },
    {
        path: 'quotation/view/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_11__quotation_quotation_edit_quotation_edit_component__["a" /* QuotationEditComponent */]
    },
    {
        path: 'proforma/all',
        component: __WEBPACK_IMPORTED_MODULE_22__proforma_proforma_all_proforma_all_component__["a" /* ProformaAllComponent */]
    },
    {
        path: 'proforma/search',
        component: __WEBPACK_IMPORTED_MODULE_27__proforma_proforma_search_proforma_search_component__["a" /* ProformaSearchComponent */]
    },
    {
        path: 'proforma/create',
        component: __WEBPACK_IMPORTED_MODULE_26__proforma_proforma_create_proforma_create_component__["a" /* ProformaCreateComponent */]
    },
    {
        path: 'proforma/recent',
        component: __WEBPACK_IMPORTED_MODULE_23__proforma_proforma_recent_proforma_recent_component__["a" /* ProformaRecentComponent */]
    },
    {
        path: 'proforma/display/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_25__proforma_proforma_html_proforma_html_component__["a" /* ProformaHtmlComponent */]
    },
    {
        path: 'proforma/view/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_24__proforma_proforma_edit_proforma_edit_component__["a" /* ProformaEditComponent */]
    },
    {
        path: 'delivery/all',
        component: __WEBPACK_IMPORTED_MODULE_28__delivery_delivery_all_delivery_all_component__["a" /* DeliveryAllComponent */]
    },
    {
        path: 'delivery/search',
        component: __WEBPACK_IMPORTED_MODULE_33__delivery_delivery_search_delivery_search_component__["a" /* DeliverySearchComponent */]
    },
    {
        path: 'delivery/create',
        component: __WEBPACK_IMPORTED_MODULE_32__delivery_delivery_create_delivery_create_component__["a" /* DeliveryCreateComponent */]
    },
    {
        path: 'delivery/recent',
        component: __WEBPACK_IMPORTED_MODULE_29__delivery_delivery_recent_delivery_recent_component__["a" /* DeliveryRecentComponent */]
    },
    {
        path: 'delivery/display/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_31__delivery_delivery_html_delivery_html_component__["a" /* DeliveryHtmlComponent */]
    },
    {
        path: 'delivery/view/:type/:id',
        component: __WEBPACK_IMPORTED_MODULE_30__delivery_delivery_edit_delivery_edit_component__["a" /* DeliveryEditComponent */]
    },
    {
        path: 'report',
        component: __WEBPACK_IMPORTED_MODULE_19__report_location_due_report_location_due_report_component__["a" /* LocationDueReportComponent */]
    }
];
var GeneralRoutingModule = (function () {
    function GeneralRoutingModule() {
    }
    GeneralRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(generalRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], GeneralRoutingModule);
    return GeneralRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/general/general.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_routing_module__ = __webpack_require__("../../../../../src/app/general/general-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/general/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/general/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/general/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/general/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__file_upload_file_upload_module__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customer_customer_module__ = __webpack_require__("../../../../../src/app/customer/customer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_module__ = __webpack_require__("../../../../../src/app/product/product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_area_module__ = __webpack_require__("../../../../../src/app/area/area.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__invoice_invoice_module__ = __webpack_require__("../../../../../src/app/invoice/invoice.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quotation_quotation_module__ = __webpack_require__("../../../../../src/app/quotation/quotation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__proforma_proforma_module__ = __webpack_require__("../../../../../src/app/proforma/proforma.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__delivery_delivery_module__ = __webpack_require__("../../../../../src/app/delivery/delivery.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings_settings_module__ = __webpack_require__("../../../../../src/app/settings/settings.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__report_report_module__ = __webpack_require__("../../../../../src/app/report/report.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//own components




// modules












var GeneralModule = (function () {
    function GeneralModule() {
    }
    GeneralModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_2__general_routing_module__["a" /* GeneralRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_9__customer_customer_module__["a" /* CustomerModule */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_module__["a" /* ProductModule */],
                __WEBPACK_IMPORTED_MODULE_11__area_area_module__["a" /* AreaModule */],
                __WEBPACK_IMPORTED_MODULE_12__invoice_invoice_module__["a" /* InvoiceModule */],
                __WEBPACK_IMPORTED_MODULE_13__quotation_quotation_module__["a" /* QuotationModule */],
                __WEBPACK_IMPORTED_MODULE_14__proforma_proforma_module__["a" /* ProformaModule */],
                __WEBPACK_IMPORTED_MODULE_15__delivery_delivery_module__["a" /* DeliveryModule */],
                __WEBPACK_IMPORTED_MODULE_16__settings_settings_module__["a" /* SettingsModule */],
                __WEBPACK_IMPORTED_MODULE_17__report_report_module__["a" /* ReportModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__general_service__["a" /* GeneralService */]]
        })
    ], GeneralModule);
    return GeneralModule;
}());



/***/ }),

/***/ "../../../../../src/app/general/general.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GeneralService = (function () {
    function GeneralService() {
        this.displaySidebarSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.displaySidebarConfirmed$ = this.displaySidebarSource.asObservable();
    }
    GeneralService.prototype.displaySidebar = function (status) {
        this.displaySidebarSource.next(status);
    };
    GeneralService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "../../../../../src/app/general/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Header -->\n<header class=\"main-header\">\n  <!-- Logo -->\n  <a (click)=\"reload()\" class=\"logo\" style=\"cursor:pointer\">\n\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><img src=\"./assets/dist/img/favicon1.png\"  alt=\"favicon1\" style=\"width:50%; height:50%;\"></span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg col-xs-8 col-md-12\"><img src=\"../../../assets/dist/img/Sofkullogo1.png\" style=\"height: 40%; width: 70%;\"></span>\n\n  </a>\n\n  <!-- Header Navbar -->\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <button class=\"btn btn-lg btn-danger\" style=\"padding-bottom: 14px;\" (click)=\"logout()\"> Logout</button>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/general/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.setItem('csbd-username', '');
        localStorage.setItem('csbd-password', '');
        this.router.navigate(['']);
    };
    NavbarComponent.prototype.reload = function () {
        window.location.href = '/';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/general/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/general/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .main-sidebar {\n      /*font-size: 17px;*/\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/general/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\" id=\"side-bar\">\n\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n\n    <!-- search form (Optional) -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n      </div>\n    </form>\n    <!-- /.search form -->\n\n    <!-- Sidebar Menu -->\n    <ul class=\"sidebar-menu\">\n      <li class=\"header\">Sofkul solutions</li>\n      <!-- Optionally, you can add icons to the links -->\n      <li class=\"active\"><a [routerLink]=\"['dashboard/home']\"><i class=\"fa fa-home\"></i><span>Home</span></a></li>\n      <!-- customer options -->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-users\"></i> <span>Customers</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a [routerLink]=\"['dashboard/customer/all']\"><i class=\"fa fa-user\"></i> All Customers</a></li>\n          <li><a [routerLink]=\"['dashboard/customer/create']\"><i class=\"fa fa-user-plus\"></i> New Customer</a></li>\n        </ul>\n      </li>\n      <!-- products options -->\n      <li><a [routerLink]=\"['dashboard/product']\"><i class=\"fa fa-shopping-cart\"></i> <span>Products</span></a></li>\n      <!-- area options -->\n      <li><a [routerLink]=\"['dashboard/area']\"><i class=\"fa fa-map-marker\"></i> <span>Area</span></a></li>\n      <!-- invoice options -->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-file-text\"></i> <span>Invoices</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li>\n            <a [routerLink]=\"['dashboard/invoice/search']\"> <i class=\"fa fa-search\"></i> Search Invoice</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['dashboard/invoice/create']\"> <i class=\"fa fa-file-o\"></i> Create Invoice</a>\n          </li>\n          <!--<li>\n            <a [routerLink]=\"['dashboard/invoice/recent']\"> <i class=\"fa fa-circle-o\"></i> Recent Invoices</a>\n          </li>-->\n          <li>\n            <a [routerLink]=\"['dashboard/invoice/all']\"> <i class=\"fa fa-file-archive-o\"></i> All Invoices</a>\n          </li>\n        <!--  <li>\n            <a href=\"#\"> <i class=\"fa fa-circle-o\"></i>Invoice Settings</a>\n          </li>-->\n        </ul>\n      </li>\n\n      <!-- Quotation options-->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-file-text\"></i> <span>Quotations</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li>\n            <a [routerLink]=\"['dashboard/quotation/search']\"> <i class=\"fa fa-search\"></i> Search Quotations</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['dashboard/quotation/create']\"> <i class=\"fa fa-file-o\"></i> Create Quotations</a>\n          </li>\n          <!--<li>\n            <a [routerLink]=\"['dashboard/quotation/recent']\"> <i class=\"fa fa-circle-o\"></i> Recent Quotations</a>\n          </li>-->\n          <li>\n            <a [routerLink]=\"['dashboard/quotation/all']\"> <i class=\"fa fa-file-archive-o\"></i> All Quotations</a>\n          </li>\n         <!-- <li>\n            <a href=\"#\"> <i class=\"fa fa-circle-o\"></i>Invoice Settings</a>\n          </li>-->\n        </ul>\n      </li>\n\n      <!-- Proforma options-->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-file-text\"></i> <span>Proformas</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li>\n            <a [routerLink]=\"['dashboard/proforma/search']\"> <i class=\"fa fa-search\"></i> Search Proformas</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['dashboard/proforma/create']\"> <i class=\"fa fa-file-o\"></i> Create Proformas</a>\n          </li>\n          <!--<li>\n            <a [routerLink]=\"['dashboard/proforma/recent']\"> <i class=\"fa fa-circle-o\"></i> Recent Proformas</a>\n          </li>-->\n          <li>\n            <a [routerLink]=\"['dashboard/proforma/all']\"> <i class=\"fa fa-file-archive-o\"></i> All Proformas</a>\n          </li>\n         <!-- <li>\n            <a href=\"#\"> <i class=\"fa fa-circle-o\"></i>Invoice Settings</a>\n          </li>-->\n        </ul>\n      </li>\n\n      <!-- Delivery options-->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-truck\"></i> <span>Delivery Challan</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li>\n            <a [routerLink]=\"['dashboard/delivery/search']\"> <i class=\"fa fa-circle-o\"></i> Search Delivery challan</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['dashboard/delivery/create']\"> <i class=\"fa fa-file-o\"></i> Create Delivery Challan</a>\n          </li>\n         <!-- <li>\n            <a [routerLink]=\"['dashboard/delivery/recent']\"> <i class=\"fa fa-circle-o\"></i> Recent Delivery challan</a>\n          </li>-->\n          <li>\n            <a [routerLink]=\"['dashboard/delivery/all']\"> <i class=\"fa fa-file-archive-o\"></i> All Delivery challan's</a>\n          </li>\n         <!-- <li>\n            <a href=\"#\"> <i class=\"fa fa-circle-o\"></i>Invoice Settings</a>\n          </li>-->\n        </ul>\n      </li>\n\n      <!--reports-->\n      <li><a [routerLink]=\"['dashboard/report']\"><i class=\"fa fa-pie-chart\"></i><span>Reports</span></a></li>\n      <li><a [routerLink]=\"['dashboard/upload-file']\"><i class=\"fa fa-upload\"></i> <span>Upload File</span></a></li>\n      <li><a [routerLink]=\"['dashboard/settings']\"><i class=\"fa fa-cogs\"></i> <span>Settings</span></a></li>\n    </ul>\n    <!-- /.sidebar-menu -->\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/general/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.ngOnChanges = function (changes) {
        console.log('changing');
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/general/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/general/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1000px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 500px;\">\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        \n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li class=\"active\">Home</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content\">\n    <!--  Page Content Here -->\n    <div class=\"col-md-12\">\n      <h3>Payment Date vs. Paid Amount </h3>\n      <app-pay-date-chart></app-pay-date-chart>\n    </div>\n    <br>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeBodyComponent = (function () {
    function HomeBodyComponent(generalService, homeService) {
        this.generalService = generalService;
        this.homeService = homeService;
    }
    HomeBodyComponent.prototype.ngOnInit = function () {
        this.generalService.displaySidebar(true);
        this.wakeUpPayDateCounter();
    };
    HomeBodyComponent.prototype.wakeUpPayDateCounter = function () {
        this.homeService.buildPayDateCounter()
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("error in buildPayDateCounter");
        });
    };
    HomeBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-body',
            template: __webpack_require__("../../../../../src/app/home/home-body/home-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home-body/home-body.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__general_general_service__["a" /* GeneralService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */]])
    ], HomeBodyComponent);
    return HomeBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-charts/home-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeChartComponent = (function () {
    function HomeChartComponent(element) {
        this.element = element;
        this._element = this.element.nativeElement;
    }
    HomeChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            google.charts.load('current', { 'packages': ['corechart'] });
            setTimeout(function () {
                _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element);
            }, 1000);
        }, 1000);
    };
    HomeChartComponent.prototype.drawGraph = function (chartOptions, chartType, chartData, ele) {
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var wrapper;
            wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {},
                containerId: ele.id
            });
            wrapper.draw();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartType'),
        __metadata("design:type", String)
    ], HomeChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
        __metadata("design:type", Object)
    ], HomeChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
        __metadata("design:type", Object)
    ], HomeChartComponent.prototype, "chartData", void 0);
    HomeChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[HomeChart]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HomeChartComponent);
    return HomeChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var homeRoutes = [];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(homeRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_body_home_body_component__ = __webpack_require__("../../../../../src/app/home/home-body/home-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_charts_home_charts_component__ = __webpack_require__("../../../../../src/app/home/home-charts/home-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pay_date_chart_pay_date_chart_component__ = __webpack_require__("../../../../../src/app/home/pay-date-chart/pay-date-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invoice_invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__home_body_home_body_component__["a" /* HomeBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_charts_home_charts_component__["a" /* HomeChartComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pay_date_chart_pay_date_chart_component__["a" /* PayDateChartComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__home_body_home_body_component__["a" /* HomeBodyComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_8__invoice_invoice_service__["a" /* InvoiceService */],
                __WEBPACK_IMPORTED_MODULE_9__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.homeUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'home/';
    }
    HomeService.prototype.buildPayDateCounter = function () {
        var url = this.homeUrl + 'pay-date-counter/clean-build';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/app/home/pay-date-chart/pay-date-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/pay-date-chart/pay-date-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" >\n  <div id=\"column_chart\" [chartData]=\"column_ChartData\" [chartOptions]=\"column_ChartOptions\" chartType=\"ColumnChart\"\n       HomeChart></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/pay-date-chart/pay-date-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayDateChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PayDateChartComponent = (function () {
    function PayDateChartComponent(invoiceService) {
        this.invoiceService = invoiceService;
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]('en-US');
        this.column_ChartData = [
            ['Date', 'Pay Amount', 'Pay Count']
        ];
        this.column_ChartOptions = {
            width: 1000,
            height: 350,
            chart: {
                title: 'Payments vs Date',
                subtitle: 'Payments done this month'
            },
            series: {
                0: { axis: 'pay_amount' },
                1: { axis: 'pay_count' } // Bind series 1 to an axis named 'brightness'.
            },
            axes: {
                y: {
                    pay_amount: { label: 'parsecs' },
                    pay_count: { side: 'right', label: 'apparent magnitude' } // Right y-axis.
                }
            }
        };
    }
    PayDateChartComponent.prototype.ngOnInit = function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var day = date.getDate();
        var limit = 0;
        if (month % 2 == 0) {
            limit = 30;
        }
        else {
            limit = 31;
        }
        for (var i = 1; i <= limit; i++) {
            var data = [];
            if (i < 10) {
                data[0] = '0' + i + '/' + month + '/' + year;
            }
            else {
                data[0] = i + '/' + month + '/' + year;
            }
            data[2] = 0;
            data[1] = 0;
            this.column_ChartData.push(data);
        }
        this.getPayDateCounter();
    };
    PayDateChartComponent.prototype.getPayDateCounter = function () {
        var _this = this;
        this.invoiceService.getPaidDateCounter()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](res, function (element) {
                for (var i = 0; i < _this.column_ChartData.length; i++) {
                    if (_this.column_ChartData[i][0].split('/')[0] == _this.datePipe.transform(element['date'], 'dd/MM/yyyy').split('/')[0]) {
                        _this.column_ChartData[i][1] = element['amount'];
                        _this.column_ChartData[i][2] = element['invoice_id'].length;
                        break;
                    }
                }
            });
        }, function (err) {
        });
    };
    PayDateChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pay-date-chart',
            template: __webpack_require__("../../../../../src/app/home/pay-date-chart/pay-date-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/pay-date-chart/pay-date-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__invoice_invoice_service__["a" /* InvoiceService */]])
    ], PayDateChartComponent);
    return PayDateChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-all/invoice-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-all/invoice-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        All Invoices\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/all' ]\"><i class=\"fa fa-dashboard\"></i> Invoice</a></li>\n        <li class=\"active\">All</li>\n      </ol>\n    </div>\n  </section>\n\n  <section class=\"content\">\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">List Of All Invoice</h3>\n          <br>\n          <div class=\"box-tools\">\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Invoices\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"invoiceList\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Invoice Generated On</th>\n              <th>Last Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let invoice of invoiceList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalInvoiceCount }\">\n              <td>{{ invoice.customerData?.username }}</td>\n              <td>{{ invoice.customerData?.fullname }}</td>\n              <td>{{ invoice.customerData?.mobile_primary }}</td>\n              <td>{{ invoice.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"invoice.customerData?.productData?.length>0\"> {{ invoice.customerData?.productData[0]?.name }} - <em *ngIf=\"invoice.customerData?.productData[0]?.rate\">{{ invoice.customerData?.productData[0]?.rate }} BDT/month</em> </span>\n                  <small class=\"label bg-blue\">{{ invoice.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ invoice.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ invoice?.amount_due }}</td>\n              <td>{{ invoice?.total - invoice?.amount_due }}</td>\n              <td>{{ invoice?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\"> {{ invoice.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\"> {{ invoice.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\"> {{ invoice.status\n                  }} </label>\n              </td>\n              <td>\n                {{ invoice?.created_on | date: 'yMMMd' }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Due' || invoice?.status=='Partially Paid'\">\n                {{ invoice?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Paid'\">\n                {{ invoice?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',invoice)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',invoice)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',invoice)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','all',invoice?._id]\">\n                  View</a>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialInvoice\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialInvoice?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialInvoice?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialInvoice?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialInvoice\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-all/invoice-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceAllComponent = (function () {
    function InvoiceAllComponent(customerService, router, invoiceService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.invoiceService = invoiceService;
        this.productService = productService;
        this.areaService = areaService;
        this.invoiceList = [];
        this.totalInvoiceCount = 0;
        this.paginator = 1;
    }
    InvoiceAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.invoiceService.getAllInvoiceCount()
            .subscribe(function (res) {
            _this.totalInvoiceCount = res.count;
        });
        this.getAllInvoice();
    };
    InvoiceAllComponent.prototype.getAllInvoice = function () {
        var _this = this;
        this.invoiceList = [];
        this.invoiceService.getAllInvoice(this.paginator)
            .subscribe(function (res) {
            if (res.length == 0) {
                _this.invoiceList = [];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](res, function (invoice) {
                    var customer;
                    _this.customerService.getCustomerDetails(invoice.customer_id)
                        .subscribe(function (res) {
                        customer = res;
                        customer.productData = [];
                        if (invoice.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](invoice.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        invoice.customerData = customer;
                        _this.invoiceList.push(invoice);
                    });
                });
            }
        }, function (err) {
            console.log('ERROR in getAllInvoice');
        });
    };
    InvoiceAllComponent.prototype.toggleSearchStatus = function (event) {
        console.log(event);
    };
    InvoiceAllComponent.prototype.filterChange = function (event) {
    };
    InvoiceAllComponent.prototype.quickSearch = function (event) {
    };
    InvoiceAllComponent.prototype.changeStatus = function (status, invoice) {
        if (status == 'Paid') {
            this.setPaidDateCounter(invoice);
            invoice.status = 'Paid';
            invoice.paid_date = Date.now();
            invoice.amount_due = 0;
        }
        else if (status == 'Due') {
            invoice.status = 'Due';
            invoice.amount_due = invoice.total;
            invoice.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialInvoice = invoice;
        }
        invoice['type'] = 'all';
        this.invoiceService.changeInvoiceStatus(invoice)
            .subscribe(function (res) {
        });
    };
    //  for pagination
    InvoiceAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllInvoice();
    };
    InvoiceAllComponent.prototype.setPaidDateCounter = function (invoice) {
        this.invoiceService.setPaidDateCounter(invoice)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    InvoiceAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-all',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], InvoiceAllComponent);
    return InvoiceAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-create/invoice-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-create/invoice-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Create New Invoice\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/create' ] \"><i class=\"fa fa-dashboard \"></i> Invoice</a></li>\n        <li class=\"active \">Create</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\" style=\"height:2000px\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Invoice Created Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <br>\n        <!--customer list-->\n        <form class=\"form-horizontal \">\n          <div class=\"col-md-12\">\n            <div class=\" form-group \">\n              <label class=\"col-sm-2 control-label \">Choose Customer: </label>\n              <div class=\"col-sm-10 \">\n                <div>\n                  <select required *ngIf=\"customerList\" class=\"form-control\" (change)=\"getCustomer($event)\">\n                    <option *ngFor=\"let customer of customerList\" value=\"{{ customer._id }}\">\n                      <strong> {{ customer.username }} </strong> - <em> {{ customer.fullname }} </em>\n                    </option>\n                  </select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <br><br>\n        </form>\n\n\n        <form class=\"form-horizontal \" style=\"margin-top:30px\" [formGroup]=\"invoiceCreateForm\"\n              (submit)=\"submitInvoiceCreateForm()\">\n          <div class=\"col-md-12\" *ngIf=\"resCustomer\">\n            <!--username-->\n            <div class=\" form-group \">\n              <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                       placeholder=\"Username \" readonly>\n              </div>\n            </div>\n            <!--email-->\n            <div class=\"form-group \">\n              <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                       readonly>\n              </div>\n            </div>\n            <!--fullname-->\n            <div class=\"form-group \">\n              <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                       placeholder=\"Fullname \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_primary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                       placeholder=\"Mobile primary \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_secondary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                       placeholder=\"Mobile secondary \" readonly>\n              </div>\n            </div>\n\n            <!--location-->\n            <div class=\"form-group \">\n              <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                       placeholder=\"location \" readonly>\n              </div>\n            </div>\n\n            <!--area-->\n            <div class=\"form-group \">\n              <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--city-->\n            <div class=\"form-group \">\n              <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\n                       >\n              </div>\n            </div>\n        \n\n            <div class=\"form-group \">\n              <label for=\"status\" class=\"col-sm-2 control-label \">Status</label>\n              <div class=\"col-sm-10\">\n                <label class=\"label label-danger\">Due</label>\n              </div>\n            </div>\n            <br>\n\n            \n\n            <!--invoice_created_date-->\n            <div class=\"form-group\">\n              <label for=\"date\" class=\"col-sm-2 control-label\">Invoice Date</label>\n              <div class=\"col-sm-10\">\n                <input type=\"date\" formControlName=\"date\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"description\" class=\"col-sm-2 control-label \">Remarks</label>\n                <div class=\"col-sm-10 \">\n                  <textarea formControlName=\"description\" class=\"form-control\"></textarea>\n                </div>\n              </div>\n\n            <!--total amount-->\n            <div class=\"form-group \">\n              <label for=\"amount_due_minus_discount \" class=\"col-sm-2 control-label \">Total (INR)</label>\n              <div class=\"col-sm-10\">\n                <input type=\"number \" formControlName=\"total\" class=\"form-control \" id=\"amount_due_minus_discount \"\n                       placeholder=\"total \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--discount-->\n            <div class=\"form-group \">\n            <label for=\"discount \" class=\"col-sm-2 control-label \">Adjustments</label>\n            <div class=\"col-sm-10\">\n            <input type=\"number \" (keyup)=\"updateDiscount($event.target.value)\" formControlName=\"discount\"\n            class=\"form-control \" id=\"discount \" placeholder=\"discount\">\n            </div>\n            </div>\n            <!--product list-->\n            <div class=\"form-group row \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\n              <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n              <div class=\"col-sm-10 \">\n                <div class=\"productSelectBox\">\n                  <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\n                    <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                      {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                    </option>\n                  </select>\n                  <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\">\n                    <i\n                      class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </div>\n              \n            </div>\n            <!--<div class=\"col-sm-4 pull-right\">\n                <div class=\"form-group \">\n                    <label for=\"quantity \" class=\"col-sm-2 control-label \">Quantity</label>\n                    <div class=\"col-sm-10\">\n                      <input type=\"number \" formControlName=\"quantity\"  class=\"form-control \" id=\"quantity \" \n                             placeholder=\"enter quantity\">\n                    </div>\n                  </div>\n                  </div>-->\n            \n\n\n            <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\n                                                                                               aria-hidden=\"true\"></i>\n              &nbsp; Add Product\n            </button>\n\n            <div class=\"form-group \">\n              <div class=\"col-md-offset-2 col-md-10\">\n                <button type=\"submit\" class=\"btn btn-success btn-lg\">Save</button>\n                <button type=\"button\" class=\"btn btn-danger btn-lg\">Cancel</button>\n\n              </div>\n            </div>\n          </div>\n          <br>\n          <br>\n          <hr>\n          <div class=\"col-md-12\" *ngIf=\"isSaved\">\n            <div class=\"alert alert-success\" role=\"alert\">Invoice Created Successfully !!</div>\n            <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/dashboard/invoice/display/all/',resultInvoice._id]\">Generate Invoice Now</a>\n          </div>\n\n        </form>\n      </div>\n\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-create/invoice-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceCreateComponent = (function () {
    function InvoiceCreateComponent(invoiceService, fb, customerService, productService, areaService) {
        this.invoiceService = invoiceService;
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.productList = [];
        this.showSuccess = false;
        this.showError = false;
        this.customerList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
        this.isSaved = false;
    }
    InvoiceCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAllCustomers();
    };
    InvoiceCreateComponent.prototype.buildForm = function () {
        var date = Date.now();
        this.invoiceCreateForm = this.fb.group({
            customer_id: [''],
            username: [''],
            email: [''],
            fullname: [''],
            location: [''],
            area: [''],
            city: [''],
            mobile_primary: [''],
            mobile_secondary: [''],
            amount_due: [''],
            total: [''],
            discount: [0],
            date: [date],
            status: ['Due'],
            productList: [],
            description: ['']
        });
    };
    InvoiceCreateComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerService.getAllCustomers('all')
            .subscribe(function (res) {
            _this.customerList = res;
        }, function (err) {
        });
    };
    InvoiceCreateComponent.prototype.getCustomer = function (event) {
        var _this = this;
        this.resCustomer = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.customerList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.invoiceCreateForm.patchValue({
            username: this.resCustomer.username,
            email: this.resCustomer.email,
            fullname: this.resCustomer.fullname,
            location: this.resCustomer.location,
            city: this.resCustomer.city,
            mobile_primary: this.resCustomer.mobile_primary,
            mobile_secondary: this.resCustomer.mobile_secondary,
        });
        this.resCustomer.productData = [];
        if (this.resCustomer.area) {
            this.areaService.getAreaById(this.resCustomer.area)
                .subscribe(function (res) {
                _this.resCustomer.areaData = res;
                _this.invoiceCreateForm.patchValue({
                    area: _this.resCustomer.areaData.name
                });
            }, function (err) {
            });
        }
    };
    InvoiceCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList.forEach(function (product) { product.quantity = 0; });
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]);
            _this.invoiceCreateForm.patchValue({
                total: _this.productList[0].rate
            });
        });
    };
    InvoiceCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    InvoiceCreateComponent.prototype.addProduct = function (product) {
        this.allProductCounter++;
        var newProduct = this.productList[0];
        this.allProducts.push(newProduct);
        this.updateTotal();
    };
    InvoiceCreateComponent.prototype.onProductChange = function (event, index) {
        var result = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.productList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.allProducts[index] = result;
        this.updateTotal();
    };
    InvoiceCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    InvoiceCreateComponent.prototype.updateTotal = function () {
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.allProducts, function (product) {
            total += product['rate'];
        });
        this.invoiceCreateForm.patchValue({
            total: total
        });
    };
    InvoiceCreateComponent.prototype.submitInvoiceCreateForm = function () {
        var _this = this;
        var product_list = __WEBPACK_IMPORTED_MODULE_5_underscore__["pluck"](this.allProducts, '_id');
        this.invoiceCreateForm.patchValue({
            productList: product_list,
            customer_id: this.resCustomer['_id']
        });
        this.invoiceService.createNewInvoice(this.invoiceCreateForm.value)
            .subscribe(function (res) {
            _this.resultInvoice = res;
            _this.isSaved = true;
        });
    };
    InvoiceCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-create',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], InvoiceCreateComponent);
    return InvoiceCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-edit/invoice-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-edit/invoice-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showForm\" class=\"content-wrapper\" style=\"height: 2000px;\">\n  <section class=\" content-header \">\n    <div class=\"col-xs-12\">\n      <h1>\n        Invoice Details of <em>{{ invoice.customerData?.username }}</em>\n        <small>for the month of {{ invoice?.created_on | date:'MMMM'}}</small>\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/all' ] \"><i class=\"fa fa-dashboard \"></i> Invoices</a></li>\n        <li class=\"active \">Edit</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \">\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\" *ngIf=\"invoice\">\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Invoice Data Updated Successfully !!</div>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"invoiceDetailForm\" *ngIf=\"invoice\"\n              (submit)=\"submitInvoiceEditForm()\">\n          <div class=\"col-md-6\">\n            <!--username-->\n            <div class=\" form-group \">\n              <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\n                       placeholder=\"Username \" readonly>\n              </div>\n            </div>\n            <!--email-->\n            <div class=\"form-group \">\n              <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\n                       readonly>\n              </div>\n            </div>\n            <!--fullname-->\n            <div class=\"form-group \">\n              <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\n                       placeholder=\"Fullname \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_primary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\n                       placeholder=\"Mobile primary \" readonly>\n              </div>\n            </div>\n\n            <!--mobile_secondary-->\n            <div class=\"form-group \">\n              <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\n              <div class=\"col-sm-10 \">\n                <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\n                       placeholder=\"Mobile secondary \" readonly>\n              </div>\n            </div>\n\n            <!--location-->\n            <div class=\"form-group \">\n              <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\n                       placeholder=\"location \" readonly>\n              </div>\n            </div>\n\n            <!--area-->\n            <div class=\"form-group \">\n              <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\n                       readonly>\n              </div>\n            </div>\n\n            <!--city-->\n            <div class=\"form-group \">\n              <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\n                       readonly>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <!--choose status-->\n            <div class=\"form-group \">\n              <label for=\"status \" class=\"col-sm-6 control-label \">Payment Status</label>\n              <div class=\"col-sm-6\">\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\">{{ invoice.status }}</label>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\">{{ invoice.status }}</label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\">{{ invoice.status }}</label>\n              </div>\n            </div>\n\n            <!--invoice_created_date-->\n            <!--<div class=\"form-group \">\n            <!--<label for=\"invoice_created_date \" class=\"col-sm-2 control-label \">Invoice created on</label>-->\n            <!--<div class=\"col-sm-10\">-->\n            <!--<input type=\"date\" formControlName=\"invoice_created_date\">-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--payment_due_date-->\n            <!--<div class=\"form-group \" *ngIf=\"paymentStatus=='Due'\">\n                <label for=\"payment_due_date \" class=\"col-sm-2 control-label \">Payment Due Date</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"date\" formControlName=\"payment_due_date\" value=\"currentDate.toString('Y-m-d')\">\n                </div>\n            </div>-->\n\n            <!--for partial payment only-->\n            <div class=\"form-group \" *ngIf=\"invoice.status=='Partially Paid' \">\n              <div *ngFor=\"let x of invoice?.amount_partially_paid;let i = index\">\n                <label for=\"status \" class=\"col-sm-6 control-label \">Partial Payment : [{{ i+1 }}] </label>\n                <div class=\"col-sm-6\">\n                  <h5 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h5>\n                  <h5 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h5>\n                  <br>\n                </div>\n              </div>\n            </div>\n\n            <!--payment paid / partially paid date-->\n            <div class=\"form-group \" *ngIf=\"invoice.status=='Paid' && paymentStatus!='Due'\">\n              <label for=\"paid \" class=\"col-sm-2 control-label \">Payment Paid Date</label>\n              <div class=\"col-sm-10\">\n                <input type=\"date\" formControlName=\"paid_date\">\n              </div>\n            </div>\n\n            <!--amoount partially paid-->\n            <!--<div class=\"form-group \" *ngIf=\"invoice.status=='Partially Paid'\">-->\n            <!--<label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid (INR) </label>-->\n            <!--<div class=\"col-sm-10\">-->\n            <!--<input type=\"text \" (keyup)=\"getPartiallyPaid($event)\" formControlName=\"amount_partially_paid\" class=\"form-control \" id=\"amount_partially_paid \" placeholder=\"amount partially paid\">-->\n            <!--</div>-->\n            <!--</div>-->\n\n            <!--amount_due-->\n            <div class=\"form-group \" *ngIf=\"invoice.status!='Paid'\">\n              <label for=\"amount_due \" class=\"col-sm-2 control-label \">Amount Due (INR) </label>\n              <div class=\"col-sm-10\">\n                <input *ngIf=\"invoice.status=='Due'\" type=\"text \" formControlName=\"amount_due\" class=\"form-control \"\n                       id=\"amount_due \" placeholder=\"amount due\" readonly>\n                <input *ngIf=\"invoice.status=='Partially Paid'\" type=\"text \" formControlName=\"amount_due\"\n                       class=\"form-control \" id=\"amount_due \" placeholder=\"amount due\" readonly>\n              </div>\n            </div>\n\n\n            <!--discount-->\n            <div class=\"form-group \">\n              <label for=\"discount \" class=\"col-sm-2 control-label\">Adjustments (INR) </label>\n              <div class=\"col-sm-10\">\n                <input (keyup)=\"getDiscount($event)\" type=\"text\" formControlName=\"discount\" class=\"form-control \"\n                       id=\"discount \" placeholder=\"discount\">\n              </div>\n            </div>\n\n            <!--total-->\n            <div class=\"form-group \">\n              <label for=\"discount \" class=\"col-sm-2 control-label \">Total (INR) </label>\n              <div class=\"col-sm-10\">\n                <input *ngIf=\"invoice.status!='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                       id=\"total \" placeholder=\"total\">\n                <input *ngIf=\"invoice.status=='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\n                       id=\"total \" placeholder=\"total\" readonly>\n              </div>\n            </div>\n            <div>\n              <!--for products already list-->\n              <div class=\"form-group \" *ngFor=\"let myProduct of invoice.customerData?.productData;let i=index\">\n                <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\n                <div class=\"col-sm-10 \">\n                  <div class=\"productSelectBox\">\n                    <select (change)=\"onProductChange($event,i,'my')\" required *ngIf=\"productList\" class=\"form-control\"\n                            style=\"margin-bottom:10px\">\n                      <option [selected]=\"product._id == myProduct._id\" *ngFor=\"let product of productList\"\n                              value=\"{{ product._id }}\">\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em>\n                      </option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <!--for new additional products-->\n              <div class=\"form-group \" *ngFor=\"let newProduct of additionalProducts;let i=index\">\n                <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+invoice.customerData?.productData.length+1\n                  }}]</label>\n                <div class=\"col-sm-10 \">\n                  <div class=\"productSelectBox\">\n                    <select (change)=\"onProductChange($event,i,'add')\" required *ngIf=\"productList\" class=\"form-control\"\n                            style=\"margin-bottom:10px\">\n                      <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em></option>\n                    </select>\n                    <button *ngIf=\"invoice.status!='Paid'\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\"\n                            (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n                  </div>\n                </div>\n              </div>\n              <button *ngIf=\"invoice.status!='Paid'\" (click)=\"addProduct()\" type=\"button\"\n                      class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add\n                Product\n              </button>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-1 col-sm-10 \" style=\"margin-top:10px\">\n              <!--<button type=\"submit \" class=\"btn btn-success\">Save</button>-->\n              <button type=\"submit\" class=\"btn btn-info btn-lg\">Generate Invoice</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-edit/invoice-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var InvoiceEditComponent = (function () {
    function InvoiceEditComponent(areaService, customerService, elementRef, productService, fb, invoiceService, route, router) {
        this.areaService = areaService;
        this.customerService = customerService;
        this.elementRef = elementRef;
        this.productService = productService;
        this.fb = fb;
        this.invoiceService = invoiceService;
        this.route = route;
        this.router = router;
        this.productList = [];
        this.additionalProducts = [];
        this.addProductCounter = 0;
        this.allProductsAdd = [];
        this.productSuggestions = [];
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]('en-US');
        this.paymentStatus = 'Due';
        this.showForm = false;
    }
    InvoiceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (_this.id) {
                _this.invoiceService.getInvoiceById(_this.type, _this.id)
                    .subscribe(function (res) {
                    _this.invoice = res;
                    _this.allProductsAdd = _this.invoice.productList;
                    _this.buildForm();
                }, function (err) {
                });
            }
        });
    };
    InvoiceEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.customerService.getCustomerDetails(this.invoice.customer_id)
            .subscribe(function (res) {
            _this.invoice.customerData = res;
            _this.invoice.customerData.productData = [];
            var total_partially_paid = 0;
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](_this.invoice.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    _this.invoice.customerData.productData.push(res);
                });
                total_partially_paid += item['amount'];
            });
            _this.invoiceDetailForm = _this.fb.group({
                username: [res['username']],
                email: [res['email']],
                fullname: [res['fullname']],
                location: [res['location']],
                area: [''],
                city: [res['city']],
                mobile_primary: [res['mobile_primary']],
                mobile_secondary: [res['mobile_secondary']],
                payment_due_date: [_this.invoice['payment_due_date']],
                amount_due: [_this.invoice['amount_due']],
                status: [_this.invoice['status']],
                total: [_this.invoice['total']],
                discount: [_this.invoice['discount']],
                invoice_created_date: [_this.invoice['invoice_created_date']],
                paid_date: [_this.invoice['paid_date']],
                amount_partially_paid: total_partially_paid
            });
            _this.areaService.getAreaById(res['area'])
                .subscribe(function (res) {
                _this.invoiceDetailForm.patchValue({
                    area: res['name']
                });
            });
            _this.showForm = true;
        });
    };
    InvoiceEditComponent.prototype.getProductSuggestions = function (event) {
        var _this = this;
        var data = {
            text: event.query
        };
        this.productService.searchByName(data)
            .subscribe(function (res) {
            _this.productSuggestions = res;
        }, function (err) {
        });
    };
    InvoiceEditComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    InvoiceEditComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0];
        this.additionalProducts.push(newProduct);
        this.allProductsAdd.push(newProduct._id);
        this.updatePayments();
    };
    InvoiceEditComponent.prototype.removeProduct = function (index) {
        var delIndex = this.allProductsAdd.indexOf(this.additionalProducts[index]);
        this.allProductsAdd.splice(delIndex, 1);
        this.additionalProducts.splice(index, 1);
        this.updatePayments();
    };
    InvoiceEditComponent.prototype.onProductChange = function (event, index, mode) {
        if (mode != 'my') {
            index = index + this.invoice.customerData.productData.length;
        }
        this.allProductsAdd[index] = event.target.value;
        this.updatePayments();
    };
    InvoiceEditComponent.prototype.submitInvoiceEditForm = function () {
        var _this = this;
        var data = {};
        data = {
            id: this.id,
            amount_due: this.invoiceDetailForm.value.amount_due,
            total: this.invoiceDetailForm.value.total,
            discount: this.invoiceDetailForm.value.discount,
            productList: this.allProductsAdd,
            amount_partially_paid: this.invoice.amount_partially_paid,
            type: this.type
        };
        this.invoiceService.preGenerateInvoiceUpdate(data)
            .subscribe(function (res) {
            _this.router.navigate(['dashboard/invoice/display', _this.type, _this.id]);
        }, function (err) {
            console.log('Error in Pre Generator');
        });
    };
    InvoiceEditComponent.prototype.changeStatus = function (event) {
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'Paid') {
            var currentDate = this.datePipe.transform(Date.now(), 'y-MM-dd');
            this.invoiceDetailForm.patchValue({
                paid_date: currentDate
            });
        }
    };
    InvoiceEditComponent.prototype.getPartiallyPaid = function (event) {
        this.invoiceDetailForm.patchValue({
            amount_partially_paid: event.target.value,
            amount_due: this.invoice.amount_due - event.target.value
        });
    };
    InvoiceEditComponent.prototype.getDiscount = function (event) {
        this.invoiceDetailForm.patchValue({
            total: this.invoiceDetailForm.value.amount_due - event.target.value
        });
    };
    InvoiceEditComponent.prototype.updatePayments = function () {
        var _this = this;
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](this.allProductsAdd, function (item) {
            var product = __WEBPACK_IMPORTED_MODULE_7_underscore__["findWhere"](_this.productList, { _id: item });
            total += product.rate;
        });
        this.invoiceDetailForm.patchValue({
            total: total,
            discount: 0,
            amount_due: total
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('productSelectBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], InvoiceEditComponent.prototype, "productSelectBox", void 0);
    InvoiceEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-invoice-edit',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], InvoiceEditComponent);
    return InvoiceEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-html/invoice-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#invoice_box {\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#invoice_table {\n  background-color: #fff;\n  font-size: 20px;\n}\n\n#company_logo {\n  margin-top: 50px;\n  margin-left: 10px;\n  width: 210px;\n  height: 180px;\n}\n\n.row-divide {\n  border-bottom: 4px solid #d2d6de;\n}\n\n#invoice_box {\n  font-weight: 550;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-html/invoice-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;margin-left: 0vw;\">\n  <section class=\" content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Invoice Display\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/invoice/all' ] \"><i class=\"fa fa-dashboard \"></i> Invoice</a></li>\n        <li class=\"active \">Display</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"invoice\">\n    <div class=\"col-xs-12\" id=\"invoice_main\">\n      <div id=\"invoice_body\">\n        <!--invoice display starts here-->\n        <div class=\"\" id=\"invoice_box\" style=\"margin-top:10px\" #invoiceBox>\n          <!--head row-->\n          <div class=\"row \">\n            <!--left section-->\n            <div class=\"col-md-6\">\n              <img src=\"/assets/dist/img/Aquality.jpg\" style=\"width:40%; height:50%;\" id=\"company_logo\">\n            </div>\n            <!--right section-->\n            <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left; margin-top:8px;\">\n              <h3 style=\"font-size: 60px;\"></h3><br>\n\n            </div>\n\n            \n              <div class=row style=\"background-color:darkslategray; margin-top:150px; width:100%; height:200px;margin-left: 0vw;\">\n                <div class=\"col-md-4 col-xs-4\" >\n                  <div class=\"\" style=\"color:white; margin-left:40px;margin-top:20px; padding:10px; font-size:16px; \">\n                      <span> Invoice for: </span><br>\n                      <strong> {{ invoice.customerData?.fullname }} </strong><br>\n                      <!--<span> {{ invoice.customerData?.location }} </span><br>-->\n                      <span> {{ invoice.customerData?.city }} </span><br>\n                      <span> India </span>\n                      <span> {{ invoice.customerData?.mobile_primary }} </span><br>\n                      <span> {{ invoice.customerData?.email }} </span><br>\n                      <!--<span> {{ invoice.customerData?.area }} </span><br>-->\n                      </div>\n                </div>\n                <div class=\"col-md-offset-2 col-md-6 col-xs-2\">\n                  <div style=\"padding-top:40px;\">\n                    <span style=\"color:rgb(245, 163, 10); font-size:70px;\">INVOICE</span>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                    <span> Date: {{ invoice.created_on | date }} </span>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                    <span> Valid upto: DD/MM/YYYY</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> Invoice ref: #123456</span>\n                    </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                      \n                      <span> <strong>Invoice Number: </strong> #001</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> <strong>Mobile Number: </strong> {{ invoice.customerData?.mobile_primary }}</span>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                        <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    \n                  \n                      </div>\n                </div>\n\n              <!--table-->\n              <div id=\"invoice_table\">\n              <table class=\"table table-hover table-responsive\" *ngIf=\"invoice.productData\" style=\"width:100%; height:200px;margin-left: 0vw;\" >\n                  <thead style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                    <tr>\n                      <th>ITEM DESCRIPTION</th>\n                      <th>UNIT PRICE</th>\n                      <th>GST</th>\n                      <TH>HSN CODE</TH>\n                      \n                      \n                      <th style=\"padding-left:200px;\">QUANTITY</th>\n                      <th style=\"padding-left:100px;\">AMOUNT</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of invoice.productData;let i=index\"\n                    [ngClass]=\"i==invoice.productData.length-1 ? 'row-divide' : '' \">\n                    <td>{{ product?.name }}</td>\n                    <td>INR. {{ product?.rate }}</td>\n                    <td> {{ product?.vat }}%</td>\n                    <td></td>\n                    \n                    \n                      <td style=\"padding-left:200px; width:30%;\">1</td>\n                      <td style=\"padding-left:100px; background-color:#ffe6e6; width:20%;\">INR. {{ product?.amount_with_vat * 1 }}</td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        \n                        <td style=\"padding-left:200px;\">\n                          <strong>SUB TOTAL: </strong>\n                        </td>\n                        <td style=\"padding-left:100px; background-color:#ffe6e6;width:20%;\">\n                          INR. {{ invoice.total }}\n                        </td>\n                      </tr>\n\n                      <tr *ngFor=\"let x of invoice?.amount_partially_paid;let i = index\">\n                          <td></td>\n                          \n                        \n                          <td>\n                            <strong>Payment On : {{ x.date | date }} </strong>\n                          </td>\n                          <td>\n                            INR. {{ x.amount }}\n                          </td>\n                        </tr>\n            \n                        <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          \n                          <td style=\"padding-left:200px;\">\n                           Adjustments\n                          </td>\n                          <td style=\"padding-left:100px; background-color:#ffe6e6;\">\n                            INR. {{ invoice.discount }}\n                          </td>\n\n                        </tr>\n                  \n                          \n                            \n\n                           <!--<tr>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                \n                                <td style=\"background-color:darkslategray; color:#fff;padding-left:200px;\">\n                                  GRAND TOTAL\n                                </td>\n                                <td style=\"background-color:rgb(245, 163, 10); color:#fff;padding-left:100px; \">\n                                  INR. {{ invoice.total }}\n                                </td>\n      \n                              </tr>-->\n                        <tr *ngIf=\"invoice.status == 'Paid'\">\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td style=\"background-color:darkslategray; color:#fff;padding-left:200px;\">\n                            <strong>Amount Paid (INR)</strong>\n                          </td>\n                          <td style=\"background-color:rgb(245, 163, 10); color:#fff;padding-left:100px;\">\n                            <strong>INR. {{ invoice.total - invoice.discount }}</strong>\n                          </td>\n                        </tr>\n\n                        <tr *ngIf=\"invoice.status == 'Due'\">\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td style=\"background-color:red; color:#fff; padding-left: 200px;\">\n                            <strong>Amount Due (INR)</strong>\n                          </td>\n                          <td style=\"padding-left:100px; background-color:red; color:#fff;\">\n                            <strong>INR. {{ finalTotal }}</strong><br>\n                          </td>\n                        </tr>\n                        \n                        <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                        \n                          <td style=\"background-color:darkslategray; color:#fff; padding-left:200px;\">\n                            <strong>TOTAL(in words)</strong>\n                          </td>\n                          <td style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                            <strong style=\"text-transform: capitalize;\"> {{ finalTotalWords }} INR only</strong>\n                          </td>\n                        </tr>\n                    \n                  </tbody>\n                </table>\n                </div>\n                \n                        \n                      <div class=\"row\">\n                      <div class=\"col-md-6 col-xs-6\">\n                      <h3 class=\"well\">Bank Details</h3>\n                       <div class=\"table-responsive\">          \n                    <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th>AQUALITY Water Solutions Pvt Ltd</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          \n                          <td></td>\n                          <td>A/c No.</td>\n                          <td><strong>111 905 000 338</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>Bank</td>\n                          <td><strong>ICICI Bank - Filmnagar Br.</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>IFSC Code</td>\n                          <td><strong>ICIC 000 1119</strong></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                          \n                  </div>\n                  </div>\n\n                  <div class=\"col-md-6 col-xs-6\" style=\"margin-top:50px;\">\n                    <div style=\"text-align: -webkit-center; margin-top:20%; \">\n                       Name & Signature\n                    </div>\n                  </div>\n                  </div><br> <br>\n                  \n\n                 <div class=\"container-fluid\" style=\"background-color:none;\">\n                  <div class=\"footer\">\n                    <p><strong>THANK YOU FOR YOUR BUSINESS</strong> </p><hr>\n                    <div class=\"footer-header\">\n                      TERMS AND CONDITION\n\n                    </div>\n                  </div>\n\n                 </div>\n          \n\n            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">\n\n              <div>\n                <strong>Aquality Water Solutions Pvt Ltd.</strong><br>\n                <span># 8-1-284/OU/385/1&2, 4th Floor Bait-ul-Rida</span><br>\n                <span>OU Colony Shaikpet, Lanco hills Lane</span><br>\n                <span>Hyderabad, Telangana State - 500008</span><br>\n                <span>India</span><br><br>\n\n                <span>Phone: +91 40 6888 8486</span><br>\n                <span>Mobile: 709 389 8486</span><br>\n                <span>www.aquality.in</span>\n                <span>Email: accounts@aquality.in  | info@aquality.in</span>\n                <span></span>\n              </div>\n            </div>\n      \n            \n                <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left;line-height: 2;\">\n                    <span> <strong>Date: </strong> {{ invoice.created_on | date }} </span><br>\n                    <span> <strong>Invoice ref: </strong> #123456</span><br><br>\n                    \n                  \n                    <span> <strong>Valid upto: </strong> DD/MM/YYYY</span><br>\n                    <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    <span> <strong>Mobile Number: </strong> {{ invoice.customerData?.mobile_primary }}</span><br>\n                  <span> <strong>Invoice Number: </strong> #001</span><br>\n                  <span> <strong>Invoice Date: </strong> {{ invoice.created_on | date }} </span><br>\n                  <span> <strong>Payment Due: </strong> {{ invoice.created_on | date }}</span> <br>\n                  <span> <strong>Amount Due (INR): </strong> INR. {{ invoice.amount_due }}</span><br>\n                </div>-->\n\n                \n              \n          </div>\n          <hr>\n\n          <!--middle row-->\n          \n          \n        </div>\n        <!--table section-->\n        \n      </div>\n      <div style=\"margin-top:15px\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadPDF()\"><i class=\"fa fa-download\"\n                                                                                 aria-hidden=\"true\"></i>&nbsp;Download\n          as PDF\n        </button>\n        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>&nbsp;Export\n          as CSV\n        </button>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-html/invoice-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InvoiceHtmlComponent = (function () {
    function InvoiceHtmlComponent(generalService, productService, customerService, invoiceService, route) {
        this.generalService = generalService;
        this.productService = productService;
        this.customerService = customerService;
        this.invoiceService = invoiceService;
        this.route = route;
        this.type = '';
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]('en-US');
        this.isAutoInvoice = false;
    }
    InvoiceHtmlComponent.prototype.ngOnChanges = function (changes) {
        if (changes['autoInvoice']) {
            this.isAutoInvoice = true;
            this.tempInvoice = changes['autoInvoice'].currentValue;
        }
    };
    InvoiceHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.displaySidebar(false);
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (!_this.isAutoInvoice) {
                _this.getInvoiceById(params['id']);
            }
            else {
                _this.invoice = _this.tempInvoice;
                _this.invoice['created_on'] = _this.currentDate;
                _this.finalTotal = _this.invoice.amount_due - _this.invoice.discount;
                _this.finalTotalWords = _this.numberToEnglish(_this.invoice.total, '');
            }
        });
    };
    InvoiceHtmlComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    InvoiceHtmlComponent.prototype.ngAfterContentInit = function () {
        // if (this.isAutoInvoice) {
        //   this.downloadPDF();
        //
        // }
    };
    InvoiceHtmlComponent.prototype.ngAfterViewInit = function () {
        if (this.isAutoInvoice) {
            this.downloadPDF();
        }
    };
    InvoiceHtmlComponent.prototype.downloadPDF = function () {
        var _this = this;
        html2canvas(document.getElementById('invoice_body'), {
            onrendered: function (canvas) {
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF("p", "mm", "a4");
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 200);
                if (_this.isAutoInvoice) {
                    var pdf = pdf.output('datauristring');
                    var data = {
                        pdf: pdf,
                        label: _this.invoice.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM')
                    };
                    console.log(data);
                    _this.invoiceService.saveAutoInvoice(data)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log("Error in auto pilot");
                    });
                }
                else {
                    pdf.save(_this.invoice.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM') + ".pdf");
                }
            }
        });
    };
    InvoiceHtmlComponent.prototype.getInvoiceById = function (id) {
        var _this = this;
        this.invoiceService.getInvoiceById(this.type, id)
            .subscribe(function (res) {
            _this.invoice = res;
            _this.invoice.total = 0;
            _this.invoice.productData = [];
            // get product data
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.invoice.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    res['amount_with_vat'] = res['rate'] + (res['rate'] * (res['vat'] / 100));
                    _this.invoice.productData.push(res);
                    _this.invoice.total = _this.invoice.total + res['amount_with_vat'];
                    _this.invoice.amount_due = _this.invoice.total;
                }, function (err) {
                }, function () {
                    if (_this.invoice.amount_partially_paid.length > 0) {
                        __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.invoice.amount_partially_paid, function (data) {
                            _this.invoice.amount_due = _this.invoice.amount_due - data['amount'];
                        });
                    }
                    if (_this.invoice.status == 'Paid') {
                        _this.invoice.amount_due = 0;
                    }
                    _this.finalTotal = _this.invoice.amount_due - _this.invoice.discount;
                    _this.finalTotalWords = _this.numberToEnglish(_this.invoice.total, '');
                });
            });
            //get customer data
            _this.customerService.getCustomerDetails(_this.invoice.customer_id)
                .subscribe(function (res) {
                _this.invoice.customerData = res;
            }, function (err) {
            }, function () {
                console.log(_this.invoice);
            });
        }, function (err) {
            console.log(err);
        });
    };
    InvoiceHtmlComponent.prototype.numberToEnglish = function (n, custom_join_character) {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        var and = custom_join_character || 'and';
        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'zero';
        }
        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {
            chunk = parseInt(chunks[i]);
            if (chunk) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }
                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }
                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }
                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }
                }
                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }
            }
        }
        return words.reverse().join(' ');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('invoiceBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], InvoiceHtmlComponent.prototype, "invoiceBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InvoiceHtmlComponent.prototype, "autoInvoice", void 0);
    InvoiceHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-html',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], InvoiceHtmlComponent);
    return InvoiceHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-recent/invoice-recent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-recent/invoice-recent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1800px;\">\n\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isInvoiceSaved\">Invoice Data Saved Successfully !!</div>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isInvoiceError\">ERROR !! Please Try Again.</div>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Recent Invoices\n        <small><em> Generated for the month of {{ currentDate | date: 'MMMM' }} </em></small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> InvoiceApp</a></li>\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Invoice</a></li>\n        <li class=\"active\">Recent</li>\n      </ol>\n\n      <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delInvoice\">\n        <h4>\n          <strong>Delete Confirmation !!</strong> <br>\n          Delete the invoice for <em>{{ delInvoice.customerData?.username }} </em> ?\n        </h4>\n        <br>\n        <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"content\">\n\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">Recent Invoice List</h3>\n          <br>\n          <div class=\"box-tools\">\n\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Invoices\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"invoiceList\">\n\n          <br>\n          <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n          </div>\n          <br>\n\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let invoice of invoiceList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalCustomerCount }\">\n              <td>{{ invoice.customerData?.username }}</td>\n              <td>{{ invoice.customerData?.fullname }}</td>\n              <td>{{ invoice.customerData?.mobile_primary }}</td>\n              <td>{{ invoice.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"invoice.customerData?.productData?.length>0\"> {{ invoice.customerData?.productData[0]?.name }} - <em *ngIf=\"invoice.customerData?.productData[0]?.rate\">{{ invoice.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ invoice.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ invoice.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ invoice?.amount_due }}</td>\n              <td>{{ invoice?.total - invoice?.amount_due }}</td>\n              <td>{{ invoice?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\"> {{ invoice.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\"> {{ invoice.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\"> {{ invoice.status\n                  }} </label>\n              </td>\n              <td *ngIf=\"invoice?.status=='Due' || invoice?.status=='Partially Paid'\">\n                {{ invoice?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Paid'\">\n                {{ invoice?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',invoice)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',invoice)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',invoice)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','recent',invoice?._id]\"> View</a>\n                <!--<button class=\"btn btn-xs btn-danger\" (click)=\"remove(invoice)\"><i class=\"fa fa-times\"-->\n                <!--aria-hidden=\"true\"></i></button>-->\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialInvoice\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialInvoice?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialInvoice?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialInvoice?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialInvoice\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-recent/invoice-recent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRecentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InvoiceRecentComponent = (function () {
    function InvoiceRecentComponent(customerService, router, invoiceService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.invoiceService = invoiceService;
        this.productService = productService;
        this.areaService = areaService;
        this.currentDate = Date.now();
        this.invoiceList = [];
        this.searchMode = 'username';
        this.isInvoiceSaved = false;
        this.isInvoiceError = false;
        this.showRemoveConfirmation = false;
        this.paginator = 1;
        this.totalCustomerCount = 0;
    }
    InvoiceRecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getRecentInvoiceDB();
        // this.wakeUpInvoiceDemon();
    };
    //useless shitty method
    InvoiceRecentComponent.prototype.wakeUpInvoiceDemon = function () {
        var _this = this;
        this.invoiceService.cleanInvoice()
            .subscribe(function (res) {
            if (res.status) {
                _this.generateNewInvoice();
            }
            else {
                _this.getRecentInvoiceDB();
            }
        });
    };
    //useless shitty method
    InvoiceRecentComponent.prototype.generateNewInvoice = function () {
        var _this = this;
        this.invoiceService.dropRecentInvoice()
            .subscribe(function (res) {
            _this.buildAndSaveRecentInvoice();
        });
    };
    InvoiceRecentComponent.prototype.getRecentInvoiceDB = function () {
        var _this = this;
        this.invoiceList = [];
        this.invoiceService.getRecentInvoiceDB(this.paginator)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (invoice) {
                var customer;
                _this.customerService.getCustomerDetails(invoice.customer_id)
                    .subscribe(function (res) {
                    if (res['status']) {
                        customer = res;
                        customer.productData = [];
                        if (invoice.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](invoice.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer["productData"].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer["areaData"] = res;
                        });
                        invoice.customerData = customer;
                        _this.invoiceList.push(invoice);
                    }
                });
            });
        }, function (err) {
        }, function () {
            for (var i = 0; i < _this.invoiceList.length; i++) {
                console.log("Hello World");
            }
        });
    };
    InvoiceRecentComponent.prototype.buildAndSaveRecentInvoice = function () {
        var _this = this;
        this.invoiceService.buildAndSaveRecentInvoice()
            .subscribe(function (res) {
            _this.getRecentInvoiceDB();
        }, function (err) {
            console.log('Error in build and save');
        });
    };
    InvoiceRecentComponent.prototype.saveRecentInvoice = function (invoice) {
        this.invoiceService.saveRecentInvoice(invoice)
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    InvoiceRecentComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    InvoiceRecentComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getRecentInvoiceDB();
            return;
        }
        var reg = new RegExp(event, "i");
        var resArray = [];
        if (this.searchMode == 'username') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
                if (reg.test(item['customerData']['username'])) {
                    resArray.push(item);
                }
            });
            this.invoiceList = resArray;
        }
        else if (this.searchMode == 'mobile_number') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
                if (reg.test(item['customerData']['mobile_primary'])) {
                    resArray.push(item);
                }
            });
            this.invoiceList = resArray;
        }
        else if (this.searchMode == 'area') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
                if (reg.test(item['customerData']['areaData']['name'])) {
                    resArray.push(item);
                }
            });
            this.invoiceList = resArray;
        }
    };
    InvoiceRecentComponent.prototype.changeStatus = function (status, invoice) {
        if (status == 'Paid') {
            this.setPaidDateCounter(invoice);
            invoice.status = 'Paid';
            invoice.paid_date = Date.now();
            invoice.amount_due = 0;
        }
        else if (status == 'Due') {
            invoice.status = 'Due';
            invoice.amount_due = invoice.total;
            invoice.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialInvoice = invoice;
        }
        invoice['type'] = 'recent';
        this.invoiceService.changeInvoiceStatus(invoice)
            .subscribe(function (res) {
        });
    };
    InvoiceRecentComponent.prototype.setPaidDateCounter = function (invoice) {
        this.invoiceService.setPaidDateCounter(invoice)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    InvoiceRecentComponent.prototype.toggleSearchStatus = function (event) {
        var _this = this;
        this.getRecentInvoiceDB();
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'All') {
            return;
        }
        var resArray = [];
        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.invoiceList, function (item) {
            if (__WEBPACK_IMPORTED_MODULE_3_underscore__["isEqual"](item.status, _this.paymentStatus)) {
                resArray.push(item);
            }
        });
        this.invoiceList = resArray;
    };
    InvoiceRecentComponent.prototype.savePartialPay = function () {
        var _this = this;
        var data = {
            id: this.partialInvoice['_id'],
            amount_partially_paid: this.partialPay
        };
        this.invoiceService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getRecentInvoiceDB();
            }
        }, function (err) {
        });
    };
    InvoiceRecentComponent.prototype.remove = function (delInvoice) {
        this.showRemoveConfirmation = true;
        this.delInvoice = delInvoice;
    };
    InvoiceRecentComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.invoiceService.deleteInvoice(this.delInvoice)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.invoiceList = __WEBPACK_IMPORTED_MODULE_3_underscore__["without"](_this.invoiceList, __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](_this.invoiceList, {
                        _id: _this.delInvoice['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delInvoice = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    //  for pagination
    InvoiceRecentComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getRecentInvoiceDB();
    };
    InvoiceRecentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-invoice-recent',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], InvoiceRecentComponent);
    return InvoiceRecentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var invoiceRoutes = [];
var InvoiceRoutingModule = (function () {
    function InvoiceRoutingModule() {
    }
    InvoiceRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(invoiceRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], InvoiceRoutingModule);
    return InvoiceRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice-search/invoice-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-search/invoice-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:100vh\">\n\n  <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delInvoice\">\n    <h4>\n      <strong>Delete Confirmation !!</strong> <br>\n      Delete the invoice for <em>{{ delInvoice.customerData?.username }} </em>  ?\n    </h4>\n    <br>\n    <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n    <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n  </div>\n\n  <section class=\"content\">\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <h2 style=\"margin-left:10px\">Search Invoices of any customer</h2>\n        <hr>\n\n        <!--search results for invoices show box-->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:20px;margin-bottom: 20px\"\n             *ngIf=\"invoiceList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Invoice Generated On</th>\n              <th>Last Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let invoice of invoiceList\">\n              <td>{{ invoice.customerData?.username }}</td>\n              <td>{{ invoice.customerData?.fullname }}</td>\n              <td>{{ invoice.customerData?.mobile_primary }}</td>\n              <td>{{ invoice.customerData?.areaData?.name }}</td>\n\n              <!--<td><span *ngIf=\"invoice.customerData?.productData?.length>0\"> {{ invoice.customerData?.productData[0]?.name }} - <em *ngIf=\"invoice.customerData?.productData[0]?.rate\">{{ invoice.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ invoice.customerData?.productData.length }}</small>\n              </td>-->\n\n              <td>\n                <small class=\"label bg-blue\">{{ invoice.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ invoice?.amount_due }}</td>\n              <td>{{ invoice?.total - invoice?.amount_due }}</td>\n              <td>{{ invoice?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"invoice.status=='Due'\"> {{ invoice.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"invoice.status=='Paid'\"> {{ invoice.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"invoice.status=='Partially Paid'\"> {{ invoice.status\n                  }} </label>\n              </td>\n              <td>\n                {{ invoice?.created_on | date: 'yMMMd' }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Due' || invoice?.status=='Partially Paid'\">\n                {{ invoice?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"invoice?.status=='Paid'\">\n                {{ invoice?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',invoice)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',invoice)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',invoice)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" *ngIf=\"invoice?.type=='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','recent',invoice?._id]\">\n                  View</a>\n                <a type=\"button\" *ngIf=\"invoice?.type!='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/invoice/view','all',invoice?._id]\">\n                  View</a>\n\n                <button class=\"btn btn-xs btn-danger\" (click)=\"remove(invoice)\"><i class=\"fa fa-times\"\n                                                                                   aria-hidden=\"true\"></i></button>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialInvoice\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialInvoice?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialInvoice?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialInvoice?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialInvoice\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay(partialInvoice)\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n        <!--search box and functionality-->\n        <div class=\"container\">\n          <div class=\"col-lg-12\">\n            <form class=\"form-group\">\n              <input style=\"width:100%\" (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                     placeholder=\"Search for a customer\">\n            </form>\n\n            <!--search resultsa-->\n            <div *ngIf=\"searchResults.length>0\">\n              <strong style=\"font-size: 20px\"> Search results: </strong> <span class=\"search_text\"\n                                                                               style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n              <br>\n              <ul style=\"list-style-type:none\">\n                <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                  <br>\n                </li>\n                <hr>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/invoice/invoice-search/invoice-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InvoiceSearchComponent = (function () {
    function InvoiceSearchComponent(customerService, invoiceService, productService, areaService) {
        this.customerService = customerService;
        this.invoiceService = invoiceService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
        this.invoiceList = [];
        this.showRemoveConfirmation = false;
    }
    InvoiceSearchComponent.prototype.ngOnInit = function () {
    };
    InvoiceSearchComponent.prototype.getSearchText = function (event) {
        this.invoiceList = [];
        this.searchResults = [];
        this.searchText = event.target.value;
        this.getGlobalInvoiceSearchByCustomer();
    };
    InvoiceSearchComponent.prototype.getGlobalInvoiceSearchByCustomer = function () {
        var _this = this;
        this.invoiceService.globalInvoiceSearchByCustomer(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    InvoiceSearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        var id = data['_id'];
        this.invoiceList = [];
        this.invoiceService.getInvoiceByCustomerId(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (invoice) {
                var customer;
                if (invoice['type'] == '') {
                    invoice['type'] = 'recent';
                }
                _this.customerService.getCustomerDetails(invoice.customer_id)
                    .subscribe(function (res) {
                    customer = res;
                    if (customer['status']) {
                        customer.productData = [];
                        if (invoice.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](invoice.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        invoice.customerData = customer;
                        _this.invoiceList.push(invoice);
                    }
                });
            });
        }, function (err) {
            console.log('Error in getSearchDetails');
        });
    };
    InvoiceSearchComponent.prototype.changeStatus = function (status, invoice) {
        if (status == 'Paid') {
            this.setPaidDateCounter(invoice);
            invoice.status = 'Paid';
            invoice.paid_date = Date.now();
            invoice.amount_due = 0;
        }
        else if (status == 'Due') {
            invoice.status = 'Due';
            invoice.amount_due = invoice.total;
            invoice.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialInvoice = invoice;
        }
        if (invoice['type'] != 'recent') {
            invoice['type'] = 'all';
        }
        this.invoiceService.changeInvoiceStatus(invoice)
            .subscribe(function (res) {
        });
    };
    InvoiceSearchComponent.prototype.setPaidDateCounter = function (invoice) {
        this.invoiceService.setPaidDateCounter(invoice)
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    InvoiceSearchComponent.prototype.savePartialPay = function (invoice) {
        var _this = this;
        var data = {
            id: this.partialInvoice['_id'],
            amount_partially_paid: this.partialPay
        };
        this.invoiceService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getSearchDetails({ _id: invoice.customer_id });
            }
        }, function (err) {
        });
    };
    InvoiceSearchComponent.prototype.remove = function (invoice) {
        this.showRemoveConfirmation = true;
        this.delInvoice = invoice;
    };
    InvoiceSearchComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.invoiceService.deleteInvoice(this.delInvoice)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.invoiceList = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.invoiceList, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.invoiceList, {
                        _id: _this.delInvoice['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delInvoice = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    InvoiceSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-invoice-search',
            template: __webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__invoice_service__["a" /* InvoiceService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__area_area_service__["a" /* AreaService */]])
    ], InvoiceSearchComponent);
    return InvoiceSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_routing_module__ = __webpack_require__("../../../../../src/app/invoice/invoice-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__invoice_all_invoice_all_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-all/invoice-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__invoice_create_invoice_create_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-create/invoice-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__invoice_service__ = __webpack_require__("../../../../../src/app/invoice/invoice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invoice_recent_invoice_recent_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-recent/invoice-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__invoice_edit_invoice_edit_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-edit/invoice-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__invoice_html_invoice_html_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-html/invoice-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__invoice_search_invoice_search_component__ = __webpack_require__("../../../../../src/app/invoice/invoice-search/invoice-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    InvoiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__invoice_routing_module__["a" /* InvoiceRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__invoice_all_invoice_all_component__["a" /* InvoiceAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__invoice_create_invoice_create_component__["a" /* InvoiceCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__invoice_recent_invoice_recent_component__["a" /* InvoiceRecentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__invoice_edit_invoice_edit_component__["a" /* InvoiceEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__invoice_html_invoice_html_component__["a" /* InvoiceHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_16__invoice_search_invoice_search_component__["a" /* InvoiceSearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__invoice_html_invoice_html_component__["a" /* InvoiceHtmlComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__invoice_service__["a" /* InvoiceService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_11__area_area_service__["a" /* AreaService */],
                __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_15__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], InvoiceModule);
    return InvoiceModule;
}());



/***/ }),

/***/ "../../../../../src/app/invoice/invoice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoiceService = (function () {
    function InvoiceService(http) {
        this.http = http;
        this.invoiceUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'invoice/';
    }
    InvoiceService.prototype.removeInvoice = function (invoice) {
        var url = this.invoiceUrl + 'remove-invoice';
        return this.http.post(url, invoice).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getInvoiceByCustomerId = function (id) {
        var url = this.invoiceUrl + 'by-customer-id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.globalInvoiceSearchByCustomer = function (query) {
        var url = this.invoiceUrl + 'global-search-by-customer/' + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.saveAutoInvoice = function (data) {
        var url = this.invoiceUrl + 'save-auto-invoice';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getAllInvoice = function (paginator) {
        var url = this.invoiceUrl + 'all/page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getRecentInvoice = function () {
        var url = this.invoiceUrl + 'recent';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.storeInvoice = function (data) {
        var url = this.invoiceUrl + 'create';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.downloadPDF = function (data) {
        var url = this.invoiceUrl + 'generate/pdf';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getInvoiceById = function (type, id) {
        var url = this.invoiceUrl + type + '/id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.searchByUsername = function (data) {
        var url = this.invoiceUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.saveRecentInvoice = function (data) {
        var url = this.invoiceUrl + 'recent/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.dropRecentInvoice = function () {
        var url = this.invoiceUrl + 'drop/recent/all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.checkIfRecentInvoiceExists = function () {
        var url = this.invoiceUrl + 'recent_invoice/exists';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getRecentInvoiceDB = function (paginator) {
        var url = this.invoiceUrl + 'recent_invoice_db/paginator=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.cleanInvoice = function () {
        var url = this.invoiceUrl + 'clean_invoice';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.changeInvoiceStatus = function (data) {
        var url = this.invoiceUrl + 'change_status';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    //get total of all products in product list
    InvoiceService.prototype.getTotal = function (data) {
        var url = this.invoiceUrl + 'product_list/total';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.buildAndSaveRecentInvoice = function () {
        var url = this.invoiceUrl + 'recent/build_and_save';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.savePartialPay = function (data) {
        var url = this.invoiceUrl + 'recent/partial_pay/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.preGenerateInvoiceUpdate = function (data) {
        var url = this.invoiceUrl + 'pre_generate_update';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.deleteInvoice = function (invoice) {
        var url = this.invoiceUrl + 'delete';
        return this.http.post(url, invoice).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.setPaidDateCounter = function (invoice) {
        var url = this.invoiceUrl + 'set_paid_date_counter';
        return this.http.post(url, invoice).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getPaidDateCounter = function () {
        var url = this.invoiceUrl + 'get_paid_date_counter';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.getAllInvoiceCount = function () {
        var url = this.invoiceUrl + 'all_invoice_count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    InvoiceService.prototype.createNewInvoice = function (data) {
        var url = this.invoiceUrl + 'create/new';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    InvoiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-all/product-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-all/product-all.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  <div class=\"col-xs-12\">\n    <h2>\n      All Products\n    </h2>\n  </div>\n</section>\n<section class=\"content\">\n  <!--  Page Content Here -->\n  <div class=\"col-xs-12\">\n    <div class=\"box box-primary\">\n      <div class=\"box-header\">\n        <h3 class=\"box-title\">List Of All Products</h3>\n        <br>\n      </div>\n      <!-- /.box-header -->\n      <div class=\"box-body table-responsive no-padding\">\n        <table class=\"table table-hover\">\n          <tbody>\n          <tr>\n            <th>Name</th>\n            <th>Rate &nbsp;(INR/month)</th>\n            <th>Quantity</th>\n            <th>GST(%)</th>\n            <th>Description</th>\n            <th>Action</th>\n\n          </tr>\n          <tr *ngFor=\"let product of products | paginate: { itemsPerPage: 10, currentPage: p }\">\n            <td>{{ product.name }}</td>\n            <td>{{ product.rate }}</td>\n            <td>{{ product.quantity }}</td>\n            <td>{{ product.vat }}</td>\n            <td>{{ product.description }}</td>\n            <td *ngIf=\"product.status\">\n                <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"toggleStatus(product._id,product.status)\"> Active</button>\n            </td>\n            <td *ngIf=\"!product.status\">\n                <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"toggleStatus(product._id,product.status)\"> Inactive</button>\n            </td>\n            <td>\n              <a type=\"button\" class=\"btn btn-primary btn-xs\" (click)=\"editProduct(product._id)\"> Edit</a>\n            </td>\n          </tr>\n          </tbody>\n\n        </table>\n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n    <div class=\"col-md-offset-4\">\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/product/product-all/product-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductAllComponent = (function () {
    function ProductAllComponent(productService) {
        this.productService = productService;
        this.products = [];
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showEditForm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductAllComponent.prototype.ngOnInit = function () {
    };
    ProductAllComponent.prototype.toggleStatus = function (id, status) {
        var _this = this;
        var data = {
            id: id,
            status: !status
        };
        this.productService.setStatus(data)
            .subscribe(function (res) {
            if (res.status) {
                _this.statusChange.emit(true);
            }
            else {
                _this.statusChange.emit(false);
            }
        }, function (err) {
            console.log('Error in toggleStatus');
        });
    };
    ProductAllComponent.prototype.editProduct = function (id) {
        this.showEditForm.emit(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProductAllComponent.prototype, "products", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductAllComponent.prototype, "statusChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductAllComponent.prototype, "showEditForm", void 0);
    ProductAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-all',
            template: __webpack_require__("../../../../../src/app/product/product-all/product-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-all/product-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]])
    ], ProductAllComponent);
    return ProductAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-create/product-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:1000px\">\n  <div class=\"col-xs-12\">\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Product Created Successfully !!</div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\n    <ol class=\"breadcrumb \">\n      <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\n      <li><a [routerLink]=\"[ '/dashboard/product' ] \"><i class=\"fa fa-dashboard \"></i> Product</a></li>\n      <li class=\"active \">New</li>\n    </ol>\n  </div>\n  <section class=\"content-header\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-primary\" type=\"button\"\n              (click)=\"createModeOn()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp;New Product\n      </button>\n      <h2 *ngIf=\"!editMode && createMode\">\n        Create New Product\n      </h2>\n      <h2 *ngIf=\"editMode && !createMode\">\n        Update Product\n      </h2>\n    </div>\n  </section>\n\n  <section class=\"content\" *ngIf=\"createMode || editMode\">\n    <div class=\"col-md-12\">\n\n      <div class=\"box box-primary\">\n\n          <input  type=\"text\" class=\"form-control\" id=\"quantity2\" [(ngModel)]=\"sqty2\" placeholder=\"enter Qr input\" (ngModelChange)=\"setValue3()\">\n\n        <!--  Page Content Here -->\n        <form class=\"form-horizontal \" [formGroup]=\"productCreateForm\" (submit)=\"submitCreateProductForm()\">\n         \n         \n          <!--name-->\n          <div class=\" form-group\">\n            <label for=\"name\" class=\"col-sm-2 control-label \">Name</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"name\" type=\"text \" class=\"form-control\" id=\"name\" placeholder=\"product name \" [(ngModel)]=\"sname\" >\n            </div>\n          </div>\n          <!--rate-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">Rate</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"rate\" type=\"text\" class=\"form-control\" id=\"rate\"  placeholder=\"monthly rate in INR\" [(ngModel)]=\"srate\">\n            </div>\n          </div>\n          <!--Qauntity-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">Quantity</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"quantity\" type=\"text\" class=\"form-control\" id=\"quantity\" [(ngModel)]=\"sqty\"\n                     placeholder=\"enter quantity\">\n            </div>\n          </div>\n\n          <!--VAT %-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">GST (%)</label>\n            <div class=\"col-sm-10 \">\n              <input formControlName=\"vat\" type=\"text\" class=\"form-control\" id=\"vat\" placeholder=\"GST (%)\" [(ngModel)]=\"sgst\">\n            </div>\n          </div>\n          <!--description-->\n          <div class=\"form-group\">\n            <label for=\"rate\" class=\"col-sm-2 control-label \">Description</label>\n            <div class=\"col-sm-10 \">\n              <textarea formControlName=\"description\" class=\"form-control\" [(ngModel)]=\"sdesc\"></textarea>\n            </div>\n          </div>\n\n\n          <div class=\"form-group \">\n            <div class=\"col-sm-offset-2 col-sm-10 \">\n              <button type=\"submit\" class=\"btn btn-success\" *ngIf=\"!editMode\">Save</button>\n              <button type=\"submit\" class=\"btn btn-warning\" *ngIf=\"editMode\">Update</button>\n              \n\n              <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"editMode || createMode\" (click)=\"cancelEdit()\"> Cancel</button>\n              \n            </div>\n          </div>\n\n        </form>\n        \n      </div>\n    </div>\n  </section>\n  <app-product-all (showEditForm)=\"showEditForm($event)\" (statusChange)=\"statusChanged($event)\" [products]=\"products\"></app-product-all>                 \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product/product-create/product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCreateComponent = (function () {
    function ProductCreateComponent(fb, productService) {
        this.fb = fb;
        this.productService = productService;
        this.products = [];
        this.showSuccess = false;
        this.showError = false;
        this.editMode = false;
        this.createMode = false;
        this.updateSuccess = false;
        this.test = "";
        this.name = 'abcd';
        this.sname = '';
        this.srate = '';
        this.sqty = '';
        this.sqty2 = '';
        this.sdesc = '';
        this.sgst = '';
        this.sgst2 = '';
        this.sqr = '';
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getAllProduct();
        // product.q 
    };
    ProductCreateComponent.prototype.setValue2 = function () {
        var str = 'p2-xyz,r2-300,q2-5,g-6%,d2-this xyz product companyyy';
        this.f_GetByQrCode(str);
    };
    ProductCreateComponent.prototype.setValue = function () {
        var str = 'p-xyz,r-300,q-5,g-6%,d-this xyz product companyyy';
        this.f_GetByQrCode(str);
    };
    ProductCreateComponent.prototype.setValue3 = function () {
        //  var s = this.sqr;
        var q2 = this.sqty2;
        // var q1 = this.sqty;
        // alert("q2 "+q2+"\n q1="+q1);
        this.f_GetByQrCode(q2);
    };
    ProductCreateComponent.prototype.fmakeQr = function () {
    };
    ProductCreateComponent.prototype.fqr = function () {
        //  var s=this.sqr;
        //alert("qr value "+s);
        alert("qr value chng");
    };
    ProductCreateComponent.prototype.f_GetByQrCode = function (str) {
        //alert(str);
        var str_array = str.split(',');
        for (var i = 0; i < str_array.length; i++) {
            str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
            ///  alert(str_array[i]+"\n i="+i);
            if (i == 0) {
                this.sname = str_array[i].toString();
            }
            else if (i == 1) {
                this.srate = str_array[i].toString();
            }
            else if (i == 2) {
                this.sqty = str_array[i].toString();
            }
            else if (i == 3) {
                this.sgst = str_array[i].toString();
            }
            else if (i == 4) {
                this.sdesc = str_array[i].toString();
            }
        }
    };
    ProductCreateComponent.prototype.buildForm = function () {
        this.productCreateForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            rate: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            description: [''],
            status: [true],
            vat: [''],
            tb: ['value on build'],
            test: ['hh']
        });
    };
    ProductCreateComponent.prototype.submitCreateProductForm = function () {
        var _this = this;
        this.showError = false;
        this.showSuccess = false;
        // console.log(this.productCreateForm.value);
        var data = {
            id: this.id,
            name: this.productCreateForm.value.name,
            rate: this.productCreateForm.value.rate,
            quantity: this.productCreateForm.value.quantity,
            description: this.productCreateForm.value.description,
            status: true,
            vat: this.productCreateForm.value.vat
        };
        if (!this.editMode) {
            this.productService.createProduct(data)
                .subscribe(function (res) {
                if (res.status) {
                    _this.getAllProduct();
                    _this.showSuccess = true;
                    _this.productCreateForm.reset();
                }
                else {
                    _this.showError = true;
                }
            }, function (err) {
                console.log("ERROR from createProduct");
                _this.showError = true;
            });
        }
        else {
            this.productService.updateProduct(data)
                .subscribe(function (res) {
                // console.log(res);
                _this.getAllProduct();
                _this.productCreateForm.reset();
                _this.editMode = false;
            }, function (err) {
            });
        }
    };
    ProductCreateComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.productService.getAllProduct()
            .subscribe(function (res) {
            _this.products = res;
        }, function (err) {
            console.log("Error in getAllProduct");
        });
    };
    ProductCreateComponent.prototype.statusChanged = function (event) {
        this.getAllProduct();
    };
    ProductCreateComponent.prototype.showEditForm = function (event) {
        var _this = this;
        this.editMode = true;
        this.createMode = false;
        this.id = event;
        this.productService.getProductById(event)
            .subscribe(function (res) {
            _this.productCreateForm.patchValue({
                name: res.name,
                rate: res.rate,
                quantity: res.quantity,
                description: res.description,
                status: res.status,
                vat: res.vat
            });
        }, function (err) {
        });
    };
    ProductCreateComponent.prototype.cancelEdit = function () {
        this.editMode = false;
        this.createMode = false;
        this.productCreateForm.reset();
        this.getAllProduct();
    };
    ProductCreateComponent.prototype.createModeOn = function () {
        this.editMode = false;
        this.createMode = true;
        this.productCreateForm.reset();
    };
    ProductCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__("../../../../../src/app/product/product-create/product-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product-create/product-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__product_service__["a" /* ProductService */]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var productRoutes = [];
var ProductRoutingModule = (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(productRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_routing_module__ = __webpack_require__("../../../../../src/app/product/product-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_create_product_create_component__ = __webpack_require__("../../../../../src/app/product/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_all_product_all_component__ = __webpack_require__("../../../../../src/app/product/product-all/product-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__product_routing_module__["a" /* ProductRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__product_create_product_create_component__["a" /* ProductCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__product_all_product_all_component__["a" /* ProductAllComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'product/';
    }
    ProductService.prototype.createProduct = function (data) {
        var url = this.productUrl + 'create/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAllProduct = function () {
        var url = this.productUrl + 'all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductService.prototype.setStatus = function (data) {
        var url = this.productUrl + 'status_change/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductById = function (id) {
        var url = this.productUrl + 'id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProduct = function (data) {
        var url = this.productUrl + 'update/';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.searchByName = function (data) {
        var url = this.productUrl + 'search/name/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma-all/proforma-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-all/proforma-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\r\n    <section class=\"content-header\">\r\n      <div class=\"col-xs-12\">\r\n        <h1>\r\n          All Proformas\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\r\n          <li><a [routerLink]=\"[ '/dashboard/proforma/all' ]\"><i class=\"fa fa-dashboard\"></i> Proforma</a></li>\r\n          <li class=\"active\">All</li>\r\n        </ol>\r\n      </div>\r\n    </section>\r\n  \r\n    <section class=\"content\">\r\n      <!--  Page Content Here -->\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n            <h3 class=\"box-title\">List Of All Proforma</h3>\r\n            <br>\r\n            <div class=\"box-tools\">\r\n              <div class=\"row\">\r\n               <!-- <div class=\"col-md-offset-2 col-lg-4\">\r\n                  Filter : &nbsp;\r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">All</label>\r\n  \r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">Paid</label>\r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">Due</label>\r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\r\n                </div>-->\r\n                <div class=\"col-lg-6\" style=\"float:right\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-btn\">\r\n                      <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\r\n                        <option value=\"username\">Username</option>\r\n                        <option value=\"mobile_number\">Mobile Number</option>\r\n                        <option value=\"area\">Area</option>\r\n                      </select>\r\n                    </div>\r\n                    <!-- /btn-group -->\r\n                    <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Proformas\"\r\n                           (input)=\"quickSearch($event.target.value)\">\r\n                  </div>\r\n                  <!-- /input-group -->\r\n                </div>\r\n              </div>\r\n              <br><br>\r\n              <!-- /.row -->\r\n              <!-- /.row -->\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body table-responsive no-padding\" *ngIf=\"proformaList\">\r\n            <table class=\"table table-hover\">\r\n              <tbody>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Fullname</th>\r\n                <th>Mobile</th>\r\n                <th>Area</th>\r\n                <th>Product</th>\r\n                <!--<th>Due (INR)</th>\r\n                <th>Paid (INR)</th>-->\r\n                <th>Total (INR)</th>\r\n                <!--<th>Status</th>-->\r\n                <th>Proforma Generated On</th>\r\n                <!--<th>Last Transaction Date</th>-->\r\n                <!--<th>Change Status</th>-->\r\n                <th>Action</th>\r\n              </tr>\r\n              <tr\r\n                *ngFor=\"let proforma of proformaList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalProformaCount }\">\r\n                <td>{{ proforma.customerData?.username }}</td>\r\n                <td>{{ proforma.customerData?.fullname }}</td>\r\n                <td>{{ proforma.customerData?.mobile_primary }}</td>\r\n                <td>{{ proforma.customerData?.areaData?.name }}</td>\r\n                <!--<td><span *ngIf=\"proforma.customerData?.productData?.length>0\"> {{ proforma.customerData?.productData[0]?.name }} - <em *ngIf=\"proforma.customerData?.productData[0]?.rate\">{{ proforma.customerData?.productData[0]?.rate }} INR/month</em> </span>\r\n                    <small class=\"label bg-blue\">{{ proforma.customerData?.productData.length }}</small>\r\n                </td>-->\r\n                <td>\r\n                  <small class=\"label bg-blue\">{{ proforma.customerData?.productData?.length }}</small>\r\n                </td>\r\n                <!--<td>{{ proforma?.amount_due }}</td>-->\r\n                <!--<td>{{ proforma?.total - proforma?.amount_due }}</td>-->\r\n                <td>{{ proforma?.total }}</td>\r\n                <!--<td>\r\n                  <label class=\"label label-danger\" *ngIf=\"proforma.status=='Due'\"> {{ proforma.status }} </label>\r\n                  <label class=\"label label-success\" *ngIf=\"proforma.status=='Paid'\"> {{ proforma.status }} </label>\r\n                  <label class=\"label label-warning\" *ngIf=\"proforma.status=='Partially Paid'\"> {{ proforma.status\r\n                    }} </label>\r\n                </td>-->\r\n                <td>\r\n                  {{ proforma?.created_on | date: 'yMMMd' }}\r\n                </td>\r\n               <!-- <td *ngIf=\"proforma?.status=='Due' || proforma?.status=='Partially Paid'\">\r\n                  {{ proforma?.payment_due_date | date }}\r\n                </td>-->\r\n                <!--<td *ngIf=\"proforma?.status=='Paid'\">\r\n                  {{ proforma?.paid_date | date }}\r\n                </td>-->\r\n               <!-- <td>\r\n                  <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',proforma)\"> Paid</button>\r\n                  <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',proforma)\"\r\n                          data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\r\n                  </button>\r\n                  <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',proforma)\"> Due</button>\r\n                </td>-->\r\n                <td>\r\n                  <a type=\"button\" class=\"btn btn-primary btn-xs\"\r\n                     [routerLink]=\"['/dashboard/proforma/view','all',proforma?._id]\">\r\n                    View</a>\r\n                </td>\r\n  \r\n                <!-- Modal for Partially payment -->\r\n                <!--<div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\r\n                     aria-labelledby=\"myModalLabel\">\r\n                  <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                          aria-hidden=\"true\">&times;</span></button>\r\n                        <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\r\n                      </div>\r\n                      <div class=\"modal-body\" *ngIf=\"partialProforma\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"col-md-6\">\r\n                            <h4 style=\"text-align: center\">Total: {{ partialProforma?.total }} INR</h4>\r\n                            <h4 style=\"text-align: center\">Due: {{ partialProforma?.amount_due }} INR</h4>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                            <div *ngFor=\"let x of partialProforma?.amount_partially_paid\">\r\n                              <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\r\n                              <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\r\n                              <br>\r\n                            </div>\r\n  \r\n                          </div>\r\n                        </div>\r\n                        <br>\r\n                        <form class=\"form-horizontal\" *ngIf=\"partialProforma\">-->\r\n                          <!--amoount partially paid-->\r\n                        <!-- <div class=\"form-group\">\r\n                            <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\r\n                              (INR) </label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\r\n                                     id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\r\n                            </div>\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\r\n                                data-dismiss=\"modal\">Save changes\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>-->\r\n              </tr>\r\n              </tbody>\r\n  \r\n            </table>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n        <div class=\"col-md-offset-4\">\r\n          <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-all/proforma-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proforma_service__ = __webpack_require__("../../../../../src/app/proforma/proforma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProformaAllComponent = (function () {
    function ProformaAllComponent(customerService, router, proformaService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.proformaService = proformaService;
        this.productService = productService;
        this.areaService = areaService;
        this.proformaList = [];
        this.totalProformaCount = 0;
        this.paginator = 1;
    }
    ProformaAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.proformaService.getAllProformaCount()
            .subscribe(function (res) {
            _this.totalProformaCount = res.count;
        });
        this.getAllProforma();
    };
    ProformaAllComponent.prototype.getAllProforma = function () {
        var _this = this;
        this.proformaList = [];
        this.proformaService.getAllProforma(this.paginator)
            .subscribe(function (res) {
            if (res.length == 0) {
                _this.proformaList = [];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](res, function (proforma) {
                    var customer;
                    _this.customerService.getCustomerDetails(proforma.customer_id)
                        .subscribe(function (res) {
                        customer = res;
                        customer.productData = [];
                        if (proforma.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](proforma.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        proforma.customerData = customer;
                        _this.proformaList.push(proforma);
                    });
                });
            }
        }, function (err) {
            console.log('ERROR in getAllProforma');
        });
    };
    ProformaAllComponent.prototype.toggleSearchStatus = function (event) {
        console.log(event);
    };
    ProformaAllComponent.prototype.filterChange = function (event) {
    };
    ProformaAllComponent.prototype.quickSearch = function (event) {
    };
    /* changeStatus(status: string, proforma: Proforma) {
       if (status == 'Paid') {
         this.setPaidDateCounter(proforma);
         proforma.status = 'Paid';
         proforma.paid_date = Date.now();
         proforma.amount_due = 0;
       } else if (status == 'Due') {
         proforma.status = 'Due';
         proforma.amount_due = proforma.total;
         proforma.amount_partially_paid = [];
       } else if (status == 'Partially Paid') {
         this.partialProforma = proforma;
       }
   
       proforma['type'] = 'all';
   
       this.proformaService.changeProformaStatus(proforma)
         .subscribe(
           (res) => {
   
           }
         )
     }*/
    //  for pagination
    ProformaAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllProforma();
    };
    ProformaAllComponent.prototype.setPaidDateCounter = function (proforma) {
        this.proformaService.setPaidDateCounter(proforma)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    ProformaAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-proforma-all',
            template: __webpack_require__("../../../../../src/app/proforma/proforma-all/proforma-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proforma/proforma-all/proforma-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__proforma_service__["a" /* ProformaService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], ProformaAllComponent);
    return ProformaAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma-create/proforma-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-create/proforma-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\r\n    <section class=\" content-header \">\r\n      <div class=\"col-xs-12\">\r\n        <h1>\r\n          Create New Proforma\r\n        </h1>\r\n        <ol class=\"breadcrumb \">\r\n          <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\r\n          <li><a [routerLink]=\"[ '/dashboard/proforma/create' ] \"><i class=\"fa fa-dashboard \"></i> Proforma</a></li>\r\n          <li class=\"active \">Create</li>\r\n        </ol>\r\n      </div>\r\n    </section>\r\n    <section class=\"content \">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box box-primary\" style=\"height:2000px\">\r\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Proforma Created Successfully !!</div>\r\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\r\n          <!--  Page Content Here -->\r\n          <br>\r\n          <!--customer list-->\r\n          <form class=\"form-horizontal \">\r\n            <div class=\"col-md-12\">\r\n              <div class=\" form-group \">\r\n                <label class=\"col-sm-2 control-label \">Choose Customer: </label>\r\n                <div class=\"col-sm-10 \">\r\n                  <div>\r\n                    <select required *ngIf=\"customerList\" class=\"form-control\" (change)=\"getCustomer($event)\">\r\n                      <option *ngFor=\"let customer of customerList\" value=\"{{ customer._id }}\">\r\n                        <strong> {{ customer.username }} </strong> - <em> {{ customer.fullname }} </em>\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <br><br>\r\n          </form>\r\n  \r\n  \r\n          <form class=\"form-horizontal \" style=\"margin-top:30px\" [formGroup]=\"proformaCreateForm\"\r\n                (submit)=\"submitProformaCreateForm()\">\r\n            <div class=\"col-md-12\" *ngIf=\"resCustomer\">\r\n              <!--username-->\r\n              <div class=\" form-group \">\r\n                <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\r\n                         placeholder=\"Username \" readonly>\r\n                </div>\r\n              </div>\r\n              <!--email-->\r\n              <div class=\"form-group \">\r\n                <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n              <!--fullname-->\r\n              <div class=\"form-group \">\r\n                <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\r\n                         placeholder=\"Fullname \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_primary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\r\n                         placeholder=\"Mobile primary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_secondary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\r\n                         placeholder=\"Mobile secondary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--location-->\r\n              <div class=\"form-group \">\r\n                <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\r\n                         placeholder=\"location \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--area-->\r\n              <div class=\"form-group \">\r\n                <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--city-->\r\n              <div class=\"form-group \">\r\n                <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--<div class=\"form-group \">\r\n                <label for=\"status\" class=\"col-sm-2 control-label \">Status</label>\r\n                <div class=\"col-sm-10\">\r\n                  <label class=\"label label-danger\">Due</label>\r\n                </div>\r\n              </div>-->\r\n              <br>\r\n  \r\n              <!--proforma_created_date-->\r\n              <div class=\"form-group\">\r\n                <label for=\"date\" class=\"col-sm-2 control-label\">Proforma Date</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"date\" formControlName=\"date\">\r\n                </div>\r\n              </div>\r\n  \r\n              <!--total amount-->\r\n              <div class=\"form-group \">\r\n                <label for=\"amount_due_minus_discount \" class=\"col-sm-2 control-label \">Total (BDT)</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"number \" formControlName=\"total\" class=\"form-control \" id=\"amount_due_minus_discount \"\r\n                         placeholder=\"total \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--discount-->\r\n              <!--<div class=\"form-group \">-->\r\n              <!--<label for=\"discount \" class=\"col-sm-2 control-label \">Discount</label>-->\r\n              <!--<div class=\"col-sm-10\">-->\r\n              <!--<input type=\"number \" (keyup)=\"updateDiscount($event.target.value)\" formControlName=\"discount\"-->\r\n              <!--class=\"form-control \" id=\"discount \" placeholder=\"discount \"-->\r\n              <!--&gt;-->\r\n              <!--</div>-->\r\n              <!--</div>-->\r\n  \r\n              <!--product list-->\r\n              <div class=\"form-group \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\r\n                <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <div class=\"productSelectBox\">\r\n                    <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\r\n                      <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\r\n                        {{ product.name }} - <em> {{ product.rate }} BDT/month </em>\r\n                      </option>\r\n                    </select>\r\n                    <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\">\r\n                      <i\r\n                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\r\n                                                                                                 aria-hidden=\"true\"></i>\r\n                &nbsp; Add Product\r\n              </button>\r\n  \r\n              <div class=\"form-group \">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-lg\">Save</button>\r\n                  <button type=\"button\" class=\"btn btn-danger btn-lg\">Cancel</button>\r\n  \r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <hr>\r\n            <div class=\"col-md-12\" *ngIf=\"isSaved\">\r\n              <div class=\"alert alert-success\" role=\"alert\">Proforma Created Successfully !!</div>\r\n              <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/dashboard/proforma/display/all/',resultProforma._id]\">Generate Proforma Now</a>\r\n            </div>\r\n  \r\n          </form>\r\n        </div>\r\n  \r\n      </div>\r\n    </section>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-create/proforma-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proforma_service__ = __webpack_require__("../../../../../src/app/proforma/proforma.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProformaCreateComponent = (function () {
    function ProformaCreateComponent(proformaService, fb, customerService, productService, areaService) {
        this.proformaService = proformaService;
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.productList = [];
        this.showSuccess = false;
        this.showError = false;
        this.customerList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
        this.isSaved = false;
    }
    ProformaCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAllCustomers();
    };
    ProformaCreateComponent.prototype.buildForm = function () {
        var date = Date.now();
        this.proformaCreateForm = this.fb.group({
            customer_id: [''],
            username: [''],
            email: [''],
            fullname: [''],
            location: [''],
            area: [''],
            city: [''],
            mobile_primary: [''],
            mobile_secondary: [''],
            // amount_due: [''],
            total: [''],
            //  discount: [0],
            date: [date],
            // status: ['Due'],
            productList: []
        });
    };
    ProformaCreateComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerService.getAllCustomers('all')
            .subscribe(function (res) {
            _this.customerList = res;
        }, function (err) {
        });
    };
    ProformaCreateComponent.prototype.getCustomer = function (event) {
        var _this = this;
        this.resCustomer = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.customerList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.proformaCreateForm.patchValue({
            username: this.resCustomer.username,
            email: this.resCustomer.email,
            fullname: this.resCustomer.fullname,
            location: this.resCustomer.location,
            city: this.resCustomer.city,
            mobile_primary: this.resCustomer.mobile_primary,
            mobile_secondary: this.resCustomer.mobile_secondary,
        });
        this.resCustomer.productData = [];
        if (this.resCustomer.area) {
            this.areaService.getAreaById(this.resCustomer.area)
                .subscribe(function (res) {
                _this.resCustomer.areaData = res;
                _this.proformaCreateForm.patchValue({
                    area: _this.resCustomer.areaData.name
                });
            }, function (err) {
            });
        }
    };
    ProformaCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]);
            _this.proformaCreateForm.patchValue({
                total: _this.productList[0].rate
            });
        });
    };
    ProformaCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    ProformaCreateComponent.prototype.addProduct = function () {
        this.allProductCounter++;
        var newProduct = this.productList[0];
        this.allProducts.push(newProduct);
        this.updateTotal();
    };
    ProformaCreateComponent.prototype.onProductChange = function (event, index) {
        var result = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.productList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.allProducts[index] = result;
        this.updateTotal();
    };
    ProformaCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ProformaCreateComponent.prototype.updateTotal = function () {
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.allProducts, function (product) {
            total += product['rate'];
        });
        this.proformaCreateForm.patchValue({
            total: total
        });
    };
    ProformaCreateComponent.prototype.submitProformaCreateForm = function () {
        var _this = this;
        var product_list = __WEBPACK_IMPORTED_MODULE_5_underscore__["pluck"](this.allProducts, '_id');
        this.proformaCreateForm.patchValue({
            productList: product_list,
            customer_id: this.resCustomer['_id']
        });
        this.proformaService.createNewProforma(this.proformaCreateForm.value)
            .subscribe(function (res) {
            _this.resultProforma = res;
            _this.isSaved = true;
        });
    };
    ProformaCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-proforma-create',
            template: __webpack_require__("../../../../../src/app/proforma/proforma-create/proforma-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proforma/proforma-create/proforma-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__proforma_service__["a" /* ProformaService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], ProformaCreateComponent);
    return ProformaCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma-edit/proforma-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-edit/proforma-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showForm\" class=\"content-wrapper\" style=\"height: 2000px;\">\r\n    <section class=\" content-header \">\r\n      <div class=\"col-xs-12\">\r\n        <h1>\r\n          Proforma Details of <em>{{ proforma.customerData?.username }}</em>\r\n          <small>for the month of {{ proforma?.created_on | date:'MMMM'}}</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb \">\r\n          <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\r\n          <li><a [routerLink]=\"[ '/dashboard/proforma/all' ] \"><i class=\"fa fa-dashboard \"></i> Proforma</a></li>\r\n          <li class=\"active \">Edit</li>\r\n        </ol>\r\n      </div>\r\n    </section>\r\n    <section class=\"content \">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box box-primary\" *ngIf=\"proforma\">\r\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Proforma Data Updated Successfully !!</div>\r\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\r\n          <!--  Page Content Here -->\r\n          <form class=\"form-horizontal \" [formGroup]=\"proformaDetailForm\" *ngIf=\"proforma\"\r\n                (submit)=\"submitProformaEditForm()\">\r\n            <div class=\"col-md-6\">\r\n              <!--username-->\r\n              <div class=\" form-group \">\r\n                <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\r\n                         placeholder=\"Username \" readonly>\r\n                </div>\r\n              </div>\r\n              <!--email-->\r\n              <div class=\"form-group \">\r\n                <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n              <!--fullname-->\r\n              <div class=\"form-group \">\r\n                <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\r\n                         placeholder=\"Fullname \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_primary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\r\n                         placeholder=\"Mobile primary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_secondary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\r\n                         placeholder=\"Mobile secondary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--location-->\r\n              <div class=\"form-group \">\r\n                <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\r\n                         placeholder=\"location \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--area-->\r\n              <div class=\"form-group \">\r\n                <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--city-->\r\n              <div class=\"form-group \">\r\n                <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-6\">\r\n              <!--choose status-->\r\n              <!--<div class=\"form-group \">\r\n                <label for=\"status \" class=\"col-sm-6 control-label \">Payment Status</label>\r\n                <div class=\"col-sm-6\">\r\n                  <label class=\"label label-warning\" *ngIf=\"proforma.status=='Partially Paid'\">{{ proforma.status }}</label>\r\n                  <label class=\"label label-danger\" *ngIf=\"proforma.status=='Due'\">{{ proforma.status }}</label>\r\n                  <label class=\"label label-success\" *ngIf=\"proforma.status=='Paid'\">{{ proforma.status }}</label>\r\n                </div>\r\n              </div>-->\r\n  \r\n              <!--invoice_created_date-->\r\n              <!--<div class=\"form-group \">-->\r\n              <!--<label for=\"invoice_created_date \" class=\"col-sm-2 control-label \">Invoice created on</label>-->\r\n              <!--<div class=\"col-sm-10\">-->\r\n              <!--<input type=\"date\" formControlName=\"invoice_created_date\">-->\r\n              <!--</div>-->\r\n              <!--</div>-->\r\n  \r\n              <!--payment_due_date-->\r\n              <!--<div class=\"form-group \" *ngIf=\"paymentStatus=='Due'\">\r\n                  <label for=\"payment_due_date \" class=\"col-sm-2 control-label \">Payment Due Date</label>\r\n                  <div class=\"col-sm-10\">\r\n                      <input type=\"date\" formControlName=\"payment_due_date\" value=\"currentDate.toString('Y-m-d')\">\r\n                  </div>\r\n              </div>-->\r\n  \r\n              <!--for partial payment only-->\r\n              <div class=\"form-group \" *ngIf=\"proforma.status=='Partially Paid' \">\r\n                <div *ngFor=\"let x of proforma?.amount_partially_paid;let i = index\">\r\n                  <label for=\"status \" class=\"col-sm-6 control-label \">Partial Payment : [{{ i+1 }}] </label>\r\n                  <div class=\"col-sm-6\">\r\n                    <h5 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h5>\r\n                    <h5 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h5>\r\n                    <br>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--payment paid / partially paid date-->\r\n              <div class=\"form-group \" *ngIf=\"proforma.status=='Paid' && paymentStatus!='Due'\">\r\n                <label for=\"paid \" class=\"col-sm-2 control-label \">Payment Paid Date</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"date\" formControlName=\"paid_date\">\r\n                </div>\r\n              </div>\r\n  \r\n              <!--amoount partially paid-->\r\n              <!--<div class=\"form-group \" *ngIf=\"proforma.status=='Partially Paid'\">-->\r\n              <!--<label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid (BDT) </label>-->\r\n              <!--<div class=\"col-sm-10\">-->\r\n              <!--<input type=\"text \" (keyup)=\"getPartiallyPaid($event)\" formControlName=\"amount_partially_paid\" class=\"form-control \" id=\"amount_partially_paid \" placeholder=\"amount partially paid\">-->\r\n              <!--</div>-->\r\n              <!--</div>-->\r\n  \r\n              <!--amount_due-->\r\n              <!--<div class=\"form-group \" *ngIf=\"proforma.status!='Paid'\">\r\n                <label for=\"amount_due \" class=\"col-sm-2 control-label \">Amount Due (INR) </label>\r\n                <div class=\"col-sm-10\">\r\n                  <input *ngIf=\"proforma.status=='Due'\" type=\"text \" formControlName=\"amount_due\" class=\"form-control \"\r\n                         id=\"amount_due \" placeholder=\"amount due\" readonly>\r\n                  <input *ngIf=\"proforma.status=='Partially Paid'\" type=\"text \" formControlName=\"amount_due\"\r\n                         class=\"form-control \" id=\"amount_due \" placeholder=\"amount due\" readonly>\r\n                </div>\r\n              </div>-->\r\n  \r\n  \r\n              <!--discount-->\r\n              <div class=\"form-group \">\r\n                <label for=\"discount \" class=\"col-sm-2 control-label\">Discounts (INR) </label>\r\n                <div class=\"col-sm-10\">\r\n                  <input (keyup)=\"getDiscount($event)\" type=\"text\" formControlName=\"discount\" class=\"form-control \"\r\n                         id=\"discount \" placeholder=\"discount\">\r\n                </div>\r\n              </div>\r\n  \r\n              <!--total-->\r\n              <div class=\"form-group \">\r\n                <label for=\"discount \" class=\"col-sm-2 control-label \">Total (INR) </label>\r\n                <div class=\"col-sm-10\">\r\n                  <input *ngIf=\"proforma.status!='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\r\n                         id=\"total \" placeholder=\"total\">\r\n                  <input *ngIf=\"proforma.status=='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\r\n                         id=\"total \" placeholder=\"total\" readonly>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <!--for products already list-->\r\n                <div class=\"form-group \" *ngFor=\"let myProduct of proforma.customerData?.productData;let i=index\">\r\n                  <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\r\n                  <div class=\"col-sm-10 \">\r\n                    <div class=\"productSelectBox\">\r\n                      <select (change)=\"onProductChange($event,i,'my')\" required *ngIf=\"productList\" class=\"form-control\"\r\n                              style=\"margin-bottom:10px\">\r\n                        <option [selected]=\"product._id == myProduct._id\" *ngFor=\"let product of productList\"\r\n                                value=\"{{ product._id }}\">\r\n                          {{ product.name }} - <em> {{ product.rate }} INR/month </em>\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n                <!--for new additional products-->\r\n                <div class=\"form-group \" *ngFor=\"let newProduct of additionalProducts;let i=index\">\r\n                  <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+proforma.customerData?.productData.length+1\r\n                    }}]</label>\r\n                  <div class=\"col-sm-10 \">\r\n                    <div class=\"productSelectBox\">\r\n                      <select (change)=\"onProductChange($event,i,'add')\" required *ngIf=\"productList\" class=\"form-control\"\r\n                              style=\"margin-bottom:10px\">\r\n                        <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\r\n                          {{ product.name }} - <em> {{ product.rate }} INR/month </em></option>\r\n                      </select>\r\n                      <button *ngIf=\"proforma.status!='Paid'\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\"\r\n                              (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <button *ngIf=\"proforma.status!='Paid'\" (click)=\"addProduct()\" type=\"button\"\r\n                        class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add\r\n                  Product\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-sm-offset-1 col-sm-10 \" style=\"margin-top:10px\">\r\n                <!--<button type=\"submit \" class=\"btn btn-success\">Save</button>-->\r\n                <button type=\"submit\" class=\"btn btn-info btn-lg\">Generate Proforma</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-edit/proforma-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proforma_service__ = __webpack_require__("../../../../../src/app/proforma/proforma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProformaEditComponent = (function () {
    function ProformaEditComponent(areaService, customerService, elementRef, productService, fb, proformaService, route, router) {
        this.areaService = areaService;
        this.customerService = customerService;
        this.elementRef = elementRef;
        this.productService = productService;
        this.fb = fb;
        this.proformaService = proformaService;
        this.route = route;
        this.router = router;
        this.productList = [];
        this.additionalProducts = [];
        this.addProductCounter = 0;
        this.allProductsAdd = [];
        this.productSuggestions = [];
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]('en-US');
        this.paymentStatus = 'Due';
        this.showForm = false;
    }
    ProformaEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (_this.id) {
                _this.proformaService.getProformaById(_this.type, _this.id)
                    .subscribe(function (res) {
                    _this.proforma = res;
                    _this.allProductsAdd = _this.proforma.productList;
                    _this.buildForm();
                }, function (err) {
                });
            }
        });
    };
    ProformaEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.customerService.getCustomerDetails(this.proforma.customer_id)
            .subscribe(function (res) {
            _this.proforma.customerData = res;
            _this.proforma.customerData.productData = [];
            // let total_partially_paid = 0;
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](_this.proforma.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    _this.proforma.customerData.productData.push(res);
                });
                // total_partially_paid += item['amount'];
            });
            _this.proformaDetailForm = _this.fb.group({
                username: [res['username']],
                email: [res['email']],
                fullname: [res['fullname']],
                location: [res['location']],
                area: [''],
                city: [res['city']],
                mobile_primary: [res['mobile_primary']],
                mobile_secondary: [res['mobile_secondary']],
                payment_due_date: [_this.proforma['payment_due_date']],
                amount_due: [_this.proforma['amount_due']],
                status: [_this.proforma['status']],
                total: [_this.proforma['total']],
                discount: [_this.proforma['discount']],
                proforma_created_date: [_this.proforma['proforma_created_date']],
                paid_date: [_this.proforma['paid_date']],
            });
            _this.areaService.getAreaById(res['area'])
                .subscribe(function (res) {
                _this.proformaDetailForm.patchValue({
                    area: res['name']
                });
            });
            _this.showForm = true;
        });
    };
    ProformaEditComponent.prototype.getProductSuggestions = function (event) {
        var _this = this;
        var data = {
            text: event.query
        };
        this.productService.searchByName(data)
            .subscribe(function (res) {
            _this.productSuggestions = res;
        }, function (err) {
        });
    };
    ProformaEditComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    ProformaEditComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0];
        this.additionalProducts.push(newProduct);
        this.allProductsAdd.push(newProduct._id);
        this.updatePayments();
    };
    ProformaEditComponent.prototype.removeProduct = function (index) {
        var delIndex = this.allProductsAdd.indexOf(this.additionalProducts[index]);
        this.allProductsAdd.splice(delIndex, 1);
        this.additionalProducts.splice(index, 1);
        this.updatePayments();
    };
    ProformaEditComponent.prototype.onProductChange = function (event, index, mode) {
        if (mode != 'my') {
            index = index + this.proforma.customerData.productData.length;
        }
        this.allProductsAdd[index] = event.target.value;
        this.updatePayments();
    };
    ProformaEditComponent.prototype.submitProformaEditForm = function () {
        var _this = this;
        var data = {};
        data = {
            id: this.id,
            amount_due: this.proformaDetailForm.value.amount_due,
            total: this.proformaDetailForm.value.total,
            discount: this.proformaDetailForm.value.discount,
            productList: this.allProductsAdd,
            // amount_partially_paid: this.proforma.amount_partially_paid,
            type: this.type
        };
        this.proformaService.preGenerateProformaUpdate(data)
            .subscribe(function (res) {
            _this.router.navigate(['dashboard/proforma/display', _this.type, _this.id]);
        }, function (err) {
            console.log('Error in Pre Generator');
        });
    };
    ProformaEditComponent.prototype.changeStatus = function (event) {
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'Paid') {
            var currentDate = this.datePipe.transform(Date.now(), 'y-MM-dd');
            this.proformaDetailForm.patchValue({
                paid_date: currentDate
            });
        }
    };
    ProformaEditComponent.prototype.getPartiallyPaid = function (event) {
        this.proformaDetailForm.patchValue({
            amount_partially_paid: event.target.value,
            amount_due: this.proforma.amount_due - event.target.value
        });
    };
    ProformaEditComponent.prototype.getDiscount = function (event) {
        this.proformaDetailForm.patchValue({
            total: this.proformaDetailForm.value.amount_due - event.target.value
        });
    };
    ProformaEditComponent.prototype.updatePayments = function () {
        var _this = this;
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](this.allProductsAdd, function (item) {
            var product = __WEBPACK_IMPORTED_MODULE_7_underscore__["findWhere"](_this.productList, { _id: item });
            total += product.rate;
        });
        this.proformaDetailForm.patchValue({
            total: total,
            discount: 0,
            amount_due: total
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('productSelectBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], ProformaEditComponent.prototype, "productSelectBox", void 0);
    ProformaEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-proforma-edit',
            template: __webpack_require__("../../../../../src/app/proforma/proforma-edit/proforma-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proforma/proforma-edit/proforma-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__proforma_service__["a" /* ProformaService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], ProformaEditComponent);
    return ProformaEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma-html/proforma-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#proforma_box {\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#proforma_table {\n  background-color: #fff;\n  font-size: 20px;\n}\n\n#company_logo {\n  margin-top: 50px;\n  margin-left: 10px;\n  width: 210px;\n  height: 180px;\n}\n\n.row-divide {\n  border-bottom: 4px solid #d2d6de;\n}\n\n#proforma_box {\n  font-weight: 550;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-html/proforma-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;margin-left: 0vw;\">\n  <section class=\" content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Proforma Display\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/' ] \"><i class=\"fa fa-dashboard \"></i> SofkulApp</a></li>\n        <li><a [routerLink]=\"[ '/dashboard/proforma' ] \"><i class=\"fa fa-dashboard \"></i> Proforma</a></li>\n        <li class=\"active \">Display</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"proforma\">\n    <div class=\"col-xs-12\" id=\"proforma_main\">\n      <div id=\"proforma_body\">\n        <!--proforma display starts here-->\n        <div class=\"\" id=\"proforma_box\" style=\"margin-top:10px\" #proformaBox>\n          <!--head row-->\n          <div class=\"row \">\n            <!--left section-->\n            <div class=\"col-md-6\">\n              <img src=\"/assets/dist/img/Aquality.jpg\" style=\"width:40%; height:50%;\" id=\"company_logo\">\n            </div>\n            <!--right section-->\n            <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left; margin-top:8px;\">\n              <h3 style=\"font-size: 60px;\"></h3><br>\n\n            </div>\n\n            \n              <div class=row style=\"background-color:darkslategray; margin-top:150px; width:100%; height:200px;margin-left: 0vw;\">\n                <div class=\"col-md-4 col-xs-4\" >\n                  <div class=\"\" style=\"color:white; margin-left:40px;margin-top:20px; padding:10px; font-size:16px; \">\n                      <span> Proforma for: </span><br>\n                      <strong> {{ proforma.customerData?.fullname }} </strong><br>\n                      <!--<span> {{ proforma.customerData?.location }} </span><br>-->\n                      <span> {{ proforma.customerData?.city }} </span><br>\n                      <span> India </span>\n                      <span> {{ proforma.customerData?.mobile_primary }} </span><br>\n                      <span> {{ proforma.customerData?.email }} </span><br>\n                      <!--<span> {{ proforma.customerData?.area }} </span><br>-->\n                      </div>\n                </div>\n                <div class=\"col-md-offset-2 col-md-6 col-xs-2\">\n                  <div style=\"padding-top:40px;\">\n                    <span style=\"color:rgb(245, 163, 10); font-size:70px;\">PROFORMA</span>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                    <span> Date: {{ proforma.created_on | date }} </span>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                    <span> Valid upto: DD/MM/YYYY</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> Proforma ref: #123456</span>\n                    </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                      \n                      <span> <strong>Proforma Number: </strong> #001</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> <strong>Mobile Number: </strong> {{ proforma.customerData?.mobile_primary }}</span>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                        <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    \n                  \n                      </div>\n                </div>\n\n              <!--table-->\n              <div id=\"proforma_table\">\n              <table class=\"table table-hover table-responsive\" *ngIf=\"proforma.productData\" style=\"width:100%; height:200px;margin-left: 0vw;\" >\n                  <thead style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                    <tr>\n                      <th>ITEM DESCRIPTION</th>\n                      <th>UNIT PRICE</th>\n                      <th>GST</th>\n                      <th>TAX RATE</th>\n                      <th style=\"padding-left:200px;\">QUANTITY</th>\n                      <th style=\"padding-left:100px;\">AMOUNT</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of proforma.productData;let i=index\"\n                    [ngClass]=\"i==proforma.productData.length-1 ? 'row-divide' : '' \">\n                    <td>{{ product?.name }}</td>\n                    <td>INR. {{ product?.rate }}</td>\n                    <td> {{ product?.vat }}%</td>\n                    <td></td>\n                    \n                    \n                      <td style=\"padding-left:200px; width:30%;\">1</td>\n                      <td style=\"padding-left:100px; background-color:#ffe6e6; width:20%;\">INR. {{ product?.amount_with_vat * 1 }}</td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        \n                        <td style=\"padding-left:200px;\">\n                          <strong>SUB TOTAL: </strong>\n                        </td>\n                        <td style=\"padding-left:100px; background-color:#ffe6e6;width:20%;\">\n                          INR. {{ proforma.total }}\n                        </td>\n                      </tr>\n\n                      <tr *ngFor=\"let x of proforma?.amount_partially_paid;let i = index\">\n                          <td></td>\n                          \n                        \n                          <td>\n                            <strong>Payment On : {{ x.date | date }} </strong>\n                          </td>\n                          <td>\n                            INR. {{ x.amount }}\n                          </td>\n                        </tr>\n            \n                        \n                  \n                          <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              \n                              <td style=\"padding-left:200px;\">\n                                Adjusyments\n                              </td>\n                              <td style=\"padding-left:100px; background-color:#ffe6e6;\">\n                                INR. {{ proforma.discount }}\n                              </td>\n    \n                            </tr>\n                            <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              \n                              <td style=\"padding-left:200px;\">\n                                Transport\n                              </td>\n                              <td style=\"padding-left:100px; background-color:#ffe6e6;\">\n                                INR. \n                              </td>\n    \n                            </tr>\n\n                            <tr>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                \n                                <td style=\"background-color:darkslategray; color:#fff;padding-left:200px;\">\n                                  GRAND TOTAL\n                                </td>\n                                <td style=\"background-color:rgb(245, 163, 10); color:#fff;padding-left:100px; \">\n                                  INR. {{ proforma.total - proforma.discount }}\n                                </td>\n      \n                              </tr>\n                        <!--<tr *ngIf=\"proforma.status == 'Paid'\">\n                          <td></td>\n                          <td></td>-->\n                          <!--<td></td>-->\n                          <!--<td>\n                            <strong>Amount Paid (INR)</strong>\n                          </td>\n                          <td>\n                            <strong>INR. {{ proforma.total }}</strong>\n                          </td>-->\n                        <!--</tr>-->\n                        \n                        <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                        \n                          <td style=\"background-color:darkslategray; color:#fff; padding-left:200px;\">\n                            <strong>TOTAL(in words)</strong>\n                          </td>\n                          <td style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                            <strong style=\"text-transform: capitalize;\"> {{ finalTotalWords }} INR only</strong>\n                          </td>\n                        </tr>\n                    \n                  </tbody>\n                </table>\n                </div>\n                \n                        \n                      <div class=\"row\">\n                      <div class=\"col-md-6 col-xs-6\">\n                      <h3 class=\"well\">Bank Details</h3>\n                       <div class=\"table-responsive\">          \n                    <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th>AQUALITY Water Solutions Pvt Ltd</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          \n                          <td></td>\n                          <td>A/c No.</td>\n                          <td><strong>111 905 000 338</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>Bank</td>\n                          <td><strong>ICICI Bank - Filmnagar Br.</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>IFSC Code</td>\n                          <td><strong>ICIC 000 1119</strong></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                          \n                  </div>\n                  </div>\n\n                  <div class=\"col-md-6 col-xs-6\" style=\"margin-top:50px;\">\n                    <div style=\"text-align: -webkit-center; margin-top:20%; \">\n                       Name & Signature\n                    </div>\n                  </div>\n                  </div><br> <br>\n                  \n\n                 <div class=\"container-fluid\" style=\"background-color:none;\">\n                  <div class=\"footer\">\n                    <p><strong>THANK YOU FOR YOUR BUSINESS</strong> </p><hr>\n                    <div class=\"footer-header\">\n                      TERMS AND CONDITION\n\n                    </div>\n                  </div>\n\n                 </div>\n          \n\n            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">\n\n              <div>\n                <strong>Aquality Water Solutions Pvt Ltd.</strong><br>\n                <span># 8-1-284/OU/385/1&2, 4th Floor Bait-ul-Rida</span><br>\n                <span>OU Colony Shaikpet, Lanco hills Lane</span><br>\n                <span>Hyderabad, Telangana State - 500008</span><br>\n                <span>India</span><br><br>\n\n                <span>Phone: +91 40 6888 8486</span><br>\n                <span>Mobile: 709 389 8486</span><br>\n                <span>www.aquality.in</span>\n                <span>Email: accounts@aquality.in  | info@aquality.in</span>\n                <span></span>\n              </div>\n            </div>\n      \n            \n                <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left;line-height: 2;\">\n                    <span> <strong>Date: </strong> {{ proforma.created_on | date }} </span><br>\n                    <span> <strong>Proforma ref: </strong> #123456</span><br><br>\n                    \n                  \n                    <span> <strong>Valid upto: </strong> DD/MM/YYYY</span><br>\n                    <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    <span> <strong>Mobile Number: </strong> {{ proforma.customerData?.mobile_primary }}</span><br>\n                  <span> <strong>Proforma Number: </strong> #001</span><br>\n                  <span> <strong>Proforma Date: </strong> {{ proforma.created_on | date }} </span><br>\n                  <span> <strong>Payment Due: </strong> {{ proforma.created_on | date }}</span> <br>\n                  <span> <strong>Amount Due (INR): </strong> INR. {{ proforma.amount_due }}</span><br>\n                </div>-->\n\n                \n              \n          </div>\n          <hr>\n\n          <!--middle row-->\n          \n          \n        </div>\n        <!--table section-->\n        \n      </div>\n      <div style=\"margin-top:15px\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadPDF()\"><i class=\"fa fa-download\"\n                                                                                 aria-hidden=\"true\"></i>&nbsp;Download\n          as PDF\n        </button>\n        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>&nbsp;Export\n          as CSV\n        </button>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-html/proforma-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proforma_service__ = __webpack_require__("../../../../../src/app/proforma/proforma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProformaHtmlComponent = (function () {
    function ProformaHtmlComponent(generalService, productService, customerService, proformaService, route) {
        this.generalService = generalService;
        this.productService = productService;
        this.customerService = customerService;
        this.proformaService = proformaService;
        this.route = route;
        this.type = '';
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]('en-US');
        this.isAutoProforma = false;
    }
    ProformaHtmlComponent.prototype.ngOnChanges = function (changes) {
        if (changes['autoProforma']) {
            this.isAutoProforma = true;
            this.tempProforma = changes['autoProforma'].currentValue;
        }
    };
    ProformaHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.displaySidebar(false);
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (!_this.isAutoProforma) {
                _this.getProformaById(params['id']);
            }
            else {
                _this.proforma = _this.tempProforma;
                _this.proforma['created_on'] = _this.currentDate;
                _this.finalTotal = _this.proforma.amount_due - _this.proforma.discount;
                _this.finalTotalWords = _this.numberToEnglish(_this.proforma.total, '');
            }
        });
    };
    ProformaHtmlComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProformaHtmlComponent.prototype.ngAfterContentInit = function () {
        // if (this.isAutoproforma) {
        //   this.downloadPDF();
        //
        // }
    };
    ProformaHtmlComponent.prototype.ngAfterViewInit = function () {
        if (this.isAutoProforma) {
            this.downloadPDF();
        }
    };
    ProformaHtmlComponent.prototype.downloadPDF = function () {
        var _this = this;
        html2canvas(document.getElementById('proforma_body'), {
            onrendered: function (canvas) {
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF("p", "mm", "a4");
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 200);
                if (_this.isAutoProforma) {
                    var pdf = pdf.output('datauristring');
                    var data = {
                        pdf: pdf,
                        label: _this.proforma.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM')
                    };
                    console.log(data);
                    _this.proformaService.saveAutoProforma(data)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log("Error in auto pilot");
                    });
                }
                else {
                    pdf.save(_this.proforma.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM') + ".pdf");
                }
            }
        });
    };
    ProformaHtmlComponent.prototype.getProformaById = function (id) {
        var _this = this;
        this.proformaService.getProformaById(this.type, id)
            .subscribe(function (res) {
            _this.proforma = res;
            _this.proforma.total = 0;
            _this.proforma.productData = [];
            // get product data
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.proforma.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    res['amount_with_vat'] = res['rate'] + (res['rate'] * (res['vat'] / 100));
                    _this.proforma.productData.push(res);
                    _this.proforma.total = _this.proforma.total + res['amount_with_vat'];
                    _this.proforma.amount_due = _this.proforma.total;
                }, function (err) {
                }, function () {
                    if (_this.proforma.amount_partially_paid.length > 0) {
                        __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.proforma.amount_partially_paid, function (data) {
                            _this.proforma.amount_due = _this.proforma.amount_due - data['amount'];
                        });
                    }
                    if (_this.proforma.status == 'Paid') {
                        _this.proforma.amount_due = 0;
                    }
                    _this.finalTotal = _this.proforma.amount_due - _this.proforma.discount;
                    _this.finalTotalWords = _this.numberToEnglish(_this.proforma.total, '');
                });
            });
            //get customer data
            _this.customerService.getCustomerDetails(_this.proforma.customer_id)
                .subscribe(function (res) {
                _this.proforma.customerData = res;
            }, function (err) {
            }, function () {
                console.log(_this.proforma);
            });
        }, function (err) {
            console.log(err);
        });
    };
    ProformaHtmlComponent.prototype.numberToEnglish = function (n, custom_join_character) {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        var and = custom_join_character || 'and';
        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'zero';
        }
        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {
            chunk = parseInt(chunks[i]);
            if (chunk) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }
                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }
                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }
                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }
                }
                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }
            }
        }
        return words.reverse().join(' ');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('proformaBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ProformaHtmlComponent.prototype, "proformaBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProformaHtmlComponent.prototype, "autoProforma", void 0);
    ProformaHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-proforma-html',
            template: __webpack_require__("../../../../../src/app/proforma/proforma-html/proforma-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proforma/proforma-html/proforma-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__proforma_service__["a" /* ProformaService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], ProformaHtmlComponent);
    return ProformaHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma-recent/proforma-recent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-recent/proforma-recent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1800px;\">\n\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isProformaSaved\">Proforma Data Saved Successfully !!</div>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isProformaError\">ERROR !! Please Try Again.</div>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Recent Proforma's\n        <small><em> Generated for the month of {{ currentDate | date: 'MMMM' }} </em></small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> InvoiceApp</a></li>\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Proforma</a></li>\n        <li class=\"active\">Recent</li>\n      </ol>\n\n      <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delProforma\">\n        <h4>\n          <strong>Delete Confirmation !!</strong> <br>\n          Delete the proforma for <em>{{ delProforma.customerData?.username }} </em> ?\n        </h4>\n        <br>\n        <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"content\">\n\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">Recent Proforma List</h3>\n          <br>\n          <div class=\"box-tools\">\n\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Proformas\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"proformaList\">\n\n          <br>\n          <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n          </div>\n          <br>\n\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (INR)</th>\n              <th>Paid (INR)</th>\n              <th>Total (INR)</th>\n              <th>Status</th>\n              <th>Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let proforma of proformaList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalCustomerCount }\">\n              <td>{{ proforma.customerData?.username }}</td>\n              <td>{{ proforma.customerData?.fullname }}</td>\n              <td>{{ proforma.customerData?.mobile_primary }}</td>\n              <td>{{ proforma.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"proforma.customerData?.productData?.length>0\"> {{ proforma.customerData?.productData[0]?.name }} - <em *ngIf=\"proforma.customerData?.productData[0]?.rate\">{{ proforma.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ proforma.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ proforma.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ proforma?.amount_due }}</td>\n              <td>{{ proforma?.total - proforma?.amount_due }}</td>\n              <td>{{ proforma?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"proforma.status=='Due'\"> {{ proforma.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"proforma.status=='Paid'\"> {{ proforma.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"proforma.status=='Partially Paid'\"> {{ proforma.status\n                  }} </label>\n              </td>\n              <td *ngIf=\"proforma?.status=='Due' || proforma?.status=='Partially Paid'\">\n                {{ proforma?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"proforma?.status=='Paid'\">\n                {{ proforma?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',proforma)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',proforma)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',proforma)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/proforma/view','recent',proforma?._id]\"> View</a>\n                <!--<button class=\"btn btn-xs btn-danger\" (click)=\"remove(proforma)\"><i class=\"fa fa-times\"-->\n                <!--aria-hidden=\"true\"></i></button>-->\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialProforma\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialProforma?.total }} BDT</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialProforma?.amount_due }} BDT</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialProforma?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} BDT</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} BDT</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialProforma\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (BDT) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-recent/proforma-recent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaRecentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proforma_service__ = __webpack_require__("../../../../../src/app/proforma/proforma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProformaRecentComponent = (function () {
    function ProformaRecentComponent(customerService, router, proformaService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.proformaService = proformaService;
        this.productService = productService;
        this.areaService = areaService;
        this.currentDate = Date.now();
        this.proformaList = [];
        this.searchMode = 'username';
        this.isProformaSaved = false;
        this.isProformaError = false;
        this.showRemoveConfirmation = false;
        this.paginator = 1;
        this.totalCustomerCount = 0;
    }
    ProformaRecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getRecentProformaDB();
        // this.wakeUpProformaDemon();
    };
    //useless shitty method
    ProformaRecentComponent.prototype.wakeUpProformaDemon = function () {
        var _this = this;
        this.proformaService.cleanProforma()
            .subscribe(function (res) {
            if (res.status) {
                _this.generateNewProforma();
            }
            else {
                _this.getRecentProformaDB();
            }
        });
    };
    //useless shitty method
    ProformaRecentComponent.prototype.generateNewProforma = function () {
        var _this = this;
        this.proformaService.dropRecentProforma()
            .subscribe(function (res) {
            _this.buildAndSaveRecentProforma();
        });
    };
    ProformaRecentComponent.prototype.getRecentProformaDB = function () {
        var _this = this;
        this.proformaList = [];
        this.proformaService.getRecentProformaDB(this.paginator)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (proforma) {
                var customer;
                _this.customerService.getCustomerDetails(proforma.customer_id)
                    .subscribe(function (res) {
                    if (res['status']) {
                        customer = res;
                        customer.productData = [];
                        if (proforma.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](proforma.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer["productData"].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer["areaData"] = res;
                        });
                        proforma.customerData = customer;
                        _this.proformaList.push(proforma);
                    }
                });
            });
        }, function (err) {
        }, function () {
            for (var i = 0; i < _this.proformaList.length; i++) {
                console.log("Hello World");
            }
        });
    };
    ProformaRecentComponent.prototype.buildAndSaveRecentProforma = function () {
        var _this = this;
        this.proformaService.buildAndSaveRecentProforma()
            .subscribe(function (res) {
            _this.getRecentProformaDB();
        }, function (err) {
            console.log('Error in build and save');
        });
    };
    ProformaRecentComponent.prototype.saveRecentProforma = function (proforma) {
        this.proformaService.saveRecentProforma(proforma)
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    ProformaRecentComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    ProformaRecentComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getRecentProformaDB();
            return;
        }
        var reg = new RegExp(event, "i");
        var resArray = [];
        if (this.searchMode == 'username') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.proformaList, function (item) {
                if (reg.test(item['customerData']['username'])) {
                    resArray.push(item);
                }
            });
            this.proformaList = resArray;
        }
        else if (this.searchMode == 'mobile_number') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.proformaList, function (item) {
                if (reg.test(item['customerData']['mobile_primary'])) {
                    resArray.push(item);
                }
            });
            this.proformaList = resArray;
        }
        else if (this.searchMode == 'area') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.proformaList, function (item) {
                if (reg.test(item['customerData']['areaData']['name'])) {
                    resArray.push(item);
                }
            });
            this.proformaList = resArray;
        }
    };
    ProformaRecentComponent.prototype.changeStatus = function (status, proforma) {
        if (status == 'Paid') {
            this.setPaidDateCounter(proforma);
            proforma.status = 'Paid';
            proforma.paid_date = Date.now();
            proforma.amount_due = 0;
        }
        else if (status == 'Due') {
            proforma.status = 'Due';
            proforma.amount_due = proforma.total;
            proforma.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialProforma = proforma;
        }
        proforma['type'] = 'recent';
        this.proformaService.changeProformaStatus(proforma)
            .subscribe(function (res) {
        });
    };
    ProformaRecentComponent.prototype.setPaidDateCounter = function (proforma) {
        this.proformaService.setPaidDateCounter(proforma)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    ProformaRecentComponent.prototype.toggleSearchStatus = function (event) {
        var _this = this;
        this.getRecentProformaDB();
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'All') {
            return;
        }
        var resArray = [];
        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.proformaList, function (item) {
            if (__WEBPACK_IMPORTED_MODULE_3_underscore__["isEqual"](item.status, _this.paymentStatus)) {
                resArray.push(item);
            }
        });
        this.proformaList = resArray;
    };
    ProformaRecentComponent.prototype.savePartialPay = function () {
        var _this = this;
        var data = {
            id: this.partialProforma['_id'],
            amount_partially_paid: this.partialPay
        };
        this.proformaService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getRecentProformaDB();
            }
        }, function (err) {
        });
    };
    ProformaRecentComponent.prototype.remove = function (delProforma) {
        this.showRemoveConfirmation = true;
        this.delProforma = delProforma;
    };
    ProformaRecentComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.proformaService.deleteProforma(this.delProforma)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.proformaList = __WEBPACK_IMPORTED_MODULE_3_underscore__["without"](_this.proformaList, __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](_this.proformaList, {
                        _id: _this.delProforma['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delProforma = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    //  for pagination
    ProformaRecentComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getRecentProformaDB();
    };
    ProformaRecentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-proforma-recent',
            template: __webpack_require__("../../../../../src/app/proforma/proforma-recent/proforma-recent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proforma/proforma-recent/proforma-recent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__proforma_service__["a" /* ProformaService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], ProformaRecentComponent);
    return ProformaRecentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var proformaRoutes = [];
var ProformaRoutingModule = (function () {
    function ProformaRoutingModule() {
    }
    ProformaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(proformaRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], ProformaRoutingModule);
    return ProformaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma-search/proforma-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-search/proforma-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:100vh\">\n\n  <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delProforma\">\n    <h4>\n      <strong>Delete Confirmation !!</strong> <br>\n      Delete the proforma for <em>{{ delProforma.customerData?.username }} </em>  ?\n    </h4>\n    <br>\n    <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n    <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n  </div>\n\n  <section class=\"content\">\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <h2 style=\"margin-left:10px\">Search Proforma's of any customer</h2>\n        <hr>\n\n        <!--search results for proformas show box-->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:20px;margin-bottom: 20px\"\n             *ngIf=\"proformaList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <!--<th>Due (INR)</th>\n              <th>Paid (INR)</th>-->\n              <th>Total (INR)</th>\n              <!--<th>Status</th>-->\n              <th>Proforma Generated On</th>\n              <!--<th>Last Transaction Date</th>\n              <th>Change Status</th>-->\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let proforma of proformaList\">\n              <td>{{ proforma.customerData?.username }}</td>\n              <td>{{ proforma.customerData?.fullname }}</td>\n              <td>{{ proforma.customerData?.mobile_primary }}</td>\n              <td>{{ proforma.customerData?.areaData?.name }}</td>\n              <td><span *ngIf=\"proforma.customerData?.productData?.length>0\"> {{ proforma.customerData?.productData[0]?.name }} - <em *ngIf=\"proforma.customerData?.productData[0]?.rate\">{{ proforma.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ proforma.customerData?.productData.length }}</small>\n              </td>\n              <!--<td>\n                <small class=\"label bg-blue\">{{ proforma.customerData?.productData?.length }}</small>\n              </td>-->\n              <!--<td>{{ proforma?.amount_due }}</td>-->\n              <!--<td>{{ proforma?.total - proforma?.amount_due }}</td>-->\n              <td>{{ proforma?.total }}</td>\n              <!--<td>\n                <label class=\"label label-danger\" *ngIf=\"proforma.status=='Due'\"> {{ proforma.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"proforma.status=='Paid'\"> {{ proforma.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"proforma.status=='Partially Paid'\"> {{ proforma.status\n                  }} </label>\n              </td>-->\n              <td>\n                {{ proforma?.created_on | date: 'yMMMd' }}\n              </td>\n              <!--<td *ngIf=\"proforma?.status=='Due' || proforma?.status=='Partially Paid'\">\n                {{ proforma?.payment_due_date | date }}\n              </td>-->\n              <td *ngIf=\"proforma?.status=='Paid'\">\n                {{ proforma?.paid_date | date }}\n              </td>\n             <!-- <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',proforma)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',proforma)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',proforma)\"> Due</button>\n              </td>-->\n              <td>\n                <a type=\"button\" *ngIf=\"proforma?.type=='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/proforma/view','recent',proforma?._id]\">\n                  View</a>\n                <a type=\"button\" *ngIf=\"proforma?.type!='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/proforma/view','all',proforma?._id]\">\n                  View</a>\n\n                <button class=\"btn btn-xs btn-danger\" (click)=\"remove(proforma)\"><i class=\"fa fa-times\"\n                                                                                   aria-hidden=\"true\"></i></button>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialProforma\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialProforma?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialProforma?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialProforma?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialProforma\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay(partialProforma)\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n        <!--search box and functionality-->\n        <div class=\"container\">\n          <div class=\"col-lg-12\">\n            <form class=\"form-group\">\n              <input style=\"width:100%\" (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                     placeholder=\"Search for a customer\">\n            </form>\n\n            <!--search resultsa-->\n            <div *ngIf=\"searchResults.length>0\">\n              <strong style=\"font-size: 20px\"> Search results: </strong> <span class=\"search_text\"\n                                                                               style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n              <br>\n              <ul style=\"list-style-type:none\">\n                <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                  <br>\n                </li>\n                <hr>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/proforma/proforma-search/proforma-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__proforma_service__ = __webpack_require__("../../../../../src/app/proforma/proforma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProformaSearchComponent = (function () {
    function ProformaSearchComponent(customerService, proformaService, productService, areaService) {
        this.customerService = customerService;
        this.proformaService = proformaService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
        this.proformaList = [];
        this.showRemoveConfirmation = false;
    }
    ProformaSearchComponent.prototype.ngOnInit = function () {
    };
    ProformaSearchComponent.prototype.getSearchText = function (event) {
        this.proformaList = [];
        this.searchResults = [];
        this.searchText = event.target.value;
        this.getGlobalProformaSearchByCustomer();
    };
    ProformaSearchComponent.prototype.getGlobalProformaSearchByCustomer = function () {
        var _this = this;
        this.proformaService.globalProformaSearchByCustomer(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    ProformaSearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        var id = data['_id'];
        this.proformaList = [];
        this.proformaService.getProformaByCustomerId(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (proforma) {
                var customer;
                if (proforma['type'] == '') {
                    proforma['type'] = 'recent';
                }
                _this.customerService.getCustomerDetails(proforma.customer_id)
                    .subscribe(function (res) {
                    customer = res;
                    if (customer['status']) {
                        customer.productData = [];
                        if (proforma.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](proforma.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        proforma.customerData = customer;
                        _this.proformaList.push(proforma);
                    }
                });
            });
        }, function (err) {
            console.log('Error in getSearchDetails');
        });
    };
    ProformaSearchComponent.prototype.changeStatus = function (status, proforma) {
        if (status == 'Paid') {
            this.setPaidDateCounter(proforma);
            proforma.status = 'Paid';
            proforma.paid_date = Date.now();
            proforma.amount_due = 0;
        }
        else if (status == 'Due') {
            proforma.status = 'Due';
            proforma.amount_due = proforma.total;
            proforma.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialProforma = proforma;
        }
        if (proforma['type'] != 'recent') {
            proforma['type'] = 'all';
        }
        this.proformaService.changeProformaStatus(proforma)
            .subscribe(function (res) {
        });
    };
    ProformaSearchComponent.prototype.setPaidDateCounter = function (proforma) {
        this.proformaService.setPaidDateCounter(proforma)
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    ProformaSearchComponent.prototype.savePartialPay = function (proforma) {
        var _this = this;
        var data = {
            id: this.partialProforma['_id'],
            amount_partially_paid: this.partialPay
        };
        this.proformaService.savePartialPay(data)
            .subscribe(function (res) {
            if (res['status']) {
                _this.partialPay = 0;
                _this.getSearchDetails({ _id: proforma.customer_id });
            }
        }, function (err) {
        });
    };
    ProformaSearchComponent.prototype.remove = function (proforma) {
        this.showRemoveConfirmation = true;
        this.delProforma = proforma;
    };
    ProformaSearchComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.proformaService.deleteProforma(this.delProforma)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.proformaList = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.proformaList, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.proformaList, {
                        _id: _this.delProforma['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delProforma = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    ProformaSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-proforma-search',
            template: __webpack_require__("../../../../../src/app/proforma/proforma-search/proforma-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/proforma/proforma-search/proforma-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__proforma_service__["a" /* ProformaService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__area_area_service__["a" /* AreaService */]])
    ], ProformaSearchComponent);
    return ProformaSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proforma_routing_module__ = __webpack_require__("../../../../../src/app/proforma/proforma-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proforma_all_proforma_all_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-all/proforma-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proforma_create_proforma_create_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-create/proforma-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proforma_service__ = __webpack_require__("../../../../../src/app/proforma/proforma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__proforma_recent_proforma_recent_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-recent/proforma-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__proforma_edit_proforma_edit_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-edit/proforma-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__proforma_html_proforma_html_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-html/proforma-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__proforma_search_proforma_search_component__ = __webpack_require__("../../../../../src/app/proforma/proforma-search/proforma-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ProformaModule = (function () {
    function ProformaModule() {
    }
    ProformaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__proforma_routing_module__["a" /* ProformaRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__proforma_all_proforma_all_component__["a" /* ProformaAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__proforma_create_proforma_create_component__["a" /* ProformaCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__proforma_recent_proforma_recent_component__["a" /* ProformaRecentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__proforma_edit_proforma_edit_component__["a" /* ProformaEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__proforma_html_proforma_html_component__["a" /* ProformaHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_16__proforma_search_proforma_search_component__["a" /* ProformaSearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__proforma_html_proforma_html_component__["a" /* ProformaHtmlComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__proforma_service__["a" /* ProformaService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_11__area_area_service__["a" /* AreaService */],
                __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_15__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], ProformaModule);
    return ProformaModule;
}());



/***/ }),

/***/ "../../../../../src/app/proforma/proforma.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProformaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProformaService = (function () {
    function ProformaService(http) {
        this.http = http;
        this.proformaUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'proforma/';
    }
    ProformaService.prototype.removeProforma = function (proforma) {
        var url = this.proformaUrl + 'remove-proforma';
        return this.http.post(url, proforma).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.getProformaByCustomerId = function (id) {
        var url = this.proformaUrl + 'by-customer-id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.globalProformaSearchByCustomer = function (query) {
        var url = this.proformaUrl + 'global-search-by-customer/' + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.saveAutoProforma = function (data) {
        var url = this.proformaUrl + 'save-auto-proforma';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.getAllProforma = function (paginator) {
        var url = this.proformaUrl + 'all/page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.getRecentProforma = function () {
        var url = this.proformaUrl + 'recent';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.storeProforma = function (data) {
        var url = this.proformaUrl + 'create';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.downloadPDF = function (data) {
        var url = this.proformaUrl + 'generate/pdf';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.getProformaById = function (type, id) {
        var url = this.proformaUrl + type + '/id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.searchByUsername = function (data) {
        var url = this.proformaUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.saveRecentProforma = function (data) {
        var url = this.proformaUrl + 'recent/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.dropRecentProforma = function () {
        var url = this.proformaUrl + 'drop/recent/all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.checkIfRecentProformaExists = function () {
        var url = this.proformaUrl + 'recent_proforma/exists';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.getRecentProformaDB = function (paginator) {
        var url = this.proformaUrl + 'recent_proforma_db/paginator=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.cleanProforma = function () {
        var url = this.proformaUrl + 'clean_proforma';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.changeProformaStatus = function (data) {
        var url = this.proformaUrl + 'change_status';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    //get total of all products in product list
    ProformaService.prototype.getTotal = function (data) {
        var url = this.proformaUrl + 'product_list/total';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.buildAndSaveRecentProforma = function () {
        var url = this.proformaUrl + 'recent/build_and_save';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.savePartialPay = function (data) {
        var url = this.proformaUrl + 'recent/partial_pay/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.preGenerateProformaUpdate = function (data) {
        var url = this.proformaUrl + 'pre_generate_update';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.deleteProforma = function (proforma) {
        var url = this.proformaUrl + 'delete';
        return this.http.post(url, proforma).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.setPaidDateCounter = function (proforma) {
        var url = this.proformaUrl + 'set_paid_date_counter';
        return this.http.post(url, proforma).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.getPaidDateCounter = function () {
        var url = this.proformaUrl + 'get_paid_date_counter';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.getAllProformaCount = function () {
        var url = this.proformaUrl + 'all_proforma_count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ProformaService.prototype.createNewProforma = function (data) {
        var url = this.proformaUrl + 'create/new';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    ProformaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], ProformaService);
    return ProformaService;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-all/quotation-all.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-all/quotation-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\r\n    <section class=\"content-header\">\r\n      <div class=\"col-xs-12\">\r\n        <h1>\r\n          All Quotations\r\n        </h1>\r\n        <ol class=\"breadcrumb\">\r\n          <li><a [routerLink]=\"[ '/dashboard/home' ]\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\r\n          <li><a [routerLink]=\"[ '/dashboard/quotation/all' ]\"><i class=\"fa fa-dashboard\"></i> Quotation</a></li>\r\n          <li class=\"active\">All</li>\r\n        </ol>\r\n      </div>\r\n    </section>\r\n  \r\n    <section class=\"content\">\r\n      <!--  Page Content Here -->\r\n      <div class=\"col-xs-12\">\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n            <h3 class=\"box-title\">List Of All Quotation</h3>\r\n            <br>\r\n            <div class=\"box-tools\">\r\n              <div class=\"row\">\r\n                <!--<div class=\"col-md-offset-2 col-lg-4\">\r\n                  Filter : &nbsp;\r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">All</label>\r\n  \r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">Paid</label>\r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">Due</label>\r\n                  <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\r\n                                                     (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\r\n                </div>-->\r\n                <div class=\"col-lg-6\" style=\"float:right\">\r\n                  <div class=\"input-group\">\r\n                    <div class=\"input-group-btn\">\r\n                      <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\r\n                        <option value=\"username\">Username</option>\r\n                        <option value=\"mobile_number\">Mobile Number</option>\r\n                        <option value=\"area\">Area</option>\r\n                      </select>\r\n                    </div>\r\n                    <!-- /btn-group -->\r\n                    <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Quotations\"\r\n                           (input)=\"quickSearch($event.target.value)\">\r\n                  </div>\r\n                  <!-- /input-group -->\r\n                </div>\r\n              </div>\r\n              <br><br>\r\n              <!-- /.row -->\r\n              <!-- /.row -->\r\n            </div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <div class=\"box-body table-responsive no-padding\" *ngIf=\"quotationList\">\r\n            <table class=\"table table-hover\">\r\n              <tbody>\r\n              <tr>\r\n                <th>Username</th>\r\n                <th>Fullname</th>\r\n                <th>Mobile</th>\r\n                <th>Area</th>\r\n                <th>Product</th>\r\n                <!--<th>Due (INR)</th>\r\n                <th>Paid (INR)</th>-->\r\n                <th>Total (INR)</th>\r\n                <!--<th>Status</th>-->\r\n                <th>Quotation Generated On</th>\r\n                <!--<th>Last Transaction Date</th>-->\r\n                <!--<th>Change Status</th>-->\r\n                <th>Action</th>\r\n              </tr>\r\n              <tr\r\n                *ngFor=\"let quotation of quotationList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalQuotationCount }\">\r\n                <td>{{ quotation.customerData?.username }}</td>\r\n                <td>{{ quotation.customerData?.fullname }}</td>\r\n                <td>{{ quotation.customerData?.mobile_primary }}</td>\r\n                <td>{{ quotation.customerData?.areaData?.name }}</td>\r\n                <td><span *ngIf=\"quotation.customerData?.productData?.length>0\"> {{ quotation.customerData?.productData[0]?.name }} - <em *ngIf=\"quotation.customerData?.productData[0]?.rate\">{{ quotation.customerData?.productData[0]?.rate }} INR/month</em> </span>\r\n                    <small class=\"label bg-blue\">{{ quotation.customerData?.productData.length }}</small>\r\n                </td>\r\n                <!--<td>\r\n                  <small class=\"label bg-blue\">{{ quotation.customerData?.productData?.length }}</small>\r\n                </td>-->\r\n                <!--<td>{{ quotation?.amount_due }}</td>\r\n                <td>{{ quotation?.total - quotation?.amount_due }}</td>-->\r\n                <td>{{ quotation?.total }}</td>\r\n               <!-- <td>\r\n                  <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\"> {{ quotation.status }} </label>\r\n                  <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\"> {{ quotation.status }} </label>\r\n                  <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\"> {{ quotation.status\r\n                    }} </label>\r\n                </td>-->\r\n                <td>\r\n                  {{ quotation?.created_on | date: 'yMMMd' }}\r\n                </td>\r\n               <!-- <td *ngIf=\"quotation?.status=='Due' || quotation?.status=='Partially Paid'\">\r\n                  {{ quotation?.payment_due_date | date }}\r\n                </td>-->\r\n                <td *ngIf=\"quotation?.status=='Paid'\">\r\n                  {{ quotation?.paid_date | date }}\r\n                </td>\r\n               <!-- <td>\r\n                  <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',quotation)\"> Paid</button>\r\n                  <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',quotation)\"\r\n                          data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\r\n                  </button>\r\n                  <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',quotation)\"> Due</button>\r\n                </td>-->\r\n                <td>\r\n                  <a type=\"button\" class=\"btn btn-primary btn-xs\"\r\n                     [routerLink]=\"['/dashboard/quotation/view','all',quotation?._id]\">\r\n                    View</a>\r\n                </td>\r\n  \r\n                <!-- Modal for Partially payment -->\r\n                <!--<div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\r\n                     aria-labelledby=\"myModalLabel\">\r\n                  <div class=\"modal-dialog\" role=\"document\">\r\n                    <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\r\n                          aria-hidden=\"true\">&times;</span></button>\r\n                        <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\r\n                      </div>\r\n                      <div class=\"modal-body\" *ngIf=\"partialQuotation\">\r\n                        <div class=\"col-md-12\">\r\n                          <div class=\"col-md-6\">\r\n                            <h4 style=\"text-align: center\">Total: {{ partialQuotation?.total }} INR</h4>\r\n                            <h4 style=\"text-align: center\">Due: {{ partialQuotation?.amount_due }} INR</h4>\r\n                          </div>\r\n                          <div class=\"col-md-6\">\r\n                            <div *ngFor=\"let x of partialQuotation?.amount_partially_paid\">\r\n                              <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\r\n                              <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\r\n                              <br>\r\n                            </div>\r\n  \r\n                          </div>\r\n                        </div>\r\n                        <br>\r\n                        <form class=\"form-horizontal\" *ngIf=\"partialQuotation\">-->\r\n                          <!--amoount partially paid-->\r\n                         <!--<div class=\"form-group\">\r\n                            <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\r\n                              (INR) </label>\r\n                            <div class=\"col-sm-10\">\r\n                              <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\r\n                                     id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\r\n                            </div>\r\n                          </div>\r\n                        </form>\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\r\n                                data-dismiss=\"modal\">Save changes\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>-->\r\n              </tr>\r\n              </tbody>\r\n  \r\n            </table>\r\n          </div>\r\n          <!-- /.box-body -->\r\n        </div>\r\n        <!-- /.box -->\r\n        <div class=\"col-md-offset-4\">\r\n          <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-all/quotation-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuotationAllComponent = (function () {
    function QuotationAllComponent(customerService, router, quotationService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.quotationService = quotationService;
        this.productService = productService;
        this.areaService = areaService;
        this.quotationList = [];
        this.totalQuotationCount = 0;
        this.paginator = 1;
    }
    QuotationAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quotationService.getAllQuotationCount()
            .subscribe(function (res) {
            _this.totalQuotationCount = res.count;
        });
        this.getAllQuotation();
    };
    QuotationAllComponent.prototype.getAllQuotation = function () {
        var _this = this;
        this.quotationList = [];
        this.quotationService.getAllQuotation(this.paginator)
            .subscribe(function (res) {
            if (res.length == 0) {
                _this.quotationList = [];
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](res, function (quotation) {
                    var customer;
                    _this.customerService.getCustomerDetails(quotation.customer_id)
                        .subscribe(function (res) {
                        customer = res;
                        customer.productData = [];
                        if (quotation.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](quotation.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        quotation.customerData = customer;
                        _this.quotationList.push(quotation);
                    });
                });
            }
        }, function (err) {
            console.log('ERROR in getAllQuotation');
        });
    };
    QuotationAllComponent.prototype.toggleSearchStatus = function (event) {
        console.log(event);
    };
    QuotationAllComponent.prototype.filterChange = function (event) {
    };
    QuotationAllComponent.prototype.quickSearch = function (event) {
    };
    /*changeStatus(status: string, quotation: Quotation) {
      if (status == 'Paid') {
        this.setPaidDateCounter(quotation);
        quotation.status = 'Paid';
        //quotation.paid_date = Date.now();
        quotation.amount_due = 0;
      } else if (status == 'Due') {
        quotation.status = 'Due';
        //quotation.amount_due = quotation.total;
        //quotation.amount_partially_paid = [];
      } else if (status == 'Partially Paid') {
        this.partialQuotation = quotation;
      }
  
      quotation['type'] = 'all';
  
      this.quotationService.changeQuotationStatus(quotation)
        .subscribe(
          (res) => {
  
          }
        )
    }*/
    //  for pagination
    QuotationAllComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getAllQuotation();
    };
    QuotationAllComponent.prototype.setPaidDateCounter = function (quotation) {
        this.quotationService.setPaidDateCounter(quotation)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    QuotationAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-all',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], QuotationAllComponent);
    return QuotationAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-create/quotation-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-create/quotation-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 3000px;\">\r\n    <section class=\" content-header \">\r\n      <div class=\"col-xs-12\">\r\n        <h1>\r\n          Create New Quotation\r\n        </h1>\r\n        <ol class=\"breadcrumb \">\r\n          <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\r\n          <li><a [routerLink]=\"[ '/dashboard/quotation/create' ] \"><i class=\"fa fa-dashboard \"></i> Quotations</a></li>\r\n          <li class=\"active \">Create</li>\r\n        </ol>\r\n      </div>\r\n    </section>\r\n    <section class=\"content \">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box box-primary\" style=\"height:2000px\">\r\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">New Quotation Created Successfully !!</div>\r\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\r\n          <!--  Page Content Here -->\r\n          <br>\r\n          <!--customer list-->\r\n          <form class=\"form-horizontal \">\r\n            <div class=\"col-md-12\">\r\n              <div class=\" form-group \">\r\n                <label class=\"col-sm-2 control-label \">Choose Customer: </label>\r\n                <div class=\"col-sm-10 \">\r\n                  <div>\r\n                    <select required *ngIf=\"customerList\" class=\"form-control\" (change)=\"getCustomer($event)\">\r\n                      <option *ngFor=\"let customer of customerList\" value=\"{{ customer._id }}\">\r\n                        <strong> {{ customer.username }} </strong> - <em> {{ customer.fullname }} </em>\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <br><br>\r\n          </form>\r\n  \r\n  \r\n          <form class=\"form-horizontal \" style=\"margin-top:30px\" [formGroup]=\"quotationCreateForm\"\r\n                (submit)=\"submitQuotationCreateForm()\">\r\n            <div class=\"col-md-12\" *ngIf=\"resCustomer\">\r\n              <!--username-->\r\n              <div class=\" form-group \">\r\n                <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\r\n                         placeholder=\"Username \" readonly>\r\n                </div>\r\n              </div>\r\n              <!--email-->\r\n              <div class=\"form-group \">\r\n                <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n              <!--fullname-->\r\n              <div class=\"form-group \">\r\n                <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\r\n                         placeholder=\"Fullname \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_primary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\r\n                         placeholder=\"Mobile primary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_secondary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\r\n                         placeholder=\"Mobile secondary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--location-->\r\n              <div class=\"form-group \">\r\n                <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\r\n                         placeholder=\"location \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--area-->\r\n              <div class=\"form-group \">\r\n                <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--city-->\r\n              <div class=\"form-group \">\r\n                <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--<div class=\"form-group \">\r\n                <label for=\"status\" class=\"col-sm-2 control-label \">Status</label>\r\n                <div class=\"col-sm-10\">\r\n                  <label class=\"label label-danger\">Due</label>\r\n                </div>\r\n              </div>-->\r\n              <br>\r\n  \r\n              <!--quotation_created_date-->\r\n              <div class=\"form-group\">\r\n                <label for=\"date\" class=\"col-sm-2 control-label\">Quotation Date</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"date\" formControlName=\"date\">\r\n                </div>\r\n              </div>\r\n  \r\n              <!--total amount-->\r\n              <div class=\"form-group \">\r\n                <label for=\"amount_due_minus_discount \" class=\"col-sm-2 control-label \">Total (INR)</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"number \" formControlName=\"total\" class=\"form-control \" id=\"amount_due_minus_discount \"\r\n                         placeholder=\"total \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--discount-->\r\n              <!--<div class=\"form-group \">\r\n              <label for=\"discount \" class=\"col-sm-2 control-label \">Discount</label>\r\n              <div class=\"col-sm-10\">\r\n              <input type=\"number \" (keyup)=\"updateDiscount($event.target.value)\" formControlName=\"discount\"\r\n              class=\"form-control \" id=\"discount \" placeholder=\"discount \" &gt;>\r\n              </div>\r\n              </div>-->\r\n\r\n              <!--description-->\r\n                <div class=\"form-group\">\r\n                    <label for=\"rate\" class=\"col-sm-2 control-label \">Description</label>\r\n                    <div class=\"col-sm-10 \">\r\n                      <textarea formControlName=\"description\" class=\"form-control\"></textarea>\r\n                    </div>\r\n                  </div>\r\n  \r\n              <!--product list-->\r\n              <div class=\"form-group \" *ngFor=\"let item of createRange(allProductCounter);let i=index\">\r\n                <label class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <div class=\"productSelectBox\">\r\n                    <select required *ngIf=\"productList\" class=\"form-control\" (change)=\"onProductChange($event,i)\">\r\n                      <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\r\n                        {{ product.name }} - <em> {{ product.rate }} INR/month </em>\r\n                      </option>\r\n                    </select>\r\n                    <button *ngIf=\"i>0\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\" (click)=\"removeProduct(i)\">\r\n                      <i\r\n                        class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <button (click)=\"addProduct()\" type=\"button\" class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\"\r\n                                                                                                 aria-hidden=\"true\"></i>\r\n                &nbsp; Add Product\r\n              </button>\r\n  \r\n              <div class=\"form-group \">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                  <button type=\"submit\" class=\"btn btn-success btn-lg\">Save</button>\r\n                  <button type=\"button\" class=\"btn btn-danger btn-lg\">Cancel</button>\r\n  \r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <hr>\r\n            <div class=\"col-md-12\" *ngIf=\"isSaved\">\r\n              <div class=\"alert alert-success\" role=\"alert\">Quotation Created Successfully !!</div>\r\n              <a class=\"btn btn-lg btn-info\" [routerLink]=\"['/dashboard/quotation/display/all/',resultQuotation._id]\">Generate Quotation Now</a>\r\n            </div>\r\n  \r\n          </form>\r\n        </div>\r\n  \r\n      </div>\r\n    </section>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-create/quotation-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuotationCreateComponent = (function () {
    function QuotationCreateComponent(quotationService, fb, customerService, productService, areaService) {
        this.quotationService = quotationService;
        this.fb = fb;
        this.customerService = customerService;
        this.productService = productService;
        this.areaService = areaService;
        this.productList = [];
        this.showSuccess = false;
        this.showError = false;
        this.customerList = [];
        this.allProductCounter = 1;
        this.allProducts = [];
        this.isSaved = false;
    }
    QuotationCreateComponent.prototype.ngOnInit = function () {
        this.buildForm();
        this.getProductList();
        this.getAllCustomers();
    };
    QuotationCreateComponent.prototype.buildForm = function () {
        var date = Date.now();
        this.quotationCreateForm = this.fb.group({
            customer_id: [''],
            username: [''],
            email: [''],
            fullname: [''],
            location: [''],
            area: [''],
            city: [''],
            mobile_primary: [''],
            mobile_secondary: [''],
            //amount_due: [''],
            total: [''],
            discount: [0],
            date: [date],
            // status: ['Due'],
            productList: []
        });
    };
    QuotationCreateComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.customerService.getAllCustomers('all')
            .subscribe(function (res) {
            _this.customerList = res;
        }, function (err) {
        });
    };
    QuotationCreateComponent.prototype.getCustomer = function (event) {
        var _this = this;
        this.resCustomer = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.customerList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.quotationCreateForm.patchValue({
            username: this.resCustomer.username,
            email: this.resCustomer.email,
            fullname: this.resCustomer.fullname,
            location: this.resCustomer.location,
            city: this.resCustomer.city,
            mobile_primary: this.resCustomer.mobile_primary,
            mobile_secondary: this.resCustomer.mobile_secondary,
        });
        this.resCustomer.productData = [];
        if (this.resCustomer.area) {
            this.areaService.getAreaById(this.resCustomer.area)
                .subscribe(function (res) {
                _this.resCustomer.areaData = res;
                _this.quotationCreateForm.patchValue({
                    area: _this.resCustomer.areaData.name
                });
            }, function (err) {
            });
        }
    };
    QuotationCreateComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        }, function () {
            _this.allProducts.push(_this.productList[0]);
            _this.quotationCreateForm.patchValue({
                total: _this.productList[0].rate
            });
        });
    };
    QuotationCreateComponent.prototype.removeProduct = function (index) {
        this.allProductCounter--;
        this.allProducts.splice(index, 1);
    };
    QuotationCreateComponent.prototype.addProduct = function () {
        this.allProductCounter++;
        var newProduct = this.productList[0];
        this.allProducts.push(newProduct);
        this.updateTotal();
    };
    QuotationCreateComponent.prototype.onProductChange = function (event, index) {
        var result = __WEBPACK_IMPORTED_MODULE_5_underscore__["find"](this.productList, function (item) {
            return item['_id'] == event.target.value;
        });
        this.allProducts[index] = result;
        this.updateTotal();
    };
    QuotationCreateComponent.prototype.createRange = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    QuotationCreateComponent.prototype.updateTotal = function () {
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](this.allProducts, function (product) {
            total += product['rate'];
        });
        this.quotationCreateForm.patchValue({
            total: total
        });
    };
    QuotationCreateComponent.prototype.submitQuotationCreateForm = function () {
        var _this = this;
        var product_list = __WEBPACK_IMPORTED_MODULE_5_underscore__["pluck"](this.allProducts, '_id');
        this.quotationCreateForm.patchValue({
            productList: product_list,
            customer_id: this.resCustomer['_id']
        });
        this.quotationService.createNewQuotation(this.quotationCreateForm.value)
            .subscribe(function (res) {
            _this.resultQuotation = res;
            _this.isSaved = true;
        });
    };
    QuotationCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-create',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_2__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__area_area_service__["a" /* AreaService */]])
    ], QuotationCreateComponent);
    return QuotationCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-edit/quotation-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-wrapper {\n    min-height: 1200px;\n    /*font-size: 20px;*/\n}\n\n.box-primary {\n    padding: 30px 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-edit/quotation-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showForm\" class=\"content-wrapper\" style=\"height: 2000px;\">\r\n    <section class=\" content-header \">\r\n      <div class=\"col-xs-12\">\r\n        <h1>\r\n          Quotation Details of <em>{{ quotation.customerData?.username }}</em>\r\n          <small>for the month of {{ quotation?.created_on | date:'MMMM'}}</small>\r\n        </h1>\r\n        <ol class=\"breadcrumb \">\r\n          <li><a [routerLink]=\"[ '/dashboard/home' ] \"><i class=\"fa fa-dashboard \"></i> Sofkul</a></li>\r\n          <li><a [routerLink]=\"[ '/dashboard/quotation/all' ] \"><i class=\"fa fa-dashboard \"></i> Quotation</a></li>\r\n          <li class=\"active \">Edit</li>\r\n        </ol>\r\n      </div>\r\n    </section>\r\n    <section class=\"content \">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"box box-primary\" *ngIf=\"quotation\">\r\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"showSuccess\">Quotation Data Updated Successfully !!</div>\r\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showError\">ERROR !! Please Try Again.</div>\r\n          <!--  Page Content Here -->\r\n          <form class=\"form-horizontal \" [formGroup]=\"quotationDetailForm\" *ngIf=\"quotation\"\r\n                (submit)=\"submitQuotationEditForm()\">\r\n            <div class=\"col-md-6\">\r\n              <!--username-->\r\n              <div class=\" form-group \">\r\n                <label for=\"username \" class=\"col-sm-2 control-label \">Username</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"username\" type=\"text \" class=\"form-control \" id=\"username \"\r\n                         placeholder=\"Username \" readonly>\r\n                </div>\r\n              </div>\r\n              <!--email-->\r\n              <div class=\"form-group \">\r\n                <label for=\"email \" class=\"col-sm-2 control-label \">Email</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"email\" type=\"email \" class=\"form-control \" id=\"email \" placeholder=\"Email \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n              <!--fullname-->\r\n              <div class=\"form-group \">\r\n                <label for=\"fullname \" class=\"col-sm-2 control-label \">Fullname</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"fullname\" type=\"text \" class=\"form-control \" id=\"fullname \"\r\n                         placeholder=\"Fullname \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_primary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_primary \" class=\"col-sm-2 control-label \">Mobile Primary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_primary\" type=\"text \" class=\"form-control \" id=\"mobile_primary \"\r\n                         placeholder=\"Mobile primary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--mobile_secondary-->\r\n              <div class=\"form-group \">\r\n                <label for=\"mobile_secondary \" class=\"col-sm-2 control-label \">Mobile Secondary</label>\r\n                <div class=\"col-sm-10 \">\r\n                  <input formControlName=\"mobile_secondary\" type=\"text \" class=\"form-control \" id=\"mobile_secondary \"\r\n                         placeholder=\"Mobile secondary \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--location-->\r\n              <div class=\"form-group \">\r\n                <label for=\"location \" class=\"col-sm-2 control-label \">Location</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"location\" class=\"form-control \" id=\"location \"\r\n                         placeholder=\"location \" readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--area-->\r\n              <div class=\"form-group \">\r\n                <label for=\"area \" class=\"col-sm-2 control-label \">Area</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"area\" class=\"form-control \" id=\"area \" placeholder=\"area \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--city-->\r\n              <div class=\"form-group \">\r\n                <label for=\"city \" class=\"col-sm-2 control-label \">City</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text \" formControlName=\"city\" class=\"form-control \" id=\"city \" placeholder=\"city \"\r\n                         readonly>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <div class=\"col-md-6\">\r\n              <!--choose status-->\r\n              <!--<div class=\"form-group \">\r\n                <label for=\"status \" class=\"col-sm-6 control-label \">Payment Status</label>\r\n                <div class=\"col-sm-6\">\r\n                  <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\">{{ quotation.status }}</label>\r\n                  <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\">{{ quotation.status }}</label>\r\n                  <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\">{{ quotation.status }}</label>\r\n                </div>\r\n              </div>-->\r\n  \r\n              <!--invoice_created_date-->\r\n              <!--<div class=\"form-group \">-->\r\n              <!--<label for=\"invoice_created_date \" class=\"col-sm-2 control-label \">Invoice created on</label>-->\r\n              <!--<div class=\"col-sm-10\">-->\r\n              <!--<input type=\"date\" formControlName=\"invoice_created_date\">-->\r\n              <!--</div>-->\r\n              <!--</div>-->\r\n  \r\n              <!--payment_due_date-->\r\n              <!--<div class=\"form-group \" *ngIf=\"paymentStatus=='Due'\">\r\n                  <label for=\"payment_due_date \" class=\"col-sm-2 control-label \">Payment Due Date</label>\r\n                  <div class=\"col-sm-10\">\r\n                      <input type=\"date\" formControlName=\"payment_due_date\" value=\"currentDate.toString('Y-m-d')\">\r\n                  </div>\r\n              </div>-->\r\n  \r\n              <!--for partial payment only-->\r\n              <div class=\"form-group \" *ngIf=\"quotation.status=='Partially Paid' \">\r\n                <div *ngFor=\"let x of quotation?.amount_partially_paid;let i = index\">\r\n                  <label for=\"status \" class=\"col-sm-6 control-label \">Partial Payment : [{{ i+1 }}] </label>\r\n                  <div class=\"col-sm-6\">\r\n                    <h5 style=\"text-align: center\">Date: {{ x?.date | date }} BDT</h5>\r\n                    <h5 style=\"text-align: center\">Partial Pay: {{ x?.amount }} BDT</h5>\r\n                    <br>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n              <!--payment paid / partially paid date-->\r\n              <div class=\"form-group \" *ngIf=\"quotation.status=='Paid' && paymentStatus!='Due'\">\r\n                <label for=\"paid \" class=\"col-sm-2 control-label \">Payment Paid Date</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"date\" formControlName=\"paid_date\">\r\n                </div>\r\n              </div>\r\n  \r\n              <!--amoount partially paid-->\r\n              <!--<div class=\"form-group \" *ngIf=\"quotation.status=='Partially Paid'\">-->\r\n              <!--<label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid (BDT) </label>-->\r\n              <!--<div class=\"col-sm-10\">-->\r\n              <!--<input type=\"text \" (keyup)=\"getPartiallyPaid($event)\" formControlName=\"amount_partially_paid\" class=\"form-control \" id=\"amount_partially_paid \" placeholder=\"amount partially paid\">-->\r\n              <!--</div>-->\r\n              <!--</div>-->\r\n  \r\n              <!--amount_due-->\r\n              <!--<div class=\"form-group \" *ngIf=\"quotation.status!='Paid'\">\r\n                <label for=\"amount_due \" class=\"col-sm-2 control-label \">Amount Due (BDT) </label>\r\n                <div class=\"col-sm-10\">\r\n                  <input *ngIf=\"quotation.status=='Due'\" type=\"text \" formControlName=\"amount_due\" class=\"form-control \"\r\n                         id=\"amount_due \" placeholder=\"amount due\" readonly>\r\n                  <input *ngIf=\"quotation.status=='Partially Paid'\" type=\"text \" formControlName=\"amount_due\"\r\n                         class=\"form-control \" id=\"amount_due \" placeholder=\"amount due\" readonly>\r\n                </div>\r\n              </div>-->\r\n  \r\n  \r\n              <!--discount-->\r\n              <div class=\"form-group \">\r\n                <label for=\"discount \" class=\"col-sm-2 control-label\">Discount (INR) </label>\r\n                <div class=\"col-sm-10\">\r\n                  <input (keyup)=\"getDiscount($event)\" type=\"text\" formControlName=\"discount\" class=\"form-control \"\r\n                         id=\"discount \" placeholder=\"discount\">\r\n                </div>\r\n              </div>\r\n  \r\n              <!--total-->\r\n              <div class=\"form-group \">\r\n                <label for=\"discount \" class=\"col-sm-2 control-label \">Total (INR) </label>\r\n                <div class=\"col-sm-10\">\r\n                  <input *ngIf=\"quotation.status!='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\r\n                         id=\"total \" placeholder=\"total\">\r\n                  <input *ngIf=\"quotation.status=='Paid'\" type=\"text \" formControlName=\"total\" class=\"form-control \"\r\n                         id=\"total \" placeholder=\"total\" readonly>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <!--for products already list-->\r\n                <div class=\"form-group \" *ngFor=\"let myProduct of quotation.customerData?.productData;let i=index\">\r\n                  <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+1 }}]</label>\r\n                  <div class=\"col-sm-10 \">\r\n                    <div class=\"productSelectBox\">\r\n                      <select (change)=\"onProductChange($event,i,'my')\" required *ngIf=\"productList\" class=\"form-control\"\r\n                              style=\"margin-bottom:10px\">\r\n                        <option [selected]=\"product._id == myProduct._id\" *ngFor=\"let product of productList\"\r\n                                value=\"{{ product._id }}\">\r\n                          {{ product.name }} - <em> {{ product.rate }} INR/month </em>\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n                <!--for new additional products-->\r\n                <div class=\"form-group \" *ngFor=\"let newProduct of additionalProducts;let i=index\">\r\n                  <label for=\"\" class=\"col-sm-2 control-label \">Product [{{ i+quotation.customerData?.productData.length+1\r\n                    }}]</label>\r\n                  <div class=\"col-sm-10 \">\r\n                    <div class=\"productSelectBox\">\r\n                      <select (change)=\"onProductChange($event,i,'add')\" required *ngIf=\"productList\" class=\"form-control\"\r\n                              style=\"margin-bottom:10px\">\r\n                        <option *ngFor=\"let product of productList\" value=\"{{ product._id }}\">\r\n                          {{ product.name }} - <em> {{ product.rate }} INR/month </em></option>\r\n                      </select>\r\n                      <button *ngIf=\"quotation.status!='Paid'\" type=\"button\" class=\"pull-right btn btn-danger btn-xs\"\r\n                              (click)=\"removeProduct(i)\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <button *ngIf=\"quotation.status!='Paid'\" (click)=\"addProduct()\" type=\"button\"\r\n                        class=\"pull-right btn btn-success\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; Add\r\n                  Product\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"col-sm-offset-1 col-sm-10 \" style=\"margin-top:10px\">\r\n                <!--<button type=\"submit \" class=\"btn btn-success\">Save</button>-->\r\n                <button type=\"submit\" class=\"btn btn-info btn-lg\">Generate Quotation</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-edit/quotation-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuotationEditComponent = (function () {
    function QuotationEditComponent(areaService, customerService, elementRef, productService, fb, quotationService, route, router) {
        this.areaService = areaService;
        this.customerService = customerService;
        this.elementRef = elementRef;
        this.productService = productService;
        this.fb = fb;
        this.quotationService = quotationService;
        this.route = route;
        this.router = router;
        this.productList = [];
        this.additionalProducts = [];
        this.addProductCounter = 0;
        this.allProductsAdd = [];
        this.productSuggestions = [];
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]('en-US');
        this.paymentStatus = 'Due';
        this.showForm = false;
    }
    QuotationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProductList();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (_this.id) {
                _this.quotationService.getQuotationById(_this.type, _this.id)
                    .subscribe(function (res) {
                    _this.quotation = res;
                    _this.allProductsAdd = _this.quotation.productList;
                    _this.buildForm();
                }, function (err) {
                });
            }
        });
    };
    QuotationEditComponent.prototype.buildForm = function () {
        var _this = this;
        this.customerService.getCustomerDetails(this.quotation.customer_id)
            .subscribe(function (res) {
            _this.quotation.customerData = res;
            _this.quotation.customerData.productData = [];
            // let total_partially_paid = 0;
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](_this.quotation.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    _this.quotation.customerData.productData.push(res);
                });
                //  total_partially_paid += item['amount'];
            });
            _this.quotationDetailForm = _this.fb.group({
                username: [res['username']],
                email: [res['email']],
                fullname: [res['fullname']],
                location: [res['location']],
                area: [''],
                city: [res['city']],
                mobile_primary: [res['mobile_primary']],
                mobile_secondary: [res['mobile_secondary']],
                payment_due_date: [_this.quotation['payment_due_date']],
                amount_due: [_this.quotation['amount_due']],
                status: [_this.quotation['status']],
                total: [_this.quotation['total']],
                discount: [_this.quotation['discount']],
                quotation_created_date: [_this.quotation['quotation_created_date']],
                paid_date: [_this.quotation['paid_date']],
            });
            _this.areaService.getAreaById(res['area'])
                .subscribe(function (res) {
                _this.quotationDetailForm.patchValue({
                    area: res['name']
                });
            });
            _this.showForm = true;
        });
    };
    QuotationEditComponent.prototype.getProductSuggestions = function (event) {
        var _this = this;
        var data = {
            text: event.query
        };
        this.productService.searchByName(data)
            .subscribe(function (res) {
            _this.productSuggestions = res;
        }, function (err) {
        });
    };
    QuotationEditComponent.prototype.getProductList = function () {
        var _this = this;
        this.productList = [];
        this.productService.getAllProduct()
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](res, function (item) {
                if (item['status']) {
                    _this.productList.push(item);
                }
            });
        }, function (err) {
            console.log("ERROR from productList");
        });
    };
    QuotationEditComponent.prototype.addProduct = function () {
        var newProduct = this.productList[0];
        this.additionalProducts.push(newProduct);
        this.allProductsAdd.push(newProduct._id);
        this.updatePayments();
    };
    QuotationEditComponent.prototype.removeProduct = function (index) {
        var delIndex = this.allProductsAdd.indexOf(this.additionalProducts[index]);
        this.allProductsAdd.splice(delIndex, 1);
        this.additionalProducts.splice(index, 1);
        this.updatePayments();
    };
    QuotationEditComponent.prototype.onProductChange = function (event, index, mode) {
        if (mode != 'my') {
            index = index + this.quotation.customerData.productData.length;
        }
        this.allProductsAdd[index] = event.target.value;
        this.updatePayments();
    };
    QuotationEditComponent.prototype.submitQuotationEditForm = function () {
        var _this = this;
        var data = {};
        data = {
            id: this.id,
            amount_due: this.quotationDetailForm.value.amount_due,
            total: this.quotationDetailForm.value.total,
            discount: this.quotationDetailForm.value.discount,
            productList: this.allProductsAdd,
            //amount_partially_paid: this.quotation.amount_partially_paid,
            type: this.type
        };
        this.quotationService.preGenerateQuotationUpdate(data)
            .subscribe(function (res) {
            _this.router.navigate(['dashboard/quotation/display', _this.type, _this.id]);
        }, function (err) {
            console.log('Error in Pre Generator');
        });
    };
    QuotationEditComponent.prototype.changeStatus = function (event) {
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'Paid') {
            var currentDate = this.datePipe.transform(Date.now(), 'y-MM-dd');
            this.quotationDetailForm.patchValue({
                paid_date: currentDate
            });
        }
    };
    QuotationEditComponent.prototype.getPartiallyPaid = function (event) {
        this.quotationDetailForm.patchValue({
            amount_partially_paid: event.target.value,
            amount_due: this.quotation.amount_due - event.target.value
        });
    };
    QuotationEditComponent.prototype.getDiscount = function (event) {
        this.quotationDetailForm.patchValue({
            total: this.quotationDetailForm.value.amount_due - event.target.value
        });
    };
    QuotationEditComponent.prototype.updatePayments = function () {
        var _this = this;
        var total = 0;
        __WEBPACK_IMPORTED_MODULE_7_underscore__["each"](this.allProductsAdd, function (item) {
            var product = __WEBPACK_IMPORTED_MODULE_7_underscore__["findWhere"](_this.productList, { _id: item });
            total += product.rate;
        });
        this.quotationDetailForm.patchValue({
            total: total,
            discount: 0,
            amount_due: total
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('productSelectBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], QuotationEditComponent.prototype, "productSelectBox", void 0);
    QuotationEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-quotation-edit',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_5__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]])
    ], QuotationEditComponent);
    return QuotationEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-html/quotation-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#quotation_box {\n  background-color: #fff;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n#quotation_table {\n  background-color: #fff;\n  font-size:none;\n}\n\n#company_logo {\n  margin-top: 50px;\n  margin-left: 10px;\n  width: 210px;\n  height: 180px;\n}\n\n.row-divide {\n  border-bottom: 4px solid #d2d6de;\n}\n\n#quotation_box {\n  font-weight: 550;\n}\n\n.footer {\n   \n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color:none;\n    color: rgb(245, 163, 10);\n    text-align:center;\n}\n\n.footer-header{\n  color: black;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-html/quotation-html.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 2000px;margin-left: 0vw;\">\n  <section class=\" content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Quotation Display\n      </h1>\n      <ol class=\"breadcrumb \">\n        <li><a [routerLink]=\"[ '/' ] \"><i class=\"fa fa-dashboard \"></i> InvoiceApp</a></li>\n        <li><a [routerLink]=\"[ '/' ] \"><i class=\"fa fa-dashboard \"></i> Quotation</a></li>\n        <li class=\"active \">Display</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content \" *ngIf=\"quotation\">\n    <div class=\"col-xs-12\" id=\"quotation_main\">\n      <div id=\"quotation_body\">\n        <!--quotation display starts here-->\n        <div class=\"\" id=\"quotation_box\" style=\"margin-top:10px\" #quotationBox>\n          <!--head row-->\n          <div class=\"row \">\n            <!--left section-->\n            <div class=\"col-md-6\">\n              <img src=\"/assets/dist/img/Aquality.jpg\" style=\"width:40%; height:50%;\" id=\"company_logo\">\n            </div>\n            <!--right section-->\n            <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left; margin-top:8px;\">\n              <h3 style=\"font-size: 60px;\"></h3><br>\n\n            </div>\n\n            \n              <div class=row style=\"background-color:darkslategray; margin-top:150px; width:100%; height:200px;margin-left: 0vw;\">\n                <div class=\"col-md-4 col-xs-4\" >\n                  <div class=\"\" style=\"color:white; margin-left:40px;margin-top:20px; padding:10px; font-size:16px; \">\n                      <span> Quotation for: </span><br>\n                      <strong> {{ quotation.customerData?.fullname }} </strong><br>\n                      <!--<span> {{ quotation.customerData?.location }} </span><br>-->\n                      <span> {{ quotation.customerData?.city }} </span><br>\n                      <span> India </span>\n                      <span> {{ quotation.customerData?.mobile_primary }} </span><br>\n                      <span> {{ quotation.customerData?.email }} </span><br>\n                      <!--<span> {{ quotation.customerData?.area }} </span><br>-->\n                      </div>\n                </div>\n                <div class=\"col-md-offset-2 col-md-6 col-xs-2\">\n                  <div style=\"padding-top:40px;\">\n                    <span style=\"color:rgb(245, 163, 10); font-size:70px;\">QUOTATION</span>\n                    </div>\n                </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                    <span> Date: {{ quotation.created_on | date }} </span>\n                </div>\n                <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                    <span> Valid upto: DD/MM/YYYY</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> Quotation ref: #123456</span>\n                    </div>\n              </div>\n              <div class=\"row\" style=\"margin-left: 0vw; background-color:black;width:100%;color:#fff; height:60px; text-align: -webkit-center; font-size:15px;\">\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\" >\n                      \n                      <span> <strong>Quotation Number: </strong> #001</span>\n                  </div>\n                  <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                      <span> <strong>Mobile Number: </strong> {{ quotation.customerData?.mobile_primary }}</span>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4\" style=\"margin-top:17px;\">\n                        <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    \n                  \n                      </div>\n                </div>\n\n              <!--table-->\n              <div id=\"quotation_table\">\n              <table class=\"table table-hover table-responsive\" *ngIf=\"quotation.productData\" style=\"width:100%; height:200px;margin-left: 0vw;\" >\n                  <thead style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                    <tr>\n                    \n                      <th>ITEM DESCRIPTION</th>\n                      <th>GST</th>\n                      <th>UNIT PRICE</th>\n                      <th style=\"padding-left:200px;\">QUANTITY</th>\n                      <th style=\"padding-left:100px;\">AMOUNT</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let product of quotation.productData;let i=index\"\n                    [ngClass]=\"i==quotation.productData.length-1 ? 'row-divide' : '' \">\n                    <td>{{ product?.name }}</td>\n                    <td> {{ product?.vat }}%</td>\n                    <td>INR. {{ product?.rate }}</td>\n                      <td style=\"padding-left:200px; width:30%;\">1</td>\n                      <td style=\"padding-left:100px; background-color:#ffe6e6; width:20%;\">INR. {{ product?.amount_with_vat * 1 }}</td>\n                    </tr>\n                    <tr>\n                        \n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td style=\"padding-left:200px;\">\n                          <strong>SUB TOTAL: </strong>\n                        </td>\n                        <td style=\"padding-left:100px; background-color:#ffe6e6;width:20%;\">\n                          INR. {{ quotation.total }}\n                        </td>\n                      </tr>\n\n                      <tr *ngFor=\"let x of quotation?.amount_partially_paid;let i = index\">\n                          <td></td>\n                          \n                        \n                          <td>\n                            <strong>Payment On : {{ x.date | date }} </strong>\n                          </td>\n                          <td>\n                            INR. {{ x.amount }}\n                          </td>\n                        </tr>\n            \n                        \n                  \n                          <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td style=\"padding-left:200px;\">\n                                Transport\n                              </td>\n                              <td style=\"padding-left:100px; background-color:#ffe6e6;\">\n                                INR. {{ quotation.discount }}\n                              </td>\n    \n                            </tr>\n\n                            <tr>\n                                <td></td>\n                                <td></td>\n                                <td></td>\n                                <td style=\"background-color:darkslategray; color:#fff;padding-left:200px;\">\n                                  GRAND TOTAL\n                                </td>\n                                <td style=\"background-color:rgb(245, 163, 10); color:#fff;padding-left:100px; \">\n                                  INR. {{ quotation.total }}\n                                </td>\n      \n                              </tr>\n                        <!--<tr *ngIf=\"quotation.status == 'Paid'\">\n                          <td></td>\n                          <td></td>-->\n                          <!--<td></td>-->\n                          <!--<td>\n                            <strong>Amount Paid (INR)</strong>\n                          </td>\n                          <td>\n                            <strong>INR. {{ quotation.total }}</strong>\n                          </td>-->\n                        <!--</tr>-->\n                        \n                        <tr>\n                          <td></td>\n                          <td></td>\n                          <td></td>\n                          <td style=\"background-color:darkslategray; color:#fff; padding-left:200px;\">\n                            <strong>TOTAL(in words)</strong>\n                          </td>\n                          <td style=\"background-color:rgb(245, 163, 10); color:#fff;\">\n                            <strong style=\"text-transform: capitalize;\"> {{ finalTotalWords }} INR only</strong>\n                          </td>\n                        </tr>\n                    \n                  </tbody>\n                </table>\n                </div>\n                \n                        \n                      <div class=\"row\">\n                      <div class=\"col-md-6 col-xs-6\">\n                      <h3 class=\"well\">Bank Details</h3>\n                       <div class=\"table-responsive\">          \n                    <table class=\"table table-hover\">\n                      <thead>\n                        <tr>\n                          <th></th>\n                          <th>AQUALITY Water Solutions Pvt Ltd</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          \n                          <td></td>\n                          <td>A/c No.</td>\n                          <td><strong>111 905 000 338</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>Bank</td>\n                          <td><strong>ICICI Bank - Filmnagar Br.</strong></td>\n                        </tr>\n                        <tr>\n                          \n                          <td></td>\n                          <td>IFSC Code</td>\n                          <td><strong>ICIC 000 1119</strong></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                          \n                  </div>\n                  </div>\n\n                  <div class=\"col-md-6 col-xs-6\" style=\"margin-top:50px;\">\n                    <div style=\"text-align: -webkit-center; margin-top:20%; \">\n                       Name & Signature\n                    </div>\n                  </div>\n                  </div><br> <br>\n                  \n\n                 <div class=\"container-fluid\" style=\"background-color:none;\">\n                  <div class=\"footer\">\n                    <p><strong>THANK YOU FOR YOUR BUSINESS</strong> </p><hr>\n                    <div class=\"footer-header\">\n                      TERMS AND CONDITION\n\n                    </div>\n                  </div>\n\n                 </div>\n          \n\n            <!--<div class=\"col-md-6\" style=\"text-align: -webkit-left\">\n\n              <div>\n                <strong>Aquality Water Solutions Pvt Ltd.</strong><br>\n                <span># 8-1-284/OU/385/1&2, 4th Floor Bait-ul-Rida</span><br>\n                <span>OU Colony Shaikpet, Lanco hills Lane</span><br>\n                <span>Hyderabad, Telangana State - 500008</span><br>\n                <span>India</span><br><br>\n\n                <span>Phone: +91 40 6888 8486</span><br>\n                <span>Mobile: 709 389 8486</span><br>\n                <span>www.aquality.in</span>\n                <span>Email: accounts@aquality.in  | info@aquality.in</span>\n                <span></span>\n              </div>\n            </div>\n      \n            \n                <div class=\"col-md-offset-2 col-md-4\" style=\"text-align: -webkit-left;line-height: 2;\">\n                    <span> <strong>Date: </strong> {{ quotation.created_on | date }} </span><br>\n                    <span> <strong>Quotation ref: </strong> #123456</span><br><br>\n                    \n                  \n                    <span> <strong>Valid upto: </strong> DD/MM/YYYY</span><br>\n                    <span> <strong>Prepared by: </strong> Aquality</span><br>\n                    <span> <strong>Mobile Number: </strong> {{ quotation.customerData?.mobile_primary }}</span><br>\n                  <span> <strong>Quotation Number: </strong> #001</span><br>\n                  <span> <strong>Quotation Date: </strong> {{ quotation.created_on | date }} </span><br>\n                  <span> <strong>Payment Due: </strong> {{ quotation.created_on | date }}</span> <br>\n                  <span> <strong>Amount Due (INR): </strong> INR. {{ quotation.amount_due }}</span><br>\n                </div>-->\n\n                \n              \n          </div>\n          <hr>\n\n          <!--middle row-->\n          \n          \n        </div>\n        <!--table section-->\n        \n      </div>\n      <div style=\"margin-top:15px\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"downloadPDF()\"><i class=\"fa fa-download\"\n                                                                                 aria-hidden=\"true\"></i>&nbsp;Download\n          as PDF\n        </button>\n        <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>&nbsp;Export\n          as CSV\n        </button>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-html/quotation-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuotationHtmlComponent = (function () {
    function QuotationHtmlComponent(generalService, productService, customerService, quotationService, route) {
        this.generalService = generalService;
        this.productService = productService;
        this.customerService = customerService;
        this.quotationService = quotationService;
        this.route = route;
        this.type = '';
        this.currentDate = Date.now();
        this.datePipe = new __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"]('en-US');
        this.isAutoQuotation = false;
    }
    QuotationHtmlComponent.prototype.ngOnChanges = function (changes) {
        if (changes['autoQuotation']) {
            this.isAutoQuotation = true;
            this.tempQuotation = changes['autoQuotation'].currentValue;
        }
    };
    QuotationHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.displaySidebar(false);
        this.subscription = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
            if (!_this.isAutoQuotation) {
                _this.getQuotationById(params['id']);
            }
            else {
                _this.quotation = _this.tempQuotation;
                _this.quotation['created_on'] = _this.currentDate;
                _this.subTotal = _this.quotation.total;
                _this.finalTotal = _this.quotation.amount_due - _this.quotation.discount;
                _this.finalTotalWords = _this.numberToEnglish(_this.quotation.total, '');
            }
        });
    };
    QuotationHtmlComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    QuotationHtmlComponent.prototype.ngAfterContentInit = function () {
        // if (this.isAutoQuotation) {
        //   this.downloadPDF();
        //
        // }
    };
    QuotationHtmlComponent.prototype.ngAfterViewInit = function () {
        if (this.isAutoQuotation) {
            this.downloadPDF();
        }
    };
    QuotationHtmlComponent.prototype.downloadPDF = function () {
        var _this = this;
        html2canvas(document.getElementById('quotation_body'), {
            onrendered: function (canvas) {
                var imgData = canvas.toDataURL("image/jpeg", 1.0);
                var pdf = new jsPDF("p", "mm", "a4");
                pdf.addImage(imgData, 'JPEG', 0, 0, 210, 200);
                if (_this.isAutoQuotation) {
                    var pdf = pdf.output('datauristring');
                    var data = {
                        pdf: pdf,
                        label: _this.quotation.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM')
                    };
                    console.log(data);
                    _this.quotationService.saveAutoQuotation(data)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (err) {
                        console.log("Error in auto pilot");
                    });
                }
                else {
                    pdf.save(_this.quotation.customerData.username + "_" + _this.datePipe.transform(Date.now(), 'MMMM') + ".pdf");
                }
            }
        });
    };
    QuotationHtmlComponent.prototype.getQuotationById = function (id) {
        var _this = this;
        this.quotationService.getQuotationById(this.type, id)
            .subscribe(function (res) {
            _this.quotation = res;
            _this.quotation.total = 0;
            _this.quotation.productData = [];
            // get product data
            __WEBPACK_IMPORTED_MODULE_6_underscore__["each"](_this.quotation.productList, function (item) {
                _this.productService.getProductById(item)
                    .subscribe(function (res) {
                    res['amount_with_vat'] = res['rate'] + (res['rate'] * (res['vat'] / 100));
                    //res['subtotal'] = res['rate'] ;
                    _this.quotation.productData.push(res);
                    _this.quotation.total = _this.quotation.total + res['amount_with_vat'];
                    _this.quotation.amount_due = _this.quotation.total;
                }, function (err) {
                }, function () {
                    // if (this.quotation.amount_partially_paid.length > 0) {
                    //  _.each(this.quotation.amount_partially_paid, (data) => {
                    //      this.quotation.amount_due = this.quotation.amount_due - data['amount'];
                    //   });
                    // }
                    if (_this.quotation.status == 'Paid') {
                        _this.quotation.amount_due = 0;
                    }
                    _this.finalTotal = _this.quotation.amount_due - _this.quotation.discount;
                    _this.finalTotalWords = _this.numberToEnglish(_this.quotation.total, '');
                });
            });
            //get customer data
            _this.customerService.getCustomerDetails(_this.quotation.customer_id)
                .subscribe(function (res) {
                _this.quotation.customerData = res;
            }, function (err) {
            }, function () {
                console.log(_this.quotation);
            });
        }, function (err) {
            console.log(err);
        });
    };
    QuotationHtmlComponent.prototype.numberToEnglish = function (n, custom_join_character) {
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
        var and = custom_join_character || 'and';
        /* Is number zero? */
        if (parseInt(string) === 0) {
            return 'zero';
        }
        /* Array of units as words */
        units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        /* Array of tens as words */
        tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        /* Array of scales as words */
        scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while (start > 0) {
            end = start;
            chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        }
        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if (chunksLen > scales.length) {
            return '';
        }
        /* Stringify each integer in each chunk */
        words = [];
        for (i = 0; i < chunksLen; i++) {
            chunk = parseInt(chunks[i]);
            if (chunk) {
                /* Split chunk into array of individual integers */
                ints = chunks[i].split('').reverse().map(parseFloat);
                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if (ints[1] === 1) {
                    ints[0] += 10;
                }
                /* Add scale word if chunk is not zero and array item exists */
                if ((word = scales[i])) {
                    words.push(word);
                }
                /* Add unit word if array item exists */
                if ((word = units[ints[0]])) {
                    words.push(word);
                }
                /* Add tens word if array item exists */
                if ((word = tens[ints[1]])) {
                    words.push(word);
                }
                /* Add 'and' string after units or tens integer if: */
                if (ints[0] || ints[1]) {
                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if (ints[2] || !i && chunksLen) {
                        words.push(and);
                    }
                }
                /* Add hundreds word if array item exists */
                if ((word = units[ints[2]])) {
                    words.push(word + ' hundred');
                }
            }
        }
        return words.reverse().join(' ');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('quotationBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], QuotationHtmlComponent.prototype, "quotationBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QuotationHtmlComponent.prototype, "autoQuotation", void 0);
    QuotationHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-html',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__general_general_service__["a" /* GeneralService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], QuotationHtmlComponent);
    return QuotationHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-recent/quotation-recent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-recent/quotation-recent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 1800px;\">\n\n  <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"isQuotationSaved\">Quotation Data Saved Successfully !!</div>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isQuotationError\">ERROR !! Please Try Again.</div>\n\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Recent Quotations\n        <small><em> Generated for the month of {{ currentDate | date: 'MMMM' }} </em></small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> InvoiceApp</a></li>\n        <li><a [routerLink]=\"[ '/' ]\"><i class=\"fa fa-dashboard\"></i> Quotation</a></li>\n        <li class=\"active\">Recent</li>\n      </ol>\n\n      <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delQuotation\">\n        <h4>\n          <strong>Delete Confirmation !!</strong> <br>\n          Delete the quotation for <em>{{ delQuotation.customerData?.username }} </em> ?\n        </h4>\n        <br>\n        <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n        <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n      </div>\n\n    </div>\n  </section>\n\n  <section class=\"content\">\n\n    <!--  Page Content Here -->\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\" style=\"margin-top: 20px;margin-bottom: 20px;\">\n          <h3 class=\"box-title\">Recent Quotation List</h3>\n          <br>\n          <div class=\"box-tools\">\n\n            <div class=\"row\">\n              <div class=\"col-md-offset-2 col-lg-4\">\n                Filter : &nbsp;\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"All\"\n                                                   (change)=\"toggleSearchStatus($event)\">All</label>\n\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Paid</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Due\"\n                                                   (change)=\"toggleSearchStatus($event)\">Due</label>\n                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" value=\"Partially Paid\"\n                                                   (change)=\"toggleSearchStatus($event)\">Partially Paid</label>\n              </div>\n              <div class=\"col-lg-6\" style=\"float:right\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-btn\">\n                    <select style=\"font-size: 15px;height: 34px;\" (change)=\"filterChange($event.target.value)\">\n                      <option value=\"username\">Username</option>\n                      <option value=\"mobile_number\">Mobile Number</option>\n                      <option value=\"area\">Area</option>\n                    </select>\n                  </div>\n                  <!-- /btn-group -->\n                  <input type=\"text\" class=\"form-control\" aria-label=\"...\" placeholder=\"Search Recent Quotations\"\n                         (input)=\"quickSearch($event.target.value)\">\n                </div>\n                <!-- /input-group -->\n              </div>\n            </div>\n            <br><br>\n            <!-- /.row -->\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"quotationList\">\n\n          <br>\n          <div class=\"col-md-offset-4\">\n            <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n          </div>\n          <br>\n\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <th>Due (BDT)</th>\n              <th>Paid (BDT)</th>\n              <th>Total (BDT)</th>\n              <th>Status</th>\n              <th>Transaction Date</th>\n              <th>Change Status</th>\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let quotation of quotationList | paginate: { itemsPerPage: 30, currentPage: p, totalItems:totalCustomerCount }\">\n              <td>{{ quotation.customerData?.username }}</td>\n              <td>{{ quotation.customerData?.fullname }}</td>\n              <td>{{ quotation.customerData?.mobile_primary }}</td>\n              <td>{{ quotation.customerData?.areaData?.name }}</td>\n              <!--<td><span *ngIf=\"quotation.customerData?.productData?.length>0\"> {{ quotation.customerData?.productData[0]?.name }} - <em *ngIf=\"quotation.customerData?.productData[0]?.rate\">{{ quotation.customerData?.productData[0]?.rate }} BDT/month</em> </span>\n                  <small class=\"label bg-blue\">{{ quotation.customerData?.productData.length }}</small>\n              </td>-->\n              <td>\n                <small class=\"label bg-blue\">{{ quotation.customerData?.productData?.length }}</small>\n              </td>\n              <td>{{ quotation?.amount_due }}</td>\n              <td>{{ quotation?.total - quotation?.amount_due }}</td>\n              <td>{{ quotation?.total }}</td>\n              <td>\n                <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\"> {{ quotation.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\"> {{ quotation.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\"> {{ quotation.status\n                  }} </label>\n              </td>\n              <td *ngIf=\"quotation?.status=='Due' || quotation?.status=='Partially Paid'\">\n                {{ quotation?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"quotation?.status=='Paid'\">\n                {{ quotation?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',quotation)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',quotation)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',quotation)\"> Due</button>\n              </td>\n              <td>\n                <a type=\"button\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/quotation/view','recent',quotation?._id]\"> View</a>\n                <!--<button class=\"btn btn-xs btn-danger\" (click)=\"remove(quotation)\"><i class=\"fa fa-times\"-->\n                <!--aria-hidden=\"true\"></i></button>-->\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialQuotation\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialQuotation?.total }} BDT</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialQuotation?.amount_due }} BDT</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialQuotation?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} BDT</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} BDT</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialQuotation\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (BDT) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay()\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n        <!-- /.box-body -->\n      </div>\n      <!-- /.box -->\n      <div class=\"col-md-offset-4\">\n        <pagination-controls (pageChange)=\"onPaginate($event);p=$event\"></pagination-controls>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-recent/quotation-recent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationRecentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuotationRecentComponent = (function () {
    function QuotationRecentComponent(customerService, router, quotationService, productService, areaService) {
        this.customerService = customerService;
        this.router = router;
        this.quotationService = quotationService;
        this.productService = productService;
        this.areaService = areaService;
        this.currentDate = Date.now();
        this.quotationList = [];
        this.searchMode = 'username';
        this.isQuotationSaved = false;
        this.isQuotationError = false;
        this.showRemoveConfirmation = false;
        this.paginator = 1;
        this.totalCustomerCount = 0;
    }
    QuotationRecentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getTotalCustomerCount()
            .subscribe(function (res) {
            _this.totalCustomerCount = res.count;
        });
        this.getRecentQuotationDB();
        // this.wakeUpQuotationDemon();
    };
    //useless shitty method
    QuotationRecentComponent.prototype.wakeUpQuotationDemon = function () {
        var _this = this;
        this.quotationService.cleanQuotation()
            .subscribe(function (res) {
            if (res.status) {
                _this.generateNewQuotation();
            }
            else {
                _this.getRecentQuotationDB();
            }
        });
    };
    //useless shitty method
    QuotationRecentComponent.prototype.generateNewQuotation = function () {
        var _this = this;
        this.quotationService.dropRecentQuotation()
            .subscribe(function (res) {
            _this.buildAndSaveRecentQuotation();
        });
    };
    QuotationRecentComponent.prototype.getRecentQuotationDB = function () {
        var _this = this;
        this.quotationList = [];
        this.quotationService.getRecentQuotationDB(this.paginator)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](res, function (quotation) {
                var customer;
                _this.customerService.getCustomerDetails(quotation.customer_id)
                    .subscribe(function (res) {
                    if (res['status']) {
                        customer = res;
                        customer.productData = [];
                        if (quotation.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](quotation.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer["productData"].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer["areaData"] = res;
                        });
                        quotation.customerData = customer;
                        _this.quotationList.push(quotation);
                    }
                });
            });
        }, function (err) {
        }, function () {
            for (var i = 0; i < _this.quotationList.length; i++) {
                console.log("Hello World");
            }
        });
    };
    QuotationRecentComponent.prototype.buildAndSaveRecentQuotation = function () {
        var _this = this;
        this.quotationService.buildAndSaveRecentQuotation()
            .subscribe(function (res) {
            _this.getRecentQuotationDB();
        }, function (err) {
            console.log('Error in build and save');
        });
    };
    QuotationRecentComponent.prototype.saveRecentQuotation = function (quotation) {
        this.quotationService.saveRecentQuotation(quotation)
            .subscribe(function (res) {
        }, function (err) {
        });
    };
    QuotationRecentComponent.prototype.filterChange = function (event) {
        this.searchMode = event;
    };
    QuotationRecentComponent.prototype.quickSearch = function (event) {
        if (event == '') {
            this.getRecentQuotationDB();
            return;
        }
        var reg = new RegExp(event, "i");
        var resArray = [];
        if (this.searchMode == 'username') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
                if (reg.test(item['customerData']['username'])) {
                    resArray.push(item);
                }
            });
            this.quotationList = resArray;
        }
        else if (this.searchMode == 'mobile_number') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
                if (reg.test(item['customerData']['mobile_primary'])) {
                    resArray.push(item);
                }
            });
            this.quotationList = resArray;
        }
        else if (this.searchMode == 'area') {
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
                if (reg.test(item['customerData']['areaData']['name'])) {
                    resArray.push(item);
                }
            });
            this.quotationList = resArray;
        }
    };
    QuotationRecentComponent.prototype.changeStatus = function (status, quotation) {
        if (status == 'Paid') {
            this.setPaidDateCounter(quotation);
            quotation.status = 'Paid';
            // quotation.paid_date = Date.now();
            quotation.amount_due = 0;
        }
        else if (status == 'Due') {
            quotation.status = 'Due';
            quotation.amount_due = quotation.total;
            //quotation.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialQuotation = quotation;
        }
        quotation['type'] = 'recent';
        this.quotationService.changeQuotationStatus(quotation)
            .subscribe(function (res) {
        });
    };
    QuotationRecentComponent.prototype.setPaidDateCounter = function (quotation) {
        this.quotationService.setPaidDateCounter(quotation)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    QuotationRecentComponent.prototype.toggleSearchStatus = function (event) {
        var _this = this;
        this.getRecentQuotationDB();
        this.paymentStatus = event.target.value;
        if (this.paymentStatus == 'All') {
            return;
        }
        var resArray = [];
        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.quotationList, function (item) {
            if (__WEBPACK_IMPORTED_MODULE_3_underscore__["isEqual"](item.status, _this.paymentStatus)) {
                resArray.push(item);
            }
        });
        this.quotationList = resArray;
    };
    /*savePartialPay() {
      let data = {
        id: this.partialQuotation['_id'],
        amount_partially_paid: this.partialPay
      }
  
      this.quotationService.savePartialPay(data)
        .subscribe(
          (res) => {
            if (res['status']) {
              this.partialPay = 0;
              this.getRecentQuotationDB();
            }
          },
          (err) => {
  
          }
        )
    }*/
    QuotationRecentComponent.prototype.remove = function (delQuotation) {
        this.showRemoveConfirmation = true;
        this.delQuotation = delQuotation;
    };
    QuotationRecentComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.quotationService.deleteQuotation(this.delQuotation)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.quotationList = __WEBPACK_IMPORTED_MODULE_3_underscore__["without"](_this.quotationList, __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](_this.quotationList, {
                        _id: _this.delQuotation['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delQuotation = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    //  for pagination
    QuotationRecentComponent.prototype.onPaginate = function (event) {
        this.paginator = event;
        this.getRecentQuotationDB();
    };
    QuotationRecentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-quotation-recent',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__area_area_service__["a" /* AreaService */]])
    ], QuotationRecentComponent);
    return QuotationRecentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var quotationRoutes = [];
var QuotationRoutingModule = (function () {
    function QuotationRoutingModule() {
    }
    QuotationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(quotationRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]
            ]
        })
    ], QuotationRoutingModule);
    return QuotationRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation-search/quotation-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-search/quotation-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height:100vh\">\n\n  <div class=\"alert alert-warning\" *ngIf=\"showRemoveConfirmation && delQuotation\">\n    <h4>\n      <strong>Delete Confirmation !!</strong> <br>\n      Delete the quotation for <em>{{ delQuotation.customerData?.username }} </em>  ?\n    </h4>\n    <br>\n    <button class=\"btn btn-success btn-sm\" (click)=\"removeConfirmation(true)\">YES</button>\n    <button class=\"btn btn-danger btn-sm\" (click)=\"removeConfirmation(false)\">NO</button>\n  </div>\n\n  <section class=\"content\">\n    <div class=\"col-xs-12\">\n      <div class=\"box box-primary\">\n        <h2 style=\"margin-left:10px\">Search Quotations of any customer</h2>\n        <hr>\n\n        <!--search results for quotations show box-->\n        <div class=\"box-body table-responsive no-padding\" style=\"margin-top:20px;margin-bottom: 20px\"\n             *ngIf=\"quotationList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Fullname</th>\n              <th>Mobile</th>\n              <th>Area</th>\n              <th>Product</th>\n              <!--<th>Due (INR)</th>-->\n              <!--<th>Paid (INR)</th>-->\n              <th>Total (INR)</th>\n              <!--<th>Status</th>-->\n              <th>Quotation Generated On</th>\n              <!--<th>Last Transaction Date</th>-->\n              <!--<th>Change Status</th>-->\n              <th>Action</th>\n            </tr>\n            <tr\n              *ngFor=\"let quotation of quotationList\">\n              <td>{{ quotation.customerData?.username }}</td>\n              <td>{{ quotation.customerData?.fullname }}</td>\n              <td>{{ quotation.customerData?.mobile_primary }}</td>\n              <td>{{ quotation.customerData?.areaData?.name }}</td>\n              <td><span *ngIf=\"quotation.customerData?.productData?.length>0\"> {{ quotation.customerData?.productData[0]?.name }} - <em *ngIf=\"quotation.customerData?.productData[0]?.rate\">{{ quotation.customerData?.productData[0]?.rate }} INR/month</em> </span>\n                  <small class=\"label bg-blue\">{{ quotation.customerData?.productData.length }}</small>\n              </td>\n              <!--<td>\n                <small class=\"label bg-blue\">{{ quotation.customerData?.productData?.length }}</small>\n              </td>-->\n              <!--<td>{{ quotation?.amount_due }}</td>-->\n              <!--<td>{{ quotation?.total - quotation?.amount_due }}</td>-->\n              <td>{{ quotation?.total }}</td>\n              <!--<td>\n                <label class=\"label label-danger\" *ngIf=\"quotation.status=='Due'\"> {{ quotation.status }} </label>\n                <label class=\"label label-success\" *ngIf=\"quotation.status=='Paid'\"> {{ quotation.status }} </label>\n                <label class=\"label label-warning\" *ngIf=\"quotation.status=='Partially Paid'\"> {{ quotation.status\n                  }} </label>\n              </td>-->\n              <td>\n                {{ quotation?.created_on | date: 'yMMMd' }}\n              </td>\n              <!--<td *ngIf=\"quotation?.status=='Due' || quotation?.status=='Partially Paid'\">\n                {{ quotation?.payment_due_date | date }}\n              </td>\n              <td *ngIf=\"quotation?.status=='Paid'\">\n                {{ quotation?.paid_date | date }}\n              </td>\n              <td>\n                <button class=\"btn btn-success btn-xs\" (click)=\"changeStatus('Paid',quotation)\"> Paid</button>\n                <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"changeStatus('Partially Paid',quotation)\"\n                        data-toggle=\"modal\" data-target=\"#partiallyPaymentModal\"> Partially Paid\n                </button>\n                <button class=\"btn btn-danger btn-xs\" (click)=\"changeStatus('Due',quotation)\"> Due</button>\n              </td>-->\n              <td>\n                <a type=\"button\" *ngIf=\"quotation?.type=='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/quotation/view','recent',quotation?._id]\">\n                  View</a>\n                <a type=\"button\" *ngIf=\"quotation?.type!='recent'\" class=\"btn btn-primary btn-xs\"\n                   [routerLink]=\"['/dashboard/quotation/view','all',quotation?._id]\">\n                  View</a>\n\n                <button class=\"btn btn-xs btn-danger\" (click)=\"remove(quotation)\"><i class=\"fa fa-times\"\n                                                                                   aria-hidden=\"true\"></i></button>\n              </td>\n\n              <!-- Modal for Partially payment -->\n              <div class=\"modal fade\" id=\"partiallyPaymentModal\" tabindex=\"-1\" role=\"dialog\"\n                   aria-labelledby=\"myModalLabel\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n                        aria-hidden=\"true\">&times;</span></button>\n                      <h2 class=\"modal-title\" id=\"myModalLabel\">Partially Payment</h2>\n                    </div>\n                    <div class=\"modal-body\" *ngIf=\"partialQuotation\">\n                      <div class=\"col-md-12\">\n                        <div class=\"col-md-6\">\n                          <h4 style=\"text-align: center\">Total: {{ partialQuotation?.total }} INR</h4>\n                          <h4 style=\"text-align: center\">Due: {{ partialQuotation?.amount_due }} INR</h4>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <div *ngFor=\"let x of partialQuotation?.amount_partially_paid\">\n                            <h4 style=\"text-align: center\">Date: {{ x?.date | date }} INR</h4>\n                            <h4 style=\"text-align: center\">Partial Pay: {{ x?.amount }} INR</h4>\n                            <br>\n                          </div>\n\n                        </div>\n                      </div>\n                      <br>\n                      <form class=\"form-horizontal\" *ngIf=\"partialQuotation\">\n                        <!--amoount partially paid-->\n                        <div class=\"form-group\">\n                          <label for=\"amount_partially_paid \" class=\"col-sm-2 control-label \">Amount Partially Paid\n                            (INR) </label>\n                          <div class=\"col-sm-10\">\n                            <input type=\"text\" name=\"partialPay\" [(ngModel)]=\"partialPay\" class=\"form-control \"\n                                   id=\"amount_partially_paid \" placeholder=\"amount partially paid\">\n                          </div>\n                        </div>\n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"savePartialPay(partialQuotation)\"\n                              data-dismiss=\"modal\">Save changes\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n        <!--search box and functionality-->\n        <div class=\"container\">\n          <div class=\"col-lg-12\">\n            <form class=\"form-group\">\n              <input style=\"width:100%\" (keyup)=\"getSearchText($event)\" id=\"search_form\" type=\"text\" class=\"\"\n                     placeholder=\"Search for a customer\">\n            </form>\n\n            <!--search resultsa-->\n            <div *ngIf=\"searchResults.length>0\">\n              <strong style=\"font-size: 20px\"> Search results: </strong> <span class=\"search_text\"\n                                                                               style=\"color:blue;font-size: 20px\">{{ searchText }}</span>\n              <br>\n              <ul style=\"list-style-type:none\">\n                <li *ngFor=\"let customer of searchResults\">\n                 <span style=\"font-size: 20px\">\n                   <a href=\"javascript:void(0)\" (click)=\"getSearchDetails(customer)\">\n                   <em>{{ customer['username'] }}</em> - {{ customer['fullname']}}\n                 </a>\n                 </span>\n                  <br>\n                </li>\n                <hr>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/quotation/quotation-search/quotation-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuotationSearchComponent = (function () {
    function QuotationSearchComponent(customerService, quotationService, productService, areaService) {
        this.customerService = customerService;
        this.quotationService = quotationService;
        this.productService = productService;
        this.areaService = areaService;
        this.searchResults = [];
        this.quotationList = [];
        this.showRemoveConfirmation = false;
    }
    QuotationSearchComponent.prototype.ngOnInit = function () {
    };
    QuotationSearchComponent.prototype.getSearchText = function (event) {
        this.quotationList = [];
        this.searchResults = [];
        this.searchText = event.target.value;
        this.getGlobalQuotationSearchByCustomer();
    };
    QuotationSearchComponent.prototype.getGlobalQuotationSearchByCustomer = function () {
        var _this = this;
        this.quotationService.globalQuotationSearchByCustomer(this.searchText)
            .subscribe(function (res) {
            _this.searchResults = res;
        });
    };
    QuotationSearchComponent.prototype.getSearchDetails = function (data) {
        var _this = this;
        var id = data['_id'];
        this.quotationList = [];
        this.quotationService.getQuotationByCustomerId(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](res, function (quotation) {
                var customer;
                if (quotation['type'] == '') {
                    quotation['type'] = 'recent';
                }
                _this.customerService.getCustomerDetails(quotation.customer_id)
                    .subscribe(function (res) {
                    customer = res;
                    if (customer['status']) {
                        customer.productData = [];
                        if (quotation.productList.length > 0) {
                            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](quotation.productList, function (element) {
                                _this.productService.getProductById(element)
                                    .subscribe(function (res) {
                                    customer['productData'].push(res);
                                });
                            });
                        }
                        _this.areaService.getAreaById(customer.area)
                            .subscribe(function (res) {
                            customer['areaData'] = res;
                        });
                        quotation.customerData = customer;
                        _this.quotationList.push(quotation);
                    }
                });
            });
        }, function (err) {
            console.log('Error in getSearchDetails');
        });
    };
    QuotationSearchComponent.prototype.changeStatus = function (status, quotation) {
        if (status == 'Paid') {
            this.setPaidDateCounter(quotation);
            quotation.status = 'Paid';
            //quotation.paid_date = Date.now();
            quotation.amount_due = 0;
        }
        else if (status == 'Due') {
            quotation.status = 'Due';
            quotation.amount_due = quotation.total;
            // quotation.amount_partially_paid = [];
        }
        else if (status == 'Partially Paid') {
            this.partialQuotation = quotation;
        }
        if (quotation['type'] != 'recent') {
            quotation['type'] = 'all';
        }
        this.quotationService.changeQuotationStatus(quotation)
            .subscribe(function (res) {
        });
    };
    QuotationSearchComponent.prototype.setPaidDateCounter = function (quotation) {
        this.quotationService.setPaidDateCounter(quotation)
            .subscribe(function (res) {
            // console.log(res);
        }, function (err) {
            console.log("Error in setpaiddatecounter");
        });
    };
    /* savePartialPay(quotation: Quotation) {
       let data = {
         id: this.partialQuotation['_id'],
         amount_partially_paid: this.partialPay
       }
   
       this.quotationService.savePartialPay(data)
         .subscribe(
           (res) => {
             if (res['status']) {
               this.partialPay = 0;
               this.getSearchDetails({_id: quotation.customer_id});
             }
           },
           (err) => {
   
           }
         )
     }*/
    QuotationSearchComponent.prototype.remove = function (quotation) {
        this.showRemoveConfirmation = true;
        this.delQuotation = quotation;
    };
    QuotationSearchComponent.prototype.removeConfirmation = function (status) {
        var _this = this;
        if (status) {
            this.quotationService.deleteQuotation(this.delQuotation)
                .subscribe(function (res) {
                if (res['status']) {
                    _this.quotationList = __WEBPACK_IMPORTED_MODULE_5_underscore__["without"](_this.quotationList, __WEBPACK_IMPORTED_MODULE_5_underscore__["findWhere"](_this.quotationList, {
                        _id: _this.delQuotation['_id']
                    }));
                    _this.showRemoveConfirmation = false;
                }
            }, function (err) {
            });
        }
        else {
            this.delQuotation = undefined;
            this.showRemoveConfirmation = false;
        }
    };
    QuotationSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quotation-search',
            template: __webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__customer_customer_service__["a" /* CustomerService */], __WEBPACK_IMPORTED_MODULE_1__quotation_service__["a" /* QuotationService */], __WEBPACK_IMPORTED_MODULE_4__product_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__area_area_service__["a" /* AreaService */]])
    ], QuotationSearchComponent);
    return QuotationSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quotation_routing_module__ = __webpack_require__("../../../../../src/app/quotation/quotation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quotation_all_quotation_all_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-all/quotation-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quotation_create_quotation_create_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-create/quotation-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quotation_service__ = __webpack_require__("../../../../../src/app/quotation/quotation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quotation_recent_quotation_recent_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-recent/quotation-recent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__("../../../../../src/app/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__quotation_edit_quotation_edit_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-edit/quotation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quotation_html_quotation_html_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-html/quotation-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__ = __webpack_require__("../../../../../src/app/customer/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__general_general_service__ = __webpack_require__("../../../../../src/app/general/general.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__quotation_search_quotation_search_component__ = __webpack_require__("../../../../../src/app/quotation/quotation-search/quotation-search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var QuotationModule = (function () {
    function QuotationModule() {
    }
    QuotationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ng2_pagination__["Ng2PaginationModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__quotation_routing_module__["a" /* QuotationRoutingModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__quotation_all_quotation_all_component__["a" /* QuotationAllComponent */],
                __WEBPACK_IMPORTED_MODULE_7__quotation_create_quotation_create_component__["a" /* QuotationCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__quotation_recent_quotation_recent_component__["a" /* QuotationRecentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__quotation_edit_quotation_edit_component__["a" /* QuotationEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__quotation_html_quotation_html_component__["a" /* QuotationHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_16__quotation_search_quotation_search_component__["a" /* QuotationSearchComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_13__quotation_html_quotation_html_component__["a" /* QuotationHtmlComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__quotation_service__["a" /* QuotationService */],
                __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_11__area_area_service__["a" /* AreaService */],
                __WEBPACK_IMPORTED_MODULE_14__customer_customer_service__["a" /* CustomerService */],
                __WEBPACK_IMPORTED_MODULE_15__general_general_service__["a" /* GeneralService */]
            ]
        })
    ], QuotationModule);
    return QuotationModule;
}());



/***/ }),

/***/ "../../../../../src/app/quotation/quotation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuotationService = (function () {
    function QuotationService(http) {
        this.http = http;
        this.quotationUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'quotation/';
    }
    QuotationService.prototype.removeQuotation = function (quotation) {
        var url = this.quotationUrl + 'remove-quotation';
        return this.http.post(url, quotation).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getQuotationByCustomerId = function (id) {
        var url = this.quotationUrl + 'by-customer-id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.globalQuotationSearchByCustomer = function (query) {
        var url = this.quotationUrl + 'global-search-by-customer/' + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.saveAutoQuotation = function (data) {
        var url = this.quotationUrl + 'save-auto-quotation';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getAllQuotation = function (paginator) {
        var url = this.quotationUrl + 'all/page=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getRecentQuotation = function () {
        var url = this.quotationUrl + 'recent';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.storeQuotation = function (data) {
        var url = this.quotationUrl + 'create';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.downloadPDF = function (data) {
        var url = this.quotationUrl + 'generate/pdf';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getQuotationById = function (type, id) {
        var url = this.quotationUrl + type + '/id/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.searchByUsername = function (data) {
        var url = this.quotationUrl + 'search/username/';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.saveRecentQuotation = function (data) {
        var url = this.quotationUrl + 'recent/save';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.dropRecentQuotation = function () {
        var url = this.quotationUrl + 'drop/recent/all';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.checkIfRecentQuotationExists = function () {
        var url = this.quotationUrl + 'recent_quotation/exists';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getRecentQuotationDB = function (paginator) {
        var url = this.quotationUrl + 'recent_quotation_db/paginator=' + paginator;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.cleanQuotation = function () {
        var url = this.quotationUrl + 'clean_quotation';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.changeQuotationStatus = function (data) {
        var url = this.quotationUrl + 'change_status';
        return this.http.put(url, data).map(function (res) { return res.json(); });
    };
    //get total of all products in product list
    QuotationService.prototype.getTotal = function (data) {
        var url = this.quotationUrl + 'product_list/total';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.buildAndSaveRecentQuotation = function () {
        var url = this.quotationUrl + 'recent/build_and_save';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    /* savePartialPay(data: any) {
       let url = this.quotationUrl + 'recent/partial_pay/save';
       return this.http.post(url, data).map((res) => res.json());
     }*/
    QuotationService.prototype.preGenerateQuotationUpdate = function (data) {
        var url = this.quotationUrl + 'pre_generate_update';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.deleteQuotation = function (quotation) {
        var url = this.quotationUrl + 'delete';
        return this.http.post(url, quotation).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.setPaidDateCounter = function (quotation) {
        var url = this.quotationUrl + 'set_paid_date_counter';
        return this.http.post(url, quotation).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getPaidDateCounter = function () {
        var url = this.quotationUrl + 'get_paid_date_counter';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.getAllQuotationCount = function () {
        var url = this.quotationUrl + 'all_quotation_count';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    QuotationService.prototype.createNewQuotation = function (data) {
        var url = this.quotationUrl + 'create/new';
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    QuotationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], QuotationService);
    return QuotationService;
}());



/***/ }),

/***/ "../../../../../src/app/report/location-due-report/location-due-report.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/report/location-due-report/location-due-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"height: 9000px\">\n  <section class=\"content-header\">\n    <div class=\"col-xs-12\">\n      <h1>\n        Report\n        <small>Area based report</small>\n      </h1>\n\n      <ol class=\"breadcrumb\">\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Sofkul</a></li>\n        <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Report</a></li>\n        <li class=\"active\">Area based report</li>\n      </ol>\n    </div>\n  </section>\n  <section class=\"content\">\n    <div class=\"col-md-12\">\n      <div class=\"input-group\">\n        <select style=\"font-size: 15px;height: 34px,width: 500px;\" (change)=\"filterChange($event.target.value)\">\n          <option value=\"default\">Select Area</option>\n          <option *ngFor=\"let area of areaList\" value=\"{{ area._id }}\">{{ area.name }}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"box box-primary\">\n        <div class=\"box-header\">\n\n        </div>\n        <div class=\"box-body table-responsive no-padding\" *ngIf=\"reportList.length>0\">\n          <table class=\"table table-hover\">\n            <tbody>\n            <tr>\n              <th>Username</th>\n              <th>Mobile No.</th>\n              <th>Location</th>\n              <th>Current Due (INR)</th>\n              <th>Previous Due (INR)</th>\n              <th>Total Due (INR)</th>\n            </tr>\n            <tr *ngFor=\"let report of reportList\">\n              <td>{{ report.username }}</td>\n              <td>{{ report.mobile_no }}</td>\n              <td>{{ report.location }}</td>\n              <td>{{ report.current_due }}</td>\n              <td>{{ report.previous_due }}</td>\n              <td>{{ report.total_due }}</td>\n            </tr>\n            </tbody>\n\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/report/location-due-report/location-due-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationDueReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_service__ = __webpack_require__("../../../../../src/app/report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report__ = __webpack_require__("../../../../../src/app/report/report.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationDueReportComponent = (function () {
    function LocationDueReportComponent(areaService, reportService) {
        this.areaService = areaService;
        this.reportService = reportService;
        this.areaList = [];
        this.reportList = [];
    }
    LocationDueReportComponent.prototype.ngOnInit = function () {
        this.getAllAreaList();
    };
    LocationDueReportComponent.prototype.filterChange = function (id) {
        var _this = this;
        this.reportList = [];
        this.reportService.getCustomerByArea(id)
            .subscribe(function (res) {
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](res, function (customer) {
                var report = new __WEBPACK_IMPORTED_MODULE_3__report__["a" /* Report */]();
                report.username = customer['username'];
                report.mobile_no = customer['mobile_primary'];
                report.location = customer['location'];
                _this.reportService.getReport(customer['_id'])
                    .subscribe(function (res) {
                    report.current_due = res['current_due'];
                    report.previous_due = res['previous_due'];
                    report.total_due = res['total_due'];
                    if (res['total_due'] != 0) {
                        _this.reportList.push(report);
                    }
                }, function (err) {
                    console.log("Error in getReport");
                });
            });
        }, function (err) {
        }, function () {
            // console.log(this.reportList);
        });
    };
    LocationDueReportComponent.prototype.getAllAreaList = function () {
        var _this = this;
        this.areaService.getAllArea()
            .subscribe(function (res) {
            _this.areaList = res;
        });
    };
    LocationDueReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-location-due-report',
            template: __webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.html"),
            styles: [__webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__area_area_service__["a" /* AreaService */], __WEBPACK_IMPORTED_MODULE_2__report_service__["a" /* ReportService */]])
    ], LocationDueReportComponent);
    return LocationDueReportComponent;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location_due_report_location_due_report_component__ = __webpack_require__("../../../../../src/app/report/location-due-report/location-due-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_service__ = __webpack_require__("../../../../../src/app/report/report.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__area_area_service__ = __webpack_require__("../../../../../src/app/area/area.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__ = __webpack_require__("../../../../ng2-pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_pagination__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportModule = (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_pagination__["Ng2PaginationModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location_due_report_location_due_report_component__["a" /* LocationDueReportComponent */]
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__report_service__["a" /* ReportService */],
                __WEBPACK_IMPORTED_MODULE_4__area_area_service__["a" /* AreaService */]
            ]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__("../../../../../src/app/custom-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.reportUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].api_server + 'report/';
    }
    ReportService.prototype.buildAndShowAreaReport = function (id) {
        var url = this.reportUrl + 'build_show_area_report/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ReportService.prototype.getCustomerByArea = function (id) {
        var url = this.reportUrl + 'customer_by_area/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ReportService.prototype.getReport = function (id) {
        var url = this.reportUrl + 'report_for_customers/' + id;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "../../../../../src/app/report/report.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Report; });
var Report = (function () {
    function Report() {
        this.current_due = 0;
        this.previous_due = 0;
        this.total_due = 0;
    }
    return Report;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [],
            exports: [],
            providers: []
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../../../../src/app/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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



var UploadService = (function () {
    function UploadService() {
        var _this = this;
        this.progress = 0;
        this.progress$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.progressObserver = observer;
        });
    }
    UploadService_1 = UploadService;
    UploadService.prototype.getFile = function (event) {
        var imageList = [];
        var FileList = event.target.files;
        for (var i = 0; i < FileList.length; i++) {
            imageList.push(FileList.item(i));
        }
        return imageList;
    };
    UploadService.prototype.uploadFile = function (uploadRoute, imageList) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!imageList.length) {
                            return [2 /*return*/];
                        }
                        this.getObserver()
                            .subscribe(function (progress) {
                            _this.uploadProgress = progress;
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.upload(uploadRoute, imageList)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UploadService.prototype.getObserver = function () {
        return this.progress$;
    };
    UploadService.prototype.upload = function (url, files) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            UploadService_1.setUploadUpdateInterval(500);
            xhr.open('POST', url, true);
            xhr.send(formData);
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                _this.progressObserver.next(_this.progress);
            };
        });
    };
    UploadService.setUploadUpdateInterval = function (interval) {
        setInterval(function () {
        }, interval);
    };
    UploadService = UploadService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UploadService);
    return UploadService;
    var UploadService_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    //need to place production server api here
    api_server: "http://13.127.181.211:8080/api/"
};
//http://sofkulaquality-1795250689.ap-south-1.elb.amazonaws.com
//http://13.127.181.211:8080/api/ 


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map