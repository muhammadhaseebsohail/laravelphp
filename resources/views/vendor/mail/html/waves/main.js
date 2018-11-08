(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('token') != null) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/admin-panel/admin-crisis-support/admin-crisis-support.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-crisis-support/admin-crisis-support.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Crisis Support Resources</b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <input type=\"search\" class=\"form-control form-control-search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n\r\n            <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n       <h6 id=\"header\">{{adminName}}\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"successMessage\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            <strong>Crisis Support Resources!</strong> Successfully Added !!!\r\n          </div>\r\n\r\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              <strong>Error!</strong> Resourse Name Already Exist !!!\r\n            </div>\r\n\r\n            <div *ngIf=\"editSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                <strong>Crisis Support Resources!</strong>  Updated  Successfully!!!\r\n              </div>\r\n\r\n              <div *ngIf=\"editError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  <strong>Error!</strong> Error Occur During update.!!!\r\n                </div>\r\n\r\n                <div *ngIf=\"deleteSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                    <strong>Crisis Support Resources!</strong> Deleted  Successfully!!!\r\n                  </div>\r\n\r\n                  <div *ngIf=\"editError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                      <strong>Error!</strong> Error Occur During Deletion!!!\r\n                    </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row spaces\">\r\n  <div class=\"col-md-12\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent2\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent2\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n        </ul>\r\n\r\n\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space\" (click)=\"newCrisis(template2)\"  >ADD</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space\" routerLink=\"/import-crisis-support\">IMPORT</button>\r\n        <!-- <input  type=\"file\" class=\"btn btn-primary btn-sm\" (change)=\"handleFileUpload($event)\" accept=\".csv\"> -->\r\n      </div>\r\n    </nav>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"table-responsive spaces\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n\r\n        <th>Resource Name</th>\r\n        <th>Service Type</th>\r\n        <th>Phone Number</th>\r\n        <th>Website</th>\r\n        <th>Action</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tr *ngIf=\"crisisObj.data.result.length < 1\">\r\n      <td colspan=\"7\">\r\n        <p style=\"text-align:center;\">No Data Found </p>\r\n      </td>\r\n    </tr>\r\n    <tr *ngFor=\"let crise of crisisObj.data.result\">\r\n    \r\n      <td>{{crise.name}} </td>\r\n      <td>{{crise.serviceTypeId}} </td>\r\n      <td>{{crise.phoneNumber}} </td>\r\n      <td>{{crise.website}} </td>\r\n      <td>\r\n        <p data-placement=\"top\" title=\"Edit\">\r\n          <button class=\"btn btn-primary btn-xs\" data-title=\"Edit\" (click)=\"editCrisisSupport(template4 ,crise.name,crise.phoneNumber\r\n           ,crise.serviceTypeId,crise.website,crise.id)\"\r\n            data-target=\"#edit\">\r\n            <span class=\"fa fa-edit\"></span>\r\n          </button>\r\n          <button class=\"btn btn-danger btn-xs btn-margin\" data-title=\"Delete\" (click)=\"deleteCrisis(template3 ,crise.id )\"\r\n            data-target=\"#delete\">\r\n            <span class=\"fa fa-trash\"></span>\r\n          </button>\r\n        </p>\r\n      </td>\r\n\r\n    </tr>\r\n\r\n  </table>\r\n</div>\r\n\r\n<div class=\"spaces w3-right-align\" *ngIf=\"collectionSize >10\">\r\n    <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"currentPage\" size=\"sm\"\r\n                    [pageSize]=\"10\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"\r\n                    (pageChange)=\"vac_pagination(page)\"></ngb-pagination>\r\n  \r\n  </div>\r\n    <!-- --------------------------------------EDIT TEMPLATE------------------------------- -->\r\n\r\n<ng-template #template4>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Edit Crisis Support Resources</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"Name\" placeholder=\"Resource Name*\"  required\r\n       name=\"name\" \r\n        [(ngModel)]=\"name\">\r\n\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"name.touched && !name.valid\">Please enter a  Name</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"phonenumber\" placeholder=\"phoneNumber*\"  required name=\"phoneNumber\" \r\n        [(ngModel)]=\"phoneNumber\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">Please enter a Phone Number</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"servicetypeid\" placeholder=\"Service Type\" required name=\"serviceTypeId\"\r\n       \t [(ngModel)]=\"\tserviceTypeId\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"website\" class=\"w3-input change\" id=\"Website\" placeholder=\"Website*\" required name=\"website\"  [(ngModel)]=\"website\"\r\n        >\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">\r\n      Close\r\n    </button>\r\n    <button [class.disabled]=\"\" [disabled]=\"\" class=\"btn btn-primary modal-btn-clr\" (click)=\"editCris(); modalRef.hide()\">Submit\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<!-- --------------------------------------END EDIT TEMPLATE------------------------------- -->\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Add New Crisis Support Resources</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form #f=\"ngForm\" (ngSubmit)=\"addCrisis(f)\" >\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"Name\" placeholder=\"Resource Name*\"  ngModel required\r\n       name=\"name1\" name1\r\n        #name1=\"ngModel\">\r\n\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"name1.touched && !name1.valid\">Please enter a first Name</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"phonenumber\" placeholder=\"Phone*\" ngModel required name=\"phoneNumber\" \r\n      phoneNumber #phoneNumber=\"ngModel\">\r\n\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"phone.touched && !phone.valid\">Please enter a Last Name</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"servicetypeid\" placeholder=\"Service Type*\" ngModel  required name=\"serviceTypeId\"\r\n       \tserviceTypeId #serviceTypeId=\"ngModel\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"website\" class=\"w3-input change\" id=\"website\" placeholder=\"Website*\" ngModel required \r\n      name=\"website\" website #website=\"ngModel\">\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">\r\n      Close\r\n    </button>\r\n    <button [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\" class=\"btn btn-primary modal-btn-clr\" \r\n    (click)=\"modalRef.hide()\">Submit\r\n    </button>\r\n  </div>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-template #template3>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Are you sure to delete Crisis Resources ?</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n\r\n    <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary modal-btn-clr btn-modal\" (click)=\"delCris();modalRef.hide()\">Delete\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>"

/***/ }),

/***/ "./src/app/admin-panel/admin-crisis-support/admin-crisis-support.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-crisis-support/admin-crisis-support.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminCrisisSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCrisisSupportComponent", function() { return AdminCrisisSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminCrisisSupportComponent = /** @class */ (function () {
    function AdminCrisisSupportComponent(modalService, profileServiceObj, spinnerService) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.crisisObj = { data: { result: [] } };
        this.currentPage = 1;
        this.uploading = false;
        this.uploadingComplete = false;
        this.successMessage = null;
        this.errorMessage = null;
        this.editSuccess = null;
        this.editError = null;
        this.deleteSuccess = null;
        this.deleteError = null;
    }
    AdminCrisisSupportComponent.prototype.loadCrisis = function () {
        var _this = this;
        this.spinnerService.show();
        this.schoolid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('spid');
        this.profileServiceObj.getMyCrisisResources(this.schoolid).subscribe(function (res) {
            _this.getMyResponderSchoolObj = res;
            _this.collectionSize = _this.getMyResponderSchoolObj['data']['result'].length;
            _this.crisisObj['data']['result'] = _this.getMyResponderSchoolObj['data']['result'].slice(0, 10);
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
        });
    };
    AdminCrisisSupportComponent.prototype.ngOnInit = function () {
        this.loadCrisis();
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('adminName');
        // this.profileServiceObj.getAdminprofile().subscribe(
        //   res => {
        //     this.profileObj = res;
        //   },
        //   err =>{}
        // );
    };
    AdminCrisisSupportComponent.prototype.vac_pagination = function (page) {
        console.log((this.currentPage - 1) * 10, (this.currentPage) * 10);
        this.crisisObj['data']['result'] = this.getMyResponderSchoolObj['data']['result'].slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
    };
    AdminCrisisSupportComponent.prototype.newCrisis = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AdminCrisisSupportComponent.prototype.addCrisis = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.profileServiceObj.addCrisis(form.value.name1, form.value.phoneNumber, form.value.serviceTypeId, form.value.website, this.schoolid).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.errorMessage = res;
                _this.successMessage = null;
                _this.spinnerService.hide();
                window.setTimeout(function () {
                    _this.errorMessage = null;
                }, 3000);
            }
            else {
                _this.getFileobj = res;
                _this.loadCrisis();
                _this.spinnerService.hide();
                _this.successMessage = res;
                _this.errorMessage = null;
                window.setTimeout(function () {
                    _this.successMessage = null;
                }, 3000);
            }
        }, function (err) {
            _this.spinnerService.hide();
            _this.errorMessage = err;
            _this.successMessage = null;
            window.setTimeout(function () {
                _this.errorMessage = null;
            }, 3000);
        });
    };
    AdminCrisisSupportComponent.prototype.editCrisisSupport = function (template, name, phoneNumber, serviceTypeId, website, crisisId) {
        this.crisisId = crisisId;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.serviceTypeId = serviceTypeId;
        this.website = website;
        this.modalRef = this.modalService.show(template);
    };
    AdminCrisisSupportComponent.prototype.editCris = function () {
        var _this = this;
        this.profileServiceObj.updateCrisis(this.name, this.phoneNumber, this.serviceTypeId, this.website, this.crisisId).subscribe(function (res) {
            _this.loadCrisis();
            _this.editSuccess = res;
            _this.editError = null;
            window.setTimeout(function () {
                _this.editSuccess = null;
            }, 3000);
        }, function (err) {
            _this.editError = err;
            _this.editSuccess = null;
            window.setTimeout(function () {
                _this.editError = null;
            }, 3000);
        });
    };
    AdminCrisisSupportComponent.prototype.deleteCrisis = function (template, crisisId) {
        this.crisisId = crisisId;
        this.modalRef = this.modalService.show(template);
    };
    AdminCrisisSupportComponent.prototype.delCris = function (crisisId) {
        var _this = this;
        this.profileServiceObj.deleteCrisisResources(this.crisisId).subscribe(function (res) {
            _this.loadCrisis();
            _this.spinnerService.hide();
            _this.deleteSuccess = res;
            _this.deleteError = null;
            window.setTimeout(function () {
                _this.deleteSuccess = null;
            }, 1000);
        }, function (err) {
            _this.spinnerService.hide();
            _this.deleteError = err;
            _this.deleteSuccess = null;
            window.setTimeout(function () {
                _this.deleteError = null;
            }, 1000);
        });
    };
    AdminCrisisSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-crisis-support',
            template: __webpack_require__(/*! ./admin-crisis-support.component.html */ "./src/app/admin-panel/admin-crisis-support/admin-crisis-support.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], AdminCrisisSupportComponent);
    return AdminCrisisSupportComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/admin-local-resources/admin-local-resources.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-local-resources/admin-local-resources.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Local Resources</b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n      </ul>\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <input type=\"search\" class=\"form-control form-control-search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n            <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n     <h6 id=\"header\">{{adminName}}  <!-- {{profileObj['data']['firstName']}} {{profileObj['data']['lastName']}} -->\r\n      </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"successMessage\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            <strong>Local Resources!</strong> Successfully Added !!!\r\n          </div>\r\n\r\n        \r\n          <div *ngIf=\"errorMessage\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              <strong>Error!</strong> Resourse Name Already Exist !!!\r\n            </div>\r\n\r\n            <div *ngIf=\"editSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                <strong>Local Resources!</strong>  Updated  Successfully!!!\r\n              </div>\r\n\r\n              <div *ngIf=\"editError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  <strong>Error!</strong> Error Occur During update.!!!\r\n                </div>\r\n\r\n                <div *ngIf=\"deleteSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                    <strong>Local Resources!</strong> Deleted  Successfully!!!\r\n                  </div>\r\n\r\n                  <div *ngIf=\"editError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                      <strong>Error!</strong> Error Occur During Deletion!!!\r\n                    </div>\r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row spaces\">\r\n  <div class=\"col-md-12\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent2\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent2\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space\" (click)=\"newLocal(template2)\">ADD</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space\" routerLink=\"/import-local-resources\">IMPORT</button>\r\n        <!-- <input  type=\"file\" class=\"btn btn-primary btn-sm\" (change)=\"handleFileUpload($event)\" accept=\".csv\"> -->\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"table-responsive spaces\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Resource Name</th>\r\n        <th>Service Type</th>\r\n        <th>Insurance Type</th>\r\n        <th>Address</th>\r\n        <th>City</th>\r\n        <th>State</th>\r\n        <th>Zip Code</th>\r\n        <th>phone Number</th>\r\n        <th>Website</th>\r\n        <th>Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tr *ngIf=\"localObj.data.result.length < 1\">\r\n      <td colspan=\"10\">\r\n        <p style=\"text-align:center;\">No Data Found </p>\r\n      </td>\r\n    </tr>\r\n    <tr *ngFor=\"let local of localObj.data.result\">\r\n      \r\n      <td>{{local.name}} </td>\r\n      <td>{{local.serviceTypeId}} </td>\r\n      <td>{{local.insuranceType}} </td>\r\n      <td>{{local.streetAddress}} </td>\r\n      <td>{{local.city}} </td>\r\n      <td>{{local.state}} </td>\r\n      <td>{{local.zipCode}} </td>\r\n      <td>{{local.phoneNumber}} </td>\r\n      <td>{{local.website}} </td>\r\n      \r\n      <td>\r\n        <p data-placement=\"top\" title=\"Edit\">\r\n          <button class=\"btn btn-primary btn-xs\" data-title=\"Edit\"\r\n           (click)=\"editLocalResource(template4, local.name, local.serviceTypeId,\r\n           local.insuranceType, local.streetAddress, local.city, local.state, local.zipCode,\r\n           local.phoneNumber, local.website, local.id)\" \r\n           data-target=\"#edit\">\r\n            <span class=\"fa fa-edit\"></span>\r\n          </button>\r\n          <button class=\"btn btn-danger btn-xs btn-margin1\" data-title=\"Delete\" (click)=\"deleteLocalRes(template3 ,local.id )\" data-target=\"#delete\">\r\n            <span class=\"fa fa-trash\"></span>\r\n          </button>\r\n        </p>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"spaces w3-right-align\" *ngIf=\"collectionSize >10\">\r\n    <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"currentPage\" size=\"sm\"\r\n                    [pageSize]=\"10\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"\r\n                    (pageChange)=\"vac_pagination(page)\"></ngb-pagination>\r\n  \r\n  </div>\r\n\r\n\r\n  \r\n  \r\n\r\n<!-- --------------------------------------EDIT TEMPLATE------------------------------- -->\r\n\r\n<ng-template #template4>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left modal_title_font\">Edit New Local Resources</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"modal-body\">\r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"name\" placeholder=\"Resource Name*\" required name=\"name\" \r\n          [(ngModel)]=\"name\">\r\n  \r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"name.touched && !name.valid\">Please enter a Resource Name</span> -->\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"serviceTypeId\" placeholder=\"Service Type*\" required name=\"serviceTypeId\" \r\n          [(ngModel)]=\"serviceTypeId\">\r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"serviceType.touched && !serviceType.valid\">\r\n          Please enter valid Service Type</span> -->\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"insuranceType\" placeholder=\"Insurance Type*\" required name=\"insuranceType\"\r\n           [(ngModel)]=\"insuranceType\">\r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"insurancetype.touched && !insurancetype.valid\">\r\n          Please enter valid Insurance Type</span> -->\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"streetAddress\" placeholder=\"Address*\" required name=\"streetAddress\" \r\n          [(ngModel)]=\"streetAddress\">\r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"streetaddress.touched && !streetaddress.valid\">\r\n          Please enter valid Street Address</span> -->\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"city\" placeholder=\"City*\" required name=\"city\"\r\n          [(ngModel)]=\"city\">\r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"city.touched && !city.valid\">\r\n                    Please enter a valid city</span> -->\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"state\" placeholder=\"State*\" required name=\"state\" \r\n         [(ngModel)]=\"state\">\r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n                      Please enter a valid State</span> -->\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"number\" class=\"w3-input change\" id=\"zipCode\"  placeholder=\"zipcode*\" required name=\"zipCode\"\r\n         [(ngModel)]=\"zipCode\">\r\n      </div>\r\n      \r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"phoneNumber\" placeholder=\"phoneNumber*\" required name=\"phoneNumber\"\r\n          [(ngModel)]=\"phoneNumber\">\r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n          Please enter a valid phoneNumber Number</span> -->\r\n      </div>\r\n  \r\n  \r\n      <div class=\"form-group\">\r\n        <input type=\"website\" class=\"w3-input change\" id=\"website\" placeholder=\"Website*\" required \r\n        name=\"website\" website [(ngModel)]=\"website\">\r\n        <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"website.touched && !website.valid\">\r\n          Please enter valid Website</span> -->\r\n      </div>\r\n  \r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">\r\n        Close\r\n      </button>\r\n      <button [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\" class=\"btn btn-primary modal-btn-clr\" (click)=\"editLoc(); modalRef.hide()\">Submit\r\n      </button>\r\n    </div>\r\n  \r\n  </ng-template>\r\n\r\n<!-- --------------------------------------END EDIT TEMPLATE------------------------------- -->\r\n\r\n<!-- --------------------ADD LOCAL RESOURCES ----------------------- -->\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Add New Local Resources</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form #f=\"ngForm\" (ngSubmit)=\"addLocal(f)\" >\r\n   \r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"form-group\">\r\n       \r\n      <input type=\"text\" class=\"w3-input change\" id=\"Name\" placeholder=\"Resource Name*\" ngModel required \r\n      name=\"name1\" name1\r\n      #name1=\"ngModel\" >\r\n    \r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"name.touched && !name.valid\">Please enter a Resource Name</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"servicetypeid\" placeholder=\"Service Type*\" ngModel required \r\n      name=\"serviceTypeId\" serviceTypeId\r\n        #serviceTypeId=\"ngModel\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"serviceType.touched && !serviceType.valid\">\r\n        Please enter valid Service Type</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"insurancetype\" placeholder=\"Insurance Type*\" ngModel required \r\n      name=\"insuranceType\" insuranceType\r\n       #insuranceType=\"ngModel\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"insurancetype.touched && !insurancetype.valid\">\r\n        Please enter valid Insurance Type</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"streetaddress\" placeholder=\"Address*\" ngModel required \r\n      name=\"streetAddress\" streetAddress\r\n        #streetAddress=\"ngModel\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"streetaddress.touched && !streetaddress.valid\">\r\n        Please enter valid Street Address</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"city\" placeholder=\"City*\" ngModel required\r\n       name=\"city\" city  #city=\"ngModel\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"city.touched && !city.valid\">\r\n                  Please enter a valid city</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"state\" placeholder=\"State*\" ngModel required \r\n      name=\"state\" state   #state=\"ngModel\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n                    Please enter a valid State</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"number\" class=\"w3-input change\" id=\"zipcode\" \r\n      placeholder=\"zipCode*\" ngModel required name=\"zipCode\" zipCode\r\n      #zipCode=\"ngModel\">\r\n     \r\n    </div>\r\n   \r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"phonenumber\" placeholder=\"phoneNumber*\" ngModel required \r\n      name=\"phoneNumber\" phoneNumber  #phoneNumber=\"ngModel\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"phoneNumber.touched && !phoneNumber.valid\">\r\n        Please enter a valid phoneNumber Number</span> -->\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"website\" class=\"w3-input change\" id=\"website\" placeholder=\"Website*\" ngModel required \r\n      name=\"website\" website #website=\"ngModel\">\r\n      <!-- <span style=\"color: red;\" class=\"help-block\" *ngIf=\"website.touched && !website.valid\">\r\n        Please enter valid Website</span> -->\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">\r\n      Close\r\n    </button>\r\n    \r\n    <button [class.disabled]=\"\" [disabled]=\"\" class=\"btn btn-primary modal-btn-clr\" \r\n    (click)=\"modalRef.hide()\">Submit\r\n    </button>\r\n  </div>\r\n\r\n</form>\r\n</ng-template>\r\n\r\n<!-- ---------------------------END LOCAL RESOURCES ------------------------ -->\r\n\r\n<ng-template #template3>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Are you sure to delete Crisis Resources ?</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n\r\n    <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary modal-btn-clr btn-modal\" (click)=\"delLoc();modalRef.hide()\">Delete\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>"

/***/ }),

/***/ "./src/app/admin-panel/admin-local-resources/admin-local-resources.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-local-resources/admin-local-resources.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AdminLocalResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLocalResourcesComponent", function() { return AdminLocalResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLocalResourcesComponent = /** @class */ (function () {
    function AdminLocalResourcesComponent(modalService, profileServiceObj, spinnerService) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.localObj = { data: { result: [] } };
        this.currentPage = 1;
        this.uploading = false;
        this.uploadingComplete = false;
        this.successMessage = null;
        this.errorMessage = null;
        this.editSuccess = null;
        this.editError = null;
        this.deleteSuccess = null;
        this.deleteError = null;
    }
    AdminLocalResourcesComponent.prototype.loadLocal = function () {
        var _this = this;
        this.spinnerService.show();
        this.schoolid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('spid');
        this.profileServiceObj.getlocalResources(this.schoolid).subscribe(function (res) {
            _this.getMyResponderSchoolObj = res;
            _this.collectionSize = _this.getMyResponderSchoolObj['data']['result'].length;
            _this.localObj['data']['result'] = _this.getMyResponderSchoolObj['data']['result'].slice(0, 10);
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
        });
    };
    AdminLocalResourcesComponent.prototype.ngOnInit = function () {
        this.loadLocal();
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get('adminName');
        // this.profileServiceObj.getAdminprofile().subscribe(
        //   res => {
        //     this.profileObj = res;
        //   },
        //   err =>{}
        // );
    };
    AdminLocalResourcesComponent.prototype.vac_pagination = function (page) {
        console.log((this.currentPage - 1) * 10, (this.currentPage) * 10);
        this.localObj['data']['result'] = this.getMyResponderSchoolObj['data']['result'].slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
    };
    AdminLocalResourcesComponent.prototype.newLocal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AdminLocalResourcesComponent.prototype.addLocal = function (form1) {
        var _this = this;
        this.spinnerService.show();
        this.profileServiceObj.addLocalResources(form1.value.name1, form1.value.city, form1.value.state, form1.value.zipCode, form1.value.phoneNumber, form1.value.streetAddress, form1.value.serviceTypeId, form1.value.insuranceType, form1.value.website, this.schoolid).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.successMessage = null;
                _this.errorMessage = res;
                _this.spinnerService.hide();
                window.setTimeout(function () {
                    _this.errorMessage = null;
                }, 3000);
            }
            else {
                _this.getFileobj = res;
                _this.loadLocal();
                _this.spinnerService.hide();
                _this.successMessage = res;
                _this.errorMessage = null;
                window.setTimeout(function () {
                    _this.successMessage = null;
                }, 3000);
            }
        }, function (err) {
            _this.successMessage = null;
            _this.errorMessage = err;
            _this.spinnerService.hide();
            window.setTimeout(function () {
                _this.errorMessage = null;
            }, 3000);
        });
    };
    AdminLocalResourcesComponent.prototype.editLocalResource = function (template, name, serviceTypeId, insuranceType, streetAddress, city, state, zipCode, phoneNumber, website, localId) {
        this.localId = localId;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.serviceTypeId = serviceTypeId;
        this.insuranceType = insuranceType;
        this.website = website;
        this.modalRef = this.modalService.show(template);
    };
    AdminLocalResourcesComponent.prototype.editLoc = function () {
        var _this = this;
        this.profileServiceObj.updateLocal(this.name, this.city, this.state, this.zipCode, this.phoneNumber, this.streetAddress, this.serviceTypeId, this.insuranceType, this.website, this.localId).subscribe(function (res) {
            _this.loadLocal();
            _this.spinnerService.hide();
            _this.editSuccess = res;
            _this.editError = null;
            window.setTimeout(function () {
                _this.editSuccess = null;
            }, 3000);
        }, function (err) {
            _this.editError = err;
            _this.editSuccess = null;
            window.setTimeout(function () {
                _this.editError = null;
            }, 3000);
        });
    };
    AdminLocalResourcesComponent.prototype.deleteLocalRes = function (template, localId) {
        this.localId = localId;
        this.modalRef = this.modalService.show(template);
    };
    AdminLocalResourcesComponent.prototype.delLoc = function () {
        var _this = this;
        this.profileServiceObj.deleteLocalResources(this.localId).subscribe(function (res) {
            _this.loadLocal();
            _this.spinnerService.hide();
            _this.deleteSuccess = res;
            _this.deleteError = null;
            window.setTimeout(function () {
                _this.deleteSuccess = null;
            }, 1000);
        }, function (err) {
            _this.deleteError = err;
            _this.deleteSuccess = null;
            window.setTimeout(function () {
                _this.deleteError = null;
            }, 1000);
        });
    };
    AdminLocalResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-local-resources',
            template: __webpack_require__(/*! ./admin-local-resources.component.html */ "./src/app/admin-panel/admin-local-resources/admin-local-resources.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], AdminLocalResourcesComponent);
    return AdminLocalResourcesComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/admin-panel-sidebar/admin-panel-sidebar.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-panel-sidebar/admin-panel-sidebar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button  class=\"hamburger\" (click)=\"toggle()\">\r\n  <span><i class=\"fas fa-bars\"></i></span>\r\n</button>\r\n<div class=\"sidenav\" [@slideInOut]=\"menuState\">\r\n  <a class=\"closebtn\" (click)=\"toggle()\">&times;\r\n\r\n  </a>\r\n\r\n  <div class=\"sidebar-user-panel\">\r\n    <div class=\"user-panel\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n            <!-- routerLink=\"/update-profile\" -->\r\n          <a class=\"nav-link\" routerLink=\"/update-profile\" >\r\n           \r\n            <img *ngIf=\"imageToShow;else other_image\" [src]=\"imageToShow\"  class=\"img-responsive\" alt=\"\">\r\n            <ng-template #other_image>\r\n\r\n              <span class=\"avatar_name\"><i class=\"fas fa-camera font-awesome-clr\"></i></span>\r\n\r\n            </ng-template>\r\n\r\n            \r\n          </a>\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  \r\n\r\n  <a routerLink=\"/admin-my-responder\" [routerLinkActive]=\"['active']\">\r\n  <img id=\"res-img-size\" src=\"/waves/assets/images/Responders.png\">Responders\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/admin-my-student\" [routerLinkActive]=\"['active']\">\r\n  <img id=\"prf-list-size\" src=\"/waves/assets/images/Students.png\">Students\r\n </a> \r\n\r\n  <a class=\"link\" routerLink=\"/admin-local-resources\" [routerLinkActive]=\"['active']\">\r\n  <img id=\"prf-list-size\" src=\"/waves/assets/images/LocalResources_white.png\">Local Resources\r\n  </a>\r\n\r\n  <a class=\"link\" routerLink=\"/admin-crisis-support\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/CrisisSupport_white.png\">Crisis Support\r\n  </a>\r\n\r\n  <a class=\"link\"  [routerLinkActive]=\"['active']\">\r\n  <img id=\"prf-list-size\" src=\"/waves/assets/images/Reported Messages.png\">Reported Messages\r\n  </a>\r\n  <a class=\"link\"  [routerLinkActive]=\"['active']\">\r\n  <img id=\"prf-list-size\" src=\"/waves/assets/images/Referral Requests.png\">Refferal Request \r\n  </a>\r\n\r\n  <a class=\"link\"  [routerLinkActive]=\"['active']\">\r\n  <img id=\"ana-img-size\" src=\"/waves/assets/images/Analytics.png\">Analytics\r\n  </a>\r\n\r\n  <div class=\"bottom-button\">\r\n    <a>\r\n\r\n      <h6 id=\"li_clr\">{{schoolName}}</h6>\r\n\r\n      <hr class=\"beautiful-line\">\r\n      <button type=\"button\" class=\"btn btn-primary side-btn\" (click)=\"logOut()\">Sign Out</button>\r\n\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel-sidebar/admin-panel-sidebar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin-panel/admin-panel-sidebar/admin-panel-sidebar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminPanelSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelSidebarComponent", function() { return AdminPanelSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPanelSidebarComponent = /** @class */ (function () {
    function AdminPanelSidebarComponent(router, profileServiceObj) {
        this.router = router;
        this.profileServiceObj = profileServiceObj;
        this.menuState = 'out';
    }
    AdminPanelSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schoolName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('schoolName');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminId');
        this.profileServiceObj.getimage(this.userid).subscribe(function (res) {
            _this.imageToShow = res['data']['result'];
        }, function (err) {
        });
    };
    AdminPanelSidebarComponent.prototype.toggle = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        console.log(this.menuState);
    };
    // toggle1() {
    //   this.menuState = this.menuState === 'in' ? 'out' : 'in';
    //   console.log(this.menuState);
    // }
    AdminPanelSidebarComponent.prototype.logOut = function () {
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('token');
        this.router.navigate(['/login']);
    };
    AdminPanelSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-panel-sidebar',
            template: __webpack_require__(/*! ./admin-panel-sidebar.component.html */ "./src/app/admin-panel/admin-panel-sidebar/admin-panel-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translate3d(0, 0, 0)',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], AdminPanelSidebarComponent);
    return AdminPanelSidebarComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput[type=search]::-webkit-search-cancel-button {\r\n  -webkit-appearance: searchfield-cancel-button;\r\n}\r\nh1, h2, h3, h4, h5, h6, p {\r\n  font-family: Raleway !important;\r\n}\r\nh4#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\nh6#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\nh5#text {\r\n\r\n  text-align: left !important;\r\n}\r\nh6#size {\r\n  font-size: 14px !important;\r\n  text-align: left !important;\r\n}\r\np#font-size {\r\n  font-size: large !important;\r\n}\r\n.capital-name{\r\n  font-family: Raleway !important;\r\n  text-transform: capitalize;\r\n}\r\na {\r\n  font-size: 14px !important;\r\n}\r\n.disabled {\r\n  cursor: not-allowed;\r\n}\r\n.help-block {\r\n\r\n  color: red;\r\n}\r\n.nav-bg-color {\r\n  background-color: #16baff !important;\r\n}\r\nh6#header {\r\n  font-size: 13px;\r\n  padding-right: 5px;\r\n}\r\n#header\r\n{\r\n  font-size: 15px;\r\n    font-weight: bold;\r\n    text-transform: capitalize;\r\n    font-family: Raleway !important;\r\n}\r\n.nav-link {\r\n  color: #ffffff !important;\r\n  font: Raleway !important;\r\n}\r\n.nav-link:hover {\r\n  color: #4DC4F7 !important;\r\n}\r\n.pt-3 {\r\n  padding-top: 5rem !important;\r\n}\r\n/* .bg-light {\r\n    background-color: #ebebeb !important;\r\n} */\r\n.table {\r\n  background-color: #fff;\r\n}\r\n.table th {\r\n\r\n  font-size: 16px;\r\n  font-family: Raleway !important;\r\n\r\n}\r\n.table td {\r\n  font-family: Raleway !important;\r\n  font-size: 15px !important;\r\n  padding-bottom: 0px;\r\n}\r\n.table tr {\r\n  border-top: 1px solid #a0a0a0;\r\n  border-left: 1px solid #d9d9d9;\r\n  border-right: 1px solid #d9d9d9;\r\n}\r\n/* //////////////////END/////////////////////////// */\r\n/* .table .thead-dark th {\r\n    color: #000000;\r\n    background-color: #ebebeb;\r\n    border-color: #ebebeb;\r\n    font-weight: 100;\r\n} */\r\n.col-md-12 {\r\n  padding: 0px;\r\n}\r\n.form-control {\r\n  border-radius: 0px !important;\r\n}\r\n.form-control-search {\r\n  width: 270px !important;\r\n}\r\n@media screen and (max-width: 590px) {\r\n  .form-control-search {\r\n    width: 100% !important;\r\n  }\r\n}\r\n.avatar {\r\n  max-width: 25px;\r\n  max-height: 25px;\r\n}\r\n.rounded-img-profile {\r\n\r\n  border-radius: 50% !important;\r\n  width: 180px;\r\n  height: 230px;\r\n}\r\n.form-control {\r\n\r\n  padding: 0px !important;\r\n\r\n}\r\n.input-group-text {\r\n  margin-right: 10px !important;\r\n}\r\n.form {\r\n  padding: 5px !important;\r\n  padding-left: 0;\r\n  border-radius: 23px !important;\r\n}\r\n.form-admin-std {\r\n  padding: 5px !important;\r\n  padding-left: 0;\r\n\r\n}\r\n/* CSS FOR ADMIN-SIDEBAR */\r\n.sidenav {\r\n  background: #16baff;\r\n  color: #fff;\r\n  position: fixed;\r\n  left: auto;\r\n  top: 0;\r\n  /* right: 0; */\r\n  bottom: 0;\r\n  max-width: 250px;\r\n  min-width: 250px;\r\n  z-index: 9999;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n\r\n}\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n\r\n  color: #ffffff;\r\n  display: block;\r\n  font-family: Raleway !important;\r\n  font-size: 18px !important;\r\n  line-height: 2;\r\n}\r\n.link:hover{\r\n  color:#FFF;\r\n  background-color: #15b1f2;\r\n  text-decoration: none;\r\n}\r\n.link:active{\r\n  color:#FFF;\r\n  background-color: #15b1f2;\r\n  text-decoration: none;\r\n}\r\n.active {\r\n  color:#FFF !important;\r\n  background-color: #15b1f2 !important;\r\n  text-decoration: none !important;\r\n}\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: -18px;\r\n  right: 16px;\r\n  font-size: 36px !important;\r\n  margin-left: 50px;\r\n  cursor: pointer;\r\n\r\n}\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n.mybutton {\r\n  padding-top: 1px;\r\n  position: static;\r\n  bottom: 0px;\r\n  MARGIN-LEFT: 0px;\r\n  background-color: #000;\r\n  width: 190px;\r\n  margin-top: 390px;\r\n}\r\n.bottom-button {\r\n  background-color: #1087ba;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* padding-right: 32%; */\r\n}\r\n.side-btn{\r\n  width: 90%;\r\n  border-radius: 0;\r\n}\r\n@media screen and (min-height:620px)\r\n{\r\n .bottom-button\r\n {\r\n   background-color: #1087ba;\r\n   position: absolute;\r\n   bottom: 0;\r\n   /* padding-right: 43%; */\r\n }\r\n}\r\n.bottom-button1 {\r\n  background-color: #000;\r\n  margin-top: 300%;\r\n}\r\n/* end of css for admin sidebar */\r\n.sidebar {\r\n  position: fixed;\r\n  top: 59px !important;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  padding: 20px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  border-right: 1px solid #eee;\r\n  background-color: #3D3D3D;\r\n}\r\n/* Sidebar navigation */\r\n.sidebar {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\r\n  color: #fff;\r\n  background-color: #414141 !important;\r\n}\r\n.sidebar .nav {\r\n  margin-bottom: 20px;\r\n}\r\n.sidebar .nav-item {\r\n  width: 100%;\r\n}\r\n.sidebar .nav-item + .nav-item {\r\n  margin-left: 0;\r\n}\r\n.sidebar .nav-link {\r\n  border-radius: 0;\r\n}\r\n.nav_bar_font {\r\n  font-family: Raleway !important;\r\n  font-size: 20px;\r\n}\r\n.font-awesome-clr {\r\n  font-size: 2em;\r\n  color: #4DC4F7 !important;\r\n}\r\n.font-awesome-clr2 {\r\n  font-size: 1.3em;\r\n  color: #ffffff !important;\r\n  padding-right: 5px;\r\n}\r\n.font-awesome-feedbck {\r\n  font-size: 1.5em;\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n.font-awesome-admin {\r\n\r\n  font-size: 1.5em !important;\r\n  color: #fff !important;\r\n\r\n}\r\n.font-awesome-size {\r\n  font-size: 25px;\r\n  color: #4DC4F7 !important;\r\n}\r\n.icon-size {\r\n  font-size: 25px;\r\n  color: gray !important;\r\n}\r\n.user-panel {\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\n  padding: 60px 10px 65px 10px;\r\n}\r\n.row {\r\n\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n.sidebar-userpic {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.sidebar-userpic img {\r\n  margin: 0px auto;\r\n  width: 45%;\r\n  height: 126px;\r\n  padding: 3px;\r\n  border-radius: 50% 50% 50% 50%;\r\n}\r\n.avatar_name {\r\n  background-color: aliceblue;\r\n  padding: 23% 15% 16% 15%;\r\n  border-radius: 50%;\r\n  color: gray;\r\n}\r\n.img-responsive {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.sidebar-userpic-name {\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n#sch_name_sidebar {\r\n  position: absolute;\r\n  display: inline-block;\r\n  bottom: 40px;\r\n  left: 15px;\r\n}\r\n#li_clr {\r\n  /* padding-top: 7px; */\r\n  /* margin-left: 12px; */\r\n  color: white !important;\r\n  font-family: Raleway !important;\r\n  text-transform: capitalize;\r\n\r\n}\r\n#logout_sidebar_button {\r\n\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n}\r\n/* signout button css */\r\n.transparent_btn {\r\n  display: inline-block;\r\n  padding: 3% 23%;\r\n  color: #FFF;\r\n  border: 2px solid #FFF;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  line-height: 120%;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border-radius: 0px;\r\n  transition: background-color 300ms ease;\r\n  cursor: pointer;\r\n  /* margin-left: 10px; */\r\n  margin-bottom: 15px;\r\n}\r\n.transparent_btn:hover {\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  color: #FFF;\r\n}\r\n/* end button css */\r\nhr {\r\n  background-color: #ffffff !important;\r\n}\r\nhr {\r\n  border: 0;\r\n  border-top: 1px solid #d8d8d8 !important;\r\n  margin: 0px 0;\r\n}\r\nhr.beautiful-line {\r\n  border-top: 1px solid #999;\r\n  margin-bottom: 10px;\r\n  width:  90%;\r\n}\r\n.dot_profile_list {\r\n  right: 0px;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dot_profile_list1 {\r\n  right: 0px;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #098cc4;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dot_profile_list_2 {\r\n  right: 0px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #098cc4;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dor-clr-lgblue {\r\n  background-color: #4DC4F7;\r\n}\r\n.dor-clr-green {\r\n  background-color: green;\r\n}\r\n.dor-clr-drkgrn {\r\n  background-color: darkolivegreen;\r\n}\r\n.dor-clr-gold {\r\n  background-color: goldenrod;\r\n}\r\n.dor-clr-choclt {\r\n  background-color: chocolate;\r\n}\r\n.dor-clr-red {\r\n  background-color: orangered;\r\n}\r\n.prf_li_title {\r\n  font-size: 15px;\r\n  font-family: Raleway !important;\r\n}\r\n.pf-li-h1-title {\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n}\r\nselect:invalid { \r\n  padding-left: 0px;\r\n  color: #8fd3f1;\r\n   font-family: Raleway;\r\n  font-size: 1.1em; }\r\nselect {\r\n    \r\n    padding: 4px !important;\r\n}\r\n.change::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n.change:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n.change::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n.change:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n.msg-plc-size::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.modal_title_font {\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n  font-size: bold;\r\n}\r\n.modal-btn-clr {\r\n  color: #16baff;\r\n}\r\n.form-control-textarea {\r\n  padding: 0px !important;\r\n  border-radius: 7px !important;\r\n}\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #16baff;\r\n  border-color: #16baff;\r\n}\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-primary:disabled,\r\n.btn-primary[disabled] {\r\n  border-color: 2px #c9cdd1;\r\n  background-color: #fff;\r\n  color: #4DC4F7;\r\n}\r\n.btn-block-padiing {\r\n  padding-top: 10px !important;\r\n  padding-bottom: 10px !important;\r\n}\r\n.col-pading {\r\n  padding-top: 100px !important;\r\n}\r\n.col-pading-conver {\r\n  /* padding-top: 60px !important; */\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\ni#right {\r\n  float: right !important;\r\n}\r\na#clr {\r\n  color: #2c75ff;\r\n  font-family: Raleway !important;\r\n  font-size: larger !important;\r\n  float: right !important;\r\n}\r\n.line {\r\n  border-bottom: 3px solid rgb(46, 15, 15);\r\n  padding-bottom: 30px !important;\r\n}\r\n.line2 {\r\n  border-bottom: 1px solid #d8d8d8 !important;\r\n}\r\n.line-session {\r\n  border-bottom: 1px solid #e9ecef;\r\n\r\n}\r\n.line-session2 {\r\n  border-bottom: 3px solid #d4d4d4;\r\n  padding-bottom: 30px !important;\r\n}\r\ninput[type=\"radio\"] { /* IE 9 */\r\n  -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */\r\n  transform: scale(1.5);\r\n}\r\nlabel {\r\n  color: blue;\r\n  cursor: pointer;\r\n  text-align: center !important;\r\n\r\n  padding-left: 10px;\r\n}\r\nlabel:hover {\r\n  text-decoration: underline;\r\n}\r\n#file_input_id {\r\n  display: none !important;\r\n}\r\nimg#prf-list-size {\r\n  width: 35px;\r\n  height: 35px;\r\n  margin-right: 5px;\r\n}\r\nimg#ana-img-size{\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-right: 10px;\r\n  margin-left: 6px;\r\n\r\n}\r\nimg#res-img-size{\r\n  width: 40px;\r\n  height: 40px;\r\n  \r\n}\r\n/* ========================= CRISIS SUPPORT CSS =========================== */\r\n#new-board-btn {\r\n  margin-right: 10px !important;\r\n}\r\n.btn-margin{\r\nmargin-left:10px;\r\n}\r\n.btn-margin1{\r\n  margin-left:2px;\r\n  }\r\n@media only screen and (max-width:866px){\r\n  .btn-margin{\r\n    margin-left:2px !important;\r\n    }\r\n}\r\n/* ---------------------LOCAL RESOURCES CSS------------------------------------- */\r\n.btn-color {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0px 20px;\r\n  margin: 6px 6px;\r\n  text-align: left;\r\n}\r\n.btn-color1 {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0px 12px;\r\n  margin: 6px 6px;\r\n  text-align: left;\r\n}\r\n.text {\r\n  padding: 0px 20px;\r\n  text-align: left;\r\n  justify-content: center;\r\n}\r\nh6.space {\r\n  word-spacing: 125px !important;\r\n}\r\nh4.space {\r\n  word-spacing: 125px !important;\r\n}\r\ntextarea.cls {\r\n  width: 95% !important;\r\n}\r\n.btn-sm {\r\n  padding: 0.25rem 1.5rem !important;\r\n}\r\np#margin {\r\n  margin: 0px 80px 0px 45px !important;\r\n}\r\np#margin1 {\r\n  margin: 0px 80px 0px 0px !important;\r\n}\r\n/* ////////////////ADMIN REPORTED COMPONENT/////////////////// */\r\n.admin-border {\r\n  width: 350px;\r\n  height: 390px;\r\n  padding: 10px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: 8px solid #dee2e6;\r\n  border-bottom: 50px solid #dee2e6;\r\n  position: relative;\r\n}\r\n.admin-border1 {\r\n  width: 350px;\r\n  height: 390px;\r\n  padding: 10px;\r\n  border: 8px solid #dee2e6;\r\n  background-color: #fff;\r\n  margin: 0;\r\n  border-bottom: 50px solid #dee2e6;\r\n  position: relative;\r\n}\r\n.modal-body {\r\n  position: relative;\r\n  flex: 1 1 auto;\r\n}\r\n.cross {\r\n  position: absolute;\r\n  top: -22px;\r\n  right: -12px;\r\n  background-color: #16baff;\r\n  padding: 8px 19px 9px 16px;\r\n  border: 2px solid #16baff;\r\n  border-radius: 50%;\r\n  color: white;\r\n\r\n}\r\n.pos {\r\n  position: absolute;\r\n  bottom: -13%;\r\n  right: 38%;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n  .admin-border {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 8px solid #dee2e6;\r\n    margin: 0;\r\n    border-bottom: 50px solid #dee2e6;\r\n    position: relative;\r\n    margin-top: 10px !important;\r\n  }\r\n\r\n  .admin-border1 {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 8px solid #dee2e6;\r\n    margin: 0;\r\n    border-bottom: 50px solid #dee2e6;\r\n    position: relative;\r\n    margin-top: 10px !important;\r\n\r\n  }\r\n\r\n}\r\n.btn-color-border {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0px 25px 2px;\r\n  margin: 6px 6px;\r\n  text-align: left;\r\n}\r\np#margin-border {\r\n  margin-bottom: 0.5rem !important;\r\n  font-size: 17px;\r\n}\r\n/* ///////CSS EDIT DELETE BUTTON////////// */\r\n.btn-xs {\r\n  padding: 1px 5px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n\r\n}\r\n.btn-danger {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n\r\n}\r\n.btn-space {\r\n  margin-right: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n.btn-modal {\r\n  margin-left: 10px;\r\n}\r\n/* Let's get this party started */\r\n::-webkit-scrollbar {\r\n  width: 5px !important;\r\n  height: 5px !important;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px #c0c0c0;\r\n  border-radius: 5px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n  background: #c0c0c0;\r\n  -webkit-box-shadow: inset 0 0 6px #c0c0c0;\r\n}\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n  background: #c0c0c0;\r\n}\r\n/*=============================\r\nAdmin Panel:\r\nStudent,                3 Screens\r\nResponder,              3 Screens\r\nCrisis-Support,         3 Screens\r\nLocal-Resources CSS     3 Screens\r\nTotal 12 Screens.\r\n======================== */\r\n.center-block {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.import-content {\r\n  margin-top: 10%;\r\n}\r\n#upload-btn {\r\n  font-size: 1vw;\r\n  width: 30%;\r\n  margin-top: 0 !important;\r\n  /* height: 9%;  */\r\n  border-radius: 0px;\r\n  text-decoration: none;\r\n}\r\n#upload-btn-respndr {\r\n  font-size: 1vw;\r\n  width: 35%;\r\n  /* height: 9%;  */\r\n  border-radius: 0px;\r\n  text-decoration: none;\r\n}\r\n/*=============================END Student,Responder,Crisis-Support,Local-Resource CSS======================== */\r\n/* ///////////toogle menu  CSS/////////////// */\r\n.hamburger {\r\n  display: block;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 67px;\r\n  height: 96px;\r\n  font-size: 0;\r\n  text-indent: -9999px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: none;\r\n  border: 0;\r\n}\r\n.hamburger span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 34px;\r\n  left: 11px;\r\n  right: 28px;\r\n  height: 3px;\r\n  background: #bbbec1;\r\n}\r\n.hamburger span::before,\r\n.hamburger span::after {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #bbbec1;\r\n  /* background-color: #1a2580; */\r\n  content: \"\";\r\n}\r\n.hamburger span::before {\r\n  top: -8px;\r\n}\r\n.hamburger span::after {\r\n  bottom: -8px;\r\n}\r\n/* /////////////END TOGGLE MENU CSS/////////////// */\r\n/* ///////////toogle menu  CSS FOR INNER SIDEBAR /////////////// */\r\n.hamburger-inner {\r\n  display: block;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  top: -3px;\r\n  left: 10px;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 67px;\r\n  height: 96px;\r\n  font-size: 0;\r\n  text-indent: -9999px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: none;\r\n  border: 0;\r\n}\r\n.hamburger-inner span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 34px;\r\n  left: 11px;\r\n  right: 28px;\r\n  height: 3px;\r\n  background: #bbbec1;\r\n}\r\n.hamburger-inner span::before,\r\n.hamburger-inner span::after {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #bbbec1;\r\n  /* background-color: #1a2580; */\r\n  content: \"\";\r\n}\r\n.hamburger-inner span::before {\r\n  top: -8px;\r\n}\r\n.hamburger-inner span::after {\r\n  bottom: -8px;\r\n}\r\n/* /////////////END TOGGLE MENU CSS/////////////// */\r\nul {\r\n  font-size: 18px;\r\n  line-height: 3;\r\n  font-weight: 400;\r\n  padding-top: 50px;\r\n  list-style: none;\r\n}\r\n.spaces {\r\n  padding-left: 2%;\r\n  padding-right: 2%;\r\n}\r\n.alert {\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n}\r\n.ng-select .ng-control .ng-value-container .ng-placeholder {\r\n  color: #8fdeff;\r\n  /* padding-left: 0px; */\r\n  padding-right: -1px;\r\n  margin-left: -10px;\r\n}\r\n.ng-select.custom .ng-control .ng-value-container .ng-placeholder {\r\n  color: #000;\r\n}"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin-panel works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! ./admin-panel.component.html */ "./src/app/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/admin-panel.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.module.ts ***!
  \***************************************************/
/*! exports provided: AdminPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelModule", function() { return AdminPanelModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var kng24_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kng24-select */ "./node_modules/kng24-select/bundles/ng-select.umd.js");
/* harmony import */ var kng24_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kng24_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _admin_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _my_student_my_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-student/my-student.component */ "./src/app/admin-panel/my-student/my-student.component.ts");
/* harmony import */ var _my_responder_my_responder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./my-responder/my-responder.component */ "./src/app/admin-panel/my-responder/my-responder.component.ts");
/* harmony import */ var _admin_local_resources_admin_local_resources_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-local-resources/admin-local-resources.component */ "./src/app/admin-panel/admin-local-resources/admin-local-resources.component.ts");
/* harmony import */ var _admin_crisis_support_admin_crisis_support_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-crisis-support/admin-crisis-support.component */ "./src/app/admin-panel/admin-crisis-support/admin-crisis-support.component.ts");
/* harmony import */ var _reported_messages_reported_messages_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reported-messages/reported-messages.component */ "./src/app/admin-panel/reported-messages/reported-messages.component.ts");
/* harmony import */ var _referral_request_referral_request_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./referral-request/referral-request.component */ "./src/app/admin-panel/referral-request/referral-request.component.ts");
/* harmony import */ var _super_user_super_user_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./super-user/super-user.component */ "./src/app/admin-panel/super-user/super-user.component.ts");
/* harmony import */ var _super_nav_bar_super_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./super-nav-bar/super-nav-bar.component */ "./src/app/admin-panel/super-nav-bar/super-nav-bar.component.ts");
/* harmony import */ var _admin_panel_sidebar_admin_panel_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-panel-sidebar/admin-panel-sidebar.component */ "./src/app/admin-panel/admin-panel-sidebar/admin-panel-sidebar.component.ts");
/* harmony import */ var _import_student_import_student_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./import-student/import-student.component */ "./src/app/admin-panel/import-student/import-student.component.ts");
/* harmony import */ var _import_responder_import_responder_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./import-responder/import-responder.component */ "./src/app/admin-panel/import-responder/import-responder.component.ts");
/* harmony import */ var _import_local_resources_import_local_resources_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./import-local-resources/import-local-resources.component */ "./src/app/admin-panel/import-local-resources/import-local-resources.component.ts");
/* harmony import */ var _import_crisis_support_import_crisis_support_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./import-crisis-support/import-crisis-support.component */ "./src/app/admin-panel/import-crisis-support/import-crisis-support.component.ts");
/* harmony import */ var _download_import_student_download_import_student_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./download-import-student/download-import-student.component */ "./src/app/admin-panel/download-import-student/download-import-student.component.ts");
/* harmony import */ var _upload_import_student_upload_import_student_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./upload-import-student/upload-import-student.component */ "./src/app/admin-panel/upload-import-student/upload-import-student.component.ts");
/* harmony import */ var _upload_responders_upload_responders_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./upload-responders/upload-responders.component */ "./src/app/admin-panel/upload-responders/upload-responders.component.ts");
/* harmony import */ var _upload_import_responder_upload_import_responder_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./upload-import-responder/upload-import-responder.component */ "./src/app/admin-panel/upload-import-responder/upload-import-responder.component.ts");
/* harmony import */ var _download_local_resources_download_local_resources_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./download-local-resources/download-local-resources.component */ "./src/app/admin-panel/download-local-resources/download-local-resources.component.ts");
/* harmony import */ var _upload_local_resources_upload_local_resources_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./upload-local-resources/upload-local-resources.component */ "./src/app/admin-panel/upload-local-resources/upload-local-resources.component.ts");
/* harmony import */ var _download_crisis_support_download_crisis_support_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./download-crisis-support/download-crisis-support.component */ "./src/app/admin-panel/download-crisis-support/download-crisis-support.component.ts");
/* harmony import */ var _upload_crisis_support_upload_crisis_support_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./upload-crisis-support/upload-crisis-support.component */ "./src/app/admin-panel/upload-crisis-support/upload-crisis-support.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./email/email.component */ "./src/app/admin-panel/email/email.component.ts");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/admin-panel/analytics/analytics.component.ts");
/* harmony import */ var _admin_update_profile_admin_update_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin-update-profile/admin-update-profile.component */ "./src/app/admin-panel/admin-update-profile/admin-update-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AdminPanelModule = /** @class */ (function () {
    function AdminPanelModule() {
    }
    AdminPanelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_panel_component__WEBPACK_IMPORTED_MODULE_7__["AdminPanelComponent"],
                _my_student_my_student_component__WEBPACK_IMPORTED_MODULE_12__["MyStudentComponent"],
                _my_responder_my_responder_component__WEBPACK_IMPORTED_MODULE_13__["MyResponderComponent"],
                _admin_local_resources_admin_local_resources_component__WEBPACK_IMPORTED_MODULE_14__["AdminLocalResourcesComponent"],
                _admin_crisis_support_admin_crisis_support_component__WEBPACK_IMPORTED_MODULE_15__["AdminCrisisSupportComponent"],
                _reported_messages_reported_messages_component__WEBPACK_IMPORTED_MODULE_16__["ReportedMessagesComponent"],
                _referral_request_referral_request_component__WEBPACK_IMPORTED_MODULE_17__["ReferralRequestComponent"],
                _super_user_super_user_component__WEBPACK_IMPORTED_MODULE_18__["SuperUserComponent"],
                _super_nav_bar_super_nav_bar_component__WEBPACK_IMPORTED_MODULE_19__["SuperNavBarComponent"],
                _admin_panel_sidebar_admin_panel_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["AdminPanelSidebarComponent"],
                _import_student_import_student_component__WEBPACK_IMPORTED_MODULE_21__["ImportStudentComponent"],
                _import_responder_import_responder_component__WEBPACK_IMPORTED_MODULE_22__["ImportResponderComponent"],
                _import_local_resources_import_local_resources_component__WEBPACK_IMPORTED_MODULE_23__["ImportLocalResourcesComponent"],
                _import_crisis_support_import_crisis_support_component__WEBPACK_IMPORTED_MODULE_24__["ImportCrisisSupportComponent"],
                _download_import_student_download_import_student_component__WEBPACK_IMPORTED_MODULE_25__["DownloadImportStudentComponent"],
                _upload_import_student_upload_import_student_component__WEBPACK_IMPORTED_MODULE_26__["UploadImportStudentComponent"],
                _upload_responders_upload_responders_component__WEBPACK_IMPORTED_MODULE_27__["UploadRespondersComponent"],
                _upload_import_responder_upload_import_responder_component__WEBPACK_IMPORTED_MODULE_28__["UploadImportResponderComponent"],
                _download_local_resources_download_local_resources_component__WEBPACK_IMPORTED_MODULE_29__["DownloadLocalResourcesComponent"],
                _upload_local_resources_upload_local_resources_component__WEBPACK_IMPORTED_MODULE_30__["UploadLocalResourcesComponent"],
                _download_crisis_support_download_crisis_support_component__WEBPACK_IMPORTED_MODULE_31__["DownloadCrisisSupportComponent"],
                _upload_crisis_support_upload_crisis_support_component__WEBPACK_IMPORTED_MODULE_32__["UploadCrisisSupportComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_33__["EmailComponent"],
                _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_34__["AnalyticsComponent"],
                _admin_update_profile_admin_update_profile_component__WEBPACK_IMPORTED_MODULE_35__["AdminUpdateProfileComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routes"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_2__["UiSwitchModule"],
                kng24_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_11__["ClickOutsideModule"]
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            bootstrap: [_admin_panel_component__WEBPACK_IMPORTED_MODULE_7__["AdminPanelComponent"]]
        })
    ], AdminPanelModule);
    return AdminPanelModule;
}());



/***/ }),

/***/ "./src/app/admin-panel/admin-panel.service.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileService = /** @class */ (function () {
    function ProfileService(_http, _nav) {
        this._http = _http;
        this._nav = _nav;
    }
    ProfileService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var token = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        return headers;
    };
    ProfileService.prototype.getAdminprofile = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/school/adminProfile";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.updatePassword = function (oldpass, newpass, userid) {
        var url = "/wavesbackend/api/change-password?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { oldPassword: oldpass, newPassword: newpass, userId: userid });
    };
    ProfileService.prototype.getimage = function (userid) {
        var url = "/wavesbackend/api/show-DP?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid });
    };
    ProfileService.prototype.setimage = function (userid, image) {
        var url = "/wavesbackend/api/change-DP?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid, image: image });
    };
    ProfileService.prototype.getResponderProfile = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/student/profile";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getResponder = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/student/studentSchoolResponders";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.createSchool = function (username, schoolName, firstName, lastName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/auth/create-school?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { username: username, schoolName: schoolName, firstName: firstName, lastName: lastName });
    };
    ProfileService.prototype.getSchoollist = function () {
        var url = "/wavesbackend/api/auth/school/list?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.get(url);
    };
    ProfileService.prototype.searchSchool = function (schoolName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/school/search/" + schoolName;
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.updateSchoollist = function (schoolname, schoolAdminfirstName, schoolAdminlastName, schoolid) {
        var url = "/wavesbackend/api/auth/school/edit?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, {
            schoolName: schoolname, firstName: schoolAdminfirstName,
            lastName: schoolAdminlastName, schoolId: schoolid
        });
    };
    ProfileService.prototype.deleteSchoollist = function (schoolId) {
        var url = "/wavesbackend/api/auth/school/delete?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolId: schoolId });
    };
    ProfileService.prototype.getResponderAdmin = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/responder/schoolRespopnders";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getMyStudentSchoollist = function () {
        var url = "/wavesbackend/api/getStudents?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfileId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('spid') });
    };
    ProfileService.prototype.getStudentImportFile = function (fileObj) {
        var url = "/wavesbackend/api/import/student?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { jsonData: fileObj });
    };
    ProfileService.prototype.getResponderImportFile = function (fileObj) {
        var url = "/wavesbackend/api/import/responder?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { jsonData: fileObj });
    };
    ProfileService.prototype.getCrisisImportFile = function (fileObj) {
        var url = "/wavesbackend/api/import/crisis-resource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { jsonData: fileObj });
    };
    ProfileService.prototype.importLocalResources = function (fileObj) {
        var url = "/wavesbackend/api/import/local-resource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { jsonData: fileObj });
    };
    ProfileService.prototype.getMyRespondertSchoollist = function (schoolid) {
        var url = "/wavesbackend/api/getResponder?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfilesId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('spid') });
    };
    ProfileService.prototype.getResponderCouncler = function (schoolid) {
        var url = "/wavesbackend/api/get-responder-only-counselor?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfilesId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('spid') });
    };
    ProfileService.prototype.addStudent = function (firstname, lastname, gradelevel, email, designatedres, studentid, schoolid) {
        var url = "/wavesbackend/api/addStudents?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { firstName: firstname, lastName: lastname, gradeLevel: gradelevel,
            username: email, designatedResponder: designatedres, studentId: studentid, schoolAdminProfileId: schoolid
        });
    };
    ProfileService.prototype.addResponder = function (firstname, lastname, title, position, responderid, email) {
        var url = "/wavesbackend/api/auth/responder/add-responder?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { firstName: firstname, lastName: lastname, title: title, position: position,
            responderId: responderid, username: email
        });
    };
    ProfileService.prototype.addCrisis = function (nameCrs, phoneNumCr, serviceTypeCr, websiteCr, schoolid) {
        var url = "/wavesbackend/api/addCrisisResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { name: nameCrs, phoneNumber: phoneNumCr, serviceTypeId: serviceTypeCr,
            website: websiteCr, schoolAdminProfileId: schoolid });
    };
    ProfileService.prototype.addLocalResources = function (name1, city1, state1, zipCode1, phoneNumber1, streetAddress1, serviceTypeId1, insuranceType1, website1, schoolid) {
        var url = "/wavesbackend/api/addLocalResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { name: name1, city: city1, state: state1, zipCode: zipCode1, phoneNumber: phoneNumber1,
            streetAddress: streetAddress1, serviceTypeId: serviceTypeId1, insuranceType: insuranceType1, website: website1,
            schoolAdminProfileId: schoolid });
    };
    ProfileService.prototype.updateResponder = function (firstname, lastname, title, position, email, responderid, id) {
        var url = "/wavesbackend/api/auth/responder/edit-responder?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { firstName: firstname, lastName: lastname, title: title, position: position,
            responderId: responderid, username: email, userId: id });
    };
    ProfileService.prototype.deleteResponder = function (responderId) {
        ;
        var url = "/wavesbackend/api/auth/responder/delete-responder?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: responderId });
    };
    ProfileService.prototype.deleteStudent = function (id) {
        var url = "/wavesbackend/api/delStudents?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: id });
    };
    ProfileService.prototype.getUpcommingSession = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/responder/upComingSessions";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getPreviousSession = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/responder/previousSessions";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getlocalResources = function (schoolId) {
        var url = "/wavesbackend/api/getLocalResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfileId: schoolId });
    };
    ProfileService.prototype.updateStudent = function (firstname, lastname, gradelevel, designatedres, userid) {
        var url = "/wavesbackend/api/editStudents?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { firstName: firstname, lastName: lastname, gradeLevel: gradelevel,
            designatedResponder: designatedres, userId: userid });
    };
    ProfileService.prototype.getMyCrisisResources = function (schoolid) {
        var url = "/wavesbackend/api/getCrisisResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfileId: schoolid });
    };
    ProfileService.prototype.updateLocal = function (name2, city2, state2, zipCode2, phoneNumber2, streetAddress2, serviceTypeId2, insuranceType2, website2, localResId) {
        var url = "/wavesbackend/api/editLocalResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { name: name2, city: city2, state: state2, zipCode: zipCode2, phoneNumber: phoneNumber2,
            streetAddress: streetAddress2, serviceTypeId: serviceTypeId2, insuranceType: insuranceType2, website: website2,
            id: localResId });
    };
    ProfileService.prototype.updateCrisis = function (crisName, Phone, serviceType, websiteCr, crisisId) {
        var url = "/wavesbackend/api/editCrisisResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { name: crisName, phoneNumber: Phone, serviceTypeId: serviceType, website: websiteCr,
            id: crisisId });
    };
    ProfileService.prototype.deleteCrisisResources = function (crisisId) {
        var url = "/wavesbackend/api/delCrisisResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { id: crisisId });
    };
    ProfileService.prototype.deleteLocalResources = function (localResId) {
        var url = "/wavesbackend/api/delLocalResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { id: localResId });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/admin-panel/admin-update-profile/admin-update-profile.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-update-profile/admin-update-profile.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\n<ng4-loading-spinner></ng4-loading-spinner>\n<div class=\"col-lg-12 ml-5 pr-5\">\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\n      <h2 class=\"pf-li-h1-title \">\n        <b>Update Profile</b>\n      </h2>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\n        <ul class=\"navbar-nav mr-auto\">\n        </ul>\n        \n        <h6 id=\"header\">{{adminName}}\n        </h6>\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\n        <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\n      </div>\n    </nav>\n  </div>\n  <hr>\n  <br>\n\n  <div class=\"container\">\n      <div class=\"row\">\n          <div *ngIf=\"passwordSuccess\"class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n            <strong>Password Successfully Updated!</strong>\n          </div>\n\n          <div  *ngIf=\"passwordError\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n            <strong>Mismatch!</strong> Please enter a valid old password.\n          </div>\n      </div>\n  </div> \n\n<div class=\"container\">\n    <div class=\"row pt-5\">\n      <div class=\"col-md-12\">\n        <section class=\"row text-center placeholders\">\n          <div class=\"col-md-8 placeholder col-pading-conver\">\n           \n            <img *ngIf=\"imageToShow;else other_image\" [src]=\"imageToShow\"  width=\"200\" height=\"200\"\n                 class=\"img-fluid rounded-img-profile\" alt=\"Generic placeholder thumbnail\">\n\n            <ng-template #other_image>\n\n              <img src=\"/waves/assets/images/dumy.png\" width=\"200\" height=\"200\" class=\"img-fluid rounded-img-profile\"\n                   alt=\"Generic placeholder thumbnail\">\n\n            </ng-template>\n  \n            <div class=\"user-panel\">\n              <div class=\"row\">\n                <div class=\"col-lg-4\"></div>\n                <div class=\"col-lg-4\">\n                  <label for=\"file_input_id\" >Update Profile</label>\n                  <input [(ngModel)]=\"file\" type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\"\n                         style=\"display: none\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n                  application/png, .png, .jpg , .jpeg\">\n                </div>\n              </div>\n            </div>\n  \n            <h3 class=\"capital-name\">{{firstName}} {{lastName}}\n\n            </h3>\n           \n            <h6 class=\"capital-name\">{{schoolName}}</h6>\n          </div>\n  \n        </section>\n   \n          \n         <section class=\"row text-center placeholders\">\n          <div class=\"col-md-12 placeholder\">\n            <div class=\"user-panel\">\n              <div class=\"row\">\n                <div class=\"sidebar-userpic\">\n                  <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-outline-secondary center-block\">Change Password\n                    <i class=\"fas fa-chevron-right\"></i>\n  \n                  </button>\n  \n  \n                </div>\n              </div>\n            </div>\n  \n  \n          </div>\n  \n  \n        </section>\n      </div>\n    </div>\n  </div>\n  \n  \n  <ng-template #template>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left modal_title_font\">Change Password</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n  \n    <form (submit)=\"onPasswordSubmit(f)\" #f=\"ngForm\">\n      <div class=\"modal-body\">\n  \n        <div class=\"form-group\">\n          <input type=\"password\" class=\"w3-input change\" id=\"oldPassword\" placeholder=\"Old Password\" ngModel required\n                 name=\"oldPassword\" oldPassword\n                 #oldPassword=\"ngModel\">\n         \n  \n        </div>\n  \n        <div class=\"form-group\">\n          <input type=\"password\" class=\"w3-input change\" minlength=\"5\" id=\"newPassword\" placeholder=\"New Password\" ngModel\n                 required name=\"newPassword\"\n                 newPassword #newPassword=\"ngModel\">\n  \n          <span class=\"help-block\" *ngIf=\"newPassword.errors?.minlength && newPassword.touched\">Password must be of minimum 5 characters length</span>\n        </div>\n  \n        <div class=\"form-group\">\n          <input type=\"password\" class=\"w3-input change\" id=\"confirmPassword\" placeholder=\"Confirm Password\"\n                 validateEqual=\"password\" ngModel\n                 required name=\"confirmPassword\" confirmPassword #confirmPassword=\"ngModel\">\n  \n          <span class=\"help-block\" *ngIf=\"newPassword.value != confirmPassword.value && confirmPassword.touched \">Your password and confirmation password do not match</span>\n        </div>\n  \n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close</button>\n        <button type=\"submit\" [class.disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\n                [disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\n                class=\"btn btn-primary modal-btn-clr\" (click)=\"modalRef.hide()\">Save changes\n        </button>\n      </div>\n    </form>\n  </ng-template>"

/***/ }),

/***/ "./src/app/admin-panel/admin-update-profile/admin-update-profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin-panel/admin-update-profile/admin-update-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminUpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUpdateProfileComponent", function() { return AdminUpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminUpdateProfileComponent = /** @class */ (function () {
    function AdminUpdateProfileComponent(modalService, profileServiceObj) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.filesData = {};
        this.adminName = null;
        this.firstName = null;
        this.lastName = null;
        this.schoolName = null;
        this.userid = null;
        this.passwordObj = null;
    }
    AdminUpdateProfileComponent.prototype.loadimage = function () {
        var _this = this;
        this.profileServiceObj.getimage(this.userid).subscribe(function (res) {
            _this.imageToShow = res['data']['result'];
        }, function (err) {
        });
    };
    AdminUpdateProfileComponent.prototype.ngOnInit = function () {
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminId');
        this.firstName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('firstname');
        this.lastName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('lastname');
        this.schoolName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('schoolName');
        this.loadimage();
    };
    AdminUpdateProfileComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    AdminUpdateProfileComponent.prototype.onPasswordSubmit = function (form) {
        var _this = this;
        this.profileServiceObj.updatePassword(form.value.oldPassword, form.value.newPassword, this.userid).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.passwordError = res;
                _this.passwordSuccess = null;
                window.setTimeout(function () {
                    _this.passwordError = null;
                }, 3000);
            }
            else {
                _this.passwordError = null;
                _this.passwordSuccess = res;
                window.setTimeout(function () {
                    _this.passwordSuccess = null;
                }, 3000);
            }
        }, function (err) { });
    };
    AdminUpdateProfileComponent.prototype.handleFileUpload = function (evt) {
        var _this = this;
        var self = this;
        if (evt.target.files && evt.target.files.length > 0) {
            var file = evt.target.files[0]; // FileList object
            if ((file.size / 1024) < 20 * 1024) {
                var name_1 = file.name;
                var type_1 = file.type;
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(file);
                reader_1.onload = function () {
                    var data = reader_1.result;
                    _this.image = data;
                    _this.filesData = {
                        data: data,
                        name: name_1,
                        type: type_1
                    };
                    _this.profileServiceObj.setimage(_this.userid, _this.image).subscribe(function (res) {
                        _this.loadimage();
                    }, function (err) {
                    });
                };
            }
            else {
                alert('File size should be less than 20MB');
            }
        }
    };
    AdminUpdateProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-update-profile',
            template: __webpack_require__(/*! ./admin-update-profile.component.html */ "./src/app/admin-panel/admin-update-profile/admin-update-profile.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], AdminUpdateProfileComponent);
    return AdminUpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/analytics/analytics.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-panel/analytics/analytics.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\n<ng4-loading-spinner> </ng4-loading-spinner>\n\n\n<div class=\"col-lg-12 ml-5 pr-5\">\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\n    <h2 class=\"pf-li-h1-title \">\n      <b>Analytics</b>\n    </h2>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\n      <ul class=\"navbar-nav mr-auto\">\n\n\n      </ul>\n\n     \n      <h6 id=\"header\">{{profileObj['data']['firstName']}} {{profileObj['data']['lastName']}}\n        </h6>\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\n\n    </div>\n  </nav>\n</div>\n<hr>\n<br>\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    \n        \n\n    <div class=\"col-lg-12 col-md-12 import-content\">\n      <img src=\"\\waves\\assets\\images\\webunderconstruction.png\" width=\"30%\" height=\"30%px;\"\n           class=\"center-block img-responsive\">\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b></b></h1>\n     \n  \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-panel/analytics/analytics.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-panel/analytics/analytics.component.ts ***!
  \**************************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        // this.profileServiceObj.getAdminprofile().subscribe(
        //   res => {
        //     this.profileObj = res;
        //     // this.profileServiceObj.downloadImage(this.profileObj['data']['userId']).subscribe(
        //     //   res =>{
        //     //     this.createImageFromBlob(res);
        //     //   },
        //     //   err =>{}
        //     // )
        //   },
        //   err =>{}
        // );
    };
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/admin-panel/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/download-crisis-support/download-crisis-support.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin-panel/download-crisis-support/download-crisis-support.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-admin-panel-sidebar></app-admin-panel-sidebar> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\CrisisSupport_AdminPanel.png\" width=\"15%\" height=\"15%px;\"\r\n           class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD CRISIS SUPPORT RESOURCES</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Import your Crisis Support resources into your Waves\r\n        network</p>\r\n      <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.5% 5% 0.5% 5%;border-radius: 0px;\">\r\n        Download Waves Crisis Resource Spreadsheet\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/download-crisis-support/download-crisis-support.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-panel/download-crisis-support/download-crisis-support.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DownloadCrisisSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCrisisSupportComponent", function() { return DownloadCrisisSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadCrisisSupportComponent = /** @class */ (function () {
    function DownloadCrisisSupportComponent() {
    }
    DownloadCrisisSupportComponent.prototype.ngOnInit = function () {
    };
    DownloadCrisisSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-crisis-support',
            template: __webpack_require__(/*! ./download-crisis-support.component.html */ "./src/app/admin-panel/download-crisis-support/download-crisis-support.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadCrisisSupportComponent);
    return DownloadCrisisSupportComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/download-import-student/download-import-student.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin-panel/download-import-student/download-import-student.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n\r\n    <h2 class=\"pf-li-h1-title \"><b>Download Import Students</b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n      \r\n      <h6 id=\"header\">{{profileObj['data']['firstName']}} {{profileObj['data']['lastName']}}\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\Students_AdminPanel.png\" width=\"20%\" height=\"20%px;\" class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD STUDENTS</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please download the Waves Student Spreadsheet and provide\r\n        your student information</p>\r\n      <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">\r\n          DOWNLOAD WAVES STUDENT SPREADSHEET\r\n        \r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/download-import-student/download-import-student.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-panel/download-import-student/download-import-student.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DownloadImportStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadImportStudentComponent", function() { return DownloadImportStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DownloadImportStudentComponent = /** @class */ (function () {
    function DownloadImportStudentComponent(ProfileServiceObj) {
        this.ProfileServiceObj = ProfileServiceObj;
    }
    DownloadImportStudentComponent.prototype.ngOnInit = function () {
        // this.ProfileServiceObj.getAdminprofile().subscribe(
        //   res => {
        //     this.profileObj = res;
        //     // this.profileServiceObj.downloadImage(this.profileObj['data']['userId']).subscribe(
        //     //   res =>{
        //     //     this.createImageFromBlob(res);
        //     //   },
        //     //   err =>{}
        //     // )
        //   },
        //   err =>{}
        // );
    };
    DownloadImportStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-import-student',
            template: __webpack_require__(/*! ./download-import-student.component.html */ "./src/app/admin-panel/download-import-student/download-import-student.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], DownloadImportStudentComponent);
    return DownloadImportStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/download-local-resources/download-local-resources.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin-panel/download-local-resources/download-local-resources.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-admin-panel-sidebar></app-admin-panel-sidebar> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\LocalResources_AdminPanel.png\" width=\"20%\" height=\"20%px;\"\r\n           class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD LOCAL RESOURCES</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please download the Waves Local Resources Spreadsheet and\r\n        provide your student information</p>\r\n      <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">\r\n        Download Your Local Resources Spreadsheet\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/download-local-resources/download-local-resources.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/admin-panel/download-local-resources/download-local-resources.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DownloadLocalResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadLocalResourcesComponent", function() { return DownloadLocalResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DownloadLocalResourcesComponent = /** @class */ (function () {
    function DownloadLocalResourcesComponent() {
    }
    DownloadLocalResourcesComponent.prototype.ngOnInit = function () {
    };
    DownloadLocalResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-download-local-resources',
            template: __webpack_require__(/*! ./download-local-resources.component.html */ "./src/app/admin-panel/download-local-resources/download-local-resources.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DownloadLocalResourcesComponent);
    return DownloadLocalResourcesComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/email/email.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-panel/email/email.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------------------------- \r\n\t\tGLOBAL \r\n------------------------------------- */\r\n* { \r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\nh1, h2, h3, h4, h5, h6,p {\r\n    font-family: Raleway !important;\r\n    color:#3D3D3D !important;\r\n  }\r\n* { font-family: Raleway !important; }\r\nimg { \r\n\tmax-width: 100%; \r\n}\r\n.collapse {\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\nbody {\r\n\t-webkit-font-smoothing:antialiased; \r\n\t-webkit-text-size-adjust:none; \r\n\twidth: 100%!important; \r\n\theight: 100%;\r\n}\r\n/* ------------------------------------- \r\n\t\tELEMENTS \r\n------------------------------------- */\r\na { color: #2BA6CB;}\r\n.btn {\r\n\ttext-decoration:none;\r\n\tcolor: #FFF !important;\r\n\tbackground-color: #16baff;\r\n\tpadding:2px 25px;\r\n\tfont-weight:bold;\r\n\tmargin-right:10px;\r\n\ttext-align:center;\r\n\tcursor:pointer;\r\n\tdisplay: inline-block;\r\n}\r\np.callout {\r\n\tpadding:15px;\r\n\tbackground-color:#ECF8FF;\r\n\tmargin-bottom: 15px;\r\n}\r\n.callout a {\r\n\tfont-weight:bold;\r\n\tcolor: #2BA6CB;\r\n}\r\ntable.social {\r\n/* \tpadding:15px; */\r\n\tbackground-color: #ebebeb;\r\n\t\r\n}\r\n.social .soc-btn {\r\n\tpadding: 3px 7px;\r\n\tfont-size:12px;\r\n\tmargin-bottom:10px;\r\n\ttext-decoration:none;\r\n\tcolor: #FFF;font-weight:bold;\r\n\tdisplay:block;\r\n\ttext-align:center;\r\n}\r\na.fb { background-color: #3B5998!important; }\r\na.tw { background-color: #1daced!important; }\r\na.gp { background-color: #DB4A39!important; }\r\na.ms { background-color: #000!important; }\r\n.sidebar .soc-btn { \r\n\tdisplay:block;\r\n\twidth:100%;\r\n}\r\n/* ------------------------------------- \r\n\t\tHEADER \r\n------------------------------------- */\r\ntable.head-wrap { width: 100%;}\r\n.header.container table td.logo { padding: 15px; }\r\n.header.container table td.label { padding: 15px; padding-left:0px;}\r\n/* ------------------------------------- \r\n\t\tBODY \r\n------------------------------------- */\r\ntable.body-wrap { width: 100%;}\r\nh3.color{\r\n    color:#3D3D3D !important;\r\n}\r\n.span-font{\r\n\tfont-size: 17px;\r\n    font-weight: 100;\r\n}\r\n/* ------------------------------------- \r\n\t\tFOOTER \r\n------------------------------------- */\r\ntable.footer-wrap { width: 100%;\tclear:both!important;\r\n}\r\n.footer-wrap .container td.content  p { border-top: 1px solid rgb(215,215,215); padding-top:15px;}\r\n.footer-wrap .container td.content p {\r\n\tfont-size:10px;\r\n\tfont-weight: bold;\r\n\t\r\n}\r\n/* ------------------------------------- \r\n\t\tTYPOGRAPHY \r\n------------------------------------- */\r\nh1,h2,h3,h4,h5,h6 {\r\n    font-family: Raleway !important;\r\n    color:#3D3D3D !important;\r\n}\r\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small { font-size: 60%; color: #3D3D3D; line-height: 0; text-transform: none; }\r\nh1 { font-weight:200; font-size: 44px;}\r\nh2 { font-weight:200; font-size: 37px;}\r\nh3 { font-weight:500; font-size: 27px;}\r\nh4 { font-weight:500; font-size: 23px;}\r\nh5 { font-weight:900; font-size: 17px;}\r\nh6 { font-weight:900; font-size: 14px; text-transform: uppercase; color:#3D3D3D;}\r\n.collapse { margin:0!important;}\r\np, ul { \r\n\tmargin-bottom: 10px; \r\n\tfont-weight: normal; \r\n\tfont-size:14px; \r\n\tline-height:1.6;\r\n}\r\np.lead { font-size:17px; }\r\np.last { margin-bottom:0px;}\r\nul li {\r\n\tmargin-left:5px;\r\n\tlist-style-position: inside;\r\n}\r\n/* --------------------------------------------------- \r\n\t\tRESPONSIVENESS\r\n\t\tNuke it from orbit. It's the only way to be sure. \r\n------------------------------------------------------ */\r\n/* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */\r\n.container {\r\n\tdisplay:block!important;\r\n\tmax-width:600px!important;\r\n\tmargin:0 auto!important; /* makes it centered */\r\n\tclear:both!important;\r\n}\r\n/* This should also be a block element, so that it will fill 100% of the .container */\r\n.content {\r\n\tpadding:15px;\r\n\tmax-width:600px;\r\n\tmargin:0 auto;\r\n\tdisplay:block; \r\n}\r\n/* Let's make sure tables in the content area are 100% wide */\r\n.content table { width: 100%; }\r\n/* Odds and ends */\r\n.column {\r\n\twidth: 300px;\r\n\tfloat:left;\r\n}\r\n.column tr td { padding: 15px; }\r\n.column-wrap { \r\n\tpadding:0!important; \r\n\tmargin:0 auto; \r\n\tmax-width:600px!important;\r\n}\r\n.column table { width:100%;}\r\n.social .column {\r\n\twidth: 280px;\r\n\tmin-width: 279px;\r\n\tfloat:left;\r\n}\r\n/* Be sure to place a .clear element after each set of columns, just to be safe */\r\n.clear { display: block; clear: both; }\r\n/* ------------------------------------------- \r\n\t\tPHONE\r\n\t\tFor clients that support media queries.\r\n\t\tNothing fancy. \r\n-------------------------------------------- */\r\n@media only screen and (max-width: 600px) {\r\n\t\r\n\ta[class=\"btn\"] { \r\n        display:block!important; \r\n        margin-bottom:10px!important; \r\n        background-image:none!important; \r\n        margin-right:0!important;\r\n    }\r\n\r\n\tdiv[class=\"column\"] { \r\n        width: auto!important; \r\n        float:none!important;\r\n    }\r\n\t\r\n\ttable.social div[class=\"column\"] {\r\n\t\twidth:auto!important;\r\n\t}\r\n\r\n}"

/***/ }),

/***/ "./src/app/admin-panel/email/email.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-panel/email/email.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body bgcolor=\"#FFFFFF\">\r\n\r\n    <!-- HEADER -->\r\n    <table class=\"head-wrap\" bgcolor=\"#f7f7f7\">\r\n      <tr>\r\n        <td></td>\r\n        <td class=\"header container\">\r\n          \r\n            <div class=\"content\">\r\n              <table bgcolor=\"#f7f7f7\">\r\n              <tr>\r\n                <td><img src=\"\\waves\\assets\\images\\ATW_logo_blue.png\" width=\"35%\" height=\"35%\" /></td>\r\n                \r\n              </tr>\r\n            </table>\r\n            </div>\r\n            \r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table><!-- /HEADER -->\r\n    \r\n    \r\n    <!-- BODY -->\r\n    <table class=\"body-wrap\">\r\n      <tr>\r\n        <td></td>\r\n        <td class=\"container\" bgcolor=\"#FFFFFF\">\r\n    \r\n          <div class=\"content\">\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                \r\n                <h3 class=\"color\"><b>Welcome to Waves!</b></h3>\r\n                <p class=\"lead\">We are excited to have you join our community. Here’s what you need to know.\r\n\r\n                </p>\r\n\r\n                <h5>From:\r\n                  <span class=\"span-font\">The Waves Team</span>\r\n\r\n                </h5>\r\n                <br>\r\n                <hr>\r\n                <br>\r\n      \r\n                <p class=\"lead\">Hello (Admin First Name)!\r\n\r\n                </p>\r\n\r\n                <p class=\"lead\">You’ve been added as a Student to your school’s Waves Network and have been given access \r\n                  to the Waves App. Having access to the Waves App provides students with the help they need, \r\n                  when they need it, and helps shorten the distance between students and the office of student services.\r\n                </p>\r\n\r\n                <p class=\"lead\">By clicking below, you will be directed to your school’s Waves Dashboard. \r\n                  Here, you can import your students and responders, customize the local and crisis support \r\n                  resources you want available to your students, analyze referral requests and conversation logs, \r\n                  receive access to analytics and data tracking tools, and more. </p>\r\n                  \r\n                \r\n\r\n                  <p class=\"lead\">If you’re feeling ready, click below and jump in. We’re glad you’re here. </p>\r\n\r\n                  <p class=\"lead\"><b>Stay Awesome, </b></p>\r\n                  <p class=\"lead\">The Waves Team</p>\r\n\r\n\r\n                <a class=\"btn\">Setup Network</a>\r\n            \r\n              </td>\r\n            </tr>\r\n          </table>\r\n          </div>\r\n                      \r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table><!-- /BODY -->\r\n    \r\n   \r\n    \r\n    <table class=\"head-wrap\" bgcolor=\"#f7f7f7\">\r\n        <tr>\r\n          <td></td>\r\n          <td class=\"header container\">\r\n            \r\n              <div class=\"content\">\r\n                <table bgcolor=\"#f7f7f7\">\r\n                <tr>\r\n                  <td align=\"center\"><img src=\"\\waves\\assets\\images\\ATW_logo_blue.png\" width=\"35%\" height=\"35%\" /></td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                    <td align=\"center\">\r\n                      <p>\r\n                          © 2018 Above the Waves, Inc.\r\n                      </p>\r\n                    </td>\r\n                  </tr>\r\n              </table>\r\n              </div>\r\n              \r\n          </td>\r\n          <td></td>\r\n        </tr>\r\n      </table><!-- /HEADER -->\r\n\r\n    </body>\r\n\r\n\r\n<!-- <div class=\"container\">\r\n<body style=\"margin: auto; padding: 0;\">\r\n  <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\r\n    <tr>\r\n        <td align=\"center\" bgcolor=\"#70bbd9\" style=\"padding: 40px 0 30px 0;\">\r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" alt=\"Creating Email Magic\" width=\"300\" height=\"230\" style=\"display: block;\" />\r\n           </td>\r\n          </tr>\r\n     \r\n          <td bgcolor=\"#ffffff\" style=\"padding: 40px 30px 40px 30px;\">\r\n              <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n               <tr>\r\n                <td>\r\n                 Row 1\r\n                </td>\r\n               </tr>\r\n               <tr>\r\n                <td>\r\n                 Row 2\r\n                </td>\r\n               </tr>\r\n               <tr>\r\n                <td>\r\n                 Row 3\r\n                </td>\r\n               </tr>\r\n              </table>\r\n             </td>\r\n    <tr>\r\n     <td bgcolor=\"#ee4c50\">\r\n      Row 3\r\n     </td>\r\n    </tr>\r\n   </table>\r\n </body>\r\n</div> \r\n \r\n \r\n <table class=\"social\" width=\"100%\">\r\n    <tr>\r\n      <td>\r\n        \r\n        \r\n        <table align=\"left\" class=\"column\">\r\n          <tr>\r\n            <td>\t\t\t\t\r\n              \r\n              <h5 class=\"\">Connect with Us:</h5>\r\n              <p class=\"\"><a href=\"#\" class=\"soc-btn fb\">Facebook</a> <a href=\"#\" class=\"soc-btn tw\">Twitter</a> <a href=\"#\" class=\"soc-btn gp\">Google+</a></p>\r\n  \r\n              \r\n            </td>\r\n          </tr>\r\n        </table>\r\n        \r\n    \r\n        <table align=\"left\" class=\"column\">\r\n          <tr>\r\n            <td>\t\t\t\t\r\n                            \r\n              <h5 class=\"\">Contact Info:</h5>\t\t\t\t\t\t\t\t\t\t\t\t\r\n              <p>Phone: <strong>408.341.0600</strong><br/>\r\n      Email: <strong><a href=\"emailto:ABC@example.com\">ABC@example.com</a></strong></p>\r\n      \r\n            </td>\r\n          </tr>\r\n        </table>\r\n        \r\n        <span class=\"clear\"></span>\t\r\n        \r\n      </td>\r\n    </tr>\r\n  </table>  end social & contact \r\n\r\n <table class=\"footer-wrap\">\r\n    <tr>\r\n      <td></td>\r\n      <td class=\"container\">\r\n        \r\n        \r\n          <div class=\"content\">\r\n          <table>\r\n          <tr>\r\n            <td align=\"center\">\r\n              <p>\r\n                <a href=\"#\">Terms</a> |\r\n                <a href=\"#\">Privacy</a> |\r\n                <a href=\"#\">Unsubscribe></a>\r\n              </p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n          </div>\r\n          \r\n      </td>\r\n      <td></td>\r\n    </tr>\r\n  </table>-->"

/***/ }),

/***/ "./src/app/admin-panel/email/email.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/email/email.component.ts ***!
  \******************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/admin-panel/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/admin-panel/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/import-crisis-support/import-crisis-support.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-panel/import-crisis-support/import-crisis-support.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Import Crisis Support Resources</b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n     \r\n      <h6 id=\"header\">{{adminName}}\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n  \r\n        <div *ngIf=\"uploadingComplete\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Congratulation!</strong> All Crisis Support Successfully Uploaded.\r\n          </div>\r\n             \r\n          <div *ngIf=\"logerror\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"loadpage()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <a [href]=\"errorlogfile\" class=\"btn btn-xs btn-primary pull-right\" target=\"_blank\">\r\n                  <i class=\"fa fa-download\" aria-hidden=\"true\"></i> \r\n                  logfile.xlsx</a>\r\n              \r\n              <strong>OOPS!</strong> Please Check Log File, Some Crisis Support Have Wrong Info.\r\n          </div>\r\n  \r\n          <div *ngIf=\"filerror\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>Error!</strong> Please Check Your File Something Went Wrong!!! \r\n            </div>\r\n        \r\n        \r\n    </div>\r\n  </div>\r\n  \r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\CrisisSupport_AdminPanel.png\" width=\"15%\" height=\"15%px;\"\r\n           class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD CRISIS SUPPORT RESOURCES</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Crisis Resource Spreadsheet as a CSV\r\n        file by clicking below</p>\r\n    <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\">UPLOAD CRISIS SUPPORT RESOURCES</label>\r\n    <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <!-- <br><br> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div *ngIf=\"load\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Uploaded!</strong>  {{savedrecord}} of {{totalrecord}}  \r\n        </div>\r\n        \r\n  </div>\r\n</div> "

/***/ }),

/***/ "./src/app/admin-panel/import-crisis-support/import-crisis-support.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-panel/import-crisis-support/import-crisis-support.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImportCrisisSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportCrisisSupportComponent", function() { return ImportCrisisSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportCrisisSupportComponent = /** @class */ (function () {
    function ImportCrisisSupportComponent(profileServiceObj, spinnerService, router) {
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.router = router;
        this.uploadingComplete = false;
        this.totalResoutces = 0;
        this.uploadedResources = 1;
        this.sendObj = new Array();
        this.errorlogfile = null;
        this.adminName = null;
        this.schoolId = null;
        this.filerror = null;
        this.filesuccess = null;
        this.logerror = null;
        this.success = null;
        this.totalrecord = null;
        this.savedrecord = null;
        this.load = null;
    }
    ImportCrisisSupportComponent.prototype.ngOnInit = function () {
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
    };
    ImportCrisisSupportComponent.prototype.loadpage = function () {
        window.location.reload(true);
    };
    ImportCrisisSupportComponent.prototype.handleFileUpload = function (e) {
        if (e.target.files && e.target.files.length > 0) {
            var file = e.target.files[0];
            e.target.parentElement.children[1].value = file.name;
            this.parseFileData(file, e);
        }
    };
    ImportCrisisSupportComponent.prototype.parseFileData = function (file, e) {
        var _this = this;
        console.log("uploadFile");
        this.spinnerService.show();
        var csvFileData = [];
        var csvFileRecord = [];
        var csvDataObj = {};
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            var fileData = reader.result;
            var fileDataRows = fileData.split('\n');
            var headerArr = fileDataRows[0].split(',');
            var headerArr2 = headerArr.map(function (e) { return e.toLowerCase(); });
            _this.totalResoutces = fileDataRows.length - 1;
            for (var index = 1; index < fileDataRows.length; index++) {
                var rawRecordData = fileDataRows[index];
                var newArr = rawRecordData.split(',');
                _this.sendObj[index - 1] = {
                    name: newArr[headerArr2.indexOf('resourcename')],
                    phoneNumber: newArr[headerArr2.indexOf('phone')],
                    serviceTypeId: newArr[headerArr2.indexOf('servicetypeid')],
                    website: newArr[headerArr2.indexOf('website')],
                    schoolAdminProfileId: _this.schoolId
                };
                _this.uploadedResources += 1;
            }
            _this.profileServiceObj.getCrisisImportFile(JSON.stringify(_this.sendObj)).subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.spinnerService.hide();
                    _this.filerror = res;
                    _this.filesuccess = null;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.filerror = null;
                        _this.load = false;
                    }, 5000);
                }
                else if (temp == 500) {
                    _this.errorlogfile = res['data'].errorFile;
                    _this.spinnerService.hide();
                    _this.logerror = res;
                    _this.success = null;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.load = false;
                    }, 5000);
                }
                else {
                    _this.spinnerService.hide();
                    _this.uploadingComplete = true;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.uploadingComplete = false;
                        _this.load = false;
                        _this.router.navigate(['/admin-crisis-support']);
                    }, 3000);
                }
            }, function (err) {
            });
        };
    };
    ImportCrisisSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-crisis-support',
            template: __webpack_require__(/*! ./import-crisis-support.component.html */ "./src/app/admin-panel/import-crisis-support/import-crisis-support.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ImportCrisisSupportComponent);
    return ImportCrisisSupportComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/import-local-resources/import-local-resources.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-panel/import-local-resources/import-local-resources.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Import Local Resources</b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n     \r\n      <h6 id=\"header\">{{adminName}}\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n  \r\n        <div *ngIf=\"uploadingComplete\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Congratulation!</strong> All Local Resources Successfully Uploaded.\r\n          </div>\r\n             \r\n          <div *ngIf=\"logerror\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"loadpage()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                <a [href]=\"errorlogfile\" class=\"btn btn-xs btn-primary pull-right\" target=\"_blank\">\r\n                  <i class=\"fa fa-download\" aria-hidden=\"true\"></i> \r\n                  logfile.xlsx</a>\r\n              \r\n              <strong>OOPS!</strong> Please Check Log File, Some Local Resources Have Wrong Info.\r\n          </div>\r\n\r\n  \r\n          <div *ngIf=\"filerror\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>Error!</strong> Please Check Your File Something Went Wrong!!! \r\n            </div>\r\n        \r\n        \r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n  <div class=\"row\">\r\n      \r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n        \r\n      <img src=\"\\waves\\assets\\images\\CrisisSupport_AdminPanel.png\" width=\"15%\" height=\"15%px;\" class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\">\r\n        <b>ADD LOCAL RESOURCES</b>\r\n      </h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Local Resource Spreadsheet as a CSV file by clicking below</p>\r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\">UPLOAD LOCAL RESOURCES</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br><br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div *ngIf=\"load\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          <strong>Uploaded!</strong>  {{savedrecord}} of {{totalrecord}}  \r\n        </div>\r\n        \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-panel/import-local-resources/import-local-resources.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-panel/import-local-resources/import-local-resources.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImportLocalResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportLocalResourcesComponent", function() { return ImportLocalResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportLocalResourcesComponent = /** @class */ (function () {
    function ImportLocalResourcesComponent(profileServiceObj, spinnerService, router) {
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.router = router;
        this.uploadingComplete = false;
        this.totalResoutces = 0;
        this.uploadedResources = 1;
        this.sendObj = new Array();
        this.errorlogfile = null;
        this.adminName = null;
        this.schoolId = null;
        this.filerror = null;
        this.filesuccess = null;
        this.logerror = null;
        this.success = null;
        this.totalrecord = null;
        this.savedrecord = null;
        this.load = null;
        this.uploadMessage = null;
    }
    ImportLocalResourcesComponent.prototype.ngOnInit = function () {
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
    };
    ImportLocalResourcesComponent.prototype.loadpage = function () {
        window.location.reload(true);
    };
    ImportLocalResourcesComponent.prototype.handleFileUpload = function (e) {
        if (e.target.files && e.target.files.length > 0) {
            var file = e.target.files[0];
            e.target.parentElement.children[1].value = file.name;
            this.parseFileData(file, e);
        }
    };
    ImportLocalResourcesComponent.prototype.parseFileData = function (file, e) {
        var _this = this;
        this.spinnerService.show();
        var csvFileData = [];
        var csvFileRecord = [];
        var csvDataObj = {};
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            var fileData = reader.result;
            var fileDataRows = fileData.split('\n');
            var headerArr = fileDataRows[0].split(',');
            var headerArr2 = headerArr.map(function (e) { return e.toLowerCase(); });
            _this.totalResoutces = fileDataRows.length - 1;
            for (var index = 1; index < fileDataRows.length; index++) {
                var rawRecordData = fileDataRows[index];
                var newArr = rawRecordData.split(',');
                _this.sendObj[index - 1] = {
                    name: newArr[headerArr2.indexOf('resourcename')],
                    city: newArr[headerArr2.indexOf('city')],
                    state: newArr[headerArr2.indexOf('state')],
                    zipCode: newArr[headerArr2.indexOf('zipcode')],
                    phoneNumber: newArr[headerArr2.indexOf('phone')],
                    serviceTypeId: newArr[headerArr2.indexOf('servicetypeid')],
                    insuranceType: newArr[headerArr2.indexOf('insurancetype')],
                    website: newArr[headerArr2.indexOf('website')],
                    streetAddress: newArr[headerArr2.indexOf('address')],
                    schoolAdminProfileId: _this.schoolId
                };
                _this.uploadedResources += 1;
            }
            _this.profileServiceObj.importLocalResources(JSON.stringify(_this.sendObj)).subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.spinnerService.hide();
                    _this.filerror = res;
                    _this.filesuccess = null;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.filerror = null;
                        _this.load = false;
                    }, 5000);
                }
                else if (temp == 500) {
                    _this.errorlogfile = res['data'].errorFile;
                    _this.spinnerService.hide();
                    _this.logerror = res;
                    _this.success = null;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.load = false;
                    }, 5000);
                }
                else {
                    _this.spinnerService.hide();
                    _this.uploadingComplete = true;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.uploadingComplete = false;
                        _this.router.navigate(['/admin-local-resources']);
                        _this.load = false;
                    }, 3000);
                }
            }, function (err) {
            });
        };
    };
    ImportLocalResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-local-resources',
            template: __webpack_require__(/*! ./import-local-resources.component.html */ "./src/app/admin-panel/import-local-resources/import-local-resources.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ImportLocalResourcesComponent);
    return ImportLocalResourcesComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/import-responder/import-responder.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin-panel/import-responder/import-responder.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n    <h2 class=\"pf-li-h1-title \"><b>Import Responders</b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n      </ul>\r\n\r\n      <h6 id=\"header\">{{adminName}}\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      \r\n      <div *ngIf=\"uploadingComplete\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <strong>Congratulation!</strong> All Responders Successfully Uploaded.\r\n        </div>\r\n           \r\n        <div *ngIf=\"logerror\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"loadpage()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <a [href]=\"errorlogfile\" class=\"btn btn-xs btn-primary pull-right\" target=\"_blank\">\r\n                <i class=\"fa fa-download\" aria-hidden=\"true\"></i> \r\n                logfile.xlsx</a>\r\n            \r\n            <strong>OOPS!</strong> Please Check Log File, Some Responders Have Wrong Info.\r\n        </div>\r\n\r\n        <div *ngIf=\"filerror\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Error!</strong> Please Check Your File Something Went Wrong!!! \r\n          </div>\r\n      \r\n  </div>\r\n</div>\r\n\r\n  \r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    \r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      \r\n      <img src=\"\\waves\\assets\\images\\Students_AdminPanel.png\" width=\"20%\" height=\"20%px;\" class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD RESPONDERS</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Responder Spreadsheet as a CSV file\r\n        by clicking below</p>\r\n      <!-- <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">Upload Your Students</button>                     -->\r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\">UPLOAD RESPONDERS</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    \r\n  </div>\r\n</div>\r\n</div>\r\n\r\n<br><br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      <div *ngIf=\"load\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Uploaded!</strong>  {{savedrecord}} of {{totalrecord}}    \r\n        </div>\r\n        \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-panel/import-responder/import-responder.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin-panel/import-responder/import-responder.component.ts ***!
  \****************************************************************************/
/*! exports provided: ImportResponderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportResponderComponent", function() { return ImportResponderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportResponderComponent = /** @class */ (function () {
    function ImportResponderComponent(profileServiceObj, spinnerService, router) {
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.router = router;
        this.uploadingComplete = false;
        this.totalResoutces = 0;
        this.uploadedResources = 1;
        this.errorsUploading = [];
        this.sendObj = new Array();
        this.errorlogfile = null;
        this.adminName = null;
        this.schoolId = null;
        this.filerror = null;
        this.filesuccess = null;
        this.logerror = null;
        this.success = null;
        this.totalrecord = null;
        this.savedrecord = null;
        this.load = null;
    }
    ImportResponderComponent.prototype.ngOnInit = function () {
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
    };
    ImportResponderComponent.prototype.loadpage = function () {
        window.location.reload(true);
    };
    ImportResponderComponent.prototype.handleFileUpload = function (e) {
        if (e.target.files && e.target.files.length > 0) {
            var file = e.target.files[0];
            e.target.parentElement.children[1].value = file.name;
            this.parseFileData(file, e);
        }
    };
    ImportResponderComponent.prototype.parseFileData = function (file, e) {
        var _this = this;
        this.spinnerService.show();
        var csvFileData = [];
        var csvFileRecord = [];
        var csvDataObj = {};
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            var fileData = reader.result;
            var fileDataRows = fileData.split('\n');
            var headerArr = fileDataRows[0].split(',');
            var headerArr2 = headerArr.map(function (e) { return e.toLowerCase(); });
            _this.totalResoutces = fileDataRows.length - 1;
            for (var index = 1; index < fileDataRows.length; index++) {
                var rawRecordData = fileDataRows[index];
                var newArr = rawRecordData.split(',');
                _this.sendObj[index - 1] = {
                    firstName: newArr[headerArr2.indexOf('firstname')],
                    lastName: newArr[headerArr2.indexOf('lastname')],
                    title: newArr[headerArr2.indexOf('title')],
                    username: newArr[headerArr2.indexOf('email')],
                    responderId: newArr[headerArr2.indexOf('responderid')],
                    position: newArr[headerArr2.indexOf('designation')],
                };
                _this.uploadedResources += 1;
            }
            _this.profileServiceObj.getResponderImportFile(JSON.stringify(_this.sendObj)).subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.spinnerService.hide();
                    _this.filerror = res;
                    _this.filesuccess = null;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.filerror = null;
                        _this.load = false;
                    }, 5000);
                }
                else if (temp == 500) {
                    _this.errorlogfile = res['data'].errorFile;
                    _this.spinnerService.hide();
                    _this.logerror = res;
                    _this.success = null;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.load = false;
                    }, 5000);
                }
                else {
                    _this.spinnerService.hide();
                    _this.uploadingComplete = true;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.uploadingComplete = false;
                        _this.load = false;
                        _this.router.navigate(['/admin-my-responder']);
                    }, 3000);
                }
            }, function (err) {
            });
        };
    };
    ImportResponderComponent.prototype.openFileDialog = function (e) {
        e.target.parentElement.parentElement.children[0].click();
    };
    ImportResponderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-responder',
            template: __webpack_require__(/*! ./import-responder.component.html */ "./src/app/admin-panel/import-responder/import-responder.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ImportResponderComponent);
    return ImportResponderComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/import-student/import-student.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/admin-panel/import-student/import-student.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Import Students</b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n      \r\n      <h6 id=\"header\">{{adminName}}\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n      \r\n      <div *ngIf=\"uploadingComplete\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <strong>Congratulation!</strong> All Student Successfully  Uploaded.\r\n        </div>\r\n           \r\n        <div *ngIf=\"logerror\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"loadpage()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <a [href]=\"errorlogfile\" class=\"btn btn-xs btn-primary pull-right\" target=\"_blank\">\r\n                <i class=\"fa fa-download\" aria-hidden=\"true\"></i> \r\n                logfile.xlsx</a>\r\n            \r\n            <strong>OOPS!</strong> Please Check Log File, Some Students Have Wrong Info.\r\n        </div>\r\n\r\n        <div *ngIf=\"filerror\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Error!</strong> Please Check Your File Something Went Wrong!!! \r\n          </div>\r\n      \r\n  </div>\r\n</div>\r\n  \r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n  \r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n\r\n      <img src=\"\\waves\\assets\\images\\Students_AdminPanel.png\" width=\"20%\" height=\"20%px;\" class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\">\r\n        <b>ADD STUDENTS</b>\r\n      </h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Student Spreadsheet as a CSV file by clicking below</p>\r\n      \r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\">UPLOAD YOUR STUDENTS</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br><br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"load\" class=\"alert alert-info alert-dismissible fade show\" role=\"alert\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <strong>Uploaded!</strong>  {{savedrecord}} of {{totalrecord}}    \r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-panel/import-student/import-student.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-panel/import-student/import-student.component.ts ***!
  \************************************************************************/
/*! exports provided: ImportStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportStudentComponent", function() { return ImportStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImportStudentComponent = /** @class */ (function () {
    function ImportStudentComponent(profileServiceObj, spinnerService, router) {
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.router = router;
        this.uploadingComplete = false;
        this.totalResoutces = 0;
        this.uploadedResources = 1;
        this.sendObj = new Array();
        this.errorlogfile = null;
        this.adminName = null;
        this.schoolId = null;
        this.filerror = null;
        this.filesuccess = null;
        this.logerror = null;
        this.success = null;
        this.totalrecord = null;
        this.savedrecord = null;
        this.load = null;
    }
    ImportStudentComponent.prototype.ngOnInit = function () {
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
    };
    ImportStudentComponent.prototype.loadpage = function () {
        window.location.reload(true);
    };
    ImportStudentComponent.prototype.handleFileUpload = function (e) {
        if (e.target.files && e.target.files.length > 0) {
            var file = e.target.files[0];
            e.target.parentElement.children[1].value = file.name;
            this.parseFileData(file, e);
        }
    };
    ImportStudentComponent.prototype.parseFileData = function (file, e) {
        var _this = this;
        this.spinnerService.show();
        var csvFileData = [];
        var csvFileRecord = [];
        var csvDataObj = {};
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
            var fileData = reader.result;
            var fileDataRows = fileData.split('\n');
            var headerArr = fileDataRows[0].split(',');
            var headerArr2 = headerArr.map(function (e) { return e.toLowerCase(); });
            _this.totalResoutces = fileDataRows.length - 1;
            for (var index = 1; index < fileDataRows.length; index++) {
                var rawRecordData = fileDataRows[index];
                var newArr = rawRecordData.split(',');
                _this.sendObj[index - 1] = {
                    firstName: newArr[headerArr2.indexOf('firstname')],
                    lastName: newArr[headerArr2.indexOf('lastname')],
                    gradeLevel: newArr[headerArr2.indexOf('gradelevel')],
                    username: newArr[headerArr2.indexOf('email')],
                    studentId: newArr[headerArr2.indexOf('studentid')],
                    responderId: newArr[headerArr2.indexOf('assignedresponderid')],
                    schoolAdminProfileId: _this.schoolId
                };
                _this.uploadedResources += 1;
            }
            _this.profileServiceObj.getStudentImportFile(JSON.stringify(_this.sendObj)).subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.filerror = res;
                    _this.filesuccess = null;
                    _this.spinnerService.hide();
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.filerror = null;
                        _this.load = false;
                    }, 5000);
                }
                else if (temp == 500) {
                    _this.spinnerService.hide();
                    _this.errorlogfile = res['data'].errorFile;
                    _this.logerror = res;
                    _this.success = null;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.load = false;
                    }, 5000);
                }
                else {
                    _this.spinnerService.hide();
                    _this.uploadingComplete = true;
                    _this.load = true;
                    _this.totalrecord = res['data']['result'].total_records;
                    _this.savedrecord = res['data']['result'].total_saved;
                    window.setTimeout(function () {
                        _this.uploadingComplete = false;
                        _this.load = false;
                        _this.router.navigate(['/admin-my-student']);
                    }, 3000);
                }
            }, function (err) {
            });
        };
    };
    ImportStudentComponent.prototype.openFileDialog = function (e) {
        e.target.parentElement.parentElement.children[0].click();
    };
    ImportStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-import-student',
            template: __webpack_require__(/*! ./import-student.component.html */ "./src/app/admin-panel/import-student/import-student.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ImportStudentComponent);
    return ImportStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/my-responder/my-responder.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin-panel/my-responder/my-responder.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n\r\n\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \"><b>My Responders</b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <input type=\"search\" class=\"form-control form-control-search\" aria-label=\"Search\"\r\n                   aria-describedby=\"basic-addon1\">\r\n\r\n            <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n      <h6 id=\"header\">{{adminName}}<br>\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <div *ngIf=\"successmsg\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Responder!</strong> Successfully Added .\r\n          </div>\r\n\r\n        <div *ngIf=\"errormsg\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Validation Failed!</strong> duplication email or responder id .\r\n          </div>\r\n\r\n          <div *ngIf=\"editsuc\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>Responder!</strong> Successfully Updated.\r\n          </div>\r\n\r\n          <div *ngIf=\"editErr\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>Responder cannot be edited,Please change attached students to another counselor !</strong>\r\n          </div>\r\n\r\n          <div *ngIf=\"deletesuc\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>Responder!</strong> Successfully Deleted.\r\n          </div>\r\n\r\n          <div *ngIf=\"deleteErr\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>Deletion Failed!</strong> Responder hava a Student.\r\n          </div>\r\n          \r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row spaces\">\r\n  <div class=\"col-md-12\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent2\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent2\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n        </ul>\r\n\r\n\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space\" (click)=\"addMyResponder(template4)\">ADD\r\n          RESPONDER\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space\" routerLink=\"/import-responder\">IMPORT</button>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"table-responsive spaces\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n    <tr>\r\n\r\n      <th>Title</th>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th>Reaponder Id</th>\r\n      <th>Email</th>\r\n      <th>Role</th>\r\n      <th>Action</th>\r\n    </tr>\r\n    </thead>\r\n    <tr *ngIf=\"responderObj.data.result.length < 1\">\r\n      <td colspan = \"7\"> <p style=\"text-align:center;\">No Data Found </p></td>\r\n    </tr>\r\n    <tr *ngFor=\"let responder of responderObj.data.result\">\r\n        \r\n      <td>{{responder.title}}</td>\r\n      <td>{{responder.firstName}}</td>\r\n      <td>{{responder.lastName}}</td>\r\n      <td>{{responder.responderId}}</td>\r\n      <td>{{responder.username}}</td>\r\n      <td>{{responder.position}}</td>\r\n      <td>\r\n        <p data-placement=\"top\" title=\"Edit\">\r\n          <button class=\"btn btn-primary btn-xs\" data-title=\"Edit\"\r\n                  (click)=\"editMyResponder(template2,responder.userId)\" \r\n                  data-target=\"#edit\"><span class=\"fa fa-edit\"></span></button>\r\n          <button class=\"btn btn-danger btn-xs btn-margin\"  data-title=\"Delete\"\r\n                  (click)=\"deleteMyResponder(template3,responder.userId)\" data-target=\"#delete\"><span class=\"fa fa-trash\">\r\n\r\n                  </span>\r\n          </button>\r\n        </p>\r\n      </td>\r\n\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"spaces w3-right-align\" *ngIf=\"collectionSize >10\">\r\n  <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"currentPage\" size=\"sm\"\r\n                  [pageSize]=\"10\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"\r\n                  (pageChange)=\"vac_pagination(page)\"></ngb-pagination>\r\n\r\n</div>\r\n<!-- <p>Form value: {{ f.value | json }}</p> -->\r\n<ng-template #template4>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Add Responder</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <form (submit)=\"onSubmitResponder(f)\" #f=\"ngForm\">\r\n    <div class=\"modal-body\">\r\n\r\n        <div class=\"form-group\">\r\n          \r\n            <select class=\"w3-input change\" id=\"title\" ngModel required name=\"title\" title\r\n            #title=\"ngModel\">\r\n                <option value=\"\" disabled selected hidden>Title</option>\r\n                <option value=\"Mr.\">Mr.</option>\r\n                <option value=\"Mrs.\">Mrs.</option>\r\n                <option value=\"Miss\">Miss</option>\r\n                <option value=\"Ms.\">Ms.</option>\r\n                <option value=\"Dr.\">Dr.</option>\r\n                \r\n              </select>\r\n              <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"title.touched && !title.valid\">Please enter the Title\r\n            </span>\r\n  \r\n         \r\n        </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"firstname\" placeholder=\"First Name*\" ngModel required\r\n               name=\"firstName\" firstName\r\n               #firstName=\"ngModel\">\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"firstName.touched && !firstName.valid\">Please enter your First Name</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"lastname\" placeholder=\"Last Name*\" ngModel required\r\n               name=\"lastName\" lastName\r\n               #lastName=\"ngModel\">\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"lastName.touched && !lastName.valid\">Please enter your Last Name</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <input type=\"text\" class=\"w3-input change\" id=\"responderid\" placeholder=\"Responder ID*\" ngModel required name=\"responderId\" responderId\r\n                   #responderId=\"ngModel\">\r\n            <span style=\"color: red;\" class=\"help-block\"\r\n                  *ngIf=\"responderId.touched && !responderId.valid\">Please enter the Reponder Id</span>\r\n          </div>\r\n     \r\n          <div class=\"form-group\">\r\n\r\n              <input type=\"email\" class=\"w3-input change\" id=\"email\" placeholder=\"email*\" ngModel required name=\"email\" email\r\n                     #email=\"ngModel\">\r\n              <span style=\"color: red;\" class=\"help-block\"\r\n                    *ngIf=\"!email.valid && email.touched\">Please enter a valid Email Address</span>\r\n            </div>\r\n\r\n      <div class=\"form-group\">\r\n          <select class=\"w3-input change\" id=\"position\" ngModel required name=\"position\" position\r\n          #position=\"ngModel\">\r\n              <option value=\"\" disabled selected hidden>Position*</option>\r\n              <option value=\"Psychologist\">Psychologist</option>\r\n              <option value=\"Social Worker\">Social Worker\r\n                </option>\r\n              <option value=\"Counselor\">Counselor\r\n                </option>\r\n              \r\n              \r\n            </select>\r\n      \r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"position.touched && !position.valid\">Please enter the Role/Designation of Responder</span>\r\n      </div>\r\n      \r\n     \r\n     \r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close\r\n      </button>\r\n      <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\" \r\n               class=\"btn btn-primary modal-btn-clr\" (click)=\"modalRef.hide()\">Submit\r\n      </button>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<!--====================  End Add Responder Popup Template  ================== -->\r\n\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Edit Responder</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n      <div class=\"form-group\">\r\n          \r\n          <select class=\"w3-input change\" id=\"title\" placeholder=\"Title\" ngModel \r\n          required name=\"title\" \r\n          [(ngModel)]=\"title\">\r\n           <!-- <option value=\"\" disabled selected hidden>Title*</option> -->\r\n              <option [value]=\"title\" disabled>{{title}}</option>\r\n              <option value=\"Mr.\">Mr.</option>\r\n              <option value=\"Mrs.\">Mrs.</option>\r\n              <option value=\"Miss\">Miss</option>\r\n              <option value=\"Ms.\">Ms.</option>\r\n              <option value=\"Dr.\">Dr.</option>\r\n              \r\n            </select>\r\n            <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"title.touched && !title.valid\">Please enter the Title\r\n          </span>\r\n    </div>\r\n      \r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"firstname\" placeholder=\"First Name\" ngModel\r\n             required name=\"firstName\" \r\n             [(ngModel)]=\"firstName\">\r\n\r\n      <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"firstName.touched && !firstName.valid\">Please enter a  first Name</span>\r\n      <!-- <span class=\"help-block\"  >Please enter a valid School Admin First Name</span> -->\r\n\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"lastname\" placeholder=\"Last Name\" ngModel\r\n             required name=\"lastName\" \r\n             [(ngModel)]=\"lastName\">\r\n\r\n      <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"lastName.touched && !lastName.valid\">Please enter a Last Name</span>\r\n      <!-- <span class=\"help-block\"  >Please enter a valid School Admin Last Name</span> -->\r\n\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"responderid\" placeholder=\"Responder Id\" ngModel\r\n               required name=\"responderId\" \r\n               [(ngModel)]=\"responderId\" readonly>\r\n  \r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"responderId.touched && !responderId.valid\">Please enter unique Respopnder Id</span>\r\n        <!-- <span class=\"help-block\"  >Please enter a valid School Admin First Name</span> -->\r\n  \r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <input type=\"email\" class=\"w3-input change\" id=\"username\" placeholder=\"Email\" ngModel required\r\n                 name=\"email\" email\r\n                 [(ngModel)]=\"email\" readonly>\r\n    \r\n          <!-- <span class=\"help-block\"  >Please enter a valid School Admin Id</span> -->\r\n    \r\n        </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <select class=\"w3-input change\" id=\"position\" placeholder=\"Role\" ngModel\r\n        required name=\"position\" position\r\n        [(ngModel)]=\"position\">\r\n            <!-- <option value=\"\" disabled selected hidden>Position*</option> -->\r\n            <option [value]=\"position\" disabled>{{position}}</option>\r\n            <option value=\"Psychologist\">Psychologist</option>\r\n            <option value=\"Social Worker\">Social Worker</option>\r\n            <option value=\"Counselor\">Counselor \r\n              </option>\r\n            \r\n          </select>\r\n    \r\n      <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"position.touched && !position.valid\">Please enter the Role/Designation of Responder</span>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">\r\n      Close\r\n    </button>\r\n    <button  [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n            class=\"btn btn-primary modal-btn-clr\" (click)=\"updateStudent(); modalRef.hide()\">Update\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<ng-template #template3>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Are you sure to delete Responder ?</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n\r\n    <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"submit\" class=\"btn btn-primary modal-btn-clr btn-modal\" (click)=\"deleteRes();modalRef.hide()\">Delete\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/my-responder/my-responder.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin-panel/my-responder/my-responder.component.ts ***!
  \********************************************************************/
/*! exports provided: MyResponderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyResponderComponent", function() { return MyResponderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyResponderComponent = /** @class */ (function () {
    function MyResponderComponent(modalService, profileServiceObj, spinnerService) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.responderObj = { data: { result: [] } };
        this.currentPage = 1;
        this.successmsg = null;
        this.errormsg = null;
        this.editsuc = null;
        this.editErr = null;
        this.deletesuc = null;
        this.deleteErr = null;
    }
    MyResponderComponent.prototype.loadResponder = function () {
        var _this = this;
        this.spinnerService.show();
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.profileServiceObj.getMyRespondertSchoollist(this.schoolId).subscribe(function (res) {
            _this.getMyResponderSchoolObj = res;
            _this.collectionSize = _this.getMyResponderSchoolObj['data']['result'].length;
            _this.responderObj['data']['result'] = _this.getMyResponderSchoolObj['data']['result'].slice(0, 10);
            _this.spinnerService.hide();
        }, function (err) {
            _this.spinnerService.hide();
        });
    };
    MyResponderComponent.prototype.ngOnInit = function () {
        this.loadResponder();
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
    };
    MyResponderComponent.prototype.addMyResponder = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    MyResponderComponent.prototype.onSubmitResponder = function (form) {
        var _this = this;
        this.spinnerService.show();
        this.profileServiceObj.addResponder(form.value.firstName, form.value.lastName, form.value.title, form.value.position, form.value.responderId, form.value.email).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.addResponderObj = res;
                _this.loadResponder();
                _this.spinnerService.hide();
                _this.successmsg = null;
                _this.errormsg = res;
                window.setTimeout(function () {
                    _this.errormsg = null;
                }, 3000);
            }
            else {
                _this.addResponderObj = res;
                _this.loadResponder();
                _this.spinnerService.hide();
                _this.successmsg = res;
                _this.errormsg = null;
                window.setTimeout(function () {
                    _this.successmsg = null;
                }, 3000);
            }
        }, function (err) {
        });
    };
    MyResponderComponent.prototype.vac_pagination = function (page) {
        console.log((this.currentPage - 1) * 10, (this.currentPage) * 10);
        this.responderObj['data']['result'] = this.getMyResponderSchoolObj['data']['result'].slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
    };
    MyResponderComponent.prototype.updateStudent = function () {
        var _this = this;
        this.profileServiceObj.updateResponder(this.firstName, this.lastName, this.title, this.position, this.email, this.responderId, this.id).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 500) {
                _this.spinnerService.hide();
                _this.editsuc = null;
                _this.editErr = res;
                window.setTimeout(function () {
                    _this.editErr = null;
                }, 3000);
            }
            else {
                _this.loadResponder();
                _this.spinnerService.hide();
                _this.editsuc = res;
                _this.editErr = null;
                window.setTimeout(function () {
                    _this.editsuc = null;
                }, 3000);
            }
        }, function (err) {
            _this.editErr = err;
            _this.editsuc = null;
            window.setTimeout(function () {
                _this.editErr = null;
            }, 3000);
        });
    };
    MyResponderComponent.prototype.editMyResponder = function (template, id) {
        var res = this.responderObj['data']['result'].find(function (i) { return i.userId == id; });
        this.id = id;
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.title = res.title;
        this.position = res.position;
        this.email = res.username;
        this.responderId = res.responderId;
        this.modalRef = this.modalService.show(template);
    };
    MyResponderComponent.prototype.deleteMyResponder = function (template, responderId) {
        this.id = responderId;
        this.modalRef = this.modalService.show(template);
    };
    MyResponderComponent.prototype.deleteRes = function () {
        var _this = this;
        this.profileServiceObj.deleteResponder(this.id).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 500) {
                _this.spinnerService.hide();
                _this.deletesuc = null;
                _this.deleteErr = res;
                window.setTimeout(function () {
                    _this.deleteErr = null;
                }, 1000);
            }
            else {
                _this.loadResponder();
                _this.spinnerService.hide();
                _this.deletesuc = res;
                _this.deleteErr = null;
                window.setTimeout(function () {
                    _this.deletesuc = null;
                }, 1000);
            }
        }, function (err) { });
    };
    MyResponderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-responder',
            template: __webpack_require__(/*! ./my-responder.component.html */ "./src/app/admin-panel/my-responder/my-responder.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], MyResponderComponent);
    return MyResponderComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/my-student/my-student.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-panel/my-student/my-student.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n<ng4-loading-spinner> </ng4-loading-spinner>\r\n\r\n\r\n\r\n    <div class=\"col-lg-12 ml-5 pr-5\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n           \r\n            <h2 class=\"pf-li-h1-title \"><b>My Students</b></h2>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n    \r\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n              \r\n              \r\n            </ul>\r\n            \r\n            <form class=\"form-inline\">\r\n                <div class=\"input-group\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <input type=\"search\" class=\"form-control form-control-search\"  aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n              \r\n                    <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n                      <i class=\"fas fa-search\">\r\n                      </i>\r\n              \r\n                    </button>\r\n                  </div>\r\n              \r\n                </div>\r\n              </form>\r\n              <h6 id=\"header\">{{adminName}}\r\n              </h6>\r\n              <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n            <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n          \r\n          </div>\r\n\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"message\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            <strong>Error!</strong> Error Occur During Creating Student.Please Check Your Student Info !!!\r\n          </div>\r\n\r\n\r\n\r\n          <div *ngIf=\"respondererror\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Responder is not Counselor!</strong>\r\n        </div>\r\n        <div *ngIf=\"studentiderror\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <strong>Student ID already Exist!</strong>\r\n      </div>\r\n\r\n\r\n    <div *ngIf=\"usernamealert\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <strong>Email already Exist!</strong>\r\n    </div>\r\n        <div *ngIf=\"studentaddsuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <strong>Student </strong> Successfully Added!\r\n      </div>\r\n      <div *ngIf=\"successedit\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <strong>Student </strong> Successfully Updated!\r\n    </div>\r\n    <div *ngIf=\"successerror\" class=\"alert alert-danger\"  role=\"alert\" >\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <strong>Error! </strong> The Responder You Assign is not a Counselor.\r\n    </div>\r\n    <div *ngIf=\"studentdelete\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n      <strong>Student </strong> Successfully Deleted!\r\n  </div>\r\n  \r\n  <div *ngIf=\"invalidresponder\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\"  aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    <strong>Invalid Responder , Please enter a valid responder name!</strong>\r\n  </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n\r\n<div class=\"row spaces\">\r\n  <div class=\"col-md-12\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent2\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent2\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space \" routerLink=\"/download-import-student\">\r\n          EXPORT\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space\" (click)=\"addMyStudent(template4)\">ADD STUDENT\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-space \" routerLink=\"/import-student\">IMPORT</button>\r\n        <!-- <label class=\"btn btn-primary btn-sm btn-space\" for=\"file_input_id\"><a routerLink=\"/import-student\">IMPORT</a></label>\r\n        <input  Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n        <input  type=\"file\" class=\"btn btn-primary btn-sm\" (change)=\"handleFileUpload($event)\" accept=\".csv\"> -->\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"table-responsive spaces\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n    <tr>\r\n\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th>Student ID</th>\r\n      <th>Email</th>\r\n      <th>Grade</th>\r\n      <th>Designated Responder ID</th>\r\n      <th>Action</th>\r\n    </tr>\r\n    </thead>\r\n    <tr *ngIf=\"studentObj.data.result.length < 1\">\r\n      <td colspan = \"7\"> <p style=\"text-align:center;\">No Data Found </p></td>\r\n    </tr>\r\n    <tr *ngFor=\"let student of studentObj.data.result\">\r\n      <td>{{student.firstName}}</td>\r\n      <td>{{student.lastName}}</td>\r\n      <td>{{student.studentId}}</td>\r\n      <td>{{student.username}}</td>\r\n      <td>{{student.gradeLevel}}</td>\r\n      \r\n        <td>{{student.ResFirstName}}( {{student.responderId}})\r\n          <!-- <span *ngFor=\"let responder of student?.ResponderStudents\"> \r\n            {{responder?.ResponderProfiles?.firstName }}&nbsp;{{ responder?.ResponderProfiles?.lastName}} </span>\r\n          \r\n          student?.ResponderStudents[0]?.ResponderProfiles?.id \r\n        -->\r\n      </td>\r\n      <td>\r\n        <p data-placement=\"top\" title=\"Edit\">\r\n          <button class=\"btn btn-primary btn-xs\" data-title=\"Edit\"\r\n                  (click)=\"editMyStudent(template2 , student.firstName, student.lastName, student.gradeLevel, \r\n                  student.username, student.studentId,student.responderId,student.ResFirstName, \r\n                  student.userId)\"\r\n                  \r\n                  data-target=\"#edit\"><span class=\"fa fa-edit\"></span>\r\n          </button>\r\n          <button class=\"btn btn-danger btn-xs btn-margin\" data-title=\"Delete\"\r\n                  (click)=\"deleteMyStudent(template3 ,student.userId )\" data-target=\"#delete\"><span\r\n            class=\"fa fa-trash\"></span></button>\r\n        </p>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"spaces w3-right-align\" *ngIf=\"collectionSize >10\">\r\n  <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"currentPage\" size=\"sm\"\r\n                  [pageSize]=\"10\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"\r\n                  (pageChange)=\"vac_pagination(page)\"></ngb-pagination>\r\n\r\n</div>\r\n\r\n\r\n<!--====================Add User Popup Template================== -->\r\n\r\n<ng-template #template4>\r\n  \r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left modal_title_font\">Add Student</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <form (submit)=\"onSubmitStudent(f)\" #f=\"ngForm\">\r\n\r\n        <div class=\"modal-body\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"firstname\" placeholder=\"First Name*\" ngModel required\r\n               name=\"firstName\" firstName\r\n               #firstName=\"ngModel\">\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"firstName.touched && !firstName.valid\">Please enter your First Name</span>\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"lastname\" placeholder=\"Last Name*\" ngModel required\r\n               name=\"lastName\" lastName\r\n               #lastName=\"ngModel\">\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"lastName.touched && !lastName.valid\">Please enter your Last Name</span>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"gradeLevel\"\r\n               placeholder=\"Student Grade*\" ngModel required name=\"gradeLevel\" gradeLevel\r\n               #gradeLevel=\"ngModel\">\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"gradeLevel.touched && !gradeLevel.valid\">Please enter your Student Grade</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"w3-input change\" id=\"email\" placeholder=\"Email*\" ngModel required name=\"email\" email\r\n               #email=\"ngModel\">\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"!email.valid && email.touched\">Please enter a valid Email Address</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"studentid\" placeholder=\"Student ID*\" ngModel required\r\n               name=\"studentId\" studentId\r\n               #studentId=\"ngModel\">\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"studentId.touched && !studentId.valid\">Please enter your Student ID</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n          <ng-select \r\n          [items]=\"responders\"\r\n          bindLabel=\"resNameId\"\r\n          bindValue=\"userId\"\r\n          placeholder=\"Designated Responder\"\r\n          ngModel required\r\n          name=\"designatedResponder\" designatedResponder\r\n          #designatedResponder=\"ngModel\">\r\n  </ng-select>\r\n\r\n        <!-- <input type=\"text\" class=\"w3-input change\" id=\"designatedresponder\" placeholder=\"Designated Responder*\"\r\n               [ngbTypeahead]=\"search\"\r\n               [inputFormatter]=\"formatter_school\" [resultFormatter]=\"formatter_school\" ngModel required\r\n               name=\"designatedResponder\" designatedResponder\r\n               #designatedResponder=\"ngModel\"> -->\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"designatedResponder.touched && !designatedResponder.valid\">Please enter designated responder name</span>\r\n      </div>\r\n\r\n\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close\r\n        </button>\r\n        <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                class=\"btn btn-primary modal-btn-clr\" (click)=\"modalRef.hide()\">Submit\r\n        </button>\r\n      </div>\r\n    </div>\r\n    </form>\r\n  \r\n</ng-template>\r\n\r\n<!--====================  End Add User Popup Template  ================== -->\r\n\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Edit Student</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form (submit)=\"updateStudent(f)\" #f=\"ngForm\">\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"firstName\" placeholder=\"First Name\" ngModel required\r\n             name=\"firstName\"\r\n             [(ngModel)]=\"firstName\"\r\n      >\r\n      <!-- <span class=\"help-block\" >Please enter a valid School Name</span> -->\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"lastName\" placeholder=\"Last Name\" ngModel required\r\n             name=\"lastName\"\r\n             [(ngModel)]=\"lastName\"\r\n      >\r\n\r\n      <!-- <span class=\"help-block\" >Please enter a valid School Name</span> -->\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"gradeLevel\" placeholder=\"Grade\" ngModel required\r\n             name=\"gradeLevel\"\r\n             [(ngModel)]=\"gradeLevel\"\r\n      >\r\n\r\n      <!-- <span class=\"help-block\" >Please enter a valid School Name</span> -->\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"email\" class=\"w3-input change\" id=\"username\" placeholder=\"Email\" ngModel required\r\n             name=\"username\" \r\n             [(ngModel)]=\"username\" readonly>\r\n\r\n      <!-- <span class=\"help-block\"  >Please enter a valid School Admin Id</span> -->\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"studentId\" placeholder=\"Student Id\" ngModel\r\n             required name=\"studentId\" \r\n             [(ngModel)]=\"id\" readonly>\r\n             \r\n             <input type=\"hidden\" class=\"w3-input change\" id=\"selectedResponder\"  ngModel\r\n             required name=\"selectedResponder\" \r\n             [(ngModel)]=\"selectedResponder\" readonly>\r\n\r\n      <!-- <span class=\"help-block\"  >Please enter a valid School Admin First Name</span> -->\r\n    \r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n       \r\n    \r\n            <ng-select class=\"custom\"\r\n            [items]=\"responders\"\r\n            bindLabel=\"resNameId\"\r\n            bindValue=\"userId\"\r\n           \r\n            [placeholder]= \"resnameid\"\r\n            ngModel required\r\n            name=\"designatedResponder\" designatedResponder\r\n            #designatedResponder=\"ngModel\">\r\n    </ng-select>\r\n\r\n      <!-- <input type=\"text\" class=\"w3-input change\" id=\"designatedresponder\" placeholder=\"Designated Responder:\"\r\n             [ngbTypeahead]=\"search\"\r\n             [inputFormatter]=\"formatter_school\" [resultFormatter]=\"formatter_school\" ngModel required\r\n             name=\"designatedResponder\"\r\n             [(ngModel)]=\"selectedResponder\"\r\n             \r\n      > -->\r\n     \r\n      <!-- <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"designatedResponder.touched && !designatedResponder.valid\">Please enter Designated Responder Name</span> -->\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close\r\n    </button>\r\n    <button type=\"submit\" [class.disabled]=\"\" [disabled]=\"\" \r\n             class=\"btn btn-primary modal-btn-clr\" \r\n             (click)=\"modalRef.hide()\">Update\r\n    </button>\r\n  </div>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-template #template3>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Are you sure to delete Student ?</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n\r\n    <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"submit\"\r\n            class=\"btn btn-primary modal-btn-clr btn-modal\" (click)=\"deleteStu();modalRef.hide()\">Delete\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/my-student/my-student.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-panel/my-student/my-student.component.ts ***!
  \****************************************************************/
/*! exports provided: MyStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStudentComponent", function() { return MyStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyStudentComponent = /** @class */ (function () {
    function MyStudentComponent(modalService, profileServiceObj, spinnerService) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.resnameid = null;
        this.selectedResponder = {};
        this.studentObj = { data: { result: [] } };
        this.checkres = { data: { result: [] } };
        this.currentPage = 1;
        this.message = null;
        this.studentaddsuccess = null;
        this.studentiderror = null;
        this.usernamealert = null;
        this.respondererror = null;
        this.successedit = null;
        this.successerror = null;
        this.studentdelete = null;
        this.invalidresponder = null;
    }
    MyStudentComponent.prototype.loadStudents = function () {
        var _this = this;
        this.spinnerService.show();
        this.profileServiceObj.getMyStudentSchoollist().subscribe(function (res) {
            _this.getSchoolObj = res;
            _this.collectionSize = _this.getSchoolObj['data']['result'].length;
            _this.studentObj['data']['result'] = _this.getSchoolObj['data']['result'].slice(0, 10);
            _this.spinnerService.hide();
        }, function (err) {
        });
    };
    MyStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.schoolid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.loadStudents();
        this.profileServiceObj.getResponderCouncler(this.schoolid).subscribe(function (res) {
            _this.responders = res['data']['result'];
            _this.checkres['data']['result'] = res['data']['result'];
        }, function (err) {
        });
    };
    // search = (text$: Observable<string>) =>
    //   text$.pipe(
    //     debounceTime(200),
    //     distinctUntilChanged(),
    //     map(term => term.length < 1 ? []
    //       : this.responders['data']['result'].filter(v => v.resNameId.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    //   );
    // formatter_school = (x: { resNameId: string }) => x.resNameId.substring(0, 50);
    MyStudentComponent.prototype.addMyStudent = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    MyStudentComponent.prototype.onSubmitStudent = function (form) {
        var _this = this;
        this.spinnerService.show();
        var a = form.value.designatedResponder;
        if (a == undefined) {
            this.invalidresponder = "show";
            this.spinnerService.hide();
            window.setTimeout(function () {
                _this.invalidresponder = null;
            }, 3000);
        }
        else {
            this.profileServiceObj.addStudent(form.value.firstName, form.value.lastName, form.value.gradeLevel, form.value.email, form.value.designatedResponder, form.value.studentId, this.schoolid).subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 200) {
                    _this.loadStudents();
                    _this.spinnerService.hide();
                    _this.respondererror = null;
                    _this.addUserObj = res;
                    _this.message = null;
                    _this.studentiderror = null;
                    _this.usernamealert = null;
                    _this.studentaddsuccess = res;
                    window.setTimeout(function () {
                        _this.studentaddsuccess = null;
                    }, 3000);
                }
                else if (temp == 400) {
                    _this.respondererror = res;
                    _this.spinnerService.hide();
                    window.setTimeout(function () {
                        _this.respondererror = null;
                    }, 3000);
                }
                else if (res['data']['errors'].studentId != undefined) {
                    _this.respondererror = null;
                    _this.message = null;
                    _this.addUserObj = res;
                    _this.studentiderror = res;
                    _this.studentaddsuccess = null;
                    _this.usernamealert = null;
                    _this.spinnerService.hide();
                    window.setTimeout(function () {
                        _this.studentiderror = null;
                    }, 3000);
                }
                else if (res['data']['errors'].username != undefined) {
                    _this.respondererror = null;
                    _this.message = null;
                    _this.addUserObj = res;
                    _this.studentiderror = null;
                    _this.usernamealert = res;
                    _this.studentaddsuccess = null;
                    _this.spinnerService.hide();
                    window.setTimeout(function () {
                        _this.usernamealert = null;
                    }, 3000);
                }
            }, function (err) {
                _this.message = err;
                window.setTimeout(function () {
                    _this.message = null;
                }, 3000);
            });
        }
    };
    MyStudentComponent.prototype.vac_pagination = function () {
        console.log((this.currentPage - 1) * 10, (this.currentPage) * 10);
        this.studentObj['data']['result'] = this.getSchoolObj['data']['result'].slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
    };
    MyStudentComponent.prototype.updateStudent = function (form) {
        var _this = this;
        var a = form.value.designatedResponder;
        var resid = this.selectedResponder;
        var userid = this.checkres['data']['result'].find(function (i) { return i.responderId == resid; });
        if (a == undefined) {
            this.profileServiceObj.updateStudent(this.firstName, this.lastName, this.gradeLevel, userid.userId, this.sid).subscribe(function (res) {
                console.log(_this.firstName, _this.lastName, _this.gradeLevel, userid.userId, _this.sid);
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.spinnerService.hide();
                    _this.successedit = null;
                    _this.successerror = res;
                    window.setTimeout(function () {
                        _this.successerror = null;
                    }, 3000);
                }
                else {
                    _this.loadStudents();
                    _this.spinnerService.hide();
                    _this.successedit = res;
                    window.setTimeout(function () {
                        _this.successedit = null;
                    }, 3000);
                }
            }, function (err) {
            });
        }
        else {
            this.profileServiceObj.updateStudent(this.firstName, this.lastName, this.gradeLevel, a, this.sid).subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.spinnerService.hide();
                    _this.successedit = null;
                    _this.successerror = res;
                    window.setTimeout(function () {
                        _this.successerror = null;
                    }, 3000);
                }
                else {
                    _this.loadStudents();
                    _this.spinnerService.hide();
                    _this.successedit = res;
                    window.setTimeout(function () {
                        _this.successedit = null;
                    }, 3000);
                }
            }, function (err) {
            });
        }
    };
    MyStudentComponent.prototype.editMyStudent = function (template, firstName, lastName, gradeLevel, username, studentid, designatedresponder, respondername, userid) {
        this.sid = userid;
        this.id = studentid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
        this.username = username;
        this.selectedResponder = designatedresponder;
        this.resnameid = respondername + "(" + designatedresponder + ")";
        this.modalRef = this.modalService.show(template);
    };
    MyStudentComponent.prototype.deleteMyStudent = function (template, userid) {
        this.id = userid;
        this.modalRef = this.modalService.show(template);
    };
    MyStudentComponent.prototype.deleteStu = function () {
        var _this = this;
        this.profileServiceObj.deleteStudent(this.id).subscribe(function (res) {
            _this.loadStudents();
            _this.spinnerService.hide();
            _this.studentdelete = res;
            window.setTimeout(function () {
                _this.studentdelete = null;
            }, 1000);
        }, function (err) {
        });
    };
    MyStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-student',
            template: __webpack_require__(/*! ./my-student.component.html */ "./src/app/admin-panel/my-student/my-student.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], MyStudentComponent);
    return MyStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/referral-request/referral-request.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin-panel/referral-request/referral-request.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \"><b>Referral Requests\r\n    </b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <input type=\"search\" class=\"form-control form-control-search\" aria-label=\"Search\"\r\n                   aria-describedby=\"basic-addon1\">\r\n\r\n            <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n      <h6 id=\"header\">{{profileObj['data']['firstName']}} {{profileObj['data']['lastName']}}\r\n        </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n\r\n<div class=\"table-responsive spaces\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n    <tr>\r\n\r\n      <th>Resource Name</th>\r\n      <th>Student Name</th>\r\n      <th>Student ID</th>\r\n      <th>Date</th>\r\n      <th>Time</th>\r\n      <th>Referred To</th>\r\n      <th>Comments</th>\r\n\r\n    </tr>\r\n    </thead>\r\n    <tr (click)=\"openModal(template)\">\r\n      <td>Name:</td>\r\n      <td>Mark Wood</td>\r\n      <td>160404024</td>\r\n      <td>6/13/2018</td>\r\n      <td>4:42pm</td>\r\n      <td>Null</td>\r\n      <td>Null</td>\r\n    </tr>\r\n    <tr (click)=\"openModal(template)\">\r\n      <td>Name:</td>\r\n      <td>Mark Wood</td>\r\n      <td>160404024</td>\r\n      <td>6/13/2018</td>\r\n      <td>4:42pm</td>\r\n      <td>Null</td>\r\n      <td>Null</td>\r\n    </tr>\r\n    <tr (click)=\"openModal(template)\">\r\n      <td>Name:</td>\r\n      <td>Mark Wood</td>\r\n      <td>160404024</td>\r\n      <td>6/13/2018</td>\r\n      <td>4:42pm</td>\r\n      <td>Null</td>\r\n      <td>Null</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<br><br>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-body\">\r\n    <div class=\"admin-border\">\r\n      <span class=\"cross\">X</span>\r\n      <p id=\"margin-border\">Responder Name:</p>\r\n      <p id=\"margin-border\">Student Name:</p>\r\n      <p id=\"margin-border\">Student ID:</p>\r\n      <p id=\"margin-border\">Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Time:</p>\r\n      <p id=\"margin-border\"> Referred To:</p>\r\n      <p id=\"margin-border\">Comments:</p>\r\n      <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n      <button class=\"btn btn-primary center-block pos\"> Approve</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<!-- <div class=\"col-md-6\">\r\n              <div class=\"admin-border1\">\r\n                  <span class=\"cross\">X</span>\r\n                  <span class=\"cross\">X</span>\r\n                  <p id=\"margin-border\">Responder Name:</p>\r\n                  <p id=\"margin-border\">Student Name:</p>\r\n                  <p id=\"margin-border\">Student ID:</p>\r\n                  <p id=\"margin-border\">Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     Time:</p>\r\n                  <p id=\"margin-border\"> Referred To:</p>\r\n                  <p id=\"margin-border\">Comments:</p>\r\n                  <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n                <button class=\"btn btn-primary pos disabled\"> Approved</button>\r\n              </div>\r\n            </div> -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-panel/referral-request/referral-request.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin-panel/referral-request/referral-request.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReferralRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralRequestComponent", function() { return ReferralRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReferralRequestComponent = /** @class */ (function () {
    function ReferralRequestComponent(modalService, ProfileServiceObj) {
        this.modalService = modalService;
        this.ProfileServiceObj = ProfileServiceObj;
    }
    ReferralRequestComponent.prototype.ngOnInit = function () {
        // this.ProfileServiceObj.getAdminprofile().subscribe(
        //   res => {
        //     this.profileObj = res;
        //     // this.profileServiceObj.downloadImage(this.profileObj['data']['userId']).subscribe(
        //     //   res =>{
        //     //     this.createImageFromBlob(res);
        //     //   },
        //     //   err =>{}
        //     // )
        //   },
        //   err =>{}
        // );
    };
    ReferralRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-request',
            template: __webpack_require__(/*! ./referral-request.component.html */ "./src/app/admin-panel/referral-request/referral-request.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ReferralRequestComponent);
    return ReferralRequestComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/reported-messages/reported-messages.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin-panel/reported-messages/reported-messages.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-panel-sidebar></app-admin-panel-sidebar>\r\n\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \"><b>Reported Converstation Logs\r\n    </b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <input type=\"search\" class=\"form-control form-control-search\" aria-label=\"Search\"\r\n                   aria-describedby=\"basic-addon1\">\r\n\r\n            <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n      <h6 id=\"header\">{{profileObj['data']['firstName']}} {{profileObj['data']['lastName']}}\r\n       </h6>\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n\r\n<div class=\"table-responsive spaces\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n    <tr>\r\n      \r\n      <th>Resource Name</th>\r\n      <th>Student Name</th>\r\n      <th>Student ID</th>\r\n      <th>Date</th>\r\n      <th>Time</th>\r\n      <th>Comments</th>\r\n      <th>Wave Type</th>\r\n      \r\n    </tr>\r\n    </thead>\r\n    <tr (click)=\"openModal(template)\">\r\n      <td>Name:</td>\r\n      <td>Mark Wood</td>\r\n      <td>160404024</td>\r\n      <td>6/13/2018</td>\r\n      <td>4:42pm</td>\r\n      <td>Null</td>\r\n      <td>Null</td>\r\n    </tr>\r\n    <tr (click)=\"openModal(template)\">\r\n      <td>Name:</td>\r\n      <td>Mark Wood</td>\r\n      <td>160404024</td>\r\n      <td>6/13/2018</td>\r\n      <td>4:42pm</td>\r\n      <td>Null</td>\r\n      <td>Null</td>\r\n    </tr>\r\n    <tr (click)=\"openModal(template)\">\r\n      <td>Name:</td>\r\n      <td>Mark Wood</td>\r\n      <td>160404024</td>\r\n      <td>6/13/2018</td>\r\n      <td>4:42pm</td>\r\n      <td>Null</td>\r\n      <td>Null</td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<br><br>\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-body\">\r\n    <div class=\"admin-border\">\r\n      <span class=\"cross\">X</span>\r\n      <p id=\"margin-border\">Responder Name:</p>\r\n      <p id=\"margin-border\">Student Name:</p>\r\n      <p id=\"margin-border\">Student ID:</p>\r\n      <p id=\"margin-border\">Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Time:</p>\r\n      <p id=\"margin-border\"> Message:</p>\r\n      <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n      <p id=\"margin-border\">Comments:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n      <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n      <p id=\"margin-border\">Waves Type:</p><br>\r\n\r\n      <button class=\"btn btn-primary pos\"> Approve</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- <div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"admin-border\">\r\n\r\n        <span class=\"cross\">X</span>\r\n        <p id=\"margin-border\">Responder Name:</p>\r\n        <p id=\"margin-border\">Student Name:</p>\r\n        <p id=\"margin-border\">Student ID:</p>\r\n        <p id=\"margin-border\">Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Time:</p>\r\n        <p id=\"margin-border\"> Message:</p>\r\n        <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n        <p id=\"margin-border\">Comments:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n        <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n        <p id=\"margin-border\">Waves Type:</p><br>\r\n\r\n        <button class=\"btn btn-primary pos\"> Approved</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"admin-border1\">\r\n        <span class=\"cross\">X</span>\r\n        <p id=\"margin-border\">Responder Name:</p>\r\n        <p id=\"margin-border\">Student Name:</p>\r\n        <p id=\"margin-border\">Student ID:</p>\r\n        <p id=\"margin-border\">Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Time:</p>\r\n        <p id=\"margin-border\"> Message:</p>\r\n        <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n        <p id=\"margin-border\">Comments:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n        <p id=\"margin-border\">\"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\"</p>\r\n        <p id=\"margin-border\">Waves Type:</p><br>\r\n        <button class=\"btn btn-primary  pos\"> Approved</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-panel/reported-messages/reported-messages.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin-panel/reported-messages/reported-messages.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReportedMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportedMessagesComponent", function() { return ReportedMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportedMessagesComponent = /** @class */ (function () {
    function ReportedMessagesComponent(modalService, ProfileServiceObj) {
        this.modalService = modalService;
        this.ProfileServiceObj = ProfileServiceObj;
    }
    ReportedMessagesComponent.prototype.ngOnInit = function () {
        // this.ProfileServiceObj.getAdminprofile().subscribe(
        //   res => {
        //     this.profileObj = res;
        //     // this.profileServiceObj.downloadImage(this.profileObj['data']['userId']).subscribe(
        //     //   res =>{
        //     //     this.createImageFromBlob(res);
        //     //   },
        //     //   err =>{}
        //     // )
        //   },
        //   err =>{}
        // );
    };
    ReportedMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reported-messages',
            template: __webpack_require__(/*! ./reported-messages.component.html */ "./src/app/admin-panel/reported-messages/reported-messages.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ReportedMessagesComponent);
    return ReportedMessagesComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/super-nav-bar/super-nav-bar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin-panel/super-nav-bar/super-nav-bar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\">\r\n  <div class=\"sidebar-user-panel\">\r\n    <div class=\"user-panel\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n\r\n          <a class=\"nav-link\">\r\n            <img [src]=\"imageToShow\" *ngIf=\"imageToShow;else other_image\" class=\"img-responsive\" alt=\"\">\r\n            <ng-template #other_image>\r\n\r\n              <span class=\"avatar_name\"><i class=\"fas fa-camera font-awesome-clr\"></i></span>\r\n\r\n            </ng-template>\r\n\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"nav-link\" routerLink=\"/super-user\" [routerLinkActive]=\"['active']\">Super User </a>\r\n  <div class=\"bottom-button1\">\r\n    <a>\r\n\r\n      <h6 id=\"li_clr\">ABC TEST</h6>\r\n\r\n      <hr class=\"beautiful-line\">\r\n      <span class=\"transparent_btn\" (click)=\"logOut()\">Sign Out</span>\r\n\r\n    </a>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-panel/super-nav-bar/super-nav-bar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin-panel/super-nav-bar/super-nav-bar.component.ts ***!
  \**********************************************************************/
/*! exports provided: SuperNavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperNavBarComponent", function() { return SuperNavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuperNavBarComponent = /** @class */ (function () {
    function SuperNavBarComponent(router) {
        this.router = router;
    }
    SuperNavBarComponent.prototype.ngOnInit = function () {
    };
    SuperNavBarComponent.prototype.logOut = function () {
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].delete('token');
        this.router.navigate(['/login']);
    };
    SuperNavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-super-nav-bar',
            template: __webpack_require__(/*! ./super-nav-bar.component.html */ "./src/app/admin-panel/super-nav-bar/super-nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SuperNavBarComponent);
    return SuperNavBarComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/super-user/super-user.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-panel/super-user/super-user.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* input[type=search]::-webkit-search-cancel-button {\r\n  -webkit-appearance: searchfield-cancel-button;\r\n} */\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: Raleway !important;\r\n}\r\n\r\nh4#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\n\r\nh6#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\n\r\nh5#text {\r\n\r\n  text-align: left !important;\r\n}\r\n\r\nh6#size {\r\n  font-size: 14px !important;\r\n  text-align: left !important;\r\n}\r\n\r\np#font-size {\r\n  font-size: large !important;\r\n}\r\n\r\na {\r\n  font-size: 14px !important;\r\n}\r\n\r\n.disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.help-block {\r\n\r\n  color: red;\r\n}\r\n\r\n.nav-bg-color {\r\n  background-color: #16baff !important;\r\n}\r\n\r\nh6#header {\r\n  font-size: 13px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.nav-link {\r\n  color: #ffffff !important;\r\n  font: Raleway !important;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n\r\n.pt-3 {\r\n  padding-top: 5rem !important;\r\n}\r\n\r\n/* .bg-light {\r\n    background-color: #ebebeb !important;\r\n} */\r\n\r\n.table {\r\n  background-color: #fff;\r\n}\r\n\r\n.spaces {\r\n  padding-left: 5%;\r\n  padding-right: 5%;\r\n}\r\n\r\n.table th {\r\n\r\n  font-size: 16px;\r\n  font-family: Raleway !important;\r\n\r\n}\r\n\r\n.table td {\r\n  font-family: Raleway !important;\r\n  font-size: 15px !important;\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.table tr {\r\n  border-top: 1px solid #a0a0a0;\r\n  border-left: 1px solid #d9d9d9;\r\n  border-right: 1px solid #d9d9d9;\r\n}\r\n\r\n/* //////////////////END/////////////////////////// */\r\n\r\n.col-md-12 {\r\n  padding: 0px;\r\n}\r\n\r\n.form-control {\r\n  border-radius: 0px !important;\r\n}\r\n\r\n.form-control-search {\r\n  width: 100% !important;\r\n  position: relative;\r\n}\r\n\r\n.check{\r\n  position: absolute;\r\n  top: 30%;\r\n  right: 55px;\r\n}\r\n\r\n@media screen and (max-width: 590px) {\r\n  .form-control-search {\r\n    width: 100% !important;\r\n  }\r\n}\r\n\r\n.avatar {\r\n  max-width: 25px;\r\n  max-height: 25px;\r\n}\r\n\r\n.form-control {\r\n\r\n  padding: 0px !important;\r\n\r\n}\r\n\r\n.input-group-text {\r\n  margin-right: 10px !important;\r\n}\r\n\r\n.form {\r\n  padding: 5px !important;\r\n  padding-left: 0;\r\n  border-radius: 23px !important;\r\n}\r\n\r\n.form-admin-std {\r\n  padding: 5px !important;\r\n  padding-left: 0;\r\n\r\n}\r\n\r\n/* css for side_bar */\r\n\r\n.nav_bar_font {\r\n  font-family: Raleway !important;\r\n  font-size: 20px;\r\n}\r\n\r\n.font-awesome-clr {\r\n  font-size: 2em;\r\n  color: #4DC4F7 !important;\r\n}\r\n\r\n.font-awesome-clr2 {\r\n  font-size: 1.3em;\r\n  color: #ffffff !important;\r\n  padding-right: 5px;\r\n}\r\n\r\n.font-awesome-feedbck {\r\n  font-size: 1.5em;\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n\r\n.font-awesome-size {\r\n  font-size: 25px;\r\n  color: #4DC4F7 !important;\r\n}\r\n\r\n.icon-size {\r\n  font-size: 25px;\r\n  color: gray !important;\r\n}\r\n\r\n.user-panel {\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\n  padding: 50px 10px 65px 10px;\r\n}\r\n\r\n.row {\r\n\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n\r\n.sidebar-userpic {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.sidebar-userpic img {\r\n  margin: 0px auto;\r\n  width: 70px;\r\n  height: 70px;\r\n  padding: 3px;\r\n  border-radius: 50% 50% 50% 50%;\r\n}\r\n\r\n.avatar_name {\r\n  background-color: aliceblue;\r\n  padding: 23% 15% 16% 15%;\r\n  border-radius: 50%;\r\n  color: gray;\r\n}\r\n\r\n.img-responsive {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.sidebar-userpic-name {\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n\r\n#sch_name_sidebar {\r\n  position: absolute;\r\n  display: inline-block;\r\n  bottom: 40px;\r\n  left: 15px;\r\n}\r\n\r\n#li_clr {\r\n  color: white !important;\r\n  font-family: Raleway !important;\r\n\r\n}\r\n\r\nhr {\r\n  background-color: #ffffff !important;\r\n}\r\n\r\nhr {\r\n  border: 0;\r\n  border-top: 1px solid #d8d8d8 !important;\r\n  margin: -15px 0;\r\n}\r\n\r\nhr.beautiful-line {\r\n  border-top: 1px solid #999;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.dot_profile_list {\r\n  right: 0px;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.dot_profile_list1 {\r\n  right: 0px;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #098cc4;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.dot_profile_list_2 {\r\n  right: 0px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #098cc4;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.dor-clr-lgblue {\r\n  background-color: #4DC4F7;\r\n}\r\n\r\n.dor-clr-green {\r\n  background-color: green;\r\n}\r\n\r\n.dor-clr-drkgrn {\r\n  background-color: darkolivegreen;\r\n}\r\n\r\n.dor-clr-gold {\r\n  background-color: goldenrod;\r\n}\r\n\r\n.dor-clr-choclt {\r\n  background-color: chocolate;\r\n}\r\n\r\n.dor-clr-red {\r\n  background-color: orangered;\r\n}\r\n\r\n.prf_li_title {\r\n  font-size: 15px;\r\n  font-family: Raleway !important;\r\n}\r\n\r\n.pf-li-h1-title {\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n}\r\n\r\n.change::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.change:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.change::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.change:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.msg-plc-size::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.msg-plc-size:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.msg-plc-size::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.msg-plc-size:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.modal_title_font {\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n  font-size: bold;\r\n}\r\n\r\n.modal-btn-clr {\r\n  color: #16baff;\r\n}\r\n\r\n.btn-close {\r\n  color: white;\r\n  background-color: #a4a4a4;\r\n  border-color: grey;\r\n}\r\n\r\n.form-control-textarea {\r\n  padding: 0px !important;\r\n  border-radius: 7px !important;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #16baff;\r\n  border-color: #16baff;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #4DC4F7;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n\r\n.btn-primary:disabled,\r\n.btn-primary[disabled] {\r\n  border-color: 2px #c9cdd1;\r\n  background-color: #fff;\r\n  color: #4DC4F7;\r\n}\r\n\r\n.btn-block-padiing {\r\n  padding-top: 10px !important;\r\n  padding-bottom: 10px !important;\r\n}\r\n\r\n.btn-margin{\r\n  margin-left:10px;\r\n  }\r\n\r\n@media only screen and (max-width:866px){\r\n    .btn-margin{\r\n      margin-left:2px !important;\r\n      }\r\n  }\r\n\r\n.col-pading {\r\n  padding-top: 100px !important;\r\n}\r\n\r\n.col-pading-conver {\r\n  padding-top: 60px !important;\r\n}\r\n\r\ni#right {\r\n  float: right !important;\r\n}\r\n\r\na#clr {\r\n  color: #2c75ff;\r\n  font-family: Raleway !important;\r\n  font-size: larger !important;\r\n  float: right !important;\r\n}\r\n\r\n.line {\r\n  border-bottom: 3px solid rgb(46, 15, 15);\r\n  padding-bottom: 30px !important;\r\n}\r\n\r\n.line2 {\r\n  border-bottom: 1px solid #d8d8d8 !important;\r\n}\r\n\r\n.line-session {\r\n  border-bottom: 1px solid #e9ecef;\r\n\r\n}\r\n\r\n.line-session2 {\r\n  border-bottom: 3px solid #d4d4d4;\r\n  padding-bottom: 30px !important;\r\n}\r\n\r\ninput[type=\"radio\"] { /* IE 9 */\r\n  -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */\r\n  transform: scale(1.5);\r\n}\r\n\r\nlabel {\r\n  color: blue;\r\n  cursor: pointer;\r\n  text-align: center !important;\r\n}\r\n\r\nlabel:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n#file_input_id {\r\n  display: none !important;\r\n}\r\n\r\nimg#prf-list-size {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n/* ///////CSS EDIT DELETE BUTTON////////// */\r\n\r\n.btn-xs {\r\n  padding: 1px 5px;\r\n  font-size: 12px;\r\n  line-height: 1.5;\r\n  border-radius: 3px;\r\n\r\n}\r\n\r\n.btn-danger {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d43f3a;\r\n\r\n}\r\n\r\n.btn-space {\r\n  margin-right: 5px;\r\n}\r\n\r\n/* ////////////MODAL POP UP  ///////////// */\r\n\r\n.btn-modal {\r\n  margin-left: 10px;\r\n}\r\n\r\n.close {\r\n  color: grey;\r\n}\r\n\r\n/* Let's get this party started */\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px !important;\r\n  height: 5px !important;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px #dee2e6;\r\n  border-radius: 5px;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n  background: #dee2e6;\r\n  -webkit-box-shadow: inset 0 0 6px #dee2e6;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n  background: #dee2e6;\r\n}\r\n\r\n.alert {\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin-panel/super-user/super-user.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-panel/super-user/super-user.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner></ng4-loading-spinner>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div *ngIf=\"submitSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>School</strong> Successsfully Added!\r\n          </div>\r\n\r\n      <div *ngIf=\"submitError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <strong>Error!</strong> Email already exist\r\n      </div>\r\n\r\n      <div *ngIf=\"schoolSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <strong>School</strong> Successsfully Updated!\r\n        </div>\r\n\r\n      <div *ngIf=\"schoolError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <strong>Error!</strong> School already exist.\r\n      </div>\r\n\r\n      <div *ngIf=\"deleteSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n          <strong>School</strong> Successsfully Deleted!\r\n        </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n<div class=\"row spaces\">\r\n  <div class=\"col-md-12\">\r\n   \r\n\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"33px\">\r\n      <p>&nbsp;</p>\r\n      <h2 class=\"pf-li-h1-title \"><b>Waves Super User</b></h2>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n        </ul>\r\n\r\n        <button type=\"button\" (click)=\"logOut()\" class=\"btn btn-primary btn-sm \">Sign Out</button>\r\n\r\n      </div>\r\n    </nav>\r\n  </div>\r\n</div>\r\n<hr><br>\r\n\r\n\r\n\r\n<div class=\"row spaces\">\r\n  <div class=\"col-md-12\">\r\n     \r\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n\r\n     <!-- <form class=\"form-inline form-control-search\">  -->\r\n        <div class=\"input-group form-control-search\">\r\n          <div class=\"input-group-prepend form-control-search\">\r\n            <input type=\"search\" \r\n            class=\"form-control form-control-search w3-left-align \" aria-label=\"Search\"\r\n                   aria-describedby=\"basic-addon1\" [(ngModel)]=\"searchInput\" >\r\n\r\n            <button class=\"input-group-text\" (click)=\"searchSchool()\" id=\"basic-addon1\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n          </button>\r\n\r\n          <div *ngIf=\"searchInput;else other_check\">\r\n          <i class=\"fas fa-times check\" (click)=\"searchClose()\"></i>\r\n        </div>\r\n          <ng-template #other_check>\r\n              <i class=\"fas fa-times check\" style=\"display: none;\"></i>\r\n          </ng-template>\r\n        \r\n          </div>\r\n\r\n        </div>\r\n      <!-- </form> -->\r\n      <p>&nbsp;</p>\r\n      <div class=\"form-control-search\"></div>\r\n\r\n      <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm w3-right-align\">ADD SCHOOL\r\n      </button>\r\n    </nav>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"table-responsive spaces\">\r\n  <table class=\"table table-striped table-bordered\">\r\n    <thead>\r\n    <tr>\r\n\r\n      <th class=\"th-font\">School Name</th>\r\n      <th class=\"th-font\">Access Code</th>\r\n      <th class=\"th-font\">Admin Email</th>\r\n      <th class=\"th-font\">Admin First Name</th>\r\n      <th class=\"th-font\">Admin Last Name</th>\r\n      <th>Action</th>\r\n\r\n    </tr>\r\n    </thead>\r\n    <tr *ngIf=\"schoolObj.data.result.length < 1\">\r\n      <td colspan = \"6\"> <p style=\"text-align:center;\">No Data Found </p></td>\r\n    </tr>\r\n    <tr *ngFor=\"let schoolList of schoolObj.data.result\">\r\n      <td>{{schoolList.schoolName}}</td>\r\n      <td>{{schoolList.accessCode}}</td>\r\n      <td>{{schoolList.username}}</td>\r\n      <td>{{schoolList.firstName}}</td>\r\n      <td>{{schoolList.lastName}}</td>\r\n      <td align=\"center\">\r\n        <p data-placement=\"top\" title=\"Edit\">\r\n          <button class=\"btn btn-primary btn-xs\" data-title=\"Edit\"\r\n                  (click)=\"editSchool(template2 , schoolList.schoolId)\"\r\n                  data-target=\"#edit\"><span class=\"fa fa-edit\"></span></button>\r\n          <button class=\"btn btn-danger btn-xs btn-margin\"  data-title=\"Delete\"\r\n                  (click)=\"deleteSchool(template3,schoolList.schoolId)\" data-target=\"#delete\"><span\r\n            class=\"fa fa-trash\"></span></button>\r\n        </p>\r\n      </td>\r\n\r\n    </tr>\r\n\r\n  </table>\r\n</div>\r\n\r\n<div class=\"spaces w3-right-align\" *ngIf=\"collectionSize >10\">\r\n  <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"currentPage\" size=\"sm\"\r\n                  [pageSize]=\"10\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"\r\n                  (pageChange)=\"vac_pagination(page)\"></ngb-pagination>\r\n\r\n\r\n</div>\r\n\r\n\r\n<ng-template #template>\r\n\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Add School</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <form (submit)=\"onSubmitSchool(f)\" #f=\"ngForm\">\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"schoolname\" placeholder=\"School Name*\" ngModel required\r\n               name=\"schoolName\" schoolName\r\n               #schoolName=\"ngModel\">\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"schoolName.touched && !schoolName.valid\">Please enter a School Name</span>\r\n\r\n      </div>\r\n     \r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" class=\"w3-input change\" id=\"email\" placeholder=\"School Admin Email*\" ngModel required\r\n               name=\"email\" email\r\n               #email=\"ngModel\" required>\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"!email.valid && email.touched\">Please enter a valid Email Address</span>\r\n        <!-- <span class=\"help-block\"  >Please enter a valid School Admin Id</span> -->\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"schoolAdminfirstName\" placeholder=\"School Admin First Name*\"\r\n               ngModel required name=\"schoolAdminfirstName\" schoolAdminfirstName\r\n               #schoolAdminfirstName=\"ngModel\">\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"schoolAdminfirstName.touched && !schoolAdminfirstName.valid\">Please enter a  School Admin first Name</span>\r\n        <!-- <span class=\"help-block\"  >Please enter a valid School Admin First Name</span> -->\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"w3-input change\" id=\"schooladminlastname\" placeholder=\"School Admin Last Name\" ngModel\r\n               required name=\"schoolAdminlastName\" schoolAdminlastName\r\n               #schoolAdminlastName=\"ngModel\">\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"schoolAdminlastName.touched && !schoolAdminlastName.valid\">Please enter a  School Admin Last Name</span>\r\n        <!-- <span class=\"help-block\"  >Please enter a valid School Admin Last Name</span> -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">\r\n        Close\r\n      </button>\r\n      <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n              class=\"btn btn-primary modal-btn-clr\" (click)=\"modalRef.hide()\">Submit\r\n      </button>\r\n    </div>\r\n  </form>\r\n\r\n</ng-template>\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Edit School</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"schoolname\" placeholder=\"School Name\" ngModel required\r\n             name=\"schoolName\"\r\n             [(ngModel)]=\"schoolName\"\r\n      >\r\n      <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"schoolName.touched && !schoolName.valid\">Please enter a School Name</span>\r\n      <!-- <span class=\"help-block\" >Please enter a valid School Name</span> -->\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"email\" placeholder=\"School Admin Email\" ngModel required\r\n             name=\"username\" \r\n             [(ngModel)]=\"username\" readonly>\r\n\r\n      <!-- <span class=\"help-block\"  >Please enter a valid School Admin Id</span> -->\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"firstname\" placeholder=\"School Admin First Name\" ngModel\r\n             required name=\"firstName\" \r\n             [(ngModel)]=\"firstName\">\r\n\r\n      <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"firstName.touched && !firstName.valid\">Please enter a  School Admin first Name</span>\r\n      <!-- <span class=\"help-block\"  >Please enter a valid School Admin First Name</span> -->\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"w3-input change\" id=\"lastname\" placeholder=\"School Admin Last Name\" ngModel\r\n             required name=\"lastName\" lastName\r\n             [(ngModel)]=\"lastName\">\r\n\r\n      <span style=\"color: red;\" class=\"help-block\"\r\n            *ngIf=\"lastName.touched && !lastName.valid\">Please enter a  School Admin Last Name</span>\r\n      <!-- <span class=\"help-block\"  >Please enter a valid School Admin Last Name</span> -->\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">\r\n      Close\r\n    </button>\r\n    <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n            class=\"btn btn-primary modal-btn-clr\" (click)=\"submitEdit();modalRef.hide()\">Update\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<ng-template #template3>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left modal_title_font\">Are you sure to delete School ?</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body\">\r\n\r\n\r\n    <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    <button type=\"submit\" (click)=\"delete()\"\r\n            class=\"btn btn-primary modal-btn-clr btn-modal\" (click)=\"modalRef.hide()\">Delete\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/super-user/super-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-panel/super-user/super-user.component.ts ***!
  \****************************************************************/
/*! exports provided: SuperUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperUserComponent", function() { return SuperUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admin_panel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../admin-panel.service */ "./src/app/admin-panel/admin-panel.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuperUserComponent = /** @class */ (function () {
    function SuperUserComponent(router, modalService, profileServiceObj, spinnerService) {
        this.router = router;
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.spinnerService = spinnerService;
        this.schoolObjSearch = null;
        this.addSchoolObj = null;
        this.schoolObj = { data: { result: [] } };
        this.submitError = null;
        this.submitSuccess = null;
        this.schoolError = null;
        this.schoolSuccess = null;
        this.deleteSuccess = null;
        this.currentPage = 1;
        this.pageSize = 15;
        this.searchInput = "";
    }
    SuperUserComponent.prototype.loadSchools = function () {
        var _this = this;
        this.spinnerService.show();
        this.profileServiceObj.getSchoollist().subscribe(function (res) {
            _this.spinnerService.hide();
            _this.schoolObjOrig = res;
            _this.collectionSize = _this.schoolObjOrig['data']['result'].length;
            _this.schoolObj['data']['result'] = _this.schoolObjOrig['data']['result'].slice(0, 10);
        }, function (err) {
            _this.spinnerService.hide();
        });
    };
    SuperUserComponent.prototype.ngOnInit = function () {
        this.loadSchools();
    };
    SuperUserComponent.prototype.vac_pagination = function (page) {
        console.log((this.currentPage - 1) * 10, (this.currentPage) * 10);
        this.schoolObj['data']['result'] = this.schoolObjOrig['data']['result'].slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
    };
    SuperUserComponent.prototype.onSubmitSchool = function (form) {
        var _this = this;
        this.profileServiceObj.createSchool(form.value.email, form.value.schoolName, form.value.schoolAdminfirstName, form.value.schoolAdminlastName).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                var errorname = "123";
                if (res['data']['errors'].schoolName != undefined) {
                    errorname = res['data']['errors'].schoolName;
                    _this.addSchoolObj = res;
                    _this.submitSuccess = null;
                    _this.schoolError = res;
                    window.setTimeout(function () {
                        _this.schoolError = null;
                    }, 3000);
                    _this.loadSchools();
                }
                if (res['data']['errors'].username != undefined) {
                    errorname = res['data']['errors'].username;
                    _this.addSchoolObj = res;
                    _this.submitSuccess = null;
                    _this.submitError = res;
                    window.setTimeout(function () {
                        _this.submitError = null;
                    }, 3000);
                    _this.loadSchools();
                }
                console.log('-- ' + errorname);
            }
            else {
                _this.addSchoolObj = res;
                _this.submitSuccess = res;
                _this.submitError = null;
                window.setTimeout(function () {
                    _this.submitSuccess = null;
                }, 3000);
                _this.loadSchools();
            }
        }, function (err) {
            _this.submitError = err;
            _this.submitSuccess = null;
            window.setTimeout(function () {
                _this.submitError = null;
            }, 3000);
        });
    };
    SuperUserComponent.prototype.searchSchool = function () {
        var _this = this;
        if (this.searchInput.length > 0) {
            this.spinnerService.show();
            this.profileServiceObj.searchSchool(this.searchInput).subscribe(function (res) {
                _this.schoolObjSearch = res;
                _this.collectionSize = _this.schoolObjSearch['data']['result'].length;
                _this.schoolObj['data']['result'] = _this.schoolObjSearch['data']['result'].slice(0, 10);
                _this.spinnerService.hide();
            }, function (err) {
                _this.spinnerService.hide();
            });
        }
        else {
            this.loadSchools();
        }
    };
    SuperUserComponent.prototype.searchClose = function () {
        if (this.schoolObjSearch == null) {
            this.searchInput = "";
        }
        else {
            this.searchInput = "";
            this.loadSchools();
        }
    };
    SuperUserComponent.prototype.submitEdit = function () {
        var _this = this;
        this.profileServiceObj.updateSchoollist(this.schoolName, this.firstName, this.lastName, this.schoolId).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                var errorname = "123";
                if (res['data']['errors'].schoolName != undefined) {
                    errorname = res['data']['errors'].schoolName;
                    _this.schoolError = res;
                    window.setTimeout(function () {
                        _this.schoolError = null;
                    }, 3000);
                    _this.loadSchools();
                    _this.schoolSuccess = null;
                }
            }
            else {
                _this.updateSchoolobj = res;
                _this.schoolSuccess = res;
                _this.schoolError = null;
                window.setTimeout(function () {
                    _this.schoolSuccess = null;
                }, 3000);
                _this.loadSchools();
                var index = _this.schoolObj['data']['result'].findIndex(function (i) { return i.schoolId == _this.schoolId; });
                _this.schoolObj['data']['result'][index]['schoolName'] = _this.schoolName;
                _this.schoolObj['data']['result'][index]['username'] = _this.username;
                _this.schoolObj['data']['result'][index]['firstName'] = _this.firstName;
                _this.schoolObj['data']['result'][index]['lastName'] = _this.lastName;
            }
        }, function (err) {
            _this.schoolError = err;
            _this.schoolSuccess = null;
            window.setTimeout(function () {
                _this.schoolError = null;
            }, 3000);
        });
    };
    SuperUserComponent.prototype.editSchool = function (template, schoolId) {
        var sch = this.schoolObj['data']['result'].find(function (i) { return i.schoolId == schoolId; });
        this.schoolId = schoolId;
        this.schoolName = sch.schoolName;
        this.username = sch.username;
        this.firstName = sch.firstName;
        this.lastName = sch.lastName;
        this.modalRef = this.modalService.show(template);
    };
    SuperUserComponent.prototype.deleteSchool = function (template, schoolId) {
        var _this = this;
        var sch = this.schoolObj['data']['result'].find(function (i) { return i.schoolId == _this.schoolId; });
        this.schoolId = schoolId;
        this.modalRef = this.modalService.show(template);
    };
    SuperUserComponent.prototype.delete = function () {
        var _this = this;
        this.profileServiceObj.deleteSchoollist(this.schoolId).subscribe(function (res) {
            _this.delSchoolbj = res;
            _this.profileServiceObj.getSchoollist().subscribe(function (res) {
                _this.schoolObjOrig = res;
                _this.deleteSuccess = res;
                window.setTimeout(function () {
                    _this.deleteSuccess = null;
                }, 1000);
                _this.collectionSize = _this.schoolObjOrig['data']['result'].length;
                _this.schoolObj['data']['result'] = _this.schoolObjOrig['data']['result'].slice((_this.currentPage - 1) * 10, (_this.currentPage) * 10);
            }, function (err) {
                _this.deleteSuccess = null;
            });
        }, function (err) {
        });
    };
    SuperUserComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    SuperUserComponent.prototype.logOut = function () {
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('token');
        this.router.navigate(['/login']);
    };
    SuperUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-super-user',
            template: __webpack_require__(/*! ./super-user.component.html */ "./src/app/admin-panel/super-user/super-user.component.html"),
            styles: [__webpack_require__(/*! ./super-user.component.css */ "./src/app/admin-panel/super-user/super-user.component.css")],
            providers: [_admin_panel_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _admin_panel_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"]])
    ], SuperUserComponent);
    return SuperUserComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/upload-crisis-support/upload-crisis-support.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-crisis-support/upload-crisis-support.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-admin-panel-sidebar></app-admin-panel-sidebar> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\CrisisSupport_AdminPanel.png\" width=\"15%\" height=\"15%;\"\r\n           class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD CRISIS SUPPORT RESOURCES</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Crisis Resource Spreadsheet as a CSV\r\n        file by clicking below</p>\r\n      <!-- <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">Upload Your Students</button>                     -->\r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\"\r\n             style=\"width: 33%; height: 9%; background-color: #fff; color: #16baff; font-size: 1.2vw;\">9/34 Crisis\r\n        Resourse have been uploaded</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/upload-crisis-support/upload-crisis-support.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-crisis-support/upload-crisis-support.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UploadCrisisSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadCrisisSupportComponent", function() { return UploadCrisisSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadCrisisSupportComponent = /** @class */ (function () {
    function UploadCrisisSupportComponent() {
    }
    UploadCrisisSupportComponent.prototype.ngOnInit = function () {
    };
    UploadCrisisSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-crisis-support',
            template: __webpack_require__(/*! ./upload-crisis-support.component.html */ "./src/app/admin-panel/upload-crisis-support/upload-crisis-support.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadCrisisSupportComponent);
    return UploadCrisisSupportComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/upload-import-responder/upload-import-responder.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-import-responder/upload-import-responder.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-admin-panel-sidebar></app-admin-panel-sidebar> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\Responders_AdminPanel.png\" width=\"30%\" height=\"30%px;\"\r\n           class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD RESPONDERS</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please download the Waves Responder Spreadsheet and provide\r\n        your student information</p>\r\n      <!-- <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">7/18 have been uploaded</button>                         -->\r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\"\r\n             style=\"background-color: #fff; color: #16baff; font-size: 1.2vw;\">600/1200 are uploaded</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/upload-import-responder/upload-import-responder.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-import-responder/upload-import-responder.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UploadImportResponderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImportResponderComponent", function() { return UploadImportResponderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadImportResponderComponent = /** @class */ (function () {
    function UploadImportResponderComponent() {
    }
    UploadImportResponderComponent.prototype.ngOnInit = function () {
    };
    UploadImportResponderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-import-responder',
            template: __webpack_require__(/*! ./upload-import-responder.component.html */ "./src/app/admin-panel/upload-import-responder/upload-import-responder.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadImportResponderComponent);
    return UploadImportResponderComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/upload-import-student/upload-import-student.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-import-student/upload-import-student.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-admin-panel-sidebar></app-admin-panel-sidebar> -->\r\n<ng4-loading-spinner></ng4-loading-spinner>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\Students_AdminPanel.png\" width=\"20%\" height=\"20%px;\" class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD STUDENTS</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Student Spreadsheet as a CSV file by\r\n        clicking below</p>\r\n      <!-- <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">Upload Your Students</button>                     -->\r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\"\r\n             style=\"background-color: #fff; color: #16baff; font-size: 1.2vw;\">600/1200 are uploaded</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/upload-import-student/upload-import-student.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-import-student/upload-import-student.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UploadImportStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImportStudentComponent", function() { return UploadImportStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadImportStudentComponent = /** @class */ (function () {
    function UploadImportStudentComponent(spinnerService) {
        this.spinnerService = spinnerService;
    }
    UploadImportStudentComponent.prototype.ngOnInit = function () {
    };
    UploadImportStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-import-student',
            template: __webpack_require__(/*! ./upload-import-student.component.html */ "./src/app/admin-panel/upload-import-student/upload-import-student.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_1__["Ng4LoadingSpinnerService"]])
    ], UploadImportStudentComponent);
    return UploadImportStudentComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/upload-local-resources/upload-local-resources.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-local-resources/upload-local-resources.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-admin-panel-sidebar></app-admin-panel-sidebar> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\LocalResources_AdminPanel.png\" width=\"20%\" height=\"20%px;\"\r\n           class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD LOCAL RESOURCES</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Local Resources Spreadsheet as a CSV\r\n        file by clicking below</p>\r\n      <!-- <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">Upload Your Students</button>                     -->\r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\"\r\n             style=\"width: 35%; height: 9%; background-color: #fff; color: #16baff; font-size: 1.2vw;\">14/44 Local\r\n        Resources have been Uploaded</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/upload-local-resources/upload-local-resources.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-panel/upload-local-resources/upload-local-resources.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UploadLocalResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadLocalResourcesComponent", function() { return UploadLocalResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadLocalResourcesComponent = /** @class */ (function () {
    function UploadLocalResourcesComponent() {
    }
    UploadLocalResourcesComponent.prototype.ngOnInit = function () {
    };
    UploadLocalResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-local-resources',
            template: __webpack_require__(/*! ./upload-local-resources.component.html */ "./src/app/admin-panel/upload-local-resources/upload-local-resources.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadLocalResourcesComponent);
    return UploadLocalResourcesComponent;
}());



/***/ }),

/***/ "./src/app/admin-panel/upload-responders/upload-responders.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin-panel/upload-responders/upload-responders.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-admin-panel-sidebar></app-admin-panel-sidebar> -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 import-content\">\r\n      <img src=\"\\waves\\assets\\images\\Responders_AdminPanel2.png\" width=\"30%\" height=\"30%px;\"\r\n           class=\"center-block img-responsive\">\r\n      <h1 class=\"text-center\" style=\"font-size:2vw;\"><b>ADD RESPONDERS</b></h1>\r\n      <p class=\"text-center lead\" style=\"font-size:1.5vw;\">Please upload the Waves Responder Spreadsheet as a CSV file\r\n        by clicking below</p>\r\n      <!-- <button type=\"button\" class=\"btn btn-primary center-block\" style=\"padding: 0.3% 5% 0.3% 5%;border-radius: 0px;\">Upload Your Students</button>                     -->\r\n      <label class=\"btn btn-primary center-block\" id=\"upload-btn\" for=\"file_input_id\">Upload Responders</label>\r\n      <input Type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\" style=\"display: none\" accept=\".csv\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin-panel/upload-responders/upload-responders.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin-panel/upload-responders/upload-responders.component.ts ***!
  \******************************************************************************/
/*! exports provided: UploadRespondersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRespondersComponent", function() { return UploadRespondersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadRespondersComponent = /** @class */ (function () {
    function UploadRespondersComponent() {
    }
    UploadRespondersComponent.prototype.ngOnInit = function () {
    };
    UploadRespondersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-responders',
            template: __webpack_require__(/*! ./upload-responders.component.html */ "./src/app/admin-panel/upload-responders/upload-responders.component.html"),
            styles: [__webpack_require__(/*! ./../admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadRespondersComponent);
    return UploadRespondersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/profile/profile.module.ts");
/* harmony import */ var _responder_profile_responder_profile_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./responder-profile/responder-profile.module */ "./src/app/responder-profile/responder-profile.module.ts");
/* harmony import */ var _admin_panel_admin_panel_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-panel/admin-panel.module */ "./src/app/admin-panel/admin-panel.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
            ],
            imports: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routes"],
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_8__["ProfileModule"],
                _responder_profile_responder_profile_module__WEBPACK_IMPORTED_MODULE_9__["ResponderProfileModule"],
                _admin_panel_admin_panel_module__WEBPACK_IMPORTED_MODULE_10__["AdminPanelModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: router, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_guards/index */ "./src/app/_guards/index.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
/* harmony import */ var _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile-list/profile-list.component */ "./src/app/profile/profile-list/profile-list.component.ts");
/* harmony import */ var _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile-detail/profile-detail.component */ "./src/app/profile/profile-detail/profile-detail.component.ts");
/* harmony import */ var _profile_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/feedback/feedback.component */ "./src/app/profile/feedback/feedback.component.ts");
/* harmony import */ var _profile_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/conversation/conversation.component */ "./src/app/profile/conversation/conversation.component.ts");
/* harmony import */ var _profile_messenger_messenger_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/messenger/messenger.component */ "./src/app/profile/messenger/messenger.component.ts");
/* harmony import */ var _profile_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/sessions/sessions.component */ "./src/app/profile/sessions/sessions.component.ts");
/* harmony import */ var _profile_local_resources_local_resources_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/local-resources/local-resources.component */ "./src/app/profile/local-resources/local-resources.component.ts");
/* harmony import */ var _profile_crisis_support_crisis_support_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/crisis-support/crisis-support.component */ "./src/app/profile/crisis-support/crisis-support.component.ts");
/* harmony import */ var _profile_leaving_message_leaving_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/leaving-message/leaving-message.component */ "./src/app/profile/leaving-message/leaving-message.component.ts");
/* harmony import */ var _profile_profile_mass_messenger_profile_mass_messenger_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/profile-mass-messenger/profile-mass-messenger.component */ "./src/app/profile/profile-mass-messenger/profile-mass-messenger.component.ts");
/* harmony import */ var _profile_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/privacy/privacy.component */ "./src/app/profile/privacy/privacy.component.ts");
/* harmony import */ var _profile_terms_terms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/terms/terms.component */ "./src/app/profile/terms/terms.component.ts");
/* harmony import */ var _responder_profile_responder_profile_list_responder_profile_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./responder-profile/responder-profile-list/responder-profile-list.component */ "./src/app/responder-profile/responder-profile-list/responder-profile-list.component.ts");
/* harmony import */ var _responder_profile_responder_profile_detail_responder_profile_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./responder-profile/responder-profile-detail/responder-profile-detail.component */ "./src/app/responder-profile/responder-profile-detail/responder-profile-detail.component.ts");
/* harmony import */ var _responder_profile_responder_feedback_responder_feedback_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./responder-profile/responder-feedback/responder-feedback.component */ "./src/app/responder-profile/responder-feedback/responder-feedback.component.ts");
/* harmony import */ var _responder_profile_responder_messenger_responder_messenger_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./responder-profile/responder-messenger/responder-messenger.component */ "./src/app/responder-profile/responder-messenger/responder-messenger.component.ts");
/* harmony import */ var _responder_profile_responder_sessions_responder_sessions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./responder-profile/responder-sessions/responder-sessions.component */ "./src/app/responder-profile/responder-sessions/responder-sessions.component.ts");
/* harmony import */ var _responder_profile_responder_local_resources_responder_local_resources_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./responder-profile/responder-local-resources/responder-local-resources.component */ "./src/app/responder-profile/responder-local-resources/responder-local-resources.component.ts");
/* harmony import */ var _responder_profile_responder_crisis_support_responder_crisis_support_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./responder-profile/responder-crisis-support/responder-crisis-support.component */ "./src/app/responder-profile/responder-crisis-support/responder-crisis-support.component.ts");
/* harmony import */ var _responder_profile_responder_privacy_responder_privacy_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./responder-profile/responder-privacy/responder-privacy.component */ "./src/app/responder-profile/responder-privacy/responder-privacy.component.ts");
/* harmony import */ var _responder_profile_responder_terms_responder_terms_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./responder-profile/responder-terms/responder-terms.component */ "./src/app/responder-profile/responder-terms/responder-terms.component.ts");
/* harmony import */ var _responder_profile_mass_messenger_mass_messenger_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./responder-profile/mass-messenger/mass-messenger.component */ "./src/app/responder-profile/mass-messenger/mass-messenger.component.ts");
/* harmony import */ var _admin_panel_my_student_my_student_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin-panel/my-student/my-student.component */ "./src/app/admin-panel/my-student/my-student.component.ts");
/* harmony import */ var _admin_panel_my_responder_my_responder_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin-panel/my-responder/my-responder.component */ "./src/app/admin-panel/my-responder/my-responder.component.ts");
/* harmony import */ var _admin_panel_admin_local_resources_admin_local_resources_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./admin-panel/admin-local-resources/admin-local-resources.component */ "./src/app/admin-panel/admin-local-resources/admin-local-resources.component.ts");
/* harmony import */ var _admin_panel_admin_crisis_support_admin_crisis_support_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin-panel/admin-crisis-support/admin-crisis-support.component */ "./src/app/admin-panel/admin-crisis-support/admin-crisis-support.component.ts");
/* harmony import */ var _admin_panel_reported_messages_reported_messages_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./admin-panel/reported-messages/reported-messages.component */ "./src/app/admin-panel/reported-messages/reported-messages.component.ts");
/* harmony import */ var _admin_panel_referral_request_referral_request_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin-panel/referral-request/referral-request.component */ "./src/app/admin-panel/referral-request/referral-request.component.ts");
/* harmony import */ var _admin_panel_super_user_super_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin-panel/super-user/super-user.component */ "./src/app/admin-panel/super-user/super-user.component.ts");
/* harmony import */ var _admin_panel_import_student_import_student_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./admin-panel/import-student/import-student.component */ "./src/app/admin-panel/import-student/import-student.component.ts");
/* harmony import */ var _admin_panel_import_crisis_support_import_crisis_support_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin-panel/import-crisis-support/import-crisis-support.component */ "./src/app/admin-panel/import-crisis-support/import-crisis-support.component.ts");
/* harmony import */ var _admin_panel_download_import_student_download_import_student_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin-panel/download-import-student/download-import-student.component */ "./src/app/admin-panel/download-import-student/download-import-student.component.ts");
/* harmony import */ var _admin_panel_upload_import_student_upload_import_student_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin-panel/upload-import-student/upload-import-student.component */ "./src/app/admin-panel/upload-import-student/upload-import-student.component.ts");
/* harmony import */ var _admin_panel_import_responder_import_responder_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin-panel/import-responder/import-responder.component */ "./src/app/admin-panel/import-responder/import-responder.component.ts");
/* harmony import */ var _admin_panel_upload_responders_upload_responders_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin-panel/upload-responders/upload-responders.component */ "./src/app/admin-panel/upload-responders/upload-responders.component.ts");
/* harmony import */ var _admin_panel_upload_import_responder_upload_import_responder_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin-panel/upload-import-responder/upload-import-responder.component */ "./src/app/admin-panel/upload-import-responder/upload-import-responder.component.ts");
/* harmony import */ var _admin_panel_import_local_resources_import_local_resources_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin-panel/import-local-resources/import-local-resources.component */ "./src/app/admin-panel/import-local-resources/import-local-resources.component.ts");
/* harmony import */ var _admin_panel_download_local_resources_download_local_resources_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./admin-panel/download-local-resources/download-local-resources.component */ "./src/app/admin-panel/download-local-resources/download-local-resources.component.ts");
/* harmony import */ var _admin_panel_upload_local_resources_upload_local_resources_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin-panel/upload-local-resources/upload-local-resources.component */ "./src/app/admin-panel/upload-local-resources/upload-local-resources.component.ts");
/* harmony import */ var _admin_panel_download_crisis_support_download_crisis_support_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin-panel/download-crisis-support/download-crisis-support.component */ "./src/app/admin-panel/download-crisis-support/download-crisis-support.component.ts");
/* harmony import */ var _admin_panel_upload_crisis_support_upload_crisis_support_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin-panel/upload-crisis-support/upload-crisis-support.component */ "./src/app/admin-panel/upload-crisis-support/upload-crisis-support.component.ts");
/* harmony import */ var _admin_panel_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin-panel/analytics/analytics.component */ "./src/app/admin-panel/analytics/analytics.component.ts");
/* harmony import */ var _admin_panel_admin_update_profile_admin_update_profile_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./admin-panel/admin-update-profile/admin-update-profile.component */ "./src/app/admin-panel/admin-update-profile/admin-update-profile.component.ts");

















































var router = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'signup', component: _auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'resetPassword/:userId/:token', component: _auth_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordComponent"] },
    { path: 'profile', component: _profile_profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_6__["ProfileListComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'profile-detail', component: _profile_profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'feedback', component: _profile_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'conversation', component: _profile_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_9__["ConversationComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'leaving-message', component: _profile_leaving_message_leaving_message_component__WEBPACK_IMPORTED_MODULE_14__["LeavingMessageComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'messenger', component: _profile_messenger_messenger_component__WEBPACK_IMPORTED_MODULE_10__["MessengerComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'session', component: _profile_sessions_sessions_component__WEBPACK_IMPORTED_MODULE_11__["SessionsComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'local-resources', component: _profile_local_resources_local_resources_component__WEBPACK_IMPORTED_MODULE_12__["LocalResourcesComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'crisis-support', component: _profile_crisis_support_crisis_support_component__WEBPACK_IMPORTED_MODULE_13__["CrisisSupportComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'mass-messages', component: _profile_profile_mass_messenger_profile_mass_messenger_component__WEBPACK_IMPORTED_MODULE_15__["ProfileMassMessengerComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'privacy', component: _profile_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_16__["PrivacyComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'terms', component: _profile_terms_terms_component__WEBPACK_IMPORTED_MODULE_17__["TermsComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-profile', component: _responder_profile_responder_profile_list_responder_profile_list_component__WEBPACK_IMPORTED_MODULE_18__["ResponderProfileListComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-profile-detail', component: _responder_profile_responder_profile_detail_responder_profile_detail_component__WEBPACK_IMPORTED_MODULE_19__["ResponderProfileDetailComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-feedback', component: _responder_profile_responder_feedback_responder_feedback_component__WEBPACK_IMPORTED_MODULE_20__["ResponderFeedbackComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-messenger', component: _responder_profile_responder_messenger_responder_messenger_component__WEBPACK_IMPORTED_MODULE_21__["ResponderMessengerComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-session', component: _responder_profile_responder_sessions_responder_sessions_component__WEBPACK_IMPORTED_MODULE_22__["ResponderSessionsComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-local-resource', component: _responder_profile_responder_local_resources_responder_local_resources_component__WEBPACK_IMPORTED_MODULE_23__["ResponderLocalResourcesComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-crisis-support', component: _responder_profile_responder_crisis_support_responder_crisis_support_component__WEBPACK_IMPORTED_MODULE_24__["ResponderCrisisSupportComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'mass-messenger', component: _responder_profile_mass_messenger_mass_messenger_component__WEBPACK_IMPORTED_MODULE_27__["MassMessengerComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-privacy', component: _responder_profile_responder_privacy_responder_privacy_component__WEBPACK_IMPORTED_MODULE_25__["ResponderPrivacyComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'responder-terms', component: _responder_profile_responder_terms_responder_terms_component__WEBPACK_IMPORTED_MODULE_26__["ResponderTermsComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'admin-my-student', component: _admin_panel_my_student_my_student_component__WEBPACK_IMPORTED_MODULE_28__["MyStudentComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'admin-my-responder', component: _admin_panel_my_responder_my_responder_component__WEBPACK_IMPORTED_MODULE_29__["MyResponderComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'admin-local-resources', component: _admin_panel_admin_local_resources_admin_local_resources_component__WEBPACK_IMPORTED_MODULE_30__["AdminLocalResourcesComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'admin-crisis-support', component: _admin_panel_admin_crisis_support_admin_crisis_support_component__WEBPACK_IMPORTED_MODULE_31__["AdminCrisisSupportComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'reported-messages', component: _admin_panel_reported_messages_reported_messages_component__WEBPACK_IMPORTED_MODULE_32__["ReportedMessagesComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'referral-request', component: _admin_panel_referral_request_referral_request_component__WEBPACK_IMPORTED_MODULE_33__["ReferralRequestComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'super-user', component: _admin_panel_super_user_super_user_component__WEBPACK_IMPORTED_MODULE_34__["SuperUserComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'import-student', component: _admin_panel_import_student_import_student_component__WEBPACK_IMPORTED_MODULE_35__["ImportStudentComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'download-import-student', component: _admin_panel_download_import_student_download_import_student_component__WEBPACK_IMPORTED_MODULE_37__["DownloadImportStudentComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'upload-import-student', component: _admin_panel_upload_import_student_upload_import_student_component__WEBPACK_IMPORTED_MODULE_38__["UploadImportStudentComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'import-responder', component: _admin_panel_import_responder_import_responder_component__WEBPACK_IMPORTED_MODULE_39__["ImportResponderComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'import-crisis-support', component: _admin_panel_import_crisis_support_import_crisis_support_component__WEBPACK_IMPORTED_MODULE_36__["ImportCrisisSupportComponent"] },
    { path: 'upload-responders', component: _admin_panel_upload_responders_upload_responders_component__WEBPACK_IMPORTED_MODULE_40__["UploadRespondersComponent"] },
    { path: 'upload-import-responder', component: _admin_panel_upload_import_responder_upload_import_responder_component__WEBPACK_IMPORTED_MODULE_41__["UploadImportResponderComponent"] },
    { path: 'import-local-resources', component: _admin_panel_import_local_resources_import_local_resources_component__WEBPACK_IMPORTED_MODULE_42__["ImportLocalResourcesComponent"] },
    { path: 'download-local-resources', component: _admin_panel_download_local_resources_download_local_resources_component__WEBPACK_IMPORTED_MODULE_43__["DownloadLocalResourcesComponent"] },
    { path: 'upload-local-resources', component: _admin_panel_upload_local_resources_upload_local_resources_component__WEBPACK_IMPORTED_MODULE_44__["UploadLocalResourcesComponent"] },
    { path: 'download-crisis-support', component: _admin_panel_download_crisis_support_download_crisis_support_component__WEBPACK_IMPORTED_MODULE_45__["DownloadCrisisSupportComponent"] },
    { path: 'upload-crisis-support', component: _admin_panel_upload_crisis_support_upload_crisis_support_component__WEBPACK_IMPORTED_MODULE_46__["UploadCrisisSupportComponent"] },
    { path: 'analytics', component: _admin_panel_analytics_analytics_component__WEBPACK_IMPORTED_MODULE_47__["AnalyticsComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'update-profile', component: _admin_panel_admin_update_profile_admin_update_profile_component__WEBPACK_IMPORTED_MODULE_48__["AdminUpdateProfileComponent"], canActivate: [_guards_index__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router, { useHash: true });


/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".empty-div {\r\n  width: 2%;\r\n}\r\n\r\n.btn-color {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 5px 150px;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-color-next {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-color-back {\r\n  background-color: #a4a4a4;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 8px;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n.btn-color:hover {\r\n  background-color: #4DC4F7\r\n}\r\n\r\n.btn-color1 {\r\n  background-color: #16baff;\r\n  color: white;\r\n\r\n  border-radius: 1;\r\n}\r\n\r\n.btn-color1:hover {\r\n  background-color: #4DC4F7\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n\r\n.btn-primary:disabled,\r\n.btn-primary[disabled] {\r\n  border-color: 2px #c9cdd1;\r\n  background-color: #fff;\r\n  color: #4DC4F7;\r\n}\r\n\r\n.login-box {\r\n  /* background-color: white !important; */\r\nfont-family: Raleway;\r\nposition: fixed;\r\ntop: 45%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\n\r\n\r\n}\r\n\r\na {\r\n  color: #2DAAE1;\r\n}\r\n\r\n.logo {\r\n  max-width: 250px;\r\n  margin: 14px;\r\n}\r\n\r\n.login-footer {\r\n  background-color: #2DAAE1;\r\n  padding: 2px;\r\n  color: white;\r\n  font-size: 13px;\r\n  text-align: center;\r\n\r\n}\r\n\r\n.login-footer p {\r\n  padding-top: 10px;\r\n}\r\n\r\ninput {\r\n  background-color: #F7F7F7;\r\n\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n}\r\n\r\n::-moz-placeholder { /* Firefox 19+ */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n\r\n}\r\n\r\n:-ms-input-placeholder { /* IE 10+ */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n\r\n}\r\n\r\n:-moz-placeholder { /* Firefox 18- */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 1.1em;\r\n\r\n}\r\n\r\n.rap {\r\n\r\n  min-height: 85.5vh;\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n\r\n}\r\n\r\n.login-header {\r\n  background-color: #16baff;\r\n\r\n}\r\n\r\n.header-logo {\r\n  padding: 0px 0px 0px 80px;\r\n\r\n}\r\n\r\n/* .footer\r\n{\r\n\tbackground-color:#16baff;\r\n\r\n} */\r\n\r\n.footer {\r\n  position: fixed;\r\n  height: 86px;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #16baff;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\np.copyright {\r\n  position: absolute;\r\n  width: 100%;\r\n  color: #fff;\r\n  line-height: 40px;\r\n  font-size: 0.7em;\r\n  text-align: center;\r\n  bottom: -10%;\r\n}\r\n\r\n.footer-logo {\r\n  padding: 0px 0px 0px 450px;\r\n\r\n}\r\n\r\n.forgot {\r\n  font-family: Raleway;\r\n  color: #16baff;\r\n  padding: 5px 0px 5px 120px;\r\n}\r\n\r\n.login-logo {\r\n  padding: 0px 150px 0px 150px;\r\n  font-family: Raleway;\r\n}\r\n\r\n.cursor {\r\n  cursor: pointer;\r\n}\r\n\r\n.font {\r\n  font-family: Raleway;\r\n}\r\n\r\n.fa {\r\n  cursor: pointer;\r\n}\r\n\r\n.disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\np#align {\r\n  font-family: Raleway;\r\n  color: #16baff;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\np#align1 {\r\n  font-family: Raleway;\r\n\r\n  text-align: center;\r\n\r\n  width: 100%;\r\n}\r\n\r\np#signuplink{\r\n  text-align: center;\r\n  color: #212529;\r\n}\r\n\r\n@media screen and (max-width: 532px) {\r\n  .login-logo {\r\n    padding: 0px 0px 0px 0px;\r\n    font-family: Raleway;\r\n  }\r\n}\r\n\r\n#myVideo {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  opacity: 0.2;\r\n  filter: alpha(opacity=50); /* For IE8 and earlier */\r\n}\r\n\r\n.alert {\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/auth/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/auth/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/auth/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"],
                _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routes"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
            bootstrap: [_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(_http, _nav) {
        this._http = _http;
        this._nav = _nav;
    }
    AuthService.prototype.login = function (email, password) {
        var url = "/wavesbackend/api/auth/login";
        return this._http.post(url, { username: email, password: password });
    };
    AuthService.prototype.tokenvalid = function () {
        var url = "/wavesbackend/api/auth/is-valid?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("token");
        return this._http.get(url);
    };
    AuthService.prototype.signUp = function (schoolName, userType, userId, password) {
        var url = "";
        return this._http.post(url, { schoolName: schoolName, userType: userType, userId: userId, password: password });
    };
    AuthService.prototype.getSchools = function () {
        var url = "/wavesbackend/api/school/listwt";
        return this._http.get(url);
    };
    AuthService.prototype.logOut = function () {
    };
    AuthService.prototype.validateEmail = function (email) {
        var url = "/wavesbackend/api/forgot-password";
        return this._http.post(url, { username: email });
    };
    AuthService.prototype.validateSchool = function (SchoolObj) {
        var url = "/wavesbackend/api/common/authenticate/validateSchool";
        return this._http.post(url, SchoolObj);
    };
    AuthService.prototype.authValidation = function (schoolid, usertype, authcode, accescode, label) {
        if (usertype == 0) {
            var url = "/wavesbackend/api/signup";
            return this._http.post(url, { schoolId: schoolid, role: label, stdAuthCode: authcode, accessCode: accescode });
        }
        else {
            var url = "/wavesbackend/api/signup";
            return this._http.post(url, { schoolId: schoolid, role: label, resAuthCode: authcode, accessCode: accescode });
        }
    };
    AuthService.prototype.studentIdValidate = function (studentId, schoolId, userType) {
        if (userType == 0) {
            var url = "/wavesbackend/api/common/authenticate/validateStudentId";
            return this._http.post(url, { studentId: studentId, schoolId: schoolId });
        }
        else {
            var url = "/wavesbackend/api/common/authenticate/validateAuthCode";
            return this._http.post(url, { authCode: studentId });
        }
    };
    AuthService.prototype.emailValidte = function (email, authCode) {
        var url = "/wavesbackend/api/common/authenticate/validateResponderEmail";
        return this._http.post(url, { email: email, authCode: authCode });
    };
    AuthService.prototype.setPassword = function (password, userid, token) {
        var url = "/wavesbackend/api/change-password-signUp";
        return this._http.post(url, { newPassword: password, userId: userid, token: token });
    };
    AuthService.prototype.token_valid_ceck = function (userId, token) {
        var url = "/wavesbackend/api/common/authenticate/verifyLink/" + userId + "/" + token;
        return this._http.get(url);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"footer\">\r\n  <div class=\"footer-logo\">\r\n    <img src=\"assets/images/logo2.png\" height=\"20\" alt=\"logo\" class=\"logo\"/>\r\n  </div>\r\n   </div>\r\n\r\n -->\r\n<div class=\"footer\">\r\n  <img src=\"assets/images/logo2.png\" height=\"40\" alt=\"logo\" class=\"logo\"/>\r\n  <p class=\"copyright\">© 2018 Above the Waves,Inc. All Rights Reserved</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/auth/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./../auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/auth/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n</head>\r\n<div class=\"login-header\">\r\n  <div class=\"header-logo\"><img src=\"assets/images/logo2.png\" height=\"40\" alt=\"logo\" class=\"logo\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/auth/header/header.component.html"),
            styles: [__webpack_require__(/*! ./../auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"rap\">\r\n  <video autoplay muted loop id=\"myVideo\">\r\n    <source src=\"assets\\video\\cover.mp4\" type=\"video/mp4\">\r\n  </video>\r\n  <br>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n        \r\n      \r\n\r\n        <div  *ngIf=\"emailSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          <strong>Email has been sent to the given email address!</strong>\r\n        </div>\r\n    \r\n        <div  *ngIf=\"emailError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n          <strong> This email id does not exist in the database record!</strong>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    \r\n    <div class=\"col-12 col-md-auto\" style=\"align-self: center;\">\r\n      <div class=\"login-box\">\r\n\r\n        <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n        <p id=\"align1\" class=\"login-logo\"><b> </b><b>Waves Login</b></p>\r\n\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=errormessage>We are unable to login you in.Please check your credentials.</span>\r\n              \r\n        <form (submit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <input type=\"email\" minlength=\"4\" class=\"w3-input\" id=\"email\" placeholder=\"Email / ID\" ngModel name=\"email\"\r\n                   email #email=\"ngModel\"\r\n                   required>\r\n            <span style=\"color: red;\" class=\"help-block\"\r\n                  *ngIf=\"!email.valid && email.touched\">Please enter a valid Email Address</span>\r\n          </div>\r\n          <!-- <div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div> -->\r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"w3-input\" id=\"password\" placeholder=\"Password\" required name=\"password\"\r\n                   ngModel name=\"password\">\r\n          </div>\r\n         \r\n          <p (click)=\"openModal(template)\" id=\"align\"> Forgot Password?</p>\r\n          <div>\r\n            <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                    class=\"btn btn-primary btn-lg btn-block btn-color1\">Login\r\n            </button>\r\n          </div>\r\n          <br>\r\n          <p id=\"signuplink\">\r\n            Not yet register? <a routerLink=\"/signup\"> Sign up</a></p>\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n   \r\n  </div>\r\n\r\n\r\n  <app-footer></app-footer>\r\n</div>\r\n\r\n\r\n<ng-template #template>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\"><b>Forgot Password</b></h4>\r\n\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    \r\n    <form (submit)=\"onSubmitemail(f)\" #f=\"ngForm\">\r\n\r\n        <!-- <div class=\"form-group\">\r\n            <input id=\"typeahead-basic\" type=\"text\" class=\"w3-input\"  [ngbTypeahead]=\"search\"\r\n                   [inputFormatter]=\"formatter_school\"\r\n                   [resultFormatter]=\"formatter_school\" placeholder=\"Enter Your School*\" ngModel\r\n                   name=\"school\" school #school=\"ngModel\"\r\n                   required/>\r\n                   \r\n                   <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"!school.valid && school.touched\">Please enter a valid School</span>\r\n        </div> -->\r\n\r\n      <div class=\"form-group\">\r\n        <input type=\"email\" minlength=\"4\" class=\"w3-input\" id=\"email\" placeholder=\"Enter Your Email*\" ngModel\r\n               name=\"email\" email #email=\"ngModel\"\r\n               required>\r\n        <span style=\"color: red;\" class=\"help-block\"\r\n              *ngIf=\"!email.valid && email.touched\">Please enter a valid Email Address</span>\r\n      </div>\r\n      \r\n      <!-- !f.valid || !f.value['school']['schoolId'] -->\r\n    \r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n      <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\" \r\n              class=\"btn btn-primary btn-color1\" (click)=\"modalRef.hide()\">Submit\r\n      </button>\r\n    </div>\r\n  </form>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {roles} from './../../helpers';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authServices, modalService) {
        var _this = this;
        this.router = router;
        this.authServices = authServices;
        this.modalService = modalService;
        this.errormessage = null;
        this.emailError = null;
        this.emailSuccess = null;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term.length < 2 ? []
                : _this.schools['data'].filter(function (v) { return v.schoolName.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter_school = function (x) { return x.schoolName.substring(0, 50); };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var t = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('token');
        if (t) {
            //   let decoded = JWT(t);
            //   if (decoded['isSuperUser']) {
            //     localStorage.setItem('role', 'superUser');
            //     this.router.navigate(['/super-user']);
            //   }
            //   else if (decoded['roleId'] === roles.student) {
            //     localStorage.setItem('role', 'Student');
            //     this.router.navigate(['/profile']);
            //   }
            //   else if (decoded['roleId'] === 3) {
            //     localStorage.setItem('role', 'Responder');
            //     this.router.navigate(['/responder-profile']);
            //   } else if (decoded['roleId'] === 1) {
            //     localStorage.setItem('role', 'Admin');
            //     this.router.navigate(['/admin-my-responder']);
            //   }
            // }
        }
    };
    LoginComponent.prototype.onSubmitemail = function (form) {
        var _this = this;
        this.email = form.value.email;
        this.authServices.validateEmail(this.email).subscribe(function (res) {
            var temp = res['data'].code;
            console.log('code =' + temp);
            if (temp == 400) {
                _this.emailSuccess = null;
                _this.emailError = true;
                window.setTimeout(function () {
                    _this.emailError = null;
                }, 3000);
            }
            else {
                _this.emailSuccess = true;
                _this.emailError = null;
                window.setTimeout(function () {
                    _this.emailSuccess = null;
                }, 3000);
            }
        }, function (err) {
        });
    };
    LoginComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.authServices.login(form.value.email, form.value.password).subscribe(function (res) {
            var temp = res['data'].error;
            if (temp == 400) {
                _this.errormessage = res;
            }
            else {
                ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('token', res['data']['data'].token);
                if (res['data']['data']['user']['roles'].id === 1) {
                    _this.router.navigate(['/super-user']);
                }
                else if (res['data']['data']['user']['roles'].id === 2) {
                    _this.schoolid = res['data']['school'].schoolId;
                    _this.schoolname = res['data']['school'].schoolName;
                    _this.firstname = res['data']['school'].firstName;
                    _this.lastname = res['data']['school'].lastName;
                    _this.adminname = res['data']['school'].firstName + res['data']['school'].lastName;
                    _this.adminid = res['data']['data']['user'].id;
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('spid', _this.schoolid);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('schoolName', _this.schoolname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('adminName', _this.adminname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('firstname', _this.firstname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('lastname', _this.lastname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('adminId', _this.adminid);
                    _this.router.navigate(['/admin-my-responder']);
                }
                else if (res['data']['data']['user']['roles'].id === 3) {
                    _this.schoolid = res['data']['school'].schoolId;
                    _this.userId = res['data']['user'].responderId;
                    _this.lastname = res['data']['user'].lastName;
                    _this.firstname = res['data']['user'].firstName;
                    _this.schoolname = res['data']['school'].schoolName;
                    _this.adminname = res['data']['user'].firstName + res['data']['user'].lastName;
                    _this.adminid = res['data']['user'].userId;
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('spid', _this.schoolid);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('schoolName', _this.schoolname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('adminName', _this.adminname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('firstname', _this.firstname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('lastname', _this.lastname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('resId', _this.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('adminId', _this.adminid);
                    _this.router.navigate(['/responder-profile']);
                }
                else if (res['data']['data']['user']['roles'].id === 4) {
                    _this.schoolid = res['data']['school'].schoolId;
                    _this.userId = res['data']['user'].studentId;
                    _this.schoolname = res['data']['school'].schoolName;
                    _this.lastname = res['data']['user'].lastName;
                    _this.firstname = res['data']['user'].firstName;
                    _this.adminname = res['data']['user'].firstName + res['data']['user'].lastName;
                    _this.adminid = res['data']['user'].userId;
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('spid', _this.schoolid);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('schoolName', _this.schoolname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('adminName', _this.adminname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('firstname', _this.firstname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('lastname', _this.lastname);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('stdId', _this.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set('adminId', _this.adminid);
                    _this.router.navigate(['/profile']);
                }
                // } else if (decoded['roleId'] === 1) {
                //   localStorage.setItem('role', 'Admin');
                //   this.router.navigate(['/admin-my-responder']);
                // }
                _this.errormessage = null;
            }
        }, function (err) {
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./../auth.component.css */ "./src/app/auth/auth.component.css")],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<br>\n<div class=\"container\">\n  <div class=\"row\">\n        <div *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            <strong>{{error}}!</strong>\n          </div>\n      \n  </div>\n</div>\n\n<div class=\"rap\">\n    <div class=\"row h-100 justify-content-center align-items-center\">\n   \n        <div class=\"col-12 col-md-auto\" style=\"align-self: center;\">\n          <div class=\"login-box\">\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\n            <p id=\"align1\" class=\"login-logo\"><b> </b><b>Reset Password</b></p>\n\n            <form (submit)=\"onPasswordSubmit(f)\" #f=\"ngForm\">\n               \n              <div class=\"form-group\">\n               <input type=\"password\" class=\"w3-input change\" minlength=\"5\" id=\"newPassword\" \n               placeholder=\"New Password\" ngModel\n                 required name=\"newPassword\"\n                  newPassword #newPassword=\"ngModel\">\n                      \n                   <span style=\"color: red;\" class=\"help-block\" *ngIf=\"newPassword.errors?.minlength && newPassword.touched\">\n                     Password must be of minimum 5 characters length\n                    </span>\n                    </div>\n                      \n                     <div class=\"form-group\">\n                      <input type=\"password\" class=\"w3-input change\" id=\"confirmPassword\" placeholder=\"Confirm Password\"\n                          validateEqual=\"password\" ngModel\n                           required name=\"confirmPassword\" confirmPassword #confirmPassword=\"ngModel\">\n                      \n                      <span style=\"color: red;\" class=\"help-block\" *ngIf=\"newPassword.value != confirmPassword.value && confirmPassword.touched \"\n                      >Your password and confirmation password do not match</span>\n                     </div>\n                      \n                          \n                     \n      \n                      <button type=\"submit\" [class.disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\n                         [disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\n                           class=\"btn btn-primary btn-lg btn-block btn-color1\" (click)=\"modalRef.hide()\">Confirm\n                       </button>\n                          \n                  </form>\n              </div>\n            </div>\n\n  \n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/auth/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(router, activatedRoute, authServices) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authServices = authServices;
        this.error = null;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.activatedRoute.params.subscribe(function (params) {
            _this.userId = +params['userId'];
            _this.token = params['token'];
            // this.authServices.token_valid_ceck(this.userId, this.token).subscribe(
            //   res =>{
            //   },
            //   err=>{
            //     this.router.navigate(['/login']);
            //   }
            //  );
        });
    };
    ResetPasswordComponent.prototype.onPasswordSubmit = function (form) {
        var _this = this;
        this.authServices.setPassword(form.value.newPassword, this.userId, this.token).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.error = res['data'].message;
                window.setTimeout(function () {
                    _this.error = null;
                }, 3000);
            }
            else {
                _this.passwordObj = res;
                _this.error = null;
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            _this.error = "Some Error during password saving!";
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/auth/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./../auth.component.css */ "./src/app/auth/auth.component.css")],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n\r\n<div class=\"rap\" *ngIf=\"state===0\">\r\n    <div class=\"row\"  >\r\n    \r\n          <div class=\"login-box\">\r\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n            <p id=\"align1\" class=\"login-logo\"><b> </b><b>Find Your School</b></p>\r\n            <!-- <span style=\"color: red;\" class=\"help-block\"\r\n                  *ngIf=errormessage>We are unable to login you in.Please check your credentials.</span> -->\r\n                  <form (submit)=\"onSubmitSchool(f)\" #f=\"ngForm\">\r\n                  <div class=\"form-group\">\r\n                      <input id=\"typeahead-basic\" type=\"text\" class=\"w3-input\" [ngbTypeahead]=\"search\"\r\n                             [inputFormatter]=\"formatter_school\"\r\n                             [resultFormatter]=\"formatter_school\"  placeholder=\"Find Your School\"ngModel\r\n                             name=\"school\" school #school=\"ngModel\"\r\n                             required/>\r\n                    </div>\r\n              <div>\r\n                <button type=\"submit\" \r\n                        class=\"btn btn-primary btn-lg btn-block btn-color1\" \r\n                        [class.disabled]=\"!f.valid || !f.value['school']['schoolId']\" \r\n                        [disabled]=\"!f.valid || !f.value['school']['schoolId']\"\r\n                        >Next\r\n                        \r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n    \r\n       \r\n       \r\n      </div>\r\n  \r\n</div>\r\n\r\n<div class=\"rap\" *ngIf=\"state===1\">\r\n    <div class=\"row\">\r\n    \r\n       \r\n        \r\n          <div class=\"login-box\">\r\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n            <p id=\"align1\" class=\"login-logo\"><b> </b><b>Provide Access Code</b></p>\r\n            <!-- <span style=\"color: red;\" class=\"help-block\"\r\n                  *ngIf=errormessage>We are unable to login you in.Please check your credentials.</span> -->\r\n                  <span style=\"color: red;\" class=\"help-block\" *ngIf=\"error\">Please enter a valid Access Code</span>\r\n                  <span style=\"color: red;\" class=\"help-block\" *ngIf=\"!f && f.touched\">Please enter a valid Access Code</span>\r\n                \r\n                <form (submit)=\"onSubmitAccess(f)\" #f=\"ngForm\">\r\n        \r\n                  <div class=\"form-group\">\r\n                    <input type=\"input\" class=\"w3-input\" placeholder=\"School Access Code\" ngModel name=\"accessCode\" access\r\n                           #access=\"ngModel\"\r\n                           required>\r\n                  </div>\r\n                  <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                  class=\"btn btn-primary btn-lg btn-block btn-color1\">Next\r\n                  </button>\r\n                  <div class=\"w3-input\"></div>\r\n                  <button type=\"button\" class=\"btn btn-primary btn-lg btn-block btn-color1\" (click)=\"backState()\">Back</button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n       \r\n    \r\n        </div>\r\n       \r\n    \r\n<div class=\"rap\" *ngIf=\"state===2\">\r\n    <div class=\"row\">\r\n    \r\n       \r\n          <div class=\"login-box\">\r\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n            <p id=\"align1\" class=\"login-logo\"><b> </b><b>Select Your User</b></p>\r\n            <div class=\"form-group\">\r\n                <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"userType\">\r\n                  <option value=\"0\">Student</option>\r\n                  <option value=\"1\">Responder</option>\r\n                </select>\r\n              </div>\r\n              <button type=\"submit\" (click)=\"onSubmitSelect()\" class=\"btn btn-primary btn-lg btn-block btn-color1\"\r\n              >Next\r\n             </button>\r\n              <div class=\"w3-input\"></div>\r\n              <button type=\"button\" class=\"btn btn-primary btn-lg btn-block btn-color1\" (click)=\"backState()\">Back</button>\r\n            \r\n              </div>\r\n            \r\n\r\n  \r\n  </div>\r\n</div>\r\n\r\n<div class=\"rap\" *ngIf=\"state===3\">\r\n    <div class=\"row\">\r\n    \r\n       \r\n        \r\n          <div class=\"login-box\">\r\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n\r\n            <p id=\"align1\" class=\"login-logo\" *ngIf=\"userType==1\">\r\n\r\n              <b> </b><b>Your Authorization Code</b>\r\n            </p>\r\n\r\n           \r\n\r\n              <p id=\"align1\" class=\"login-logo\" *ngIf=\"userType==0\">\r\n\r\n\r\n\r\n                  <b> </b><b>Your Authorization Code</b>\r\n                </p>\r\n    \r\n              \r\n                  <div>\r\n                    <span style=\"color: red;\" class=\"help-block\" *ngIf=\"error\">Please enter a valid Authorization Code</span>\r\n                    <span style=\"color: red;\" class=\"help-block\" *ngIf=\"!f && f.touched\">Please enter a valid Authorization Code</span>\r\n                  </div>\r\n                      \r\n                    <form (submit)=\"onSubmitAuthCode(f)\" #f=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                          <input type=\"input\" class=\"w3-input\" placeholder=\"Authorization Code\" ngModel name=\"idCode\" idCode\r\n                                 #idCode=\"ngModel\" required>\r\n                        </div>\r\n              \r\n                        <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                        class=\"btn btn-primary btn-lg btn-block btn-color1\">Next\r\n                        </button>\r\n                        <div class=\"w3-input\"></div>\r\n                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-block btn-color1\"\r\n                         (click)=\"backState()\">Back</button>\r\n                      </form>\r\n                  </div>\r\n\r\n\r\n  \r\n  </div>\r\n</div>\r\n\r\n<!-- -----------------------STUDENT ID CODE---------------------- -->\r\n\r\n<div class=\"rap\" *ngIf=\"state===4\">\r\n    <div class=\"row\">\r\n    \r\n       \r\n       \r\n          <div class=\"login-box\">\r\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n\r\n            <p id=\"align1\" class=\"login-logo\" *ngIf=\"userType==1\">\r\n\r\n                <b> </b><b>Your Responser ID</b>\r\n              </p>\r\n  \r\n             \r\n  \r\n                <p id=\"align1\" class=\"login-logo\" *ngIf=\"userType==0\">\r\n  \r\n  \r\n  \r\n                    <b> </b><b>Your Student ID</b>\r\n                  </p>\r\n\r\n            <div>\r\n                <span style=\"color: red;\" class=\"help-block\" *ngIf=\"error\">\r\n                  Please enter a valid {{codePlaceHolder}}\r\n                </span>\r\n\r\n                <span style=\"color: red;\" class=\"help-block\" *ngIf=\"!f && f.touched\">\r\n                  Please enter a valid {{codePlaceHolder}}\r\n                </span>\r\n              </div>\r\n              \r\n            <form (submit)=\"onSubmitStudentId(f)\" #f=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"input\" class=\"w3-input\" [placeholder]=\"codePlaceHolder\" ngModel name=\"stdid\" stdid\r\n                         #stdid=\"ngModel\" required>\r\n                </div>\r\n      \r\n                <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                class=\"btn btn-primary btn-lg btn-block btn-color1\">Next\r\n                </button>\r\n                <div class=\"w3-input\"></div>\r\n                <button type=\"button\" class=\"btn btn-primary btn-lg btn-block btn-color1\"\r\n                 (click)=\"backState()\">Back</button>\r\n              </form>\r\n          </div>\r\n\r\n   \r\n    </div>\r\n  </div>\r\n\r\n\r\n<div class=\"rap\" *ngIf=\"state===5\">\r\n    <div class=\"row\">\r\n    \r\n       \r\n        \r\n          <div class=\"login-box\">\r\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n            <p id=\"align1\" class=\"login-logo\" *ngIf=\"userType==0 || userType==1\">\r\n\r\n            <p id=\"align1\" class=\"login-logo\">\r\n              <b> </b><b>Provide Your Email</b>\r\n             </p>\r\n\r\n            <div>\r\n                <span style=\"color: red;\" class=\"help-block\" *ngIf=\"error\">\r\n                  Please enter a valid Email!\r\n                 </span>\r\n                 <span style=\"color: red;\" class=\"help-block\" \r\n                 *ngIf=\"!email && email.touched\">Please enter a valid Email Id\r\n               </span></div>\r\n\r\n           <form (submit)=\"onSubmitEmail(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <input type=\"input\" class=\"w3-input\" placeholder=\"Email\" ngModel name=\"email\" email #email=\"ngModel\"\r\n                   required>\r\n                   \r\n          </div>\r\n          <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n          class=\"btn btn-primary btn-lg btn-block btn-color1\">Next\r\n          </button>\r\n          <div class=\"w3-input\"></div>\r\n          <button type=\"button\" class=\"btn btn-primary btn-lg btn-block btn-color1\"\r\n           (click)=\"backState()\">Back</button>\r\n        </form>\r\n             \r\n            \r\n         </div>\r\n        \r\n\r\n  \r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"rap\" *ngIf=\"state===6\">\r\n    <div class=\"row\">\r\n    \r\n          <div class=\"login-box\">\r\n            <img src=\"assets/images/logo4.png\" class=\"mx-auto d-block\" style=\"width:30%\">\r\n            <p id=\"align1\" class=\"login-logo\"><b> </b><b>Create Password</b></p>\r\n\r\n    \r\n        <form (submit)=\"onPasswordSubmit(f)\" #f=\"ngForm\">\r\n               \r\n        <div class=\"form-group\">\r\n         <input type=\"password\" class=\"w3-input change\" minlength=\"5\" id=\"newPassword\" \r\n         placeholder=\"New Password\" ngModel\r\n           required name=\"newPassword\"\r\n            newPassword #newPassword=\"ngModel\">\r\n                \r\n             <span style=\"color: red;\" class=\"help-block\" *ngIf=\"newPassword.errors?.minlength && newPassword.touched\">\r\n               Password must be of minimum 5 characters length\r\n              </span>\r\n              </div>\r\n                \r\n               <div class=\"form-group\">\r\n                <input type=\"password\" class=\"w3-input change\" id=\"confirmPassword\" placeholder=\"Confirm Password\"\r\n                    validateEqual=\"password\" ngModel\r\n                     required name=\"confirmPassword\" confirmPassword #confirmPassword=\"ngModel\">\r\n                \r\n                <span style=\"color: red;\" class=\"help-block\" *ngIf=\"newPassword.value != confirmPassword.value && confirmPassword.touched \"\r\n                >Your password and confirmation password do not match</span>\r\n               </div>\r\n                \r\n                    \r\n               \r\n\r\n                <button type=\"submit\" [class.disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\r\n                   [disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\r\n                     class=\"btn btn-primary btn-lg btn-block btn-color1\" (click)=\"modalRef.hide()\">Confirm\r\n                 </button>\r\n                    \r\n            </form>\r\n\r\n          <!-- <input type=\"password\" class=\"w3-input\" minlength=\"5\"\r\n                 placeholder=\"Password\" [(ngModel)]=\"pass\" name=\"password\" required>\r\n\r\n          <input type=\"password\" class=\"w3-input\" minlength=\"5\"\r\n                 placeholder=\"Confirm Password\" [(ngModel)]=\"cnfrmPass\" name=\"confirmPassword\"\r\n                 required>\r\n\r\n        <button class=\"btn btn-primary btn-lg btn-block btn-color1\" (click)=\"onSubmitPassword()\"  >Confirm\r\n        </button> -->\r\n              </div>\r\n           \r\n\r\n  \r\n  </div>\r\n</div>\r\n\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, authServices) {
        var _this = this;
        this.router = router;
        this.authServices = authServices;
        this.error = null;
        this.codePlaceHolder = "";
        this.schoolAcces = null;
        this.schoolid = null;
        this.label = null;
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (term) { return term.length < 2 ? []
                : _this.schools['data']['result'].filter(function (v) { return v.schoolName.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter_school = function (x) { return x.schoolName.substring(0, 50); };
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServices.getSchools().subscribe(function (res) {
            _this.schools = res;
        }, function (err) {
        });
        this.state = 0;
    };
    SignUpComponent.prototype.onSubmitSchool = function (form) {
        var sch = this.schools['data']['result'].find(function (i) { return i.schoolId == form.value.school['schoolId']; });
        this.schoolAcces = sch.accessCode;
        this.schoolid = sch.schoolId;
        this.state += 1;
    };
    SignUpComponent.prototype.onSubmitAccess = function (form) {
        if (form.value['accessCode'] === this.schoolAcces) {
            this.state += 1;
            this.error = null;
        }
        else {
            this.error = "access code is not corect";
        }
    };
    SignUpComponent.prototype.onSubmitSelect = function () {
        if (this.userType == 0) {
            this.codePlaceHolder = "Student ID";
        }
        else {
            this.codePlaceHolder = "Responder ID";
        }
        this.state += 1;
    };
    SignUpComponent.prototype.onSubmitAuthCode = function (form) {
        var _this = this;
        if (this.userType == 0) {
            this.label = "student";
            this.authServices.authValidation(this.schoolid, this.userType, form.value.idCode, this.schoolAcces, this.label)
                .subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.error = "invalid Id";
                }
                else {
                    _this.error = null;
                    _this.profileObj = res;
                    _this.state += 1;
                }
            }, function (err) {
                _this.error = "invalid Id";
            });
        }
        else {
            this.label = "responder";
            this.authServices.authValidation(this.schoolid, this.userType, form.value.idCode, this.schoolAcces, this.label).
                subscribe(function (res) {
                var temp = res['data'].code;
                if (temp == 400) {
                    _this.error = "invalid Id";
                }
                else {
                    _this.error = null;
                    _this.profileObj = res;
                    _this.state += 1;
                }
            }, function (err) {
                _this.error = "invalid Id";
            });
        }
    };
    SignUpComponent.prototype.onSubmitStudentId = function (form) {
        debugger;
        if (this.userType == 0) {
            if (form.value.stdid == this.profileObj['data']['result'].studentId) {
                this.error = null;
                this.state += 1;
            }
            else {
                this.error = "access code is not corect";
            }
        }
        else {
            if (form.value.stdid == this.profileObj['data']['result'].responderId) {
                this.error = null;
                this.state += 1;
            }
            else {
                this.error = "access code is not corect";
            }
        }
    };
    SignUpComponent.prototype.onSubmitEmail = function (form) {
        if (form.value.email == this.profileObj['data']['result'].username) {
            this.error = null;
            this.state += 1;
        }
        else {
            this.error = "access code is not corect";
        }
    };
    SignUpComponent.prototype.onPasswordSubmit = function (form) {
        var _this = this;
        this.authServices.setPassword(form.value.newPassword, this.profileObj['data']['result'].userId, this.profileObj['data'].resetToken).subscribe(function (res) {
            _this.router.navigate(['/login']);
        }, function (err) {
        });
    };
    SignUpComponent.prototype.verify = function () {
        this.state += 1;
        this.error = null;
    };
    SignUpComponent.prototype.backState = function () {
        this.state -= 1;
        this.error = null;
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./../auth.component.css */ "./src/app/auth/auth.component.css")],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/profile/conversation/conversation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/profile/conversation/conversation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \">\r\n        <b>Conversation</b>\r\n      </h2>\r\n        <button \r\n          class=\"navbar-toggler\" \r\n          type=\"button\" \r\n          data-toggle=\"collapse\" \r\n          data-target=\"#navbarSupportedContent1\"\r\n          aria-controls=\"navbarSupportedContent\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" \r\n         id=\"navbarSupportedContent1\">\r\n          <ul class=\"navbar-nav mr-auto\"></ul>\r\n            <form class=\"form-inline\">\r\n              <div class=\"input-group\">\r\n              </div>\r\n            </form>\r\n            <h6 id=\"header\">{{studentName}}\r\n              <br>{{studentId}}\r\n            </h6>&nbsp;\r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">  \r\n        </div>\r\n      </nav>\r\n    </div>\r\n  <hr><br>\r\n  <!-- =================================End Navbar===================================== -->\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12\">\r\n      \r\n      <section class=\"row text-center placeholders\">\r\n        <div class=\"col-md-7 placeholder col-pading-conver center-block\">\r\n          <img src=\"/waves/assets/images/dumy.png\" \r\n               width=\"150\" \r\n               height=\"150\" \r\n               class=\"img-fluid rounded-clc-conv\"\r\n               alt=\"Generic placeholder thumbnail\">\r\n              <h2><b>Please Read the Following</b></h2>\r\n            <p id=\"font-size\">\r\n               If you are currently in an emergency situation or in harm of hurting yourself. those arround\r\n               you, or if you are being harmed, please call 911 or reffer to your crisis Support page. </p>\r\n               \r\n            <h4><b>Please select your Waves</b><br>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-11\">\r\n\r\n                  <ng-select \r\n                  [items]=\"cities2\"\r\n                  bindLabel=\"name\"\r\n                  bindValue=\"name\"\r\n                  [multiple]=\"true\"\r\n                  placeholder=\"Select Waves\"\r\n                  [(ngModel)]=\"selectedCityIds\">\r\n        </ng-select>\r\n\r\n              </div>\r\n              <div class=\"col-lg-1\">\r\n                  <i id=\"right\" \r\n                    class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n              </div>\r\n            </div>\r\n          </h4>\r\n          <br>\r\n          <div class=\"line\">\r\n            <h4><a href=\"#\">\r\n                <i id=\"right\" \r\n                   class=\"fa fa-exclamation-circle font-awesome-size\">\r\n                </i>\r\n              </a>\r\n            </h4>\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <h4>\r\n            <b>Select Level of Urgency</b>\r\n          </h4>\r\n          <br>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-lgblue\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-drkblue\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-green\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-orange\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-red\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-orgred\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-red1\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <br>\r\n          <button \r\n            type=\"button\" \r\n            class=\"btn btn-primary btn-block btn-block-padiing\">\r\n            Proceed to Responder\r\n          </button>\r\n          <br>\r\n          \r\n          <h5>I want to be anonymous\r\n            <ui-switch \r\n              switchColor=\"#16baff\" \r\n              color=\"#80cff1\" \r\n              [(ngModel)]=\"enable\">\r\n            </ui-switch>\r\n            <i \r\n            id=\"right\" \r\n            class=\"fa fa-exclamation-circle icon-size\">\r\n            </i>\r\n          </h5>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/conversation/conversation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/conversation/conversation.component.ts ***!
  \****************************************************************/
/*! exports provided: ConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationComponent", function() { return ConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConversationComponent = /** @class */ (function () {
    function ConversationComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
        this.waves = [
            { name: 'Amsterdam' }, { name: 'Antwerp' }, { name: 'Athens' }, { name: 'Barcelona' }, { name: 'Berlin' },
            { name: 'Birmingham' }, { name: 'Bradford' }, { name: 'Bremen' }, { name: 'Brussels' }, { name: 'Bucharest' },
            { name: 'Budapest' }, { name: 'Cologne' }, { name: 'Copenhagen' }, { name: 'Dortmund' }, { name: 'Dresden' },
            { name: 'Dublin' }, { name: 'Düsseldorf' }, { name: 'Essen' }, { name: 'Frankfurt' }, { name: 'Genoa' },
            { name: 'Glasgow' }, { name: 'Gothenburg' }, { name: 'Hamburg' }
        ];
        this.cities2 = [
            { name: 'Amsterdam' }, { name: 'Antwerp' }, { name: 'Athens' }, { name: 'Barcelona' }, { name: 'Berlin' },
            { name: 'Birmingham' }, { name: 'Bradford' }, { name: 'Bremen' }, { name: 'Brussels' }, { name: 'Bucharest' },
            { name: 'Budapest' }, { name: 'Cologne' }, { name: 'Copenhagen' }, { name: 'Dortmund' }, { name: 'Dresden' },
            { name: 'Dublin' }, { name: 'Düsseldorf' }, { name: 'Essen' }, { name: 'Frankfurt' }, { name: 'Genoa' },
            { name: 'Glasgow' }, { name: 'Gothenburg' }, { name: 'Hamburg' },
            { name: 'Vilnius' },
            { name: 'Kaunas' },
            { name: 'Pavilnys' },
            { name: 'Pabradė' },
            { name: 'Klaipėda' }
        ];
    }
    ConversationComponent.prototype.ngOnInit = function () {
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('stdId');
    };
    ConversationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-conversation',
            template: __webpack_require__(/*! ./conversation.component.html */ "./src/app/profile/conversation/conversation.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ConversationComponent);
    return ConversationComponent;
}());



/***/ }),

/***/ "./src/app/profile/crisis-support/crisis-support.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile/crisis-support/crisis-support.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \"><b>Crisis Suppport Resources\r\n      </b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n      </ul>\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <input type=\"search\" class=\"form-control form-control-search\" aria-label=\"Search\"\r\n                   aria-describedby=\"basic-addon1\">\r\n\r\n            <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n      <h6 id=\"header\">{{studentName}}<br>\r\n        {{studentId}}</h6>&nbsp;\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n<main class=\"col-sm-9 col-md-12 pl-3\">\r\n  <section class=\"row text-center placeholders\">\r\n    <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12\" \r\n    *ngFor=\"let profile of crisisResourceObj.data.result\">\r\n\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"sidebar-userpic\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text\">\r\n        <h5 id=\"font\">\r\n          <b>{{profile.name}}</b>\r\n        </h5>\r\n        <h6> Service Types: {{profile.ServiceTypesId}}</h6>\r\n        <button type=\"submit\" class=\"btn btn-color left-btn\" (click)=\"openModal(template ,  profile.phoneNumber)\">\r\n          Contact\r\n        </button>\r\n\r\n        <a href=\"{{profile.website}}\" target=\"_blank\"><button type=\"submit\" class=\"btn btn-color left-btn\">\r\n          Visit Website\r\n        </button>\r\n      </a>\r\n      </div><br>\r\n    </div>\r\n    \r\n  </section>\r\n  <br>\r\n \r\n  <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left modal_title_font\">Phone Number: </h4>\r\n\r\n      \r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    \r\n      <div class=\"modal-body\">\r\n          <h5><b>Contact at:</b> {{phone}}</h5>\r\n          </div>\r\n      <div class=\"modal-footer\">\r\n    \r\n    \r\n        <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close</button>\r\n        </div>\r\n    \r\n    </ng-template>"

/***/ }),

/***/ "./src/app/profile/crisis-support/crisis-support.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/crisis-support/crisis-support.component.ts ***!
  \********************************************************************/
/*! exports provided: CrisisSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrisisSupportComponent", function() { return CrisisSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrisisSupportComponent = /** @class */ (function () {
    function CrisisSupportComponent(modalService, ProfileServiceObj) {
        this.modalService = modalService;
        this.ProfileServiceObj = ProfileServiceObj;
        this.crisisResourceObj = { data: { result: [] } };
        this.studentName = null;
        this.studentId = null;
        this.schoolId = null;
    }
    CrisisSupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('stdId');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.ProfileServiceObj.getcrisisResources(this.schoolId).subscribe(function (res) {
            _this.crisisResourceObj['data']['result'] = res['data']['result'];
        }, function (err) {
        });
    };
    CrisisSupportComponent.prototype.openModal = function (template, phoneNumber) {
        this.phone = phoneNumber;
        this.modalRef = this.modalService.show(template);
    };
    CrisisSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crisis-support',
            template: __webpack_require__(/*! ./crisis-support.component.html */ "./src/app/profile/crisis-support/crisis-support.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]],
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], CrisisSupportComponent);
    return CrisisSupportComponent;
}());



/***/ }),

/***/ "./src/app/profile/email/email.component.css":
/*!***************************************************!*\
  !*** ./src/app/profile/email/email.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------------------------- \r\n\t\tGLOBAL \r\n------------------------------------- */\r\n* { \r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\nh1, h2, h3, h4, h5, h6,p {\r\n    font-family: Raleway !important;\r\n    color:#3D3D3D !important;\r\n  }\r\n* { font-family: Raleway !important; }\r\nimg { \r\n\tmax-width: 100%; \r\n}\r\n.collapse {\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\nbody {\r\n\t-webkit-font-smoothing:antialiased; \r\n\t-webkit-text-size-adjust:none; \r\n\twidth: 100%!important; \r\n\theight: 100%;\r\n}\r\n/* ------------------------------------- \r\n\t\tELEMENTS \r\n------------------------------------- */\r\na { color: #2BA6CB;}\r\n.btn {\r\n\ttext-decoration:none;\r\n\tcolor: #FFF !important;\r\n\tbackground-color: #16baff;\r\n\tpadding:2px 25px;\r\n\tfont-weight:bold;\r\n\tmargin-right:10px;\r\n\ttext-align:center;\r\n\tcursor:pointer;\r\n\tdisplay: inline-block;\r\n}\r\np.callout {\r\n\tpadding:15px;\r\n\tbackground-color:#ECF8FF;\r\n\tmargin-bottom: 15px;\r\n}\r\n.callout a {\r\n\tfont-weight:bold;\r\n\tcolor: #2BA6CB;\r\n}\r\ntable.social {\r\n/* \tpadding:15px; */\r\n\tbackground-color: #ebebeb;\r\n\t\r\n}\r\n.social .soc-btn {\r\n\tpadding: 3px 7px;\r\n\tfont-size:12px;\r\n\tmargin-bottom:10px;\r\n\ttext-decoration:none;\r\n\tcolor: #FFF;font-weight:bold;\r\n\tdisplay:block;\r\n\ttext-align:center;\r\n}\r\na.fb { background-color: #3B5998!important; }\r\na.tw { background-color: #1daced!important; }\r\na.gp { background-color: #DB4A39!important; }\r\na.ms { background-color: #000!important; }\r\n.sidebar .soc-btn { \r\n\tdisplay:block;\r\n\twidth:100%;\r\n}\r\n/* ------------------------------------- \r\n\t\tHEADER \r\n------------------------------------- */\r\ntable.head-wrap { width: 100%;}\r\n.header.container table td.logo { padding: 15px; }\r\n.header.container table td.label { padding: 15px; padding-left:0px;}\r\n/* ------------------------------------- \r\n\t\tBODY \r\n------------------------------------- */\r\ntable.body-wrap { width: 100%;}\r\nh3.color{\r\n    color:#3D3D3D !important;\r\n}\r\n.span-font{\r\n\tfont-size: 17px;\r\n    font-weight: 100;\r\n}\r\n/* ------------------------------------- \r\n\t\tFOOTER \r\n------------------------------------- */\r\ntable.footer-wrap { width: 100%;\tclear:both!important;\r\n}\r\n.footer-wrap .container td.content  p { border-top: 1px solid rgb(215,215,215); padding-top:15px;}\r\n.footer-wrap .container td.content p {\r\n\tfont-size:10px;\r\n\tfont-weight: bold;\r\n\t\r\n}\r\n/* ------------------------------------- \r\n\t\tTYPOGRAPHY \r\n------------------------------------- */\r\nh1,h2,h3,h4,h5,h6 {\r\n    font-family: Raleway !important;\r\n    color:#3D3D3D !important;\r\n}\r\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small { font-size: 60%; color: #3D3D3D; line-height: 0; text-transform: none; }\r\nh1 { font-weight:200; font-size: 44px;}\r\nh2 { font-weight:200; font-size: 37px;}\r\nh3 { font-weight:500; font-size: 27px;}\r\nh4 { font-weight:500; font-size: 23px;}\r\nh5 { font-weight:900; font-size: 17px;}\r\nh6 { font-weight:900; font-size: 14px; text-transform: uppercase; color:#3D3D3D;}\r\n.collapse { margin:0!important;}\r\np, ul { \r\n\tmargin-bottom: 10px; \r\n\tfont-weight: normal; \r\n\tfont-size:14px; \r\n\tline-height:1.6;\r\n}\r\np.lead { font-size:17px; }\r\np.last { margin-bottom:0px;}\r\nul li {\r\n\tmargin-left:5px;\r\n\tlist-style-position: inside;\r\n}\r\n/* --------------------------------------------------- \r\n\t\tRESPONSIVENESS\r\n\t\tNuke it from orbit. It's the only way to be sure. \r\n------------------------------------------------------ */\r\n/* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */\r\n.container {\r\n\tdisplay:block!important;\r\n\tmax-width:600px!important;\r\n\tmargin:0 auto!important; /* makes it centered */\r\n\tclear:both!important;\r\n}\r\n/* This should also be a block element, so that it will fill 100% of the .container */\r\n.content {\r\n\tpadding:15px;\r\n\tmax-width:600px;\r\n\tmargin:0 auto;\r\n\tdisplay:block; \r\n}\r\n/* Let's make sure tables in the content area are 100% wide */\r\n.content table { width: 100%; }\r\n/* Odds and ends */\r\n.column {\r\n\twidth: 300px;\r\n\tfloat:left;\r\n}\r\n.column tr td { padding: 15px; }\r\n.column-wrap { \r\n\tpadding:0!important; \r\n\tmargin:0 auto; \r\n\tmax-width:600px!important;\r\n}\r\n.column table { width:100%;}\r\n.social .column {\r\n\twidth: 280px;\r\n\tmin-width: 279px;\r\n\tfloat:left;\r\n}\r\n/* Be sure to place a .clear element after each set of columns, just to be safe */\r\n.clear { display: block; clear: both; }\r\n/* ------------------------------------------- \r\n\t\tPHONE\r\n\t\tFor clients that support media queries.\r\n\t\tNothing fancy. \r\n-------------------------------------------- */\r\n@media only screen and (max-width: 600px) {\r\n\t\r\n\ta[class=\"btn\"] { display:block!important; margin-bottom:10px!important; background-image:none!important; margin-right:0!important;}\r\n\r\n\tdiv[class=\"column\"] { width: auto!important; float:none!important;}\r\n\t\r\n\ttable.social div[class=\"column\"] {\r\n\t\twidth:auto!important;\r\n\t}\r\n\r\n}"

/***/ }),

/***/ "./src/app/profile/email/email.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/email/email.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body bgcolor=\"#FFFFFF\">\r\n\r\n    <!-- HEADER -->\r\n    <table class=\"head-wrap\" bgcolor=\"#f7f7f7\">\r\n      <tr>\r\n        <td></td>\r\n        <td class=\"header container\">\r\n          \r\n            <div class=\"content\">\r\n              <table bgcolor=\"#f7f7f7\">\r\n              <tr>\r\n                <td><img src=\"\\waves\\assets\\images\\ATW_logo_blue.png\" width=\"35%\" height=\"35%\" /></td>\r\n                \r\n              </tr>\r\n            </table>\r\n            </div>\r\n            \r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table><!-- /HEADER -->\r\n    \r\n    \r\n    <!-- BODY -->\r\n    <table class=\"body-wrap\">\r\n      <tr>\r\n        <td></td>\r\n        <td class=\"container\" bgcolor=\"#FFFFFF\">\r\n    \r\n          <div class=\"content\">\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                \r\n                <h3 class=\"color\"><b>Welcome to Waves!</b></h3>\r\n                <p class=\"lead\">We are excited to have you join our community. Here’s what you need to know.\r\n\r\n                </p>\r\n\r\n                <h5>From:\r\n                  <span class=\"span-font\">The Waves Team</span>\r\n\r\n                </h5>\r\n                <br>\r\n                <hr>\r\n                <br>\r\n      \r\n                <p class=\"lead\">Hello (Student First Name)!\r\n\r\n                </p>\r\n\r\n                <p class=\"lead\">You’ve been added as a Student to your school’s Waves Network and have been given access \r\n                  to the Waves App. Having access to the Waves App provides students with the help they need, \r\n                  when they need it, and helps shorten the distance between students and the office of student services.\r\n                </p>\r\n\r\n                <p class=\"lead\">Before jumping into the Waves App, \r\n                  here are a few things to know. To access the Waves App, \r\n                  you will login using the following information: </p>\r\n                  \r\n                  <p class=\"lead\"><li>Your Student ID</li>\r\n                   <li>Your School’s Access Code, which is: ______________</li>\r\n                   </p>\r\n\r\n                  <p class=\"lead\">Once you select your school and connect to your school’s Waves Network, you wi\r\n                     required to create a password to protect your account. Once you knock out these initial \r\n                     few steps, you’re good to go. </p>\r\n\r\n                  <p class=\"lead\">Once you set up your account, you will have direct access \r\n                        to communication and scheduling tools with your school’s office of student \r\n                        services, local resources, crisis support resources, and more.  </p>\r\n\r\n                  <p class=\"lead\">If you’re feeling ready, click below and jump in. We’re glad you’re here. </p>\r\n\r\n                  <p class=\"lead\"><b>Stay Awesome, </b></p>\r\n                  <p class=\"lead\">The Waves Team</p>\r\n\r\n\r\n                <a class=\"btn\">Jump In</a>\r\n            \r\n              </td>\r\n            </tr>\r\n          </table>\r\n          </div>\r\n                      \r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table><!-- /BODY -->\r\n    \r\n   \r\n    \r\n    <table class=\"head-wrap\" bgcolor=\"#f7f7f7\">\r\n        <tr>\r\n          <td></td>\r\n          <td class=\"header container\">\r\n            \r\n              <div class=\"content\">\r\n                <table bgcolor=\"#f7f7f7\">\r\n                <tr>\r\n                  <td align=\"center\"><img src=\"\\waves\\assets\\images\\ATW_logo_blue.png\" width=\"35%\" height=\"35%\" /></td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                    <td align=\"center\">\r\n                      <p>\r\n                          © 2018 Above the Waves, Inc.\r\n                      </p>\r\n                    </td>\r\n                  </tr>\r\n              </table>\r\n              </div>\r\n              \r\n          </td>\r\n          <td></td>\r\n        </tr>\r\n      </table><!-- /HEADER -->\r\n\r\n    </body>\r\n\r\n\r\n<!-- <div class=\"container\">\r\n<body style=\"margin: auto; padding: 0;\">\r\n  <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\r\n    <tr>\r\n        <td align=\"center\" bgcolor=\"#70bbd9\" style=\"padding: 40px 0 30px 0;\">\r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" alt=\"Creating Email Magic\" width=\"300\" height=\"230\" style=\"display: block;\" />\r\n           </td>\r\n          </tr>\r\n     \r\n          <td bgcolor=\"#ffffff\" style=\"padding: 40px 30px 40px 30px;\">\r\n              <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n               <tr>\r\n                <td>\r\n                 Row 1\r\n                </td>\r\n               </tr>\r\n               <tr>\r\n                <td>\r\n                 Row 2\r\n                </td>\r\n               </tr>\r\n               <tr>\r\n                <td>\r\n                 Row 3\r\n                </td>\r\n               </tr>\r\n              </table>\r\n             </td>\r\n    <tr>\r\n     <td bgcolor=\"#ee4c50\">\r\n      Row 3\r\n     </td>\r\n    </tr>\r\n   </table>\r\n </body>\r\n</div> \r\n \r\n \r\n <table class=\"social\" width=\"100%\">\r\n    <tr>\r\n      <td>\r\n        \r\n        \r\n        <table align=\"left\" class=\"column\">\r\n          <tr>\r\n            <td>\t\t\t\t\r\n              \r\n              <h5 class=\"\">Connect with Us:</h5>\r\n              <p class=\"\"><a href=\"#\" class=\"soc-btn fb\">Facebook</a> <a href=\"#\" class=\"soc-btn tw\">Twitter</a> <a href=\"#\" class=\"soc-btn gp\">Google+</a></p>\r\n  \r\n              \r\n            </td>\r\n          </tr>\r\n        </table>\r\n        \r\n    \r\n        <table align=\"left\" class=\"column\">\r\n          <tr>\r\n            <td>\t\t\t\t\r\n                            \r\n              <h5 class=\"\">Contact Info:</h5>\t\t\t\t\t\t\t\t\t\t\t\t\r\n              <p>Phone: <strong>408.341.0600</strong><br/>\r\n      Email: <strong><a href=\"emailto:ABC@example.com\">ABC@example.com</a></strong></p>\r\n      \r\n            </td>\r\n          </tr>\r\n        </table>\r\n        \r\n        <span class=\"clear\"></span>\t\r\n        \r\n      </td>\r\n    </tr>\r\n  </table>  end social & contact \r\n\r\n <table class=\"footer-wrap\">\r\n    <tr>\r\n      <td></td>\r\n      <td class=\"container\">\r\n        \r\n        \r\n          <div class=\"content\">\r\n          <table>\r\n          <tr>\r\n            <td align=\"center\">\r\n              <p>\r\n                <a href=\"#\">Terms</a> |\r\n                <a href=\"#\">Privacy</a> |\r\n                <a href=\"#\">Unsubscribe></a>\r\n              </p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n          </div>\r\n          \r\n      </td>\r\n      <td></td>\r\n    </tr>\r\n  </table>-->"

/***/ }),

/***/ "./src/app/profile/email/email.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/email/email.component.ts ***!
  \**************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/profile/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/profile/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/profile/feedback/feedback.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile/feedback/feedback.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \">\r\n        <b>Feedback</b>\r\n      </h2>\r\n        <button \r\n          class=\"navbar-toggler\" \r\n          type=\"button\" \r\n          data-toggle=\"collapse\" \r\n          data-target=\"#navbarSupportedContent1\"\r\n          aria-controls=\"navbarSupportedContent\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" \r\n         id=\"navbarSupportedContent1\">\r\n          <ul class=\"navbar-nav mr-auto\"></ul>\r\n            <form class=\"form-inline\">\r\n              <div class=\"input-group\">\r\n              </div>\r\n            </form>\r\n            <h6 id=\"header\">{{studentName}}<br>\r\n              {{studentId}}</h6>&nbsp;\r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">  \r\n        </div>\r\n      </nav>\r\n    </div>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n  \r\n          <div *ngIf=\"feedSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>Thanks!</strong> For Your Feedback.\r\n            </div>\r\n  \r\n          <div *ngIf=\"feedError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n              <strong>OOPS!</strong> Something Went Wrong, Please Try Again!!! .\r\n            </div>\r\n        </div>\r\n      </div>\r\n      \r\n\r\n  <div class=\"col-md-9 offset-md-3\">\r\n    <section class=\"row text-center placeholders\">\r\n      <div class=\"col-md-8 \">\r\n        <br><br> <br><br>\r\n        <h3 id=\"font2\"><b>Please leave your feedback below:</b></h3><br>\r\n        <div class=\"container\">\r\n\r\n          <form (submit)=\"onfeedbackSubmit(f)\" #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <textarea class=\"form-control form-control-textarea\" rows=\"8\" id=\"comment\"\r\n                        placeholder=\"Share your feedback\" required ngModel name=\"Comment\" Comment\r\n                        #Comment=\"ngModel\"></textarea><br>\r\n              <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                      class=\"btn btn-primary btn-block btn-block-padiing\">Submit Feedback\r\n              </button>\r\n              <br>\r\n              <br>\r\n              <p id=\"font-size\">If you have a question,comment or concern, please reach out to us. A Wave Rep will get\r\n                back to you within 24 hour.</p>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </section>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/profile/feedback/feedback.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/feedback/feedback.component.ts ***!
  \********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(serviceObj) {
        this.serviceObj = serviceObj;
        this.userid = null;
        this.feedError = null;
        this.feedSuccess = null;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('stdId');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminId');
    };
    FeedbackComponent.prototype.onfeedbackSubmit = function (form) {
        var _this = this;
        this.serviceObj.postFeedback(this.userid, form.value.Comment).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.feedError = res;
                _this.feedSuccess = null;
                window.setTimeout(function () {
                    _this.feedError = null;
                }, 3000);
            }
            else {
                _this.feedError = null;
                _this.feedSuccess = res;
                window.setTimeout(function () {
                    _this.feedSuccess = null;
                }, 3000);
            }
        }, function (err) {
        });
    };
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/profile/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]],
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/profile/leaving-message/leaving-message.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile/leaving-message/leaving-message.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \">\r\n        <b>Leaving Message</b>\r\n      </h2>\r\n        <button \r\n          class=\"navbar-toggler\" \r\n          type=\"button\" \r\n          data-toggle=\"collapse\" \r\n          data-target=\"#navbarSupportedContent1\"\r\n          aria-controls=\"navbarSupportedContent\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" \r\n         id=\"navbarSupportedContent1\">\r\n          <ul class=\"navbar-nav mr-auto\"></ul>\r\n            <form class=\"form-inline\">\r\n              <div class=\"input-group\">\r\n              </div>\r\n            </form>\r\n            <h6 id=\"header\">User Name<br>User ID</h6>&nbsp;\r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">  \r\n        </div>\r\n      </nav>\r\n    </div>\r\n  <hr><br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12\">\r\n      <br>\r\n      <section class=\"row text-center placeholders\">\r\n        <div class=\"col-md-7 placeholder col-pading-conver center-block\">\r\n          <img src=\"/waves/assets/images/dumy.png\" \r\n               width=\"150\" \r\n              height=\"150\" \r\n              class=\"img-fluid rounded-circle\"\r\n              alt=\"Generic placeholder thumbnail\">\r\n          <h2><b>Please Read the Following</b></h2>\r\n          <p id=\"font-size\">\r\n            If you are currently in an emergency situation \r\n            or in harm of hurting yourself. those arround\r\n            you, or if you are\r\n            being harmed, please call 911 or reffer to your crisis Support page. </p>\r\n           <h4>\r\n              <b>Please select your Waves</b>\r\n              <a href=\"#\">\r\n              <i \r\n              id=\"right\" \r\n              class=\"fa fa-plus-circle font-awesome-size\">\r\n              </i>\r\n            </a>\r\n          </h4>\r\n        <br>\r\n      <div class=\"line\">\r\n          <h4>\r\n            <a href=\"#\">\r\n              <i \r\n                id=\"right\" \r\n                class=\"fa fa-exclamation-circle font-awesome-size\">\r\n              </i>\r\n            </a>\r\n          </h4>\r\n        </div>\r\n        <br>\r\n       \r\n        <h4>\r\n            <b>Select Level of Urgency</b>\r\n          </h4>\r\n          <br>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-lgblue\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-drkblue\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-green\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-orange\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-red\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-orgred\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n                  <span class=\" dor-clr-red1\">-----</span>\r\n                <input \r\n                  type=\"radio\" \r\n                  name=\"urgencyLevel\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          \r\n          <form (submit)=\"onfeedbackSubmit(f)\" #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <textarea class=\"form-control form-control-textarea\" rows=\"5\" id=\"comment\" placeholder=\"\" required ngModel\r\n                        name=\"Comment\" Comment #Comment=\"ngModel\"></textarea><br>\r\n            </div>\r\n          \r\n          <button type=\"button\" class=\"btn btn-primary btn-block btn-block-padiing\">Send Message</button>\r\n        </form>\r\n          <br>\r\n          <h5>I want to be anonymous\r\n            <ui-switch switchColor=\"#16baff\" [(ngModel)]=\"enable\"></ui-switch>\r\n            <i id=\"right\" class=\"fa fa-exclamation-circle icon-size\"></i>\r\n          </h5>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/profile/leaving-message/leaving-message.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/leaving-message/leaving-message.component.ts ***!
  \**********************************************************************/
/*! exports provided: LeavingMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavingMessageComponent", function() { return LeavingMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeavingMessageComponent = /** @class */ (function () {
    function LeavingMessageComponent() {
    }
    LeavingMessageComponent.prototype.ngOnInit = function () {
    };
    LeavingMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaving-message',
            template: __webpack_require__(/*! ./leaving-message.component.html */ "./src/app/profile/leaving-message/leaving-message.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeavingMessageComponent);
    return LeavingMessageComponent;
}());



/***/ }),

/***/ "./src/app/profile/local-resources/local-resources.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile/local-resources/local-resources.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Local Resources\r\n\r\n      </b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n      </ul>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <input type=\"search\" class=\"form-control form-control-search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n\r\n            <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n      <h6 id=\"header\">{{studentName}}\r\n        <br> {{studentId}}\r\n      </h6>&nbsp;\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n\r\n<main class=\"col-sm-9 col-md-12 pl-3\">\r\n\r\n  <section class=\"row text-center placeholders\">\r\n    <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 \" \r\n    *ngFor=\"let profile of localResourceObj.data.result\">\r\n      <div>\r\n        <div class=\"row\">\r\n          <div class=\"sidebar-userpic\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text\">\r\n        <h5 id=\"font\">\r\n          <b>{{profile.name}}</b>\r\n        </h5>\r\n        <h6>\r\n         Service Types: {{profile.ServiceTypesId}}\r\n        </h6>\r\n        <p>Insurance Types: {{profile.insuranceType}}</p>\r\n       \r\n        <p>{{profile.streetAddress}}</p>\r\n        <p>\r\n            {{profile.city}}\r\n        </p>\r\n        <p>\r\n            {{profile.state}}\r\n        </p>\r\n        <p>\r\n            {{profile.zipCode}}\r\n        </p>\r\n        <button type=\"submit\" class=\"btn btn-color left-btn\" (click)=\"openModal(template , profile.phoneNumber)\">\r\n          Contact\r\n        </button>\r\n\r\n        <a href=\"{{profile.website}}\" target=\"_blank\">\r\n          <button type=\"submit\" class=\"btn btn-color left-btn\">\r\n            Visit Website\r\n          </button>\r\n        </a>\r\n      </div>\r\n      <br>\r\n      <!-- <div class=\"col-sm-2\"></div> -->\r\n    </div>\r\n\r\n  </section>\r\n  <br>\r\n  <br>\r\n\r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left modal_title_font\">Phone Number: </h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n        <h5><b>Contact at:</b> {{phone}}</h5>\r\n</div>\r\n    <div class=\"modal-footer\">\r\n\r\n\r\n      <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n    </div>\r\n\r\n  </ng-template>\r\n"

/***/ }),

/***/ "./src/app/profile/local-resources/local-resources.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/local-resources/local-resources.component.ts ***!
  \**********************************************************************/
/*! exports provided: LocalResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalResourcesComponent", function() { return LocalResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalResourcesComponent = /** @class */ (function () {
    function LocalResourcesComponent(modalService, ProfileServiceObj) {
        this.modalService = modalService;
        this.ProfileServiceObj = ProfileServiceObj;
        this.localResourceObj = { data: { result: [] } };
        this.studentName = null;
        this.studentId = null;
        this.schoolId = null;
    }
    LocalResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('stdId');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.ProfileServiceObj.getlocalResources(this.schoolId).subscribe(function (res) {
            _this.localResourceObj['data']['result'] = res['data']['result'];
        }, function (err) {
        });
    };
    LocalResourcesComponent.prototype.openModal = function (template, phoneNumber) {
        this.phone = phoneNumber;
        this.modalRef = this.modalService.show(template);
    };
    LocalResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-resources',
            template: __webpack_require__(/*! ./local-resources.component.html */ "./src/app/profile/local-resources/local-resources.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], LocalResourcesComponent);
    return LocalResourcesComponent;
}());



/***/ }),

/***/ "./src/app/profile/messenger/messenger.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile/messenger/messenger.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n\r\n\r\n    <h2 class=\"pf-li-h1-title \"><b>Waves Messanger</b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n      </ul>\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n        </div>\r\n      </form>\r\n      <h6 id=\"header\">{{studentName}}<br>\r\n        {{studentId}}</h6>&nbsp;\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n<main class=\"col-sm-9 col-md-12 offset-md-0 \">\r\n \r\n  <div id=\"frame\">\r\n    <div id=\"sidepanel\">\r\n      <div id=\"contacts\">\r\n        <!-- <a routerLink=\"/mass-messages\">\r\n          <ul class=\"list-unstyled\">\r\n              <li class=\"contact\">\r\n                <div class=\"wrap\">\r\n                  <img src=\"/waves/assets/images/clients-icon.png\" alt=\"\"/>\r\n                  <div class=\"meta\">\r\n                    <p class=\"name\">Mass Massenger\r\n                     \r\n                    </p>\r\n                  \r\n                  </div>\r\n                </div>\r\n              </li>\r\n              </ul>\r\n            </a> -->\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Derich Smith\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/15/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Donna Paulsen\r\n                  <small class=\"pull-right text-muted\">3/15/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Ahmed Sharif\r\n                  <small class=\"pull-right text-muted\">2/27/18</small>\r\n                </p>\r\n                <p class=\"preview\"></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">James Jackson\r\n                  <small class=\"pull-right text-muted\">2/26/18</small>\r\n                </p>\r\n                <p class=\"preview\"></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Jeff Nelson\r\n                  <small class=\"pull-right text-muted\">1/16/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"messages\">\r\n        <div class=\"pull-right mr-4\">\r\n          <i class=\"fas fa-bars font-awesome-feedbck\"></i>\r\n        </div>\r\n        <ul>\r\n          <li class=\"sent\">\r\n            <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n            <p>Hi, there how can I help you?</p>\r\n          </li>\r\n          <li class=\"replies\">\r\n            <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n            <p>i'm really struggling right now and I don't know what to do.</p>\r\n          </li>\r\n          <li class=\"replies\" *ngFor=\"let sent of message\">\r\n            <div *ngIf=\"sent.text !='' \">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n              <p>{{sent.text}}</p>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"message-input\">\r\n        <hr>\r\n        <div class=\"wrap\">\r\n          <input type=\"text\" class=\"msg-plc-size\" placeholder=\"Enter message...\" [(ngModel)]=\"messages\"/>\r\n          <button class=\"submit\"><i class=\"fa fa-paper-plane\" (click)=\"send()\" aria-hidden=\"true\"></i></button>\r\n          <!-- <a href=\"\" id=\"clr\">Sent</a> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/messenger/messenger.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile/messenger/messenger.component.ts ***!
  \**********************************************************/
/*! exports provided: MessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerComponent", function() { return MessengerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessengerComponent = /** @class */ (function () {
    function MessengerComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
        this.message = [{
                "text": "",
            }];
        this.messages = "";
    }
    MessengerComponent.prototype.ngOnInit = function () {
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('stdId');
    };
    MessengerComponent.prototype.send = function () {
        this.message.push({
            "text": this.messages,
        });
        this.messages = "";
    };
    MessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messenger',
            template: __webpack_require__(/*! ./messenger.component.html */ "./src/app/profile/messenger/messenger.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], MessengerComponent);
    return MessengerComponent;
}());



/***/ }),

/***/ "./src/app/profile/privacy/privacy.component.html":
/*!********************************************************!*\
  !*** ./src/app/profile/privacy/privacy.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n\r\n\r\n    <h2 class=\"pf-li-h1-title \"><b>Privacy Policy</b></h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n\r\n\r\n      </ul>\r\n\r\n      <form class=\"form-inline\">\r\n        <div class=\"input-group\">\r\n        </div>\r\n      </form>\r\n      <h6 id=\"header\">{{studentName}}<br>\r\n        {{studentId}}</h6>&nbsp;\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr><br>\r\n\r\n\r\n\r\n\r\n<main class=\"col-sm-9 col-md-12 offset-md-0 pl-3\">\r\n  <section class=\"row text-center placeholders\">\r\n    <div class=\"col-lg-12 col-md-12 placeholder\">\r\n      <div class=\"text\">\r\n        <h5>Above the Waves built the Waves app as a Commercial app. This SERVICE is provided by Above the Waves and is\r\n          intended\r\n          for use as is.\r\n          <br>\r\n          <br> This page is used to inform website visitors regarding our policies with the collection, use, and\r\n          disclosure of\r\n          Personal Information if anyone decided to use our Service.\r\n          <br>\r\n          <br> If you choose to use our Service, then you agree to the collection and use of information in relation to\r\n          this\r\n          policy. The Personal Information that we collect is used for providing and improving the Service. We will not\r\n          use\r\n          or share your information with anyone except as described in this Privacy Policy.\r\n          <br>\r\n          <br> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is\r\n          accessible\r\n          at Waves unless otherwise defined in this Privacy Policy.\r\n          <br>\r\n          <br>\r\n          <b>Information Collection and Use</b>\r\n          <br>\r\n          <br> For a better experience, while using our Service, we may require you to provide us with certain\r\n          personally identifiable\r\n          information, including but not limited to First Name, Last Name, Email, Phone Number, Student ID. The\r\n          information\r\n          that we request will be retained by us and used as described in this privacy policy. The app does use third\r\n          party\r\n          services that may collect information used to identify you. Link to privacy policy of third party service\r\n          providers\r\n          used by the app:\r\n          <br>\r\n          <br>&nbsp;&nbsp;• Amazon Web Service\r\n          <br>\r\n          <br>\r\n          <b>Log Data</b>\r\n          <br>\r\n          <br> We want to inform you that whenever you use our Service, in a case of an error in the app we collect data\r\n          and\r\n          information (through third party products) on your phone called Log Data. This Log Data may include\r\n          information\r\n          such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration\r\n          of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.\r\n          <br>\r\n          <br>\r\n          <b>Cookies</b>\r\n          <br>\r\n          <br> Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These\r\n          are sent\r\n          to your browser from the website that you visit and are stored on your device internal memory.\r\n          <br>\r\n          <br> This Service does not use these “cookies” explicitly. However, the app may use third party code and\r\n          libraries\r\n          that use “cookies” to collection information and to improve their services. You have the option to either\r\n          accept\r\n          or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our\r\n          cookies,\r\n          you may not be able to use some portions of this Service.\r\n          <br>\r\n          <br>\r\n          <b>Service Providers</b>\r\n          <br>\r\n          <br> We may employ third-party companies and individuals due to the following reasons:\r\n          <br>\r\n          <br> &nbsp;&nbsp;• To facilitate our Service;\r\n          <br>\r\n          <br> &nbsp;&nbsp;• To provide the Service on our behalf;\r\n          <br>\r\n          <br> &nbsp;&nbsp;• To perform Service-related services; or\r\n          <br>\r\n          <br> &nbsp;&nbsp;• To assist us in analyzing how our Service is used.\r\n          <br>\r\n          <br> We want to inform users of this Service that these third parties have access to your Personal\r\n          Information. The\r\n          reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or\r\n          use\r\n          the information for any other purpose.\r\n          <br>\r\n          <br>\r\n          <b>Security</b>\r\n          <br>\r\n          <br> We value your trust in providing us your Personal Information, thus we are striving to use commercially\r\n          acceptable\r\n          means of protecting it. But remember that no method of transmission over the internet, or method of electronic\r\n          storage is 100% secure and reliable, and we cannot guarantee its absolute security.\r\n          <br>\r\n          <br>\r\n          <b>Links to Other Sites</b>\r\n          <br>\r\n          <br> This Service may contain links to other sites. If you click on a third-party link, you will be directed\r\n          to that\r\n          site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the\r\n          Privacy\r\n          Policy of these websites. We have no control over and assume no responsibility for the content, privacy\r\n          policies,\r\n          or practices of any third-party sites or services.\r\n          <br>\r\n          <br>\r\n          <b>Children’s Privacy</b>\r\n          <br>\r\n          <br> These Services do not address anyone under the age of 13. We do not knowingly collect personally\r\n          identifiable\r\n          information from children under 13. In the case we discover that a child under 13 has provided us with\r\n          personal\r\n          information, we immediately delete this from our servers. If you are a parent or guardian and you are aware\r\n          that\r\n          your child has provided us with personal information, please contact us so that we will be able to do\r\n          necessary\r\n          actions.\r\n          <br>\r\n          <br>\r\n          <b>Changes to This Privacy Policy</b>\r\n          <br>\r\n          <br> We may update our Privacy Policy from time to time. Thus, you are advised to review this page\r\n          periodically for\r\n          any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes\r\n          are\r\n          effective immediately after they are posted on this page.\r\n          <br>\r\n          <br>\r\n          <b>Contact Us</b>\r\n          <br>\r\n          <br>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.\r\n          <br>\r\n          <br>\r\n\r\n\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n"

/***/ }),

/***/ "./src/app/profile/privacy/privacy.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/privacy/privacy.component.ts ***!
  \******************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('stdId');
    };
    PrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__(/*! ./privacy.component.html */ "./src/app/profile/privacy/privacy.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-detail/profile-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/profile/profile-detail/profile-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light  \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Profile Detail</b></h2>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n  \r\n  \r\n        </ul>\r\n  \r\n        <form class=\"form-inline\">\r\n          <div class=\"input-group\">\r\n          </div>\r\n        </form>\r\n        <h6 id=\"header\">{{studentName}}<br>\r\n          {{studentId}}</h6>&nbsp;\r\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n       \r\n  \r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <hr>\r\n  <br>\r\n  \r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div *ngIf=\"passwordSuccess\"class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            <strong>Password Successfully Updated!</strong>\r\n          </div>\r\n\r\n          <div  *ngIf=\"passwordError\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            <strong>Mismatch!</strong> Please enter a valid old password.\r\n          </div>\r\n      </div>\r\n  </div> \r\n<div class=\"container\">\r\n    <div class=\"row pt-5\">\r\n      <div class=\"col-md-12\">\r\n        <section class=\"row text-center placeholders\">\r\n          <div class=\"col-md-8 placeholder col-pading-conver\">\r\n        \r\n            \r\n            <img [src]=\"imageToShow\" *ngIf=\"imageToShow;else other_image\" width=\"200\" height=\"200\"\r\n                 class=\"img-fluid rounded-img-profile\" alt=\"Generic placeholder thumbnail\">\r\n\r\n            <ng-template #other_image>\r\n              \r\n              <img src=\"/waves/assets/images/dumy.png\" width=\"200\" height=\"200\" class=\"img-fluid rounded-img-profile\"\r\n                   alt=\"Generic placeholder thumbnail\">\r\n\r\n            </ng-template>\r\n  \r\n            <div class=\"user-panel\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-4\"></div>\r\n                <div class=\"col-lg-4\">\r\n                  <label for=\"file_input_id\" (click)=\"openFileDialog($event)\">Update Profile</label>\r\n                  <input [(ngModel)]=\"file\" type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\"\r\n                         style=\"display: none\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\r\n                  application/png, .png, .jpg , .jpeg\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <h3 class=\"capital-name\">{{firstName}} {{lastName}}</h3>\r\n            <span class=\"text-muted\">{{role}}</span>\r\n            <h6 class=\"capital-name\">{{schoolName }}</h6>\r\n          </div>\r\n  \r\n        </section>\r\n        <br>\r\n          \r\n        <section class=\"row text-center placeholders\">\r\n          <div class=\"col-md-12 placeholder\">\r\n            <div class=\"user-panel\">\r\n              <div class=\"row\">\r\n                <div class=\"sidebar-userpic\">\r\n                  <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-outline-secondary center-block\">Change Password\r\n                    <i class=\"fas fa-chevron-right\"></i>\r\n  \r\n                  </button>\r\n  \r\n  \r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n  \r\n          </div>\r\n  \r\n  \r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <ng-template #template>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title pull-left modal_title_font\">Change Password</h4>\r\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n  \r\n    <form (submit)=\"onPasswordSubmit(f)\" #f=\"ngForm\">\r\n      <div class=\"modal-body\">\r\n  \r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"w3-input change\" id=\"oldPassword\" placeholder=\"Old Password\" ngModel required\r\n                 name=\"oldPassword\" oldPassword\r\n                 #oldPassword=\"ngModel\">\r\n         \r\n  \r\n        </div>\r\n  \r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"w3-input change\" minlength=\"5\" id=\"newPassword\" placeholder=\"New Password\" ngModel\r\n                 required name=\"newPassword\"\r\n                 newPassword #newPassword=\"ngModel\">\r\n  \r\n          <span class=\"help-block\" *ngIf=\"newPassword.errors?.minlength && newPassword.touched\">Password must be of minimum 5 characters length</span>\r\n        </div>\r\n  \r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"w3-input change\" id=\"confirmPassword\" placeholder=\"Confirm Password\"\r\n                 validateEqual=\"password\" ngModel\r\n                 required name=\"confirmPassword\" confirmPassword #confirmPassword=\"ngModel\">\r\n  \r\n          <span class=\"help-block\" *ngIf=\"newPassword.value != confirmPassword.value && confirmPassword.touched \">Your password and confirmation password do not match</span>\r\n        </div>\r\n  \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close</button>\r\n        <button type=\"submit\" [class.disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\r\n                [disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\r\n                class=\"btn btn-primary modal-btn-clr\" (click)=\"modalRef.hide()\">Save changes\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n  \r\n\r\n<!-- <div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Profile Detail\r\n        </b></h2>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n        \r\n        <h6 id=\"header\">{{ProfileObj['data'].fullName}}<br>\r\n          {{ProfileObj['data'].studentId}}</h6>&nbsp;\r\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n       \r\n  \r\n      </div>\r\n    </nav>\r\n  </div>\r\n   <hr><br>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n  <div class=\"col-sm-8\">\r\n      <div class=\"field\">\r\n      <section class=\"row text-center placeholders\">\r\n      <div class=\"col-md-8 offset-md-2 placeholder col-pading-conver\">\r\n\r\n          <br><br>\r\n            <div class=\"alert alert-success\" *ngIf=\"passwordSuccess\">\r\n              <strong>Password Successfully Updated!</strong>\r\n            </div>\r\n  \r\n            <div class=\"alert alert-danger\" *ngIf=\"passwordError\">\r\n              <strong>Mismatch!</strong> Please enter a valid old password.\r\n            </div>\r\n        <img [src]=\"imageToShow\" *ngIf=\"imageToShow;else other_image\" width=\"200\" height=\"200\" class=\"img-fluid rounded-img-profile\"\r\n          alt=\"Generic placeholder thumbnail\"/>\r\n      <ng-template #other_image>\r\n          <img  src=\"/waves/assets/images/dumy.png\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n      </ng-template> \r\n\r\n     \r\n      <div class=\"user-panel-responder\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4\"></div>\r\n              <div class=\"col-lg-4\">\r\n                 \r\n                <label for=\"file_input_id\" (click)=\"openFileDialog($event)\">Update Profile</label>\r\n                <input [(ngModel)]=\"file\" type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\"\r\n                       style=\"display: block\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\r\n                application/png, .png, .jpg , .jpeg\"/>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n      \r\n      <br>\r\n        <form class=\"form-horizontal\" >\r\n           \r\n            <div class=\"form-group\">\r\n                <p class=\"col-sm-12 capital-name\" for=\"student\"><b>Student Name :</b>\r\n\r\n                  {{ProfileObj['data'].fullName}}</p>\r\n\r\n              </div>\r\n             <div class=\"form-group\">\r\n                <p class=\"col-sm-12 capital-name\" for=\"school\"><b>Role :</b>\r\n                  {{role}}\r\n                  </p>\r\n\r\n              </div> \r\n             <div class=\"form-group\">\r\n                <p class=\"col-sm-12\" for=\"school\"><b>School Name :</b>\r\n                  {{ProfileObj['data'].schoolName}}\r\n                  </p>\r\n              \r\n            </div> \r\n            \r\n\r\n\r\n          <br>\r\n\r\n            \r\n        </form>\r\n        </div>\r\n     \r\n      </section>\r\n    </div>\r\n  </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"field2\">\r\n        <section class=\"row text-center placeholders\">\r\n        <div class=\"col-md-8 offset-md-2 placeholder col-pading-conver\">\r\n      <h4 class=\"modal-title pull-left modal_title_font\">Change Password</h4>\r\n\r\n\r\n  <form (submit)=\"onPasswordSubmit(f)\" #f=\"ngForm\">\r\n      <div class=\"form-group\">\r\n            <input type=\"password\" class=\"w3-input change\" id=\"oldPassword\" placeholder=\"Old Password\" ngModel required name=\"oldPassword\"\r\n              oldPassword #oldPassword=\"ngModel\">\r\n        <span class=\"help-block\" *ngIf=\"oldPassword.touched\">Please enter a valid Old  Password</span> \r\n         <span class=\"help-block\" *ngIf=\"passwordError\">Please enter a valid old password</span>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n            <input type=\"password\" class=\"w3-input change\" minlength=\"5\" id=\"newPassword\" placeholder=\"New Password\" ngModel required\r\n              name=\"newPassword\" newPassword #newPassword=\"ngModel\">\r\n\r\n        <span class=\"help-block\" *ngIf=\"newPassword.errors?.minlength && newPassword.touched\">Password must be of minimum 5 characters length</span>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n            <input type=\"password\" class=\"w3-input change\" id=\"confirmPassword\" placeholder=\"Confirm Password\" validateEqual=\"password\"\r\n              ngModel required name=\"confirmPassword\" confirmPassword #confirmPassword=\"ngModel\">\r\n\r\n        <span class=\"help-block\" *ngIf=\"newPassword.value != confirmPassword.value && confirmPassword.touched \">Your password and confirmation password do not match</span>\r\n      </div>\r\n\r\n        <br>\r\n        \r\n          <button type=\"submit\" [class.disabled]=\"!f.valid || newPassword.value != confirmPassword.value\" [disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\r\n            class=\"btn btn-primary modal-btn-clr\">Save Password</button>\r\n      \r\n      </form>\r\n    </div>\r\n    </section>\r\n    </div>\r\n  </div>\r\n  </div>\r\n      </div> -->\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/profile-detail/profile-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/profile/profile-detail/profile-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetailComponent", function() { return ProfileDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileDetailComponent = /** @class */ (function () {
    function ProfileDetailComponent(modalService, profileServiceObj) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.passwordObj = null;
        this.ProfileObj = null;
        this.filesData = {};
        this.imageToShow = null;
        this.image = null;
        this.schoolName = null;
    }
    ProfileDetailComponent.prototype.loadimage = function () {
        var _this = this;
        this.profileServiceObj.getimage(this.userid).subscribe(function (res) {
            // this.createImageFromBlob(res);
            _this.imageToShow = res['data']['result'];
        }, function (err) {
        });
    };
    ProfileDetailComponent.prototype.ngOnInit = function () {
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.schoolName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('schoolName');
        this.firstName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('firstname');
        this.lastName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('lastname');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('stdId');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminId');
        this.loadimage();
        // this.profileServiceObj.downloadImage(this.ProfileObj['data']['userId']).subscribe(res => {
        //   this.createImageFromBlob(res);
        // }, err => {
        // })
    };
    ProfileDetailComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ProfileDetailComponent.prototype.onPasswordSubmit = function (form) {
        var _this = this;
        this.profileServiceObj.updatePassword(this.userid, form.value.oldPassword, form.value.newPassword).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.passwordError = res;
                _this.passwordSuccess = null;
                window.setTimeout(function () {
                    _this.passwordError = null;
                }, 3000);
            }
            else {
                _this.passwordError = null;
                _this.passwordSuccess = res;
                window.setTimeout(function () {
                    _this.passwordSuccess = null;
                }, 3000);
            }
        }, function (err) { });
    };
    // openFileDialog(evt) {
    // }
    // createImageFromBlob(image: Blob) {
    //   let reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     this.imageToShow = reader.result;
    //   }, false);
    //   if (image) {
    //     reader.readAsDataURL(image);
    //   }
    // }
    ProfileDetailComponent.prototype.handleFileUpload = function (evt) {
        var _this = this;
        var self = this;
        if (evt.target.files && evt.target.files.length > 0) {
            var file = evt.target.files[0]; // FileList object
            if ((file.size / 1024) < 20 * 1024) {
                var name_1 = file.name;
                var type_1 = file.type;
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(file);
                reader_1.onload = function () {
                    var data = reader_1.result;
                    _this.image = data;
                    _this.filesData = {
                        data: data,
                        name: name_1,
                        type: type_1
                    };
                    _this.profileServiceObj.setimage(_this.userid, _this.image).subscribe(function (res) {
                        _this.loadimage();
                    }, function (err) {
                    });
                };
            }
            else {
                alert('File size should be less than 20MB');
            }
        }
    };
    ProfileDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-detail',
            template: __webpack_require__(/*! ./profile-detail.component.html */ "./src/app/profile/profile-detail/profile-detail.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ProfileDetailComponent);
    return ProfileDetailComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-list/profile-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/profile/profile-list/profile-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <app-profile-sidebar></app-profile-sidebar>\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Discover</b>\r\n      <span class=\"pf-li-h1-title2\">MY RESPONDERS</span></h2>\r\n        <button \r\n          class=\"navbar-toggler\" \r\n          type=\"button\" \r\n          data-toggle=\"collapse\" \r\n          data-target=\"#navbarSupportedContent1\"\r\n          aria-controls=\"navbarSupportedContent\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" \r\n         id=\"navbarSupportedContent1\">\r\n          <ul class=\"navbar-nav mr-auto\"></ul>\r\n            <form class=\"form-inline\">\r\n              <div class=\"input-group\">\r\n              </div>\r\n            </form>\r\n            \r\n            <h6 id=\"header\">{{studentname}}<br>\r\n              {{studentid}}</h6>&nbsp;\r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">  \r\n        </div>\r\n      </nav>\r\n    </div>\r\n  <hr><br>\r\n\r\n <div class=\"col-lg-12 \">\r\n        <div class=\"input-group form-lng-search\">\r\n          <div class=\"input-group-prepend form-lng-search\">\r\n\r\n          <div class=\"search1\">\r\n            <input type=\"search\"\r\n             class=\"form-control w3-left-align \"\r\n              placeholder=\"Search\" aria-label=\"Search\"\r\n              [(ngModel)]=\"searchInput\"\r\n                   aria-describedby=\"basic-addon1\">\r\n                   <div *ngIf=\"searchInput;else other_check\">\r\n                      <i class=\"fas fa-times check\" (click)=\"searchClose()\"></i>\r\n                    </div>\r\n                      <ng-template #other_check>\r\n                          <i class=\"fas fa-times check\" style=\"display: none;\"></i>\r\n                      </ng-template>\r\n                    </div>\r\n                    \r\n                      <button class=\"input-group-text\" id=\"basic-addon1\"\r\n            (click)=\"searchResponder()\">\r\n              <i class=\"fas fa-search\">\r\n              </i>\r\n\r\n            </button>\r\n            \r\n          </div>\r\n\r\n        </div>\r\n     <br>\r\n     \r\n <div class=\"responder1\">\r\n   <section \r\n   class=\"row text-center placeholders\">\r\n    <div \r\n    class=\"col-md-3 col-sm-6 col-xs-12 placeholder\" *ngFor=\"let profile of ResponderObj.data.result\">\r\n\r\n    <div *ngIf=\"profile.status;else other_style\" >\r\n\r\n    <img \r\n    *ngIf=\"profile.avatarFilePath;else other_image\"\r\n     [src]=\"imageToShow + profile.avatarFilePath\" \r\n     \r\n     class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\" style=\"cursor: pointer;\"\r\n     (click)=\"openModal(template,profile.firstName,profile.lastName,profile.position,\r\n     profile.responderId,profile.avatarFilePath)\">\r\n\r\n    <ng-template \r\n    #other_image>\r\n\r\n    <div class=\"circle\" style=\"cursor: poniter;\" (click)=\"openModal(template,profile.firstName,profile.lastName,\r\n    profile.position,profile.responderId,profile.avatarFilePath)\">\r\n\r\n     <div class=\"text1\">\r\n\r\n       <h2>{{profile.firstName | slice:0:1 | uppercase}}{{profile.lastName | slice:0:1 | uppercase}}</h2>\r\n     </div>\r\n   </div>\r\n     \r\n   </ng-template>\r\n\r\n   <div class=\"user-panel1\" style=\"cursor: pointer;\" \r\n      (click)=\"openModal(template,profile.firstName,profile.lastName,\r\n      profile.position,profile.responderId,profile.avatarFilePath)\"\r\n   >\r\n        <div \r\n        class=\"row\">\r\n\r\n          <div \r\n          class=\"sidebar-userpic\">\r\n            <span *ngIf=\"profile.isAvalable;else other_content\" \r\n            class=\"dot_profile_list_2\">\r\n          </span>\r\n\r\n            <ng-template \r\n            #other_content><span  class=\"dot_profile_list\">\r\n            </span>\r\n          </ng-template>\r\n\r\n          <h4 *ngIf=\"profile.firstName.length<=10;else other_content1\">\r\n              {{profile.title}} {{profile.firstName}} </h4>\r\n            <ng-template #other_content1>\r\n              <h4>{{profile.title}} {{profile.firstName | slice:0:9}}...</h4>\r\n            </ng-template>\r\n            <p style=\"text-transform: lowercase\">{{profile.position}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <ng-template #other_style>\r\n\r\n      <img \r\n      *ngIf=\"profile.avatarFilePath;else other_image\"\r\n       [src]=\"imageToShow + profile.avatarFilePath\" \r\n       (click)=\"openModal(templateresponder,profile.firstName,profile.lastName,\r\n      profile.position,profile.responderId,profile.avatarFilePath)\" style=\"cursor: pointer;\"\r\n       class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n  \r\n      <ng-template \r\n      #other_image>\r\n  \r\n      <div class=\"circle\" style=\"opacity: 0.5;cursor: pointer;\"\r\n      (click)=\"openModal(templateresponder,profile.firstName,profile.lastName,\r\n      profile.position,profile.responderId,profile.avatarFilePath)\">\r\n       <div class=\"text1\">\r\n  \r\n  \r\n         <h2>{{profile.firstName | slice:0:1 | uppercase}}{{profile.lastName | slice:0:1 | uppercase}}</h2>\r\n       </div>\r\n     </div>\r\n       \r\n     </ng-template>\r\n\r\n         \r\n     <div class=\"user-panel1\" style=\"opacity: 0.5;cursor: pointer;\"  \r\n     (click)=\"openModal(templateresponder,profile.firstName,profile.lastName,\r\n      profile.position,profile.responderId,profile.avatarFilePath)\" >\r\n        <div \r\n        class=\"row\">\r\n\r\n          <div \r\n          class=\"sidebar-userpic\">\r\n            <span *ngIf=\"profile.isAvalable;else other_content\" \r\n            class=\"dot_profile_list_2\">\r\n          </span>\r\n\r\n            <ng-template \r\n            #other_content><span  class=\"dot_profile_list\">\r\n            </span>\r\n          </ng-template>\r\n\r\n          <h4 *ngIf=\"profile.firstName.length<=10;else other_content1\">\r\n              {{profile.title}} {{profile.firstName}} </h4>\r\n            <ng-template #other_content1>\r\n              <h4>{{profile.title}} {{profile.firstName | slice:0:9}}...</h4>\r\n            </ng-template>\r\n            <p style=\"text-transform: lowercase\">{{profile.position}} </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n     \r\n \r\n      \r\n    </div>\r\n  \r\n  </section>\r\n\r\n </div>\r\n </div>\r\n  <br>\r\n\r\n  <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title modal_title_std\">Choose an option</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide();\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    \r\n     \r\n      <div class=\"modal-body\">\r\n          \r\n       \r\n          <div class=\"circle\">\r\n          <div class=\"text1\">\r\n          <img *ngIf=\"avatar;else other_image\" [src]=\"imageToShow + avatar\" \r\n          class=\"img-fluid rounded-circle\"\r\n          alt=\"Generic placeholder thumbnail\">\r\n         \r\n    \r\n          <ng-template #other_image>\r\n        \r\n            <h2>{{resfirstname | slice:0:1 | uppercase}}{{reslastname | slice:0:1 | uppercase}}</h2>\r\n          </ng-template>\r\n\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"user-panel1\">\r\n          <div class=\"row\">\r\n            <div class=\"sidebar-userpic\">\r\n              <h4>{{resfirstname}} {{reslastname}}</h4>\r\n              <p style=\"text-transform: lowercase\">{{position}}</p>\r\n              <p style=\"text-transform: lowercase\">{{resId}}</p>\r\n              <a class=\"nav-link-res nav-list\" routerLink=\"/conversation\" (click)=\"modalRef.hide()\">\r\n                <button\r\n                class=\"btn btn-primary popup-btn\">Start a Conversation\r\n                 </button>\r\n                 \r\n              </a>\r\n              <a class=\"nav-link-res nav-list\"  routerLink=\"/messenger\" (click)=\"modalRef.hide()\">\r\n                <button\r\n                class=\"btn btn-primary popup-btn\">Continue Conversation\r\n                 </button>\r\n                \r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>\r\n     \r\n     \r\n    </ng-template>\r\n\r\n\r\n    <ng-template #templateresponder>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title modal_title_std\">Choose an option</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide();\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    \r\n     \r\n      <div class=\"modal-body\">\r\n          \r\n       \r\n          <div class=\"circle\">\r\n          <div class=\"text1\">\r\n          <img *ngIf=\"avatar;else other_image\" [src]=\"imageToShow + avatar\" \r\n          class=\"img-fluid rounded-circle\"\r\n          alt=\"Generic placeholder thumbnail\">\r\n         \r\n    \r\n          <ng-template #other_image>\r\n        \r\n            <h2>{{resfirstname | slice:0:1 | uppercase}}{{reslastname | slice:0:1 | uppercase}}</h2>\r\n          </ng-template>\r\n\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"user-panel1\">\r\n          <div class=\"row\">\r\n            <div class=\"sidebar-userpic\">\r\n              <h4>{{resfirstname}} {{reslastname}}</h4>\r\n              <p style=\"text-transform: lowercase\">{{position}}</p>\r\n              <p style=\"text-transform: lowercase\">{{resId}}</p>\r\n          \r\n              <p >“Responder Locked: Unfortunately, the Responder you are requesting to communicate with is locked. If would like to communicate with this Responder, please speak with your assigned Responder about being referred to them.”\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>\r\n     \r\n     \r\n    </ng-template>\r\n\r\n\r\n    "

/***/ }),

/***/ "./src/app/profile/profile-list/profile-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/profile-list/profile-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileListComponent", function() { return ProfileListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileListComponent = /** @class */ (function () {
    function ProfileListComponent(modalService, profileServiceObj) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.schoolId = null;
        this.userid = null;
        this.ResponderObj = { data: { result: [] } };
        this.searchInput = null;
        this.imageToShow = "http://ec2-18-219-131-166.us-east-2.compute.amazonaws.com/wavesbackend/storage/app/public/";
        this.checkId = [];
        this.resfirstname = null;
        this.reslastname = null;
        this.avatar = null;
        this.resId = null;
    }
    ProfileListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentname = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.studentid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('stdId');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminId');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.profileServiceObj.getResponder(this.userid).subscribe(function (res) {
            _this.ResponderObj['data']['result'] = res['data']['result'];
            // this.ResponderObj['data'].forEach(profile => {
            //   this.profileServiceObj.downloadImage(profile['userId']).subscribe(res => {
            //     let reader = new FileReader();
            //     reader.addEventListener("load", () => {
            //       profile['imageToShow'] = reader.result;
            //     }, false);
            //     if (res) {
            //       reader.readAsDataURL(res);
            //     }
            //   }, err => {
            //     profile['imageToShow'] = null;
            //   })
            // });
        }, function (err) {
        });
    };
    // searchResponder(){
    //   console.log(this.searchInput)
    //   if (this.searchInput.length > 0){
    //     this.profileServiceObj.searchResponder(this.searchInput).subscribe(
    //       res => {
    //         this.ResponderObj = res;
    //         this.ResponderObj['data'].forEach(profile => {
    //           this.profileServiceObj.downloadImage(profile['userId']).subscribe(res => {
    //             let reader = new FileReader();
    //             reader.addEventListener("load", () => {
    //               profile['imageToShow'] = reader.result;
    //             }, false);
    //             if (res) {
    //               reader.readAsDataURL(res);
    //             }
    //           }, err => {
    //             profile['imageToShow'] = null;
    //           })
    //         });
    //       }, err => {
    //         this.ResponderObj['data'] = [];
    //       }
    //     );
    //   }else{
    //     this.profileServiceObj.getResponder().subscribe(
    //       res => {
    //         this.ResponderObj = res;
    //         this.ResponderObj['data'].forEach(profile => {
    //           this.profileServiceObj.downloadImage(profile['userId']).subscribe(res => {
    //             let reader = new FileReader();
    //             reader.addEventListener("load", () => {
    //               profile['imageToShow'] = reader.result;
    //             }, false);
    //             if (res) {
    //               reader.readAsDataURL(res);
    //             }
    //           }, err => {
    //             profile['imageToShow'] = null;
    //           })
    //         });
    //       }, err => {
    //       });
    //   }
    // }
    // searchClose() 
    // {
    //   if(this.profileServiceObj==null)
    //   { 
    //     this.searchInput="";
    //   }
    //  else{
    //   this.searchInput="";
    //     this.profileServiceObj.getResponder().subscribe(
    //       res => {
    //         this.ResponderObj = res;
    //         this.ResponderObj['data'].forEach(profile => {
    //           this.profileServiceObj.downloadImage(profile['userId']).subscribe(res => {
    //             let reader = new FileReader();
    //             reader.addEventListener("load", () => {
    //               profile['imageToShow'] = reader.result;
    //             }, false);
    //             if (res) {
    //               reader.readAsDataURL(res);
    //             }
    //           }, err => {
    //             profile['imageToShow'] = null;
    //           })
    //         });
    //       }, err => {
    //       });
    //   }
    // }
    // imageGet(userid:number){
    //   if(this.checkId[userid]==null)
    //   {
    //     this.profileServiceObj.downloadImage(userid).subscribe(res => {
    //       this.createImageFromBlob(res,userid);
    //     },
    //     err => {}
    //   )
    //   this.checkId[userid]=1;
    //   }
    //   }
    //   createImageFromBlob(image: Blob,userid:number) {
    //     let reader = new FileReader();
    //     reader.addEventListener("load", () => {
    //       this.imageToShow[userid] = reader.result;
    //     }, false);
    //     if (image) {
    //       reader.readAsDataURL(image);
    //     }
    //   }
    ProfileListComponent.prototype.openModal = function (template, firstname, lastname, position, responderid, image) {
        this.resfirstname = firstname;
        this.reslastname = lastname;
        this.resId = responderid;
        this.position = position;
        this.avatar = image;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    ProfileListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-list',
            template: __webpack_require__(/*! ./profile-list.component.html */ "./src/app/profile/profile-list/profile-list.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileListComponent);
    return ProfileListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-mass-messenger/profile-mass-messenger.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/profile/profile-mass-messenger/profile-mass-messenger.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-profile-sidebar></app-profile-sidebar>\n<div class=\"col-lg-12 ml-5 pr-5\">\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\n      <h2 class=\"pf-li-h1-title \"><b>MASS MESSENGER</b>\n      <span class=\"pf-li-h1-title2\">MY RESPONDERS</span></h2>\n        <button \n          class=\"navbar-toggler\" \n          type=\"button\" \n          data-toggle=\"collapse\" \n          data-target=\"#navbarSupportedContent1\"\n          aria-controls=\"navbarSupportedContent\" \n          aria-expanded=\"false\" \n          aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    <div class=\"collapse navbar-collapse\" \n         id=\"navbarSupportedContent1\">\n          <ul class=\"navbar-nav mr-auto\"></ul>\n            <form class=\"form-inline\">\n              <div class=\"input-group\">\n              </div>\n            </form>\n            <h6 id=\"header\">{{ProfileObj['data'].fullName}}<br>\n              {{ProfileObj['data'].studentId}}</h6>&nbsp;\n             <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\n        </div>\n      </nav>\n    </div>\n  <hr><br>\n  \n&nbsp;Select All <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"><br>\n\n<section class=\"row text-center placeholders\">\n  <div class=\"col-sm-12\"></div>\n  <div class=\"col.col-lg-2\">\n    <div>\n      <ul>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n      </ul>\n    </div>\n\n  </div>\n  <div class=\"col-sm-2\"></div>\n  <div class=\"col.col-lg-2\">\n    <div>\n      <div class=\"row\">\n        <div class=\"sidebar-userpic\">\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <ul>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\n      </ul>\n    </div>\n\n  </div>\n\n</section>\n\n<br>\n<section class=\"row text-center placeholders\">\n  <div class=\"col-sm-12\"></div>\n  <div class=\"col-sm-auto\"></div>\n  <div class=\"col.col-lg-2\">\n    <div>\n      <div class=\"row\">\n        <div class=\"sidebar-userpic\">\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <textarea border=\"1px solid #ccc\" rows=\"8\" cols=\"70\" id=\"comment\"\n                placeholder=\"Type Your Message Here\"></textarea><br>\n      <button type=\"submit\" class=\"btn btn-primary btn-block \">Send Message</button>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/profile/profile-mass-messenger/profile-mass-messenger.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/profile/profile-mass-messenger/profile-mass-messenger.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProfileMassMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMassMessengerComponent", function() { return ProfileMassMessengerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileMassMessengerComponent = /** @class */ (function () {
    function ProfileMassMessengerComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
        this.ProfileObj = null;
    }
    ProfileMassMessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileServiceObj.getProfile().subscribe(function (res) {
            _this.ProfileObj = res;
        }, function (err) { });
    };
    ProfileMassMessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-mass-messenger',
            template: __webpack_require__(/*! ./profile-mass-messenger.component.html */ "./src/app/profile/profile-mass-messenger/profile-mass-messenger.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileMassMessengerComponent);
    return ProfileMassMessengerComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-sidebar/profile-sidebar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/profile/profile-sidebar/profile-sidebar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggle()\" class=\"hamburger\">\r\n  <span>\r\n    <i class=\"fas fa-bars\"></i>\r\n  </span>\r\n</button>\r\n<div class=\"sidenav\" [@slideInOut]=\"menuState\">\r\n  <a class=\"closebtn\" (click)=\"toggle()\">&times;</a>\r\n\r\n  \r\n  <div class=\"sidebar-user-panel\">\r\n    <div class=\"user-panel\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n\r\n          <a routerLink=\"/profile-detail\">\r\n            <img [src]=\"imageToShow\" *ngIf=\"imageToShow; else other_image\" class=\"img-responsive \" alt=\"\">\r\n            <ng-template #other_image>\r\n\r\n              <div class=\"sidebar-user-panel\">\r\n                <div class=\"user-panel\">\r\n                  <div class=\"row\">\r\n                    <div class=\"sidebar-userpic\">\r\n                      <span class=\"avatar_name\">\r\n                        <i class=\"fas fa-camera font-awesome-clr\"></i>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </ng-template>\r\n\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <a  routerLink=\"/profile\" [routerLinkActive]=\"['active']\">\r\n\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/Discover_white.png\">Discover</a>\r\n \r\n  <a class=\"link\" routerLink=\"/messenger\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/Messages_white.png\">Messages</a>\r\n  \r\n  <a class=\"link\" routerLink=\"/session\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/Sessions_white.png\">Sessions</a>\r\n  \r\n  <a class=\"link\" routerLink=\"/local-resources\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/LocalResources_white.png\">Local Resources</a>\r\n  \r\n  <a class=\"link\" routerLink=\"/crisis-support\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/CrisisSupport_white.png\">Crisis Support </a>\r\n  \r\n    \r\n  <br>\r\n  <a>\r\n    <hr class=\"style14\"> </a>\r\n  <br>\r\n\r\n  <a class=\"link nav-list\" routerLink=\"/profile-detail\" [routerLinkActive]=\"['active']\">Update Profile\r\n  </a>\r\n\r\n  <a class=\"link nav-list\" routerLink=\"/feedback\" [routerLinkActive]=\"['active']\">Feedback\r\n  </a>\r\n \r\n  <a class=\"link nav-list\">Blog\r\n  </a>\r\n\r\n  <a class=\"link nav-list\" routerLink=\"/privacy\" [routerLinkActive]=\"['active']\">Privacy\r\n  </a>\r\n\r\n  <a class=\"link nav-list\" routerLink=\"/terms\" [routerLinkActive]=\"['active']\">Terms\r\n  </a>\r\n\r\n\r\n  <div class=\"bottom-button\">\r\n    <a>\r\n\r\n      <h6 id=\"li_clr\">{{schoolName}}</h6>\r\n\r\n      <hr class=\"beautiful-line\">\r\n      <button type=\"button\" class=\"btn btn-primary side-btn\" (click)=\"logOut()\">Sign Out</button>\r\n      <!-- <span class=\"transparent_btn\" (click)=\"logOut()\">Sign Out</span> -->\r\n    </a>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile-sidebar/profile-sidebar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/profile/profile-sidebar/profile-sidebar.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSidebarComponent", function() { return ProfileSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileSidebarComponent = /** @class */ (function () {
    function ProfileSidebarComponent(router, profileServiceObj) {
        this.router = router;
        this.profileServiceObj = profileServiceObj;
        this.menuState = 'out';
        this.isAvatarAvalable = false;
        this.schoolName = null;
    }
    ProfileSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schoolName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('schoolName');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminId');
        this.profileServiceObj.getimage(this.userid).subscribe(function (res) {
            _this.imageToShow = res['data']['result'];
        }, function (err) {
        });
    };
    ProfileSidebarComponent.prototype.toggle = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    ProfileSidebarComponent.prototype.logOut = function () {
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('token');
        this.router.navigate(['/login']);
    };
    ProfileSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-sidebar',
            template: __webpack_require__(/*! ./profile-sidebar.component.html */ "./src/app/profile/profile-sidebar/profile-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ProfileSidebarComponent);
    return ProfileSidebarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* input[type=search]::-webkit-search-cancel-button {\r\n  -webkit-appearance: searchfield-cancel-button;\r\n} */\r\nh1, h2, h3, h4, h5, h6,p {\r\n  font-family: Raleway !important;\r\n}\r\nh4#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\nh6#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\nh5#text {\r\n\r\n  text-align: left !important;\r\n}\r\nh5#font {\r\n\r\n  text-transform: capitalize;\r\n  font-family: Raleway !important;\r\n}\r\nh6#size {\r\n  font-size: 14px !important;\r\n  text-align: left !important;\r\n}\r\np#size {\r\n  font-size: 14px !important;\r\n  text-align: left !important;\r\n}\r\np#font-size {\r\n  font-size: large !important;\r\n}\r\nh3#font2 {\r\n  font-family: Montserrat, Arial !important;\r\n}\r\n.capital-name{\r\n  text-transform: capitalize;\r\n  }\r\n.disabled {\r\n  cursor: not-allowed;\r\n}\r\n.help-block {\r\n\r\n  color: red;\r\n}\r\n/* //////////////////////////start/////////////// */\r\n/* /////////////////////////////end/////////////////////// */\r\n.nav-bg-color {\r\n  background-color: #16baff !important;\r\n}\r\n.nav-link {\r\n  color: #ffffff !important;\r\n  font: Raleway !important;\r\n}\r\n.nav-link:hover {\r\n  color: rgb(83, 117, 131) !important;\r\n}\r\n.nav-link-res {\r\n  color: #000000 !important;\r\n  font: Raleway !important;\r\n}\r\n.nav-link-res:hover {\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n.pt-3 {\r\n  /* padding-top: 5rem !important; */\r\n  margin-top: 5rem;\r\n  padding: 0px !important;\r\n\r\n}\r\n.col-md-12 {\r\n  padding: 0px;\r\n}\r\n.form-control {\r\n  border-radius: 0px !important;\r\n}\r\n.avatar {\r\n  max-width: 35px;\r\n  max-height: 35px;\r\n}\r\n.form-control {\r\n\r\n  padding: 2px;\r\n\r\n}\r\n.form-control-search {\r\n  width: 270px !important;\r\n}\r\n.form-lng-search{\r\n  width: 80% !important;\r\n  \r\n}\r\n.search1{\r\n  width: 80% !important;\r\n  position: relative;\r\n}\r\n.search1 .check{\r\n  position: absolute;\r\n  top: 30%;\r\n  right:5px;\r\n}\r\n.input-group-text {\r\n  margin-right: 10px !important;\r\n}\r\n#header\r\n{\r\n  font-size: 15px;\r\n    font-weight: bold;\r\n    text-transform: capitalize;\r\n    font-family: Raleway !important;\r\n}\r\n/* css for side_bar */\r\n.sidebar {\r\n  position: fixed;\r\n  top: 59px !important;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  padding: 20px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  border-right: 1px solid #eee;\r\n  background-color: #3D3D3D;\r\n}\r\n/* Sidebar navigation */\r\n.sidebar {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\r\n  color: #fff;\r\n  background-color: #414141 !important;\r\n}\r\n.sidebar .nav {\r\n  margin-bottom: 20px;\r\n}\r\n.sidebar .nav-item {\r\n  width: 100%;\r\n}\r\n.sidebar .nav-item + .nav-item {\r\n  margin-left: 0;\r\n}\r\n.sidebar .nav-link {\r\n  border-radius: 0;\r\n}\r\n@media screen and (max-width: 575px) {\r\n\r\n  .sidebar {\r\n\r\n    position: relative !important;\r\n    top: 58px !important;\r\n  }\r\n}\r\n/* --------------------- */\r\n.nav_bar_font {\r\n  font-family: Raleway !important;\r\n  font-size: 19px;\r\n}\r\n.font-awesome-clr {\r\n  font-size: 2em;\r\n  color: #4DC4F7 !important;\r\n}\r\n.font-awesome-clr-previous {\r\n  font-size: 1em;\r\n  color: #4DC4F7 !important;\r\n}\r\n.font-awesome-clr2 {\r\n  font-size: 1.3em;\r\n  color: #ffffff !important;\r\n  padding-right: 5px;\r\n}\r\n.font-awesome-feedbck {\r\n  font-size: 1.5em;\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n.font-awesome-size {\r\n  font-size: 25px;\r\n  color: #4DC4F7 !important;\r\n}\r\n.icon-size {\r\n  font-size: 25px;\r\n  color: gray !important;\r\n}\r\n.user-panel {\r\n\r\n  float: left;\r\n    width: 100%;\r\n    color: #000;\r\n    padding: 40px 10px 30px 10px;\r\n}\r\n.user-panel1 {\r\n  float: left;\r\n    width: 100%;\r\n    color: #000;\r\n    padding: 0 !important;\r\n}\r\n.user-panel-responder {\r\n \r\n  width: 100%;\r\n  color: #000;\r\n  padding: 40px 10px 20px 10px;\r\n}\r\n.row {\r\n\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n.sidebar-userpic {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.sidebar-userpic img {\r\n  margin: 0px auto;\r\n  width: 43%;\r\n  height: 126px;\r\n \r\n  border-radius: 50% 50% 50% 50%;\r\n}\r\n.avatar_name {\r\n  background-color: aliceblue;\r\n  padding: 23% 15% 16% 15%;\r\n  border-radius: 50%;\r\n  color: gray;\r\n}\r\n.rounded-img-profile {\r\n\r\n  border-radius: 50% !important;\r\n  width: 180px;\r\n  height: 230px;\r\n}\r\n.rounded-circle{\r\n  \r\n  width: 130px !important;\r\n  height: 160px !important; \r\n}\r\n.rounded-clc-conv{\r\n  width: 150px !important;\r\n  height: 190px !important;\r\n}\r\n.img-responsive {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.sidebar-userpic-name {\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n#sch_name_sidebar {\r\n  position: absolute;\r\n  display: inline-block;\r\n  bottom: 40px;\r\n  left: 15px;\r\n}\r\n#li_clr {\r\n  color: white !important;\r\n  font-family: Raleway !important;\r\n\r\n}\r\n#logout_sidebar_button {\r\n\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n}\r\n/* signout button css */\r\n.transparent_btn {\r\n \r\n  display: inline-block;\r\n  padding: 3% 23%;\r\n  color: #FFF;\r\n  border: 2px solid #FFF;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  line-height: 120%;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border-radius: 0px;\r\n  transition: background-color 300ms ease;\r\n  cursor: pointer;\r\n}\r\n.transparent_btn:hover {\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  color: #FFF;\r\n}\r\n.sch-name {\r\n\r\n  position: absolute;\r\n  bottom: 0px;\r\n}\r\n/* end button css */\r\nhr {\r\n  background-color: #ffffff !important;\r\n}\r\nhr {\r\n  border: 0;\r\n  border-top: 1px solid #d8d8d8 !important;\r\n  margin: 0;\r\n}\r\nhr.beautiful-line {\r\n  border-top: 2px solid #fff !important;\r\n  margin-bottom: 10px;\r\n  width:  90%;\r\n\r\n}\r\nhr.style14 { \r\n  border: 0; \r\n  height: 0px;\r\n  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); \r\n}\r\n.dot_profile_list {\r\n  right: 0px;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dot_profile_list_2 {\r\n  right: 0px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #098cc4;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dor-clr-lgblue {\r\n  color: #4DC4F7;\r\n  font-size: 20px;\r\n}\r\n.dor-clr-drkblue {\r\n  color: #098cc4;\r\n  font-size: 20px;\r\n}\r\n.dor-clr-green {\r\n  color: green;\r\n  font-size: 20px;\r\n}\r\n.dor-clr-orange {\r\n  color: orange;\r\n  font-size: 20px;\r\n}\r\n.dor-clr-orgred {\r\n  color: orangered;\r\n  font-size: 20px;\r\n}\r\n.dor-clr-red1 {\r\n  color: #d82727;\r\n  font-size: 20px;\r\n}\r\n.dor-clr-red {\r\n  color: #f74747;\r\n  font-size: 20px;\r\n}\r\n.prf_li_title {\r\n  font-size: 14px;\r\n  font-family: Raleway !important;\r\n}\r\n.pf-li-h1-title {\r\n  margin-left: 10px;\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n}\r\n.pf-li-h1-title2 {\r\n  margin-left: 10px;\r\n  font-size: 1.2rem;\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n}\r\n.hr-line {\r\n  margin-left: 10px;\r\n  width: 83.1%;\r\n}\r\n.pf-li-line-height {\r\n  line-height: 1;\r\n}\r\n.change::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.change:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.change::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.change:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.msg-plc-size::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.modal_title_font {\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n  font-size: bold;\r\n}\r\n.modal_title_std{\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n  font-size: bold;\r\n  margin-left: auto;\r\n  margin-right: -6%;\r\n}\r\n.modal-btn-clr {\r\n  color: #16baff;\r\n}\r\n.form-control-textarea {\r\n  padding: 0px !important;\r\n  border-radius: 7px !important;\r\n  font-size: 16px !important;\r\n}\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #16baff;\r\n  border-color: #16baff;\r\n}\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-block-padiing {\r\n  padding-top: 10px !important;\r\n  padding-bottom: 10px !important;\r\n  font-size: 18px;\r\n}\r\n.col-pading {\r\n  /* padding-top: 100px !important; */\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: -105px;\r\n}\r\n.session-padding{\r\n  margin-left: 0;\r\n}\r\n.feedback-column\r\n{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.col-pading-conver {\r\n  /* padding-top: 60px !important; */\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.leaving-msg-center\r\n{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.btn-outline-secondary\r\n{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\ni#right {\r\n  float: right !important;\r\n}\r\na#clr {\r\n  color: #2c75ff;\r\n  font-family: Raleway !important;\r\n  font-size: larger !important;\r\n  float: right !important;\r\n}\r\n.line {\r\n  border-bottom: 3px solid rgb(46, 15, 15);\r\n  padding-bottom: 30px !important;\r\n}\r\n.line2 {\r\n  border-bottom: 1px solid #d8d8d8 !important;\r\n}\r\n.line-session {\r\n  border-bottom: 3px solid #d4d4d4;\r\n\r\n}\r\n.line-session2 {\r\n  border-bottom: 3px solid #d4d4d4;\r\n  padding-bottom: 30px !important;\r\n}\r\ninput[type=\"radio\"] { /* IE 9 */\r\n  -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */\r\n  transform: scale(1.5);\r\n}\r\nlabel {\r\n  color: blue;\r\n  cursor: pointer;\r\n  text-align: center !important;\r\n}\r\nlabel:hover {\r\n  text-decoration: underline;\r\n}\r\n#file_input_id {\r\n  display: none !important;\r\n}\r\nimg#prf-list-size {\r\n  width: 35px;\r\n  height: 35px;\r\n  margin-right: 10px;\r\n}\r\n/*  -----------------------Messenger css--------------------- */\r\n.list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.pull-right {\r\n  float: right !important;\r\n}\r\n.pull-left {\r\n  float: left !important;\r\n}\r\n.chat-img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50px;\r\n  margin-right: 10px;\r\n}\r\n.message {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  display: block;\r\n  width: 83%;\r\n}\r\n/* ==========================message example======================= */\r\n#frame {\r\n  width: 100%;\r\n  min-width: 360px;\r\n  height: 82vh;\r\n  min-height: 300px;\r\n  max-height: 720px;\r\n  background: white;\r\n}\r\n@media screen and (max-width: 360px) {\r\n  #frame {\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n}\r\n@media screen and (max-height: 960px) {\r\n  #frame {\r\n    height: 78vh;\r\n  }\r\n}\r\n#frame #sidepanel {\r\n  float: left;\r\n  min-width: 200px;\r\n  max-width: 340px;\r\n  width: 40%;\r\n  height: 100%;\r\n  background: white;\r\n  color: black;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel {\r\n    width: 58px;\r\n    min-width: 58px;\r\n  }\r\n}\r\n#frame #sidepanel #profile.expanded .wrap {\r\n  height: 210px;\r\n  line-height: initial;\r\n}\r\n#frame #sidepanel #profile.expanded .wrap p {\r\n  margin-top: 20px;\r\n}\r\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n  -webkit-filter: FlipH;\r\n          filter: FlipH;\r\n  -ms-filter: \"FlipH\";\r\n}\r\n#frame #sidepanel #profile .wrap {\r\n  height: 60px;\r\n  line-height: 60px;\r\n  overflow: hidden;\r\n  transition: 0.3s height ease;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap {\r\n    height: 55px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap img {\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  padding: 3px;\r\n  border: 2px solid #e74c3c;\r\n  height: auto;\r\n  float: left;\r\n  cursor: pointer;\r\n  transition: 0.3s border ease;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap img {\r\n    width: 40px;\r\n    margin-left: 4px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap p {\r\n  float: left;\r\n  margin-left: 15px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap p {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap i.expand-button {\r\n  float: right;\r\n  margin-top: 23px;\r\n  font-size: 0.8em;\r\n  cursor: pointer;\r\n  color: #435f7a;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap i.expand-button {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options.active {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  margin: 75px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options.active {\r\n    margin-top: 62px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #435f7a;\r\n  margin: -8px 0 0 24px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options:before {\r\n    margin-left: 23px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul {\r\n  overflow: hidden;\r\n  border-radius: 6px;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li {\r\n  padding: 15px 0 30px 18px;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li {\r\n    padding: 15px 0 35px 22px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\r\n  background: #4DC4F7;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  margin: 5px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n    width: 14px;\r\n    height: 14px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 14px;\r\n  margin: -3px 0 0 -3px;\r\n  background: transparent;\r\n  border-radius: 50%;\r\n  z-index: 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li p {\r\n  padding-left: 12px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li p {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #expanded {\r\n  padding: 100px 0 0 0;\r\n  display: block;\r\n  line-height: initial !important;\r\n}\r\n#frame #sidepanel #profile .wrap #expanded label {\r\n  float: left;\r\n  clear: both;\r\n  margin: 0 8px 5px 0;\r\n  padding: 5px 0;\r\n}\r\n#frame #sidepanel #profile .wrap #expanded input {\r\n  border: none;\r\n  margin-bottom: 6px;\r\n  background: #32465a;\r\n  border-radius: 3px;\r\n  color: #f5f5f5;\r\n  padding: 7px;\r\n  width: calc(100% - 43px);\r\n}\r\n#frame #sidepanel #profile .wrap #expanded input:focus {\r\n  outline: none;\r\n  background: #4DC4F7;\r\n}\r\n#frame #sidepanel #contacts {\r\n  height: calc(100% - 20px);\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts {\r\n    height: calc(100% - 149px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  #frame #sidepanel #contacts::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #contacts.expanded {\r\n  height: calc(100% - 334px);\r\n}\r\n#frame #sidepanel #contacts::-webkit-scrollbar {\r\n  width: 8px;\r\n  /* background: #b2b2b2; */\r\n}\r\n#frame #sidepanel #contacts::-webkit-scrollbar-thumb {\r\n  /* background-color:#b2b2b2; */\r\n\r\n}\r\n#frame #sidepanel #contacts ul li.contact {\r\n  position: relative;\r\n  padding: 10px 0 15px 0;\r\n  font-size: 0.9em;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact {\r\n    padding: 6px 0 46px 8px;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact:hover {\r\n  background: #4DC4F7;\r\n}\r\n#frame #sidepanel #contacts ul li.contact.active {\r\n  background: #4DC4F7;\r\n  border-right: 5px solid #4DC4F7;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap {\r\n  width: 88%;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap {\r\n    width: 100%;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap span {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: -2px 0 0 -2px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  border: 2px solid #2c3e50;\r\n  background: #95a5a6;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap img {\r\n    margin-right: 0px;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n  padding: 5px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\r\n  font-weight: 600;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\r\n  margin: 5px 0 0 0;\r\n  padding: 0 0 1px;\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: 1s all ease;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\r\n  position: initial;\r\n  border-radius: initial;\r\n  background: none;\r\n  border: none;\r\n  padding: 0 2px 0 0;\r\n  margin: 0 0 0 1px;\r\n  opacity: .5;\r\n}\r\n#frame #sidepanel #bottom-bar {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n#frame #sidepanel #bottom-bar button {\r\n  float: left;\r\n  border: none;\r\n  width: 50%;\r\n  padding: 10px 0;\r\n  background: #32465a;\r\n  color: #f5f5f5;\r\n  cursor: pointer;\r\n  font-size: 0.85em;\r\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button {\r\n    float: none;\r\n    width: 100%;\r\n    padding: 15px 0;\r\n  }\r\n}\r\n#frame #sidepanel #bottom-bar button:focus {\r\n  outline: none;\r\n}\r\n#frame #sidepanel #bottom-bar button:nth-child(1) {\r\n  border-right: 1px solid #2c3e50;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\r\n    border-right: none;\r\n    border-bottom: 1px solid #2c3e50;\r\n  }\r\n}\r\n#frame #sidepanel #bottom-bar button:hover {\r\n  background: #435f7a;\r\n}\r\n#frame #sidepanel #bottom-bar button i {\r\n  margin-right: 3px;\r\n  font-size: 1em;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button i {\r\n    font-size: 1.3em;\r\n  }\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button span {\r\n    display: none;\r\n  }\r\n}\r\n#frame .content {\r\n  float: right;\r\n  background-color: white !important;\r\n  width: 55%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content {\r\n    width: calc(100% - 58px);\r\n    min-width: 300px !important;\r\n  }\r\n}\r\n@media screen and (min-width: 900px) {\r\n  #frame .content {\r\n    width: calc(100% - 340px);\r\n  }\r\n}\r\n/* @media only screen and (max-width: 767px) and (min-width: 740px)  {\r\n  #frame .content  {\r\n    width: 44% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 741px) and (min-width: 736px)  {\r\n  #frame .content  {\r\n    width: 40% !important;\r\n  }\r\n} */\r\n#frame .content .contact-profile {\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  background: white;\r\n}\r\n#frame .content .contact-profile img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 9px 12px 0 9px;\r\n}\r\n#frame .content .contact-profile p {\r\n  float: left;\r\n}\r\n#frame .content .contact-profile .social-media {\r\n  float: right;\r\n}\r\n#frame .content .contact-profile .social-media i {\r\n  margin-left: 14px;\r\n  cursor: pointer;\r\n}\r\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\r\n  margin-right: 20px;\r\n}\r\n#frame .content .contact-profile .social-media i:hover {\r\n  color: #435f7a;\r\n}\r\n#frame .content .messages {\r\n  height: auto;\r\n  min-height: calc(100% - 93px);\r\n  max-height: calc(100% - 93px);\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .messages {\r\n    max-height: calc(100% - 105px);\r\n  }\r\n\r\n}\r\n#frame .content .messages::-webkit-scrollbar {\r\n  width: 8px;\r\n  background: transparent;\r\n}\r\n#frame .content .messages::-webkit-scrollbar-thumb {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n#frame .content .messages ul li {\r\n  display: inline-block;\r\n  clear: both;\r\n  float: left;\r\n  margin: 15px 15px 5px 15px;\r\n  width: calc(100% - 25px);\r\n  font-size: 0.9em;\r\n}\r\n#frame .content .messages ul li:nth-last-child(1) {\r\n  margin-bottom: 20px;\r\n}\r\n#frame .content .messages ul li.sent img {\r\n  margin: 6px 8px 0 0;\r\n}\r\n#frame .content .messages ul li.sent p {\r\n  background: #f0f1f0;\r\n  color: black;\r\n}\r\n#frame .content .messages ul li.replies img {\r\n  float: right;\r\n  margin: 6px 0 0 8px;\r\n}\r\n#frame .content .messages ul li.replies p {\r\n  background: #0089fa;\r\n  color: white;\r\n  float: right;\r\n}\r\n#frame .content .messages ul li img {\r\n  width: 35px;\r\n  border-radius: 50%;\r\n  float: left;\r\n}\r\n#frame .content .messages ul li p {\r\n  display: inline-block;\r\n  padding: 10px 15px;\r\n  border-radius: 20px;\r\n  max-width: 205px;\r\n  line-height: 130%;\r\n}\r\n@media screen and (min-width: 735px) {\r\n  #frame .content .messages ul li p {\r\n    max-width: 300px;\r\n  }\r\n}\r\n#frame .content .message-input {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 99%;\r\n  z-index: 99;\r\n\r\n}\r\n#frame .content .message-input .wrap {\r\n  position: relative;\r\n}\r\n#frame .content .message-input .wrap input {\r\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n  float: left;\r\n  border: none;\r\n  width: calc(100% - 90px);\r\n  padding: 11px 32px 10px 8px;\r\n  font-size: 0.8em;\r\n  color: #32465a;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .message-input .wrap input {\r\n    padding: 15px 32px 16px 8px;\r\n  }\r\n}\r\n#frame .content .message-input .wrap input:focus {\r\n  outline: none;\r\n}\r\n#frame .content .message-input .wrap button {\r\n  float: right;\r\n  border: none;\r\n  width: 50px;\r\n  padding: 12px 0;\r\n  cursor: pointer;\r\n  background: #16baff;\r\n  color: #f5f5f5;\r\n}\r\n#frame .content .message-input .wrap button:hover {\r\n  background: #4DC4F7;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .message-input .wrap button {\r\n    padding: 16px 0;\r\n  }\r\n}\r\n/* =====================SESSION COMPONENT CSS===================== */\r\n.session-img {\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50px;\r\n  margin-right: 10px;\r\n}\r\n.session-block {\r\n  margin-top: 20px;\r\n}\r\n.font-awesome-session {\r\n  font-size: 2em;\r\n  color: #d8d9dc !important;\r\n\r\n}\r\n.dropdown-toggle::after {\r\n\r\n  border-top: 0 !important;\r\n\r\n  border-left: 0 !important;\r\n}\r\n.dropdown-menu.show {\r\n  display: block;\r\n  -webkit-transform: translate3d(-138px, 32px, 0px) !important;\r\n          transform: translate3d(-138px, 32px, 0px) !important;\r\n}\r\n/* |-----------------------------------------Profile Detail---------------------------------| */\r\n.field\r\n{\r\nmargin: 10% 0% 0% 0%;\r\n  border: 1px solid #bbbec1;\r\n  width: 100%;\r\n  height: 720px;\r\n  \r\n}\r\n.field2\r\n{\r\nmargin: 20.5% 0% 0% 0%;\r\n  border: 1px solid #bbbec1;\r\n  width: 100%;\r\n  height: 450px;\r\n  \r\n}\r\n/* ========================= CRISIS SUPPORT CSS =========================== */\r\n#new-board-btn {\r\n  margin-right: 10px !important;\r\n}\r\np#set-w {\r\n  width: 310px;\r\n}\r\n/* ---------------------LOCAL RESOURCES CSS------------------------------------- */\r\n.btn-color {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0px 10px;\r\n  margin: 6px 6px;\r\n  text-align: center;\r\n  width: 117px;\r\n  height: 30px;\r\n  border-radius: 3px;\r\n}\r\n.left-btn {\r\n  margin-left: 0%;\r\n}\r\n.btn-color1 {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0px 12px;\r\n  margin: 6px 6px;\r\n  text-align: left;\r\n}\r\n.text {\r\n  padding: 0px 20px;\r\n  text-align: left;\r\n  justify-content: center;\r\n}\r\n/* ========================CSS FOR ADMIN-SIDEBAR================================ */\r\n.sidenav {\r\n  background: #16baff;\r\n  color: #fff;\r\n  position: fixed;\r\n  left: auto;\r\n  top: 0;\r\n  /* right: 0; */\r\n  bottom: 0;\r\n  max-width: 250px;\r\n  min-width: 250px;\r\n  z-index: 9999;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  \r\n}\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n  color: #ffffff;\r\n  display: block;\r\n  font-family: Raleway !important;\r\n  font-size: 18px ;\r\n  line-height: 2;\r\n}\r\n@media screen and (max-height: 770px) {\r\n\r\n  .sidenav a {\r\n    padding: 0% 8px 3% 16px !important;\r\n    \r\n  }\r\n}\r\n@media screen and (max-height: 715px) {\r\n\r\n  .sidenav a {\r\n    padding: 0% 8px 1% 16px !important;\r\n    \r\n  }\r\n  .user-panel {\r\n    float: left;\r\n    width: 100%;\r\n    color: #000;\r\n    padding: 25px 10px 25px 10px;\r\n}\r\n}\r\n.link:hover{\r\n  color:#FFF;\r\n  background-color: #15b1f2;\r\n  text-decoration: none;\r\n}\r\n.link:active{\r\n  color:#FFF;\r\n  background-color: #15b1f2;\r\n  text-decoration: none;\r\n}\r\n.active {\r\n  color:#FFF !important;\r\n  background-color: #15b1f2 !important;\r\n  text-decoration: none !important;\r\n}\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: -18px;\r\n  right: 16px;\r\n  font-size: 36px !important;\r\n  margin-left: 50px;\r\n  cursor: pointer;\r\n\r\n}\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n.mybutton {\r\n  padding-top: 1px;\r\n  position: static;\r\n  bottom: 0px;\r\n  MARGIN-LEFT: 0px;\r\n  background-color: #000;\r\n  width: 190px;\r\n  margin-top: 390px;\r\n}\r\n.bottom-button {\r\n  background-color: #1087ba;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n  padding-top:3px; \r\n  /* padding-right: 32%; */\r\n}\r\n.side-btn{\r\n  width: 90%;\r\n  border-radius: 0;\r\n}\r\n@media screen and (min-height:640px)\r\n{\r\n .bottom-button\r\n {\r\n   background-color: #1087ba;\r\n   position: absolute;\r\n   bottom: 0;\r\n   /* padding-right: 43%; */\r\n }\r\n}\r\n.bottom-button1 {\r\n  background-color: #000;\r\n  margin-top: 300%;\r\n}\r\na.nav-list{\r\n  font-size: 1rem !important;\r\n  padding-left: 30px !important;\r\n  line-height: 1.5 !important;\r\n}\r\n/* ///////////toogle menu  CSS/////////////// */\r\n.hamburger {\r\n  display: block;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 67px;\r\n  height: 96px;\r\n  font-size: 0;\r\n  text-indent: -9999px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: none;\r\n  border: 0;\r\n}\r\n.hamburger span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 34px;\r\n  left: 11px;\r\n  right: 28px;\r\n  height: 3px;\r\n  background: #bbbec1;\r\n}\r\n.hamburger span::before,\r\n.hamburger span::after {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #bbbec1;\r\n  /* background-color: #1a2580; */\r\n  content: \"\";\r\n}\r\n.hamburger span::before {\r\n  top: -8px;\r\n}\r\n.hamburger span::after {\r\n  bottom: -8px;\r\n}\r\n/* /////////////END TOGGLE MENU CSS/////////////// */\r\n/* /////////////STUDENT PROFILE LIST/////////////// */\r\n.responder1\r\n{\r\n  border: 1px solid #bbbec1;\r\n  margin-right: 1%;\r\n  padding: 2% 2%;\r\n  width: 100%;\r\n  height: 720px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n }\r\n/* /////////////END STUDENT PROFILE LIST/////////////// */\r\n/* Let's get this party started */\r\n::-webkit-scrollbar {\r\n  width: 0px !important;\r\n  height: 0px !important;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  /* -webkit-box-shadow: inset 0 0 6px #dee2e6;   */\r\n  border-radius: 5px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n  /* background: #dee2e6;\r\n  -webkit-box-shadow: inset 0 0 6px #dee2e6; */\r\n}\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n  background: #dee2e6;\r\n}\r\n.btn-color:hover {\r\n  background-color: #4DC4F7\r\n}\r\n.btn-color1 {\r\n  background-color: #16baff;\r\n  color: white;\r\n\r\n  border-radius: 1;\r\n}\r\n.btn-color1:hover {\r\n  background-color: #4DC4F7\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-primary:disabled,\r\n.btn-primary[disabled] {\r\n  border-color: 2px #c9cdd1;\r\n  background-color: #fff;\r\n  color: #4DC4F7;\r\n}\r\n.alert {\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n}\r\n/* ///////////////REPONDERS IMAGE WITH FIRST LAST CHARACTER/////////////////// */\r\n.circle{\r\n  border-radius: 50%;\r\n  width:130px;\r\n  height: 160px;\r\n  background:black;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n.text1{\r\n  position: absolute;\r\n  width: inherit;\r\n  height: auto;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  text-align: center;\r\n  font-family: Raleway !important;\r\n  color: white;\r\n}\r\n/* //////////////////////////////////////////////////////// */\r\n.circle1{\r\n  border-radius: 50%;\r\n  width:100px;\r\n  height: 130px;\r\n  background:black;\r\n  margin: 10% auto;\r\n  position: relative;\r\n}\r\n.text2{\r\n  position: absolute;\r\n  width: inherit;\r\n  height: auto;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  text-align: center;\r\n  font-family: Raleway !important;\r\n  color: white;\r\n}\r\n.popup-btn{\r\n    width: 70%;\r\n    margin-bottom: 5px;\r\n    margin-left: -8%;\r\n }\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-list/profile-list.component */ "./src/app/profile/profile-list/profile-list.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/profile/side-bar/side-bar.component.ts");
/* harmony import */ var _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-detail/profile-detail.component */ "./src/app/profile/profile-detail/profile-detail.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/profile/feedback/feedback.component.ts");
/* harmony import */ var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./conversation/conversation.component */ "./src/app/profile/conversation/conversation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var kng24_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! kng24-select */ "./node_modules/kng24-select/bundles/ng-select.umd.js");
/* harmony import */ var kng24_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(kng24_select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./messenger/messenger.component */ "./src/app/profile/messenger/messenger.component.ts");
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sessions/sessions.component */ "./src/app/profile/sessions/sessions.component.ts");
/* harmony import */ var _crisis_support_crisis_support_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./crisis-support/crisis-support.component */ "./src/app/profile/crisis-support/crisis-support.component.ts");
/* harmony import */ var _local_resources_local_resources_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./local-resources/local-resources.component */ "./src/app/profile/local-resources/local-resources.component.ts");
/* harmony import */ var _leaving_message_leaving_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./leaving-message/leaving-message.component */ "./src/app/profile/leaving-message/leaving-message.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/profile/privacy/privacy.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/profile/terms/terms.component.ts");
/* harmony import */ var _profile_sidebar_profile_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile-sidebar/profile-sidebar.component */ "./src/app/profile/profile-sidebar/profile-sidebar.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./email/email.component */ "./src/app/profile/email/email.component.ts");
/* harmony import */ var _profile_mass_messenger_profile_mass_messenger_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile-mass-messenger/profile-mass-messenger.component */ "./src/app/profile/profile-mass-messenger/profile-mass-messenger.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                _profile_list_profile_list_component__WEBPACK_IMPORTED_MODULE_5__["ProfileListComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"],
                _profile_detail_profile_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProfileDetailComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
                _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_9__["ConversationComponent"],
                _messenger_messenger_component__WEBPACK_IMPORTED_MODULE_13__["MessengerComponent"],
                _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_14__["SessionsComponent"],
                _crisis_support_crisis_support_component__WEBPACK_IMPORTED_MODULE_15__["CrisisSupportComponent"],
                _local_resources_local_resources_component__WEBPACK_IMPORTED_MODULE_16__["LocalResourcesComponent"],
                _leaving_message_leaving_message_component__WEBPACK_IMPORTED_MODULE_17__["LeavingMessageComponent"],
                _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_18__["PrivacyComponent"],
                _terms_terms_component__WEBPACK_IMPORTED_MODULE_19__["TermsComponent"],
                _profile_sidebar_profile_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["ProfileSidebarComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_21__["EmailComponent"],
                _profile_mass_messenger_profile_mass_messenger_component__WEBPACK_IMPORTED_MODULE_22__["ProfileMassMessengerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routes"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_2__["UiSwitchModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                kng24_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
            bootstrap: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/profile/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileService = /** @class */ (function () {
    function ProfileService(_http, _nav) {
        this._http = _http;
        this._nav = _nav;
    }
    ProfileService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var token = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        return headers;
    };
    ProfileService.prototype.getProfile = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/student/profile";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.searchResponder = function (studentName) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/student/searchStudentSchoolResponders/" + studentName;
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getResponder = function (userid) {
        var url = "/wavesbackend/api/get-responder-of-student?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid });
    };
    ProfileService.prototype.getWaves = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "api/common/waves";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.updatePassword = function (userid, oldpass, newpass) {
        var url = "/wavesbackend/api/change-password?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid, oldPassword: oldpass, newPassword: newpass });
    };
    ProfileService.prototype.postFeedback = function (userid, feebackObj) {
        var url = "/wavesbackend/api/send-feedback?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid, text: feebackObj });
    };
    ProfileService.prototype.setimage = function (userid, image) {
        var url = "/wavesbackend/api/change-DP?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid, image: image });
    };
    ProfileService.prototype.getimage = function (userid) {
        var url = "/wavesbackend/api/show-DP?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid });
    };
    ProfileService.prototype.uploadImage = function (image) {
        console.log(image);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/student/uploadImage";
        return this._http.post(url, { file: image }, httpOptions);
    };
    ProfileService.prototype.downloadImage = function (id) {
        var url = "/wavesbackend/api/common/authenticate/imagePrview/" + id;
        return this._http.get(url, { responseType: "blob" });
    };
    ProfileService.prototype.getUpcommingSession = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/responder/upComingSessions";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getPreviousSession = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/responder/previousSessions";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getlocalResources = function (schoolid) {
        var url = "/wavesbackend/api/getLocalResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfileId: schoolid });
    };
    ProfileService.prototype.getcrisisResources = function (schoolid) {
        var url = "/wavesbackend/api/getCrisisResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfileId: schoolid });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/sessions/sessions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile/sessions/sessions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Sessions</b></h2>\r\n        <button \r\n          class=\"navbar-toggler\" \r\n          type=\"button\" \r\n          data-toggle=\"collapse\" \r\n          data-target=\"#navbarSupportedContent1\"\r\n          aria-controls=\"navbarSupportedContent\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n      <div \r\n          class=\"collapse navbar-collapse\" \r\n          id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\"></ul>\r\n    <form class=\"form-inline\">\r\n    <div class=\"input-group\"></div>\r\n        </form>\r\n        <h6 id=\"header\">{{studentName}}<br>\r\n          {{studentId}}</h6>&nbsp;\r\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n      </div>\r\n    </nav>\r\n  </div>\r\n<hr><br>\r\n\r\n<main class=\"col-lg-12 col-md-12 col-sm-9 \">\r\n  <h3 class=\"pf-li-h1-title\">\r\n    <b>Upcoming Sessions</b>\r\n  </h3>\r\n  <hr>\r\n  <div class=\"container session-padding\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <div class=\"detail\">\r\n              <h4 id=\"Margin\">James Jackson</h4>\r\n              <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n                <div class=\"pull-right\">\r\n                  <!-- <i class=\"\"></i> -->\r\n                  <div class=\"dropdown\">\r\n                    <i class=\"fas fa-ellipsis-v font-awesome-session dropdown-toggle\" type=\"i\" id=\"dropdownMenu2\"\r\n                       data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                       aria-expanded=\"false\">\r\n\r\n                    </i>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                      <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                      <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                      <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </h6>\r\n\r\n              <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n                <!-- <i class=\"\"></i> -->\r\n                <div class=\"dropdown\">\r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session dropdown-toggle\" type=\"i\" id=\"dropdownMenu2\"\r\n                     data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                     aria-expanded=\"false\">\r\n\r\n                  </i>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </h6>\r\n\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n                <!-- <i class=\"\"></i> -->\r\n                <div class=\"dropdown\">\r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session dropdown-toggle\" type=\"i\" id=\"dropdownMenu2\"\r\n                     data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                     aria-expanded=\"false\">\r\n\r\n                  </i>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </h6>\r\n\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n</main>\r\n<main class=\" col-lg-12 col-md-12 col-sm-9\">\r\n  <h3 class=\"pf-li-h1-title\">\r\n    <b>Previous Sessions</b>\r\n  </h3>\r\n  <hr>\r\n  <div class=\"container session-padding\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n        <div class=\"detail\">\r\n      <h4 id=\"Margin\">James Jackson</h4>\r\n    <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n      <div class=\"pull-right\">\r\n        <div class=\"dropdown\">\r\n          <i \r\n            class=\"fas fa-ellipsis-v font-awesome-session dropdown-toggle\" \r\n            type=\"i\" \r\n            id=\"dropdownMenu2\"\r\n            data-toggle=\"dropdown\" \r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">\r\n          </i>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n              <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n              <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n              <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </h6>\r\n          <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n        <div class=\"detail\">\r\n      <h4 id=\"Margin\">James Jackson</h4>\r\n    <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n      <div class=\"pull-right\">  \r\n        <div class=\"dropdown\">\r\n          <i \r\n            class=\"fas fa-ellipsis-v font-awesome-session dropdown-toggle\" \r\n            type=\"i\" \r\n            id=\"dropdownMenu2\"\r\n            data-toggle=\"dropdown\" \r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">\r\n          </i>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n            <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n            <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n            <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n          </h6>\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n                <div class=\"dropdown\">\r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session dropdown-toggle\" type=\"i\" id=\"dropdownMenu2\"\r\n                     data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                     aria-expanded=\"false\">\r\n                  </i>\r\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                    <i class=\"dropdown-item\" type=\"i\">Action</i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </h6>\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/profile/sessions/sessions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/sessions/sessions.component.ts ***!
  \********************************************************/
/*! exports provided: SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsComponent", function() { return SessionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionsComponent = /** @class */ (function () {
    function SessionsComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
        this.studentName = null;
        this.studentId = null;
    }
    SessionsComponent.prototype.ngOnInit = function () {
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('stdId');
        // this.profileServiceObj.getUpcommingSession().subscribe(
        //   res => {
        //     this.upcomingSessionObj = res
        //   },
        //   err => {
        //   }
        // );
        // this.profileServiceObj.getPreviousSession().subscribe(
        //   res => {
        //     this.previousSesssionObj = res
        //   },
        //   err => {
        //   }
        // );
    };
    SessionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sessions',
            template: __webpack_require__(/*! ./sessions.component.html */ "./src/app/profile/sessions/sessions.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], SessionsComponent);
    return SessionsComponent;
}());



/***/ }),

/***/ "./src/app/profile/side-bar/side-bar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile/side-bar/side-bar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\r\n  <ul class=\"nav nav-pills flex-column\">\r\n    <li class=\"sidebar-user-panel\">\r\n      <div class=\"user-panel\">\r\n        <div class=\"row\">\r\n          <div class=\"sidebar-userpic\">\r\n\r\n            <a class=\"nav-link\" routerLink=\"/profile-detail\">\r\n              <img [src]=\"imageToShow\" *ngIf=\"imageToShow;else other_image\" class=\"img-responsive\" alt=\"\">\r\n              <ng-template #other_image>\r\n                <span class=\"avatar_name\">{{ProfileObj['data'].nicName | uppercase }}</span>\r\n\r\n              </ng-template>\r\n\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"profile-usertitle\">\r\n\r\n          <div class=\"sidebar-userpic-name\">{{ProfileObj['data'].fullName}}</div>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link nav_bar_font\" routerLink=\"/profile\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/Discover_Web.png\"> Discover\r\n        <span class=\"sr-only\">(current)</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/messenger\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/Messages_Web.png\"> Messages</a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/session\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/Sessions_Web.png\"> Sessions</a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/local-resources\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/LocalResources_Web.png\"> Local Resources</a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/crisis-support\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/CrisisSupport_Web.png\"> Crisis Support</a>\r\n    </li>\r\n    <br><br><br><br><br><br><br><br><br><br><br>\r\n    <!-- <div class=\"sch-name\"> -->\r\n    <li class=\"nav-item nav_bar_font\" id=\"logout_sidebar_button\">\r\n\r\n      <h6 id=\"li_clr\">{{ProfileObj['data'].schoolName | uppercase}}</h6>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\" id=\"logout_sidebar_button\">\r\n\r\n      <hr class=\"beautiful-line\">\r\n      <a href=\"#\" class=\"transparent_btn\" (click)=\"logOut()\">Sign Out</a>\r\n\r\n    </li>\r\n    <!--   </div> -->\r\n\r\n  </ul>\r\n\r\n</nav>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/side-bar/side-bar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/side-bar/side-bar.component.ts ***!
  \********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(router, profileServiceObj) {
        this.router = router;
        this.profileServiceObj = profileServiceObj;
        this.isAvatarAvalable = false;
        this.userNameSpl = "AR";
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileServiceObj.getProfile().subscribe(function (res) {
            _this.ProfileObj = res;
            _this.profileServiceObj.downloadImage(_this.ProfileObj['data']['userId']).subscribe(function (res) {
                _this.createImageFromBlob(res);
            }, function (err) {
            });
        }, function (err) {
        });
    };
    SideBarComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    SideBarComponent.prototype.logOut = function () {
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('token');
        this.router.navigate(['/login']);
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/profile/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/profile/terms/terms.component.html":
/*!****************************************************!*\
  !*** ./src/app/profile/terms/terms.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-profile-sidebar></app-profile-sidebar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Terms & Conditions</b>\r\n    </h2>\r\n      <button \r\n        class=\"navbar-toggler\" \r\n        type=\"button\" \r\n        data-toggle=\"collapse\" \r\n        data-target=\"#navbarSupportedContent1\"\r\n        aria-controls=\"navbarSupportedContent\" \r\n        aria-expanded=\"false\" \r\n        aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  <div class=\"collapse navbar-collapse\" \r\n       id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\"></ul>\r\n          <form class=\"form-inline\">\r\n            <div class=\"input-group\">\r\n            </div>\r\n          </form>\r\n          <h6 id=\"header\">{{studentName}}<br>\r\n            {{studentId}}</h6>&nbsp;\r\n          <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">  \r\n      </div>\r\n    </nav>\r\n  </div>\r\n<hr><br>\r\n<main class=\"col-sm-9 col-md-12 pl-3\">\r\n  <section class=\"row text-center placeholders\">\r\n    <div class=\"col-lg-12 col-md-12 placeholder\">\r\n      <div class=\"text\">\r\n        <h5>By downloading or using the app, these terms will automatically apply to you – you should make sure therefore\r\n          that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of\r\n          the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app,\r\n          and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app\r\n          itself, and all the trade marks, copyright, database rights and other intellectual property rights related to\r\n          it, still belong to Above the Waves.\r\n          <br>\r\n          <br> Above the Waves is committed to ensuring that the app is as useful and efficient as possible. For that\r\n          reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any\r\n          reason. We will never charge you for the app or its services without making it very clear to you exactly what\r\n          you’re paying for.\r\n          <br>\r\n          <br> The Waves app stores and processes personal data that you have provided to us, in order to provide our\r\n          Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that\r\n          you do not jailbreak or root your phone, which is the process of removing software restrictions and\r\n          limitations imposed by the official operating system of your device. It could make your phone vulnerable to\r\n          malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Waves\r\n          app won’t work properly or at all.<br>\r\n          <br> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is\r\n          accessible\r\n          at Waves unless otherwise defined in this Privacy Policy.\r\n          <br>\r\n          <br>\r\n          You should be aware that there are certain things that Above the Waves will not take responsibility for.\r\n          Certain functions of the app will require the app to have an active internet connection. The connection can be\r\n          Wi-Fi, or provided by your mobile network provider, but Above the Waves cannot take responsibility for the app\r\n          not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data\r\n          allowance left.\r\n          <br>\r\n          <br>\r\n          If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement\r\n          with your mobile network provider will still apply. As a result, you may be charged by your mobile provider\r\n          for the cost of data for the duration of the connection while accessing the app, or other third party charges.\r\n          In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you\r\n          use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you\r\n          are not the bill payer for the device on which you’re using the app, please be aware that we assume that you\r\n          have received permission from the bill payer for using the app.\r\n          <br>\r\n          <br>\r\n          Along the same lines, Above the Waves cannot always take responsibility for the way you use the app i.e. You\r\n          need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail\r\n          the Service, Above the Waves cannot accept responsibility\r\n          With respect to Above the Waves’ responsibility for your use of the app, when you’re using the app, it’s\r\n          important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we\r\n          do rely on third parties to provide information to us so that we can make it available to you. Above the Waves\r\n          accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this\r\n          functionality of the app.\r\n          <br>\r\n          <br>\r\n          At some point, we may wish to update the app. The app is currently available on Android and iOS – the\r\n          requirements for both systems (and for any additional systems we decide to extend the availability of the app\r\n          to) may change, and you’ll need to download the updates if you want to keep using the app. Above the Waves\r\n          does not promise that it will always update the app so that it is relevant to you and/or works with the\r\n          iOS/Android version that you have installed on your device. However, you promise to always accept updates to\r\n          the application when offered to you, We may also wish to stop providing the app, and may terminate use of it\r\n          at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination,\r\n          (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if\r\n          needed) delete it from your device. <br>\r\n          <br>\r\n          <b>Changes to This Terms and Conditions</b>\r\n          <br>\r\n          <br> We may update our Terms and Conditions from time to time. Thus, you are advised to review this page\r\n          periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on\r\n          this page. These changes are effective immediately after they are posted on this page.\r\n          <br>\r\n          <br>\r\n          <b>Contact Us</b>\r\n          <br>\r\n          <br> If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us.\r\n          <br>\r\n          <br>\r\n\r\n\r\n        </h5>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "./src/app/profile/terms/terms.component.ts":
/*!**************************************************!*\
  !*** ./src/app/profile/terms/terms.component.ts ***!
  \**************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../profile.service */ "./src/app/profile/profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsComponent = /** @class */ (function () {
    function TermsComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
    }
    TermsComponent.prototype.ngOnInit = function () {
        this.studentName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.studentId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('stdId');
    };
    TermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/profile/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./../profile.component.css */ "./src/app/profile/profile.component.css")],
            providers: [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/email/email.component.css":
/*!*************************************************************!*\
  !*** ./src/app/responder-profile/email/email.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ------------------------------------- \r\n\t\tGLOBAL \r\n------------------------------------- */\r\n* { \r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\nh1, h2, h3, h4, h5, h6,p {\r\n    font-family: Raleway !important;\r\n    color:#3D3D3D !important;\r\n  }\r\n* { font-family: Raleway !important; }\r\nimg { \r\n\tmax-width: 100%; \r\n}\r\n.collapse {\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\nbody {\r\n\t-webkit-font-smoothing:antialiased; \r\n\t-webkit-text-size-adjust:none; \r\n\twidth: 100%!important; \r\n\theight: 100%;\r\n}\r\n/* ------------------------------------- \r\n\t\tELEMENTS \r\n------------------------------------- */\r\na { color: #2BA6CB;}\r\n.btn {\r\n\ttext-decoration:none;\r\n\tcolor: #FFF !important;\r\n\tbackground-color: #16baff;\r\n\tpadding:2px 25px;\r\n\tfont-weight:bold;\r\n\tmargin-right:10px;\r\n\ttext-align:center;\r\n\tcursor:pointer;\r\n\tdisplay: inline-block;\r\n}\r\np.callout {\r\n\tpadding:15px;\r\n\tbackground-color:#ECF8FF;\r\n\tmargin-bottom: 15px;\r\n}\r\n.callout a {\r\n\tfont-weight:bold;\r\n\tcolor: #2BA6CB;\r\n}\r\ntable.social {\r\n/* \tpadding:15px; */\r\n\tbackground-color: #ebebeb;\r\n\t\r\n}\r\n.social .soc-btn {\r\n\tpadding: 3px 7px;\r\n\tfont-size:12px;\r\n\tmargin-bottom:10px;\r\n\ttext-decoration:none;\r\n\tcolor: #FFF;font-weight:bold;\r\n\tdisplay:block;\r\n\ttext-align:center;\r\n}\r\na.fb { background-color: #3B5998!important; }\r\na.tw { background-color: #1daced!important; }\r\na.gp { background-color: #DB4A39!important; }\r\na.ms { background-color: #000!important; }\r\n.sidebar .soc-btn { \r\n\tdisplay:block;\r\n\twidth:100%;\r\n}\r\n/* ------------------------------------- \r\n\t\tHEADER \r\n------------------------------------- */\r\ntable.head-wrap { width: 100%;}\r\n.header.container table td.logo { padding: 15px; }\r\n.header.container table td.label { padding: 15px; padding-left:0px;}\r\n/* ------------------------------------- \r\n\t\tBODY \r\n------------------------------------- */\r\ntable.body-wrap { width: 100%;}\r\nh3.color{\r\n    color:#3D3D3D !important;\r\n}\r\n.span-font{\r\n\tfont-size: 17px;\r\n    font-weight: 100;\r\n}\r\n/* ------------------------------------- \r\n\t\tFOOTER \r\n------------------------------------- */\r\ntable.footer-wrap { width: 100%;\tclear:both!important;\r\n}\r\n.footer-wrap .container td.content  p { border-top: 1px solid rgb(215,215,215); padding-top:15px;}\r\n.footer-wrap .container td.content p {\r\n\tfont-size:10px;\r\n\tfont-weight: bold;\r\n\t\r\n}\r\n/* ------------------------------------- \r\n\t\tTYPOGRAPHY \r\n------------------------------------- */\r\nh1,h2,h3,h4,h5,h6 {\r\n    font-family: Raleway !important;\r\n    color:#3D3D3D !important;\r\n}\r\nh1 small, h2 small, h3 small, h4 small, h5 small, h6 small { font-size: 60%; color: #3D3D3D; line-height: 0; text-transform: none; }\r\nh1 { font-weight:200; font-size: 44px;}\r\nh2 { font-weight:200; font-size: 37px;}\r\nh3 { font-weight:500; font-size: 27px;}\r\nh4 { font-weight:500; font-size: 23px;}\r\nh5 { font-weight:900; font-size: 17px;}\r\nh6 { font-weight:900; font-size: 14px; text-transform: uppercase; color:#3D3D3D;}\r\n.collapse { margin:0!important;}\r\np, ul { \r\n\tmargin-bottom: 10px; \r\n\tfont-weight: normal; \r\n\tfont-size:14px; \r\n\tline-height:1.6;\r\n}\r\np.lead { font-size:17px; }\r\np.last { margin-bottom:0px;}\r\nul li {\r\n\tmargin-left:5px;\r\n\tlist-style-position: inside;\r\n}\r\n/* --------------------------------------------------- \r\n\t\tRESPONSIVENESS\r\n\t\tNuke it from orbit. It's the only way to be sure. \r\n------------------------------------------------------ */\r\n/* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */\r\n.container {\r\n\tdisplay:block!important;\r\n\tmax-width:600px!important;\r\n\tmargin:0 auto!important; /* makes it centered */\r\n\tclear:both!important;\r\n}\r\n/* This should also be a block element, so that it will fill 100% of the .container */\r\n.content {\r\n\tpadding:15px;\r\n\tmax-width:600px;\r\n\tmargin:0 auto;\r\n\tdisplay:block; \r\n}\r\n/* Let's make sure tables in the content area are 100% wide */\r\n.content table { width: 100%; }\r\n/* Odds and ends */\r\n.column {\r\n\twidth: 300px;\r\n\tfloat:left;\r\n}\r\n.column tr td { padding: 15px; }\r\n.column-wrap { \r\n\tpadding:0!important; \r\n\tmargin:0 auto; \r\n\tmax-width:600px!important;\r\n}\r\n.column table { width:100%;}\r\n.social .column {\r\n\twidth: 280px;\r\n\tmin-width: 279px;\r\n\tfloat:left;\r\n}\r\n/* Be sure to place a .clear element after each set of columns, just to be safe */\r\n.clear { display: block; clear: both; }\r\n/* ------------------------------------------- \r\n\t\tPHONE\r\n\t\tFor clients that support media queries.\r\n\t\tNothing fancy. \r\n-------------------------------------------- */\r\n@media only screen and (max-width: 600px) {\r\n\t\r\n\ta[class=\"btn\"] { display:block!important; margin-bottom:10px!important; background-image:none!important; margin-right:0!important;}\r\n\r\n\tdiv[class=\"column\"] { width: auto!important; float:none!important;}\r\n\t\r\n\ttable.social div[class=\"column\"] {\r\n\t\twidth:auto!important;\r\n\t}\r\n\r\n}"

/***/ }),

/***/ "./src/app/responder-profile/email/email.component.html":
/*!**************************************************************!*\
  !*** ./src/app/responder-profile/email/email.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body bgcolor=\"#FFFFFF\">\r\n\r\n    <!-- HEADER -->\r\n    <table class=\"head-wrap\" bgcolor=\"#f7f7f7\">\r\n      <tr>\r\n        <td></td>\r\n        <td class=\"header container\">\r\n          \r\n            <div class=\"content\">\r\n              <table bgcolor=\"#f7f7f7\">\r\n              <tr>\r\n                <td><img src=\"\\waves\\assets\\images\\ATW_logo_blue.png\" width=\"35%\" height=\"35%\" /></td>\r\n                \r\n              </tr>\r\n            </table>\r\n            </div>\r\n            \r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table><!-- /HEADER -->\r\n    \r\n    \r\n    <!-- BODY -->\r\n    <table class=\"body-wrap\">\r\n      <tr>\r\n        <td></td>\r\n        <td class=\"container\" bgcolor=\"#FFFFFF\">\r\n    \r\n          <div class=\"content\">\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                \r\n                <h3 class=\"color\"><b>Welcome to Waves!</b></h3>\r\n                <p class=\"lead\">We are excited to have you join our community. Here’s what you need to know.\r\n\r\n                </p>\r\n\r\n                <h5>From:\r\n                  <span class=\"span-font\">The Waves Team</span>\r\n\r\n                </h5>\r\n                <br>\r\n                <hr>\r\n                <br>\r\n      \r\n                <p class=\"lead\">Hello (Responder First Name)!\r\n\r\n                </p>\r\n\r\n                <p class=\"lead\">You’ve been added as a Student to your school’s Waves Network and have been given access \r\n                  to the Waves App. Having access to the Waves App provides students with the help they need, \r\n                  when they need it, and helps shorten the distance between students and the office of student services.\r\n                </p>\r\n\r\n                <p class=\"lead\">Before jumping into the Waves App, \r\n                  here are a few things to know. To access the Waves App, \r\n                  you will login using the following information: </p>\r\n                  \r\n                  <p class=\"lead\"><li>Your Employee ID</li>\r\n                    <li>Your School’s Access Code, which is: ______________</li>\r\n                    <li>Your School’s Authorization Code, which is: ______________</li>\r\n                   </p>\r\n\r\n                  <p class=\"lead\">Once you select your school and connect to your school’s Waves Network, you wi\r\n                     required to create a password to protect your account. Once you knock out these initial \r\n                     few steps, you’re good to go. </p>\r\n\r\n                  <p class=\"lead\">Once you set up your account, you will have \r\n                    direct access to communication tools and scheduling \r\n                    tools to access your students more effectively.  </p>\r\n\r\n                  <p class=\"lead\">If you’re feeling ready, click below and jump in. We’re glad you’re here. </p>\r\n\r\n                  <p class=\"lead\"><b>Stay Awesome, </b></p>\r\n                  <p class=\"lead\">The Waves Team</p>\r\n\r\n\r\n                <a class=\"btn\">Jump In</a>\r\n            \r\n              </td>\r\n            </tr>\r\n          </table>\r\n          </div>\r\n                      \r\n        </td>\r\n        <td></td>\r\n      </tr>\r\n    </table><!-- /BODY -->\r\n    \r\n   \r\n    \r\n    <table class=\"head-wrap\" bgcolor=\"#f7f7f7\">\r\n        <tr>\r\n          <td></td>\r\n          <td class=\"header container\">\r\n            \r\n              <div class=\"content\">\r\n                <table bgcolor=\"#f7f7f7\">\r\n                <tr>\r\n                  <td align=\"center\"><img src=\"\\waves\\assets\\images\\ATW_logo_blue.png\" width=\"35%\" height=\"35%\" /></td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                    <td align=\"center\">\r\n                      <p>\r\n                          © 2018 Above the Waves, Inc.\r\n                      </p>\r\n                    </td>\r\n                  </tr>\r\n              </table>\r\n              </div>\r\n              \r\n          </td>\r\n          <td></td>\r\n        </tr>\r\n      </table><!-- /HEADER -->\r\n\r\n    </body>\r\n\r\n\r\n<!-- <div class=\"container\">\r\n<body style=\"margin: auto; padding: 0;\">\r\n  <table align=\"center\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\">\r\n    <tr>\r\n        <td align=\"center\" bgcolor=\"#70bbd9\" style=\"padding: 40px 0 30px 0;\">\r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" alt=\"Creating Email Magic\" width=\"300\" height=\"230\" style=\"display: block;\" />\r\n           </td>\r\n          </tr>\r\n     \r\n          <td bgcolor=\"#ffffff\" style=\"padding: 40px 30px 40px 30px;\">\r\n              <table border=\"1\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\r\n               <tr>\r\n                <td>\r\n                 Row 1\r\n                </td>\r\n               </tr>\r\n               <tr>\r\n                <td>\r\n                 Row 2\r\n                </td>\r\n               </tr>\r\n               <tr>\r\n                <td>\r\n                 Row 3\r\n                </td>\r\n               </tr>\r\n              </table>\r\n             </td>\r\n    <tr>\r\n     <td bgcolor=\"#ee4c50\">\r\n      Row 3\r\n     </td>\r\n    </tr>\r\n   </table>\r\n </body>\r\n</div> \r\n \r\n \r\n <table class=\"social\" width=\"100%\">\r\n    <tr>\r\n      <td>\r\n        \r\n        \r\n        <table align=\"left\" class=\"column\">\r\n          <tr>\r\n            <td>\t\t\t\t\r\n              \r\n              <h5 class=\"\">Connect with Us:</h5>\r\n              <p class=\"\"><a href=\"#\" class=\"soc-btn fb\">Facebook</a> <a href=\"#\" class=\"soc-btn tw\">Twitter</a> <a href=\"#\" class=\"soc-btn gp\">Google+</a></p>\r\n  \r\n              \r\n            </td>\r\n          </tr>\r\n        </table>\r\n        \r\n    \r\n        <table align=\"left\" class=\"column\">\r\n          <tr>\r\n            <td>\t\t\t\t\r\n                            \r\n              <h5 class=\"\">Contact Info:</h5>\t\t\t\t\t\t\t\t\t\t\t\t\r\n              <p>Phone: <strong>408.341.0600</strong><br/>\r\n      Email: <strong><a href=\"emailto:ABC@example.com\">ABC@example.com</a></strong></p>\r\n      \r\n            </td>\r\n          </tr>\r\n        </table>\r\n        \r\n        <span class=\"clear\"></span>\t\r\n        \r\n      </td>\r\n    </tr>\r\n  </table>  end social & contact \r\n\r\n <table class=\"footer-wrap\">\r\n    <tr>\r\n      <td></td>\r\n      <td class=\"container\">\r\n        \r\n        \r\n          <div class=\"content\">\r\n          <table>\r\n          <tr>\r\n            <td align=\"center\">\r\n              <p>\r\n                <a href=\"#\">Terms</a> |\r\n                <a href=\"#\">Privacy</a> |\r\n                <a href=\"#\">Unsubscribe></a>\r\n              </p>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n          </div>\r\n          \r\n      </td>\r\n      <td></td>\r\n    </tr>\r\n  </table>-->"

/***/ }),

/***/ "./src/app/responder-profile/email/email.component.ts":
/*!************************************************************!*\
  !*** ./src/app/responder-profile/email/email.component.ts ***!
  \************************************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/responder-profile/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/responder-profile/email/email.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/mass-messenger/mass-messenger.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/responder-profile/mass-messenger/mass-messenger.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-responder-side-bar></app-responder-side-bar> \r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>MASS MESSENGER</b>\r\n      <span class=\"pf-li-h1-title2\">MY STUDENTS</span></h2>\r\n        <button \r\n          class=\"navbar-toggler\" \r\n          type=\"button\" \r\n          data-toggle=\"collapse\" \r\n          data-target=\"#navbarSupportedContent1\"\r\n          aria-controls=\"navbarSupportedContent\" \r\n          aria-expanded=\"false\" \r\n          aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n    <div class=\"collapse navbar-collapse\" \r\n         id=\"navbarSupportedContent1\">\r\n          <ul class=\"navbar-nav mr-auto\"></ul>\r\n            <form class=\"form-inline\">\r\n              <div class=\"input-group\">\r\n              </div>\r\n            </form>\r\n            <h6 id=\"header\">{{ProfileObj['data'].firstName}}  {{ProfileObj['data'].lastName}}  <br>\r\n              {{ProfileObj['data'].responderId}}</h6>&nbsp; \r\n             <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  <hr><br>\r\n  \r\n&nbsp;Select All <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"><br>\r\n\r\n<section class=\"row text-center placeholders\">\r\n  <div class=\"col-sm-12\"></div>\r\n  <div class=\"col.col-lg-2\">\r\n    <div>\r\n      <ul>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"col-sm-2\"></div>\r\n  <div class=\"col.col-lg-2\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <ul>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n        <input class=\"checkbox\" type=\"checkbox\" name=\"check[]\"> First Name Last Name <br>\r\n      </ul>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>\r\n\r\n<br>\r\n<section class=\"row text-center placeholders\">\r\n  <div class=\"col-sm-12\"></div>\r\n  <div class=\"col-sm-auto\"></div>\r\n  <div class=\"col.col-lg-2\">\r\n    <div>\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <textarea border=\"1px solid #ccc\" rows=\"8\" cols=\"70\" id=\"comment\"\r\n                placeholder=\"Type Your Message Here\"></textarea><br>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block \">Send Message</button>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/responder-profile/mass-messenger/mass-messenger.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/responder-profile/mass-messenger/mass-messenger.component.ts ***!
  \******************************************************************************/
/*! exports provided: MassMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MassMessengerComponent", function() { return MassMessengerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MassMessengerComponent = /** @class */ (function () {
    function MassMessengerComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
        this.ProfileObj = null;
    }
    MassMessengerComponent.prototype.ngOnInit = function () {
        //   let decoded = JWT( Cookie.get('token'));
        //   this.profileServiceObj.getResponderProfile(decoded['profileId']).subscribe(
        //     res => {
        //       this.ProfileObj = res;
        //     }, err => {
        //     }
        //   );
    };
    MassMessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mass-messenger',
            template: __webpack_require__(/*! ./mass-messenger.component.html */ "./src/app/responder-profile/mass-messenger/mass-messenger.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], MassMessengerComponent);
    return MassMessengerComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-crisis-support/responder-crisis-support.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-crisis-support/responder-crisis-support.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-responder-side-bar></app-responder-side-bar> \r\n\r\n      <div class=\"col-lg-12  ml-5 pr-5\">\r\n          <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n            <h2 class=\"pf-li-h1-title \"><b>Crisis Suppport Resources\r\n              </b></h2>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n                    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n        \r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n              <ul class=\"navbar-nav mr-auto\">\r\n              </ul>\r\n              \r\n              <h6 id=\"header\">{{responderName}}   <br>\r\n                {{responderId}}</h6>&nbsp;  \r\n              <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n              <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n        \r\n            </div>\r\n          </nav>\r\n        </div>\r\n         <hr><br>\r\n\r\n         <main class=\"col-sm-9 col-md-12 pl-3\">\r\n            <section class=\"row text-center placeholders\">\r\n              <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12\" \r\n              *ngFor=\"let profile of crisisResourceObj.data.result\">\r\n                <div>\r\n                  <div class=\"row\">\r\n                    <div class=\"sidebar-userpic\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text\">\r\n                  <h5 id=\"font\">\r\n                    <b>{{profile.name}}</b>\r\n                  </h5>\r\n                  <h6> Service Types: {{profile.serviceTypeId}}</h6>\r\n        <button type=\"submit\" class=\"btn btn-color left-btn\" (click)=\"openModal(template ,  profile.phoneNumber)\">Contact</button>\r\n        <a href=\"{{profile.website}}\" target=\"_blank\"><button type=\"submit\" class=\"btn btn-color left-btn\">Visit Website</button></a>\r\n      </div><br>\r\n              </div>\r\n              \r\n            </section>\r\n            <br>\r\n           \r\n            <ng-template #template>\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title pull-left modal_title_font\">Phone Number: </h4>\r\n        \r\n              \r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n            \r\n              <div class=\"modal-body\">\r\n                <h5><b>Contact at:</b> {{phone}}</h5>\r\n                </div>\r\n              <div class=\"modal-footer\">\r\n            \r\n            \r\n                <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close</button>\r\n                </div>\r\n            \r\n            </ng-template>"

/***/ }),

/***/ "./src/app/responder-profile/responder-crisis-support/responder-crisis-support.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-crisis-support/responder-crisis-support.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ResponderCrisisSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderCrisisSupportComponent", function() { return ResponderCrisisSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponderCrisisSupportComponent = /** @class */ (function () {
    function ResponderCrisisSupportComponent(modalService, ProfileServiceObj) {
        this.modalService = modalService;
        this.ProfileServiceObj = ProfileServiceObj;
        this.crisisResourceObj = { data: { result: [] } };
        this.responderName = null;
        this.responderId = null;
        this.schoolId = null;
    }
    ResponderCrisisSupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('resId');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.ProfileServiceObj.getcrisisResources(this.schoolId).subscribe(function (res) {
            _this.crisisResourceObj['data']['result'] = res['data']['result'];
        }, function (err) {
        });
    };
    ResponderCrisisSupportComponent.prototype.openModal = function (template, phoneNumber) {
        this.phone = phoneNumber;
        this.modalRef = this.modalService.show(template);
    };
    ResponderCrisisSupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-crisis-support',
            template: __webpack_require__(/*! ./responder-crisis-support.component.html */ "./src/app/responder-profile/responder-crisis-support/responder-crisis-support.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderCrisisSupportComponent);
    return ResponderCrisisSupportComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-feedback/responder-feedback.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-feedback/responder-feedback.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-responder-side-bar></app-responder-side-bar> \r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Feedback\r\n        </b></h2>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n        \r\n        <h6 id=\"header\">{{responderName}} <br>\r\n          {{responderId}}</h6>&nbsp;  \r\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n        <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n  \r\n      </div>\r\n    </nav>\r\n  </div>\r\n   <hr>\r\n   <br>\r\n   \r\n   <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n        <div *ngIf=\"feedSuccess\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>Thanks!</strong> For Your Feedback.\r\n          </div>\r\n\r\n        <div *ngIf=\"feedError\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            <strong>OOPS!</strong> Something Went Wrong, Please Try Again!!! .\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  <div class=\"col-md-9 offset-md-3\">\r\n    <section class=\"row text-center placeholders\">\r\n      <div class=\"col-md-8 \">\r\n        <br><br> <br><br>\r\n        <h3 id=\"font2\"><b>Please leave your feedback below:</b></h3><br>\r\n        <div class=\"container\">\r\n\r\n          <form (submit)=\"onfeedbackSubmit(f)\" #f=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <textarea class=\"form-control form-control-textarea\" rows=\"8\" id=\"comment\"\r\n                        placeholder=\"Share your feedback\" required ngModel name=\"Comment\" Comment\r\n                        #Comment=\"ngModel\"></textarea><br>\r\n              <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                      class=\"btn btn-primary btn-block btn-block-padiing\">Submit Feedback\r\n              </button>\r\n              <br>\r\n              <br>\r\n              <p id=\"font-size\">If you have a question,comment or concern, please reach out to us. A Wave Rep will get\r\n                back to you within 24 hour.</p>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </section>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/responder-profile/responder-feedback/responder-feedback.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-feedback/responder-feedback.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResponderFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderFeedbackComponent", function() { return ResponderFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponderFeedbackComponent = /** @class */ (function () {
    function ResponderFeedbackComponent(ProfileServiceObj) {
        this.ProfileServiceObj = ProfileServiceObj;
        this.userid = null;
        this.feedError = null;
        this.feedSuccess = null;
    }
    ResponderFeedbackComponent.prototype.ngOnInit = function () {
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('resId');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminId');
    };
    ResponderFeedbackComponent.prototype.onfeedbackSubmit = function (form) {
        var _this = this;
        this.ProfileServiceObj.postFeedback(form.value.Comment, this.userid).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.feedError = res;
                _this.feedSuccess = null;
                window.setTimeout(function () {
                    _this.feedError = null;
                }, 3000);
            }
            else {
                _this.feedError = null;
                _this.feedSuccess = res;
                window.setTimeout(function () {
                    _this.feedSuccess = null;
                }, 3000);
            }
        }, function (err) {
        });
    };
    ResponderFeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-feedback',
            template: __webpack_require__(/*! ./responder-feedback.component.html */ "./src/app/responder-profile/responder-feedback/responder-feedback.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderFeedbackComponent);
    return ResponderFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-local-resources/responder-local-resources.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-local-resources/responder-local-resources.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-responder-side-bar></app-responder-side-bar> \r\n\r\n      <div class=\"col-lg-12  ml-5 pr-5\">\r\n          <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n            <h2 class=\"pf-li-h1-title \"><b>Local Resources\r\n              </b></h2>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n                    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n        \r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n              <ul class=\"navbar-nav mr-auto\">\r\n              </ul>\r\n              \r\n              <h6 id=\"header\">{{responderName}}  <br>\r\n                {{responderId}}</h6>&nbsp;  \r\n              <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n              <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n        \r\n            </div>\r\n          </nav>\r\n        </div>\r\n         <hr>\r\n         <br>\r\n\r\n\r\n         <main class=\"col-sm-9 col-md-12 pl-3\">\r\n          \r\n            <section class=\"row text-center placeholders\">\r\n              <div class=\"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12\" *ngFor=\"let profile of localResourceObj.data.result\">\r\n                <div>\r\n                  <div class=\"row\">\r\n                    <div class=\"sidebar-userpic\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text\">\r\n                    <h5 id=\"font\">\r\n                      <b>{{profile.name}}</b>\r\n                    </h5>\r\n                    <h6>\r\n                        Service Types: {{profile.serviceTypeId}}\r\n                    </h6>\r\n                    <p>Insurance Types:{{profile.insuranceType}}</p>\r\n                    <p>{{profile.streetAddress}}</p>\r\n                    <p>\r\n                        {{profile.city}}\r\n                    </p>\r\n                    <p>\r\n                        {{profile.state}}\r\n                    </p>\r\n                    <p>\r\n                        {{profile.zipCode}}\r\n                    </p>\r\n        <button type=\"submit\" class=\"btn btn-color left-btn\" (click)=\"openModal(template , profile.phoneNumber)\">Contact</button>\r\n        <a href=\"{{profile.website}}\" target=\"_blank\">\r\n          <button type=\"submit\" class=\"btn btn-color left-btn\">Visit Website</button>\r\n        </a>\r\n        \r\n      </div>\r\n      <br>\r\n      \r\n                <!-- <div class=\"col-sm-2\"></div> -->\r\n              </div>\r\n            \r\n            </section>\r\n            <br><br>\r\n            \r\n            <ng-template #template>\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title pull-left modal_title_font\">Phone Number: </h4>\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n              <h5><b>Contact at:</b> {{phone}}</h5>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n          \r\n          \r\n                <button class=\"btn btn-modal\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Cancel</button>\r\n              </div>\r\n          \r\n            </ng-template>\r\n          "

/***/ }),

/***/ "./src/app/responder-profile/responder-local-resources/responder-local-resources.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-local-resources/responder-local-resources.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ResponderLocalResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderLocalResourcesComponent", function() { return ResponderLocalResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponderLocalResourcesComponent = /** @class */ (function () {
    function ResponderLocalResourcesComponent(modalService, ProfileServiceObj) {
        this.modalService = modalService;
        this.ProfileServiceObj = ProfileServiceObj;
        this.localResourceObj = { data: { result: [] } };
        this.responderName = null;
        this.responderId = null;
        this.schoolId = null;
    }
    ResponderLocalResourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('resId');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.ProfileServiceObj.getlocalResources(this.schoolId).subscribe(function (res) {
            _this.localResourceObj['data']['result'] = res['data']['result'];
        }, function (err) {
        });
    };
    ResponderLocalResourcesComponent.prototype.openModal = function (template, phoneNumber) {
        this.phone = phoneNumber;
        this.modalRef = this.modalService.show(template);
    };
    ResponderLocalResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-local-resources',
            template: __webpack_require__(/*! ./responder-local-resources.component.html */ "./src/app/responder-profile/responder-local-resources/responder-local-resources.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderLocalResourcesComponent);
    return ResponderLocalResourcesComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-messenger/responder-messenger.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-messenger/responder-messenger.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-responder-side-bar>\r\n</app-responder-side-bar>\r\n\r\n<div class=\"col-lg-12 ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Waves Messenger\r\n      </b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n      </ul>\r\n\r\n      <h6 id=\"header\">{{responderName}}\r\n        <br> {{responderId}}\r\n      </h6>&nbsp;\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n\r\n<main class=\"col-sm-9 col-md-12 offset-md-0 \">\r\n\r\n\r\n  <div id=\"frame\">\r\n    <div id=\"sidepanel\">\r\n      <div id=\"contacts\">\r\n        <a routerLink=\"/mass-messenger\">\r\n          <ul class=\"list-unstyled\">\r\n            <li class=\"contact\">\r\n              <div class=\"wrap\">\r\n                <img src=\"/waves/assets/images/clients-icon.png\" alt=\"\" />\r\n                <div class=\"meta\">\r\n                  <p class=\"name\">Mass Massenger\r\n\r\n                  </p>\r\n\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </a>\r\n        <ul class=\"list-unstyled\">\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Derich Smith\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/15/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Donna Paulsen\r\n                  <small class=\"pull-right text-muted\">3/15/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Ahmed Sharif\r\n                  <small class=\"pull-right text-muted\">2/27/18</small>\r\n                </p>\r\n                <p class=\"preview\"></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">James Jackson\r\n                  <small class=\"pull-right text-muted\">2/26/18</small>\r\n                </p>\r\n                <p class=\"preview\"></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Jeff Nelson\r\n                  <small class=\"pull-right text-muted\">1/16/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Jeff Nelson\r\n                  <small class=\"pull-right text-muted\">1/16/18</small>\r\n                </p>\r\n                <p class=\"preview\">Hi, there how can I help you?</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">James Jackson\r\n                  <small class=\"pull-right text-muted\">2/26/18</small>\r\n                </p>\r\n                <p class=\"preview\"></p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"contact\">\r\n            <div class=\"wrap\">\r\n\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <div class=\"meta\">\r\n                <p class=\"name\">Fred Thomas\r\n                  <small class=\"pull-right text-muted\">3/17/18</small>\r\n                </p>\r\n                <p class=\"preview\">i'm really struggling.I want to give up.</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"content\">\r\n\r\n      <div class=\"messages\">\r\n        <div class=\"pull-right mr-4\">\r\n          <div class=\"btn-group dropleft\">\r\n            <i class=\"fas fa-bars font-awesome-feedbck\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            </i>\r\n\r\n            <div class=\"dropdown-menu dropdown-menu-right\">\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\" openModal(template)\">\r\n                <h5>Scheduling a Session</h5>\r\n              </button>\r\n              <button class=\"dropdown-item\" type=\"button\" (click)=\" openModal(template1)\">\r\n                <h5>Referring Student</h5>\r\n              </button>\r\n              <button class=\"dropdown-item\" type=\"button\">\r\n                <h5>Removing Anonymity</h5>\r\n              </button>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <ul>\r\n          <li class=\"sent\">\r\n            <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n            <p>Hi, there how can I help you?</p>\r\n          </li>\r\n          <li class=\"replies\">\r\n            <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n            <p>i'm really struggling right now and I don't know what to do.</p>\r\n          </li>\r\n          <li class=\"replies\" *ngFor=\"let sent of message\">\r\n            <div *ngIf=\"sent.text !='' \">\r\n              <img src=\"/waves/assets/images/dumy.png\" alt=\"\" />\r\n              <p>{{sent.text}}</p>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"message-input\">\r\n        <hr>\r\n        <div class=\"wrap\">\r\n          <input type=\"text\" class=\"msg-plc-size\" placeholder=\"Enter message...\" [(ngModel)]=\"messages\" />\r\n          <button class=\"submit\">\r\n            <i class=\"fa fa-paper-plane\" (click)=\"send()\" aria-hidden=\"true\"></i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <ng-template #template>\r\n\r\n    <div class=\"modal-body modal-sm\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n\r\n      <div class=\"user-panel-popup\">\r\n        <div class=\"row\">\r\n          <div class=\"sidebar-userpic-popup\">\r\n            <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n            <h4 style=\"font-weight: bold\">Session With Student Name</h4>\r\n            <br>\r\n            \r\n\r\n\r\n            <div class=\"setDate\">\r\n              <div class=\"popup-text\"><b>Start Date:</b></div>\r\n\r\n              <input class=\"w3-input-date popup-input\"\r\n           placeholder=\"MM/DD/YYYY\"\r\n           ngModel\r\n           bsDatepicker\r\n           [minDate]=\"minDate\"\r\n           [maxDate]=\"maxDate\">\r\n \r\n              <!-- <input type=\"text\" class=\"w3-input-date popup-input\" placeholder=\"MM/DD/YYYY\" bsDatepicker [(ngModel)]=\"datepickerModel\" /> -->\r\n              <i class=\"fa fa-calendar fa-set\"></i>\r\n            </div>\r\n           <br>\r\n           \r\n            <div>\r\n                <div class=\"popup-time\"><b>Start Time:</b></div>\r\n                <ngb-timepicker class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"starttime\" \r\n                [hourStep]=\"starthourStep\" [minuteStep]=\"startminuteStep\" [meridian]=\"meridian\" \r\n                [spinners]=\"spinners\" (ngModelChange)=\"changeTime(starttime.hour,starttime.minute)\"></ngb-timepicker>\r\n            <!-- <div class=\"popup-time\"><b>Start Time:</b></div>\r\n            <timepicker class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"mytime\" \r\n            [hourStep]=\"hstep\" [minuteStep]=\"mstep\" ></timepicker> -->\r\n            <!-- <timepicker  class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"mytime\"></timepicker> -->\r\n          </div>\r\n            <br>\r\n            <!-- {{changeTime(starttime.hour,starttime.minute)}} -->\r\n            <div>\r\n                <div class=\"popup-time\"><b>End Time:</b></div>\r\n               \r\n                <ngb-timepicker class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"endtime\" \r\n                [hourStep]=\"endhourStep\" [minuteStep]=\"endminuteStep\" [meridian]=\"meridian\" \r\n                [spinners]=\"spinners\"></ngb-timepicker>\r\n                <!-- <timepicker  class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"mytime1\"></timepicker> -->\r\n              </div>\r\n              \r\n\r\n                <div>\r\n                    <div class=\"popup-text-rpt\"><b>Session Frequency:</b></div>\r\n                    \r\n                    <select class=\"w3-input-rpt popup-input\">\r\n                        <option value=\"\" disabled selected>Repeat</option>\r\n                        <option value=\"Yes\">Yes</option>\r\n                        <option value=\"Never\">Never</option>\r\n                      </select>\r\n                  </div>\r\n                 <br>\r\n           \r\n\r\n           \r\n              <!-- <select class=\"w3-input\" id=\"title\" ngModel\r\n                  required name=\"title\" title\r\n                  [(ngModel)]=\"title\">\r\n                      <option value=\"\" disabled selected>Title</option>\r\n                      <option value=\"Mr.\">Mr.</option>\r\n                      <option value=\"Mrs.\">Mrs.</option>\r\n                      <option value=\"Miss\">Miss</option>\r\n                      <option value=\"Ms.\">Ms.</option>\r\n                      <option value=\"Dr.\">Dr.</option>\r\n                      \r\n                    </select> -->\r\n            \r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    \r\n      \r\n      <h5 style=\"text-align: center;\"><b>Please Select Their Waves</b>\r\n          \r\n      </h5>\r\n      \r\n      <div>\r\n          <ng-select \r\n          [items]=\"cities2\"\r\n          bindLabel=\"name\"\r\n          bindValue=\"name\"\r\n          [multiple]=\"true\"\r\n          placeholder=\"Select Waves\"\r\n          [(ngModel)]=\"selectedCityIds\">\r\n</ng-select>\r\n        <a>\r\n          <!-- <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i> -->\r\n        </a>\r\n      </div>\r\n      <br>\r\n      <div class=\"line-session2\">\r\n        <h4>\r\n          <a>\r\n            <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n          </a>\r\n        </h4>\r\n\r\n      </div>\r\n      <br>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\">Schedule Session\r\n      </button>\r\n\r\n    </div>\r\n\r\n\r\n  </ng-template>\r\n\r\n  <ng-template #template1>\r\n\r\n    <div class=\"modal-body modal-sm\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n      <div class=\"user-panel-popup-ref\">\r\n        <div class=\"row\">\r\n          <div class=\"sidebar-userpic-popup\">\r\n            <div class=\"time\">\r\n              <h5>\r\n                <b>Reffer</b>\r\n              </h5>\r\n              <h5>Student Name</h5>\r\n              <h5>\r\n                <b>To...</b>\r\n              </h5>\r\n\r\n              <input class=\"w3-input\" id=\"typeahead-basic\" type=\"text\" [(ngModel)]=\"responder\"\r\n               [ngbTypeahead]=\"search\"\r\n                [inputFormatter]=\"formatter_school\"\r\n                [resultFormatter]=\"formatter_school\" placeholder=\"Select Responder\"/>\r\n\r\n<br>\r\n                <textarea class=\"form-control textarea\" rows=\"10\" cols=\"50\" id=\"comment\"\r\n                placeholder=\"Describe reason for referral here.\" required ngModel name=\"Comment\" Comment\r\n                #Comment=\"ngModel\"></textarea><br>\r\n      <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n              class=\"btn btn-primary btn-block \">Send Referral\r\n      </button>\r\n            </div>\r\n      </div>\r\n        </div>\r\n          </div>\r\n\r\n         \r\n          </div>\r\n\r\n\r\n  </ng-template>\r\n\r\n\r\n\r\n  <!-- <ng-template #template>\r\n\r\n    <div class=\"modal-body modal-sm\">\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n\r\n      <div class=\"user-panel-popup\">\r\n        <div class=\"row\">\r\n          <div class=\"sidebar-userpic-popup\">\r\n            <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n            <h4 style=\"font-weight: bold\">Session With Student Name</h4>\r\n            <br>\r\n            <timepicker [(ngModel)]=\"mytime\" [showSeconds]=\"true\"></timepicker>\r\n\r\n\r\n            <div class=\"setDate\">\r\n              <input type=\"text\" class=\"w3-input\" placeholder=\"MM/DD/YYYY\" bsDatepicker [(ngModel)]=\"datepickerModel\" />\r\n              <i class=\"fa fa-calendar fa-set\"></i>\r\n            </div>\r\n            <br>\r\n            <div class=\"time\">\r\n              <h5>\r\n                <b>End Time:</b>\r\n              </h5>\r\n              <input class=\"w3-input\" type=\"time\" name=\"date\" id=\"date\">\r\n            </div>\r\n\r\n            <div>\r\n              <select class=\"w3-input\">\r\n                <option value=\"\" disabled selected>Repeat</option>\r\n                <option value=\"Yes\">Yes</option>\r\n                <option value=\"Never\">Never</option>\r\n              </select>\r\n             \r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <br>\r\n      <h5 style=\"text-align: center;font-weight: bold\">Please Select Their Waves\r\n        <a>\r\n          <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n        </a>\r\n      </h5>\r\n      <br>\r\n      <div class=\"line-session2\">\r\n        <h4>\r\n          <a>\r\n            <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n          </a>\r\n        </h4>\r\n\r\n      </div>\r\n      <br>\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\">Schedule Session\r\n      </button>\r\n\r\n    </div>\r\n\r\n\r\n  </ng-template> -->"

/***/ }),

/***/ "./src/app/responder-profile/responder-messenger/responder-messenger.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-messenger/responder-messenger.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ResponderMessengerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderMessengerComponent", function() { return ResponderMessengerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResponderMessengerComponent = /** @class */ (function () {
    function ResponderMessengerComponent(modalService, ProfileServiceObj, spinnerService) {
        var _this = this;
        this.modalService = modalService;
        this.ProfileServiceObj = ProfileServiceObj;
        this.spinnerService = spinnerService;
        this.message = [{
                "text": "",
            }];
        this.messages = "";
        this.starttime = { hour: 9, minute: 10 };
        this.starthourStep = 1;
        this.startminuteStep = 5;
        this.meridian = true;
        this.spinners = true;
        // endtime:object = this.starttime;
        this.endtime = { hour: this.starttime.hour, minute: this.starttime.minute + 15 };
        this.endhourStep = 1;
        this.endminuteStep = 5;
        this.allResObj = null;
        this.cities2 = [
            { name: 'Vilnius' },
            { name: 'Kaunas' },
            { name: 'Pavilnys' },
            { name: 'Pabradė' },
            { name: 'Klaipėda' }
        ];
        this.search = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (term) { return term.length < 2 ? []
                : _this.allResObj['data']['result'].filter(function (v) { return v.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        this.formatter_school = function (x) { return x.firstName.substring(0, 50); };
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() + 0);
        this.maxDate.setDate(this.maxDate.getDate() + 7);
    }
    ResponderMessengerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('resId');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.ProfileServiceObj.resResAll(this.schoolId).subscribe(function (res) {
            _this.allResObj = res;
        }, function (err) {
        });
    };
    ResponderMessengerComponent.prototype.changeTime = function (hour, minute) {
        this.endtime = { hour: hour, minute: minute + 15 };
    };
    ResponderMessengerComponent.prototype.send = function () {
        this.message.push({
            "text": this.messages,
        });
        this.messages = "";
    };
    ResponderMessengerComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' }); // for show model in center( modal-dialog-centered)
    };
    ResponderMessengerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-messenger',
            template: __webpack_require__(/*! ./responder-messenger.component.html */ "./src/app/responder-profile/responder-messenger/responder-messenger.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"]])
    ], ResponderMessengerComponent);
    return ResponderMessengerComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-privacy/responder-privacy.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-privacy/responder-privacy.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-responder-side-bar></app-responder-side-bar> \r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Privacy Policy\r\n        </b></h2>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n        \r\n        <h6 id=\"header\">{{responderName}}<br>\r\n          {{responderId}}</h6>&nbsp; \r\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n        <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n  \r\n      </div>\r\n    </nav>\r\n  </div>\r\n   <hr><br>\r\n\r\n   <main class=\"col-sm-9 col-md-12 offset-md-0 pl\">\r\n      <section class=\"row text-center placeholders\">\r\n        <div class=\"col-lg-12 col-md-12 placeholder\">\r\n          <div class=\"text\">\r\n            <h5>Above the Waves built the Waves app as a Commercial app. This SERVICE is provided by Above the Waves and is\r\n              intended\r\n              for use as is.\r\n              <br>\r\n              <br> This page is used to inform website visitors regarding our policies with the collection, use, and\r\n              disclosure of\r\n              Personal Information if anyone decided to use our Service.\r\n              <br>\r\n              <br> If you choose to use our Service, then you agree to the collection and use of information in relation to\r\n              this\r\n              policy. The Personal Information that we collect is used for providing and improving the Service. We will not\r\n              use\r\n              or share your information with anyone except as described in this Privacy Policy.\r\n              <br>\r\n              <br> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is\r\n              accessible\r\n              at Waves unless otherwise defined in this Privacy Policy.\r\n              <br>\r\n              <br>\r\n              <b>Information Collection and Use</b>\r\n              <br>\r\n              <br> For a better experience, while using our Service, we may require you to provide us with certain\r\n              personally identifiable\r\n              information, including but not limited to First Name, Last Name, Email, Phone Number, Student ID. The\r\n              information\r\n              that we request will be retained by us and used as described in this privacy policy. The app does use third\r\n              party\r\n              services that may collect information used to identify you. Link to privacy policy of third party service\r\n              providers\r\n              used by the app:\r\n              <br>\r\n              <br>&nbsp;&nbsp;• Amazon Web Service\r\n              <br>\r\n              <br>\r\n              <b>Log Data</b>\r\n              <br>\r\n              <br> We want to inform you that whenever you use our Service, in a case of an error in the app we collect data\r\n              and\r\n              information (through third party products) on your phone called Log Data. This Log Data may include\r\n              information\r\n              such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration\r\n              of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.\r\n              <br>\r\n              <br>\r\n              <b>Cookies</b>\r\n              <br>\r\n              <br> Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These\r\n              are sent\r\n              to your browser from the website that you visit and are stored on your device internal memory.\r\n              <br>\r\n              <br> This Service does not use these “cookies” explicitly. However, the app may use third party code and\r\n              libraries\r\n              that use “cookies” to collection information and to improve their services. You have the option to either\r\n              accept\r\n              or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our\r\n              cookies,\r\n              you may not be able to use some portions of this Service.\r\n              <br>\r\n              <br>\r\n              <b>Service Providers</b>\r\n              <br>\r\n              <br> We may employ third-party companies and individuals due to the following reasons:\r\n              <br>\r\n              <br> &nbsp;&nbsp;• To facilitate our Service;\r\n              <br>\r\n              <br> &nbsp;&nbsp;• To provide the Service on our behalf;\r\n              <br>\r\n              <br> &nbsp;&nbsp;• To perform Service-related services; or\r\n              <br>\r\n              <br> &nbsp;&nbsp;• To assist us in analyzing how our Service is used.\r\n              <br>\r\n              <br> We want to inform users of this Service that these third parties have access to your Personal\r\n              Information. The\r\n              reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or\r\n              use\r\n              the information for any other purpose.\r\n              <br>\r\n              <br>\r\n              <b>Security</b>\r\n              <br>\r\n              <br> We value your trust in providing us your Personal Information, thus we are striving to use commercially\r\n              acceptable\r\n              means of protecting it. But remember that no method of transmission over the internet, or method of electronic\r\n              storage is 100% secure and reliable, and we cannot guarantee its absolute security.\r\n              <br>\r\n              <br>\r\n              <b>Links to Other Sites</b>\r\n              <br>\r\n              <br> This Service may contain links to other sites. If you click on a third-party link, you will be directed\r\n              to that\r\n              site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the\r\n              Privacy\r\n              Policy of these websites. We have no control over and assume no responsibility for the content, privacy\r\n              policies,\r\n              or practices of any third-party sites or services.\r\n              <br>\r\n              <br>\r\n              <b>Children’s Privacy</b>\r\n              <br>\r\n              <br> These Services do not address anyone under the age of 13. We do not knowingly collect personally\r\n              identifiable\r\n              information from children under 13. In the case we discover that a child under 13 has provided us with\r\n              personal\r\n              information, we immediately delete this from our servers. If you are a parent or guardian and you are aware\r\n              that\r\n              your child has provided us with personal information, please contact us so that we will be able to do\r\n              necessary\r\n              actions.\r\n              <br>\r\n              <br>\r\n              <b>Changes to This Privacy Policy</b>\r\n              <br>\r\n              <br> We may update our Privacy Policy from time to time. Thus, you are advised to review this page\r\n              periodically for\r\n              any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes\r\n              are\r\n              effective immediately after they are posted on this page.\r\n              <br>\r\n              <br>\r\n              <b>Contact Us</b>\r\n              <br>\r\n              <br>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.\r\n              <br>\r\n              <br>\r\n    \r\n    \r\n            </h5>\r\n          </div>\r\n        </div>\r\n      </section>"

/***/ }),

/***/ "./src/app/responder-profile/responder-privacy/responder-privacy.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-privacy/responder-privacy.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResponderPrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderPrivacyComponent", function() { return ResponderPrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponderPrivacyComponent = /** @class */ (function () {
    function ResponderPrivacyComponent(ProfileServiceObj) {
        this.ProfileServiceObj = ProfileServiceObj;
    }
    ResponderPrivacyComponent.prototype.ngOnInit = function () {
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('resId');
    };
    ResponderPrivacyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-privacy',
            template: __webpack_require__(/*! ./responder-privacy.component.html */ "./src/app/responder-profile/responder-privacy/responder-privacy.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderPrivacyComponent);
    return ResponderPrivacyComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-profile-detail/responder-profile-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile-detail/responder-profile-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-responder-side-bar></app-responder-side-bar> \r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Profile Detail\r\n        </b></h2>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n        \r\n        <h6 id=\"header\">{{responderName}}  <br>\r\n          {{responderId}}</h6>&nbsp; \r\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n       \r\n  \r\n      </div>\r\n    </nav>\r\n  </div>\r\n   <hr>\r\n   <br>\r\n\r\n   <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div *ngIf=\"passwordSuccess\"class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            <strong>Password Successfully Updated!</strong>\r\n          </div>\r\n\r\n          <div  *ngIf=\"passwordError\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            <strong>Mismatch!</strong> Please enter a valid old password.\r\n          </div>\r\n      </div>\r\n  </div> \r\n\r\n   <div class=\"container\">\r\n      <div class=\"row pt-5\">\r\n        <div class=\"col-md-12\">\r\n          <section class=\"row text-center placeholders\">\r\n            <div class=\"col-md-8 placeholder col-pading-conver\">\r\n              \r\n              <img [src]=\"imageToShow\" *ngIf=\"imageToShow;else other_image\" \r\n                   class=\"img-fluid rounded-img-profile\" alt=\"Generic placeholder thumbnail\">\r\n              <ng-template #other_image>\r\n                <img src=\"/waves/assets/images/dumy.png\"  class=\"img-fluid rounded-img-profile\"\r\n                     alt=\"Generic placeholder thumbnail\">\r\n              </ng-template>\r\n    \r\n              <div class=\"user-panel\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-4\"></div>\r\n                  <div class=\"col-lg-4\">\r\n                    <label for=\"file_input_id\">Update Profile</label>\r\n                    <input [(ngModel)]=\"file\" type=\"file\" id=\"file_input_id\"\r\n                           style=\"display: none\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\r\n                    application/png, .png, .jpg , .jpeg\" (change)=\"handleFileUpload($event)\">\r\n\r\n                    \r\n                    <!-- <label for=\"file_input_id\" (click)=\"openFileDialog($event)\">Update Profile</label>\r\n                    <input [(ngModel)]=\"file\" type=\"file\" id=\"file_input_id\" (change)=\"handleFileUpload($event)\"\r\n                           style=\"display: none\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\r\n                    application/png, .png, .jpg , .jpeg\"> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n              <h3 class=\"capital-name\">{{firstName}} {{lastName}} </h3>\r\n              \r\n              <h6 class=\"capital-name\">{{responderId }}</h6>\r\n            </div>\r\n    \r\n          </section>\r\n          <br>\r\n            \r\n          <section class=\"row text-center placeholders\">\r\n            <div class=\"col-md-12 placeholder\">\r\n              <div class=\"user-panel\">\r\n                <div class=\"row\">\r\n                  <div class=\"sidebar-userpic\">\r\n                    <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-outline-secondary center-block\">Change Password\r\n                      <i class=\"fas fa-chevron-right\"></i>\r\n    \r\n                    </button>\r\n    \r\n    \r\n                  </div>\r\n                </div>\r\n              </div>\r\n    \r\n    \r\n            </div>\r\n    \r\n    \r\n          </section>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n    <ng-template #template>\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left modal_title_font\">Change Password</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n    \r\n      <form (submit)=\"onPasswordSubmit(f)\" #f=\"ngForm\">\r\n        <div class=\"modal-body\">\r\n    \r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"w3-input change\" id=\"oldPassword\" placeholder=\"Old Password\" ngModel required\r\n                   name=\"oldPassword\" oldPassword\r\n                   #oldPassword=\"ngModel\">\r\n           \r\n    \r\n          </div>\r\n    \r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"w3-input change\" minlength=\"5\" id=\"newPassword\" placeholder=\"New Password\" ngModel\r\n                   required name=\"newPassword\"\r\n                   newPassword #newPassword=\"ngModel\">\r\n    \r\n            <span class=\"help-block\" *ngIf=\"newPassword.errors?.minlength && newPassword.touched\">Password must be of minimum 5 characters length</span>\r\n          </div>\r\n    \r\n          <div class=\"form-group\">\r\n            <input type=\"password\" class=\"w3-input change\" id=\"confirmPassword\" placeholder=\"Confirm Password\"\r\n                   validateEqual=\"password\" ngModel\r\n                   required name=\"confirmPassword\" confirmPassword #confirmPassword=\"ngModel\">\r\n    \r\n            <span class=\"help-block\" *ngIf=\"newPassword.value != confirmPassword.value && confirmPassword.touched \">Your password and confirmation password do not match</span>\r\n          </div>\r\n    \r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn\" type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"modalRef.hide()\">Close</button>\r\n          <button type=\"submit\" [class.disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\r\n                  [disabled]=\"!f.valid || newPassword.value != confirmPassword.value\"\r\n                  class=\"btn btn-primary modal-btn-clr\" (click)=\"modalRef.hide()\">Save changes\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </ng-template>\r\n    "

/***/ }),

/***/ "./src/app/responder-profile/responder-profile-detail/responder-profile-detail.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile-detail/responder-profile-detail.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ResponderProfileDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderProfileDetailComponent", function() { return ResponderProfileDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponderProfileDetailComponent = /** @class */ (function () {
    function ResponderProfileDetailComponent(modalService, profileServiceObj) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.role = null;
        this.passwordObj = null;
        this.ProfileObj = null;
        this.filesData = {};
        this.imageToShow = null;
        this.image = null;
        this.schoolId = null;
    }
    ResponderProfileDetailComponent.prototype.loadimage = function () {
        var _this = this;
        this.profileServiceObj.getimage(this.userid).subscribe(function (res) {
            // this.createImageFromBlob(res);
            _this.imageToShow = res['data']['result'];
        }, function (err) {
        });
    };
    ResponderProfileDetailComponent.prototype.ngOnInit = function () {
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.firstName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('firstname');
        this.lastName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('lastname');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('resId');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminId');
        this.loadimage();
    };
    ResponderProfileDetailComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    ResponderProfileDetailComponent.prototype.onPasswordSubmit = function (form) {
        var _this = this;
        this.profileServiceObj.updatePassword(this.userid, form.value.oldPassword, form.value.newPassword).subscribe(function (res) {
            var temp = res['data'].code;
            if (temp == 400) {
                _this.passwordError = res;
                _this.passwordSuccess = null;
                window.setTimeout(function () {
                    _this.passwordError = null;
                }, 3000);
            }
            else {
                _this.passwordError = null;
                _this.passwordSuccess = res;
                window.setTimeout(function () {
                    _this.passwordSuccess = null;
                }, 3000);
            }
        }, function (err) { });
    };
    // createImageFromBlob(image: Blob) {
    //   let reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     this.imageToShow = reader.result;
    //   }, false);
    //   if (image) {
    //     reader.readAsDataURL(image);
    //   }
    // }
    ResponderProfileDetailComponent.prototype.handleFileUpload = function (evt) {
        var _this = this;
        var self = this;
        if (evt.target.files && evt.target.files.length > 0) {
            var file = evt.target.files[0]; // FileList object
            if ((file.size / 1024) < 20 * 1024) {
                var name_1 = file.name;
                var type_1 = file.type;
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(file);
                reader_1.onload = function () {
                    var data = reader_1.result;
                    _this.image = data;
                    _this.filesData = {
                        data: data,
                        name: name_1,
                        type: type_1
                    };
                    _this.profileServiceObj.setimage(_this.userid, _this.image).subscribe(function (res) {
                        _this.loadimage();
                    }, function (err) {
                    });
                };
            }
            else {
                alert('File size should be less than 20MB');
            }
        }
    };
    ResponderProfileDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-profile-detail',
            template: __webpack_require__(/*! ./responder-profile-detail.component.html */ "./src/app/responder-profile/responder-profile-detail/responder-profile-detail.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalService"], _responder_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], ResponderProfileDetailComponent);
    return ResponderProfileDetailComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-profile-list/responder-profile-list.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile-list/responder-profile-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-responder-side-bar></app-responder-side-bar>\r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n    <h2 class=\"pf-li-h1-title \">\r\n      <b>Discover\r\n      </b>\r\n    </h2>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\" aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n      </ul>\r\n      <h6 id=\"header\">{{responderName}}\r\n        <br> {{responderId}}\r\n      </h6>&nbsp;\r\n      <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n      <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n\r\n    </div>\r\n  </nav>\r\n</div>\r\n<hr>\r\n<br>\r\n<div class=\"col-md-12 pl-5\">\r\n  <form class=\"form-inline form-lng-search\">\r\n    <div class=\"input-group form-lng-search\">\r\n      <div class=\"input-group-prepend form-lng-search\">\r\n        <input type=\"search\" class=\"form-control form-lng-search w3-left-align \" placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n\r\n        <button class=\"input-group-text\" id=\"basic-addon1\" type=\"submit\">\r\n          <i class=\"fas fa-search\">\r\n          </i>\r\n\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n  <br>\r\n  <div class=\"responder1\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-6 pr-3-list\">\r\n\r\n        <h2 class=\"pf-li-h1-title pf-li-line-height\">\r\n\r\n          <b>Discover</b>\r\n          <span class=\"pf-li-h1-title2\">Student</span>\r\n\r\n        </h2>\r\n        <hr>\r\n        <br>\r\n\r\n\r\n        <section class=\"row text-center placeholders\">\r\n         \r\n\r\n          <div class=\"col-xl-4 col-md-6 col-sm-12\r\n             col-xs-12  placeholder\" *ngFor=\"let profile of studentObj.data.result\">\r\n          \r\n\r\n\r\n            <img *ngIf=\"profile.avatarFilePath;else other_image\" \r\n            [src]=\"imageToShow + profile.avatarFilePath\" class=\"img-fluid rounded-circle\" style=\"cursor: pointer;\"\r\n              alt=\"Generic placeholder thumbnail\" \r\n              (click)=\"openModal(template,profile.firstName,profile.lastName,profile.studentId,profile.avatarFilePath)\">\r\n\r\n            <ng-template #other_image>\r\n\r\n              <div class=\"circle\" style=\"cursor: pointer;\"\r\n              (click)=\"openModal(template,profile.firstName,profile.lastName,profile.studentId,profile.avatarFilePath)\">\r\n                <div class=\"text1\">\r\n\r\n\r\n                  <h2>{{profile.firstName | slice:0:1 | uppercase}}{{profile.lastName | slice:0:1 | uppercase}}</h2>\r\n                </div>\r\n              </div>\r\n\r\n            </ng-template>\r\n            <!-- <img src=\"/waves/assets/images/dumy.png\" width=\"150\" height=\"150\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\"> -->\r\n\r\n          \r\n            <div class=\"user-panel-dcvImg\">\r\n              <div class=\"row\">\r\n                <div class=\"sidebar-userpic\">\r\n                  <h4 *ngIf=\"profile.firstName.length<=12;else other_content\">\r\n                    {{profile.firstName}} </h4>\r\n                  <ng-template #other_content>\r\n                    <h4>{{profile.firstName | slice:0:11}}...</h4>\r\n                  </ng-template>\r\n                  <p style=\"text-transform: lowercase\">{{profile.studentId}}</p>\r\n\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- <img src=\"/waves/assets/images/dumy.png\" width=\"150\" height=\"150\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\"> -->\r\n\r\n        </section>\r\n        <br>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-6 pl-3-list\">\r\n\r\n        <h2 class=\"pf-li-h1-title pf-li-line-height\">\r\n\r\n          <b>Discover</b>\r\n          <span class=\"pf-li-h1-title2\">Responder</span>\r\n        </h2>\r\n        <hr>\r\n        <br>\r\n        \r\n        <section class=\"row text-center\">\r\n          <div *ngFor=\"let res of ResponderObj.data.result\" class=\"col-xl-4 col-md-6 col-sm-12 col-xs-12\">\r\n        \r\n            \r\n            <img *ngIf=\"res.avatarFilePath;else other_image\" style=\"cursor: pointer;\"\r\n            [src]=\"imageToShow + res.avatarFilePath\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\"\r\n              (click)=\"resModal(template2,res.firstName,res.lastName,res.responderId,res.position,res.avatarFilePath)\">\r\n\r\n            <ng-template #other_image>\r\n\r\n\r\n              <div class=\"circle\" style=\"cursor: pointer;\" \r\n              (click)=\"resModal(template2,res.firstName,res.lastName,res.responderId,res.position,res.avatarFilePath)\">\r\n                <div class=\"text1\">\r\n\r\n\r\n                  <h2>{{res.firstName | slice:0:1 | uppercase}}{{res.lastName | slice:0:1 | uppercase}}</h2>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n            <div class=\"user-panel1\">\r\n              <div class=\"row\">\r\n                <div class=\"sidebar-userpic\">\r\n                  <span class=\"dot_profile_list\"></span>\r\n\r\n                  <h4 *ngIf=\"res.firstName.length<=10;else other_content\">\r\n                    {{res.title}}{{res.lastName}} </h4>\r\n                  <ng-template #other_content>\r\n                    <h4>{{res.title}}{{res.lastName | slice:0:9}}...</h4>\r\n                  </ng-template>\r\n                  <p style=\"text-transform: lowercase\">{{res.position}}</p>\r\n                  <p style=\"text-transform: lowercase\">{{res.responderId}}</p>\r\n                </div>\r\n              </div>\r\n           \r\n          </div>\r\n        </div>\r\n      \r\n        </section>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #template>\r\n\r\n  <div class=\"modal-header modal-sm\">\r\n    <h4 class=\"modal-title modal_title_res\">Choose an option</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide();\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal-body modal-sm\">\r\n\r\n    <div class=\"circle\">\r\n      <div class=\"text1\">\r\n        <img *ngIf=\"avatar;else other_image\" \r\n       [src]=\"imageToShow + avatar\" class=\"img-fluid rounded-circle\" \r\n         alt=\"Generic placeholder thumbnail\">\r\n\r\n    <ng-template #other_image>\r\n\r\n          <h2>{{stdfirstname | slice:0:1 | uppercase}}{{stdlastname | slice:0:1 | uppercase}}</h2>\r\n    \r\n    </ng-template>\r\n  \r\n   </div>\r\n    </div>\r\n\r\n    <div class=\"user-panel1\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n          <h4>{{stdfirstname}} {{stdlastname}}</h4>\r\n          <p style=\"text-transform: lowercase\">{{studentId}}</p>\r\n          <a class=\"nav-link-res nav-list\" routerLink=\"/responder-messenger\" (click)=\"modalRef.hide()\">\r\n            <button class=\"btn btn-primary popup-btn\">Send a Message\r\n            </button>\r\n          </a>\r\n          <br>\r\n          <a class=\"nav-link-res nav-list\" (click)=\"modalRef.hide()\">\r\n            <button class=\"btn btn-primary popup-btn\" (click)=\"modalRef.hide();nestModal(templateSchedule)\">Schedule a Session\r\n            </button>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<ng-template #template2>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title modal_title_res\">Choose an option</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n\r\n    <div class=\"circle\">\r\n      <div class=\"text1\">\r\n\r\n        <img *ngIf=\"avatar;else other_image\" [src]=\"imageToShow + avatar\" class=\"img-fluid rounded-circle\" \r\n        alt=\"Generic placeholder thumbnail\">\r\n\r\n        <ng-template #other_image>\r\n\r\n          <h2>{{stdfirstname | slice:0:1 | uppercase}}{{stdlastname | slice:0:1 | uppercase}}</h2>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"user-panel1\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n          <h4>{{stdfirstname}} {{stdlastname}}</h4>\r\n          <p style=\"text-transform: lowercase\">{{position}}</p>\r\n          <p style=\"text-transform: lowercase\">{{resId}}</p>\r\n          <a class=\"nav-link-res nav-list\" routerLink=\"/responder-messenger\" (click)=\"modalRef.hide()\">\r\n            <button class=\"btn btn-primary popup-btn\">Send a Message\r\n            </button>\r\n          </a>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</ng-template>\r\n\r\n<ng-template #templateSchedule>\r\n\r\n  <div class=\"modal-body modal-sm\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n\r\n    <div class=\"circle-popup\">\r\n      <div class=\"text-popup\">\r\n        <img *ngIf=\"userId;else other_image\" [src]=\"userId\" class=\"img-fluid rounded-cl-popup\" alt=\"Generic placeholder thumbnail\">\r\n\r\n        <ng-template #other_image>\r\n\r\n          <h2>{{studentName | slice:0:2 | uppercase}}</h2>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"user-panel-pop-dcv\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic-popup\">\r\n\r\n          <h4 *ngIf=\"studentName.length<=12;else other_content\">\r\n            <b>Session With {{studentName}}</b>\r\n          </h4>\r\n          <ng-template #other_content>\r\n            <h4>\r\n              <b>Session With {{studentName | slice:0:11}}...</b>\r\n            </h4>\r\n          </ng-template>\r\n\r\n          <br>\r\n          <div class=\"setDate\">\r\n            <div class=\"popup-text\">\r\n              <b>Start Date:</b>\r\n            </div>\r\n\r\n            <input class=\"w3-input-date popup-input\" placeholder=\"MM/DD/YYYY\" ngModel bsDatepicker [minDate]=\"minDate\" [maxDate]=\"maxDate\">\r\n\r\n            <!-- <input type=\"text\" class=\"w3-input-date popup-input\" placeholder=\"MM/DD/YYYY\" bsDatepicker [(ngModel)]=\"datepickerModel\" /> -->\r\n            <i class=\"fa fa-calendar fa-set\"></i>\r\n          </div>\r\n          <br>\r\n\r\n          <div>\r\n            <div class=\"popup-time\">\r\n              <b>Start Time:</b>\r\n            </div>\r\n            <ngb-timepicker class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"starttime\" [hourStep]=\"starthourStep\" [minuteStep]=\"startminuteStep\"\r\n              [meridian]=\"meridian\" [spinners]=\"spinners\" (ngModelChange)=\"changeTime(starttime.hour,starttime.minute)\"></ngb-timepicker>\r\n            <!-- <div class=\"popup-time\"><b>Start Time:</b></div>\r\n                    <timepicker class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"mytime\" \r\n                    [hourStep]=\"hstep\" [minuteStep]=\"mstep\" ></timepicker> -->\r\n            <!-- <timepicker  class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"mytime\"></timepicker> -->\r\n          </div>\r\n          <br>\r\n          <!-- {{changeTime(starttime.hour,starttime.minute)}} -->\r\n          <div>\r\n            <div class=\"popup-time\">\r\n              <b>End Time:</b>\r\n            </div>\r\n\r\n            <ngb-timepicker class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"endtime\" [hourStep]=\"endhourStep\" [minuteStep]=\"endminuteStep\"\r\n              [meridian]=\"meridian\" [spinners]=\"spinners\"></ngb-timepicker>\r\n            <!-- <timepicker  class=\"w3-input-date popup-inpuT\" [(ngModel)]=\"mytime1\"></timepicker> -->\r\n          </div>\r\n\r\n\r\n          <div>\r\n            <div class=\"popup-text-rpt\">\r\n              <b>Session Frequency:</b>\r\n            </div>\r\n\r\n            <select class=\"w3-input-rpt popup-input\">\r\n              <option value=\"\" disabled selected>Repeat</option>\r\n              <option value=\"Yes\">Yes</option>\r\n              <option value=\"Never\">Never</option>\r\n            </select>\r\n          </div>\r\n          <br>\r\n\r\n\r\n\r\n          <!-- <select class=\"w3-input\" id=\"title\" ngModel\r\n                          required name=\"title\" title\r\n                          [(ngModel)]=\"title\">\r\n                      \r\n                            </select> -->\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    \r\n    <h5 style=\"text-align: center;\">\r\n      <b>Please Select Their Waves</b>\r\n    </h5>\r\n\r\n      <div>\r\n          <ng-select \r\n          [items]=\"cities2\"\r\n          bindLabel=\"name\"\r\n          bindValue=\"name\"\r\n          [multiple]=\"true\"\r\n          placeholder=\"Select Waves\"\r\n          [(ngModel)]=\"selectedCityIds\">\r\n</ng-select>\r\n        <a>\r\n          <!-- <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i> -->\r\n        </a>\r\n      </div>\r\n     \r\n   \r\n    <br>\r\n    <div class=\"line-session2\">\r\n      <h4>\r\n        <a>\r\n          <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n        </a>\r\n      </h4>\r\n\r\n    </div>\r\n    <br>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-block\">Schedule Session\r\n    </button>\r\n\r\n  </div>\r\n\r\n\r\n</ng-template>\r\n\r\n<!-- <section class=\"row text-center placeholders\">\r\n  <div class=\"col-6 col-md-2 placeholder\" *ngFor=\"let profile of ResponderObj.data\">\r\n    <img *ngIf=\"profile.imagePath != '';else other_image\" src=\"profile.imagePath\" width=\"150\" height=\"150\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n    <ng-template #other_image><img  src=\"/waves/assets/images/dumy.png\" width=\"150\" height=\"150\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\"></ng-template>\r\n    <div class=\"user-panel\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n          <span *ngIf=\"profile.isAvalable;else other_content\" class=\"dot_profile_list_2\"></span>\r\n          <ng-template #other_content><span  class=\"dot_profile_list\"></span></ng-template>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <h5>{{profile.fullName}}</h5>\r\n  </div>\r\n\r\n</section>\r\n<br> -->\r\n\r\n\r\n<!-- <section class=\"row text-center placeholders\">\r\n   \r\n      <div class=\"col-3 col-md-4 col-sm-6  placeholder\" *ngFor=\"let profile of studentObj.data\">\r\n\r\n        <img src=\"/waves/assets/images/dumy.png\" width=\"150\" height=\"150\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\r\n        <div class=\"user-panel\">\r\n          <div class=\"row\">\r\n            <div class=\"sidebar-userpic\">\r\n              <h4>{{profile.fullName}}</h4>\r\n\r\n              <p>{{profile.studentId}}</p>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n\r\n   \r\n\r\n  </section> -->"

/***/ }),

/***/ "./src/app/responder-profile/responder-profile-list/responder-profile-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile-list/responder-profile-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ResponderProfileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderProfileListComponent", function() { return ResponderProfileListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResponderProfileListComponent = /** @class */ (function () {
    function ResponderProfileListComponent(modalService, profileServiceObj) {
        this.modalService = modalService;
        this.profileServiceObj = profileServiceObj;
        this.starttime = { hour: 9, minute: 10 };
        this.starthourStep = 1;
        this.startminuteStep = 5;
        this.meridian = true;
        this.spinners = true;
        // endtime:object = this.starttime;
        this.endtime = { hour: this.starttime.hour, minute: this.starttime.minute + 15 };
        this.endhourStep = 1;
        this.endminuteStep = 5;
        this.schoolId = null;
        this.userid = null;
        this.ResponderObj = { data: { result: [] } };
        this.studentObj = { data: { result: [] } };
        this.image = null;
        this.count = -1;
        this.imageToShow = "http://ec2-18-219-131-166.us-east-2.compute.amazonaws.com/wavesbackend/storage/app/public/";
        this.checkId = [];
        this.cities2 = [
            { name: 'Vilnius' },
            { name: 'Kaunas' },
            { name: 'Pavilnys' },
            { name: 'Pabradė' },
            { name: 'Klaipėda' }
        ];
        this.stdfirstname = null;
        this.stdlastname = null;
        this.studentId = null;
        this.avatar = null;
        this.resId = null;
        this.minDate = new Date();
        this.maxDate = new Date();
        this.minDate.setDate(this.minDate.getDate() + 0);
        this.maxDate.setDate(this.maxDate.getDate() + 7);
    }
    ResponderProfileListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // let decoded = JWT( Cookie.get('token'));
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('resId');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminId');
        this.schoolId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('spid');
        this.profileServiceObj.getAssignedstudent(this.userid).subscribe(function (res) {
            _this.studentObj['data']['result'] = res['data']['result'];
        }, function (err) {
        });
        this.profileServiceObj.getAllRes(this.schoolId, this.userid).subscribe(function (res) {
            _this.ResponderObj['data']['result'] = res['data']['result'];
        }, function (err) {
        });
    };
    // changeTime(hour:number,minute:number){
    //   this.endtime ={hour:hour, minute:minute + 15};
    // }
    // imageGet(userid:number){
    // if(this.checkId[userid]==null)
    // {
    //   this.profileServiceObj.downloadImage(userid).subscribe(res => {
    //     this.createImageFromBlob(res,userid);
    //   },
    //   err => {}
    // )
    // this.checkId[userid]=1;
    // }
    // //return userid;
    // }
    // createImageFromBlob(image: Blob,userid:number) {
    //   let reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     this.imageToShow[userid] = reader.result;
    //   }, false);
    //   if (image) {
    //     reader.readAsDataURL(image);
    //   }
    // }
    ResponderProfileListComponent.prototype.openModal = function (template, firstname, lastname, studentid, image) {
        this.stdfirstname = firstname;
        this.stdlastname = lastname;
        this.studentId = studentid;
        this.avatar = image;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' }); // for show model in center( modal-dialog-centered)
    };
    ResponderProfileListComponent.prototype.resModal = function (template, firstname, lastname, responderid, position, image) {
        this.stdfirstname = firstname;
        this.stdlastname = lastname;
        this.resId = responderid;
        this.position = position;
        this.avatar = image;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' }); // for show model in center( modal-dialog-centered)
    };
    ResponderProfileListComponent.prototype.nestModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    ResponderProfileListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-profile-list',
            template: __webpack_require__(/*! ./responder-profile-list.component.html */ "./src/app/responder-profile/responder-profile-list/responder-profile-list.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderProfileListComponent);
    return ResponderProfileListComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ninput[type=search]::-webkit-search-cancel-button {\r\n  -webkit-appearance: searchfield-cancel-button;\r\n}\r\nh1, h2, h3, h4, h5, h6,p {\r\n  font-family: Raleway !important;\r\n}\r\nh4#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\nh6#Margin {\r\n  margin-bottom: -6px !important;\r\n}\r\nh5#text {\r\n\r\n  text-align: left !important;\r\n}\r\nh5#font {\r\n\r\n  text-transform: capitalize;\r\n  font-family: Raleway !important;\r\n}\r\nh6#size {\r\n  font-size: 14px !important;\r\n  text-align: left !important;\r\n}\r\nh3#font2 {\r\n  font-family: Montserrat, Arial !important;\r\n}\r\np#font-size {\r\n  font-size: large !important;\r\n}\r\np#size {\r\n  font-size: 14px !important;\r\n  text-align: left !important;\r\n}\r\n.disabled {\r\n  cursor: not-allowed;\r\n}\r\n.help-block {\r\n\r\n  color: red;\r\n}\r\n.nav-bg-color {\r\n  background-color: #16baff !important;\r\n}\r\n.nav-link {\r\n  color: #ffffff !important;\r\n  font: Raleway !important;\r\n}\r\n.nav-link:hover {\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n.nav-link-res {\r\n  color: #000000 !important;\r\n  font: Raleway !important;\r\n}\r\n.nav-link-res:hover {\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n.pt-3 {\r\n  margin-top: 5rem;\r\n  padding: 20px !important;\r\n}\r\n.col-md-12 {\r\n  padding: 0px;\r\n}\r\n.form-control {\r\n  border-radius: 0px !important;\r\n}\r\n.avatar {\r\n  max-width: 35px;\r\n  max-height: 35px;\r\n}\r\n.form-control {\r\n\r\n  padding: 2px !important;\r\n\r\n}\r\n.form-control-search {\r\n  width: 270px !important;\r\n}\r\n.form-lng-search{\r\n  width: 80% !important;\r\n  margin-left: -6px;\r\n}\r\n.input-group-text {\r\n  margin-right: 10px !important;\r\n}\r\n#header\r\n{\r\n  font-size: 15px;\r\n    font-weight: bold;\r\n    text-transform: capitalize;\r\n    font-family: Raleway !important;\r\n}\r\n/* css for side_bar */\r\n.sidebar {\r\n  position: fixed;\r\n  top: 59px !important;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  padding: 20px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  border-right: 1px solid #eee;\r\n  background-color: #3D3D3D;\r\n}\r\n/* Sidebar navigation */\r\n.sidebar {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\r\n  color: #fff;\r\n  background-color: #414141 !important;\r\n}\r\n.sidebar .nav {\r\n  margin-bottom: 20px;\r\n}\r\n.sidebar .nav-item {\r\n  width: 100%;\r\n}\r\n.sidebar .nav-item + .nav-item {\r\n  margin-left: 0;\r\n}\r\n.sidebar .nav-link {\r\n  border-radius: 0;\r\n}\r\n.nav_bar_font {\r\n  font-family: Raleway !important;\r\n  font-size: 19px;\r\n}\r\n.font-awesome-clr {\r\n  font-size: 2em;\r\n  color: #4DC4F7 !important;\r\n}\r\n.font-awesome-clr-previous {\r\n  font-size: 1em;\r\n  color: #4DC4F7 !important;\r\n}\r\n.font-awesome-clr2 {\r\n  font-size: 1.3em;\r\n  color: #ffffff !important;\r\n  padding-right: 5px;\r\n}\r\n.font-awesome-feedbck {\r\n  font-size: 1.5em;\r\n  color: #4DC4F7 !important;\r\n\r\n}\r\n.font-awesome-size {\r\n  font-size: 25px;\r\n  color: #4DC4F7 !important;\r\n}\r\n.icon-size {\r\n  font-size: 25px;\r\n  color: gray !important;\r\n}\r\n.user-panel {\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\n  padding: 40px 10px 40px 10px;\r\n}\r\n.user-panel1 {\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\n  padding: 0 !important;\r\n}\r\n.user-panel-dcvImg {\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\npadding-top: 20px !important;\r\n}\r\n.user-panel-popup {\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\n  padding: 0px 10px 40px 10px;\r\n  margin-top: -30px;\r\n}\r\n.user-panel-popup-ref{\r\n\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\n  padding: 0px 10px 0px 10px;\r\n  \r\n}\r\n.user-panel-pop-dcv {\r\n  float: left;\r\n  width: 100%;\r\n  color: #000;\r\n  padding: 0px 10px 40px 10px;\r\n \r\n}\r\n.user-panel-responder {\r\n \r\n  width: 100%;\r\n  color: #000;\r\n  padding: 40px 10px 20px 10px;\r\n}\r\n.row {\r\n\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n.sidebar-userpic{\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.sidebar-userpic-popup {\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.sidebar-userpic img {\r\n  margin: 0px auto;\r\n  width: 43%;\r\n  height: 126px;\r\n  padding: 3px;\r\n  border-radius: 50% 50% 50% 50%;\r\n}\r\n.sidebar-userpic-popup img {\r\n  margin: 0px auto;\r\n  width: 102px;\r\n  height: 126px;\r\n  padding: 3px;\r\n  border-radius: 50% 50% 50% 50%;\r\n}\r\n.avatar_name {\r\n\r\n  background-color: aliceblue;\r\n  padding: 23% 15% 16% 15%;\r\n  border-radius: 50%;\r\n  color: gray;\r\n}\r\n.img-responsive {\r\n  display: block;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n.sidebar-userpic-name {\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n#sch_name_sidebar {\r\n  position: absolute;\r\n  display: inline-block;\r\n  bottom: 40px;\r\n  left: 15px;\r\n}\r\n#li_clr {\r\n  color: white !important;\r\n  font-family: Raleway !important;\r\n\r\n}\r\n#logout_sidebar_button {\r\n\r\n  display: inline-block;\r\n  margin-left: 10px;\r\n}\r\n/* signout button css */\r\n.transparent_btn {\r\n  display: inline-block;\r\n  padding: 3% 23%;\r\n  color: #FFF;\r\n  border: 2px solid #FFF;\r\n  text-decoration: none;\r\n  font-size: 14px;\r\n  line-height: 120%;\r\n  background-color: rgba(255, 255, 255, 0);\r\n  border-radius: 0px;\r\n  transition: background-color 300ms ease;\r\n  cursor: pointer;\r\n}\r\n.transparent_btn:hover {\r\n  background-color: rgba(255, 255, 255, 0.3);\r\n  color: #FFF;\r\n}\r\n.sch-name {\r\n\r\n  position: absolute;\r\n  bottom: 0px;\r\n}\r\n/* end button css */\r\nhr {\r\n  background-color: #ffffff !important;\r\n}\r\nhr {\r\n  border: 0;\r\n  border-top: 1px solid #d8d8d8 !important;\r\n  margin: 0;\r\n}\r\nhr.beautiful-line {\r\n  border-top: 2px solid #fff !important;\r\n  margin-bottom: 10px;\r\n  width:  90%;\r\n}\r\nhr.style14 { \r\n  border: 0; \r\n  height: 0px;\r\n  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); \r\n}\r\n.dot_profile_list {\r\n  right: 0px;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #bbb;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dot_profile_list1 {\r\n  right: 0px;\r\n  height: 15px;\r\n  width: 15px;\r\n  background-color: #098cc4;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dot_profile_list_2 {\r\n  right: 0px;\r\n  height: 20px;\r\n  width: 20px;\r\n  background-color: #098cc4;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n}\r\n.dor-clr-lgblue {\r\n  background-color: #4DC4F7;\r\n}\r\n.dor-clr-green {\r\n  background-color: green;\r\n}\r\n.dor-clr-drkgrn {\r\n  background-color: darkolivegreen;\r\n}\r\n.dor-clr-gold {\r\n  background-color: goldenrod;\r\n}\r\n.dor-clr-choclt {\r\n  background-color: chocolate;\r\n}\r\n.dor-clr-red {\r\n  background-color: orangered;\r\n}\r\n.prf_li_title {\r\n  font-size: 20px;\r\n  font-family: Raleway !important;\r\n}\r\n.prf_li_title-mass {\r\n  font-size: 16px;\r\n  font-family: Raleway !important;\r\n}\r\n.pf-li-h1-title {\r\n  margin-left: 10px;\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n}\r\n.pf-li-h1-title2 {\r\n  margin-left: 10px;\r\n  font-size: 1.2rem;\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n}\r\n.hr-line {\r\n  margin-left: 10px;\r\n}\r\n.pf-li-line-height {\r\n  line-height: 1;\r\n}\r\n.change::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.change:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.change::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.change:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  color: #16baff;\r\n  font-family: Raleway;\r\n  font-size: 0.813em;\r\n}\r\n.msg-plc-size::-webkit-input-placeholder {\r\n  /* WebKit, Blink, Edge */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size:-moz-placeholder {\r\n  /* Mozilla Firefox 4 to 18 */\r\n\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size::-moz-placeholder {\r\n  /* Mozilla Firefox 19+ */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.msg-plc-size:-ms-input-placeholder {\r\n  /* Internet Explorer 10-11 */\r\n  font-family: Raleway;\r\n  font-size: 1.5em;\r\n}\r\n.modal_title_font {\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n  font-size: bold;\r\n  \r\n}\r\n.modal_title_res {\r\n  color: #16baff;\r\n  font-family: Raleway !important;\r\n  font-size: bold;\r\n  margin-left: auto;\r\n  margin-right: -6%;\r\n}\r\n.modal-btn-clr {\r\n  color: #16baff;\r\n}\r\n.form-control-textarea {\r\n  padding: 0px !important;\r\n  border-radius: 7px !important;\r\n  font-size: 16px !important;\r\n}\r\n.textarea {\r\n  padding: 0p !important;\r\n \r\n  font-size: 14px !important;\r\n}\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #16baff;\r\n  border-color: #16baff;\r\n}\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-block-padiing {\r\n  padding-top: 10px !important;\r\n  padding-bottom: 10px !important;\r\n  font-size: 18px;\r\n}\r\n.col-pading {\r\n  padding-top: 100px !important;\r\n}\r\n.col-pading-conver {\r\n  display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n#right {\r\n  float: right !important;\r\n \r\n}\r\na#clr {\r\n  color: #2c75ff;\r\n  font-family: Raleway !important;\r\n  font-size: larger !important;\r\n  float: right !important;\r\n}\r\n.line {\r\n  border-bottom: 3px solid rgb(46, 15, 15);\r\n  padding-bottom: 30px !important;\r\n}\r\n.line2 {\r\n  border-bottom: 1px solid #d8d8d8 !important;\r\n}\r\n.line-session {\r\n  border-bottom: 1px solid #e9ecef;\r\n\r\n}\r\n.line-session2 {\r\n  border-bottom: 3px solid #d4d4d4;\r\n  padding-bottom: 30px !important;\r\n}\r\ninput[type=\"radio\"] { /* IE 9 */\r\n  -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */\r\n  transform: scale(1.5);\r\n}\r\nlabel {\r\n  color: blue;\r\n  cursor: pointer;\r\n  text-align: center !important;\r\n}\r\nlabel:hover {\r\n  text-decoration: underline;\r\n}\r\n#file_input_id {\r\n  display: none !important;\r\n}\r\nimg#prf-list-size {\r\n  width: 30px;\r\n  height: 30px;\r\n  margin-right: 5px;\r\n}\r\n/*  -----------------------Messenger css--------------------- */\r\n.list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n.pull-right {\r\n  float: right !important;\r\n}\r\n.pull-left {\r\n  float: left !important;\r\n}\r\n.chat-img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50px;\r\n  margin-right: 10px;\r\n}\r\n.message {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  display: block;\r\n  width: 83%;\r\n}\r\n/* ==========================message example======================= */\r\n#frame {\r\n  width: 100%;\r\n  min-width: 360px;\r\n  height: 82vh;\r\n  min-height: 300px;\r\n  max-height: 100%;\r\n  background: white;\r\n}\r\n@media screen and (max-width: 360px) {\r\n  #frame {\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n}\r\n@media screen and (max-height: 960px) {\r\n  #frame {\r\n    height: 78vh;\r\n  }\r\n}\r\n#frame #sidepanel {\r\n  float: left;\r\n  min-width: 200px;\r\n  max-width: 340px;\r\n  width: 40%;\r\n  height: 100%;\r\n  background: white;\r\n  color: black;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel {\r\n    width: 58px;\r\n    min-width: 58px;\r\n  }\r\n}\r\n#frame #sidepanel #profile.expanded .wrap {\r\n  height: 210px;\r\n  line-height: initial;\r\n}\r\n#frame #sidepanel #profile.expanded .wrap p {\r\n  margin-top: 20px;\r\n}\r\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n  -webkit-filter: FlipH;\r\n          filter: FlipH;\r\n  -ms-filter: \"FlipH\";\r\n}\r\n#frame #sidepanel #profile .wrap {\r\n  height: 60px;\r\n  line-height: 60px;\r\n  overflow: hidden;\r\n  transition: 0.3s height ease;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap {\r\n    height: 55px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap img {\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  padding: 3px;\r\n  border: 2px solid #e74c3c;\r\n  height: auto;\r\n  float: left;\r\n  cursor: pointer;\r\n  transition: 0.3s border ease;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap img {\r\n    width: 40px;\r\n    margin-left: 4px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap p {\r\n  float: left;\r\n  margin-left: 15px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap p {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap i.expand-button {\r\n  float: right;\r\n  margin-top: 23px;\r\n  font-size: 0.8em;\r\n  cursor: pointer;\r\n  color: #435f7a;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap i.expand-button {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options.active {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  margin: 75px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options.active {\r\n    margin-top: 62px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #435f7a;\r\n  margin: -8px 0 0 24px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options:before {\r\n    margin-left: 23px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul {\r\n  overflow: hidden;\r\n  border-radius: 6px;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li {\r\n  padding: 15px 0 30px 18px;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li {\r\n    padding: 15px 0 35px 22px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\r\n  background: #4DC4F7;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  margin: 5px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n    width: 14px;\r\n    height: 14px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 14px;\r\n  margin: -3px 0 0 -3px;\r\n  background: transparent;\r\n  border-radius: 50%;\r\n  z-index: 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li p {\r\n  padding-left: 12px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li p {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #expanded {\r\n  padding: 100px 0 0 0;\r\n  display: block;\r\n  line-height: initial !important;\r\n}\r\n#frame #sidepanel #profile .wrap #expanded label {\r\n  float: left;\r\n  clear: both;\r\n  margin: 0 8px 5px 0;\r\n  padding: 5px 0;\r\n}\r\n#frame #sidepanel #profile .wrap #expanded input {\r\n  border: none;\r\n  margin-bottom: 6px;\r\n  background: #32465a;\r\n  border-radius: 3px;\r\n  color: #f5f5f5;\r\n  padding: 7px;\r\n  width: calc(100% - 43px);\r\n}\r\n#frame #sidepanel #profile .wrap #expanded input:focus {\r\n  outline: none;\r\n  background: #4DC4F7;\r\n}\r\n#frame #sidepanel #contacts {\r\n  height: calc(100% - 20px);\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts {\r\n    height: calc(100% - 149px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n\r\n  #frame #sidepanel #contacts::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #contacts.expanded {\r\n  height: calc(100% - 334px);\r\n}\r\n#frame #sidepanel #contacts::-webkit-scrollbar {\r\n  width: 8px;\r\n  /* background: #b2b2b2; */\r\n}\r\n#frame #sidepanel #contacts ul li.contact {\r\n  position: relative;\r\n  padding: 10px 0 15px 0;\r\n  font-size: 0.9em;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact {\r\n    padding: 6px 0 46px 8px;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact:hover {\r\n  background: #4DC4F7;\r\n}\r\n#frame #sidepanel #contacts ul li.contact.active {\r\n  background: #4DC4F7;\r\n  border-right: 5px solid #4DC4F7;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap {\r\n  width: 88%;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap {\r\n    width: 100%;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap span {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: -2px 0 0 -2px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  border: 2px solid #2c3e50;\r\n  background: #95a5a6;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap img {\r\n    margin-right: 0px;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n  padding: 5px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\r\n  font-weight: 600;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\r\n  margin: 5px 0 0 0;\r\n  padding: 0 0 1px;\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: 1s all ease;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\r\n  position: initial;\r\n  border-radius: initial;\r\n  background: none;\r\n  border: none;\r\n  padding: 0 2px 0 0;\r\n  margin: 0 0 0 1px;\r\n  opacity: .5;\r\n}\r\n#frame #sidepanel #bottom-bar {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n#frame #sidepanel #bottom-bar button {\r\n  float: left;\r\n  border: none;\r\n  width: 50%;\r\n  padding: 10px 0;\r\n  background: #32465a;\r\n  color: #f5f5f5;\r\n  cursor: pointer;\r\n  font-size: 0.85em;\r\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button {\r\n    float: none;\r\n    width: 100%;\r\n    padding: 15px 0;\r\n  }\r\n}\r\n#frame #sidepanel #bottom-bar button:focus {\r\n  outline: none;\r\n}\r\n#frame #sidepanel #bottom-bar button:nth-child(1) {\r\n  border-right: 1px solid #2c3e50;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\r\n    border-right: none;\r\n    border-bottom: 1px solid #2c3e50;\r\n  }\r\n}\r\n#frame #sidepanel #bottom-bar button:hover {\r\n  background: #435f7a;\r\n}\r\n#frame #sidepanel #bottom-bar button i {\r\n  margin-right: 3px;\r\n  font-size: 1em;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button i {\r\n    font-size: 1.3em;\r\n  }\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button span {\r\n    display: none;\r\n  }\r\n}\r\n#frame .content {\r\n  float: right;\r\n  background-color: white !important;\r\n  width: 55%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content {\r\n    width: calc(100% - 58px);\r\n    min-width: 300px !important;\r\n  }\r\n}\r\n@media screen and (min-width: 900px) {\r\n  #frame .content {\r\n    width: calc(100% - 340px);\r\n  }\r\n}\r\n/* @media only screen and (max-width: 767px) and (min-width: 740px)  {\r\n  #frame .content  {\r\n    width: 44% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 741px) and (min-width: 736px)  {\r\n  #frame .content  {\r\n    width: 40% !important;\r\n  }\r\n} */\r\n#frame .content .contact-profile {\r\n  width: 100%;\r\n  height: 60px;\r\n  line-height: 60px;\r\n  background: white;\r\n}\r\n#frame .content .contact-profile img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 9px 12px 0 9px;\r\n}\r\n#frame .content .contact-profile p {\r\n  float: left;\r\n}\r\n#frame .content .contact-profile .social-media {\r\n  float: right;\r\n}\r\n#frame .content .contact-profile .social-media i {\r\n  margin-left: 14px;\r\n  cursor: pointer;\r\n}\r\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\r\n  margin-right: 20px;\r\n}\r\n#frame .content .contact-profile .social-media i:hover {\r\n  color: #435f7a;\r\n}\r\n#frame .content .messages {\r\n  height: auto;\r\n  min-height: calc(100% - 93px);\r\n  max-height: calc(100% - 93px);\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .messages {\r\n    max-height: calc(100% - 105px);\r\n  }\r\n\r\n}\r\n#frame .content .messages::-webkit-scrollbar {\r\n  width: 8px;\r\n  background: transparent;\r\n}\r\n#frame .content .messages::-webkit-scrollbar-thumb {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n#frame .content .messages ul li {\r\n  display: inline-block;\r\n  clear: both;\r\n  float: left;\r\n  margin: 15px 15px 5px 15px;\r\n  width: calc(100% - 25px);\r\n  font-size: 0.9em;\r\n}\r\n#frame .content .messages ul li:nth-last-child(1) {\r\n  margin-bottom: 20px;\r\n}\r\n#frame .content .messages ul li.sent img {\r\n  margin: 6px 8px 0 0;\r\n}\r\n#frame .content .messages ul li.sent p {\r\n  background: #f0f1f0;\r\n  color: black;\r\n}\r\n#frame .content .messages ul li.replies img {\r\n  float: right;\r\n  margin: 6px 0 0 8px;\r\n}\r\n#frame .content .messages ul li.replies p {\r\n  background: #16baff;\r\n  color: white;\r\n  float: right;\r\n}\r\n#frame .content .messages ul li img {\r\n  width: 35px;\r\n  border-radius: 50%;\r\n  float: left;\r\n}\r\n#frame .content .messages ul li p {\r\n  display: inline-block;\r\n  padding: 10px 15px;\r\n  border-radius: 20px;\r\n  max-width: 205px;\r\n  line-height: 130%;\r\n}\r\n@media screen and (min-width: 735px) {\r\n  #frame .content .messages ul li p {\r\n    max-width: 300px;\r\n  }\r\n}\r\n#frame .content .message-input {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 99%;\r\n  z-index: 99;\r\n}\r\n#frame .content .message-input .wrap {\r\n  position: relative;\r\n}\r\n#frame .content .message-input .wrap input {\r\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n  float: left;\r\n  border: none;\r\n  width: calc(100% - 90px);\r\n  padding: 11px 32px 10px 8px;\r\n  font-size: 0.8em;\r\n  color: #32465a;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .message-input .wrap input {\r\n    padding: 15px 32px 16px 8px;\r\n  }\r\n}\r\n#frame .content .message-input .wrap input:focus {\r\n  outline: none;\r\n}\r\n#frame .content .message-input .wrap button {\r\n  float: right;\r\n  border: none;\r\n  width: 50px;\r\n  padding: 12px 0;\r\n  cursor: pointer;\r\n  background: #16baff;\r\n  color: #f5f5f5;\r\n}\r\n#frame .content .message-input .wrap button:hover {\r\n  background: #4DC4F7;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .message-input .wrap button {\r\n    padding: 16px 0;\r\n  }\r\n}\r\n/* =====================SESSION COMPONENT CSS===================== */\r\n.session-img {\r\n  width: 70px;\r\n  height: 70px;\r\n  border-radius: 50px;\r\n  margin-right: 10px;\r\n}\r\n.session-block {\r\n  margin-top: 20px;\r\n}\r\n.font-awesome-session {\r\n  font-size: 2em;\r\n  color: #d8d9dc !important;\r\n\r\n}\r\n.dropdown-menu.show {\r\n  display: block;\r\n   width: auto!important; \r\n}\r\n.dropdown-item:hover,.dropdown-item:focus{\r\n  color: #000;\r\n  text-decoration: none;\r\n  background-color: #4DC4F7;\r\n}\r\n.dropdown-item:active{\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #414141;\r\n}\r\n/* .dropdown-toggle::after {\r\n\r\n  border-top: 0 !important;\r\n\r\n  border-left: 0 !important;\r\n}\r\n\r\n.dropdown-menu.show {\r\n  display: block;\r\n  transform: translate3d(-408px, 26px, 0px) !important;\r\n}\r\n\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  float: left;\r\n  min-width: 17rem !important;\r\n  padding: 0.5rem 0;\r\n  margin: 0.125rem 0 0;\r\n  font-size: 1rem;\r\n  color: #212529;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n} */\r\n/* ========================= CRISIS SUPPORT CSS =========================== */\r\n#new-board-btn {\r\n  margin-right: 10px !important;\r\n}\r\np#set-w {\r\n  width: 310px;\r\n}\r\n/* ---------------------LOCAL RESOURCES CSS------------------------------------- */\r\n.btn-color {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0px 10px;\r\n  margin: 6px 6px;\r\n  text-align: center;\r\n  width: 117px;\r\n  height: 30px;\r\n  border-radius: 3px;\r\n}\r\n.btn-color1 {\r\n  background-color: #16baff;\r\n  color: white;\r\n  cursor: pointer;\r\n  padding: 0px 12px;\r\n  margin: 6px 6px;\r\n  text-align: left;\r\n}\r\n.text {\r\n  padding: 0px 20px;\r\n  text-align: left;\r\n  justify-content: center;\r\n}\r\n.left-btn {\r\n  margin-left: 0%;\r\n}\r\n/* ========================CSS FOR ADMIN-SIDEBAR================================ */\r\n.sidenav {\r\n  background: #16baff;\r\n  color: #fff;\r\n  position: fixed;\r\n  left: auto;\r\n  top: 0;\r\n  /* right: 0; */\r\n  bottom: 0;\r\n  max-width: 250px;\r\n  min-width: 250px;\r\n  z-index: 9999;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  \r\n}\r\n.sidenav a {\r\n  padding: 6px 8px 6px 16px;\r\n  text-decoration: none;\r\n\r\n  color: #ffffff;\r\n  display: block;\r\n  font-family: Raleway !important;\r\n  font-size: 18px ;\r\n  line-height: 2;\r\n}\r\n@media screen and (max-height: 835px) {\r\n\r\n  .sidenav a {\r\n    padding: 0% 8px 3% 16px !important;\r\n    \r\n  }\r\n  .user-panel {\r\n    float: left;\r\n    width: 100%;\r\n    color: #000;\r\n    padding: 35px 10px 35px 10px;\r\n}\r\n}\r\n@media screen and (max-height: 765px) {\r\n\r\n  .sidenav a {\r\n    padding: 0% 8px 1% 16px !important;\r\n    \r\n  }\r\n\r\n  .user-panel {\r\n    float: left;\r\n    width: 100%;\r\n    color: #000;\r\n    padding: 25px 10px 25px 10px;\r\n}\r\n}\r\n.link:hover{\r\n  color:#FFF !important;\r\n  background-color: #15b1f2;\r\n  text-decoration: none !important;\r\n}\r\n.link:active{\r\n  color:#FFF !important;\r\n  background-color: #15b1f2;\r\n  text-decoration: none !important;\r\n}\r\n.active {\r\n  color:#FFF !important;\r\n  background-color: #15b1f2 !important;\r\n  text-decoration: none !important;\r\n}\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: -18px;\r\n  right: 16px;\r\n  font-size: 36px !important;\r\n  margin-left: 50px;\r\n  cursor: pointer;\r\n\r\n}\r\n@media screen and (max-height: 450px) {\r\n  .sidenav {\r\n    padding-top: 15px;\r\n  }\r\n\r\n  .sidenav a {\r\n    font-size: 18px;\r\n  }\r\n}\r\n.mybutton {\r\n  padding-top: 1px;\r\n  position: static;\r\n  bottom: 0px;\r\n  MARGIN-LEFT: 0px;\r\n  background-color: #000;\r\n  width: 190px;\r\n  margin-top: 390px;\r\n}\r\n.bottom-button {\r\n  background-color: #1087ba;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0;\r\n  padding-top:3px; \r\n  width: 100%;\r\n  /* padding-right: 32%; */\r\n}\r\n.side-btn{\r\n  width: 90%;\r\n  border-radius: 0;\r\n}\r\n@media screen and (min-height:652px)\r\n{\r\n .bottom-button\r\n {\r\n   background-color: #1087ba;\r\n   position: absolute;\r\n   bottom: 0;\r\n   \r\n   /* padding-right: 43%; */\r\n }\r\n}\r\n.bottom-button1 {\r\n  background-color: #000;\r\n  margin-top: 300%;\r\n}\r\na.nav-list{\r\n  font-size: 1rem !important;\r\n  padding-left: 30px !important;\r\n  line-height: 1.5 !important;\r\n}\r\n/* ///////////toogle menu  CSS/////////////// */\r\n.hamburger {\r\n  display: block;\r\n  position: absolute;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 67px;\r\n  height: 96px;\r\n  font-size: 0;\r\n  text-indent: -9999px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: none;\r\n  border: 0;\r\n}\r\n.hamburger span {\r\n  display: block;\r\n  position: absolute;\r\n  top: 34px;\r\n  left: 11px;\r\n  right: 28px;\r\n  height: 3px;\r\n  background: #bbbec1;\r\n}\r\n.hamburger span::before,\r\n.hamburger span::after {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #bbbec1;\r\n  /* background-color: #1a2580; */\r\n  content: \"\";\r\n}\r\n.hamburger span::before {\r\n  top: -8px;\r\n}\r\n.hamburger span::after {\r\n  bottom: -8px;\r\n}\r\n/* /////////////END TOGGLE MENU CSS/////////////// */\r\n/* ===========sidebar switch button============== */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 28px;\r\n}\r\n.switch input {\r\n  display: none;\r\n}\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 13px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: -13px;\r\n  background-color: lightgray;\r\n  transition: .4s;\r\n}\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 20px;\r\n  width: 20px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #2196F3;\r\n}\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196F3;\r\n}\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\nh5#switch {\r\n  color: white;\r\n  margin-left: 15px !important;\r\n}\r\nh6.space {\r\n  word-spacing: 125px !important;\r\n}\r\ntextarea.cls {\r\n  width: 95% !important;\r\n}\r\n/* ====================Import Responder CSS=========================== */\r\n.center-block {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n\r\n}\r\n.import-content {\r\n  margin-top: 10%;\r\n}\r\n#upload-btn {\r\n  width: 30%;\r\n  height: 9%;\r\n  border-radius: 0px;\r\n  text-decoration: none;\r\n\r\n}\r\n/* |-----------------------------------------Profile Detail---------------------------------| */\r\n.field\r\n{\r\nmargin: 10% 0% 0% 0%;\r\n  border: 1px solid #bbbec1;\r\n  width: 100%;\r\n  height: 720px;\r\n  \r\n}\r\n.field2\r\n{\r\nmargin: 20.5% 0% 0% 0%;\r\n  border: 1px solid #bbbec1;\r\n  width: 100%;\r\n  height: 450px;\r\n  \r\n}\r\n.rounded-img-profile  {\r\n  border-radius: 50% !important;\r\n  width: 180px;\r\n  height: 230px;\r\n}\r\n.rounded-circle{\r\n  \r\n  width:130px !important;\r\n  height: 160px !important; \r\n}\r\n.capital-name{\r\ntext-transform: capitalize;\r\n}\r\n/* \r\n|----------------------------------Responder Profile------------------------------| */\r\n.pr-3-list, .pl-3-list {\r\n  padding-right: 4rem !important;\r\n}\r\n@media only screen and (max-width: 767px)\r\n{\r\n\r\n  .pr-3-list, .pl-3-list {\r\n    padding-right: 1rem !important;\r\n  }\r\n\r\n}\r\n.pl{\r\n  padding-left: 1rem !important;\r\n\r\n}\r\n/* Let's get this party started */\r\n::-webkit-scrollbar {\r\n  width: 0px !important;\r\n  height: 0px !important;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  /* -webkit-box-shadow: inset 0 0 6px #dee2e6;   */\r\n  border-radius: 5px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n  /* background: #dee2e6;\r\n  -webkit-box-shadow: inset 0 0 6px #dee2e6; */\r\n}\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n  background: #dee2e6;\r\n}\r\n.btn-color:hover {\r\n  background-color: #4DC4F7\r\n}\r\n.btn-color1 {\r\n  background-color: #16baff;\r\n  color: white;\r\n\r\n  border-radius: 1;\r\n}\r\n.btn-color1:hover {\r\n  background-color: #4DC4F7\r\n}\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #4DC4F7;\r\n  border-color: #4DC4F7;\r\n}\r\n.btn-primary:disabled,\r\n.btn-primary[disabled] {\r\n  border-color: 2px #c9cdd1;\r\n  background-color: #fff;\r\n  color: #4DC4F7;\r\n}\r\n.responder1\r\n{\r\n  border: 1px solid #bbbec1;\r\n  margin-left: -25px;\r\n  padding: 2% 2%;\r\n  width: 100%;\r\n  height: 720px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n }\r\n/* ////////////////////////////Images on discover Screen/////////////////////// */\r\n.circle{\r\n   border-radius: 50%;\r\n   width:130px;\r\n   height: 160px;\r\n   background:black;\r\n   margin: auto;\r\n   position: relative;\r\n }\r\n.text1{\r\n   position: absolute;\r\n   width: inherit;\r\n   height: auto;\r\n   top: 50%;\r\n   -webkit-transform: translateY(-50%);\r\n           transform: translateY(-50%);\r\n   text-align: center;\r\n   font-family: Raleway !important;\r\n   color: white;\r\n }\r\n.popup-btn{\r\n  width: 70%;\r\n  margin-bottom: 5px;\r\n  margin-left: -8%;\r\n}\r\n/* ////////////////////////////POPUP SCHEDULE A SESSION/////////////////////// */\r\n.circle-popup{\r\n  border-radius: 50%;\r\n  width: 100px;\r\n  height: 130px;\r\n  background:black;\r\n  margin: auto;\r\n  position: relative;\r\n}\r\n.text-popup{\r\n  position: absolute;\r\n  width: inherit;\r\n  height: auto;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  text-align: center;\r\n  font-family: Raleway !important;\r\n  color: white;\r\n}\r\n.rounded-cl-popup{\r\n  width: 100px !important;\r\n  height: 130px !important; \r\n  border-radius: 50%;\r\n}\r\n/* ////////////////////////////POPUP SCHEDULE A SESSION/////////////////////// */\r\n/* //////////////////////////////DATE  IN POPUP//////////////////// */\r\n.setDate{\r\n   position: relative;\r\n\r\n }\r\n.fa-set{\r\n   position: absolute;\r\n   right: 0;\r\n   bottom: -29px;\r\n }\r\n.bs-datepicker-container {\r\n  padding: 0px;\r\n}\r\n.popup-text{\r\n  font-family: Raleway !important;\r\n  text-align: right;\r\n  clear: both;\r\n  float:left;\r\n  padding-top: 4%;\r\n}\r\n.w3-input-date {\r\npadding: 8px;\r\ndisplay: block;\r\nborder: none;\r\nborder-bottom: 1px solid #ccc;\r\nwidth: 73%;\r\n}\r\n.popup-input{\r\n  float: right;\r\n}\r\n/* //////////////////////////////TIME IN POPUP//////////////////// */\r\n.time{\r\n   \r\n   display: block;\r\n }\r\n.popup-time{\r\n  font-family: Raleway !important;\r\n  text-align: right;\r\n  clear: both;\r\n  float:left;\r\n  padding-top: 18%;\r\n\r\n}\r\n.popup-inpuT{\r\n  float: Right;\r\n}\r\n/* //////////////////////////////End TIME IN POPUP//////////////////// */\r\n/* //////////////////////////////REPEAT IN POPUP//////////////////// */\r\n.popup-text-rpt{\r\n  font-family: Raleway !important;\r\n  text-align: right;\r\n  clear: both;\r\n  float:left;\r\n  padding-top: 4%;\r\n  margin-top: 5px;\r\n}\r\n.w3-input-rpt {\r\n  padding: 8px;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #ccc;\r\n  width: 50%;\r\n  margin-top: 5px;\r\n  }\r\n/* //////////////////////////////End REPEAT IN POPUP//////////////////// */\r\n.mainpop{\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.alert {\r\n  margin-left: auto !important;\r\n  margin-right: auto !important;\r\n}"

/***/ }),

/***/ "./src/app/responder-profile/responder-profile.component.html":
/*!********************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  responder-profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/responder-profile/responder-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: ResponderProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderProfileComponent", function() { return ResponderProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponderProfileComponent = /** @class */ (function () {
    function ResponderProfileComponent() {
    }
    ResponderProfileComponent.prototype.ngOnInit = function () {
    };
    ResponderProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-profile',
            template: __webpack_require__(/*! ./responder-profile.component.html */ "./src/app/responder-profile/responder-profile.component.html"),
            styles: [__webpack_require__(/*! ./responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResponderProfileComponent);
    return ResponderProfileComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-profile.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: ResponderProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderProfileModule", function() { return ResponderProfileModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/ui-switch.es5.js");
/* harmony import */ var kng24_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kng24-select */ "./node_modules/kng24-select/bundles/ng-select.umd.js");
/* harmony import */ var kng24_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kng24_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _responder_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./responder-profile.component */ "./src/app/responder-profile/responder-profile.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _responder_side_bar_responder_side_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./responder-side-bar/responder-side-bar.component */ "./src/app/responder-profile/responder-side-bar/responder-side-bar.component.ts");
/* harmony import */ var _responder_profile_list_responder_profile_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./responder-profile-list/responder-profile-list.component */ "./src/app/responder-profile/responder-profile-list/responder-profile-list.component.ts");
/* harmony import */ var _responder_profile_detail_responder_profile_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./responder-profile-detail/responder-profile-detail.component */ "./src/app/responder-profile/responder-profile-detail/responder-profile-detail.component.ts");
/* harmony import */ var _responder_feedback_responder_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./responder-feedback/responder-feedback.component */ "./src/app/responder-profile/responder-feedback/responder-feedback.component.ts");
/* harmony import */ var _responder_messenger_responder_messenger_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./responder-messenger/responder-messenger.component */ "./src/app/responder-profile/responder-messenger/responder-messenger.component.ts");
/* harmony import */ var _responder_sessions_responder_sessions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./responder-sessions/responder-sessions.component */ "./src/app/responder-profile/responder-sessions/responder-sessions.component.ts");
/* harmony import */ var _responder_local_resources_responder_local_resources_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./responder-local-resources/responder-local-resources.component */ "./src/app/responder-profile/responder-local-resources/responder-local-resources.component.ts");
/* harmony import */ var _responder_crisis_support_responder_crisis_support_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./responder-crisis-support/responder-crisis-support.component */ "./src/app/responder-profile/responder-crisis-support/responder-crisis-support.component.ts");
/* harmony import */ var _mass_messenger_mass_messenger_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mass-messenger/mass-messenger.component */ "./src/app/responder-profile/mass-messenger/mass-messenger.component.ts");
/* harmony import */ var _responder_privacy_responder_privacy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./responder-privacy/responder-privacy.component */ "./src/app/responder-profile/responder-privacy/responder-privacy.component.ts");
/* harmony import */ var _responder_terms_responder_terms_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./responder-terms/responder-terms.component */ "./src/app/responder-profile/responder-terms/responder-terms.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./email/email.component */ "./src/app/responder-profile/email/email.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ResponderProfileModule = /** @class */ (function () {
    function ResponderProfileModule() {
    }
    ResponderProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _responder_profile_component__WEBPACK_IMPORTED_MODULE_7__["ResponderProfileComponent"],
                _responder_side_bar_responder_side_bar_component__WEBPACK_IMPORTED_MODULE_11__["ResponderSideBarComponent"],
                _responder_profile_list_responder_profile_list_component__WEBPACK_IMPORTED_MODULE_12__["ResponderProfileListComponent"],
                _responder_profile_detail_responder_profile_detail_component__WEBPACK_IMPORTED_MODULE_13__["ResponderProfileDetailComponent"],
                _responder_feedback_responder_feedback_component__WEBPACK_IMPORTED_MODULE_14__["ResponderFeedbackComponent"],
                _responder_messenger_responder_messenger_component__WEBPACK_IMPORTED_MODULE_15__["ResponderMessengerComponent"],
                _responder_sessions_responder_sessions_component__WEBPACK_IMPORTED_MODULE_16__["ResponderSessionsComponent"],
                _responder_local_resources_responder_local_resources_component__WEBPACK_IMPORTED_MODULE_17__["ResponderLocalResourcesComponent"],
                _responder_crisis_support_responder_crisis_support_component__WEBPACK_IMPORTED_MODULE_18__["ResponderCrisisSupportComponent"],
                _mass_messenger_mass_messenger_component__WEBPACK_IMPORTED_MODULE_19__["MassMessengerComponent"],
                _responder_privacy_responder_privacy_component__WEBPACK_IMPORTED_MODULE_20__["ResponderPrivacyComponent"],
                _responder_terms_responder_terms_component__WEBPACK_IMPORTED_MODULE_21__["ResponderTermsComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_22__["EmailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routes"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_2__["UiSwitchModule"],
                kng24_select__WEBPACK_IMPORTED_MODULE_3__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TimepickerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            bootstrap: [_responder_profile_component__WEBPACK_IMPORTED_MODULE_7__["ResponderProfileComponent"]]
        })
    ], ResponderProfileModule);
    return ResponderProfileModule;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-profile.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/responder-profile/responder-profile.service.ts ***!
  \****************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileService = /** @class */ (function () {
    function ProfileService(_http, _nav) {
        this._http = _http;
        this._nav = _nav;
    }
    ProfileService.prototype.getHeaders = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var token = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        headers.append('Content-Type', 'application/json');
        headers.append('x-access-token', token);
        return headers;
    };
    ProfileService.prototype.getAssignedstudent = function (userid) {
        var url = "/wavesbackend/api/get-students-of-responder?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid });
    };
    ProfileService.prototype.resResAll = function (schoolid) {
        var url = "/wavesbackend/api/getResponder?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfilesId: schoolid });
    };
    ProfileService.prototype.getAllRes = function (schoolid, userid) {
        var url = "/wavesbackend/api/get-responder-except?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfilesId: schoolid, userId: userid });
    };
    ProfileService.prototype.getResponder = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/student/studentSchoolResponders";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getWaves = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "api/common/waves";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.updatePassword = function (userid, oldpass, newpass) {
        var url = "/wavesbackend/api/change-password?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid, oldPassword: oldpass, newPassword: newpass });
    };
    ProfileService.prototype.postFeedback = function (comment, userid) {
        var url = "/wavesbackend/api/send-feedback?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { text: comment, userId: userid });
    };
    ProfileService.prototype.setimage = function (userid, image) {
        var url = "/wavesbackend/api/change-DP?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid, image: image });
    };
    ProfileService.prototype.getimage = function (userid) {
        var url = "/wavesbackend/api/show-DP?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { userId: userid });
    };
    ProfileService.prototype.uploadImage = function (image) {
        console.log(image);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/student/uploadImage";
        return this._http.post(url, { file: image }, httpOptions);
    };
    ProfileService.prototype.downloadImage = function (userId) {
        var url = "/wavesbackend/api/common/authenticate/imagePrview/" + userId;
        return this._http.get(url, { responseType: "blob" });
    };
    ProfileService.prototype.getUpcommingSession = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/responder/upComingSessions";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getPreviousSession = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-access-token': ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token'),
            })
        };
        var url = "/wavesbackend/api/responder/previousSessions";
        return this._http.get(url, httpOptions);
    };
    ProfileService.prototype.getlocalResources = function (schoolid) {
        var url = "/wavesbackend/api/getLocalResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfileId: schoolid });
    };
    ProfileService.prototype.getcrisisResources = function (schoolid) {
        var url = "/wavesbackend/api/getCrisisResource?token=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('token');
        return this._http.post(url, { schoolAdminProfileId: schoolid });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-sessions/responder-sessions.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-sessions/responder-sessions.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-responder-side-bar></app-responder-side-bar> \r\n\r\n    <div class=\"col-lg-12 ml-5 pr-5\">\r\n        <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n          <h2 class=\"pf-li-h1-title \"><b>Sessions\r\n            </b></h2>\r\n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n                  aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n          </button>\r\n      \r\n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n            </ul>\r\n            \r\n            <h6 id=\"header\">{{responderName}}  <br>\r\n              {{responderId}}</h6>&nbsp;   \r\n            <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n            <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n      \r\n          </div>\r\n        </nav>\r\n      </div>\r\n      <hr><br>\r\n\r\n<main class=\"col-lg-12\">\r\n\r\n  <h3 class=\"pf-li-h1-title\">\r\n    <b>Upcoming Sessions(+)</b>\r\n  </h3>\r\n  <hr>\r\n  <div class=\"container pull-left\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-4 col-md-6 \">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <div class=\"detail\">\r\n              <h4 id=\"Margin\">James Jackson</h4>\r\n              <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n                <div class=\"pull-right\">\r\n                 \r\n                  \r\n                    <i class=\"fas fa-ellipsis-v font-awesome-session\">\r\n\r\n                    </i>\r\n                    <!-- <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                      <div class=\"user-panel\">\r\n                        <div class=\"row\">\r\n                          <div class=\"sidebar-userpic\">\r\n                            <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                     \r\n\r\n                      <div class=\"user-panel\">\r\n                        <div class=\"row\">\r\n                          <div class=\"sidebar-userpic\">\r\n                            <input type=\"text\" class=\"text\" placeholder=\"Type Student Name\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"user-panel line-session\">\r\n                        <div class=\"row\">\r\n                          <div class=\"sidebar-userpic\">\r\n                            <input type=\"date\" class=\"date\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"line-session\">\r\n                        <h6 class=\"space\">Ends 1:00AM</h6>\r\n                      </div>\r\n                      <div class=\"line-session\">\r\n                        <h6 class=\"space\">Repeat <span class=\"text-muted\">Never<i\r\n                          class=\"fas fa-chevron-right\"></i></span></h6>\r\n                      </div>\r\n                      <br>\r\n                      <p style=\"text-align: center\">Please Select Their Waves\r\n                        <a>\r\n                          <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n                        </a>\r\n                      </p>\r\n                      <br>\r\n                      <div class=\"line-session2\">\r\n                        <h4>\r\n                          <a>\r\n                            <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n                          </a>\r\n                        </h4>\r\n\r\n                      </div>\r\n                      <br>\r\n                      <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                              class=\"btn btn-primary btn-block btn-block-padiing\">Schedule Session\r\n                      </button>\r\n\r\n                    </div> -->\r\n                 \r\n                </div>\r\n              </h6>\r\n\r\n              <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n               \r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session\">\r\n\r\n                    </i>\r\n                  <!-- <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <div class=\"user-panel\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"user-panel\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"text\" class=\"text\" placeholder=\"Type Student Name\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"user-panel line-session\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"date\" class=\"date\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Ends 1:00AM</h6>\r\n                    </div>\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Repeat <span class=\"text-muted\">Never<i class=\"fas fa-chevron-right\"></i></span>\r\n                      </h6>\r\n                    </div>\r\n                    <br>\r\n                    <p style=\"text-align: center\">Please Select Their Waves\r\n                      <a>\r\n                        <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n                      </a>\r\n                    </p>\r\n                    <br>\r\n                    <div class=\"line-session2\">\r\n                      <h4>\r\n                        <a>\r\n                          <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n                        </a>\r\n                      </h4>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                            class=\"btn btn-primary btn-block btn-block-padiing\">Schedule Session\r\n                    </button>\r\n\r\n                  </div> -->\r\n               \r\n              </div>\r\n            </h6>\r\n\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n                \r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session\">\r\n\r\n                    </i>\r\n                  <!-- <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <div class=\"user-panel \">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                 \r\n\r\n                    <div class=\"user-panel\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"text\" class=\"text\" placeholder=\"Type Student Name\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"user-panel line-session\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"date\" class=\"date\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Ends 1:00AM</h6>\r\n                    </div>\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Repeat <span class=\"text-muted\">Never<i class=\"fas fa-chevron-right\"></i></span>\r\n                      </h6>\r\n                    </div>\r\n                    <br>\r\n                    <p style=\"text-align: center\">Please Select Their Waves\r\n                      <a>\r\n                        <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n                      </a>\r\n                    </p>\r\n                    <br>\r\n                    <div class=\"line-session2\">\r\n                      <h4>\r\n                        <a>\r\n                          <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n                        </a>\r\n                      </h4>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                            class=\"btn btn-primary btn-block btn-block-padiing\">Schedule Session\r\n                    </button>\r\n\r\n                  </div> -->\r\n              \r\n              </div>\r\n            </h6>\r\n\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <br>\r\n</main>\r\n\r\n<main class=\"col-lg-12 pt-3\">\r\n\r\n  <h3 class=\"pf-li-h1-title\">\r\n    <b>Previous Sessions</b>\r\n  </h3>\r\n  <hr>\r\n  <div class=\"container pull-left\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n               \r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session\">\r\n\r\n                    </i>\r\n                  <!-- <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <div class=\"user-panel \">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  \r\n\r\n                    <div class=\"user-panel\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"text\" class=\"text\" placeholder=\"Type Student Name\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"user-panel line-session\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"date\" class=\"date\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Ends 1:00AM</h6>\r\n                    </div>\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Repeat <span class=\"text-muted\">Never<i class=\"fas fa-chevron-right\"></i></span>\r\n                      </h6>\r\n                    </div>\r\n                    <br>\r\n                    <p style=\"text-align: center\">Please Select Their Waves\r\n                      <a>\r\n                        <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n                      </a>\r\n                    </p>\r\n                    <br>\r\n                    <div class=\"line-session2\">\r\n                      <h4>\r\n                        <a>\r\n                          <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n                        </a>\r\n                      </h4>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                            class=\"btn btn-primary btn-block btn-block-padiing\">Schedule Session\r\n                    </button>\r\n\r\n                  </div> -->\r\n               \r\n              </div>\r\n            </h6>\r\n\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n               \r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session\">\r\n\r\n                    </i>\r\n                  <!-- <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <div class=\"user-panel \">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  \r\n\r\n                    <div class=\"user-panel\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"text\" class=\"text\" placeholder=\"Type Student Name\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"user-panel line-session\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"date\" class=\"date\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Ends 1:00AM</h6>\r\n                    </div>\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Repeat <span class=\"text-muted\">Never<i class=\"fas fa-chevron-right\"></i></span>\r\n                      </h6>\r\n                    </div>\r\n                    <br>\r\n                    <p style=\"text-align: center\">Please Select Their Waves\r\n                      <a>\r\n                        <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n                      </a>\r\n                    </p>\r\n                    <br>\r\n                    <div class=\"line-session2\">\r\n                      <h4>\r\n                        <a>\r\n                          <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n                        </a>\r\n                      </h4>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                            class=\"btn btn-primary btn-block btn-block-padiing\">Schedule Session\r\n                    </button>\r\n\r\n                  </div> -->\r\n               \r\n              </div>\r\n            </h6>\r\n\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-6\">\r\n        <div class=\"session-block\">\r\n          <div class=\"pull-left\">\r\n            <img class=\"session-img\" src=\"/waves/assets/images/dumy.png\" alt=\"\"/>\r\n          </div>\r\n          <div class=\"detail\">\r\n            <h4 id=\"Margin\">James Jackson</h4>\r\n            <h6 id=\"Margin\">8.00 AM Feb 27,2018\r\n              <div class=\"pull-right\">\r\n              \r\n                  <i class=\"fas fa-ellipsis-v font-awesome-session\">\r\n\r\n                    </i>\r\n\r\n                  <!-- <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n                    <div class=\"user-panel\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <img src=\"/waves/assets/images/dumy.png\" class=\"img-responsive\" alt=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                   \r\n\r\n                    <div class=\"user-panel\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"text\" class=\"text\" placeholder=\"Type Student Name\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"user-panel line-session\">\r\n                      <div class=\"row\">\r\n                        <div class=\"sidebar-userpic\">\r\n                          <input type=\"date\" class=\"date\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Ends 1:00AM</h6>\r\n                    </div>\r\n                    <div class=\"line-session\">\r\n                      <h6 class=\"space\">Repeat <span class=\"text-muted\">Never<i class=\"fas fa-chevron-right\"></i></span>\r\n                      </h6>\r\n                    </div>\r\n                    <br>\r\n                    <p style=\"text-align: center\">Please Select Their Waves\r\n                      <a>\r\n                        <i id=\"right\" class=\"fa fa-plus-circle font-awesome-size\"></i>\r\n                      </a>\r\n                    </p>\r\n                    <br>\r\n                    <div class=\"line-session2\">\r\n                      <h4>\r\n                        <a>\r\n                          <i id=\"right\" class=\"fa fa-exclamation-circle font-awesome-size\"></i>\r\n                        </a>\r\n                      </h4>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <button type=\"submit\" [class.disabled]=\"!f.valid\" [disabled]=\"!f.valid\"\r\n                            class=\"btn btn-primary btn-block btn-block-padiing\">Schedule Session\r\n                    </button>\r\n\r\n                  </div> -->\r\n               \r\n              </div>\r\n            </h6>\r\n\r\n            <h6 class=\"text-muted\">Cyber-Bullying</h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/responder-profile/responder-sessions/responder-sessions.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-sessions/responder-sessions.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResponderSessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderSessionsComponent", function() { return ResponderSessionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponderSessionsComponent = /** @class */ (function () {
    function ResponderSessionsComponent(profileServiceObj) {
        this.profileServiceObj = profileServiceObj;
    }
    ResponderSessionsComponent.prototype.ngOnInit = function () {
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('resId');
        // this.profileServiceObj.getUpcommingSession().subscribe(
        //   res => {
        //     this.upcomingSessionObj = res
        //   },
        //   err => {
        //   }
        // );
        // this.profileServiceObj.getPreviousSession().subscribe(
        //   res => {
        //     this.previousSesssionObj = res
        //   },
        //   err => {
        //   }
        // );
    };
    ResponderSessionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-sessions',
            template: __webpack_require__(/*! ./responder-sessions.component.html */ "./src/app/responder-profile/responder-sessions/responder-sessions.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderSessionsComponent);
    return ResponderSessionsComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-side-bar/responder-side-bar.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-side-bar/responder-side-bar.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"toggle()\" class=\"hamburger\">\r\n  <span>\r\n    <i class=\"fas fa-bars\"></i>\r\n  </span>\r\n</button>\r\n<div class=\"sidenav\" [@slideInOut]=\"menuState\">\r\n  <a class=\"closebtn\" (click)=\"toggle()\">&times;</a>\r\n\r\n  <div class=\"sidebar-user-panel\">\r\n    <div class=\"user-panel\">\r\n      <div class=\"row\">\r\n        <div class=\"sidebar-userpic\">\r\n\r\n\r\n          <a class=\"nav-link\" routerLink=\"/responder-profile-detail\">\r\n            <img [src]=\"imageToShow\" *ngIf=\"imageToShow;else other_image\" class=\"img-responsive \" alt=\"\">\r\n            <ng-template #other_image>\r\n              <div class=\"sidebar-user-panel\">\r\n                <div class=\"user-panel\">\r\n                  <div class=\"row\">\r\n                    <div class=\"sidebar-userpic\">\r\n                      <span class=\"avatar_name\">\r\n                        <i class=\"fas fa-camera font-awesome-clr\"></i>\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </ng-template>\r\n\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <a routerLink=\"/responder-profile\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/Discover_white.png\">Discover</a>\r\n  <a class=\"link\" routerLink=\"/responder-messenger\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/Messages_white.png\">Messages</a>\r\n  <a class=\"link\" routerLink=\"/responder-session\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/Sessions_white.png\">Sessions</a>\r\n  <a class=\"link\" routerLink=\"/responder-local-resource\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/LocalResources_white.png\">Local Resources</a>\r\n  <a class=\"link\" routerLink=\"/responder-crisis-support\" [routerLinkActive]=\"['active']\">\r\n    <img id=\"prf-list-size\" src=\"/waves/assets/images/CrisisSupport_white.png\">Crisis Support </a>\r\n  <br>\r\n  <a>\r\n    <hr class=\"style14\"> </a>\r\n  <br>\r\n  <a class=\"link nav-list\" routerLink=\"/mass-messenger\" [routerLinkActive]=\"['active']\">Mass Messenger\r\n  </a>\r\n  <a class=\"link nav-list\" routerLink=\"/responder-profile-detail\" [routerLinkActive]=\"['active']\">Update Profile\r\n  </a>\r\n  <a class=\"link nav-list\" routerLink=\"/responder-feedback\" [routerLinkActive]=\"['active']\">Feedback\r\n  </a>\r\n\r\n  <a class=\"link nav-list\" routerLink=\"/responder-privacy\" [routerLinkActive]=\"['active']\">Privacy\r\n  </a>\r\n  <a class=\"link nav-list\" routerLink=\"/responder-terms\" [routerLinkActive]=\"['active']\">Terms\r\n  </a>\r\n  <a>\r\n\r\n    <h5 id=\"switch\">I am Available\r\n      <label class=\"switch \">\r\n\r\n        <input type=\"checkbox\">\r\n        <span class=\"slider\"></span>\r\n      </label>\r\n    </h5>\r\n\r\n  </a>\r\n\r\n  <div class=\"bottom-button\">\r\n\r\n    <a>\r\n      <h6 id=\"li_clr\">{{schoolName}}</h6>\r\n\r\n      <hr class=\"beautiful-line\">\r\n      <button type=\"button\" class=\"btn btn-primary side-btn\" (click)=\"logOut()\">Sign Out</button>\r\n    </a>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!-- <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\r\n\r\n  <ul class=\"nav nav-pills flex-column\">\r\n    <li class=\"sidebar-user-panel\">\r\n      <div class=\"user-panel\">\r\n        <div class=\"row\">\r\n          <div class=\"sidebar-userpic\">\r\n\r\n            <a class=\"nav-link\" routerLink=\"/profile-detail\">\r\n              <img [src]=\"imageToShow\" *ngIf=\"imageToShow;else other_image\" class=\"img-responsive\" alt=\"\">\r\n              <ng-template #other_image>\r\n                <span class=\"avatar_name\">{{ProfileObj['data'].nicName | uppercase }}</span>\r\n\r\n              </ng-template>\r\n\r\n            </a>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"profile-usertitle\">\r\n\r\n          <div class=\"sidebar-userpic-name\">{{ProfileObj['data'].fullName}}</div>\r\n          \r\n          <hr>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link nav_bar_font\" routerLink=\"/responder-profile\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/Discover_Web.png\"> Discover\r\n        <span class=\"sr-only\">(current)</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/responder-messenger\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/Messages_Web.png\"> Messages</a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/responder-session\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/Sessions_Web.png\"> Sessions</a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/responder-local-resource\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/LocalResources_Web.png\"> Local Resources</a>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\">\r\n      <a class=\"nav-link\" routerLink=\"/responder-crisis-support\" [routerLinkActive]=\"['active']\">\r\n        <img id=\"prf-list-size\" src=\"/waves/assets/images/CrisisSupport_Web.png\"> Crisis Support</a>\r\n    </li>\r\n    <br><br>\r\n    <li class=\"nav-item nav_bar_font\" style=\"background-color: steelblue\">\r\n\r\n      <h5 id=\"switch\">I am Available\r\n        <label class=\"switch \">\r\n\r\n          <input type=\"checkbox\">\r\n          <span class=\"slider\"></span>\r\n        </label>\r\n      </h5>\r\n\r\n    </li>\r\n    \r\n    <li class=\"nav-item nav_bar_font\" id=\"logout_sidebar_button\">\r\n\r\n      <h6 id=\"li_clr\">{{ProfileObj['data'].schoolName | uppercase}}} </h6>\r\n    </li>\r\n    <li class=\"nav-item nav_bar_font\" id=\"logout_sidebar_button\">\r\n\r\n      <hr class=\"beautiful-line\">\r\n      <a href=\"#\" class=\"transparent_btn\" (click)=\"logOut()\">Sign Out</a>\r\n\r\n    </li>\r\n    \r\n\r\n  </ul>\r\n  \r\n</nav> -->"

/***/ }),

/***/ "./src/app/responder-profile/responder-side-bar/responder-side-bar.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/responder-profile/responder-side-bar/responder-side-bar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ResponderSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderSideBarComponent", function() { return ResponderSideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResponderSideBarComponent = /** @class */ (function () {
    function ResponderSideBarComponent(router, profileServiceObj) {
        this.router = router;
        this.profileServiceObj = profileServiceObj;
        this.menuState = 'out';
    }
    ResponderSideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.schoolName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('schoolName');
        this.userid = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('adminId');
        this.profileServiceObj.getimage(this.userid).subscribe(function (res) {
            // this.createImageFromBlob(res);
            _this.imageToShow = res['data']['result'];
        }, function (err) {
        });
    };
    ResponderSideBarComponent.prototype.toggle = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    ResponderSideBarComponent.prototype.logOut = function () {
        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('token');
        this.router.navigate(['/login']);
    };
    ResponderSideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-side-bar',
            template: __webpack_require__(/*! ./responder-side-bar.component.html */ "./src/app/responder-profile/responder-side-bar/responder-side-bar.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translate3d(-100%, 0, 0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out'))
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderSideBarComponent);
    return ResponderSideBarComponent;
}());



/***/ }),

/***/ "./src/app/responder-profile/responder-terms/responder-terms.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/responder-profile/responder-terms/responder-terms.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-responder-side-bar></app-responder-side-bar> \r\n\r\n<div class=\"col-lg-12  ml-5 pr-5\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light \">\r\n      <h2 class=\"pf-li-h1-title \"><b>Terms & Conditions\r\n        </b></h2>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent1\"\r\n              aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n  \r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n        \r\n        <h6 id=\"header\">{{responderName}}  <br>\r\n          {{responderId}}</h6>&nbsp;  \r\n        <img src=\"\\waves\\assets\\images\\logo4.png\" height=\"40px\">\r\n        <!-- <button type=\"button\" (click)=\"openModal(template)\" class=\"btn btn-primary btn-sm\">ADD SCHOOL</button><p>&nbsp;</p> -->\r\n  \r\n      </div>\r\n    </nav>\r\n  </div>\r\n   <hr>\r\n   <br>\r\n   <main class=\"col-sm-9 col-md-12 pl\">\r\n      <section class=\"row text-center placeholders\">\r\n        <div class=\"col-lg-12 col-md-12 placeholder\">\r\n          <div class=\"text\">\r\n            <h5>By downloading or using the app, these terms will automatically apply to you – you should make sure therefore\r\n              that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of\r\n              the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app,\r\n              and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app\r\n              itself, and all the trade marks, copyright, database rights and other intellectual property rights related to\r\n              it, still belong to Above the Waves.\r\n              <br>\r\n              <br> Above the Waves is committed to ensuring that the app is as useful and efficient as possible. For that\r\n              reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any\r\n              reason. We will never charge you for the app or its services without making it very clear to you exactly what\r\n              you’re paying for.\r\n              <br>\r\n              <br> The Waves app stores and processes personal data that you have provided to us, in order to provide our\r\n              Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that\r\n              you do not jailbreak or root your phone, which is the process of removing software restrictions and\r\n              limitations imposed by the official operating system of your device. It could make your phone vulnerable to\r\n              malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Waves\r\n              app won’t work properly or at all.<br>\r\n              <br> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is\r\n              accessible\r\n              at Waves unless otherwise defined in this Privacy Policy.\r\n              <br>\r\n              <br>\r\n              You should be aware that there are certain things that Above the Waves will not take responsibility for.\r\n              Certain functions of the app will require the app to have an active internet connection. The connection can be\r\n              Wi-Fi, or provided by your mobile network provider, but Above the Waves cannot take responsibility for the app\r\n              not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data\r\n              allowance left.\r\n              <br>\r\n              <br>\r\n              If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement\r\n              with your mobile network provider will still apply. As a result, you may be charged by your mobile provider\r\n              for the cost of data for the duration of the connection while accessing the app, or other third party charges.\r\n              In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you\r\n              use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you\r\n              are not the bill payer for the device on which you’re using the app, please be aware that we assume that you\r\n              have received permission from the bill payer for using the app.\r\n              <br>\r\n              <br>\r\n              Along the same lines, Above the Waves cannot always take responsibility for the way you use the app i.e. You\r\n              need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail\r\n              the Service, Above the Waves cannot accept responsibility\r\n              With respect to Above the Waves’ responsibility for your use of the app, when you’re using the app, it’s\r\n              important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we\r\n              do rely on third parties to provide information to us so that we can make it available to you. Above the Waves\r\n              accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this\r\n              functionality of the app.\r\n              <br>\r\n              <br>\r\n              At some point, we may wish to update the app. The app is currently available on Android and iOS – the\r\n              requirements for both systems (and for any additional systems we decide to extend the availability of the app\r\n              to) may change, and you’ll need to download the updates if you want to keep using the app. Above the Waves\r\n              does not promise that it will always update the app so that it is relevant to you and/or works with the\r\n              iOS/Android version that you have installed on your device. However, you promise to always accept updates to\r\n              the application when offered to you, We may also wish to stop providing the app, and may terminate use of it\r\n              at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination,\r\n              (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if\r\n              needed) delete it from your device. <br>\r\n              <br>\r\n              <b>Changes to This Terms and Conditions</b>\r\n              <br>\r\n              <br> We may update our Terms and Conditions from time to time. Thus, you are advised to review this page\r\n              periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on\r\n              this page. These changes are effective immediately after they are posted on this page.\r\n              <br>\r\n              <br>\r\n              <b>Contact Us</b>\r\n              <br>\r\n              <br> If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us.\r\n              <br>\r\n              <br>\r\n    \r\n    \r\n            </h5>\r\n          </div>\r\n        </div>\r\n      </section>"

/***/ }),

/***/ "./src/app/responder-profile/responder-terms/responder-terms.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/responder-profile/responder-terms/responder-terms.component.ts ***!
  \********************************************************************************/
/*! exports provided: ResponderTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponderTermsComponent", function() { return ResponderTermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _responder_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../responder-profile.service */ "./src/app/responder-profile/responder-profile.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponderTermsComponent = /** @class */ (function () {
    function ResponderTermsComponent(ProfileServiceObj) {
        this.ProfileServiceObj = ProfileServiceObj;
    }
    ResponderTermsComponent.prototype.ngOnInit = function () {
        this.responderName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('adminName');
        this.responderId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('resId');
    };
    ResponderTermsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-responder-terms',
            template: __webpack_require__(/*! ./responder-terms.component.html */ "./src/app/responder-profile/responder-terms/responder-terms.component.html"),
            styles: [__webpack_require__(/*! ./../responder-profile.component.css */ "./src/app/responder-profile/responder-profile.component.css")],
            providers: [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]]
        }),
        __metadata("design:paramtypes", [_responder_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]])
    ], ResponderTermsComponent);
    return ResponderTermsComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  welcome works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\GnG\Desktop\Stack Cru\Projects\WFE\waves\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map