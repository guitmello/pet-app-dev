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

/***/ "./src/app/add-pet/add-pet.component.css":
/***/ (function(module, exports) {

module.exports = ".checkbox-align {\r\n  padding: .1375em 0 !important;\r\n  border-top: .84375em solid transparent !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/add-pet/add-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Cadastrar Pet</h1>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card>\r\n\r\n    <form>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.nome\" name=\"nome\" matInput placeholder=\"Nome\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.sexo\" name=\"sexo\" placeholder=\"Sexo\" required>\r\n              <mat-option *ngFor=\"let sexos of sexo\" [value]=\"sexos.value\">\r\n                {{ sexos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.id_especie\" name=\"especie\" placeholder=\"Espécie\" required>\r\n              <mat-option *ngFor=\"let especies of especie\" [value]=\"especies.id\">\r\n                {{ especies.value }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.id_raca\" name=\"raca\" placeholder=\"Raça\" required>\r\n              <mat-option *ngFor=\"let racas of raca\" [value]=\"racas.id\">\r\n                {{ racas.value }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.idade\" name=\"idade\" matInput placeholder=\"Idade\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.tamanho\" name=\"tamanho\" matInput placeholder=\"Tamanho\" required>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.cor\" name=\"cor\" matInput placeholder=\"Cor\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"checkbox-align\">\r\n            <mat-checkbox [(ngModel)]=\"pet.deficiencia\" name=\"deficiencia\" color=\"primary\">Deficiência</mat-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\" *ngIf=\"!!pet.deficiencia\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.ds_deficiencia\" name=\"ds_deficiencia\" matInput placeholder=\"Qual?\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <div class=\"row justify-content-center\">\r\n          <h2 class=\"sub-title\">Foto do Pet</h2>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-6 button-row\" align=\"center\">\r\n          <button mat-raised-button class=\"content-center\" type=\"button\" color=\"primary\" class=\"w-75\" (click)=\"fileInput.click()\">Upload</button>\r\n          <input hidden type=\"file\" #fileInput />\r\n        </div>\r\n        <div class=\"col-6 button-row\" align=\"center\">\r\n            <button mat-raised-button class=\"content-center\" type=\"button\" color=\"primary\" class=\"w-75\" (click)=\"imgFileInput.click()\">Tirar uma Foto</button>\r\n            <input hidden type=\"file\" accept=\"image/*\" capture=\"camera\" #imgFileInput />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <div class=\"button-submit-row row justify-content-center\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" class=\"w-50\" (click)=\"registerPet()\">Confirmar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-pet/add-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pet__ = __webpack_require__("./src/app/add-pet/pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var api_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var AddPetComponent = /** @class */ (function () {
    function AddPetComponent(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = api_url;
        this.pet = new __WEBPACK_IMPORTED_MODULE_1__pet__["a" /* Pet */]();
    }
    AddPetComponent.prototype.ngOnInit = function () {
        this.pet.deficiencia = false;
        this.sexo = [
            { value: 'M', viewValue: 'Masculino' },
            { value: 'F', viewValue: 'Feminino' }
        ];
        this.especie = [
            { id: 1, value: 'Espécie 1' },
            { id: 2, value: 'Espécie 2' },
            { id: 3, value: 'Espécie 3' },
            { id: 4, value: 'Espécie 4' },
            { id: 5, value: 'Espécie 5' }
        ];
        this.raca = [
            { id: 1, value: 'Raça 1' },
            { id: 2, value: 'Raça 2' },
            { id: 3, value: 'Raça 3' },
            { id: 4, value: 'Raça 4' }
        ];
    };
    AddPetComponent.prototype.registerPet = function () {
        this.apiUrl += '/add-pet%3Ftype=sucess';
        return this.httpClient.post(this.apiUrl, this.pet)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
    };
    AddPetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-pet',
            template: __webpack_require__("./src/app/add-pet/add-pet.component.html"),
            styles: [__webpack_require__("./src/app/add-pet/add-pet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AddPetComponent);
    return AddPetComponent;
}());



/***/ }),

/***/ "./src/app/add-pet/pet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
var Pet = /** @class */ (function () {
    function Pet() {
    }
    return Pet;
}());



/***/ }),

/***/ "./src/app/add-pfisica/add-pfisica.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-pfisica/add-pfisica.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n      <h1 class=\"title\">Cadastrar Usuário Pessoa Física</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card>\r\n    <form>\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.nome\" name=\"nome\" type=\"text\" matInput placeholder=\"Nome\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.email\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.cpf\" [textMask]=\"{mask: cpfMask}\" name=\"cpf\" type=\"text\" matInput placeholder=\"CPF\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pfisica.sexo\" name=\"sexo\" placeholder=\"Sexo\" required>\r\n              <mat-option *ngFor=\"let sexos of sexo\" [value]=\"sexos.value\">\r\n                {{ sexos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.celular\" [textMask]=\"{mask: celMask}\" name=\"celular\" type=\"text\" matInput placeholder=\"Celular\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.cep\" [textMask]=\"{mask: cepMask}\" name=\"cep\" type=\"text\" matInput placeholder=\"CEP\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.estado\" name=\"estado\" type=\"text\" matInput placeholder=\"Estado\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.cidade\" name=\"cidade\" type=\"text\" matInput placeholder=\"Cidade\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.endereco\" name=\"endereco\" type=\"text\" matInput placeholder=\"Endereço\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.numero\" [textMask]=\"{mask: numMask}\" name=\"numero\" type=\"text\" matInput placeholder=\"Número\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.complemento\" name=\"complemento\" type=\"text\" matInput placeholder=\"Complemento\" required>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"senha\" name=\"senha\" type=\"password\" matInput placeholder=\"Senha\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"button-row row justify-content-center\">\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" class=\"w-100\" (click)=\"registerPf()\">Confirmar</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button color=\"primary\" class=\"w-100\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-pfisica/add-pfisica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPfisicaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__p_fisica__ = __webpack_require__("./src/app/add-pfisica/p-fisica.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__("./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var api_url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
var AddPfisicaComponent = /** @class */ (function () {
    function AddPfisicaComponent(httpClient) {
        this.httpClient = httpClient;
        this.data = {};
        this.md5 = new __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"]();
        this.pfisica = new __WEBPACK_IMPORTED_MODULE_1__p_fisica__["a" /* PFisica */]();
        this.apiUrl = api_url;
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    AddPfisicaComponent.prototype.ngOnInit = function () {
        this.sexo = [
            { value: 'M', viewValue: 'Masculino' },
            { value: 'F', viewValue: 'Feminino' }
        ];
    };
    AddPfisicaComponent.prototype.registerPf = function () {
        this.apiUrl += '/add-pfisica%3Ftype=sucess';
        this.removeMasks();
        this.md5.appendStr(this.senha);
        var newSenha = this.md5.end();
        this.pfisica.senha = newSenha.toString();
        return this.httpClient.post(this.apiUrl, this.pfisica)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
    };
    AddPfisicaComponent.prototype.removeMasks = function () {
        this.removeCpfMask();
        this.removeCelMask();
        this.removeCepMask();
    };
    AddPfisicaComponent.prototype.removeCpfMask = function () {
        var cpf = this.pfisica.cpf.toString();
        var beforeCpf = cpf.replace('.', '');
        beforeCpf = beforeCpf.replace('.', '');
        beforeCpf = beforeCpf.replace('-', '');
        this.pfisica.cpf = parseInt(beforeCpf);
    };
    AddPfisicaComponent.prototype.removeCelMask = function () {
        var cel = this.pfisica.celular.toString();
        var beforeCel = cel.replace('(', '');
        beforeCel = beforeCel.replace(')', '');
        beforeCel = beforeCel.replace(' ', '');
        beforeCel = beforeCel.replace('-', '');
        this.pfisica.celular = parseInt(beforeCel);
    };
    AddPfisicaComponent.prototype.removeCepMask = function () {
        var cep = this.pfisica.cep.toString();
        var beforeCep = cep.replace('.', '');
        beforeCep = beforeCep.replace('-', '');
        this.pfisica.cep = parseInt(beforeCep);
    };
    AddPfisicaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-pfisica',
            template: __webpack_require__("./src/app/add-pfisica/add-pfisica.component.html"),
            styles: [__webpack_require__("./src/app/add-pfisica/add-pfisica.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AddPfisicaComponent);
    return AddPfisicaComponent;
}());



/***/ }),

/***/ "./src/app/add-pfisica/p-fisica.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PFisica; });
var PFisica = /** @class */ (function () {
    function PFisica() {
    }
    return PFisica;
}());



/***/ }),

/***/ "./src/app/add-pjuridica/add-pjuridica.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-pjuridica/add-pjuridica.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row justify-content-center\">\r\n        <h1 class=\"title\">Cadastrar Usuário Pessoa Jurídica</h1>\r\n    </div>\r\n    </div>\r\n\r\n    <mat-card>\r\n        <form>\r\n\r\n          <div class=\"row justify-content-center\">\r\n            <div class=\"col-12\">\r\n              <mat-form-field>\r\n                  <input [(ngModel)]=\"pjuridica.razaoSocial\" name=\"razaoSocial\" type=\"text\" matInput placeholder=\"Razão Social\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-12\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.email\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.cnpj\" [textMask]=\"{mask: cnpjMask}\" name=\"cnpj\" type=\"text\" matInput placeholder=\"CNPJ\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.celular\" [textMask]=\"{mask: celMask}\" name=\"celular\" type=\"text\" matInput placeholder=\"Celular\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.cep\" [textMask]=\"{mask: cepMask}\" name=\"cep\" type=\"text\" matInput placeholder=\"CEP\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-6\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.estado\" name=\"estado\" type=\"text\" matInput placeholder=\"Estado\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-12\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.cidade\" name=\"cidade\" type=\"text\" matInput placeholder=\"Cidade\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-12\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.endereco\" name=\"endereco\" type=\"text\" matInput placeholder=\"Endereço\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-4\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.numero\" [textMask]=\"{mask: numMask}\" name=\"numero\" type=\"text\" matInput placeholder=\"Número\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-8\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.complemento\" name=\"complemento\" type=\"text\" matInput placeholder=\"Complemento\" required>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-12\">\r\n              <mat-form-field>\r\n                <input [(ngModel)]=\"pjuridica.senha\" name=\"senha\" type=\"password\" matInput placeholder=\"Senha\" required>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"button-row row justify-content-center\">\r\n            <div class=\"col-6\">\r\n              <button mat-raised-button type=\"submit\" color=\"primary\" class=\"w-100\" (click)=\"registerPj()\">Confirmar</button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button mat-raised-button color=\"primary\" class=\"w-100\">Cancelar</button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-pjuridica/add-pjuridica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPjuridicaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__p_juridica__ = __webpack_require__("./src/app/add-pjuridica/p-juridica.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__ = __webpack_require__("./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var api_url = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
var AddPjuridicaComponent = /** @class */ (function () {
    function AddPjuridicaComponent(httpClient) {
        this.httpClient = httpClient;
        this.data = {};
        this.md5 = new __WEBPACK_IMPORTED_MODULE_3_ts_md5_dist_md5__["Md5"]();
        this.pjuridica = new __WEBPACK_IMPORTED_MODULE_1__p_juridica__["a" /* PJuridica */]();
        this.apiUrl = api_url;
        this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',
            /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    AddPjuridicaComponent.prototype.ngOnInit = function () {
    };
    AddPjuridicaComponent.prototype.registerPj = function () {
        this.apiUrl += '/add-pjuridica%3Ftype=sucess';
        this.removeMasks();
        this.md5.appendStr(this.senha);
        var newSenha = this.md5.end();
        this.pjuridica.senha = newSenha.toString();
        return this.httpClient.post(this.apiUrl, this.pjuridica)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
    };
    AddPjuridicaComponent.prototype.removeMasks = function () {
        this.removeCnpjMask();
        this.removeCelMask();
        this.removeCepMask();
    };
    AddPjuridicaComponent.prototype.removeCnpjMask = function () {
        var cnpj = this.pjuridica.cnpj.toString();
        var beforeCnpj = cnpj.replace('.', '');
        beforeCnpj = beforeCnpj.replace('.', '');
        beforeCnpj = beforeCnpj.replace('/', '');
        beforeCnpj = beforeCnpj.replace('-', '');
        this.pjuridica.cnpj = parseInt(beforeCnpj);
    };
    AddPjuridicaComponent.prototype.removeCelMask = function () {
        var cel = this.pjuridica.celular.toString();
        var beforeCel = cel.replace('(', '');
        beforeCel = beforeCel.replace(')', '');
        beforeCel = beforeCel.replace(' ', '');
        beforeCel = beforeCel.replace('-', '');
        this.pjuridica.celular = parseInt(beforeCel);
    };
    AddPjuridicaComponent.prototype.removeCepMask = function () {
        var cep = this.pjuridica.cep.toString();
        var beforeCep = cep.replace('.', '');
        beforeCep = beforeCep.replace('-', '');
        this.pjuridica.cep = parseInt(beforeCep);
    };
    AddPjuridicaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-pjuridica',
            template: __webpack_require__("./src/app/add-pjuridica/add-pjuridica.component.html"),
            styles: [__webpack_require__("./src/app/add-pjuridica/add-pjuridica.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AddPjuridicaComponent);
    return AddPjuridicaComponent;
}());



/***/ }),

/***/ "./src/app/add-pjuridica/p-juridica.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PJuridica; });
var PJuridica = /** @class */ (function () {
    function PJuridica() {
    }
    return PJuridica;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pesquisar_pesquisar_component__ = __webpack_require__("./src/app/pesquisar/pesquisar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pet_info_pet_info_component__ = __webpack_require__("./src/app/pet-info/pet-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meus_pets_meus_pets_component__ = __webpack_require__("./src/app/meus-pets/meus-pets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favoritos_favoritos_component__ = __webpack_require__("./src/app/favoritos/favoritos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_pjuridica_add_pjuridica_component__ = __webpack_require__("./src/app/add-pjuridica/add-pjuridica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_pfisica_add_pfisica_component__ = __webpack_require__("./src/app/add-pfisica/add-pfisica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_pet_add_pet_component__ = __webpack_require__("./src/app/add-pet/add-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'externalUrl',
        component: __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
        resolve: {
            url: 'externalUrlRedirectResolver'
        },
        data: {
            externalUrl: '../site/site-institucional.html'
        }
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'add-pet',
        component: __WEBPACK_IMPORTED_MODULE_11__add_pet_add_pet_component__["a" /* AddPetComponent */]
    },
    {
        path: 'add-pfisica',
        component: __WEBPACK_IMPORTED_MODULE_10__add_pfisica_add_pfisica_component__["a" /* AddPfisicaComponent */]
    },
    {
        path: 'add-pjuridica',
        component: __WEBPACK_IMPORTED_MODULE_9__add_pjuridica_add_pjuridica_component__["a" /* AddPjuridicaComponent */]
    },
    {
        path: 'chat',
        component: __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */]
    },
    {
        path: 'favoritos',
        component: __WEBPACK_IMPORTED_MODULE_7__favoritos_favoritos_component__["a" /* FavoritosComponent */]
    },
    {
        path: 'meus-pets',
        component: __WEBPACK_IMPORTED_MODULE_6__meus_pets_meus_pets_component__["a" /* MeusPetsComponent */]
    },
    {
        path: 'pesquisar',
        component: __WEBPACK_IMPORTED_MODULE_4__pesquisar_pesquisar_component__["a" /* PesquisarComponent */]
    },
    {
        path: 'pet-info',
        component: __WEBPACK_IMPORTED_MODULE_5__pet_info_pet_info_component__["a" /* PetInfoComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n\r\n.navmenu{\r\n  position: fixed;\r\n  z-index: 2;\r\n  -webkit-box-shadow: 0 1px 6px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);\r\n          box-shadow: 0 1px 6px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);\r\n  color: #ffffff;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.navmenu .title{\r\n  float: right;\r\n}\r\n\r\n.subnav{\r\n  position: fixed;\r\n  background: #f5f5f5;\r\n  color: #333333;\r\n  bottom: 0;\r\n  z-index: 2;\r\n  padding: 0px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24);\r\n          box-shadow: 0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24);\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.subnav.scrollUp {\r\n  -webkit-transform: translateY(60px);\r\n          transform: translateY(60px);\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.mat-toolbar-row{\r\n  padding: 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row .mat-button{\r\n  margin: 0px 0px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  min-width: 72px;\r\n}\r\n\r\n.subnav .mat-toolbar-row .mat-button{\r\n  padding: 8px 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row a{\r\n  padding: 0px 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row ul{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row li{\r\n  list-style: none;\r\n  max-height: 20px;\r\n}\r\n\r\n.mat-icon{\r\n  font-size: 22px;\r\n}\r\n\r\n/*\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-sidenav-content {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 20px;\r\n}*/\r\n\r\n@media only screen and (min-width: 400px){\r\n  .subnav .mat-toolbar-row .mat-button{\r\n    min-width: 83px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 340px){\r\n  .subnav .mat-toolbar-row .mat-button{\r\n    min-width: 64px;\r\n    font-size: 10px;\r\n  }\r\n  .mat-icon{\r\n    font-size: 16px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar *ngIf=\"mostrarMenu\" class=\"navmenu\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <a mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon><i class=\"fas fa-bars\"></i></mat-icon>\r\n    </a>\r\n\r\n    <span class=\"nav-space\"></span>\r\n\r\n    <img class=\"nav-logo\" src=\"../assets/images/idot-logo-branca36.png\" alt=\"idot logo\">\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"example-container\">\r\n  <mat-sidenav #sidenav class=\"example-sidenav\">\r\n    <p>Sidenav content goes here!</p>\r\n  </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n<mat-toolbar *ngIf=\"mostrarMenu\" class=\"subnav\">\r\n  <mat-toolbar-row>\r\n    <a mat-button routerLink=\"/home\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-home\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Home</span>\r\n        </li>\r\n      </ul>\r\n    </a>\r\n    <a mat-button routerLink=\"/meus-pets\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-paw\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Meus Pets</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/add-pet\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-plus\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Adicionar</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/favoritos\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-heart\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Favoritos</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/pesquisar\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-search\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Pesquisar</span>\r\n        </li>\r\n      </ul>\r\n    </a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
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
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.mostrarMenu = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.mostrarMenuEmitter.subscribe(function (mostrar) { return _this.mostrarMenu = mostrar; });
        window.onresize = function (event) {
            var w = window.innerWidth;
            var h = window.innerHeight;
            if (w <= 500 && h <= 825) {
                console.log('Smartphone');
            }
            else if ((w >= 768 && h >= 1024) && (w <= 1024 && h <= 1366)) {
                window.location.href = 'https://idotapp.github.io/site-institucional/site-institucional.html';
            }
            else {
                window.location.href = 'https://idotapp.github.io/site-institucional/site-institucional.html';
                console.log('Desktop');
            }
        };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_service_worker__ = __webpack_require__("./node_modules/@angular/service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__add_pet_add_pet_component__ = __webpack_require__("./src/app/add-pet/add-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_pfisica_add_pfisica_component__ = __webpack_require__("./src/app/add-pfisica/add-pfisica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_pjuridica_add_pjuridica_component__ = __webpack_require__("./src/app/add-pjuridica/add-pjuridica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__favoritos_favoritos_component__ = __webpack_require__("./src/app/favoritos/favoritos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__meus_pets_meus_pets_component__ = __webpack_require__("./src/app/meus-pets/meus-pets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pesquisar_pesquisar_component__ = __webpack_require__("./src/app/pesquisar/pesquisar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pet_info_pet_info_component__ = __webpack_require__("./src/app/pet-info/pet-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_modal_add_p_modal_add_p_component__ = __webpack_require__("./src/app/login/modal-add-p/modal-add-p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_angular2_text_mask__);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__add_pet_add_pet_component__["a" /* AddPetComponent */],
                __WEBPACK_IMPORTED_MODULE_10__add_pfisica_add_pfisica_component__["a" /* AddPfisicaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__add_pjuridica_add_pjuridica_component__["a" /* AddPjuridicaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_13__favoritos_favoritos_component__["a" /* FavoritosComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__meus_pets_meus_pets_component__["a" /* MeusPetsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pesquisar_pesquisar_component__["a" /* PesquisarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pet_info_pet_info_component__["a" /* PetInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_modal_add_p_modal_add_p_component__["a" /* ModalAddPComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_32_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].production })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_20__login_login_service__["a" /* LoginService */],
                {
                    provide: 'externalUrlRedirectResolver',
                    useValue: function (route, state) {
                        window.location.href = route.data.externalUrl;
                    }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_19__login_modal_add_p_modal_add_p_component__["a" /* ModalAddPComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <mat-card>\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row justify-content-center\">\r\n\r\n        <h1 class=\"title\">Chat</h1>\r\n\r\n    </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__("./src/app/chat/chat.component.html"),
            styles: [__webpack_require__("./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/favoritos/favoritos.component.css":
/***/ (function(module, exports) {

module.exports = "#home .mat-card{\r\n    padding: 0px !important;\r\n}\r\n\r\n.card-content{\r\n    position: absolute;\r\n    left: 50%;\r\n    padding: 10px 10px;\r\n    width: 50%;\r\n}\r\n\r\n.card-content  li{\r\n    padding: 5px 0px;\r\n}\r\n\r\n.card-content ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.img-animals{\r\n    width: 50%;\r\n    height: 100%; \r\n}\r\n\r\n.content-date{\r\n    position: absolute;\r\n    left: 53%;\r\n    top: 87%;\r\n}\r\n\r\n.heart{\r\n    position: absolute;\r\n    left: 94%;\r\n    top: 87%;\r\n}\r\n\r\n.fa-heart{\r\n    color:#755DCA;\r\n}"

/***/ }),

/***/ "./src/app/favoritos/favoritos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Pets Favoritos</h1>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card *ngFor=\"let favoritePet of listOfFavoritePets\" (click)=\"moreInfo(favoritePet.id)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <img src=\"../../assets/images/ft-pet.jpg\" alt=\"\" class=\"img-animals\">\r\n      </div>\r\n      <div class=\"col-md-2 card-content\">\r\n        <ul>\r\n          <li class=\"font-bold\">{{favoritePet.title}}</li>\r\n          <li>{{favoritePet.breed}}</li>\r\n          <li>{{favoritePet.city}} - {{favoritePet.state}}</li>\r\n          <li>{{favoritePet.street}}</li>\r\n        </ul>\r\n      </div>\r\n      <label class=\"content-date\">{{favoritePet.date}}</label>\r\n      <div class=\"heart\">\r\n        <i class=\"fas fa-heart\"></i>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/favoritos/favoritos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritosComponent = /** @class */ (function () {
    function FavoritosComponent(router) {
        this.router = router;
    }
    FavoritosComponent.prototype.ngOnInit = function () {
        this.getFavoritePets();
    };
    FavoritosComponent.prototype.moreInfo = function (id) {
        this.router.navigate(["pet-info"]);
    };
    FavoritosComponent.prototype.getFavoritePets = function () {
        this.listOfFavoritePets = [
            { id: 7, name: 'DogGuilherme5', city: 'São Vicente', state: 'SP', street: 'Rua Esquina 3', breed: 'Poodle ', date: '02/01/2017', title: 'Cão feio6' },
        ];
    };
    FavoritosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favoritos',
            template: __webpack_require__("./src/app/favoritos/favoritos.component.html"),
            styles: [__webpack_require__("./src/app/favoritos/favoritos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], FavoritosComponent);
    return FavoritosComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#home .mat-card{\r\n    padding: 0px !important;\r\n}\r\n\r\n.card-content{\r\n    position: absolute;\r\n    left: 50%;\r\n    padding: 10px 10px;\r\n    width: 50%;\r\n}\r\n\r\n.card-content  li{\r\n    padding: 5px 0px;\r\n}\r\n\r\n.card-content ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.img-animals{\r\n    width: 50%;\r\n    height: 100%; \r\n}\r\n\r\n.content-date{\r\n    position: absolute;\r\n    left: 53%;\r\n    top: 87%;\r\n}\r\n\r\n.heart{\r\n    position: absolute;\r\n    left: 94%;\r\n    top: 87%;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Pets Cadastrados Recentemente Perto de Você</h1>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card *ngFor=\"let pets of petsHome\" (click)=\"moreInfo(pets.id)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <img src=\"{{pets.ds_foto_animal}}\" alt=\"foto-animal\" class=\"img-animals\">\r\n      </div>\r\n      <div class=\"col-md-2 card-content\">\r\n        <ul>\r\n          <li class=\"font-bold\">{{pets.nm_animal}}</li>\r\n          <li>{{pets.nm_raca}}</li>\r\n          <!-- <li>{{pets.cd_idade_animal}} ano(s)</li> -->\r\n          <li>{{pets.nm_cor_animal}}</li>\r\n          <li>{{pets.nm_cidade_usuario}} - {{pets.nm_estado_usuario}}</li>\r\n          <li>{{pets.nm_endereco_usuario}}</li>\r\n        </ul>\r\n      </div>\r\n      <!-- <label class=\"content-date\">{{pet.date}}</label> -->\r\n      <div class=\"heart\">\r\n        <i class=\"fas fa-heart\"></i>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var api_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.apiUrl = api_url;
        this.data = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPets('/home');
    };
    HomeComponent.prototype.getPets = function (URL) {
        var _this = this;
        this.httpClient.get(api_url + URL).subscribe(function (pets) {
            _this.data = pets;
            _this.petsHome = _this.data.pets;
            console.log(_this.petsHome);
        });
    };
    HomeComponent.prototype.moreInfo = function (id) {
        this.router.navigate(["pet-info"]);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  margin-bottom: 0px !important;\r\n}\r\n.bg-login{\r\n  background: #755DCA !important;\r\n  height: 100vh\r\n}\r\n.mat-card{\r\n  margin-top: 125px;\r\n}\r\n.logo{\r\n  margin-top: -100px;\r\n}\r\n.logo img{\r\n  margin: auto;\r\n  display: block;\r\n}\r\nform{\r\n  margin-top: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-login animated fadeIn\">\r\n\r\n  <mat-card>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"logo\">\r\n        <img src=\"../../assets/images/idot-logo-branca128.png\" alt=\"\" srcset=\"\">\r\n      </div>\r\n    </div>\r\n\r\n      <form>\r\n\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-12\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"usuario.email\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"senha\" name=\"senha\" matInput placeholder=\"Senha\" [type]=\"hide ? 'password' : 'text'\" required>\r\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <div class=\"button-row row justify-content-center\">\r\n            <button (click)=\"getAuth()\" mat-raised-button type=\"submit\" color=\"primary\" class=\"w-50\">Confirmar</button>\r\n          </div>\r\n          <div class=\"button-row row justify-content-center\">\r\n              <button mat-raised-button color=\"primary\" class=\"w-50\" (click)=\"openDialog()\">Cadastre-se</button>\r\n            </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__("./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usuario__ = __webpack_require__("./src/app/login/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_add_p_modal_add_p_component__ = __webpack_require__("./src/app/login/modal-add-p/modal-add-p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var api_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpClient, loginService, dialog) {
        this.httpClient = httpClient;
        this.loginService = loginService;
        this.dialog = dialog;
        this.apiUrl = api_url;
        this.data = {};
        this.usuario = new __WEBPACK_IMPORTED_MODULE_6__usuario__["a" /* Usuario */]();
        this.md5 = new __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"]();
        this.hide = true;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]);
    }
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Você deve preencher seu email' :
            this.email.hasError('email') ? 'Email incorreto' :
                '';
    };
    LoginComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__modal_add_p_modal_add_p_component__["a" /* ModalAddPComponent */], {
            width: '300px',
            height: '210px',
            data: {}
        });
    };
    LoginComponent.prototype.getAuth = function () {
        var _this = this;
        this.md5.appendStr(this.senha);
        var newSenha = this.md5.end();
        this.usuario.senha = newSenha.toString();
        this.apiUrl += '/login';
        this.httpClient.post(this.apiUrl, this.usuario).subscribe(function (auth) {
            _this.data = auth;
            _this.fazerLogin();
            console.log(auth);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.fazerLogin = function () {
        this.loginService.fazerLogin(this.usuario, this.data);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatDialog */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(router) {
        this.router = router;
        this.authCheck = [];
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginService.prototype.fazerLogin = function (usuario, auth) {
        this.authCheck = auth.authUser;
        if (usuario.email === this.authCheck[0].nm_email_usuario && !this.authCheck[0].Tokken) {
            this.usuarioAutenticado = true;
            this.mostrarMenuEmitter.emit(true);
            this.router.navigate(['/home']);
        }
        else {
            this.usuarioAutenticado = false;
            this.mostrarMenuEmitter.emit(false);
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/modal-add-p/modal-add-p.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/modal-add-p/modal-add-p.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h3 class=\"title\">Escolha o Tipo de Cadastro</h3>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <div class=\"button-row row justify-content-center\">\r\n      <button (click)=\"goTo('fisica')\" mat-raised-button type=\"submit\" color=\"primary\" class=\"w-50\">Pessoa Física</button>\r\n    </div>\r\n    <div class=\"button-row row justify-content-center\">\r\n      <button mat-raised-button color=\"primary\" class=\"w-50\" (click)=\"goTo('juridica')\">Pessoa Jurídica</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/modal-add-p/modal-add-p.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAddPComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ModalAddPComponent = /** @class */ (function () {
    function ModalAddPComponent(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    ModalAddPComponent.prototype.ngOnInit = function () {
    };
    ModalAddPComponent.prototype.goTo = function (route) {
        if (route === 'fisica') {
            this.dialogRef.close();
            this.router.navigate(["add-pfisica"]);
        }
        else if (route === 'juridica') {
            this.dialogRef.close();
            this.router.navigate(["add-pjuridica"]);
        }
    };
    ModalAddPComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-add-p',
            template: __webpack_require__("./src/app/login/modal-add-p/modal-add-p.component.html"),
            styles: [__webpack_require__("./src/app/login/modal-add-p/modal-add-p.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ModalAddPComponent);
    return ModalAddPComponent;
}());



/***/ }),

/***/ "./src/app/login/usuario.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/meus-pets/meus-pets.component.css":
/***/ (function(module, exports) {

module.exports = "#meus-pets .mat-card{\r\n  padding: 10px 5px !important;\r\n  font-size: 14px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.meus-pets-list{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.meus-pets-list li{\r\n  list-style: none;\r\n  padding-right: 5px;\r\n  display: inline-block;\r\n  vertical-align: middle\r\n}\r\n\r\n.meus-pets-list img{\r\n  width: 40px;\r\n}\r\n\r\n.meus-pets-text{\r\n  text-align: center;\r\n}\r\n\r\n.buttons-inline{\r\n  padding: 0px 0px 0px 5px;\r\n}\r\n\r\n.buttons-inline li{\r\n  display: inline-block;\r\n  list-style: none;\r\n  padding: 0px 0px;\r\n}\r\n\r\n.buttons-inline .mat-mini-fab{\r\n  background: #ffffff;\r\n}\r\n\r\n.buttons-inline .mat-mini-fab .edit{\r\n  color: #755DCA;\r\n}\r\n\r\n.buttons-inline .mat-mini-fab .remove{\r\n  color: #ff4d4d;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/meus-pets/meus-pets.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"meus-pets\" class=\"container-fluid animated fadeIn\">\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Meus Pets</h1>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card *ngFor=\"let pets of meusPets\">\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n        <ul class=\"meus-pets-list\">\r\n          <li>\r\n            <img src=\"{{pets.ds_foto_animal}}\" alt=\"foto do pet\">\r\n          </li>\r\n          <li>\r\n            <span class=\"meus-pets-text\">{{pets.nm_animal}}</span>\r\n          </li>\r\n          <li>\r\n            <span class=\"meus-pets-text\">{{pets.cd_especie_fk}}</span>\r\n          </li>\r\n          <li>\r\n            <span class=\"meus-pets-text\">{{pets.cd_raca_fk}}</span>\r\n          </li>\r\n        </ul>\r\n\r\n        <span class=\"nav-space\"></span>\r\n\r\n        <ul class=\"meus-pets-list buttons-inline \">\r\n          <li>\r\n            <button mat-mini-fab>\r\n              <i class=\"fas fa-pencil-alt edit\"></i>\r\n            </button>\r\n          </li>\r\n          <li>\r\n            <button mat-mini-fab>\r\n              <i class=\"fas fa-trash-alt remove\"></i>\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/meus-pets/meus-pets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusPetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var api_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
var MeusPetsComponent = /** @class */ (function () {
    function MeusPetsComponent(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = api_url;
        this.myArray = {};
    }
    MeusPetsComponent.prototype.ngOnInit = function () {
        this.getMeusPets('/pets');
    };
    MeusPetsComponent.prototype.getMeusPets = function (Pet) {
        var _this = this;
        this.httpClient.get(api_url + Pet).subscribe(function (data) {
            _this.myArray = data;
            _this.meusPets = _this.myArray.pet;
        });
    };
    MeusPetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meus-pets',
            template: __webpack_require__("./src/app/meus-pets/meus-pets.component.html"),
            styles: [__webpack_require__("./src/app/meus-pets/meus-pets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MeusPetsComponent);
    return MeusPetsComponent;
}());



/***/ }),

/***/ "./src/app/pesquisar/pesquisar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pesquisar/pesquisar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <mat-card>\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row justify-content-center\">\r\n\r\n\r\n      <h1 class=\"title\">Pesquisar</h1>\r\n\r\n    </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pesquisar/pesquisar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarComponent; });
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

var PesquisarComponent = /** @class */ (function () {
    function PesquisarComponent() {
    }
    PesquisarComponent.prototype.ngOnInit = function () {
    };
    PesquisarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pesquisar',
            template: __webpack_require__("./src/app/pesquisar/pesquisar.component.html"),
            styles: [__webpack_require__("./src/app/pesquisar/pesquisar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PesquisarComponent);
    return PesquisarComponent;
}());



/***/ }),

/***/ "./src/app/pet-info/pet-info.component.css":
/***/ (function(module, exports) {

module.exports = "#home .mat-card{\r\n    height: 600px;\r\n}\r\n\r\n.card-content{\r\n    position: absolute;\r\n    left: 5%;\r\n    top: 38%;\r\n    padding: 10px 10px;\r\n    width: 50%;\r\n}\r\n\r\n.card-content  li{\r\n    padding: 2px 0px;\r\n}\r\n\r\n.card-content ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.card-content2{\r\n    position: absolute;\r\n    left: 55%;\r\n    top: 38%;\r\n    padding: 10px 10px;\r\n    width: 30%;\r\n}\r\n\r\n.card-content2  li{\r\n    padding: 2px 0px;\r\n}\r\n\r\n.card-content2 ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.img-animals{\r\n    margin: 5% 25%;\r\n    width: 50%;\r\n    height: 100%; \r\n}\r\n\r\n.content-date{\r\n    position: absolute;\r\n    left: 53%;\r\n    top: 87%;\r\n}\r\n\r\n.heart{\r\n    position: absolute;\r\n    left: 94%;\r\n    top: 87%;\r\n}\r\n\r\n.space-top{\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Mais Informações do Pet - {{pet.name}}</h1>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card (click)=\"teste(shoe.id)\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 text-center font-bold\"><label>{{pet.title}}</label></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <img src=\"../../assets/images/ft-pet.jpg\" alt=\"\" class=\"img-animals\">\r\n      </div>\r\n      <div class=\"col-md-2 card-content\">\r\n        <ul>\r\n          <li class=\"font-bold\">Nome</li>\r\n          <li>{{pet.name}}</li>\r\n          <li class=\"font-bold space-top\">Espécie</li>\r\n          <li>{{pet.species}}</li>\r\n          <li class=\"font-bold space-top\">Sexo</li>\r\n          <li>{{pet.genre}}</li>\r\n          <li class=\"font-bold space-top\">Cor</li>\r\n          <li>{{pet.color}}</li>\r\n          <li class=\"font-bold space-top\">Tamanho</li>\r\n          <li>{{pet.size}}</li>\r\n          <li class=\"font-bold space-top\">Endereço</li>\r\n          <li>{{pet.city}} - {{pet.state}}</li>\r\n          <li>{{pet.street}}</li>\r\n          <li class=\"font-bold space-top\">Cadastrado por:</li>\r\n          <li><a href=\"#\">ONG MyPet</a></li>\r\n        </ul>\r\n\r\n      </div>\r\n      <div class=\"col-md-2 card-content2\">\r\n        <ul>\r\n            <li class=\"font-bold\">Idade</li>\r\n            <li>{{pet.age}}</li>\r\n            <li class=\"font-bold space-top\">Raça</li>\r\n          <li>{{pet.breed}}</li>\r\n        </ul>\r\n\r\n      </div>\r\n      <!-- <label class=\"content-date\">{{shoe.date}}</label> -->\r\n      <!-- <div class=\"heart\">\r\n        <i class=\"fas fa-heart\"></i>\r\n      </div> -->\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetInfoComponent; });
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

var PetInfoComponent = /** @class */ (function () {
    function PetInfoComponent() {
    }
    PetInfoComponent.prototype.ngOnInit = function () {
        this.pet = {
            'id': '7',
            'name': 'Cão Amigo Chocolate',
            'age': '2',
            'breed': 'Poodle',
            'species': 'Cachorro',
            'genre': 'Macho',
            'color': 'Mesclado',
            'size': 'Pequeno',
            'city': 'São Vicente',
            'state': 'SP',
            'street': 'Rua Esquina 3',
            'title': 'Cão feio'
        };
    };
    PetInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pet-info',
            template: __webpack_require__("./src/app/pet-info/pet-info.component.html"),
            styles: [__webpack_require__("./src/app/pet-info/pet-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PetInfoComponent);
    return PetInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://demo5541414.mockable.io'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map