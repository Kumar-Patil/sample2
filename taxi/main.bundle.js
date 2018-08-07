webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password_component__ = __webpack_require__("./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driver_driver_component__ = __webpack_require__("./src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_activity_dashboard_activity_dashboard_component__ = __webpack_require__("./src/app/auth/activity-dashboard/activity-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__driver_add_driver_add_driver_component__ = __webpack_require__("./src/app/driver/add-driver/add-driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vendor_vendor_component__ = __webpack_require__("./src/app/vendor/vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__booking_booking_component__ = __webpack_require__("./src/app/booking/booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cabs_cabs_component__ = __webpack_require__("./src/app/cabs/cabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rider_rider_component__ = __webpack_require__("./src/app/rider/rider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__report_report_component__ = __webpack_require__("./src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__finance_finance_component__ = __webpack_require__("./src/app/finance/finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__delivery_delivery_component__ = __webpack_require__("./src/app/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_add_user_add_user_component__ = __webpack_require__("./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pricing_add_edit_pricing_add_pricing_component__ = __webpack_require__("./src/app/pricing/add-edit-pricing/add-pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__surging_add_edit_surging_add_surging_component__ = __webpack_require__("./src/app/surging/add-edit-surging/add-surging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__surging_surging_component__ = __webpack_require__("./src/app/surging/surging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__cabs_add_edit_cab_add_edit_cab_component__ = __webpack_require__("./src/app/cabs/add-edit-cab/add-edit-cab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__vendor_add_edit_vendor_add_edit_vendor_component__ = __webpack_require__("./src/app/vendor/add-edit-vendor/add-edit-vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__delivery_tracking_tracking_component__ = __webpack_require__("./src/app/delivery/tracking/tracking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/* Adding new componets */
















const routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'forgotPassword',
        component: __WEBPACK_IMPORTED_MODULE_3__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: 'resetPassword',
        component: __WEBPACK_IMPORTED_MODULE_4__reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
    },
    {
        path: 'driver',
        component: __WEBPACK_IMPORTED_MODULE_5__driver_driver_component__["a" /* DriverComponent */]
    },
    { path: 'driver/addDriver', component: __WEBPACK_IMPORTED_MODULE_7__driver_add_driver_add_driver_component__["a" /* AddDriverComponent */] },
    { path: 'driver/editDriver/:driverId', component: __WEBPACK_IMPORTED_MODULE_7__driver_add_driver_add_driver_component__["a" /* AddDriverComponent */] },
    {
        path: 'activityDashboard',
        component: __WEBPACK_IMPORTED_MODULE_6__auth_activity_dashboard_activity_dashboard_component__["a" /* ActivityDashboardComponent */]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* UserComponent */]
    },
    {
        path: 'vendor',
        component: __WEBPACK_IMPORTED_MODULE_9__vendor_vendor_component__["a" /* VendorComponent */]
    },
    { path: 'vendor/add', component: __WEBPACK_IMPORTED_MODULE_22__vendor_add_edit_vendor_add_edit_vendor_component__["a" /* AddEditVendorComponent */] },
    { path: 'vendor/edit/:id', component: __WEBPACK_IMPORTED_MODULE_22__vendor_add_edit_vendor_add_edit_vendor_component__["a" /* AddEditVendorComponent */] },
    {
        path: 'booking',
        component: __WEBPACK_IMPORTED_MODULE_10__booking_booking_component__["a" /* BookingComponent */]
    },
    {
        path: 'pricing',
        component: __WEBPACK_IMPORTED_MODULE_11__pricing_pricing_component__["a" /* PricingComponent */]
    },
    {
        path: 'cabs',
        component: __WEBPACK_IMPORTED_MODULE_12__cabs_cabs_component__["a" /* CabsComponent */]
    },
    {
        path: 'rider',
        component: __WEBPACK_IMPORTED_MODULE_13__rider_rider_component__["a" /* RiderComponent */]
    },
    {
        path: 'report',
        component: __WEBPACK_IMPORTED_MODULE_14__report_report_component__["a" /* ReportComponent */]
    },
    {
        path: 'finance',
        component: __WEBPACK_IMPORTED_MODULE_15__finance_finance_component__["a" /* FinanceComponent */]
    },
    {
        path: 'delivery',
        component: __WEBPACK_IMPORTED_MODULE_16__delivery_delivery_component__["a" /* DeliveryComponent */]
    },
    {
        path: 'tracking',
        component: __WEBPACK_IMPORTED_MODULE_23__delivery_tracking_tracking_component__["a" /* DSTrackingComponent */]
    },
    { path: 'user/add', component: __WEBPACK_IMPORTED_MODULE_17__user_add_user_add_user_component__["a" /* AddUserComponent */] },
    { path: 'user/edit/:id', component: __WEBPACK_IMPORTED_MODULE_17__user_add_user_add_user_component__["a" /* AddUserComponent */] },
    { path: 'price/add', component: __WEBPACK_IMPORTED_MODULE_18__pricing_add_edit_pricing_add_pricing_component__["a" /* AddPricingComponent */] },
    { path: 'price/edit/:pricingId', component: __WEBPACK_IMPORTED_MODULE_18__pricing_add_edit_pricing_add_pricing_component__["a" /* AddPricingComponent */] },
    {
        path: 'surging',
        component: __WEBPACK_IMPORTED_MODULE_20__surging_surging_component__["a" /* SurgingComponent */]
    },
    { path: 'surge/add', component: __WEBPACK_IMPORTED_MODULE_19__surging_add_edit_surging_add_surging_component__["a" /* AddEditSurgingComponent */] },
    { path: 'surge/edit/:surgeId', component: __WEBPACK_IMPORTED_MODULE_19__surging_add_edit_surging_add_surging_component__["a" /* AddEditSurgingComponent */] },
    { path: 'cab/add', component: __WEBPACK_IMPORTED_MODULE_21__cabs_add_edit_cab_add_edit_cab_component__["a" /* AddEditCabComponent */] },
    { path: 'cab/edit/:cabId', component: __WEBPACK_IMPORTED_MODULE_21__cabs_add_edit_cab_add_edit_cab_component__["a" /* AddEditCabComponent */] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 30px;\r\n}\r\n\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-header-link></app-header-link>\r\n<app-nav></app-nav>\r\n<div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n                <app-alerts></app-alerts>\r\n        </div>\r\n        <ng4-loading-spinner> </ng4-loading-spinner>\r\n        <router-outlet></router-outlet>\r\n\r\n</div>\r\n<div>\r\n        <app-footer></app-footer>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
        this.template = `<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`;
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password_component__ = __webpack_require__("./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reset_password_reset_password_component__ = __webpack_require__("./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__driver_driver_component__ = __webpack_require__("./src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_activity_dashboard_activity_dashboard_component__ = __webpack_require__("./src/app/auth/activity-dashboard/activity-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_service_auth_service__ = __webpack_require__("./src/app/common/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_header_link_header_link_component__ = __webpack_require__("./src/app/nav/header-link/header-link.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__driver_add_driver_add_driver_component__ = __webpack_require__("./src/app/driver/add-driver/add-driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_mydatepicker__ = __webpack_require__("./node_modules/mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_service_file_upload_service__ = __webpack_require__("./src/app/common/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__nav_change_password_change_password_component__ = __webpack_require__("./src/app/nav/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_delete_delete_modal_delete_modal_component__ = __webpack_require__("./src/app/common/delete/delete-modal/delete-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__vendor_vendor_component__ = __webpack_require__("./src/app/vendor/vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__booking_booking_component__ = __webpack_require__("./src/app/booking/booking.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__cabs_cabs_component__ = __webpack_require__("./src/app/cabs/cabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__rider_rider_component__ = __webpack_require__("./src/app/rider/rider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__report_report_component__ = __webpack_require__("./src/app/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__finance_finance_component__ = __webpack_require__("./src/app/finance/finance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__delivery_delivery_component__ = __webpack_require__("./src/app/delivery/delivery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__user_add_user_add_user_component__ = __webpack_require__("./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pricing_add_edit_pricing_add_pricing_component__ = __webpack_require__("./src/app/pricing/add-edit-pricing/add-pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__surging_add_edit_surging_add_surging_component__ = __webpack_require__("./src/app/surging/add-edit-surging/add-surging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__surging_surging_component__ = __webpack_require__("./src/app/surging/surging.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__cabs_add_edit_cab_add_edit_cab_component__ = __webpack_require__("./src/app/cabs/add-edit-cab/add-edit-cab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__vendor_add_edit_vendor_add_edit_vendor_component__ = __webpack_require__("./src/app/vendor/add-edit-vendor/add-edit-vendor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__delivery_tracking_tracking_component__ = __webpack_require__("./src/app/delivery/tracking/tracking.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























/* Adding new components */





















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_10__driver_driver_component__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__auth_activity_dashboard_activity_dashboard_component__["a" /* ActivityDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__nav_header_link_header_link_component__["a" /* HeaderLinkComponent */],
            __WEBPACK_IMPORTED_MODULE_15__driver_add_driver_add_driver_component__["a" /* AddDriverComponent */],
            __WEBPACK_IMPORTED_MODULE_21__nav_change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_23__common_delete_delete_modal_delete_modal_component__["a" /* DeleteModalComponent */],
            __WEBPACK_IMPORTED_MODULE_25__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_26__vendor_vendor_component__["a" /* VendorComponent */],
            __WEBPACK_IMPORTED_MODULE_27__booking_booking_component__["a" /* BookingComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pricing_pricing_component__["a" /* PricingComponent */],
            __WEBPACK_IMPORTED_MODULE_29__cabs_cabs_component__["a" /* CabsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__rider_rider_component__["a" /* RiderComponent */],
            __WEBPACK_IMPORTED_MODULE_31__report_report_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_32__finance_finance_component__["a" /* FinanceComponent */],
            __WEBPACK_IMPORTED_MODULE_33__delivery_delivery_component__["a" /* DeliveryComponent */],
            __WEBPACK_IMPORTED_MODULE_37__user_add_user_add_user_component__["a" /* AddUserComponent */],
            __WEBPACK_IMPORTED_MODULE_38__pricing_add_edit_pricing_add_pricing_component__["a" /* AddPricingComponent */],
            __WEBPACK_IMPORTED_MODULE_39__surging_add_edit_surging_add_surging_component__["a" /* AddEditSurgingComponent */],
            __WEBPACK_IMPORTED_MODULE_40__surging_surging_component__["a" /* SurgingComponent */],
            __WEBPACK_IMPORTED_MODULE_42__cabs_add_edit_cab_add_edit_cab_component__["a" /* AddEditCabComponent */],
            __WEBPACK_IMPORTED_MODULE_43__vendor_add_edit_vendor_add_edit_vendor_component__["a" /* AddEditVendorComponent */],
            __WEBPACK_IMPORTED_MODULE_45__delivery_tracking_tracking_component__["a" /* DSTrackingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_18_angular_datatables__["b" /* DataTablesModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_24_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_35_angular_alert_module__["a" /* AlertsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_36__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_44__agm_core__["a" /* AgmCoreModule */].forRoot({
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                apiKey: 'AIzaSyDVttFh9cUbhvjKM0Vscrk-X7CmSXCzq24'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__common_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_20__common_service_file_upload_service__["a" /* FileUploadService */], __WEBPACK_IMPORTED_MODULE_22__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_34__common_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_41__common_api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/activity-dashboard/activity-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/activity-dashboard/activity-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  activity-dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/activity-dashboard/activity-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ActivityDashboardComponent = class ActivityDashboardComponent {
    constructor() { }
    ngOnInit() {
        console.log(sessionStorage.getItem('authSuccess'));
    }
};
ActivityDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activity-dashboard',
        template: __webpack_require__("./src/app/auth/activity-dashboard/activity-dashboard.component.html"),
        styles: [__webpack_require__("./src/app/auth/activity-dashboard/activity-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ActivityDashboardComponent);



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Booking module works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BookingComponent = class BookingComponent {
    constructor() { }
    ngOnInit() {
        console.log(sessionStorage.getItem('authSuccess'));
    }
};
BookingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-booking',
        template: __webpack_require__("./src/app/booking/booking.component.html"),
        styles: [__webpack_require__("./src/app/booking/booking.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookingComponent);



/***/ }),

/***/ "./src/app/cabs/add-edit-cab/add-cab.component.css":
/***/ (function(module, exports) {

module.exports = ".accordion.pb-15 {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.card-header:after {\r\n    font-family: 'FontAwesome';  \r\n    content: \"\\f068\";\r\n    float: right;\r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.card-header.collapsed:after {\r\n    /* symbol for \"collapsed\" panels */\r\n    content: \"\\f067\"; \r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.file-width {\r\n    width:99px;\r\n    color:transparent;\r\n}\r\n\r\n#fileLabel {\r\n    position: relative;\r\n    width: 100px;\r\n  }\r\n\r\n#fileLabel {\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n  }\r\n\r\n#fileLabel:after {\r\n    content: attr(data-filetype);\r\n    position: absolute;\r\n    left: 100%;\r\n    top: 0;\r\n}\r\n\r\n/*Show on hover*/\r\n\r\n#fileLabel:hover {\r\n    width: auto  \r\n  }\r\n\r\n#fileLabel:hover:after {\r\n    display: none;  \r\n  }"

/***/ }),

/***/ "./src/app/cabs/add-edit-cab/add-cab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div id=\"accordion\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"firstRow\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseOne\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Vechicle Details\r\n          </h2>\r\n        </div>\r\n        <form #cabDetails=\"ngForm\" class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseOne\" data-parent=\"#accordion\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechicle RegNo *</label>\r\n                  <input type=\"text\" id=\"cabRegistrationNo\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.cabRegistrationNo\" name=\"cabRegistrationNo\"\r\n                    #cabRegistrationNo=\"ngModel\" required=\"true\">\r\n                  <div *ngIf=\"cabRegistrationNo.errors && (cabRegistrationNo.dirty || cabRegistrationNo.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!cabRegistrationNo.errors.required\">Vechicle regNo is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechicle Reg. Year *</label>\r\n                  <input type=\"text\" id=\"yearOfRegistration\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.yearOfRegistration\" name=\"yearOfRegistration\"\r\n                    #yearOfRegistration=\"ngModel\" required=\"true\">\r\n                  <div *ngIf=\"yearOfRegistration.errors && (yearOfRegistration.dirty || yearOfRegistration.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!yearOfRegistration.errors.required\">Vechicle reg. year is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechicle plate number *</label>\r\n                  <input type=\"plateNumber\" id=\"plateNumber\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.plateNumber\" name=\"plateNumber\"\r\n                    #plateNumber=\"ngModel\" required=\"true\">\r\n                </div>\r\n                <div *ngIf=\"plateNumber.errors && (plateNumber.dirty || plateNumber.touched)\">\r\n                  <span class=\"text-danger\" [hidden]=\"!plateNumber.errors.required\">Vechicle plate number is required</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechicle Type</label>\r\n                  <input type=\"text\" id=\"cabType\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.cabType\" name=\"cabType\" #cabType=\"ngModel\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechicle Model</label>\r\n                  <input type=\"text\" id=\"cabModel\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.cabModel\" name=\"cabModel\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechicle Color</label>\r\n                  <input type=\"text\" id=\"cabColor\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.cabColor\" name=\"cabColor\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"vendorId\">Vendors *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"pricingId1\" [(ngModel)]=\"cabData.vendorId\" name=\"pricingId1\" #pricingId=\"ngModel\" required=\"true\">\r\n                    <option *ngFor=\"let price of vendorsList\" [ngValue]=\"price.id\">{{price.vendorRegistrationNo}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"pricingId.errors && (pricingId.dirty || pricingId.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!pricingId.errors.required\">Pricing details is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"pricingId\">Pricing Details *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"pricingId\" [(ngModel)]=\"cabData.pricingId\" name=\"pricingId\" #pricingId=\"ngModel\" required=\"true\">\r\n                    <option *ngFor=\"let price of priceList\" [ngValue]=\"price.pricingId\">{{price.pricingGroupName}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"pricingId.errors && (pricingId.dirty || pricingId.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!pricingId.errors.required\">Pricing details is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"status\">Status *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"statusId\" [(ngModel)]=\"cabData.status\" #status=\"ngModel\" name=\"status\" required=\"true\">\r\n                    <option *ngFor=\"let status of statusList\" [ngValue]=status.id>{{status.statusName}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"status.errors && (status.dirty || status.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!status.errors.required\">Status is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion1\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Insurance & Other Details\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\" #licencing=\"ngForm\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseTwo\" data-parent=\"#accordion1\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Insurer</label>\r\n                  <input type=\"text\" id=\"insurer\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.insurer\" name=\"insurer\" maxlength=\"60\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Insurance Policy Number</label>\r\n                  <input type=\"text\" id=\"insurancePolicyNumber\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.insurancePolicyNumber\"\r\n                    name=\"insurancePolicyNumber\" maxlength=\"60\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Insurance ExpiryDate</label>\r\n                  <my-date-picker name=\"inuranceExpiryDate\" [options]=\"inuranceExpiryDateOptions\" [(ngModel)]=\"cabData.inuranceExpiryDate\"\r\n                    required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Mot</label>\r\n                  <input type=\"text\" id=\"mot\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"cabData.mot\" name=\"licenceNumber\" maxlength=\"60\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Mot Expiry Date</label>\r\n                  <my-date-picker name=\"motExpiry\" [options]=\"motExpiryOptions\" [(ngModel)]=\"cabData.motExpiry\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Road Tax Expiry Date</label>\r\n                  <my-date-picker name=\"roadTaxExpiry\" [options]=\"roadTaxExpiryOptions\" [(ngModel)]=\"cabData.roadTaxExpiry\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechile Hire Date</label>\r\n                  <my-date-picker name=\"vehicleStart\" [options]=\"vehicleStartOptions\" [(ngModel)]=\"cabData.vehicleStart\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Vechile Expiry Date</label>\r\n                  <my-date-picker name=\"hireExpiry\" [options]=\"hireExpiryOptions\" [(ngModel)]=\"cabData.hireExpiry\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"ownerDriver\">Owner Driver</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"ownerDriver\" name=\"ownerDriver\" [(ngModel)]=\"cabData.ownerDriver\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion2\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Vechicle Documents\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" style=\"padding-top: 10px;\" id=\"collapseThree\" data-parent=\"#accordion2\">\r\n            <div class=\"row\">\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"proofAddress\">Proof of address</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"proofAddress\" (click)=\"validateError($event)\" (change)=\"selectFile($event)\" name=\"proofOfAddress\"\r\n                    required=\"true\">\r\n                  <div id=\"fileName\">\r\n                    <label id=\"fileLabel\">{{ cabData.proofOfAddress || 'No file chosen'}}</label>\r\n                  </div>\r\n                  <div *ngIf=\"!cabData.proofOfAddress && isProofOfAddressSelected\">\r\n                    <span class=\"text-danger\">Proof of address is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"policeDisclosure\">Police disclosure</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"policeDisclosure\" (change)=\"selectFile($event)\" name=\"policeDisclose\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ cabData.policeDisclose || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"licencePhoto\">Licence photo</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"licencePhoto\" (change)=\"selectFile($event)\" name=\"licencePhoto\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ cabData.licencePhoto || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"licencePaper\">Registration paper</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"licencePaper\" (change)=\"selectFile($event)\" name=\"licencePaper\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ cabData.licencePaper || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"pcoLicence\">PCO licence</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"pcoLicence\" (change)=\"selectFile($event)\" name=\"pcoLicence\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ cabData.pcoLicence || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"insurence\">Insurance</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"insurence\" (change)=\"selectFile($event)\" name=\"insurance\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ cabData.insurance || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion3\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseFour\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Vechicle Attributes\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseFour\" data-parent=\"#accordion3\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"fourSeater\">Four Seater</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"fourSeater\" name=\"fourSeater\" [(ngModel)]=\"cabData.fourSeater\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"fiveSeater\">Five Seater</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"fiveSeater\" name=\"fiveSeater\" [(ngModel)]=\"cabData.fiveSeater\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"sixSeater\">Six Seater</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"sixSeater\" name=\"sixSeater\" [(ngModel)]=\"cabData.sixSeater\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"sevenSeater\">Seven Seater</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"sevenSeater\" name=\"lugg\" [(ngModel)]=\"cabData.sevenSeater\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"eightSeater\">Eight Seater</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"eightSeater\" name=\"eightSeater\" [(ngModel)]=\"cabData.eightSeater\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"exexutive\">Exexutive</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"exexutive\" name=\"exexutive\" [(ngModel)]=\"cabData.exexutive\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"goodCOndition\">Good Condition</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"goodCOndition\" name=\"goodCOndition\" [(ngModel)]=\"cabData.goodCOndition\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"avgCondition\">Avg Condition</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"avgCondition\" name=\"avgCondition\" [(ngModel)]=\"cabData.avgCondition\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"wheelChair\">wheel Chair</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"wheelChair\" name=\"wheelChair\" [(ngModel)]=\"cabData.wheelChair\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-1\" style=\"padding-bottom: 60px;\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 m-t-10\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/cabs\"> Cancel</button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"!cabId\" (click)=\"addOrUpdateDriverData(true)\"\r\n        class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Save\r\n      </button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"cabId\" (click)=\"addOrUpdateDriverData(false)\"\r\n        class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Update\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cabs/add-edit-cab/add-edit-cab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditCabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__ = __webpack_require__("./src/app/common/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_driverData_model__ = __webpack_require__("./src/app/cabs/model/driverData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let AddEditCabComponent = class AddEditCabComponent {
    constructor(route, spinnerService, router, baseApiService, driverService, uploader, formBuilder, apiService, httpService, alerts) {
        this.route = route;
        this.spinnerService = spinnerService;
        this.router = router;
        this.baseApiService = baseApiService;
        this.driverService = driverService;
        this.uploader = uploader;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.isLoginValid = false;
        this.isPersonalDetailsValid = false;
        this.isLicencingValid = false;
        this.isProofOfAddressSelected = false;
        this.vendorsList = [];
        this.priceList = [];
        this.statusList = [];
        this.hireDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        // Initialized to specific date (09.10.2018).
        this.hireDate = {
            date: { year: 2018, month: 10, day: 9 }
        };
        this.expiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.expiryDate = { date: { year: 2018, month: 10, day: 9 } };
        this.insurenceExpiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.insurenceExpiryDate = { date: { year: 2018, month: 10, day: 9 } };
        // file uploader
        this.fileToUpload = null;
        this.setDriverData = (res) => {
            this.cabData.licencePhoto = res.licencePhoto || '';
            this.cabData.policeDisclose = res.policeDisclose || '';
            this.cabData.proofOfAddress = res.proofOfAddress || '';
            this.cabData.licencePapers = res.licencePaper || '';
            this.cabData.pcolicence = res.pcoLicence || '';
            this.cabData.inuranceCopy = res.inuranceCopy || '';
        };
        this.cabData = new __WEBPACK_IMPORTED_MODULE_4__model_driverData_model__["a" /* AddCabsDataModel */]();
    }
    addOrUpdateDriverData(isAdd) {
        if (this.validateForm()) {
            this.setDefault();
            this.setDefaultFields();
            this.cabData.hireExpiry = this.cabData.hireExpiry.epoc * 1000;
            this.cabData.inuranceExpiryDate = this.cabData.inuranceExpiryDate.epoc * 1000;
            this.cabData.motExpiry = this.cabData.motExpiry.epoc * 1000;
            this.cabData.inuranceExpiryDate = this.cabData.inuranceExpiryDate.epoc * 1000;
            this.cabData.roadTaxExpiry = this.cabData.roadTaxExpiry.epoc * 1000;
            this.cabData.vehicleStart = this.cabData.vehicleStart.epoc * 1000;
            this.cabData.vendorId = this.cabData.vendorId;
            this.cabData.pricingId = this.cabData.pricingId;
            if (isAdd) {
                this.cabData.cabId = 0;
                this.httpService.post(this.cabData, this.apiService.API_CAB_ADD).subscribe(res => {
                    this.alerts.setMessage('Added successfully!', 'success');
                    this.router.navigate([`/cabs`]);
                });
            }
            else {
                this.cabData.cabId = this.cabId;
                this.httpService.put(this.cabData, this.apiService.API_CAB_UPDATE).subscribe(res => {
                    if (res) {
                        this.cabData = res;
                        this.alerts.setMessage('Updated successfully!', 'success');
                        this.router.navigate([`/cabs`]);
                    }
                    console.log('update success');
                });
            }
        }
    }
    validateError(event) {
        // for proofOfAddress error handling
        const fileName = event.target.name;
        if (fileName === 'proofOfAddress' && event.target.files.length === 0) {
            this.isProofOfAddressSelected = true;
        }
    }
    setDefaultFields() {
        this.cabData.cabId = 0;
        this.cabData.documentId = 0;
        this.cabData.attributeId = 0;
    }
    handleFileInput(files) {
        // this.fileToUpload = files.item(0);
        // handle for png jpg pdf
        this.uploadFileToActivity();
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
        const name = event.target.name;
        if (this.selectedFiles) {
            this.upload(name);
        }
        else {
            if (name === 'proofOfAddress') {
                this.isProofOfAddressSelected = true;
            }
        }
    }
    setUploadFilesValue(name) {
    }
    upload(name) {
        const apiToken = this.baseApiService.getApiToken();
        this.currentFileUpload = this.selectedFiles.item(0);
        this.cabData[name] = this.currentFileUpload.name;
        this.uploader.pushFileToStorage(this.currentFileUpload, apiToken).subscribe(event => {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    }
    validateForm() {
        if (this.cabDetails.valid) {
            this.formInvalid = false;
            return true;
        }
        else {
            return false;
        }
    }
    uploadFileToActivity() {
        const userId = this.baseApiService.getUserId();
        const apiToken = this.baseApiService.getApiToken();
        const fileBrowser = this.fileInput.nativeElement;
        // this.uploader.addToQueue(fileBrowser.files);
        this.uploader.postFile(fileBrowser.files, userId, apiToken).subscribe(data => {
            // do something, if upload success
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getCabDetails(driverId) {
        this.httpService.getById(driverId, this.apiService.API_CAB_DETAILS).subscribe(res => {
            if (res) {
                this.cabData = res;
                // this.setDate(this.driverData.startDate, this.driverData.driverLicenceExpiry);
            }
        });
    }
    setDefault() {
        this.cabData.avgCondition = this.cabData.avgCondition || '';
        this.cabData.cabColor = this.cabData.cabColor || '';
        this.cabData.cabModel = this.cabData.cabModel || '';
        this.cabData.attributeId = this.cabData.attributeId || 0;
        this.cabData.cabType = this.cabData.cabType || '';
        this.cabData.cabNo = this.cabData.cabNo || '';
        this.cabData.documentId = this.cabData.documentId || 0;
        this.cabData.eightSeater = this.cabData.eightSeater || '';
        this.cabData.cabRegistrationNo = this.cabData.cabRegistrationNo || '';
        this.cabData.exexutive = this.cabData.exexutive || '';
        this.cabData.fiveSeater = this.cabData.fiveSeater || '';
        this.cabData.fourSeater = this.cabData.fourSeater || '';
        this.cabData.status = this.cabData.status || 0;
        this.cabData.goodCOndition = this.cabData.goodCOndition || '';
        this.cabData.policeDisclose = this.cabData.policeDisclose || '';
        this.cabData.proofOfAddress = this.cabData.proofOfAddress || '';
        this.cabData.hireExpiry = this.cabData.hireExpiry || 0;
        this.cabData.insurancePolicyNumber = this.cabData.insurancePolicyNumber || '';
        this.cabData.insurer = this.cabData.insurer || '';
        this.cabData.inuranceCopy = this.cabData.inuranceCopy || '';
        this.cabData.inuranceExpiryDate = this.cabData.inuranceExpiryDate || 0;
        this.cabData.licencePapers = this.cabData.licencePapers || '';
        this.cabData.licencePhoto = this.cabData.licencePhoto || '';
        this.cabData.mot = this.cabData.mot || '';
        this.cabData.motExpiry = this.cabData.motExpiry || 0;
        this.cabData.licencePhoto = this.cabData.licencePhoto || '';
        this.cabData.ownerDriver = this.cabData.ownerDriver || '';
        this.cabData.pcolicence = this.cabData.pcolicence || '';
        this.cabData.plateNumber = this.cabData.plateNumber || '';
        this.cabData.policeDisclouser = this.cabData.policeDisclouser || '';
        this.cabData.proofOfAddress = this.cabData.proofOfAddress || '';
        this.cabData.roadTaxExpiry = this.cabData.roadTaxExpiry || 0;
        this.cabData.sevenSeater = this.cabData.sevenSeater || '';
        this.cabData.sixSeater = this.cabData.sixSeater || '';
        this.cabData.vehicleStart = this.cabData.vehicleStart || 0;
        this.cabData.wheelChair = this.cabData.wheelChair || '';
        this.cabData.yearOfRegistration = this.cabData.yearOfRegistration || '';
    }
    setDate(startDate, expiryDate) {
        const sDate = new Date(startDate);
        const eDate = new Date(expiryDate);
        // this.driverData.startDate = { date: { year: sDate.getFullYear(), month: sDate.getMonth() + 1, day: sDate.getDate() } };
        // this.driverData.driverLicenceExpiry = { date: { year: eDate.getFullYear(), month: eDate.getMonth() + 1, day: eDate.getDate() } };
    }
    ngOnInit() {
        this.spinnerService.show();
        this.loadData();
        if (this.route.routeConfig.path === 'cab/edit/:cabId') {
            // tslint:disable-next-line:no-unused-expression
            this.route && this.route.params.subscribe((params) => {
                this.cabId = params['cabId'];
                if (this.cabId) {
                    this.getCabDetails(this.cabId);
                    this.spinnerService.hide();
                }
            });
        }
        else {
            this.formInvalid = false;
            this.cabId = '';
            this.spinnerService.hide();
        }
    }
    loadData() {
        const result = this.httpService.get(this.apiService.API_CAB_POP_UP_Data).subscribe(res => {
            if (res) {
                this.priceList = res['priceList'];
                this.vendorsList = res['vendorList'];
                this.statusList = res['statusList'];
            }
        });
        if (result) {
            this.spinnerService.hide();
        }
    }
    onDateChanged(event) {
    }
    onEndDateChanged(event) {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cabDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddEditCabComponent.prototype, "cabDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddEditCabComponent.prototype, "loginDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('licencing'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddEditCabComponent.prototype, "licencing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], AddEditCabComponent.prototype, "fileInput", void 0);
AddEditCabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-driver',
        template: __webpack_require__("./src/app/cabs/add-edit-cab/add-cab.component.html"),
        styles: [__webpack_require__("./src/app/cabs/add-edit-cab/add-cab.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_6__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__["a" /* FileUploadService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_9__common_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_10__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__["b" /* AlertsService */]])
], AddEditCabComponent);



/***/ }),

/***/ "./src/app/cabs/cabs.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}"

/***/ }),

/***/ "./src/app/cabs/cabs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n    </div>\r\n    <div class=\"col-sm-6 text-right\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/cab/add\">Add Cab</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"mt-5\">\r\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n        <thead style=\"font: bold;\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>Vechicle No Plate</th>\r\n            <th>Vechicle RegNo</th>\r\n            <th>Vechicle Model</th>\r\n            <th>Vechicle Type</th>\r\n            <th>Vechicle Color</th>\r\n            <th>Status</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let cab of cabsData;let index=index;\">\r\n            <td>{{index+1}}</td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{cab.plateNumber}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{cab.cabRegistrationNo}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{cab.cabModel}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{cab.cabType}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{cab.cabColor}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{cab.status}}</span>\r\n            </td>\r\n            <td>\r\n                <span class=\"text-wrap\">\r\n                    <a class=\"pointer\" (click)=\"view($event,cab,viewcontent)\">\r\n                      <span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span>\r\n                    </a> /\r\n                    <a class=\"pointer\" (click)=\"edit($event,cab)\">\r\n                      <span class=\"oi oi-pencil\" title=\"edit\" aria-hidden=\"true\"></span>\r\n                    </a>/\r\n                    <a class=\"pointer\" (click)=\"delete(content,$event,cab, index)\">\r\n                      <span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span>\r\n                    </a>\r\n                  </span>\r\n            </td>\r\n          </tr>\r\n      </table>\r\n      <ng-template #content let-cl=\"close\" let-di=\"dismiss\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\">Delete Confirmation</h5>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Do you want to delete record ?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-right: 61%;\" (click)=\"di('Dismissed from dismiss button')\">Yes</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"cl('Closed from Close button')\">No</button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template #viewcontent let-c=\"close\" let-d=\"dismiss\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Driver Details</h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                  <div class=\"\">\r\n                    <label for=\"personalDetails\">\r\n                      <strong>Personal Details</strong>\r\n                    </label>\r\n                  </div>\r\n                  <form class=\"row detail\">\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">First Name</label>\r\n                      <div class=\"\">\r\n                        <label for=\"firstName\">\r\n                          <strong>{{cabsData.firstName}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n        \r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Last Name</label>\r\n                      <div class=\"\">\r\n                        <label for=\"lastName\">\r\n                          <strong>{{cabsData.lastName}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Gender</label>\r\n                      <div class=\"\">\r\n                        <label for=\"gender\">\r\n                          <strong>{{cabsData.sex}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Email</label>\r\n                      <div class=\"\">\r\n                        <label for=\"email \">\r\n                          <strong>{{cabsData.email}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Mobile Number</label>\r\n                      <div class=\"\">\r\n                        <label for=\"mobileNumber \">\r\n                          <strong>{{cabsData.mobileNo}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Other Phone</label>\r\n                      <div class=\"\">\r\n                        <label for=\"otherPhone\">\r\n                          <strong>{{cabsData.otherPhone}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Alias Name</label>\r\n                      <div class=\"\">\r\n                        <label for=\"aliasName\">\r\n                          <strong>{{cabsData.aliasName}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Country</label>\r\n                      <div class=\"\">\r\n                        <label for=\"country \">\r\n                          <strong>{{cabsData.countryName}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"status\">State</label>\r\n                      <div class=\"\">\r\n                        <label for=\"state \">\r\n                          <strong>{{cabsData.stateName}}</strong>\r\n                        </label>\r\n                      </div>\r\n        \r\n                    </div>\r\n        \r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"city\">City</label>\r\n                      <div class=\"\">\r\n                        <label for=\"city\">\r\n                          <strong>{{cabsData.cityName}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"pinCode\">Pin Code</label>\r\n                      <div class=\"\">\r\n                        <label for=\"pinCode\">\r\n                          <strong>{{cabsData.pinCode}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"Land Mark\">Plot No/Land Mark</label>\r\n                      <div class=\"\">\r\n                        <label for=\"Plot No/Land Mark\">\r\n                          <strong>{{cabsData.street}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"vehicle\">Vehicle</label>\r\n                      <div class=\"\">\r\n                        <label for=\"vehicle\">\r\n                          <strong>{{cabsData.vehicle}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"updatedAt\">Vehicle</label>\r\n                      <div class=\"\">\r\n                        <label for=\"vehicle\">\r\n                          <strong>{{cabsData.vehicle}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"status\">Status</label>\r\n                      <div class=\"\">\r\n                        <label for=\"status\">\r\n                          <strong>{{cabsData.status}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                  <div class=\"\">\r\n                    <label for=\"licencing\">\r\n                      <strong>Licencing</strong>\r\n                    </label>\r\n                  </div>\r\n                  <form class=\"row detail\">\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Hire Date</label>\r\n                      <div class=\"\">\r\n                        <label for=\"hireDate\">\r\n                          <strong>{{cabsData.startDate}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n        \r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Expiry Date</label>\r\n                      <div class=\"\">\r\n                        <label for=\"expiryDate\">\r\n                          <strong>{{cabsData.driverLicenceExpiry}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Driver Licence Number</label>\r\n                      <div class=\"\">\r\n                        <label for=\"driverLicenceNumber\">\r\n                          <strong>{{cabsData.driverLicenceNumber}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                  <div class=\"\">\r\n                    <label for=\"documentDriverPhoto\">\r\n                      <strong>Document & Driver Photo</strong>\r\n                    </label>\r\n                  </div>\r\n                  <form class=\"row detail\">\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Driver photo</label>\r\n                      <div class=\"\">\r\n                        <label for=\"driverphoto\">\r\n                          <strong>{{cabsData.photo}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n        \r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Proof of address</label>\r\n                      <div class=\"\">\r\n                        <label for=\"proofofaddress\">\r\n                          <strong>{{cabsData.proofOfAddress}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Police disclosure </label>\r\n                      <div class=\"\">\r\n                        <label for=\"policedisclosure \">\r\n                          <strong>{{cabsData.policedisclosure}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Agreement</label>\r\n                      <div class=\"\">\r\n                        <label for=\"agreement\">\r\n                          <strong>{{cabsData.agreement}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Licence photo</label>\r\n                      <div class=\"\">\r\n                        <label for=\"licencephoto\">\r\n                          <strong>{{cabsData.licencephoto}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Licence paper</label>\r\n                      <div class=\"\">\r\n                        <label for=\"licencePaper\">\r\n                          <strong>{{cabsData.licencePaper}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">PCO licence</label>\r\n                      <div class=\"\">\r\n                        <label for=\"PCOlicence\">\r\n                          <strong>{{cabsData.pcoLicence}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Insurance</label>\r\n                      <div class=\"\">\r\n                        <label for=\"Insurance\">\r\n                          <strong>{{cabsData.insurance}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"status\">Status</label>\r\n                      <div class=\"\">\r\n                        <label for=\"status\">\r\n                          <strong>{{cabsData.status}}</strong>\r\n                        </label>\r\n                      </div>\r\n        \r\n                    </div>\r\n                  </form>\r\n                </div>\r\n                <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n                  <div class=\"\">\r\n                    <label for=\"attributes\">\r\n                      <strong>Attributes</strong>\r\n                    </label>\r\n                  </div>\r\n                  <form class=\"row detail\">\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Surge PriceGroupName</label>\r\n                      <div class=\"\">\r\n                        <label for=\"surgePriceGroupName\">\r\n                          <strong>createdAt</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n        \r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">CRB</label>\r\n                      <div class=\"\">\r\n                        <label for=\"CRB\">\r\n                          <strong>{{cabsData.crb}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Delivery</label>\r\n                      <div class=\"\">\r\n                        <label for=\"delivery\">\r\n                          <strong>{{cabsData.delivery}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Female</label>\r\n                      <div class=\"\">\r\n                        <label for=\"Female\">\r\n                          <strong>{{cabsData.female}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Luggage</label>\r\n                      <div class=\"\">\r\n                        <label for=\"Luggage\">\r\n                          <strong>{{cabsData.luggage}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">NHS</label>\r\n                      <div class=\"\">\r\n                        <label for=\"NHS\">\r\n                          <strong>{{cabsData.nhs}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Pets</label>\r\n                      <div class=\"\">\r\n                        <label for=\"Pets\">\r\n                          <strong>{{cabsData.pets}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label class=\"control-label\">Uniformed</label>\r\n                      <div class=\"\">\r\n                        <label for=\"Uniformed\">\r\n                          <strong>{{cabsData.uniformed}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"status\">Topman</label>\r\n                      <div class=\"\">\r\n                        <label for=\"Topman\">\r\n                          <strong>{{cabsData.topman}}</strong>\r\n                        </label>\r\n                      </div>\r\n        \r\n                    </div>\r\n        \r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"createdAt\">createdAt</label>\r\n                      <div class=\"\">\r\n                        <label for=\"createdAt\">\r\n                          <strong>{{cabsData.createdAt}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                      <label for=\"updatedAt\">updatedAt</label>\r\n                      <div class=\"\">\r\n                        <label for=\"updatedAt\">\r\n                          <strong>{{cabsData.updatedAt}}</strong>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n            </div>\r\n          </ng-template>\r\n  </div>\r\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/cabs/cabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let CabsComponent = class CabsComponent {
    constructor(http, driverService, spinnerService, chRef, router, baseApiService, httpService, alerts, modalService, apiService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this.router = router;
        this.baseApiService = baseApiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.modalService = modalService;
        this.apiService = apiService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.cabsData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.loadData();
    }
    edit(event, cab) {
        this.router.navigate([`cab/edit/${cab.cabId}`]);
    }
    delete(content, event, cabs, index) {
        this.modalService.open(content, { size: 'sm' }).result.then((closeResult) => {
            // modal close
            console.log('modal closed');
        }, (dismissReason) => {
            this.deleteCabRecord(cabs.cabId);
            this.alerts.setMessage('Deleted successfully!', 'success');
            this.cabsData.splice(index, 1);
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
    loadData() {
        const result = this.httpService.get(this.apiService.API_CAB_LIST).subscribe(res => {
            if (res) {
                this.cabsData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
        });
        if (result) {
            this.spinnerService.hide();
        }
    }
    deleteCabRecord(id) {
        this.httpService.deletById(id, this.apiService.API_CAB_DELETE).subscribe(res => {
        });
    }
    view(event, cabVewData, content) {
        this.spinnerService.show();
        this.httpService.getById(cabVewData.cabId, this.apiService.API_CAB_VIEW).subscribe(res => {
            if (res) {
                this.cabVewData = res;
                this.spinnerService.hide();
            }
        });
        this.modalService.open(content, { size: 'lg' });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], CabsComponent.prototype, "dtElement", void 0);
CabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cabs',
        template: __webpack_require__("./src/app/cabs/cabs.component.html"),
        styles: [__webpack_require__("./src/app/cabs/cabs.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__["b" /* AlertsService */],
        __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_11__common_api_service__["a" /* ApiService */]])
], CabsComponent);



/***/ }),

/***/ "./src/app/cabs/model/driverData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CabDataModel {
    constructor(attributeId, avgCondition, cabColor, cabId, cabModel, cabNo, cabRegistrationNo, cabType, documentId, eightSeater, exexutive, fiveSeater, fourSeater, goodCOndition, hireExpiry, insurancePolicyNumber, insurer, inuranceCopy, inuranceExpiryDate, licencePapers, licencePhoto, mot, motExpiry, ownerDriver, pcolicence, plateNumber, policeDisclouser, pricingId, policeDisclose, proofOfAddress, roadTaxExpiry, sevenSeater, sixSeater, status, vehicleStart, vendorId, wheelChair, yearOfRegistration) {
        this.attributeId = attributeId;
        this.avgCondition = avgCondition;
        this.cabColor = cabColor;
        this.cabId = cabId;
        this.cabModel = cabModel;
        this.cabNo = cabNo;
        this.cabRegistrationNo = cabRegistrationNo;
        this.cabType = cabType;
        this.documentId = documentId;
        this.eightSeater = eightSeater;
        this.exexutive = exexutive;
        this.fiveSeater = fiveSeater;
        this.fourSeater = fourSeater;
        this.goodCOndition = goodCOndition;
        this.hireExpiry = hireExpiry;
        this.insurancePolicyNumber = insurancePolicyNumber;
        this.insurer = insurer;
        this.inuranceCopy = inuranceCopy;
        this.inuranceExpiryDate = inuranceExpiryDate;
        this.licencePapers = licencePapers;
        this.licencePhoto = licencePhoto;
        this.mot = mot;
        this.motExpiry = motExpiry;
        this.ownerDriver = ownerDriver;
        this.pcolicence = pcolicence;
        this.plateNumber = plateNumber;
        this.policeDisclouser = policeDisclouser;
        this.pricingId = pricingId;
        this.policeDisclose = policeDisclose;
        this.proofOfAddress = proofOfAddress;
        this.roadTaxExpiry = roadTaxExpiry;
        this.sevenSeater = sevenSeater;
        this.sixSeater = sixSeater;
        this.status = status;
        this.vehicleStart = vehicleStart;
        this.vendorId = vendorId;
        this.wheelChair = wheelChair;
        this.yearOfRegistration = yearOfRegistration;
    }
}
/* unused harmony export CabDataModel */

class AddCabsDataModel {
    constructor() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddCabsDataModel;



/***/ }),

/***/ "./src/app/common/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ApiService = class ApiService {
    constructor() {
        //public API_BASE_URL = 'http://localhost:8080/taxi/';
        this.API_BASE_URL = 'http://18.191.143.194:8080/taxi/';
        this.API_LOGIN_URL = 'login/user';
        this.API_DRIVER_LIST = 'driver/list';
        this.API_DRIVER_DETAILS = 'driver/details';
        this.API_DRIVER_ADD = 'driver/add';
        this.API_DRIVER_UPDATE = 'driver/update';
        this.API_DRIVER_DELETE = 'driver/delete';
        this.API_DRIVER_VIEW = 'driver/view';
        this.API_COMMON_STATE_LIST = 'common/stateList';
        this.API_COMMON_CAB_LIST = 'common/cabsList';
        this.API_COMMON_CITY_LIST = 'common/cityList';
        this.API_COMMON_COUNTRY_LIST = 'common/countryList';
        this.API_COMMON_ALL_POP_DATA = 'common/popData';
        this.API_COMMON_FILE_HANDLER = 'common/fileHandler';
        this.API_COMMON_FILE_UPLOAD = 'common/uploadFile';
        this.API_COMMON_STATUS_LIST = 'common/statusList';
        this.API_PRICE_UPDATE = 'price/update';
        this.API_PRICE_ADD = 'price/add';
        this.API_PRICE_DELETE = 'price/delete';
        this.API_PRICE_LIST = 'price/list';
        this.API_PRICE_VIEW = 'price/view';
        this.API_PRICE_DETAILS = 'price/details';
        this.API_PRICE_STATUS_VENDOR_LIST = 'price/statusAndVendorList';
        this.API_SURGE_UPDATE = 'surge/update';
        this.API_SURGE_ADD = 'surge/add';
        this.API_SURGE_DELETE = 'surge/delete';
        this.API_SURGE_LIST = 'surge/list';
        this.API_SURGE_VIEW = 'surge/view';
        this.API_SURGE_DETAILS = 'surge/details';
        this.API_CAB_UPDATE = 'cab/update';
        this.API_CAB_ADD = 'cab/add';
        this.API_CAB_DELETE = 'cab/delete';
        this.API_CAB_LIST = 'cab/list';
        this.API_CAB_VIEW = 'cab/view';
        this.API_CAB_DETAILS = 'cab/details';
        this.API_CAB_POP_UP_Data = 'cab/popUPData';
        this.API_DS_UPDATE = 'ds/update';
        this.API_DS_ADD = 'ds/add';
        this.API_DS_DELETE = 'ds/delete';
        this.API_DS_LIST = 'ds/list';
        this.API_DS_VIEW = 'ds/view';
        this.API_DS_DETAILS = 'ds/details';
        this.API_USER_UPDATE = 'user/update';
        this.API_USER_ADD = 'user/add';
        this.API_USER_DELETE = 'user/delete';
        this.API_USER_LIST = 'user/list';
        this.API_USER_VIEW = 'user/view';
        this.API_USER_DETAILS = 'user/details';
        this.API_VENDOR_UPDATE = 'vendor/update';
        this.API_VENDOR_ADD = 'vendor/add';
        this.API_VENDOR_DELETE = 'vendor/delete';
        this.API_VENDOR_LIST = 'vendor/list';
        this.API_VENDOR_VIEW = 'vendor/view';
        this.API_VENDOR_DETAILS = 'vendor/details';
    }
};
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ApiService);



/***/ }),

/***/ "./src/app/common/baseApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const HTTPS = 'https://';
const GET_DRIVER_BY_ID = '';
const POST_DRIVER_DATA = '';
const ADD_DRIVER_DATA = '';
const baseURL = 'http://18.219.43.223:8080/taxi/';
let BaseApiService = class BaseApiService {
    constructor() { }
    getDriverById() {
        return GET_DRIVER_BY_ID;
    }
    getUserInfo() {
        const userInfoJSON = sessionStorage.getItem('userData');
        return JSON.parse(userInfoJSON);
    }
    getUserId() {
        const userInfoJSON = JSON.parse(sessionStorage.getItem('userData'));
        if (userInfoJSON) {
            return userInfoJSON.userId;
        }
    }
    getApiToken() {
        const userInfoJSON = JSON.parse(sessionStorage.getItem('userData'));
        if (userInfoJSON) {
            return userInfoJSON.accessToken;
        }
    }
    getbaseUrl() {
        return baseURL;
    }
};
BaseApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], BaseApiService);



/***/ }),

/***/ "./src/app/common/delete/delete-modal/delete-modal.component.css":
/***/ (function(module, exports) {

module.exports = ".dark-modal .modal-content {\r\n    background-color: #292b2c;\r\n    color: white;\r\n  }\r\n  .dark-modal .close {\r\n    color: white;\r\n  }\r\n  .light-blue-backdrop {\r\n    background-color: #5cb3fd;\r\n  }"

/***/ }),

/***/ "./src/app/common/delete/delete-modal/delete-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Modal title</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>One fine body&hellip;</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openWindowCustomClass(content)\">Modal with window custom class</button>\r\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openBackDropCustomClass(content)\">Modal with backdrop custom class</button>\r\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openSm(content)\">Small modal</button>\r\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openLg(content)\">Large modal</button>\r\n<button class=\"btn btn-outline-primary mb-2 mr-2\" (click)=\"openVerticallyCentered(content)\">Modal vertically centered</button> -->\r\n\r\n<div>\r\n  delete modal\r\n</div>"

/***/ }),

/***/ "./src/app/common/delete/delete-modal/delete-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
let DeleteModalComponent = class DeleteModalComponent {
    constructor() { }
    ngOnInit() {
    }
};
DeleteModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-delete-modal',
        template: __webpack_require__("./src/app/common/delete/delete-modal/delete-modal.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("./src/app/common/delete/delete-modal/delete-modal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DeleteModalComponent);



/***/ }),

/***/ "./src/app/common/driver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DriverService = class DriverService {
    constructor(http) {
        this.http = http;
        this.qparams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
    }
    // loadDriveData
    loadAllDriverData(userId, apiToken) {
        const requestURL = 'http://18.219.43.223:8080/taxi/driver/list';
        this.qparams.set('userId', userId);
        return this.http.get(requestURL, {
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams
        }).map(this.extractData)
            .catch(this.handleError);
    }
    loadDriverDataById(driverId, userId, apiToken) {
        const requestURL = 'http://18.219.43.223:8080/taxi/driver/details';
        // const qParams = { 'id': driverId, 'userId': userId};
        this.qparams.set('id', driverId);
        this.qparams.set('userId', userId);
        return this.http.get(requestURL, {
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams
        }).map(this.extractData)
            .catch(this.handleError);
    }
    deleteDriver(driverId, userId, apiToken) {
        const requestURL = 'http://18.219.43.223:8080/taxi/driver/delete';
        this.qparams.set('id', driverId);
        this.qparams.set('userId', userId);
        return this.http.delete(requestURL, {
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams
        }).map(this.extractData)
            .catch(this.handleError);
    }
    loadState(userId, apiToken) {
        const userIdVal = userId;
        const requestURL = 'http://18.219.43.223:8080/taxi/common/stateList';
        this.qparams.set('userId', userIdVal);
        return this.http.get(requestURL, { withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams }).map(this.extractData).catch(this.handleError);
    }
    loadCabData(userId, apiToken) {
        const userIdVal = userId;
        const requestURL = 'http://18.219.43.223:8080/taxi/common/cabsList';
        this.qparams.set('userId', userIdVal);
        return this.http.get(requestURL, { withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams }).map(this.extractData).catch(this.handleError);
    }
    saveDriverData(userId, driverData, apiToken) {
        const requestURL = 'http://18.219.43.223:8080/taxi/driver/add';
        this.qparams.set('userId', userId);
        return this.http.post(requestURL, driverData, { withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams }).map(this.extractData).catch(this.handleError);
    }
    updateDriverData(userId, driverData, apiToken) {
        const requestURL = 'http://18.219.43.223:8080/taxi/driver/update';
        this.qparams.set('userId', userId);
        return this.http.post(requestURL, driverData, { withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams }).map(this.extractData).catch(this.handleError);
    }
    loadCity(userId, apiToken) {
        const userIdVal = userId;
        const requestURL = 'http://18.219.43.223:8080/taxi/common/cityList';
        this.qparams.set('userId', userIdVal);
        return this.http.get(requestURL, { withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams }).map(this.extractData).catch(this.handleError);
    }
    loadCountry(userId, apiToken) {
        const userIdVal = userId;
        const requestURL = 'http://18.219.43.223:8080/taxi/common/countryList';
        this.qparams.set('userId', userIdVal);
        return this.http.get(requestURL, { withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': apiToken
            }),
            search: this.qparams }).map(this.extractData).catch(this.handleError);
    }
    // getCountryAndCity(userId: any, apiToken: any): Observable<any> {
    //   let result = {
    //     'country': [],
    //     'city': []
    //   };
    //   const requestCountryURL  =  'http://18.219.43.223:8080/taxi/common/countryList';
    //   const userIdVal = userId;
    //   return;
    // }
    extractData(res) {
        const body = res.json();
        return body ? (body.data || body) : body;
    }
    handleError(error) {
        let errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    }
};
DriverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DriverService);



/***/ }),

/***/ "./src/app/common/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let HttpService = class HttpService {
    constructor(http, baseApiService, apiService) {
        this.http = http;
        this.baseApiService = baseApiService;
        this.apiService = apiService;
        this.qparams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
    }
    get(apiName) {
        const requestURL = this.apiService.API_BASE_URL + apiName;
        this.qparams.set('userId', this.baseApiService.getUserId());
        return this.http.get(requestURL, {
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': this.baseApiService.getApiToken()
            }),
            search: this.qparams
        }).map(this.extractData)
            .catch(this.handleError);
    }
    getById(id, apiName) {
        const requestURL = this.apiService.API_BASE_URL + apiName;
        this.qparams.set('userId', this.baseApiService.getUserId());
        this.qparams.set('id', id);
        return this.http.get(requestURL, {
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': this.baseApiService.getApiToken()
            }),
            search: this.qparams
        }).map(this.extractData)
            .catch(this.handleError);
    }
    post(data, apiName) {
        const requestURL = this.apiService.API_BASE_URL + apiName;
        this.qparams.set('userId', this.baseApiService.getUserId());
        return this.http.post(requestURL, data, {
            withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': this.baseApiService.getApiToken()
            }),
            search: this.qparams
        }).map(this.extractData).catch(this.handleError);
    }
    put(data, apiName) {
        const requestURL = this.apiService.API_BASE_URL + apiName;
        this.qparams.set('userId', this.baseApiService.getUserId());
        return this.http.put(requestURL, data, {
            withCredentials: true, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': this.baseApiService.getApiToken()
            }),
            search: this.qparams
        }).map(this.extractData).catch(this.handleError);
    }
    deletById(id, apiName) {
        const requestURL = this.apiService.API_BASE_URL + apiName;
        this.qparams.set('userId', this.baseApiService.getUserId());
        this.qparams.set('id', id);
        return this.http.delete(requestURL, {
            withCredentials: true,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'api_key': this.baseApiService.getApiToken()
            }),
            search: this.qparams
        }).map(this.extractData)
            .catch(this.handleError);
    }
    extractData(res) {
        const body = res.json();
        return body ? (body.data || body) : body;
    }
    handleError(error) {
        let errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    }
};
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_4__common_api_service__["a" /* ApiService */]])
], HttpService);



/***/ }),

/***/ "./src/app/common/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm2015/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm2015/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AuthService = class AuthService {
    constructor(http, apiService) {
        this.http = http;
        this.apiService = apiService;
        this.qparams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.isUserLoggedIn = false;
        this.token = [{
                tokenId: 'HYKKDDR567NNKKKVVFD',
                msg: 'success'
            }]; // Api token return after login success
    }
    checkLoginSuccess(loginData) {
        const headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        const options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        const requestURL = this.apiService.API_BASE_URL + this.apiService.API_LOGIN_URL;
        return this.http.post(requestURL, loginData, options).map(response => this.extractData(response), this.setMockResponse(true))
            .catch(this.handleError);
    }
    extractData(res) {
        const body = res.json();
        return body ? (body.data || body) : body;
    }
    handleError(error) {
        let errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    }
    logoutUser() {
        sessionStorage.clear();
        return;
        // logout api call
        // return Observable.of(this.token).map(o => {
        //     this.isUserLoggedIn = true;
        //     sessionStorage.setItem('authSuccess', this.token[0].tokenId);
        //     JSON.stringify(o);
        // });
    }
    getMockResponse() {
        return this.isUserLoggedIn;
    }
    setMockResponse(setVal) {
        // this.isUserLoggedIn = false;
        return this.isUserLoggedIn = setVal;
    }
    changePassword() {
        // change password API
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__common_api_service__["a" /* ApiService */]])
], AuthService);



/***/ }),

/***/ "./src/app/common/service/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm2015/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let FileUploadService = class FileUploadService {
    constructor(httpClient, apiService) {
        this.httpClient = httpClient;
        this.apiService = apiService;
        this.qparams = new URLSearchParams();
    }
    pushFileToStorage(file, apiToken) {
        const formdata = new FormData();
        const endPoint = this.apiService.API_BASE_URL + this.apiService.API_COMMON_FILE_HANDLER;
        formdata.append('file', file);
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'api_key': apiToken });
        const req = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["e" /* HttpRequest */]('POST', endPoint, formdata, {
            reportProgress: true,
            responseType: 'json'
        });
        return this.httpClient.request(req);
    }
    postFile(fileToUpload, userId, apiToken) {
        const endpoint = this.apiService.API_BASE_URL + this.apiService.API_COMMON_FILE_UPLOAD;
        const formData = new FormData();
        const headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': '*/*', 'api_key': apiToken });
        formData.append('fileKey', fileToUpload);
        return this.httpClient
            .post(endpoint, formData, { headers: headers }).map(this.extractData).catch(this.handleError);
    }
    extractData(res) {
        const body = res.json();
        return body;
    }
    handleError(error) {
        let errMsg;
        if (error instanceof Response) {
            const body = error.json() || '';
            // const err = body.error || JSON.stringify(body);
            // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    }
};
FileUploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
        __WEBPACK_IMPORTED_MODULE_3__common_api_service__["a" /* ApiService */]])
], FileUploadService);



/***/ }),

/***/ "./src/app/delivery/delivery.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}\r\n/* Specific css for <Alert Type> */\r\n.alertsContainer{\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 20px;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type>  {\r\n    border: 1px solid #ffc549;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .iconpanel {\r\n    background:#ffc549;\r\n    color: #fff;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .messagepanel {\r\n    color: #000;\r\n    background: #fff;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .closeicon {\r\n    color: #000;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .closeicon a {\r\n    color: #000;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n}"

/***/ }),

/***/ "./src/app/delivery/delivery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n  </div>\r\n  <div class=\"col-sm-6 text-right\">\r\n    <button type=\"button\" class=\"btn btn-default\" routerLink=\"/tracking\">Tracking Map</button>\r\n  </div>\r\n</div>\r\n<div class=\"mt-5\">\r\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead style=\"font: bold;\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>ContactPerson Name</th>\r\n        <th>Receiptent Name</th>\r\n        <th>Order Type</th>\r\n        <th>Type</th>\r\n        <th>Weight</th>\r\n        <th>Booking</th>\r\n        <th>Units</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let delivery of deliveryData;let index=index;\">\r\n        <td>{{index+1}}</td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.contactPersonName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.reciptentName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.orderType}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.type}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.weight}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.bookingAt}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.noOfUnits}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{delivery.deliveryCurrentStatus}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">\r\n            <a class=\"pointer\" (click)=\"view($event,delivery,viewcontent,index)\">\r\n              <span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span>\r\n            </a> /\r\n            <a class=\"pointer\" (click)=\"edit($event,delivery,index)\">\r\n              <span class=\"oi oi-pencil\" title=\"Assign\" aria-hidden=\"true\"></span>\r\n            </a>/\r\n            <a class=\"pointer\" (click)=\"delete(content,$event,delivery,index)\">\r\n              <span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span>\r\n            </a>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n  </table>\r\n  <ng-template #content let-cl=\"close\" let-di=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Confirmation</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Do you want to delete record ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-right: 61%;\" (click)=\"di('Dismissed from dismiss button')\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"cl('Closed from Close button')\">No</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #viewcontent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Delivery Details</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Contact Person Name</label>\r\n              <div class=\"\">\r\n                <label for=\"contactPersonName\">\r\n                  <strong>{{deliveryDataView.contactPersonName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Reciptent Name</label>\r\n              <div class=\"\">\r\n                <label for=\"reciptentName\">\r\n                  <strong>{{deliveryDataView.reciptentName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Type</label>\r\n              <div class=\"\">\r\n                <label for=\"type\">\r\n                  <strong>{{deliveryDataView.type}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"vendorRegistrationNo\">weight</label>\r\n              <div class=\"\">\r\n                <label for=\"weight\">\r\n                  <strong>{{deliveryDataView.weight}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"vendorRegistrationNo\">weight</label>\r\n              <div class=\"\">\r\n                <label for=\"weight\">\r\n                  <strong>{{deliveryDataView.noOfUnits}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"vendorRegistrationNo\">Booking At</label>\r\n              <div class=\"\">\r\n                <label for=\"weight\">\r\n                  <strong>{{deliveryDataView.bookingAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Status</label>\r\n              <div class=\"\">\r\n                <label for=\"status\">\r\n                  <strong>{{deliveryDataView.deliveryCurrentStatus}}</strong>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"createdAt\">createdAt</label>\r\n              <div class=\"\">\r\n                <label for=\"createdAt\">\r\n                  <strong>{{deliveryDataView.createdAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"updatedAt\">updatedAt</label>\r\n              <div class=\"\">\r\n                <label for=\"updatedAt\">\r\n                  <strong>{{deliveryDataView.updatedAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/delivery/delivery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let DeliveryComponent = class DeliveryComponent {
    constructor(http, driverService, spinnerService, chRef, router, baseApiService, httpService, alerts, config, modalService, apiService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this.router = router;
        this.baseApiService = baseApiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.modalService = modalService;
        this.apiService = apiService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.deliveryData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.httpService.get(this.apiService.API_DS_LIST).subscribe(res => {
            if (res) {
                this.deliveryData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
        });
    }
    edit(event, delivery, index) {
        this.router.navigate([`ds/edit/${delivery.deliveryId}`]);
    }
    view(event, delivery, content, index) {
        this.spinnerService.show();
        this.httpService.getById(delivery.deliveryId, this.apiService.API_DS_VIEW).subscribe(res => {
            if (res) {
                this.deliveryDataView = res;
                this.spinnerService.hide();
            }
        });
        this.modalService.open(content, { size: 'lg' });
    }
    delete(content, event, delivery, index) {
        this.modalService.open(content, { size: 'sm' }).result.then((closeResult) => {
            // modal close
            console.log('modal closed');
        }, (dismissReason) => {
            this.deleteDS(delivery.deliveryId);
            this.alerts.setMessage('Deleted successfully!', 'success');
            // location.reload();
            this.deliveryData.splice(index, 1);
        });
    }
    deleteDS(id) {
        this.httpService.deletById(id, this.apiService.API_DS_DELETE).subscribe(res => {
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], DeliveryComponent.prototype, "dtElement", void 0);
DeliveryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("./src/app/delivery/delivery.component.html"),
        styles: [__webpack_require__("./src/app/delivery/delivery.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__["b" /* AlertsService */], __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */],
        __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_11__common_api_service__["a" /* ApiService */]])
], DeliveryComponent);



/***/ }),

/***/ "./src/app/delivery/tracking/tracking.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 500px;\r\n}\r\n\r\n\r\n* {\r\n  font-family: Lato;\r\n}\r\n\r\n\r\na {\r\n  color: darkblue;\r\n}"

/***/ }),

/***/ "./src/app/delivery/tracking/tracking.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Delivery Tracking</h1>\r\n\r\n<agm-map \r\n  [latitude]=\"lat\"\r\n  [longitude]=\"lng\"\r\n  [zoom]=\"zoom\"\r\n  [disableDefaultUI]=\"false\"\r\n  [zoomControl]=\"false\"\r\n  (mapClick)=\"mapClicked($event)\">\r\n\r\n  <agm-marker \r\n      *ngFor=\"let m of markers; let i = index\"\r\n      (markerClick)=\"clickedMarker(m.label, i)\"\r\n      [latitude]=\"m.lat\"\r\n      [longitude]=\"m.lng\"\r\n      [label]=\"m.label\"\r\n      [markerDraggable]=\"m.draggable\"\r\n      (dragEnd)=\"markerDragEnd(m, $event)\">\r\n      \r\n    <agm-info-window>\r\n      <strong>InfoWindow content</strong>\r\n    </agm-info-window>\r\n    \r\n  </agm-marker>\r\n  \r\n  <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \r\n      [radius]=\"5000\"\r\n      [fillColor]=\"'red'\"\r\n      [circleDraggable]=\"true\"\r\n      [editable]=\"true\">\r\n  </agm-circle>\r\n\r\n</agm-map>"

/***/ }),

/***/ "./src/app/delivery/tracking/tracking.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DSTrackingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DSTrackingComponent = class DSTrackingComponent {
    constructor() {
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        // tslint:disable-next-line:member-ordering
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: true
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true
            },
            {
                lat: 52.723858,
                lng: 6.895982,
                label: 'D',
                draggable: true
            },
            {
                lat: 53.723858,
                lng: 8.895982,
                label: 'E',
                draggable: true
            }
        ];
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    mapClicked($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
    }
};
DSTrackingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'ds-tracking',
        template: __webpack_require__("./src/app/delivery/tracking/tracking.component.html"),
        styles: [__webpack_require__("./src/app/delivery/tracking/tracking.component.css")]
    })
], DSTrackingComponent);



/***/ }),

/***/ "./src/app/driver/add-driver/add-driver.component.css":
/***/ (function(module, exports) {

module.exports = ".accordion.pb-15 {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.card-header:after {\r\n    font-family: 'FontAwesome';  \r\n    content: \"\\f068\";\r\n    float: right;\r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.card-header.collapsed:after {\r\n    /* symbol for \"collapsed\" panels */\r\n    content: \"\\f067\"; \r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.file-width {\r\n    width:99px;\r\n    color:transparent;\r\n}\r\n\r\n#fileLabel {\r\n    position: relative;\r\n    width: 100px;\r\n  }\r\n\r\n#fileLabel {\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n  }\r\n\r\n#fileLabel:after {\r\n    content: attr(data-filetype);\r\n    position: absolute;\r\n    left: 100%;\r\n    top: 0;\r\n}\r\n\r\n/*Show on hover*/\r\n\r\n#fileLabel:hover {\r\n    width: auto  \r\n  }\r\n\r\n#fileLabel:hover:after {\r\n    display: none;  \r\n  }"

/***/ }),

/***/ "./src/app/driver/add-driver/add-driver.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <h2>\r\n          Login Details\r\n        </h2>\r\n      </div>\r\n      <form class=\"row detail border border-dark\" #loginDetails=\"ngForm\">\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Mobile Number *</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"driverData.mobileNo\" name=\"mobileNum\" #mobileNum=\"ngModel\" required=\"true\"\r\n              minlength=\"10\" maxlength=\"10\">\r\n            <div *ngIf=\"mobileNum.errors && (mobileNum.dirty || mobileNum.touched)\">\r\n              <span class=\"text-danger\" [hidden]=\"!mobileNum.errors.required\">Mobile Number is required</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Password *</label>\r\n            <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.password\" name=\"passwrd\"\r\n              #passwrd=\"ngModel\" required=\"true\">\r\n            <div *ngIf=\"passwrd.errors && (passwrd.dirty || passwrd.touched)\">\r\n              <span class=\"text-danger\" [hidden]=\"!passwrd.errors.required\">Password is required</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"firstRow\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseOne\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Personal Details\r\n          </h2>\r\n        </div>\r\n        <form #personalDetails=\"ngForm\" class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseOne\" data-parent=\"#accordion\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">First Name *</label>\r\n                  <input type=\"text\" id=\"driverName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.firstName\" name=\"firstName\"\r\n                    #firstName=\"ngModel\" required=\"true\">\r\n                  <div *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!firstName.errors.required\">First Name is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Last Name *</label>\r\n                  <input type=\"text\" id=\"driverLastName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.lastName\" name=\"lastName\"\r\n                    #lastName=\"ngModel\" required=\"true\">\r\n                  <div *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!lastName.errors.required\">Last Name is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"gender\">Gender *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"gender\" [(ngModel)]=\"driverData.sex\" name=\"sex\" #sex=\"ngModel\" required=\"true\">\r\n                    <option value='male'>Male</option>\r\n                    <option value='female'>Female</option>\r\n                  </select>\r\n                  <div *ngIf=\"sex.errors && (sex.dirty || sex.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!sex.errors.required\">Please select gender</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Email *</label>\r\n                  <input type=\"email\" id=\"emailId\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.email\" name=\"email\" #email=\"ngModel\"\r\n                    required=\"true\">\r\n                </div>\r\n                <div *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n                  <span class=\"text-danger\" [hidden]=\"!email.errors.required\">Email is required</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Other Phone</label>\r\n                  <input type=\"text\" id=\"otherPhone\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.otherPhone\" name=\"otherPhoneNum\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Alias Name</label>\r\n                  <input type=\"text\" id=\"aliasName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.aliasName\" name=\"aliasNam\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"country\">Country *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"country\" [(ngModel)]=\"driverData.countryId\" name=\"country\" #country=\"ngModel\" required=\"true\">\r\n                    <option *ngFor=\"let country of countryList\" [ngValue]=\"country.countriId\">{{country.name}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"country.errors && (country.dirty || country.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!country.errors.required\">Country is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"state\">State *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"state\" [(ngModel)]=\"driverData.stateId\" name=\"state\" #state=\"ngModel\" required=\"true\">\r\n                    <option *ngFor=\"let state of statesList\" [ngValue]=\"state.stateId\">{{state.stateName}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"state.errors && (state.dirty || state.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!state.errors.required\">State is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"city\">City *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"city\" [(ngModel)]=\"driverData.cityId\" #city=\"ngModel\" name=\"city\" required=\"true\">\r\n                    <option *ngFor=\"let city of cityList\" [ngValue]=\"city.cityId\">{{city.citieName}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"city.errors && (city.dirty || city.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!city.errors.required\">City is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Pin Code *</label>\r\n                  <input type=\"text\" id=\"pinCode\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.zip\" #pinCode=\"ngModel\" name=\"pinCode\"\r\n                    required=\"true\">\r\n                  <div *ngIf=\"pinCode.errors && (pinCode.dirty || pinCode.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!pinCode.errors.required\">Pincode is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Plot No/Land Mark *</label>\r\n                  <input type=\"text\" id=\"plotNumber\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.street\" #landMark=\"ngModel\"\r\n                    name=\"landMark\" required=\"true\">\r\n                  <div *ngIf=\"landMark.errors && (landMark.dirty || landMark.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!landMark.errors.required\">Land Mark is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"vehicle\">Vehicle *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"cabId\" [(ngModel)]=\"driverData.cabId\" #cabId=\"ngModel\" name=\"cabId\" required=\"true\">\r\n                    <option *ngFor=\"let cab of cabList\" [ngValue]=\"cab.cabId\">{{cab.cabType}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"cabId.errors && (cabId.dirty || cabId.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!cabId.errors.required\">Cab Id is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"status\">Status *</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"statusId\" [(ngModel)]=\"driverData.status\" #status=\"ngModel\" name=\"status\" required=\"true\">\r\n                    <option *ngFor=\"let status of statusList\" [ngValue]=status.id>{{status.statusName}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"status.errors && (status.dirty || status.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!status.errors.required\">Status is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion1\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Licencing\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\" #licencing=\"ngForm\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseTwo\" data-parent=\"#accordion1\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Hire Date</label>\r\n                  <my-date-picker name=\"hireDate\" [options]=\"hireDateOptions\" [(ngModel)]=\"driverData.startDate\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Driver Licence Number</label>\r\n                  <input type=\"text\" id=\"driverLicenceNumber\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"driverData.driverLicenceNumber\"\r\n                    name=\"licenceNumber\" maxlength=\"60\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Expiry Date</label>\r\n                  <my-date-picker name=\"expiryDate\" [options]=\"expiryDateOptions\" [(ngModel)]=\"driverData.driverLicenceExpiry\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Driver Insurance</label>\r\n                  <input type=\"text\" id=\"driverInsurence\" class=\"form-control\" placeholder=\"\" name=\"driverInsurence\" [(ngModel)]=\"driverData.insurance\" required>\r\n                </div>\r\n              </div> -->\r\n              <!-- <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Driver Insurence Expiry Date</label>\r\n                  <my-date-picker name=\"insurenceExpiryDate\" [options]=\"InsurenceExpiryDateOptions\" required></my-date-picker>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion2\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Document & Driver Photo\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" style=\"padding-top: 10px;\" id=\"collapseThree\" data-parent=\"#accordion2\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"driverPhoto\">Driver photo</label>\r\n                  <input type=\"file\" class=\"file-width\" (change)=\"selectFile($event)\" name=\"photo\">\r\n                  <div id=\"fileName\">\r\n                    <label id=\"fileLabel\">{{ driverData.photo || 'No file chosen'}}</label>\r\n                  </div>\r\n\r\n                  <!-- <button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button> -->\r\n                  <!-- <input type=\"file\" #fileInput multiple (change)=\"uploadFileToActivity()\" name=\"driverPhotos\" [(ngModel)]=\"driverData.photo\"/> -->\r\n                  <!-- <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" name=\"driverPhoto\" [(ngModel)]=\"driverData.photo\"> -->\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"proofAddress\">Proof of address</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"proofAddress\" (click)=\"validateError($event)\" (change)=\"selectFile($event)\" name=\"proofOfAddress\"\r\n                    required=\"true\">\r\n                  <div id=\"fileName\">\r\n                    <label id=\"fileLabel\">{{ driverData.proofOfAddress || 'No file chosen'}}</label>\r\n                  </div>\r\n                  <div *ngIf=\"!driverData.proofOfAddress && isProofOfAddressSelected\">\r\n                    <span class=\"text-danger\">Proof of address is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"policeDisclosure\">Police disclosure</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"policeDisclosure\" (change)=\"selectFile($event)\" name=\"policeDisclose\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ driverData.policeDisclose || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"agreement\" id=\"agree-val\" class=\"fileUpload\">Agreement</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"agreement\" (change)=\"selectFile($event)\" name=\"agreement\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ driverData.agreement || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"licencePhoto\">Licence photo</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"licencePhoto\" (change)=\"selectFile($event)\" name=\"licencePhoto\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ driverData.licencePhoto || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"licencePaper\">Licence paper</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"licencePaper\" (change)=\"selectFile($event)\" name=\"licencePaper\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ driverData.licencePaper || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"pcoLicence\">PCO licence</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"pcoLicence\" (change)=\"selectFile($event)\" name=\"pcoLicence\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ driverData.pcoLicence || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"insurence\">Insurance</label>\r\n                  <input type=\"file\" class=\"file-width\" id=\"insurence\" (change)=\"selectFile($event)\" name=\"insurance\">\r\n                  <div>\r\n                    <label id=\"fileLabel\">{{ driverData.insurance || 'No file chosen'}}</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion3\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseFour\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Attributes\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseFour\" data-parent=\"#accordion3\">\r\n            <div class=\"row\">\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"crb\">CRB</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"crb\" name=\"selectCRB\" [(ngModel)]=\"driverData.crb\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"delivery\">Delivery</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"delivery\" name=\"selectDelivery\" [(ngModel)]=\"driverData.delivery\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"female\">Female</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"female\" name=\"femele\" [(ngModel)]=\"driverData.female\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"luggage\">Luggage</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"luggage\" name=\"lugg\" [(ngModel)]=\"driverData.luggage\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"nhs\">NHS</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"nhs\" name=\"selectNHS\" [(ngModel)]=\"driverData.nhs\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"file\">Pets</label>\r\n                  <input type=\"text\" id=\"pets\" class=\"form-control\" placeholder=\"\" name=\"selectPets\" [(ngModel)]=\"driverData.pets\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"unformed\">Uniformed</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"unformed\" name=\"uniform\" [(ngModel)]=\"driverData.uniformed\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"topman\">Topman</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"topman\" name=\"topMan\" [(ngModel)]=\"driverData.topman\">\r\n                    <option value='yes'>Yes</option>\r\n                    <option value='no'>No</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-1\" style=\"padding-bottom: 60px;\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 m-t-10\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/driver\"> Cancel</button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"!driverId\" (click)=\"addOrUpdateDriverData(true)\"\r\n        class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Save\r\n      </button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"driverId\" (click)=\"addOrUpdateDriverData(false)\"\r\n        class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Update\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/driver/add-driver/add-driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__ = __webpack_require__("./src/app/common/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_driverData_model__ = __webpack_require__("./src/app/driver/model/driverData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let AddDriverComponent = class AddDriverComponent {
    constructor(route, spinnerService, router, baseApiService, driverService, uploader, formBuilder, apiService, httpService, alerts) {
        this.route = route;
        this.spinnerService = spinnerService;
        this.router = router;
        this.baseApiService = baseApiService;
        this.driverService = driverService;
        this.uploader = uploader;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.isLoginValid = false;
        this.isPersonalDetailsValid = false;
        this.isLicencingValid = false;
        this.isProofOfAddressSelected = false;
        this.statesList = [];
        this.countryList = [];
        this.statusList = [];
        this.cityList = [];
        this.cabList = [];
        this.hireDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        // Initialized to specific date (09.10.2018).
        this.hireDate = {
            date: { year: 2018, month: 10, day: 9 }
        };
        this.expiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.expiryDate = { date: { year: 2018, month: 10, day: 9 } };
        this.insurenceExpiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.insurenceExpiryDate = { date: { year: 2018, month: 10, day: 9 } };
        // file uploader
        this.fileToUpload = null;
        this.setDriverData = (res) => {
            this.driverData.agreement = res.agreement || '';
            this.driverData.insurance = res.insurance || '';
            this.driverData.licencePaper = res.licencePaper || '';
            this.driverData.licencePhoto = res.licencePhoto || '';
            this.driverData.pcoLicence = res.pcoLicence || '';
            this.driverData.photo = res.photo || '';
            this.driverData.policeDisclose = res.policeDisclose || '';
            this.driverData.proofOfAddress = res.proofOfAddress || '';
        };
        this.driverData = new __WEBPACK_IMPORTED_MODULE_4__model_driverData_model__["a" /* AddDriverDataModel */]();
    }
    addOrUpdateDriverData(isAdd) {
        if (this.validateForm()) {
            this.setDefault();
            this.setDefaultFields();
            this.driverData.startDate = this.driverData.startDate.epoc * 1000;
            this.driverData.driverLicenceExpiry = this.driverData.driverLicenceExpiry.epoc * 1000;
            if (isAdd) {
                this.driverData.driverId = 0;
                this.httpService.post(this.driverData, this.apiService.API_DRIVER_ADD).subscribe(res => {
                    this.alerts.setMessage('Added successfully!', 'success');
                    this.router.navigate([`/driver`]);
                });
            }
            else {
                this.driverData.driverId = this.driverData.driverId;
                this.httpService.put(this.driverData, this.apiService.API_DRIVER_UPDATE).subscribe(res => {
                    if (res) {
                        this.driverData = res;
                        this.alerts.setMessage('Updated successfully!', 'success');
                        this.router.navigate([`/driver`]);
                    }
                    console.log('update success');
                });
            }
        }
    }
    validateError(event) {
        // for proofOfAddress error handling
        const fileName = event.target.name;
        if (fileName === 'proofOfAddress' && event.target.files.length === 0) {
            this.isProofOfAddressSelected = true;
        }
    }
    setDefaultFields() {
        this.driverData.address = 'Rajajinagar';
        this.driverData.driverAttribteId = 0;
        this.driverData.driverDocumentId = 0;
    }
    handleFileInput(files) {
        // this.fileToUpload = files.item(0);
        // handle for png jpg pdf
        this.uploadFileToActivity();
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
        const name = event.target.name;
        if (this.selectedFiles) {
            this.upload(name);
        }
        else {
            if (name === 'proofOfAddress') {
                this.isProofOfAddressSelected = true;
            }
        }
    }
    setUploadFilesValue(name) {
    }
    upload(name) {
        const apiToken = this.baseApiService.getApiToken();
        this.currentFileUpload = this.selectedFiles.item(0);
        this.driverData[name] = this.currentFileUpload.name;
        this.uploader.pushFileToStorage(this.currentFileUpload, apiToken).subscribe(event => {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    }
    validateForm() {
        if (this.loginDetails.valid && this.personalDetails.valid && this.licencing.valid) {
            this.formInvalid = false;
            return true;
        }
        else {
            return false;
        }
    }
    uploadFileToActivity() {
        const userId = this.baseApiService.getUserId();
        const apiToken = this.baseApiService.getApiToken();
        const fileBrowser = this.fileInput.nativeElement;
        // this.uploader.addToQueue(fileBrowser.files);
        this.uploader.postFile(fileBrowser.files, userId, apiToken).subscribe(data => {
            // do something, if upload success
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getDriverDetails(driverId) {
        this.httpService.getById(driverId, this.apiService.API_DRIVER_DETAILS).subscribe(res => {
            if (res) {
                this.driverData = res;
                this.setDate(this.driverData.startDate, this.driverData.driverLicenceExpiry);
            }
        });
    }
    setDefault() {
        alert(this.driverData.cabId);
        this.driverData.mobileNo = this.driverData.mobileNo || 0;
        this.driverData.firstName = this.driverData.firstName || '';
        this.driverData.lastName = this.driverData.lastName || '';
        this.driverData.countryId = this.driverData.countryId || 0;
        this.driverData.mobileNo = this.driverData.mobileNo || 0;
        this.driverData.password = this.driverData.password || '';
        this.driverData.stateId = this.driverData.stateId || 0;
        this.driverData.cityId = this.driverData.cityId || 0;
        this.driverData.sex = this.driverData.sex || '';
        this.driverData.email = this.driverData.email || '';
        this.driverData.zip = this.driverData.zip || '';
        this.driverData.pets = this.driverData.pets || '';
        this.driverData.status = this.driverData.status || 0;
        this.driverData.photo = this.driverData.photo || '';
        this.driverData.policeDisclose = this.driverData.policeDisclose || '';
        this.driverData.proofOfAddress = this.driverData.proofOfAddress || '';
        this.driverData.street = this.driverData.street || '';
        this.driverData.topman = this.driverData.topman || '';
        this.driverData.uniformed = this.driverData.uniformed || '';
        this.driverData.otherPhone = this.driverData.otherPhone || 0;
        this.driverData.crb = this.driverData.crb || '';
        this.driverData.aliasName = this.driverData.aliasName || '';
        this.driverData.cabId = this.driverData.cabId || 0;
        this.driverData.agreement = this.driverData.agreement || '';
        this.driverData.licencePaper = this.driverData.licencePaper || '';
        this.driverData.licencePhoto = this.driverData.licencePhoto || '';
        this.driverData.pcoLicence = this.driverData.pcoLicence || '';
        this.driverData.insurance = this.driverData.insurance || '';
        this.driverData.delivery = this.driverData.delivery || '';
        this.driverData.female = this.driverData.female || '';
        this.driverData.luggage = this.driverData.luggage || '';
        this.driverData.nhs = this.driverData.nhs || '';
        this.driverData.driverLicenceNumber = this.driverData.driverLicenceNumber || '';
    }
    setDate(startDate, expiryDate) {
        const sDate = new Date(startDate);
        const eDate = new Date(expiryDate);
        this.driverData.startDate = { date: { year: sDate.getFullYear(), month: sDate.getMonth() + 1, day: sDate.getDate() } };
        this.driverData.driverLicenceExpiry = { date: { year: eDate.getFullYear(), month: eDate.getMonth() + 1, day: eDate.getDate() } };
    }
    ngOnInit() {
        this.spinnerService.show();
        this.loadData();
        if (this.route.routeConfig.path === 'driver/editDriver/:driverId') {
            // tslint:disable-next-line:no-unused-expression
            this.route && this.route.params.subscribe((params) => {
                this.driverId = params['driverId'];
                if (this.driverId) {
                    this.getDriverDetails(this.driverId);
                    this.spinnerService.hide();
                }
            });
        }
        else {
            this.formInvalid = false;
            this.driverId = '';
            this.spinnerService.hide();
        }
    }
    loadData() {
        const result = this.httpService.get(this.apiService.API_COMMON_ALL_POP_DATA).subscribe(res => {
            if (res) {
                this.statesList = res['statesList'];
                this.cabList = res['cabList'];
                this.cityList = res['cityList'];
                this.countryList = res['countryList'];
                this.statusList = res['statusList'];
            }
        });
        if (result) {
            this.spinnerService.hide();
        }
    }
    onDateChanged(event) {
        // alert(event.epoc);
        // this.surgingData.surgeExpiryStartDate = event.epoc;
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }
    onEndDateChanged(event) {
        // this.surgingData.surgeExpiryEndDate = event.epoc;
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('personalDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddDriverComponent.prototype, "personalDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddDriverComponent.prototype, "loginDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('licencing'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddDriverComponent.prototype, "licencing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], AddDriverComponent.prototype, "fileInput", void 0);
AddDriverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-driver',
        template: __webpack_require__("./src/app/driver/add-driver/add-driver.component.html"),
        styles: [__webpack_require__("./src/app/driver/add-driver/add-driver.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_6__common_driver_service__["a" /* DriverService */],
        __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__["a" /* FileUploadService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_9__common_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_10__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__["b" /* AlertsService */]])
], AddDriverComponent);



/***/ }),

/***/ "./src/app/driver/driver.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}"

/***/ }),

/***/ "./src/app/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <!-- <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n      <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-default\" type=\"button\">Go!</button>\r\n      </span>\r\n    </div> -->\r\n    <!-- /input-group -->\r\n  </div>\r\n  <div class=\"col-sm-6 text-right\">\r\n    <button type=\"button\" class=\"btn btn-default\" routerLink=\"/driver/addDriver\">Add Driver</button>\r\n  </div>\r\n</div>\r\n<div class=\"mt-5\">\r\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead style=\"font: bold;\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Email</th>\r\n        <th>Mobile Number</th>\r\n        <th>Sex</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let driver of driverData;let index=index;\">\r\n        <td>{{index+1}}</td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{driver.firstName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{driver.lastName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{driver.email}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{driver.mobileNo}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{driver.sex}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{driver.status}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">\r\n            <a class=\"pointer\" (click)=\"view($event,driver,viewcontent)\">\r\n              <span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span>\r\n            </a> /\r\n            <a class=\"pointer\" (click)=\"edit($event,driver)\">\r\n              <span class=\"oi oi-pencil\" title=\"edit\" aria-hidden=\"true\"></span>\r\n            </a>/\r\n            <a class=\"pointer\" (click)=\"delete(content,$event,driver, index)\">\r\n              <span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span>\r\n            </a>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n  </table>\r\n  <ng-template #content let-cl=\"close\" let-di=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Confirmation</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Do you want to delete record ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-right: 61%;\" (click)=\"di('Dismissed from dismiss button')\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"cl('Closed from Close button')\">No</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #viewcontent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Driver Details</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"personalDetails\">\r\n              <strong>Personal Details</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">First Name</label>\r\n              <div class=\"\">\r\n                <label for=\"firstName\">\r\n                  <strong>{{driverVewData.firstName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Last Name</label>\r\n              <div class=\"\">\r\n                <label for=\"lastName\">\r\n                  <strong>{{driverVewData.lastName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Gender</label>\r\n              <div class=\"\">\r\n                <label for=\"gender\">\r\n                  <strong>{{driverVewData.sex}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Email</label>\r\n              <div class=\"\">\r\n                <label for=\"email \">\r\n                  <strong>{{driverVewData.email}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Mobile Number</label>\r\n              <div class=\"\">\r\n                <label for=\"mobileNumber \">\r\n                  <strong>{{driverVewData.mobileNo}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Other Phone</label>\r\n              <div class=\"\">\r\n                <label for=\"otherPhone\">\r\n                  <strong>{{driverVewData.otherPhone}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Alias Name</label>\r\n              <div class=\"\">\r\n                <label for=\"aliasName\">\r\n                  <strong>{{driverVewData.aliasName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Country</label>\r\n              <div class=\"\">\r\n                <label for=\"country \">\r\n                  <strong>{{driverVewData.countryName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">State</label>\r\n              <div class=\"\">\r\n                <label for=\"state \">\r\n                  <strong>{{driverVewData.stateName}}</strong>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"city\">City</label>\r\n              <div class=\"\">\r\n                <label for=\"city\">\r\n                  <strong>{{driverVewData.cityName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"pinCode\">Pin Code</label>\r\n              <div class=\"\">\r\n                <label for=\"pinCode\">\r\n                  <strong>{{driverVewData.pinCode}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"Land Mark\">Plot No/Land Mark</label>\r\n              <div class=\"\">\r\n                <label for=\"Plot No/Land Mark\">\r\n                  <strong>{{driverVewData.street}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"vehicle\">Vehicle</label>\r\n              <div class=\"\">\r\n                <label for=\"vehicle\">\r\n                  <strong>{{driverVewData.vehicle}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"updatedAt\">Vehicle</label>\r\n              <div class=\"\">\r\n                <label for=\"vehicle\">\r\n                  <strong>{{driverVewData.vehicle}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Status</label>\r\n              <div class=\"\">\r\n                <label for=\"status\">\r\n                  <strong>{{driverVewData.status}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"licencing\">\r\n              <strong>Licencing</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Hire Date</label>\r\n              <div class=\"\">\r\n                <label for=\"hireDate\">\r\n                  <strong>{{driverVewData.startDate}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Expiry Date</label>\r\n              <div class=\"\">\r\n                <label for=\"expiryDate\">\r\n                  <strong>{{driverVewData.driverLicenceExpiry}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Driver Licence Number</label>\r\n              <div class=\"\">\r\n                <label for=\"driverLicenceNumber\">\r\n                  <strong>{{driverVewData.driverLicenceNumber}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"documentDriverPhoto\">\r\n              <strong>Document & Driver Photo</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Driver photo</label>\r\n              <div class=\"\">\r\n                <label for=\"driverphoto\">\r\n                  <strong>{{driverVewData.photo}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Proof of address</label>\r\n              <div class=\"\">\r\n                <label for=\"proofofaddress\">\r\n                  <strong>{{driverVewData.proofOfAddress}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Police disclosure </label>\r\n              <div class=\"\">\r\n                <label for=\"policedisclosure \">\r\n                  <strong>{{driverVewData.policedisclosure}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Agreement</label>\r\n              <div class=\"\">\r\n                <label for=\"agreement\">\r\n                  <strong>{{driverVewData.agreement}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Licence photo</label>\r\n              <div class=\"\">\r\n                <label for=\"licencephoto\">\r\n                  <strong>{{driverVewData.licencephoto}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Licence paper</label>\r\n              <div class=\"\">\r\n                <label for=\"licencePaper\">\r\n                  <strong>{{driverVewData.licencePaper}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">PCO licence</label>\r\n              <div class=\"\">\r\n                <label for=\"PCOlicence\">\r\n                  <strong>{{driverVewData.pcoLicence}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Insurance</label>\r\n              <div class=\"\">\r\n                <label for=\"Insurance\">\r\n                  <strong>{{driverVewData.insurance}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Status</label>\r\n              <div class=\"\">\r\n                <label for=\"status\">\r\n                  <strong>{{driverVewData.status}}</strong>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"attributes\">\r\n              <strong>Attributes</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Surge PriceGroupName</label>\r\n              <div class=\"\">\r\n                <label for=\"surgePriceGroupName\">\r\n                  <strong>createdAt</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">CRB</label>\r\n              <div class=\"\">\r\n                <label for=\"CRB\">\r\n                  <strong>{{driverVewData.crb}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Delivery</label>\r\n              <div class=\"\">\r\n                <label for=\"delivery\">\r\n                  <strong>{{driverVewData.delivery}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Female</label>\r\n              <div class=\"\">\r\n                <label for=\"Female\">\r\n                  <strong>{{driverVewData.female}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Luggage</label>\r\n              <div class=\"\">\r\n                <label for=\"Luggage\">\r\n                  <strong>{{driverVewData.luggage}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">NHS</label>\r\n              <div class=\"\">\r\n                <label for=\"NHS\">\r\n                  <strong>{{driverVewData.nhs}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Pets</label>\r\n              <div class=\"\">\r\n                <label for=\"Pets\">\r\n                  <strong>{{driverVewData.pets}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Uniformed</label>\r\n              <div class=\"\">\r\n                <label for=\"Uniformed\">\r\n                  <strong>{{driverVewData.uniformed}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Topman</label>\r\n              <div class=\"\">\r\n                <label for=\"Topman\">\r\n                  <strong>{{driverVewData.topman}}</strong>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"createdAt\">createdAt</label>\r\n              <div class=\"\">\r\n                <label for=\"createdAt\">\r\n                  <strong>{{driverVewData.createdAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"updatedAt\">updatedAt</label>\r\n              <div class=\"\">\r\n                <label for=\"updatedAt\">\r\n                  <strong>{{driverVewData.updatedAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let DriverComponent = class DriverComponent {
    constructor(http, driverService, spinnerService, cde, router, baseApiService, apiService, httpService, alerts, modalService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.cde = cde;
        this.router = router;
        this.baseApiService = baseApiService;
        this.apiService = apiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.modalService = modalService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.driverData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.loadData();
    }
    loadData() {
        const result = this.httpService.get(this.apiService.API_DRIVER_LIST).subscribe(res => {
            if (res) {
                this.driverData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
            this.cde.detectChanges();
            this.cde.markForCheck();
        });
        if (result) {
            this.spinnerService.hide();
        }
    }
    delete(content, event, driver, index) {
        this.modalService.open(content, { size: 'sm' }).result.then((closeResult) => {
            // modal close
            console.log('modal closed');
        }, (dismissReason) => {
            this.deleteDriverRecords(driver.driverId);
            this.alerts.setMessage('Deleted successfully!', 'success');
            // location.reload();
            this.driverData.splice(index, 1);
        });
    }
    deleteDriverRecords(id) {
        this.httpService.deletById(id, this.apiService.API_DRIVER_DELETE).subscribe(res => {
        });
    }
    edit(event, driver) {
        this.router.navigate([`/driver/editDriver/${driver.driverId}`]);
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
    view(event, driverVewData, content) {
        this.spinnerService.show();
        this.httpService.getById(driverVewData.driverId, this.apiService.API_DRIVER_VIEW).subscribe(res => {
            if (res) {
                this.driverVewData = res;
                this.spinnerService.hide();
            }
        });
        this.modalService.open(content, { size: 'lg' });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], DriverComponent.prototype, "dtElement", void 0);
DriverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-driver',
        template: __webpack_require__("./src/app/driver/driver.component.html"),
        styles: [__webpack_require__("./src/app/driver/driver.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_8__common_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_9__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_10_angular_alert_module__["b" /* AlertsService */],
        __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
], DriverComponent);



/***/ }),

/***/ "./src/app/driver/model/driverData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class DriverDataModel {
    constructor(driverId, userId, role, status, firstName, lastName, mobileNumber, email, photo, address, cabId, street, zip, cityId, stateId, countryId, sex, password, otherPhone, startDate, driverLicenceNumber, driverLicenceExpiry, crb, delivery, female, luggage, NHS, pets, uniformed, topman, driverAttribteId, policeDisclose, proofOfAddress, licencePhoto, pcoLicence, agreement, licencePaper, insurance, driverDocumentId, aliasName) {
        this.driverId = driverId;
        this.userId = userId;
        this.role = role;
        this.status = status;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.photo = photo;
        this.address = address;
        this.cabId = cabId;
        this.street = street;
        this.zip = zip;
        this.cityId = cityId;
        this.stateId = stateId;
        this.countryId = countryId;
        this.sex = sex;
        this.password = password;
        this.otherPhone = otherPhone;
        this.startDate = startDate;
        this.driverLicenceNumber = driverLicenceNumber;
        this.driverLicenceExpiry = driverLicenceExpiry;
        this.crb = crb;
        this.delivery = delivery;
        this.female = female;
        this.luggage = luggage;
        this.NHS = NHS;
        this.pets = pets;
        this.uniformed = uniformed;
        this.topman = topman;
        this.driverAttribteId = driverAttribteId;
        this.policeDisclose = policeDisclose;
        this.proofOfAddress = proofOfAddress;
        this.licencePhoto = licencePhoto;
        this.pcoLicence = pcoLicence;
        this.agreement = agreement;
        this.licencePaper = licencePaper;
        this.insurance = insurance;
        this.driverDocumentId = driverDocumentId;
        this.aliasName = aliasName;
    }
}
/* unused harmony export DriverDataModel */

class AddDriverDataModel {
    constructor() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddDriverDataModel;



/***/ }),

/***/ "./src/app/finance/finance.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/finance/finance.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  finance works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/finance/finance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FinanceComponent = class FinanceComponent {
    constructor() { }
    ngOnInit() {
        console.log(sessionStorage.getItem('authSuccess'));
    }
};
FinanceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-finance',
        template: __webpack_require__("./src/app/finance/finance.component.html"),
        styles: [__webpack_require__("./src/app/finance/finance.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FinanceComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 50px;\r\n    line-height: 30px;\r\n    background-color: #212529;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container\">\r\n      <span class=\"text-muted\">&copy; Some copy right text</span>\r\n    </div>\r\n  </footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/***/ (function(module, exports) {

module.exports = ".form-bg{\r\n    background-color: #eee;\r\n    color: #666;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    border: 1px solid #fff;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    margin-bottom: 6%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40%;\r\n    height: 40%;\r\n}"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 d-flex justify-content-center\">\r\n  <div class=\"form-bg\">\r\n      <h2 class=\"align-center\">Forgot Password</h2>\r\n    <form class=\"form-horizontal\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"email\" class=\"col-sm-2 col-form-label\">Email:</label>\r\n        <div class=\"col-xs-9\">\r\n          <input type=\"email\" class=\"form-control\" id=\"first_name\" name=\"email\">\r\n        </div>\r\n        <div class=\"col-xs-3 col\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">Send OTP</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"enter_otp\" class=\"col-sm-2 col-form-label\">Enter OTP:</label>\r\n        <div class=\"col-xs-9\">\r\n          <input type=\"text\" class=\"form-control\" id=\"enter_otp\" name=\"enter_otp\">\r\n        </div>\r\n        <div class=\"col-xs-3 col\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">Verify OTP</button>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"offset-xs-3 col-xs-9\">\r\n          <button type=\"button\" class=\"btn btn-link\" routerLink=\"/login\">Back to Login</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__("./src/app/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__("./src/app/forgot-password/forgot-password.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\n.btn-margin {\r\n    margin-left: 27%;\r\n    margin-right: 1%;\r\n}\r\n\r\n.form-bg{\r\n    background-color: #eee;\r\n    color: #666;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    border: 1px solid #fff;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    margin-bottom: 6%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40%;\r\n    height: 40%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 d-flex justify-content-center\">\r\n    <div class=\"form-bg\">\r\n        <h2 style=\"text-align: center\">Login</h2>\r\n        <form  class=\"form-horizontal\" name=\"form\" (ngSubmit)=\"onSubmit()\" #login=\"ngForm\">\r\n            <div class=\"form-group row\" [ngClass]=\"\">\r\n                <label for=\"email\" class=\"col-sm-3 col-form-label\">Email Id:*</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"email\" class=\"form-control\" name=\"email\" ngModel required email #email=\"ngModel\" [(ngModel)]= \"loginData.email\"/>\r\n                </div>\r\n                <div *ngIf=\"login.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n            </div>\r\n            <div class=\"form-group row\" [ngClass]=\"{ 'has-error': login.submitted && !password.valid }\">\r\n                <label for=\"password\" class=\"col-sm-3 col-form-label\">Password:*</label>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" ngModel required #password=\"ngModel\" [(ngModel)]=\"loginData.password\"/>\r\n                </div>\r\n                <div *ngIf=\"login.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n            <div class=\"align-center\">\r\n                    <button class=\"btn btn-default btn-margin\" routerLink=\"/login\" [disabled]=\"!login.valid\" routerLinkActive=\"active\">Login</button>\r\n                    <button class=\"btn btn-default btn-margin\" routerLink=\"/resetPassword\">Reset</button>\r\n                <!-- <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" /> -->\r\n                    <button type=\"button\" class=\"btn btn-link float-right\" routerLink=\"/forgotPassword\">Forgot Password?</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_auth_service__ = __webpack_require__("./src/app/common/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.loginData = {
            email: '',
            opt: '',
            password: ''
        };
    }
    onSubmit() {
        this.authService.checkLoginSuccess(this.loginData).subscribe(res => {
            if (res) {
                this.loginStatus = res;
                sessionStorage.setItem('userData', JSON.stringify(this.loginStatus));
                this.router.navigate(['/activityDashboard']);
            }
            else {
                // this.router.navigate(['/']);
            }
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('login'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__common_service_auth_service__["a" /* AuthService */]])
], LoginComponent);



/***/ }),

/***/ "./src/app/nav/change-password/change-password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  change-password works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/nav/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ChangePasswordComponent = class ChangePasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("./src/app/nav/change-password/change-password.component.html"),
        styles: [__webpack_require__("./src/app/nav/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/nav/header-link/header-link.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/header-link/header-link.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"authService.getMockResponse() || userLoginSuccess\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mt-3\">\r\n      <div *ngFor=\"let link of headerLinks\" class=\"col-md-2\">\r\n        <h6 class=\"text-uppercase font-weight-bold text-center\">{{link.name}} <span style=\"\"> {{90}}</span></h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/nav/header-link/header-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_auth_service__ = __webpack_require__("./src/app/common/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HeaderLinkComponent = class HeaderLinkComponent {
    constructor(authService, baseApiService) {
        this.authService = authService;
        this.baseApiService = baseApiService;
        this.userLoginSuccess = false;
        this.headerLinks = [
            { name: 'Cabs Online' },
            { name: 'Available Cabs' },
            { name: 'Number of Trips' },
            { name: 'Number of Delivery' }
        ];
    }
    ngOnInit() {
        const userInfoJson = this.baseApiService.getUserInfo();
        if (userInfoJson) {
            this.userLoginSuccess = true;
        }
    }
};
HeaderLinkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header-link',
        template: __webpack_require__("./src/app/nav/header-link/header-link.component.html"),
        styles: [__webpack_require__("./src/app/nav/header-link/header-link.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__common_baseApi_service__["a" /* BaseApiService */]])
], HeaderLinkComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = "/* \r\n@media (min-width: 992px) {\r\n    .navbar-expand-lg .navbar-nav .nav-link {\r\n        padding-right: .9rem;\r\n        padding-left: .9rem;\r\n}\r\n} */\r\n\r\n.navbar {\r\n    padding: 0px 0px 0px 20px !important;\r\n}\r\n\r\n.d-n-dropdown--light:before {\r\n    right: 5px !important;\r\n}\r\n\r\n.fa { -webkit-transform: scale(1.5,1.5); transform: scale(1.5,1.5); }"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <span class=\"d-n-menu__logo-img\">\r\n        <img src=\"assets/viewlogo.png\" width=\"80\" height=\"45\" alt=\"Taxi System\">\r\n    </span>\r\n    <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <ng-template [ngIf]=\"authService.getMockResponse() || userLoginSuccess\">\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/booking\" [routerLinkActive]=\"['active']\">Booking</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/activityDashboard\" [routerLinkActive]=\"['active']\">Activity Dashboard</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/user\" [routerLinkActive]=\"['active']\">User</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/vendor\" [routerLinkActive]=\"['active']\">Vendor</a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Price\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" routerLink=\"/pricing\" >Normal Pricing</a>\r\n                        <a class=\"dropdown-item\" routerLink=\"/surging\" >Surging Pricing</a>\r\n                    </div>\r\n                </li>\r\n\r\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n                    <a class=\"nav-link\" routerLink=\"/driver\" (click)=\"setActive('Driver');\">Driver</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/cabs\" [routerLinkActive]=\"['active']\">Cabs</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/rider\" [routerLinkActive]=\"['active']\">Rider</a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Report\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Vendors Report</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Drivers Report</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Cabs Report</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Trips Report</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        Finance\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" href=\"#\">Account Riders</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Account Vendors</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Account Drivers</a>\r\n                        <a class=\"dropdown-item\" href=\"#\">Account Settlements</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/delivery\" [routerLinkActive]=\"['active']\">Delivery System</a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\" style=\"position: relative;left: 135px;\">\r\n                    <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLogoutLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLogoutLink\">\r\n                        <a style=\"cursor: pointer\" class=\"dropdown-item\" (click)=\"logoutUser()\">Logout</a>\r\n                        <a class=\"dropdown-item\" (click)=\"changePassword()\">Change Passwords</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </ng-template>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_auth_service__ = __webpack_require__("./src/app/common/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NavComponent = class NavComponent {
    constructor(authService, router, baseApiService) {
        this.authService = authService;
        this.router = router;
        this.baseApiService = baseApiService;
        this.userLoginSuccess = false;
        this.active = 'Activity Dashboard';
        sessionStorage.getItem('authSuccess');
    }
    setActive(newActive) {
        this.active = newActive;
    }
    ngOnInit() {
        const userInfoJson = this.baseApiService.getUserInfo();
        if (userInfoJson) {
            this.userLoginSuccess = true;
        }
        this.isLogginSuccess = this.authService.getMockResponse();
    }
    logoutUser() {
        this.userLoginSuccess = false;
        sessionStorage.clear();
        this.authService.setMockResponse(false);
        this.router.navigate(['/login']);
        // this.authService.logoutUser().subscribe(response => {
        //   this.authService.setMockResponse(false);
        //   console.log('testing');
        //   this.router.navigate(['/login']);
        //   // get response
        // });
    }
    changePassword() {
        //
    }
};
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("./src/app/nav/nav.component.html"),
        styles: [__webpack_require__("./src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__common_baseApi_service__["a" /* BaseApiService */]])
], NavComponent);



/***/ }),

/***/ "./src/app/pricing/add-edit-pricing/add-pricing.component.css":
/***/ (function(module, exports) {

module.exports = ".accordion.pb-15 {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.card-header:after {\r\n    font-family: 'FontAwesome';  \r\n    content: \"\\f068\";\r\n    float: right;\r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.card-header.collapsed:after {\r\n    /* symbol for \"collapsed\" panels */\r\n    content: \"\\f067\"; \r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\n.btn-margin {\r\n    margin-left: 27%;\r\n    margin-right: 1%;\r\n}\r\n\r\n.form-bg{\r\n    background-color: #eee;\r\n    color: #666;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    border: 1px solid #fff;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    margin-bottom: 6%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40%;\r\n    height: 40%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pricing/add-edit-pricing/add-pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <h2>\r\n          Pricing Details\r\n        </h2>\r\n      </div>\r\n      <form #pricingDetails=\"ngForm\" class=\"row detail border border-dark\">\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Pricing GroupName*</label>\r\n            <input type=\"text\" id=\"pricingGroupName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"pricingData.pricingGroupName\" name=\"pricingGroupName\" #groupName=\"ngModel\"\r\n              maxlength=\"60\" required=\"true\">\r\n              <div *ngIf=\"groupName.errors && (groupName.dirty || groupName.touched)\">\r\n                  <span class=\"text-danger\" [hidden]=\"!groupName.errors.required\">PricingGroupName is required</span>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Pricing PerMinute*</label>\r\n            <input type=\"number\" id=\"pricePerMinute\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"pricingData.pricePerMinute\" name=\"pricePerMinute\" #perMinute=\"ngModel\"\r\n              maxlength=\"60\" required=\"true\">\r\n              <div *ngIf=\"perMinute.errors && (perMinute.dirty || perMinute.touched)\">\r\n                  <span class=\"text-danger\" [hidden]=\"!perMinute.errors.required\">PricePerMinute is required</span>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Pricing PerUnitDistance*</label>\r\n            <input type=\"number\" id=\"pricePerUnitDistance\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"pricingData.pricePerUnitDistance\" #perUnitDistance=\"ngModel\"\r\n              name=\"pricePerUnitDistance\" maxlength=\"60\" required=\"true\">\r\n              <div *ngIf=\"perUnitDistance.errors && (perUnitDistance.dirty || perUnitDistance.touched)\">\r\n                  <span class=\"text-danger\" [hidden]=\"!perUnitDistance.errors.required\">Price PerUnitDistance is required</span>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n          <label for=\"status\">Status*</label>\r\n          <div class=\"\">\r\n            <select class=\"form-control\" id=\"status\" [(ngModel)]=\"pricingData.status\" #statusId=\"ngModel\" name=\"status\" #isValidstatus=\"ngModel\">\r\n                <option *ngFor=\"let status of statusList\" [ngValue]=status.id>{{status.statusName}}</option>\r\n            </select>\r\n            <div *ngIf=\"isValidstatus.errors && (isValidstatus.dirty || isValidstatus.touched)\">\r\n                <span class=\"text-danger\" [hidden]=\"!isValidstatus.errors.required\">status is required</span>\r\n              </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n          <label for=\"vendorRegistrationNo\">Vendor</label>\r\n          <div class=\"\">\r\n            <select class=\"form-control\" id=\"vendorRegistrationNo\" [(ngModel)]=\"pricingData.vendorId\" name=\"vendorRegistrationNo\" #registrationNo=\"ngModel\">\r\n              <option *ngFor=\"let vendor of vendorList\" [ngValue]=vendor.id>{{vendor.vendorRegistrationNo}}</option>\r\n            </select>\r\n            <div *ngIf=\"registrationNo.errors && (registrationNo.dirty || registrationNo.touched)\">\r\n                <span class=\"text-danger\" [hidden]=\"!registrationNo.errors.required\">vendor is required</span>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-1\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 m-t-10\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/pricing\"> Cancel</button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"!pricingId\" (click)=\"addOrUpdate(true)\" class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Save\r\n      </button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"pricingId\" (click)=\"addOrUpdate(false)\" class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Update\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pricing/add-edit-pricing/add-pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_pricingAddOrEdit_model__ = __webpack_require__("./src/app/pricing/model/pricingAddOrEdit.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let AddPricingComponent = class AddPricingComponent {
    constructor(route, spinnerService, baseApiService, driverService, httpService, alerts, router, formBuilder) {
        this.route = route;
        this.spinnerService = spinnerService;
        this.baseApiService = baseApiService;
        this.driverService = driverService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.router = router;
        this.formBuilder = formBuilder;
        this.vendorList = [];
        this.statusList = [];
        this.pricingData = new __WEBPACK_IMPORTED_MODULE_3__model_pricingAddOrEdit_model__["a" /* PricingAddEditModel */]();
    }
    setDefault() {
        this.pricingData.pricingId = 0;
    }
    addOrUpdate(isAdd) {
        if (this.validateForm()) {
            if (isAdd) {
                this.setDefault();
                this.httpService.post(this.pricingData, 'price/add').subscribe(res => {
                    this.alerts.setMessage('Added successfully!', 'success');
                    this.router.navigate(['pricing']);
                });
            }
            else {
                this.httpService.put(this.pricingData, 'price/update').subscribe(res => {
                    if (res) {
                        this.pricingData = res;
                    }
                    console.log('update success');
                    this.alerts.setMessage('Updated successfully!', 'success');
                    this.router.navigate(['pricing']);
                });
            }
        }
    }
    getPricingDetails(id) {
        this.httpService.getById(id, 'price/details').subscribe(res => {
            if (res) {
                this.pricingData = res;
                this.spinnerService.hide();
            }
        });
    }
    getStatusAndVendorList() {
        this.spinnerService.show();
        this.httpService.get('price/statusAndVendorList').subscribe(res => {
            if (res) {
                this.vendorList = res['vendorList'];
                this.statusList = res['statusList'];
            }
        });
    }
    validateForm() {
        if (this.pricingDetails.valid) {
            this.formInvalid = false;
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
        this.getStatusAndVendorList();
        if (this.route.routeConfig.path === 'price/edit/:pricingId') {
            this.spinnerService.show();
            // tslint:disable-next-line:no-unused-expression
            this.route && this.route.params.subscribe((params) => {
                this.pricingId = params['pricingId'];
                if (this.pricingId) {
                    this.getPricingDetails(this.pricingId);
                }
            });
        }
        else {
            this.pricingId = '';
            this.formInvalid = false;
            this.spinnerService.hide();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pricingDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */])
], AddPricingComponent.prototype, "pricingDetails", void 0);
AddPricingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__("./src/app/pricing/add-edit-pricing/add-pricing.component.html"),
        styles: [__webpack_require__("./src/app/pricing/add-edit-pricing/add-pricing.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_4__common_baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */],
        __WEBPACK_IMPORTED_MODULE_7__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_8_angular_alert_module__["b" /* AlertsService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], AddPricingComponent);



/***/ }),

/***/ "./src/app/pricing/model/pricingAddOrEdit.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PricingAddEditModel {
    constructor() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PricingAddEditModel;



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}\r\n/* Specific css for <Alert Type> */\r\n.alertsContainer{\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 20px;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type>  {\r\n    border: 1px solid #ffc549;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .iconpanel {\r\n    background:#ffc549;\r\n    color: #fff;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .messagepanel {\r\n    color: #000;\r\n    background: #fff;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .closeicon {\r\n    color: #000;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .closeicon a {\r\n    color: #000;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n}"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n  </div>\r\n  <div class=\"col-sm-6 text-right\">\r\n    <button type=\"button\" class=\"btn btn-default\" routerLink=\"/price/add\">Add Price</button>\r\n  </div>\r\n</div>\r\n<div class=\"mt-5\">\r\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead style=\"font: bold;\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Name</th>\r\n        <th>PerUnitDistance</th>\r\n        <th>PerMinute</th>\r\n        <th>Vendor Name</th>\r\n        <th>Vendor RegistrationNo</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let price of pricingData;let index=index;\">\r\n        <td>{{index+1}}</td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{price.pricingGroupName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{price.pricePerUnitDistance}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{price.pricePerMinute}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{price.vendorName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{price.vendorRegistrationNo}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{price.status}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">\r\n            <a class=\"pointer\" (click)=\"view($event,price,viewcontent)\">\r\n              <span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span>\r\n            </a> /\r\n            <a class=\"pointer\" (click)=\"edit($event,price)\">\r\n              <span class=\"oi oi-pencil\" title=\"edit\" aria-hidden=\"true\"></span>\r\n            </a>/\r\n            <a class=\"pointer\" (click)=\"delete(content,$event,price,index)\">\r\n              <span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span>\r\n            </a>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n  </table>\r\n  <ng-template #content let-cl=\"close\" let-di=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Confirmation</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Do you want to delete record ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-right: 61%;\" (click)=\"di('Dismissed from dismiss button')\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"cl('Closed from Close button')\">No</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #viewcontent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">User Details</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Pricing GroupName</label>\r\n              <div class=\"\">\r\n                <label for=\"pricingGroupName\"><strong>{{userVewData.pricingGroupName}}</strong></label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Pricing PerMinute</label>\r\n              <div class=\"\">\r\n                <label for=\"pricingGroupName\"><strong>{{userVewData.pricePerMinute}}</strong></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Pricing PerUnitDistance</label>\r\n              <div class=\"\">\r\n                <label for=\"pricingGroupName\"><strong>{{userVewData.pricePerUnitDistance}}</strong></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Status</label>\r\n              <div class=\"\">\r\n                <label for=\"status\"><strong>{{userVewData.status}}</strong></label>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"vendorRegistrationNo\">Vendor Name</label>\r\n              <div class=\"\">\r\n                <label for=\"vendorRegistrationNo\"><strong>{{userVewData.vendorName}}</strong></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"createdAt\">createdAt</label>\r\n              <div class=\"\">\r\n                <label for=\"createdAt\"><strong>{{userVewData.createdAt}}</strong></label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"updatedAt\">updatedAt</label>\r\n              <div class=\"\">\r\n                <label for=\"updatedAt\"><strong>{{userVewData.updatedAt}}</strong></label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let PricingComponent = class PricingComponent {
    constructor(http, driverService, spinnerService, chRef, router, baseApiService, httpService, alerts, config, modalService, apiService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this.router = router;
        this.baseApiService = baseApiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.modalService = modalService;
        this.apiService = apiService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.pricingData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.httpService.get(this.apiService.API_PRICE_LIST).subscribe(res => {
            if (res) {
                this.pricingData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
        });
    }
    edit(event, price) {
        this.router.navigate([`price/edit/${price.pricingId}`]);
    }
    view(event, price, content) {
        this.spinnerService.show();
        this.httpService.getById(price.pricingId, this.apiService.API_PRICE_VIEW).subscribe(res => {
            if (res) {
                this.pricingView = res;
                this.spinnerService.hide();
            }
        });
        this.modalService.open(content, { size: 'lg' });
    }
    delete(content, event, price, index) {
        this.modalService.open(content, { size: 'sm' }).result.then((closeResult) => {
            // modal close
            console.log('modal closed');
        }, (dismissReason) => {
            this.deletePricing(price.pricingId);
            this.alerts.setMessage('Deleted successfully!', 'success');
            this.pricingData.splice(index, 1);
        });
    }
    deletePricing(id) {
        this.httpService.deletById(id, this.apiService.API_PRICE_DELETE).subscribe(res => {
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], PricingComponent.prototype, "dtElement", void 0);
PricingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("./src/app/pricing/pricing.component.html"),
        styles: [__webpack_require__("./src/app/pricing/pricing.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__["b" /* AlertsService */], __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */],
        __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_11__common_api_service__["a" /* ApiService */]])
], PricingComponent);



/***/ }),

/***/ "./src/app/report/report.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Rider works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ReportComponent = class ReportComponent {
    constructor() { }
    ngOnInit() {
        console.log(sessionStorage.getItem('authSuccess'));
    }
};
ReportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report',
        template: __webpack_require__("./src/app/report/report.component.html"),
        styles: [__webpack_require__("./src/app/report/report.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ReportComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/***/ (function(module, exports) {

module.exports = ".form-bg{\r\n    background-color: #eee;\r\n    color: #666;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    border: 1px solid #fff;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    margin-bottom: 6%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 60%;\r\n    height: 40%;\r\n}"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-bg\">\r\n    <h2 class=\"align-center\">Reset Password</h2>\r\n<form>\r\n    <div class=\"form-group row\">\r\n      <label class=\"col-sm-2 col-form-label\">Email</label>\r\n      <div class=\"col-sm-7\">\r\n          <input type=\"email\" class=\"form-control\" id=\"first_name\" name=\"email\">\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">Send OTP</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"enter_otp\" class=\"col-sm-2 col-form-label\">Enter OTP</label>\r\n      <div class=\"col-sm-7\">\r\n          <input type=\"text\" class=\"form-control\" id=\"enter_otp\" name=\"enter_otp\">\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">Verify OTP</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n        <label for=\"enter_password\" class=\"col-sm-2 col-form-label\">Enter New Password</label>\r\n        <div class=\"col-sm-7\">\r\n            <input type=\"text\" class=\"form-control\" id=\"enter_password\" name=\"enter_password\">\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">Save Password</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n          <div class=\"offset-xs-3 col-xs-9\">\r\n            <button type=\"button\" class=\"btn btn-link\" routerLink=\"/login\">Back to Login</button>\r\n          </div>\r\n      </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ResetPasswordComponent = class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__("./src/app/reset-password/reset-password.component.html"),
        styles: [__webpack_require__("./src/app/reset-password/reset-password.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/rider/rider.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}"

/***/ }),

/***/ "./src/app/rider/rider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n    </div>\r\n   <!-- <div class=\"col-sm-6 text-right\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/driver/addDriver\">Add Rider</button>\r\n    </div> -->\r\n  </div>\r\n  <div class=\"mt-5\">\r\n      <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n        <thead style=\"font: bold;\">\r\n          <tr>\r\n            <th>#</th>\r\n            <th>First Name</th>\r\n            <th>Last Name</th>\r\n            <th>Email</th>\r\n            <th>Mobile Number</th>\r\n            <th>Role</th>\r\n            <th>Status</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of userData;let index=index;\">\r\n            <td>{{index+1}}</td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{user.firstName}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{user.lastName}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{user.email}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{user.phone}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{user.role}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"text-wrap\">{{user.status}}</span>\r\n            </td>\r\n            <td>\r\n                <span class=\"text-wrap\">\r\n                    <a class=\"pointer\" (click)=\"view($event,user)\"><span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span> </a> / \r\n                    <a class=\"pointer\" (click)=\"edit($event,user)\"><span class=\"oi oi-pencil\" title=\"edit\" aria-hidden=\"true\"></span> </a>/ \r\n                    <a class=\"pointer\" (click)=\"delete($event,user)\"><span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span> </a>\r\n                </span>\r\n            </td>\r\n          </tr>\r\n      </table>\r\n  </div>\r\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/rider/rider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let RiderComponent = class RiderComponent {
    constructor(http, driverService, spinnerService, chRef, router, baseApiService, httpService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this.router = router;
        this.baseApiService = baseApiService;
        this.httpService = httpService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.userData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.httpService.get('user/list').subscribe(res => {
            if (res) {
                this.userData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
        });
    }
    edit(event, user) {
        // this.router.navigate([`/rider/rider/${user.id}`]);
        alert('Yet to implementaion');
    }
    view(event, user) {
        alert('Yet to implementaion');
    }
    delete(event, user) {
        alert('Yet to implementaion');
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], RiderComponent.prototype, "dtElement", void 0);
RiderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rider',
        template: __webpack_require__("./src/app/rider/rider.component.html"),
        styles: [__webpack_require__("./src/app/rider/rider.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */]])
], RiderComponent);



/***/ }),

/***/ "./src/app/surging/add-edit-surging/add-surging.component.css":
/***/ (function(module, exports) {

module.exports = ".accordion.pb-15 {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.card-header:after {\r\n    font-family: 'FontAwesome';  \r\n    content: \"\\f068\";\r\n    float: right;\r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.card-header.collapsed:after {\r\n    /* symbol for \"collapsed\" panels */\r\n    content: \"\\f067\"; \r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\n.btn-margin {\r\n    margin-left: 27%;\r\n    margin-right: 1%;\r\n}\r\n\r\n.form-bg{\r\n    background-color: #eee;\r\n    color: #666;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    border: 1px solid #fff;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    margin-bottom: 6%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40%;\r\n    height: 40%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/surging/add-edit-surging/add-surging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <h2>\r\n          Surge Pricing Details\r\n        </h2>\r\n      </div>\r\n      <form #surgingDetails=\"ngForm\" class=\"row detail border border-dark\" #loginDetails=\"ngForm\">\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Surge PriceGroupName*</label>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"surgingData.name\" name=\"surgePriceName\" #surgePriceName=\"ngModel\" required=\"true\"\r\n               maxlength=\"60\">\r\n            <div *ngIf=\"surgePriceName.errors && (surgePriceName.dirty || surgePriceName.touched)\">\r\n              <span class=\"text-danger\" [hidden]=\"!surgePriceName.errors.required\">Mobile Number is required</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"form-group is-required-short\">\r\n                <label class=\"control-label\">Surge Factor*</label>\r\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"surgingData.factor\" name=\"surgePriceFactor\" #surgePriceFactor=\"ngModel\" required=\"true\"\r\n              maxlength=\"60\">\r\n                <div *ngIf=\"surgePriceFactor.errors && (surgePriceFactor.dirty || surgePriceFactor.touched)\">\r\n                  <span class=\"text-danger\" [hidden]=\"!surgePriceFactor.errors.required\">Mobile Number is required</span>\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Surge Pricing StartDate</label>\r\n            <my-date-picker name=\"surgeExpiryStartDate\" (dateChanged)=\"onDateChanged($event)\" [options]=\"surgeExpiryStartDateOptions\" [(ngModel)]=\"surgingData.surgeExpiryStartDate\" required></my-date-picker>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Surge Pricing ExpiryDate</label>\r\n            <my-date-picker (dateChanged)=\"onEndDateChanged($event)\" name=\"surgeExpiryEndDate\" [options]=\"surgeExpiryEndDateOptions\" [(ngModel)]=\"surgingData.surgeExpiryEndDate\" required></my-date-picker>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">latitudeStart *</label>\r\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"surgingData.latitudeStart\" name=\"latitudeStart\" #surgelatitudeStart=\"ngModel\" required=\"true\"\r\n              minlength=\"10\" maxlength=\"10\">\r\n            <div *ngIf=\"surgelatitudeStart.errors && (surgelatitudeStart.dirty || surgelatitudeStart.touched)\">\r\n              <span class=\"text-danger\" [hidden]=\"!surgelatitudeStart.errors.required\">latitudeStart Number is required</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"form-group is-required-short\">\r\n              <label class=\"control-label\">latitudeEnd *</label>\r\n              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"surgingData.latitudeEnd\" name=\"latitudeEnd\" #surgelatitudeEnd=\"ngModel\" required=\"true\"\r\n                minlength=\"10\" maxlength=\"10\">\r\n              <div *ngIf=\"surgelatitudeEnd.errors && (surgelatitudeEnd.dirty || surgelatitudeEnd.touched)\">\r\n                <span class=\"text-danger\" [hidden]=\"!surgelatitudeEnd.errors.required\">latitudeEnd Number is required</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n              <div class=\"form-group is-required-short\">\r\n                <label class=\"control-label\">longitudeStart *</label>\r\n                <input type=\"number\" class=\"form-control\" [(ngModel)]=\"surgingData.longitudeStart\" name=\"longitudeStart\" #surgeStart=\"ngModel\" required=\"true\"\r\n                  minlength=\"10\" maxlength=\"10\">\r\n                <div *ngIf=\"surgeStart.errors && (surgeStart.dirty || surgeStart.touched)\">\r\n                  <span class=\"text-danger\" [hidden]=\"!surgeStart.errors.required\">longitudeStart Number is required</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">longitudeEnd *</label>\r\n                  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"surgingData.longitudeEnd\" name=\"latitudeStart\" #surgelongitudeEnd=\"ngModel\" required=\"true\"\r\n                    minlength=\"10\" maxlength=\"60\">\r\n                  <div *ngIf=\"surgelongitudeEnd.errors && (surgelongitudeEnd.dirty || surgelongitudeEnd.touched)\">\r\n                    <span class=\"text-danger\" [hidden]=\"!surgelongitudeEnd.errors.required\">latitudeStart Number is required</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                  <label for=\"status\">Status*</label>\r\n                  <div class=\"\">\r\n                    <select class=\"form-control\" id=\"status\" [(ngModel)]=\"surgingData.status\" #statusId=\"ngModel\" name=\"status\" #isValidstatus=\"ngModel\">\r\n                        <option *ngFor=\"let status of statusList\" [ngValue]=status.id>{{status.statusName}}</option>\r\n                    </select>\r\n                    <div *ngIf=\"isValidstatus.errors && (isValidstatus.dirty || isValidstatus.touched)\">\r\n                        <span class=\"text-danger\" [hidden]=\"!isValidstatus.errors.required\">status is required</span>\r\n                      </div>\r\n                  </div>\r\n        \r\n                </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-1\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 m-t-10\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/surging\"> Cancel</button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"!surgeId\" (click)=\"addOrUpdateDriverData(true)\"\r\n        class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Save\r\n      </button>\r\n      <button type=\"button\" style=\"float: right;\" [disabled]=\"formInvalid\" *ngIf=\"surgeId\" (click)=\"addOrUpdateDriverData(false)\"\r\n        class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Update\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/surging/add-edit-surging/add-surging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditSurgingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__ = __webpack_require__("./src/app/common/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_surgingAddOrEdit_model__ = __webpack_require__("./src/app/surging/model/surgingAddOrEdit.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











let AddEditSurgingComponent = class AddEditSurgingComponent {
    constructor(route, spinnerService, router, baseApiService, driverService, uploader, formBuilder, httpService, alerts, apiService) {
        this.route = route;
        this.spinnerService = spinnerService;
        this.router = router;
        this.baseApiService = baseApiService;
        this.driverService = driverService;
        this.uploader = uploader;
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.alerts = alerts;
        this.apiService = apiService;
        this.isLoginValid = false;
        this.isPersonalDetailsValid = false;
        this.isLicencingValid = false;
        this.isProofOfAddressSelected = false;
        this.statusList = [];
        this.surgeExpiryStartDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        // Initialized to specific date (09.10.2018).
        this.surgeExpiryStartDate = {
            date: { year: 2018, month: 10, day: 9 }
        };
        this.surgeExpiryEndDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.surgeExpiryEndDate = { date: { year: 2018, month: 10, day: 9 } };
        this.insurenceExpiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.insurenceExpiryDate = { date: { year: 2018, month: 10, day: 9 } };
        // file uploader
        this.fileToUpload = null;
        this.setDriverData = (res) => {
        };
        this.surgingData = new __WEBPACK_IMPORTED_MODULE_4__model_surgingAddOrEdit_model__["a" /* SurgingAddEditModel */]();
    }
    addOrUpdateDriverData(isAdd) {
        if (this.validateForm()) {
            this.surgingData.surgeExpiryStartDate = this.surgingData.surgeExpiryStartDate.epoc * 1000;
            this.surgingData.surgeExpiryEndDate = this.surgingData.surgeExpiryEndDate.epoc * 1000;
            if (isAdd) {
                this.setDefaultFields();
                this.httpService.post(this.surgingData, this.apiService.API_SURGE_ADD).subscribe(res => {
                    this.alerts.setMessage('Added successfully!', 'success');
                    this.router.navigate([`/surging`]);
                });
            }
            else {
                this.httpService.put(this.surgingData, this.apiService.API_SURGE_UPDATE).subscribe(res => {
                    if (res) {
                        this.surgingData = res;
                    }
                    this.alerts.setMessage('Updated successfully!', 'success');
                    this.router.navigate([`/surging`]);
                });
            }
        }
    }
    setDefaultFields() {
        this.surgingData.surgeId = 0;
    }
    validateForm() {
        if (this.surgingDetails.valid) {
            this.formInvalid = false;
            return true;
        }
        else {
            return false;
        }
    }
    setDefault() {
        this.surgingData.surgeExpiryStartDate = this.surgingData.surgeExpiryStartDate;
        this.surgingData.surgeExpiryEndDate = this.surgingData.surgeExpiryEndDate;
    }
    setDate(startDate, expiryDate) {
        const sDate = new Date(startDate);
        const eDate = new Date(expiryDate);
        this.surgingData.surgeExpiryStartDate = { date: { year: sDate.getFullYear(), month: sDate.getMonth() + 1, day: sDate.getDate() } };
        this.surgingData.surgeExpiryEndDate = { date: { year: eDate.getFullYear(), month: eDate.getMonth() + 1, day: eDate.getDate() } };
    }
    ngOnInit() {
        this.spinnerService.show();
        this.getStatusList();
        if (this.route.routeConfig.path === 'surge/edit/:surgeId') {
            // tslint:disable-next-line:no-unused-expression
            this.route && this.route.params.subscribe((params) => {
                this.surgeId = params['surgeId'];
                if (this.surgeId) {
                    this.getPricingDetails(this.surgeId);
                    this.spinnerService.hide();
                }
            });
        }
        else {
            this.formInvalid = false;
            this.surgeId = '';
            this.spinnerService.hide();
        }
    }
    getPricingDetails(id) {
        this.httpService.getById(id, this.apiService.API_SURGE_DETAILS).subscribe(res => {
            if (res) {
                this.surgingData = res;
                this.setDate(this.surgingData.surgeExpiryStartDate, this.surgingData.surgeExpiryEndDate);
            }
        });
    }
    onDateChanged(event) {
        // alert(event.epoc);
        // this.surgingData.surgeExpiryStartDate = event.epoc;
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }
    onEndDateChanged(event) {
        // this.surgingData.surgeExpiryEndDate = event.epoc;
    }
    getStatusList() {
        this.httpService.get(this.apiService.API_COMMON_STATUS_LIST).subscribe(res => {
            if (res) {
                this.statusList = res;
            }
        });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('surgingDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddEditSurgingComponent.prototype, "surgingDetails", void 0);
AddEditSurgingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-driver',
        template: __webpack_require__("./src/app/surging/add-edit-surging/add-surging.component.html"),
        styles: [__webpack_require__("./src/app/surging/add-edit-surging/add-surging.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_6__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__["a" /* FileUploadService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__["b" /* AlertsService */],
        __WEBPACK_IMPORTED_MODULE_10__common_api_service__["a" /* ApiService */]])
], AddEditSurgingComponent);



/***/ }),

/***/ "./src/app/surging/model/surgingAddOrEdit.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SurgingAddEditModel {
    constructor() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SurgingAddEditModel;



/***/ }),

/***/ "./src/app/surging/surging.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}\r\n/* Specific css for <Alert Type> */\r\n.alertsContainer{\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 20px;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type>  {\r\n    border: 1px solid #ffc549;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .iconpanel {\r\n    background:#ffc549;\r\n    color: #fff;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .messagepanel {\r\n    color: #000;\r\n    background: #fff;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .closeicon {\r\n    color: #000;\r\n}\r\n.alertsContainer .alertsRow.<Alert Type> .closeicon a {\r\n    color: #000;\r\n    text-decoration: none;\r\n    font-size: 12px;\r\n}"

/***/ }),

/***/ "./src/app/surging/surging.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n  </div>\r\n  <div class=\"col-sm-6 text-right\">\r\n    <button type=\"button\" class=\"btn btn-default\" routerLink=\"/surge/add\">Add Surging Price</button>\r\n  </div>\r\n</div>\r\n<div class=\"mt-5\">\r\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead style=\"font: bold;\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Name</th>\r\n        <th>Factor</th>\r\n        <th>Surge Start Date</th>\r\n        <th>Surge Expiry Date</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let surge of surgingData;let index=index;\">\r\n        <td>{{index+1}}</td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{surge.name}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{surge.factor}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{surge.surgeExpiryStartDate}}</span>\r\n        </td>\r\n\r\n        <td>\r\n          <span class=\"text-wrap\">{{surge.surgeExpiryEndDate}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{surge.status}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">\r\n            <a class=\"pointer\" (click)=\"view($event,surge,viewcontent)\">\r\n              <span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span>\r\n            </a> /\r\n            <a class=\"pointer\" (click)=\"edit($event,surge)\">\r\n              <span class=\"oi oi-pencil\" title=\"edit\" aria-hidden=\"true\"></span>\r\n            </a>/\r\n            <a class=\"pointer\" (click)=\"delete(content,$event,surge,index)\">\r\n              <span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span>\r\n            </a>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n  </table>\r\n  <ng-template #content let-cl=\"close\" let-di=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Confirmation</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Do you want to delete record ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-right: 61%;\" (click)=\"di('Dismissed from dismiss button')\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"cl('Closed from Close button')\">No</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #viewcontent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Surge Pricing Details</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Surge PriceGroupName</label>\r\n              <div class=\"\">\r\n                <label for=\"surgePriceGroupName\">\r\n                  <strong>{{surgeView.name}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Surging Factor</label>\r\n              <div class=\"\">\r\n                <label for=\"factor\">\r\n                  <strong>{{surgeView.factor}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">latitudeStart</label>\r\n              <div class=\"\">\r\n                <label for=\"latitudeStart\">\r\n                  <strong>{{surgeView.latitudeStart}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">latitudeEnd</label>\r\n              <div class=\"\">\r\n                <label for=\"latitudeEnd\">\r\n                  <strong>{{surgeView.latitudeEnd}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">longitudeStart</label>\r\n              <div class=\"\">\r\n                <label for=\"longitudeStart\">\r\n                  <strong>{{surgeView.longitudeStart}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">longitudeEnd</label>\r\n              <div class=\"\">\r\n                <label for=\"longitudeEnd\">\r\n                  <strong>{{surgeView.longitudeEnd}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">surgeExpiryStartDate</label>\r\n              <div class=\"\">\r\n                <label for=\"surgeExpiryStartDate\">\r\n                  <strong>{{surgeView.surgeExpiryStartDate}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">surgeExpiryEndDate</label>\r\n              <div class=\"\">\r\n                <label for=\"surgeExpiryEndDate\">\r\n                  <strong>{{surgeView.surgeExpiryEndDate}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Status</label>\r\n              <div class=\"\">\r\n                <label for=\"status\">\r\n                  <strong>{{surgeView.status}}</strong>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"createdAt\">createdAt</label>\r\n              <div class=\"\">\r\n                <label for=\"createdAt\">\r\n                  <strong>{{surgeView.createdAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"updatedAt\">updatedAt</label>\r\n              <div class=\"\">\r\n                <label for=\"updatedAt\">\r\n                  <strong>{{surgeView.updatedAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/surging/surging.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurgingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let SurgingComponent = class SurgingComponent {
    constructor(http, driverService, spinnerService, chRef, router, baseApiService, httpService, alerts, config, modalService, apiService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this.router = router;
        this.baseApiService = baseApiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.modalService = modalService;
        this.apiService = apiService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.surgingData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.httpService.get(this.apiService.API_SURGE_LIST).subscribe(res => {
            if (res) {
                this.surgingData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
        });
    }
    edit(event, surging) {
        this.router.navigate([`surge/edit/${surging.surgeId}`]);
    }
    view(event, surging, content) {
        this.spinnerService.show();
        this.httpService.getById(surging.surgeId, this.apiService.API_SURGE_VIEW).subscribe(res => {
            if (res) {
                this.surgeView = res;
                this.spinnerService.hide();
            }
        });
        this.modalService.open(content, { size: 'lg' });
    }
    delete(content, event, surging, index) {
        this.modalService.open(content, { size: 'sm' }).result.then((closeResult) => {
            // modal close
            console.log('modal closed');
        }, (dismissReason) => {
            this.deletePricing(surging.surgeId);
            this.alerts.setMessage('Deleted successfully!', 'success');
            this.surgingData.splice(index, 1);
        });
    }
    deletePricing(id) {
        this.httpService.deletById(id, this.apiService.API_SURGE_DELETE).subscribe(res => {
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], SurgingComponent.prototype, "dtElement", void 0);
SurgingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("./src/app/surging/surging.component.html"),
        styles: [__webpack_require__("./src/app/surging/surging.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__["b" /* AlertsService */], __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */],
        __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_11__common_api_service__["a" /* ApiService */]])
], SurgingComponent);



/***/ }),

/***/ "./src/app/user/add-user/add-user.component.css":
/***/ (function(module, exports) {

module.exports = ".accordion.pb-15 {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.card-header:after {\r\n    font-family: 'FontAwesome';  \r\n    content: \"\\f068\";\r\n    float: right;\r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.card-header.collapsed:after {\r\n    /* symbol for \"collapsed\" panels */\r\n    content: \"\\f067\"; \r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\n.btn-margin {\r\n    margin-left: 27%;\r\n    margin-right: 1%;\r\n}\r\n\r\n.form-bg{\r\n    background-color: #eee;\r\n    color: #666;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    border: 1px solid #fff;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    margin-bottom: 6%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40%;\r\n    height: 40%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <h2>\r\n          Login Details\r\n        </h2>\r\n      </div>\r\n      <form class=\"row detail border border-dark\">\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Email*</label>\r\n            <input type=\"text\" id=\"email\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.email\" name=\"email\" maxlength=\"60\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Password*</label>\r\n            <input type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.password\" name=\"password\"\r\n              maxlength=\"60\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n          <label for=\"status\">Role*</label>\r\n          <div class=\"\">\r\n            <select class=\"form-control\" id=\"role\" [(ngModel)]=\"userData.role\" #statusId=\"ngModel\" name=\"role\" required>\r\n              <option value=\"Super User\" selected>Suprem User</option>\r\n              <option value=\"vendor\">Vendor</option>\r\n              <option value=\"view\">View User</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"firstRow\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseOne\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Personal Details\r\n          </h2>\r\n        </div>\r\n        <form #personalDetails=\"ngForm\" class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseOne\" data-parent=\"#accordion\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">First Name</label>\r\n                  <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.firstName\" name=\"firstName\" maxlength=\"60\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Last Name</label>\r\n                  <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.lastName\" name=\"lastName\" maxlength=\"60\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"gender\">Gender</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"gender\" [(ngModel)]=\"userData.sex\" name=\"sex\">\r\n                    <option value='male'>Male</option>\r\n                    <option value='female'>Female</option>\r\n                    <option value='other'>other</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Mobile Number</label>\r\n                  <input type=\"text\" id=\"phone\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.phone\" #phone=\"ngModel\" name=\"phone\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Other Phone</label>\r\n                  <input type=\"text\" id=\"otherPhone\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.otherPhone\" #otherPhone=\"ngModel\"\r\n                    name=\"otherPhone\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"country\">Country</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"country\" [(ngModel)]=\"userData.countryId\" name=\"country\" #country=\"ngModel\">\r\n                    <option *ngFor=\"let country of countryList\" [ngValue]=\"country.countriId\">{{country.name}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"state\">State</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"state\" [(ngModel)]=\"userData.stateId\" name=\"state\">\r\n                    <option *ngFor=\"let state of statesList\" [ngValue]=\"state.stateId\">{{state.stateName}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"city\">City</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"city\" [(ngModel)]=\"userData.cityId\" #city=\"ngModel\" name=\"city\">\r\n                    <option *ngFor=\"let city of cityList\" [ngValue]=\"city.cityId\">{{city.citieName}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Pin Code</label>\r\n                  <input type=\"text\" id=\"pinCode\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.zip\" #pinCode=\"ngModel\" name=\"pin\"\r\n                    required>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Plot No/Land Mark</label>\r\n                  <input type=\"text\" id=\"plotNumber\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"userData.street\" #landMark=\"ngModel\"\r\n                    name=\"streetAdd\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label for=\"status\">Status</label>\r\n                <div class=\"\">\r\n                  <select class=\"form-control\" id=\"statusId\" [(ngModel)]=\"userData.status\" #statusId=\"ngModel\" name=\"statusId\">\r\n                    <option value=\"1\" selected>Active</option>\r\n                    <option value=\"0\">Inactive</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion1\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Hire Details\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\" #licencing=\"ngForm\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseTwo\" data-parent=\"#accordion1\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">Hire Date</label>\r\n                  <my-date-picker name=\"hireDate\" [options]=\"hireDateOptions\" [(ngModel)]=\"userData.hireDate\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group is-required-short\">\r\n                  <label class=\"control-label\">End Date</label>\r\n                  <my-date-picker name=\"hireEndDate\" [options]=\"expiryDateOptions\" [(ngModel)]=\"userData.hireEndDate\" required></my-date-picker>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion2\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Documents\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseThree\" data-parent=\"#accordion2\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"driverPhoto\">photo</label>\r\n                  <label class=\"btn btn-default\">\r\n                    <input type=\"file\" (change)=\"selectFile($event)\" name=\"userPic\" placeholder=\"No file chosen12444\">\r\n                  </label>\r\n\r\n                  <!-- <button class=\"btn btn-success\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button> -->\r\n                  <!-- <input type=\"file\" #fileInput multiple (change)=\"uploadFileToActivity()\" name=\"driverPhotos\" [(ngModel)]=\"driverData.photo\"/> -->\r\n                  <!-- <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\" name=\"driverPhoto\" [(ngModel)]=\"driverData.photo\"> -->\r\n                </div>\r\n              </div>\r\n              <!-- Add here -->\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"proofAddress\">Proof of address</label>\r\n                  <input type=\"file\" id=\"proofAddress\" (change)=\"selectFile($event)\" name=\"proofOfAddress\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"agreement\">Agreement</label>\r\n                  <input type=\"file\" id=\"agreement\" (change)=\"selectFile($event)\" name=\"aggrement1\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion3\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseFour\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Account Details\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseFour\" data-parent=\"#accordion3\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"file\">Bank Name</label>\r\n                  <input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"\" name=\"name\" [(ngModel)]=\"userData.name\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"file\">Account No</label>\r\n                  <input type=\"text\" id=\"accountNo\" class=\"form-control\" placeholder=\"\" name=\"accountNo\" [(ngModel)]=\"userData.accountNo\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"file\">IFSC Code</label>\r\n                  <input type=\"text\" id=\"ifsc\" class=\"form-control\" placeholder=\"\" name=\"ifsc\" [(ngModel)]=\"userData.ifsc\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-1\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 m-t-10\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/user\"> Cancel</button>\r\n      <button type=\"button\" style=\"float: right;\" *ngIf=\"!userId\" (click)=\"addOrUpdateDriverData(true)\" class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Save\r\n      </button>\r\n      <button type=\"button\" style=\"float: right;\" *ngIf=\"userId\" (click)=\"addOrUpdateDriverData(false)\" class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Update\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__ = __webpack_require__("./src/app/common/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_userData_model__ = __webpack_require__("./src/app/user/model/userData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let AddUserComponent = class AddUserComponent {
    constructor(route, router, spinnerService, baseApiService, driverService, uploader, apiService, httpService, alerts) {
        this.route = route;
        this.router = router;
        this.spinnerService = spinnerService;
        this.baseApiService = baseApiService;
        this.driverService = driverService;
        this.uploader = uploader;
        this.apiService = apiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.statesList = [];
        this.countryList = [];
        this.cityList = [];
        this.cabList = [];
        this.statusList = [];
        this.hireDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        // Initialized to specific date (09.10.2018).
        this.hireDate = {
            date: { year: 2018, month: 10, day: 9 }
        };
        this.expiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.expiryDate = { date: { year: 2018, month: 10, day: 9 } };
        this.insurenceExpiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.insurenceExpiryDate = { date: { year: 2018, month: 10, day: 9 } };
        // file uploader
        this.fileToUpload = null;
        this.userData = new __WEBPACK_IMPORTED_MODULE_4__model_userData_model__["a" /* AddUserDataModel */]();
    }
    addOrUpdateDriverData(isAdd) {
        if (this.validateForm()) {
            this.setDefault();
            this.setDefaultFields();
            this.userData.hireDate = this.userData.hireDate.epoc * 1000;
            this.userData.hireEndDate = this.userData.hireEndDate.epoc * 1000;
            if (isAdd) {
                this.httpService.post(this.userData, this.apiService.API_USER_ADD).subscribe(res => {
                    this.alerts.setMessage('Added successfully!', 'success');
                    this.router.navigate([`/user`]);
                });
            }
            else {
                this.userData.id = this.userData.id;
                alert(this.userData.id);
                this.httpService.put(this.userData, this.apiService.API_USER_UPDATE).subscribe(res => {
                    if (res) {
                        this.userData = res;
                        this.alerts.setMessage('Updated successfully!', 'success');
                        this.router.navigate([`/user`]);
                    }
                    console.log('update success');
                });
            }
        }
    }
    validateForm() {
        if (this.personalDetails.valid && this.licencing.valid) {
            this.formInvalid = false;
            return true;
        }
        else {
            return false;
        }
    }
    setDefaultFields() {
        this.userData.address = 'Rajajinagar';
        // this.driverData.driverId = 0;
        // this.driverData.startDate = this.driverData.startDate.epoc || 0;
        // this.driverData.driverLicenceExpiry = this.driverData.driverLicenceExpiry.epoc || 0;
    }
    handleFileInput(files) {
        // this.fileToUpload = files.item(0);
        // handle for png jpg pdf
        this.uploadFileToActivity();
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
        const name = event.target.name;
        if (this.selectedFiles) {
            this.upload(name);
        }
    }
    setUploadFilesValue(name) {
    }
    upload(name) {
        const apiToken = this.baseApiService.getApiToken();
        this.currentFileUpload = this.selectedFiles.item(0);
        this.userData[name] = this.currentFileUpload.name;
        this.uploader.pushFileToStorage(this.currentFileUpload, apiToken).subscribe(event => {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    }
    uploadFileToActivity() {
        const userId = this.baseApiService.getUserId();
        const apiToken = this.baseApiService.getApiToken();
        const fileBrowser = this.fileInput.nativeElement;
        // this.uploader.addToQueue(fileBrowser.files);
        this.uploader.postFile(fileBrowser.files, userId, apiToken).subscribe(data => {
            // do something, if upload success
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getUserDetails(id) {
        this.httpService.getById(id, this.apiService.API_USER_DETAILS).subscribe(res => {
            if (res) {
                this.userData = res;
                // this.setDate(this.userData.surgeExpiryStartDate, this.surgingData.surgeExpiryEndDate);
            }
        });
    }
    setDefault() {
        this.userData.firstName = this.userData.firstName || '';
        this.userData.lastName = this.userData.lastName || '';
        this.userData.countryId = this.userData.countryId || 0;
        this.userData.password = this.userData.password || '';
        this.userData.stateId = this.userData.stateId || 0;
        this.userData.cityId = this.userData.cityId || 0;
        this.userData.sex = this.userData.sex || '';
        this.userData.email = this.userData.email || '';
        this.userData.zip = this.userData.zip || '';
        this.userData.status = this.userData.status || 0;
        this.userData.proofOfAddress = this.userData.proofOfAddress || '';
        this.userData.street = this.userData.street || '';
        this.userData.accountNo = this.userData.accountNo || '';
        this.userData.aggrement1 = this.userData.aggrement1 || '';
        this.userData.aggrement2 = this.userData.aggrement2 || '';
        this.userData.aggrement3 = this.userData.aggrement4 || '';
        this.userData.aggrement3 = this.userData.aggrement3 || '';
        this.userData.address = this.userData.address || '';
        this.userData.hireDate = this.userData.hireDate || 0;
        this.userData.hireEndDate = this.userData.hireEndDate || 0;
        this.userData.ifsc = this.userData.ifsc || '';
        this.userData.name = this.userData.name || '';
        this.userData.otherphone = this.userData.otherphone || '';
        this.userData.userPic = this.userData.userPic || '';
        this.userData.phone = this.userData.phone || '';
    }
    ngOnInit() {
        this.spinnerService.show();
        this.loadData();
        if (this.route.routeConfig.path === 'user/edit/:id') {
            // tslint:disable-next-line:no-unused-expression
            this.route && this.route.params.subscribe((params) => {
                this.userId = params['id'];
                if (this.userId) {
                    this.getUserDetails(this.userId);
                    this.spinnerService.hide();
                }
            });
        }
        else {
            this.userId = '';
            this.spinnerService.hide();
        }
    }
    loadData() {
        const result = this.httpService.get(this.apiService.API_COMMON_ALL_POP_DATA).subscribe(res => {
            if (res) {
                this.statesList = res['statesList'];
                this.cityList = res['cityList'];
                this.countryList = res['countryList'];
                this.statusList = res['statusList'];
            }
        });
        if (result) {
            this.spinnerService.hide();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('personalDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddUserComponent.prototype, "personalDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('licencing'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddUserComponent.prototype, "licencing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], AddUserComponent.prototype, "fileInput", void 0);
AddUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__("./src/app/user/add-user/add-user.component.html"),
        styles: [__webpack_require__("./src/app/user/add-user/add-user.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_6__common_driver_service__["a" /* DriverService */],
        __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__["a" /* FileUploadService */],
        __WEBPACK_IMPORTED_MODULE_9__common_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_10__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__["b" /* AlertsService */]])
], AddUserComponent);



/***/ }),

/***/ "./src/app/user/model/userData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UserDataModel {
    constructor(accountNo, address, aggrement1, aggrement2, aggrement3, aggrement4, cityId, countryId, email, firstName, hireDate, lastName, hireEndDate, id, ifsc, name, otherphone, password, phone, proofOfAddress, role, sex, stateId, status, street, userPic, zip) {
        this.accountNo = accountNo;
        this.address = address;
        this.aggrement1 = aggrement1;
        this.aggrement2 = aggrement2;
        this.aggrement3 = aggrement3;
        this.aggrement4 = aggrement4;
        this.cityId = cityId;
        this.countryId = countryId;
        this.email = email;
        this.firstName = firstName;
        this.hireDate = hireDate;
        this.lastName = lastName;
        this.hireEndDate = hireEndDate;
        this.id = id;
        this.ifsc = ifsc;
        this.name = name;
        this.otherphone = otherphone;
        this.password = password;
        this.phone = phone;
        this.proofOfAddress = proofOfAddress;
        this.role = role;
        this.sex = sex;
        this.stateId = stateId;
        this.status = status;
        this.street = street;
        this.userPic = userPic;
        this.zip = zip;
    }
}
/* unused harmony export UserDataModel */

class AddUserDataModel {
    constructor() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddUserDataModel;



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n  </div>\r\n  <div class=\"col-sm-6 text-right\">\r\n    <button type=\"button\" class=\"btn btn-default\" routerLink=\"/user/add\">Add User</button>\r\n  </div>\r\n</div>\r\n<div class=\"mt-5\">\r\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead style=\"font: bold;\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Email</th>\r\n        <th>Mobile Number</th>\r\n        <th>Role</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of userData;let index=index;\">\r\n        <td>{{index+1}}</td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{user.firstName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{user.lastName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{user.email}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{user.phone}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{user.role}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{user.status}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">\r\n            <a class=\"pointer\" (click)=\"view($event,user,viewcontent)\">\r\n              <span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span>\r\n            </a> /\r\n            <a class=\"pointer\" (click)=\"edit($event,user)\">\r\n              <span class=\"oi oi-pencil\" title=\"edit\" aria-hidden=\"true\"></span>\r\n            </a>/\r\n            <a class=\"pointer\" (click)=\"delete(content,$event,user,index)\">\r\n              <span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span>\r\n            </a>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n  </table>\r\n  <ng-template #content let-cl=\"close\" let-di=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Confirmation</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Do you want to delete record ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-right: 61%;\" (click)=\"di('Dismissed from dismiss button')\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"cl('Closed from Close button')\">No</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #viewcontent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">User Details</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"personalDetails\">\r\n              <strong>Personal Details</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">First Name</label>\r\n              <div class=\"\">\r\n                <label for=\"firstName\">\r\n                  <strong>{{userVewData.firstName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Last Name</label>\r\n              <div class=\"\">\r\n                <label for=\"lastName\">\r\n                  <strong>{{userVewData.lastName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Gender</label>\r\n              <div class=\"\">\r\n                <label for=\"gender\">\r\n                  <strong>{{userVewData.sex}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Email</label>\r\n              <div class=\"\">\r\n                <label for=\"email \">\r\n                  <strong>{{userVewData.email}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Mobile Number</label>\r\n              <div class=\"\">\r\n                <label for=\"mobileNumber \">\r\n                  <strong>{{userVewData.phone}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Other Phone</label>\r\n              <div class=\"\">\r\n                <label for=\"otherPhone\">\r\n                  <strong>{{userVewData.otherPhone}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Alias Name</label>\r\n              <div class=\"\">\r\n                <label for=\"aliasName\">\r\n                  <strong>{{userVewData.aliasName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Country</label>\r\n              <div class=\"\">\r\n                <label for=\"country \">\r\n                  <strong>{{userVewData.countryName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">State</label>\r\n              <div class=\"\">\r\n                <label for=\"state \">\r\n                  <strong>{{userVewData.stateName}}</strong>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"city\">City</label>\r\n              <div class=\"\">\r\n                <label for=\"city\">\r\n                  <strong>{{userVewData.cityName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"pinCode\">Pin Code</label>\r\n              <div class=\"\">\r\n                <label for=\"pinCode\">\r\n                  <strong>{{userVewData.pinCode}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"Land Mark\">Plot No/Land Mark</label>\r\n              <div class=\"\">\r\n                <label for=\"Plot No/Land Mark\">\r\n                  <strong>{{userVewData.street}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n           \r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"updatedAt\">updatedAt</label>\r\n              <div class=\"\">\r\n                <label for=\"updatedAt\">\r\n                  <strong>{{userVewData.updatedAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Status</label>\r\n              <div class=\"\">\r\n                <label for=\"status\">\r\n                  <strong>{{userVewData.status}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"licencing\">\r\n              <strong>Hire Details</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Hire Date</label>\r\n              <div class=\"\">\r\n                <label for=\"hireDate\">\r\n                  <strong>{{userVewData.hireDate}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Hire End Date</label>\r\n              <div class=\"\">\r\n                <label for=\"hireEndDate\">\r\n                  <strong>{{userVewData.hireEndDate}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"Documents\">\r\n              <strong>Documents</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">User photo</label>\r\n              <div class=\"\">\r\n                <label for=\"driverphoto\">\r\n                  <strong>{{userVewData.photo}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Proof of address</label>\r\n              <div class=\"\">\r\n                <label for=\"proofofaddress\">\r\n                  <strong>{{userVewData.proofOfAddress}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Agreement </label>\r\n              <div class=\"\">\r\n                <label for=\"policedisclosure \">\r\n                  <strong>{{userVewData.aggrement1}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <div class=\"\">\r\n            <label for=\"attributes\">\r\n              <strong>Bank Account Details</strong>\r\n            </label>\r\n          </div>\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Account Number</label>\r\n              <div class=\"\">\r\n                <label for=\"accountNo\">\r\n                  <strong>{{userVewData.accountNo}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"bankName\">Bank Name</label>\r\n              <div class=\"\">\r\n                <label for=\"bankName\">\r\n                  <strong>{{userVewData.name}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"iffc\">IFSC Code</label>\r\n              <div class=\"\">\r\n                <label for=\"iffc\">\r\n                  <strong>{{userVewData.ifsc}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let UserComponent = class UserComponent {
    constructor(http, driverService, spinnerService, chRef, router, baseApiService, httpService, apiService, alerts, modalService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this.router = router;
        this.baseApiService = baseApiService;
        this.httpService = httpService;
        this.apiService = apiService;
        this.alerts = alerts;
        this.modalService = modalService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.userData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.httpService.get('user/list').subscribe(res => {
            if (res) {
                this.userData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
        });
    }
    delete(content, event, user, index) {
        this.modalService.open(content, { size: 'sm' }).result.then((closeResult) => {
            // modal close
            console.log('modal closed');
        }, (dismissReason) => {
            this.deleteUserRecords(user.id);
            this.alerts.setMessage('Deleted successfully!', 'success');
            this.userData.splice(index, 1);
        });
    }
    deleteUserRecords(id) {
        this.httpService.deletById(id, this.apiService.API_USER_DELETE).subscribe(res => {
        });
    }
    edit(event, user) {
        this.router.navigate([`/user/edit/${user.id}`]);
    }
    view(event, userData, content) {
        this.spinnerService.show();
        this.httpService.getById(userData.id, this.apiService.API_USER_VIEW).subscribe(res => {
            if (res) {
                this.userVewData = res;
                this.spinnerService.hide();
            }
        });
        this.modalService.open(content, { size: 'lg' });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], UserComponent.prototype, "dtElement", void 0);
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("./src/app/user/user.component.html"),
        styles: [__webpack_require__("./src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_10__common_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__["b" /* AlertsService */],
        __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
], UserComponent);



/***/ }),

/***/ "./src/app/vendor/add-edit-vendor/add-edir-vendor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"row\">\r\n        <h2>\r\n          Personnel Details\r\n        </h2>\r\n      </div>\r\n      <form #personalDetails=\"ngForm\" class=\"row detail border border-dark\">\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">First Name</label>\r\n            <input type=\"text\" id=\"firstName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vendorData.firstName\" name=\"firstName\" maxlength=\"60\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <!-- Add here -->\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Last Name</label>\r\n            <input type=\"text\" id=\"lastName\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vendorData.lastName\" name=\"lastName\" maxlength=\"60\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Email*</label>\r\n            <input type=\"text\" id=\"email\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vendorData.email\" name=\"email\" maxlength=\"60\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n            <div class=\"form-group is-required-short\">\r\n              <label class=\"control-label\">Vendor Reg No*</label>\r\n              <input type=\"text\" id=\"email\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vendorData.vendorRegistrationNo\" name=\"vendorRegistrationNo\" maxlength=\"60\"\r\n                required>\r\n            </div>\r\n          </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Mobile Number</label>\r\n            <input type=\"text\" id=\"phone\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vendorData.mobileNo\" #phone=\"ngModel\" name=\"phone\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n          <label for=\"country\">Country</label>\r\n          <div class=\"\">\r\n            <select class=\"form-control\" id=\"country\" [(ngModel)]=\"vendorData.countryId\" name=\"country\" #country=\"ngModel\">\r\n              <option *ngFor=\"let country of countryList\" [ngValue]=\"country.countriId\">{{country.name}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n          <label for=\"state\">State</label>\r\n          <div class=\"\">\r\n            <select class=\"form-control\" id=\"state\" [(ngModel)]=\"vendorData.stateId\" name=\"state\">\r\n              <option *ngFor=\"let state of statesList\" [ngValue]=\"state.stateId\">{{state.stateName}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n          <label for=\"city\">City</label>\r\n          <div class=\"\">\r\n            <select class=\"form-control\" id=\"city\" [(ngModel)]=\"vendorData.cityId\" #city=\"ngModel\" name=\"city\">\r\n              <option *ngFor=\"let city of cityList\" [ngValue]=\"city.cityId\">{{city.citieName}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Pin Code</label>\r\n            <input type=\"text\" id=\"pinCode\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vendorData.zip\" #pinCode=\"ngModel\" name=\"pin\"\r\n              required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n          <div class=\"form-group is-required-short\">\r\n            <label class=\"control-label\">Plot No/Land Mark</label>\r\n            <input type=\"text\" id=\"plotNumber\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vendorData.street\" #landMark=\"ngModel\"\r\n              name=\"streetAdd\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n          <label for=\"status\">Status</label>\r\n          <div class=\"\">\r\n            <select class=\"form-control\" id=\"statusId\" [(ngModel)]=\"vendorData.status\" #statusId=\"ngModel\" name=\"statusId\">\r\n              <option value=\"1\" selected>Active</option>\r\n              <option value=\"0\">Inactive</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div id=\"accordion2\" class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12 border border-dark pd-15\">\r\n    <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n      <div class=\"\">\r\n        <div class=\"row card-header collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\">\r\n          <h2 style=\"float:left;\" class=\"section-title text-center\">\r\n            Documents\r\n          </h2>\r\n        </div>\r\n        <form class=\"row detail border border-dark\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 collapse\" id=\"collapseThree\" data-parent=\"#accordion2\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"driverPhoto\">photo</label>\r\n                  <label class=\"btn btn-default\">\r\n                    <input type=\"file\" (change)=\"selectFile($event)\" name=\"userPic\" placeholder=\"No file chosen12444\">\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mt-1\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 m-t-10\">\r\n      <button type=\"button\" class=\"btn btn-default\" routerLink=\"/vendor\"> Cancel</button>\r\n      <button type=\"button\" style=\"float: right;\" *ngIf=\"!vendorId\" (click)=\"addOrUpdateDriverData(true)\" class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Save\r\n      </button>\r\n      <button type=\"button\" style=\"float: right;\" *ngIf=\"vendorId\" (click)=\"addOrUpdateDriverData(false)\" class=\"btn btn-primary btn-xs pull-right m-r-10\">\r\n        <span class=\"letter-space-small\"></span> Update\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/vendor/add-edit-vendor/add-edit-vendor.component.css":
/***/ (function(module, exports) {

module.exports = ".accordion.pb-15 {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.card-header:after {\r\n    font-family: 'FontAwesome';  \r\n    content: \"\\f068\";\r\n    float: right;\r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\n.card-header.collapsed:after {\r\n    /* symbol for \"collapsed\" panels */\r\n    content: \"\\f067\"; \r\n    position: absolute;\r\n    right: 55px;\r\n    top: 22px;\r\n}\r\n\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\n.btn-margin {\r\n    margin-left: 27%;\r\n    margin-right: 1%;\r\n}\r\n\r\n.form-bg{\r\n    background-color: #eee;\r\n    color: #666;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    border: 1px solid #fff;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    margin-bottom: 6%;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40%;\r\n    height: 40%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/vendor/add-edit-vendor/add-edit-vendor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditVendorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__ = __webpack_require__("./src/app/common/service/file-upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_add_edit_vendor_model__ = __webpack_require__("./src/app/vendor/model/add-edit-vendor.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












let AddEditVendorComponent = class AddEditVendorComponent {
    constructor(route, router, spinnerService, baseApiService, driverService, uploader, apiService, httpService, alerts) {
        this.route = route;
        this.router = router;
        this.spinnerService = spinnerService;
        this.baseApiService = baseApiService;
        this.driverService = driverService;
        this.uploader = uploader;
        this.apiService = apiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.statesList = [];
        this.countryList = [];
        this.cityList = [];
        this.cabList = [];
        this.statusList = [];
        this.hireDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        // Initialized to specific date (09.10.2018).
        this.hireDate = {
            date: { year: 2018, month: 10, day: 9 }
        };
        this.expiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.expiryDate = { date: { year: 2018, month: 10, day: 9 } };
        this.insurenceExpiryDateOptions = {
            // other options...
            dateFormat: 'dd-mm-yyyy',
        };
        this.insurenceExpiryDate = { date: { year: 2018, month: 10, day: 9 } };
        // file uploader
        this.fileToUpload = null;
        this.vendorData = new __WEBPACK_IMPORTED_MODULE_4__model_add_edit_vendor_model__["a" /* AddEditVendorDataModel */]();
    }
    addOrUpdateDriverData(isAdd) {
        if (this.validateForm()) {
            this.setDefault();
            this.setDefaultFields();
            if (isAdd) {
                this.httpService.post(this.vendorData, this.apiService.API_VENDOR_ADD).subscribe(res => {
                    this.alerts.setMessage('Added successfully!', 'success');
                    this.router.navigate([`/vendor`]);
                });
            }
            else {
                this.vendorData.id = this.vendorData.id;
                this.httpService.put(this.vendorData, this.apiService.API_VENDOR_UPDATE).subscribe(res => {
                    if (res) {
                        this.vendorData = res;
                        this.alerts.setMessage('Updated successfully!', 'success');
                        this.router.navigate([`/vendor`]);
                    }
                    console.log('update success');
                });
            }
        }
    }
    validateForm() {
        if (this.personalDetails.valid) {
            this.formInvalid = false;
            return true;
        }
        else {
            return false;
        }
    }
    setDefaultFields() {
        this.vendorData.address = 'Rajajinagar';
        // this.driverData.driverId = 0;
        // this.driverData.startDate = this.driverData.startDate.epoc || 0;
        // this.driverData.driverLicenceExpiry = this.driverData.driverLicenceExpiry.epoc || 0;
    }
    handleFileInput(files) {
        // this.fileToUpload = files.item(0);
        // handle for png jpg pdf
        this.uploadFileToActivity();
    }
    selectFile(event) {
        this.selectedFiles = event.target.files;
        const name = event.target.name;
        if (this.selectedFiles) {
            this.upload(name);
        }
    }
    setUploadFilesValue(name) {
    }
    upload(name) {
        const apiToken = this.baseApiService.getApiToken();
        this.currentFileUpload = this.selectedFiles.item(0);
        this.vendorData[name] = this.currentFileUpload.name;
        this.uploader.pushFileToStorage(this.currentFileUpload, apiToken).subscribe(event => {
            if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                console.log('File is completely uploaded!');
            }
        });
        this.selectedFiles = undefined;
    }
    uploadFileToActivity() {
        const userId = this.baseApiService.getUserId();
        const apiToken = this.baseApiService.getApiToken();
        const fileBrowser = this.fileInput.nativeElement;
        // this.uploader.addToQueue(fileBrowser.files);
        this.uploader.postFile(fileBrowser.files, userId, apiToken).subscribe(data => {
            // do something, if upload success
            console.log(data);
        }, error => {
            console.log(error);
        });
    }
    getUserDetails(id) {
        this.httpService.getById(id, this.apiService.API_VENDOR_DETAILS).subscribe(res => {
            if (res) {
                this.vendorData = res;
                // this.setDate(this.userData.surgeExpiryStartDate, this.surgingData.surgeExpiryEndDate);
            }
        });
    }
    setDefault() {
        this.vendorData.firstName = this.vendorData.firstName || '';
        this.vendorData.lastName = this.vendorData.lastName || '';
        this.vendorData.countryId = this.vendorData.countryId || 0;
        this.vendorData.stateId = this.vendorData.stateId || 0;
        this.vendorData.cityId = this.vendorData.cityId || 0;
        this.vendorData.email = this.vendorData.email || '';
        this.vendorData.zip = this.vendorData.zip || '';
        this.vendorData.status = this.vendorData.status || 0;
        this.vendorData.street = this.vendorData.street || '';
        this.vendorData.address = this.vendorData.address || '';
        this.vendorData.mobileNo = this.vendorData.mobileNo || '';
        this.vendorData.vendorRegistrationNo = this.vendorData.vendorRegistrationNo || '';
    }
    ngOnInit() {
        this.spinnerService.show();
        this.loadData();
        if (this.route.routeConfig.path === 'vendor/edit/:id') {
            // tslint:disable-next-line:no-unused-expression
            this.route && this.route.params.subscribe((params) => {
                this.vendorId = params['id'];
                if (this.vendorId) {
                    this.getUserDetails(this.vendorId);
                    this.spinnerService.hide();
                }
            });
        }
        else {
            this.vendorId = '';
            this.spinnerService.hide();
        }
    }
    loadData() {
        const result = this.httpService.get(this.apiService.API_COMMON_ALL_POP_DATA).subscribe(res => {
            if (res) {
                this.statesList = res['statesList'];
                this.cityList = res['cityList'];
                this.countryList = res['countryList'];
                this.statusList = res['statusList'];
            }
        });
        if (result) {
            this.spinnerService.hide();
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('personalDetails'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddEditVendorComponent.prototype, "personalDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('licencing'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NgForm */])
], AddEditVendorComponent.prototype, "licencing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
    __metadata("design:type", Object)
], AddEditVendorComponent.prototype, "fileInput", void 0);
AddEditVendorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vendor',
        template: __webpack_require__("./src/app/vendor/add-edit-vendor/add-edir-vendor.component.html"),
        styles: [__webpack_require__("./src/app/vendor/add-edit-vendor/add-edit-vendor.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
        __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_5__common_baseApi_service__["a" /* BaseApiService */],
        __WEBPACK_IMPORTED_MODULE_6__common_driver_service__["a" /* DriverService */],
        __WEBPACK_IMPORTED_MODULE_1__common_service_file_upload_service__["a" /* FileUploadService */],
        __WEBPACK_IMPORTED_MODULE_9__common_api_service__["a" /* ApiService */],
        __WEBPACK_IMPORTED_MODULE_10__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_11_angular_alert_module__["b" /* AlertsService */]])
], AddEditVendorComponent);



/***/ }),

/***/ "./src/app/vendor/model/add-edit-vendor.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VendorDataModel {
    constructor(accountNo, address, cityId, countryId, email, firstName, lastName, id, mobileNo, photo, stateId, status, street, zip, vendorRegistrationNo) {
        this.accountNo = accountNo;
        this.address = address;
        this.cityId = cityId;
        this.countryId = countryId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.mobileNo = mobileNo;
        this.photo = photo;
        this.stateId = stateId;
        this.status = status;
        this.street = street;
        this.zip = zip;
        this.vendorRegistrationNo = vendorRegistrationNo;
    }
}
/* unused harmony export VendorDataModel */

class AddEditVendorDataModel {
    constructor() {
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AddEditVendorDataModel;



/***/ }),

/***/ "./src/app/vendor/vendor.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.stylish-input-group .input-group-addon{\r\n    background: white !important; \r\n}\r\n.stylish-input-group .form-control{\r\n\tborder-right:0; \r\n\t-webkit-box-shadow:0 0 0; \r\n\t        box-shadow:0 0 0; \r\n\tborder-color:#ccc;\r\n}\r\n.stylish-input-group button{\r\n    border:0;\r\n    background:transparent;\r\n}\r\n/*\r\n   server-side-angular-way.component.css\r\n*/\r\n.no-data-available {\r\n    text-align: center;\r\n  }\r\n/*\r\n     src/styles.css (i.e. your global style)\r\n  */\r\n.dataTables_empty {\r\n    display: none;\r\n}\r\n.pointer {cursor: pointer;}"

/***/ }),

/***/ "./src/app/vendor/vendor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n  </div>\r\n  <div class=\"col-sm-6 text-right\">\r\n    <button type=\"button\" class=\"btn btn-default\" routerLink=\"/vendor/add\">Add Vendor</button>\r\n  </div>\r\n</div>\r\n<div class=\"mt-5\">\r\n  <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover\">\r\n    <thead style=\"font: bold;\">\r\n      <tr>\r\n        <th>#</th>\r\n        <th>First Name</th>\r\n        <th>Last Name</th>\r\n        <th>Email</th>\r\n        <th>Mobile Number</th>\r\n        <th>Vendor RegNo</th>\r\n        <th>Status</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let vendor of vendorData;let index=index;\">\r\n        <td>{{index+1}}</td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{vendor.firstName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{vendor.lastName}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{vendor.email}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{vendor.mobileNo}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{vendor.vendorRegistrationNo}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">{{vendor.status}}</span>\r\n        </td>\r\n        <td>\r\n          <span class=\"text-wrap\">\r\n            <a class=\"pointer\" (click)=\"view($event,vendor,viewcontent)\">\r\n              <span class=\"oi oi-share-boxed\" title=\"view\" aria-hidden=\"true\"></span>\r\n            </a> /\r\n            <a class=\"pointer\" (click)=\"edit($event,vendor)\">\r\n              <span class=\"oi oi-pencil\" title=\"edit\" aria-hidden=\"true\"></span>\r\n            </a>/\r\n            <a class=\"pointer\" (click)=\"delete(content,$event,vendor,index)\">\r\n              <span class=\"oi oi-trash\" title=\"delete\" aria-hidden=\"true\"></span>\r\n            </a>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n  </table>\r\n  <ng-template #content let-cl=\"close\" let-di=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Delete Confirmation</h5>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>Do you want to delete record ?</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" style=\"margin-right: 61%;\" (click)=\"di('Dismissed from dismiss button')\">Yes</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"cl('Closed from Close button')\">No</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template #viewcontent let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Vendor Details</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"accordion pb-15 col-xs-12 col-md-12 col-lg-12 col-sm-12\">\r\n        <div class=\"col-md-12 col-lg-12 col-sm-12\">\r\n          <form class=\"row detail\">\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">First Name</label>\r\n              <div class=\"\">\r\n                <label for=\"firstName\">\r\n                  <strong>{{vendorView.firstName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Last Name</label>\r\n              <div class=\"\">\r\n                <label for=\"lastName\">\r\n                  <strong>{{vendorView.lastName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">email</label>\r\n              <div class=\"\">\r\n                <label for=\"email\">\r\n                  <strong>{{vendorView.email}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">mobileNo</label>\r\n              <div class=\"\">\r\n                <label for=\"mobileNo\">\r\n                  <strong>{{vendorView.mobileNo}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label class=\"control-label\">Vendor RegNo</label>\r\n                <div class=\"\">\r\n                  <label for=\"mobileNo\">\r\n                    <strong>{{vendorView.vendorRegistrationNo}}</strong>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">Country Name</label>\r\n              <div class=\"\">\r\n                <label for=\"countryName\">\r\n                  <strong>{{vendorView.countryName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">State Name</label>\r\n              <div class=\"\">\r\n                <label for=\"stateName\">\r\n                  <strong>{{vendorView.stateName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">City Name</label>\r\n              <div class=\"\">\r\n                <label for=\"cityName\">\r\n                  <strong>{{vendorView.cityName}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label\">street</label>\r\n              <div class=\"\">\r\n                <label for=\"street\">\r\n                  <strong>{{vendorView.street}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n                <label class=\"control-label\">zip</label>\r\n                <div class=\"\">\r\n                  <label for=\"zip\">\r\n                    <strong>{{vendorView.zip}}</strong>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              \r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"status\">Status</label>\r\n              <div class=\"\">\r\n                <label for=\"status\">\r\n                  <strong>{{vendorView.status}}</strong>\r\n                </label>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"createdAt\">createdAt</label>\r\n              <div class=\"\">\r\n                <label for=\"createdAt\">\r\n                  <strong>{{vendorView.createdAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-md-4 col-sm-6 col-xs-12\">\r\n              <label for=\"updatedAt\">updatedAt</label>\r\n              <div class=\"\">\r\n                <label for=\"updatedAt\">\r\n                  <strong>{{vendorView.updatedAt}}</strong>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/vendor/vendor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm2015/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_driver_service__ = __webpack_require__("./src/app/common/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__ = __webpack_require__("./src/app/common/baseApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_http_service__ = __webpack_require__("./src/app/common/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__ = __webpack_require__("./node_modules/angular-alert-module/fesm2015/alerts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_api_service__ = __webpack_require__("./src/app/common/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













let VendorComponent = class VendorComponent {
    constructor(http, driverService, spinnerService, chRef, router, baseApiService, httpService, alerts, config, modalService, apiService) {
        this.http = http;
        this.driverService = driverService;
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this.router = router;
        this.baseApiService = baseApiService;
        this.httpService = httpService;
        this.alerts = alerts;
        this.modalService = modalService;
        this.apiService = apiService;
        this.dtOptions = {};
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.vendorData = [];
    }
    ngOnInit() {
        this.spinnerService.show();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 8
        };
        this.httpService.get(this.apiService.API_VENDOR_LIST).subscribe(res => {
            if (res) {
                this.vendorData = res;
                this.dtTrigger.next();
                this.spinnerService.hide();
            }
        });
    }
    edit(event, vendor) {
        this.router.navigate([`vendor/edit/${vendor.id}`]);
    }
    view(event, vendor, content) {
        this.spinnerService.show();
        this.httpService.getById(vendor.id, this.apiService.API_VENDOR_VIEW).subscribe(res => {
            if (res) {
                this.vendorView = res;
                this.spinnerService.hide();
            }
        });
        this.modalService.open(content, { size: 'lg' });
    }
    delete(content, event, vendor, index) {
        this.modalService.open(content, { size: 'sm' }).result.then((closeResult) => {
            // modal close
            console.log('modal closed');
        }, (dismissReason) => {
            this.deleteVendor(vendor.id);
            this.alerts.setMessage('Deleted successfully!', 'success');
            this.vendorData.splice(index, 1);
        });
    }
    deleteVendor(id) {
        this.httpService.deletById(id, this.apiService.API_VENDOR_DELETE).subscribe(res => {
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7_angular_datatables__["a" /* DataTableDirective */])
], VendorComponent.prototype, "dtElement", void 0);
VendorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("./src/app/vendor/vendor.component.html"),
        styles: [__webpack_require__("./src/app/vendor/vendor.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__common_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__common_baseApi_service__["a" /* BaseApiService */], __WEBPACK_IMPORTED_MODULE_8__common_http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_9_angular_alert_module__["b" /* AlertsService */], __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbCarouselConfig */],
        __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
        __WEBPACK_IMPORTED_MODULE_11__common_api_service__["a" /* ApiService */]])
], VendorComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map