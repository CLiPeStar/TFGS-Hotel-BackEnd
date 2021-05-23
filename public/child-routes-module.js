(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["child-routes-module"],{

/***/ "E5tf":
/*!**********************************************!*\
  !*** ./src/app/pages/child-routes.module.ts ***!
  \**********************************************/
/*! exports provided: ChildRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildRoutesModule", function() { return ChildRoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-settings/account-settings.component */ "SxNo");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _grafic1_grafica1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grafic1/grafica1.component */ "EIOi");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil/perfil.component */ "RG4u");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progress/progress.component */ "EsRH");
/* harmony import */ var _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promesas/promesas.component */ "nFeL");
/* harmony import */ var _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rxjs/rxjs.component */ "IHpz");
/* harmony import */ var _maintenances_users_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maintenances/users/users.component */ "Iy8y");
/* harmony import */ var _maintenances_receptionists_receptionists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenances/receptionists/receptionists.component */ "GOMx");
/* harmony import */ var _maintenances_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./maintenances/hotels/hotels.component */ "5IRK");
/* harmony import */ var _maintenances_receptionists_receptionist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maintenances/receptionists/receptionist.component */ "0vpu");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search/search.component */ "YQc0");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../guards/admin.guard */ "Tk1w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");








//Maintenance








const childRoute = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], data: { title: 'Dashboard' } },
    {
        path: 'grafica1',
        component: _grafic1_grafica1_component__WEBPACK_IMPORTED_MODULE_3__["Grafica1Component"],
        data: { title: 'Grafic #1' },
    },
    {
        path: 'progress',
        component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_5__["ProgressComponent"],
        data: { title: 'Progress' },
    },
    {
        path: 'account-settings',
        component: _account_settings_account_settings_component__WEBPACK_IMPORTED_MODULE_1__["AccountSettingsComponent"],
        data: { title: 'Settings Account' },
    },
    {
        path: 'promesas',
        component: _promesas_promesas_component__WEBPACK_IMPORTED_MODULE_6__["PromesasComponent"],
        data: { title: 'Promise' },
    },
    { path: 'rxjs', component: _rxjs_rxjs_component__WEBPACK_IMPORTED_MODULE_7__["RxjsComponent"], data: { title: 'Rxjs' } },
    {
        path: 'perfil',
        component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__["PerfilComponent"],
        data: { title: 'User profile' },
    },
    {
        path: 'search/:chain',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
        data: { title: 'Search' },
    },
    //Maintenance
    {
        path: 'hotel',
        component: _maintenances_hotels_hotels_component__WEBPACK_IMPORTED_MODULE_10__["HotelsComponent"],
        data: { title: 'Hotels' },
    },
    {
        path: 'receptionists',
        component: _maintenances_receptionists_receptionists_component__WEBPACK_IMPORTED_MODULE_9__["ReceptionistsComponent"],
        data: { title: 'Receptionists' },
    },
    //Guard
    {
        path: 'user',
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]],
        component: _maintenances_users_users_component__WEBPACK_IMPORTED_MODULE_8__["UsersComponent"],
        data: { title: 'Aplication user' },
    },
    {
        path: 'receptionist/:id',
        canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_13__["AdminGuard"]],
        component: _maintenances_receptionists_receptionist_component__WEBPACK_IMPORTED_MODULE_11__["ReceptionistComponent"],
        data: { title: 'Receptionist' },
    },
];
class ChildRoutesModule {
}
ChildRoutesModule.ɵfac = function ChildRoutesModule_Factory(t) { return new (t || ChildRoutesModule)(); };
ChildRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: ChildRoutesModule });
ChildRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoute)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](ChildRoutesModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Tk1w":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminGuard {
    constructor(userServices, router) {
        this.userServices = userServices;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.userServices.getRolUser != 'ADMIN_ROLE') {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
        return true;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=child-routes-module.js.map