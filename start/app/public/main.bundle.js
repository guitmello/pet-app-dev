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

/***/ "./src/app/add-fast-pet/add-fast-pet.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-card{\r\n  padding-top: 0px !important;\r\n}\r\n\r\n.pet-form{\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 20px 0px\r\n}\r\n\r\n.pet-sub-form{\r\n  padding-top: 10px;\r\n}\r\n\r\n.col-3{\r\n  padding-left: 10px;\r\n}\r\n\r\nh6{\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding-top: 17px !important;\r\n  margin: 0px;\r\n  vertical-align: middle;\r\n  color: #755DCA;\r\n}\r\n\r\n.checkbox-align {\r\n  padding: .1375em 0 !important;\r\n  border-top: .84375em solid transparent !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-fast-pet/add-fast-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Cadastrar Pet</h1>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card>\r\n\r\n    <form id=\"add-pet\" name=\"add-pet\">\r\n\r\n      <div class=\"row pet-form\">\r\n        <div class=\"col-4\">\r\n          <button mat-fab color=\"primary\" (click)='imgFileInput.click()'>\r\n            <mat-icon aria-label=\"Tirar Foto\">add_a_photo</mat-icon>\r\n            <input hidden type=\"file\" accept=\"image/*\" id=\"imgupload\" capture=\"camera\" #imgFileInput />\r\n          </button>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"addFastPet.nm_animal\" name=\"nome\" matInput placeholder=\"Nome\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n\r\n        <div class=\"row pet-sub-form\">\r\n          <div class=\"col-4\">\r\n            <button (click)=\"getAdress()\" mat-fab color=\"primary\" routerLink=\"/add-fast-pet\">\r\n              <mat-icon aria-label=\"Adicionar Pet Rapidamente\">location_on</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"addFastPet.cd_cep_animal\" name=\"cd_cep_animal\" matInput placeholder=\"CEP\" required>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-8\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"addFastPet.nm_estado_animal\" [matAutocomplete]=\"autoStates\" name=\"nm_estado_animal\" matInput placeholder=\"Estado\"\r\n                (click)=\"emptyInput()\" (blur)=\"blurInStates()\" (keyup)=\"fillFiltredStates()\" required>\r\n              <mat-autocomplete #autoStates=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filtredStates\" [value]=\"option\">\r\n                  {{ option }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-8\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"addFastPet.nm_cidade_animal\" name=\"nm_cidade_animal\" [matAutocomplete]=\"autoCities\" matInput placeholder=\"Cidade\"\r\n                (click)=\"blurInStates()\" (keyup)=\"fillFiltredCities()\" required>\r\n              <mat-autocomplete #autoCities=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of filtredCities\" [value]=\"option\">\r\n                  {{ option }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-8\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"addFastPet.nm_endereco_animal\" name=\"nm_endereco_animal\" matInput placeholder=\"Endereço\" required>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-8\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"addFastPet.cd_numero_endereco_animal\" name=\"cd_numero_endereco_animal\" matInput placeholder=\"Número\"\r\n                required>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-8\">\r\n            <mat-form-field>\r\n              <mat-select [(ngModel)]=\"addFastPet.cd_especie_fk\" name=\"especie\" placeholder=\"Espécie\" (change)=\"fillRacas()\" required>\r\n                <mat-option *ngFor=\"let especies of especieArray\" [value]=\"especies.id\">\r\n                  {{ especies.nm_especie }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\"></div>\r\n          <div class=\"col-8\" *ngIf=\"!!addFastPet.cd_especie_fk\">\r\n            <mat-form-field>\r\n              <mat-select [(ngModel)]=\"addFastPet.cd_raca_fk\" name=\"raca\" placeholder=\"Raça\" required>\r\n                <mat-option *ngFor=\"let racas of racaArray\" [value]=\"racas.id\">\r\n                  {{ racas.nm_raca }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"col-12\">\r\n        <div class=\"button-submit-row row justify-content-center\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" form=\"add-pet\" class=\"w-50\" (click)=\"registerPet()\">Confirmar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/add-fast-pet/add-fast-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFastPetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_fast_pet__ = __webpack_require__("./src/app/add-fast-pet/add-fast-pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
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








var api_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var AddFastPetComponent = /** @class */ (function () {
    function AddFastPetComponent(httpClient, addFastPet, router, snackBar, formBuilder, appComponent) {
        this.httpClient = httpClient;
        this.addFastPet = addFastPet;
        this.router = router;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.appComponent = appComponent;
        this.mapsUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
        this.mapsUrlFinal = '&sensor=true';
        this.api_urlCityState = api_url + '/api/citystate';
        this.apiUrl = api_url;
        this.json = {};
        this.citiesArrays = {};
        this.cityStates = {};
        this.postData = {};
        this.especieArray = {};
        this.racaArray = {};
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addfastpet = new __WEBPACK_IMPORTED_MODULE_1__add_fast_pet__["a" /* AddFastPet */]();
        this.addressfastpet = {};
        this.dataAdress = {};
        this.adress = {};
    }
    AddFastPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.racaArray = [];
        this.fillEspecie();
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        document.querySelector('#imgupload').addEventListener('change', function () {
            var fotoAnimal = '';
            var filesSelected = document.getElementById('imgupload').files;
            if (filesSelected.length > 0) {
                var fileToLoad = filesSelected[0];
                var fileReader = new FileReader();
                fileReader.onload = function (fileLoadEvent) {
                    var base64value = event.target;
                    document.getElementById('imgupload').setAttribute('base64-value', base64value.result);
                };
                fileReader.readAsDataURL(fileToLoad);
            }
        });
        this.form = this.formBuilder.group({
            nm_estado_animal: [null],
            nm_cidade_animal: [null],
            nm_endereco_animal: [null],
            nm_numero_endereco_animal: [null]
        });
    };
    AddFastPetComponent.prototype.fillRacas = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + '/api/racas/getracas/' + this.addFastPet.cd_especie_fk, { headers: headers }).subscribe(function (element) {
            _this.racaArray = element;
            _this.racaArray = _this.racaArray.payload;
        });
    };
    AddFastPetComponent.prototype.fillEspecie = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + '/api/especies/all', { headers: headers }).subscribe(function (element) {
            _this.especieArray = element;
            _this.especieArray = _this.especieArray.payload;
        });
    };
    AddFastPetComponent.prototype.getCityState = function () {
        var _this = this;
        this.filtredStates = [];
        this.httpClient.get(this.api_urlCityState).subscribe(function (jsonStates) {
            _this.json = jsonStates;
            _this.cityStates = _this.json.estados;
            if (_this.cityStates) {
                _this.cityStates.forEach(function (state) {
                    _this.filtredStates.push(state.sigla);
                });
            }
        });
    };
    AddFastPetComponent.prototype.getAdress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator.geolocation.getCurrentPosition(this.showPosition);
                        return [4 /*yield*/, this.httpClient.get(this.mapsUrl + localStorage.getItem('MyLatitude') + ',' + localStorage.getItem('MyLongitude')
                                + this.mapsUrlFinal).subscribe(function (adress) {
                                _this.dataAdress = adress;
                                _this.addressfastpet = _this.dataAdress.results;
                                console.log(_this.addressfastpet);
                                _this.addFastPet.cd_cep_animal = _this.addressfastpet[3].address_components[7].long_name;
                                _this.addFastPet.nm_estado_animal = _this.addressfastpet[0].address_components[5].short_name;
                                _this.addFastPet.nm_cidade_animal = _this.addressfastpet[0].address_components[4].short_name;
                                _this.addFastPet.nm_endereco_animal = _this.addressfastpet[0].address_components[1].long_name;
                                _this.addFastPet.cd_numero_endereco_animal = _this.addressfastpet[0].address_components[0].long_name;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AddFastPetComponent.prototype.formIsValid = function () {
        return !!this.addFastPet.nm_animal &&
            !!this.addFastPet.cd_cep_animal &&
            !!this.addFastPet.nm_estado_animal &&
            !!this.addFastPet.nm_cidade_animal &&
            !!this.addFastPet.nm_endereco_animal &&
            !!this.addFastPet.cd_numero_endereco_animal;
    };
    AddFastPetComponent.prototype.registerPet = function () {
        var _this = this;
        if (this.formIsValid()) {
            this.apiUrl = this.apiUrl + '/api/animals/create';
            var userToken = localStorage.getItem('token');
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
            var fotobase64 = document.getElementById('imgupload').getAttribute('base64-value');
            if (!fotobase64) {
                fotobase64 = '../../assets/images/ft-pet.png';
            }
            this.postData = {
                ds_foto_animal: fotobase64,
                cd_usuario_fk: localStorage.getItem('id'),
                nm_animal: this.addFastPet.nm_animal,
                cd_cep_animal: parseInt(this.addFastPet.cd_cep_animal.replace('-', '')),
                nm_estado_animal: this.addFastPet.nm_estado_animal,
                nm_cidade_animal: this.addFastPet.nm_cidade_animal,
                nm_endereco_animal: this.addFastPet.nm_endereco_animal,
                cd_numero_endereco_animal: parseInt(this.addFastPet.cd_numero_endereco_animal),
                cd_raca_fk: this.addFastPet.cd_raca_fk,
                cd_especie_fk: this.addFastPet.cd_especie_fk
            };
            return this.httpClient.post(this.apiUrl, this.postData, { headers: headers })
                .subscribe(function (res) {
                _this.snackBar.open('Pet Cadastrado com Sucesso!', 'OK', {
                    duration: 2000,
                });
                _this.addFastPet = new __WEBPACK_IMPORTED_MODULE_1__add_fast_pet__["a" /* AddFastPet */]();
                _this.goTo('meus-pets');
            }, function (err) {
                _this.snackBar.open('Erro ao Cadastrar Pet', 'OK', {
                    duration: 2000,
                });
                _this.addFastPet = new __WEBPACK_IMPORTED_MODULE_1__add_fast_pet__["a" /* AddFastPet */]();
                // this.goTo('meus-pets');
            });
        }
        else {
            this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
                duration: 2000,
            });
        }
    };
    AddFastPetComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
    };
    AddFastPetComponent.prototype.emptyInput = function () {
        if (this.addFastPet.nm_estado_animal == '' || this.addFastPet.nm_estado_animal == undefined) {
            this.getCityState();
        }
    };
    AddFastPetComponent.prototype.blurInStates = function () {
        if (!!this.addFastPet.nm_estado_animal) {
            this.fillCitiesFromStates();
        }
    };
    AddFastPetComponent.prototype.fillFiltredStates = function () {
        if (!!this.addFastPet.nm_estado_animal) {
            this.fillCitiesFromStates();
        }
    };
    AddFastPetComponent.prototype.fillCitiesFromStates = function () {
        var _this = this;
        this.filtredStates = [];
        this.citiesArrays = [];
        this.filtredCities = [];
        if (this.cityStates) {
            this.cityStates.forEach(function (state) {
                if (_this.addFastPet.nm_estado_animal.toLowerCase() === state.sigla.slice(0, _this.addFastPet.nm_estado_animal.length).toLowerCase()) {
                    _this.filtredStates.push(state.sigla);
                    _this.citiesArrays.push(state.cidades);
                }
            });
        }
        this.citiesArrays.forEach(function (cities) {
            cities.forEach(function (city) {
                _this.filtredCities.push(city);
            });
        });
    };
    AddFastPetComponent.prototype.fillFiltredCities = function () {
        var _this = this;
        this.filtredCities = [];
        if (!!this.addFastPet.nm_cidade_animal) {
            this.citiesArrays.forEach(function (cities) {
                cities.forEach(function (city) {
                    if (_this.addFastPet.nm_cidade_animal.toLowerCase() === city.slice(0, _this.addFastPet.nm_cidade_animal.length).toLowerCase()) {
                        _this.filtredCities.push(city);
                    }
                });
            });
        }
    };
    AddFastPetComponent.prototype.showPosition = function (position) {
        localStorage.setItem('MyLatitude', position.coords.latitude);
        localStorage.setItem('MyLongitude', position.coords.longitude);
    };
    AddFastPetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-fast-pet',
            template: __webpack_require__("./src/app/add-fast-pet/add-fast-pet.component.html"),
            styles: [__webpack_require__("./src/app/add-fast-pet/add-fast-pet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__add_fast_pet__["a" /* AddFastPet */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]])
    ], AddFastPetComponent);
    return AddFastPetComponent;
}());



/***/ }),

/***/ "./src/app/add-fast-pet/add-fast-pet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFastPet; });
var AddFastPet = /** @class */ (function () {
    function AddFastPet() {
    }
    return AddFastPet;
}());



/***/ }),

/***/ "./src/app/add-pet/add-pet.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-card{\r\n  padding-top: 0px !important;\r\n}\r\n\r\n.pet-form{\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 20px 0px\r\n}\r\n\r\n.pet-sub-form{\r\n  padding-top: 10px;\r\n}\r\n\r\n.col-3{\r\n  padding-left: 10px;\r\n}\r\n\r\nh6{\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding-top: 17px !important;\r\n  margin: 0px;\r\n  vertical-align: middle;\r\n  color: #755DCA;\r\n}\r\n\r\n.checkbox-align {\r\n  padding: .1375em 0 !important;\r\n  border-top: .84375em solid transparent !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/add-pet/add-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Cadastrar Pet</h1>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card>\r\n\r\n    <form id=\"add-pet\" name=\"add-pet\">\r\n\r\n      <div class=\"row pet-form\">\r\n        <div class=\"col-4\">\r\n          <button mat-fab color=\"primary\" (click)='imgFileInput.click()'>\r\n            <mat-icon aria-label=\"Tirar Foto\">add_a_photo</mat-icon>\r\n            <input hidden type=\"file\" accept=\"image/*\" id=\"imgupload\" capture=\"camera\" #imgFileInput />\r\n          </button>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.nome\" name=\"nome\" matInput placeholder=\"Nome\" required>\r\n            <mat-error *ngIf=\"nome.invalid\">{{getNomeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row pet-sub-form\">\r\n        <div class=\"col-4\">\r\n          <h6>Informações</h6>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.cd_idade_animal\" name=\"idade\" matInput placeholder=\"Idade\" max-length=\"2\" required>\r\n            <mat-error *ngIf=\"cor.invalid\">{{getIdadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.nm_idade_animal\" name=\"text_idade\" placeholder=\"Período\" required>\r\n              <mat-option *ngFor=\"let idades of idadeArray\" [value]=\"idades.value\">\r\n                {{ idades.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"text_idade.invalid\">{{getTextIdadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.sexo\" name=\"sexo\" placeholder=\"Sexo\" required>\r\n              <mat-option *ngFor=\"let sexos of sexoArray\" [value]=\"sexos.value\">\r\n                {{ sexos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"sexo.invalid\">{{getSexoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.tamanho\" name=\"tamanho\" placeholder=\"Tamanho\" required>\r\n              <mat-option *ngFor=\"let tamanhos of tamanhoArray\" [value]=\"tamanhos.value\">\r\n                {{ tamanhos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"tamanho.invalid\">{{getTamanhoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.cor\" name=\"cor\" matInput placeholder=\"Cor\" required>\r\n            <mat-error *ngIf=\"cor.invalid\">{{getCorErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.id_especie\" name=\"especie\" placeholder=\"Espécie\" (change)=\"fillRacas()\" required>\r\n              <mat-option *ngFor=\"let especies of especieArray\" [value]=\"especies.id\">\r\n                {{ especies.nm_especie }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"especie.invalid\">{{getEspecieErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\" *ngIf=\"!!pet.id_especie\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pet.id_raca\" name=\"raca\" placeholder=\"Raça\" required>\r\n              <mat-option *ngFor=\"let racas of racaArray\" [value]=\"racas.id\">\r\n                {{ racas.nm_raca }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"raca.invalid\">{{getRacaErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <div class=\"checkbox-align\">\r\n            <mat-checkbox [(ngModel)]=\"pet.deficiencia\" name=\"deficiencia\" color=\"primary\">Há alguma deficiência?</mat-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row pet-form\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\" *ngIf=\"!!pet.deficiencia\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pet.ds_deficiencia\" name=\"ds_deficiencia\" matInput placeholder=\"Qual?\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <div class=\"button-submit-row row justify-content-center\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" form=\"add-pet\" class=\"w-50\" (click)=\"registerPet()\">Confirmar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-pet/add-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pet__ = __webpack_require__("./src/app/add-pet/pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
    function AddPetComponent(httpClient, router, snackBar, appComponent) {
        this.httpClient = httpClient;
        this.router = router;
        this.snackBar = snackBar;
        this.appComponent = appComponent;
        this.postData = {};
        this.especieArray = {};
        this.racaArray = {};
        this.apiUrl = api_url;
        this.pet = new __WEBPACK_IMPORTED_MODULE_1__pet__["a" /* Pet */]();
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nome = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.idade = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.text_idade = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.sexo = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.tamanho = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cor = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.raca = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.especie = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
    }
    AddPetComponent.prototype.getNomeErrorMessage = function () {
        return this.nome.hasError('required') ? 'Preencha o nome do pet' : '';
    };
    AddPetComponent.prototype.getIdadeErrorMessage = function () {
        return this.idade.hasError('required') ? 'Preencha a idade do pet' : '';
    };
    AddPetComponent.prototype.getTextIdadeErrorMessage = function () {
        return this.text_idade.hasError('required') ? 'Preencha o complemento da idade do pet' : '';
    };
    AddPetComponent.prototype.getSexoErrorMessage = function () {
        return this.sexo.hasError('required') ? 'Preencha o sexo do pet' : '';
    };
    AddPetComponent.prototype.getTamanhoErrorMessage = function () {
        return this.tamanho.hasError('required') ? 'Preencha o tamanho do pet' : '';
    };
    AddPetComponent.prototype.getCorErrorMessage = function () {
        return this.cor.hasError('required') ? 'Preencha a cor do pet' : '';
    };
    AddPetComponent.prototype.getRacaErrorMessage = function () {
        return this.raca.hasError('required') ? 'Preencha a raça do pet' : '';
    };
    AddPetComponent.prototype.getEspecieErrorMessage = function () {
        return this.especie.hasError('required') ? 'Preencha a espécie do pet' : '';
    };
    AddPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        document.querySelector('#imgupload').addEventListener('change', function () {
            var fotoAnimal;
            var filesSelected = document.getElementById('imgupload').files;
            if (filesSelected.length > 0) {
                var fileToLoad = filesSelected[0];
                var fileReader = new FileReader();
                fileReader.onload = function (fileLoadEvent) {
                    var base64value = event.target;
                    document.getElementById('imgupload').setAttribute('base64-value', base64value.result);
                };
                fileReader.readAsDataURL(fileToLoad);
            }
        });
        this.pet.deficiencia = false;
        this.sexoArray = [
            { value: 'Macho', viewValue: 'Macho' },
            { value: 'Fêmea', viewValue: 'Fêmea' }
        ];
        this.idadeArray = [
            { value: 'Mes(es)', viewValue: 'Mes(es)' },
            { value: 'Ano(s)', viewValue: 'Ano(s)' }
        ];
        this.tamanhoArray = [
            { value: 'Pequeno', viewValue: 'Pequeno' },
            { value: 'Médio', viewValue: 'Médio' },
            { value: 'Grande', viewValue: 'Grande' }
        ];
        this.racaArray = [];
        this.fillEspecie();
    };
    AddPetComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
    };
    AddPetComponent.prototype.fillRacas = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + '/api/racas/getracas/' + this.pet.id_especie, { headers: headers }).subscribe(function (element) {
            _this.racaArray = element;
            _this.racaArray = _this.racaArray.payload;
        });
    };
    AddPetComponent.prototype.fillEspecie = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + '/api/especies/all', { headers: headers }).subscribe(function (element) {
            _this.especieArray = element;
            _this.especieArray = _this.especieArray.payload;
        });
    };
    AddPetComponent.prototype.formIsValid = function () {
        return !!this.pet.cd_idade_animal &&
            !!this.pet.nome &&
            !!this.pet.nm_idade_animal &&
            !!this.pet.sexo &&
            !!this.pet.tamanho &&
            !!this.pet.cor &&
            !!this.pet.id_especie &&
            !!this.pet.id_raca;
    };
    AddPetComponent.prototype.registerPet = function () {
        var _this = this;
        if (this.formIsValid()) {
            this.apiUrl = this.apiUrl + '/api/animals/create';
            var userToken = localStorage.getItem('token');
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
            var fotobase64 = document.getElementById('imgupload').getAttribute('base64-value');
            if (!fotobase64) {
                fotobase64 = '../../assets/images/ft-pet.png';
            }
            this.postData = {
                nm_animal: this.pet.nome,
                cd_idade_animal: this.pet.cd_idade_animal,
                nm_idade_animal: this.pet.nm_idade_animal,
                nm_cor_animal: this.pet.cor,
                nm_sexo_animal: this.pet.sexo,
                nm_tamanho_animal: this.pet.tamanho,
                ic_deficiencia_animal: this.pet.deficiencia,
                ds_deficiencia_animal: this.pet.ds_deficiencia,
                ds_foto_animal: fotobase64,
                cd_raca_fk: this.pet.id_raca,
                cd_usuario_fk: localStorage.getItem('id'),
                cd_especie_fk: this.pet.id_especie
            };
            return this.httpClient.post(this.apiUrl, this.postData, { headers: headers })
                .subscribe(function (res) {
                _this.snackBar.open('Pet Cadastrado com Sucesso!', 'OK', {
                    duration: 2000,
                });
                _this.goTo('meus-pets');
            }, function (err) {
                _this.snackBar.open('Erro ao Cadastrar Pet', 'OK', {
                    duration: 2000,
                });
                _this.goTo('meus-pets');
            });
        }
        else {
            this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
                duration: 2000,
            });
        }
    };
    AddPetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-pet',
            template: __webpack_require__("./src/app/add-pet/add-pet.component.html"),
            styles: [__webpack_require__("./src/app/add-pet/add-pet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]])
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

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n      <h1 class=\"title\">Cadastrar Usuário Pessoa Física</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card>\r\n    <form id=\"add-pfisica\" name=\"add-pfisica\">\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.nome\" name=\"nome\" type=\"text\" matInput placeholder=\"Nome\" required>\r\n            <mat-error *ngIf=\"nome.invalid\">{{getNomeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.email\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n            <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.cpf\" [textMask]=\"{mask: cpfMask}\" name=\"cpf\" minlength=\"11\" type=\"text\" matInput placeholder=\"CPF\" required>\r\n            <mat-error *ngIf=\"cpf.invalid\">{{getCpfErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"pfisica.sexo\" name=\"sexo\" placeholder=\"Sexo\" required>\r\n              <mat-option *ngFor=\"let sexos of sexoArray\" [value]=\"sexos.value\">\r\n                {{ sexos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"sexo.invalid\">{{getSexoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.telefone\" [textMask]=\"{mask: celMask}\" name=\"telefone\" type=\"text\" matInput placeholder=\"Celular\"\r\n              required>\r\n              <mat-error *ngIf=\"telefone.invalid\">{{getTelefoneErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.cep\" [textMask]=\"{mask: cepMask}\" name=\"cep\" minlength=\"8\" type=\"text\" matInput placeholder=\"CEP\" required>\r\n            <mat-error *ngIf=\"cep.invalid\">{{getCepErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input id=\"estado\" [(ngModel)]=\"pfisica.estado\" [matAutocomplete]=\"autoStates\" name=\"estado\" type=\"text\" matInput placeholder=\"Estado\" (click)=\"emptyInput()\" (blur)=\"blurInStates()\" (keyup)=\"fillFiltredStates()\" required>\r\n            <mat-autocomplete #autoStates=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredStates\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"estado.invalid\">{{getEstadoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input id=\"cidade\" [(ngModel)]=\"pfisica.cidade\" name=\"cidade\" [matAutocomplete]=\"autoCities\" type=\"text\" matInput placeholder=\"Cidade\" (click)=\"blurInStates()\" (keyup)=\"fillFiltredCities()\" required>\r\n            <mat-autocomplete #autoCities=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredCities\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"cidade.invalid\">{{getCidadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.endereco\" name=\"endereco\" type=\"text\" matInput placeholder=\"Endereço\" required>\r\n            <mat-error *ngIf=\"endereco.invalid\">{{getEnderecoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.numero\" [textMask]=\"{mask: numMask}\" name=\"numero\" type=\"text\" matInput placeholder=\"Número\"\r\n              required>\r\n              <mat-error *ngIf=\"numero.invalid\">{{getNumeroErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.complemento\" name=\"complemento\" type=\"text\" matInput placeholder=\"Complemento\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pfisica.senha\" name=\"senha\" type=\"password\" matInput placeholder=\"Senha\" required>\r\n            <mat-error *ngIf=\"senha.invalid\">{{getSenhaErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"button-row row justify-content-center\">\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" form=\"add-pfisica\" class=\"w-100\" (click)=\"registerPf()\">Confirmar</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"goTo('login')\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-pfisica/add-pfisica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPfisicaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__p_fisica__ = __webpack_require__("./src/app/add-pfisica/p-fisica.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
var AddPfisicaComponent = /** @class */ (function () {
    function AddPfisicaComponent(httpClient, router, snackBar, appComponent) {
        this.httpClient = httpClient;
        this.router = router;
        this.snackBar = snackBar;
        this.appComponent = appComponent;
        this.filtredStates = {};
        this.citiesArrays = {};
        this.json = {};
        this.data = {};
        this.postData = {};
        this.cityStates = {};
        this.pfisica = new __WEBPACK_IMPORTED_MODULE_1__p_fisica__["a" /* PFisica */]();
        this.apiUrl = api_url + '/api/users/create';
        this.api_urlCityState = api_url + '/api/citystate';
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nome = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].email]);
        this.cpf = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(11)]);
        this.telefone = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.sexo = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cep = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(8)]);
        this.estado = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cidade = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.endereco = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.numero = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.completo = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.senha = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    AddPfisicaComponent.prototype.getNomeErrorMessage = function () {
        return this.nome.hasError('required') ? 'Você deve preencher seu nome' : '';
    };
    AddPfisicaComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'Preencha seu email' :
            this.email.hasError('email') ? 'Email incorreto' :
                '';
    };
    AddPfisicaComponent.prototype.getCpfErrorMessage = function () {
        return this.cpf.hasError('required') ? 'Preencha seu cpf' :
            this.cpf.hasError('minlength') ? 'Preencha o cpf corretamente' :
                '';
    };
    AddPfisicaComponent.prototype.getTelefoneErrorMessage = function () {
        return this.telefone.hasError('required') ? 'Preencha seu telefone' : '';
    };
    AddPfisicaComponent.prototype.getSexoErrorMessage = function () {
        return this.sexo.hasError('required') ? 'Preencha seu sexo' : '';
    };
    AddPfisicaComponent.prototype.getCepErrorMessage = function () {
        return this.cep.hasError('required') ? 'Preencha seu cep' :
            this.cep.hasError('minlength') ? 'Preencha o cep corretamente' :
                '';
    };
    AddPfisicaComponent.prototype.getEstadoErrorMessage = function () {
        return this.estado.hasError('required') ? 'Preencha seu estado' : '';
    };
    AddPfisicaComponent.prototype.getCidadeErrorMessage = function () {
        return this.cidade.hasError('required') ? 'Preencha seu cidade' : '';
    };
    AddPfisicaComponent.prototype.getEnderecoErrorMessage = function () {
        return this.endereco.hasError('required') ? 'Preencha seu endereço' : '';
    };
    AddPfisicaComponent.prototype.getNumeroErrorMessage = function () {
        return this.numero.hasError('required') ? 'Preencha seu numero' : '';
    };
    AddPfisicaComponent.prototype.getSenhaErrorMessage = function () {
        return this.senha.hasError('required') ? 'Preencha sua senha' : '';
    };
    AddPfisicaComponent.prototype.getCityState = function () {
        var _this = this;
        this.filtredStates = [];
        this.httpClient.get(this.api_urlCityState).subscribe(function (jsonStates) {
            _this.json = jsonStates;
            _this.cityStates = _this.json.estados;
            _this.cityStates.forEach(function (state) {
                _this.filtredStates.push(state.sigla);
            });
        });
    };
    AddPfisicaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        this.getCityState();
        this.sexoArray = [
            { value: 'Masculino', viewValue: 'Masculino' },
            { value: 'Feminino', viewValue: 'Feminino' }
        ];
    };
    AddPfisicaComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
    };
    AddPfisicaComponent.prototype.blurInStates = function () {
        if (!!this.pfisica.estado) {
            this.fillCitiesFromStates();
        }
    };
    AddPfisicaComponent.prototype.emptyInput = function () {
        if (this.pfisica.estado == '') {
            this.getCityState();
        }
    };
    AddPfisicaComponent.prototype.fillFiltredStates = function () {
        if (!!this.pfisica.estado) {
            this.fillCitiesFromStates();
        }
    };
    AddPfisicaComponent.prototype.fillCitiesFromStates = function () {
        var _this = this;
        this.filtredStates = [];
        this.citiesArrays = [];
        this.filtredCities = [];
        this.cityStates.forEach(function (state) {
            if (_this.pfisica.estado.toLowerCase() === state.sigla.slice(0, _this.pfisica.estado.length).toLowerCase()) {
                _this.filtredStates.push(state.sigla);
                _this.citiesArrays.push(state.cidades);
            }
        });
        this.citiesArrays.forEach(function (cities) {
            cities.forEach(function (city) {
                _this.filtredCities.push(city);
            });
        });
    };
    AddPfisicaComponent.prototype.fillFiltredCities = function () {
        var _this = this;
        this.filtredCities = [];
        if (!!this.pfisica.cidade) {
            this.citiesArrays.forEach(function (cities) {
                cities.forEach(function (city) {
                    if (_this.pfisica.cidade.toLowerCase() === city.slice(0, _this.pfisica.cidade.length).toLowerCase()) {
                        _this.filtredCities.push(city);
                    }
                });
            });
        }
    };
    AddPfisicaComponent.prototype.formIsValid = function () {
        return !!this.pfisica.email &&
            !!this.pfisica.senha &&
            !!this.pfisica.cpf &&
            !!this.pfisica.nome &&
            !!this.pfisica.sexo &&
            !!this.pfisica.data &&
            !!this.pfisica.telefone &&
            !!this.pfisica.cep &&
            !!this.pfisica.estado &&
            !!this.pfisica.cidade &&
            !!this.pfisica.endereco &&
            !!this.pfisica.numero &&
            !!this.pfisica.complemento;
    };
    AddPfisicaComponent.prototype.registerPf = function () {
        this.auxState = false;
        this.auxCity = false;
        if (!!this.cityStates) {
            this.searchStateAndCity();
            if (!this.auxState) {
                document.getElementById("estado").focus();
                this.snackBar.open('Estado não encontrado', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && !this.auxCity) {
                document.getElementById("cidade").focus();
                this.snackBar.open('Cidade não encontrada', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && this.auxCity) {
                this.submit();
            }
        }
    };
    AddPfisicaComponent.prototype.searchStateAndCity = function () {
        var _this = this;
        this.cityStates.forEach(function (state) {
            if (_this.pfisica.estado.toLowerCase() === state.sigla.toLowerCase() && _this.auxState == false) {
                _this.auxState = true;
                if (!!_this.citiesArrays) {
                    _this.citiesArrays.forEach(function (cities) {
                        cities.forEach(function (city) {
                            if (_this.pfisica.cidade.toLowerCase() === city.toLowerCase() && _this.auxCity == false) {
                                _this.auxCity = true;
                            }
                        });
                    });
                }
            }
        });
    };
    AddPfisicaComponent.prototype.submit = function () {
        var _this = this;
        if (this.formIsValid()) {
            this.removeMasks();
            this.postData = {
                nm_email_usuario: this.pfisica.email,
                cd_senha_usuario: this.pfisica.senha,
                nm_tipo_usuario: 'Pessoa Física',
                cd_cpf_usuario: this.pfisica.cpf,
                nm_usuario: this.pfisica.nome,
                nm_sexo_usuario: this.pfisica.sexo.trim(),
                cd_telefone_usuario: this.pfisica.telefone,
                cd_cep_usuario: this.pfisica.cep,
                nm_estado_usuario: this.pfisica.estado,
                nm_cidade_usuario: this.pfisica.cidade,
                nm_endereco_usuario: this.pfisica.endereco,
                cd_ip_usuario: null,
                cd_numero_endereco_usuario: this.pfisica.numero,
                ds_complemento_endereco_usuario: this.pfisica.complemento,
                ds_foto_usuario: null
            };
            this.postData.nm_sexo_usuario = this.postData.nm_sexo_usuario.trim();
            console.log('this.postDatathis.postData', this.postData);
            return this.httpClient.post(this.apiUrl, this.postData)
                .subscribe(function (res) {
                console.log('resres', res);
                _this.snackBar.open('Usuário Cadastrado com Sucesso!', 'OK', {
                    duration: 2000,
                });
                _this.goTo('login');
            }, function (err) {
                _this.snackBar.open('Erro ao Cadastrar Usuário', 'OK', {
                    duration: 2000,
                });
            });
        }
        else {
            this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
                duration: 2000,
            });
        }
    };
    AddPfisicaComponent.prototype.removeMasks = function () {
        this.removeCpfMask();
        this.removeCelMask();
        this.removeCepMask();
        this.removeNumeroMask();
    };
    AddPfisicaComponent.prototype.removeNumeroMask = function () {
        var numberHome = this.pfisica.numero.toString();
        var beforeNumberH = numberHome;
        for (var x = 0; x <= beforeNumberH.length; x++) {
            if (!parseInt(numberHome.slice(x, x + 1))) {
                numberHome.replace('_', '');
            }
        }
        this.pfisica.numero = parseInt(numberHome);
    };
    AddPfisicaComponent.prototype.removeCpfMask = function () {
        var cpf = this.pfisica.cpf.toString();
        var beforeCpf = cpf.replace('.', '');
        beforeCpf = beforeCpf.replace('.', '');
        beforeCpf = beforeCpf.replace('-', '');
        this.pfisica.cpf = parseInt(beforeCpf);
    };
    AddPfisicaComponent.prototype.removeCelMask = function () {
        var cel = this.pfisica.telefone.toString();
        var beforeCel = cel.replace('(', '');
        beforeCel = beforeCel.replace(')', '');
        beforeCel = beforeCel.replace(' ', '');
        beforeCel = beforeCel.replace('-', '');
        this.pfisica.telefone = parseInt(beforeCel);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]])
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

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n      <h1 class=\"title\">Cadastrar Usuário Pessoa Jurídica</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card>\r\n    <form id=\"add-pjuridica\" name=\"add-pjuridica\">\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.razaoSocial\" name=\"razaoSocial\" type=\"text\" matInput placeholder=\"Razão Social\" required>\r\n            <mat-error *ngIf=\"razaoSocial.invalid\">{{getRazaoSocialErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.email\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n            <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.cnpj\" [textMask]=\"{mask: cnpjMask}\" name=\"cnpj\" minlength=\"14\" type=\"text\" matInput placeholder=\"CNPJ\" required>\r\n            <mat-error *ngIf=\"cnpj.invalid\">{{getCnpjErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.telefone\" [textMask]=\"{mask: celMask}\" name=\"telefone\" type=\"text\" matInput placeholder=\"Celular\"\r\n              required>\r\n              <mat-error *ngIf=\"telefone.invalid\">{{getTelefoneErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.cep\" [textMask]=\"{mask: cepMask}\" name=\"cep\" minlength=\"8\" type=\"text\" matInput placeholder=\"CEP\" required>\r\n            <mat-error *ngIf=\"cep.invalid\">{{getCepErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input id=\"estado\" [(ngModel)]=\"pjuridica.estado\" [matAutocomplete]=\"autoStates\" name=\"estado\" type=\"text\" matInput placeholder=\"Estado\" (click)=\"emptyInput()\" (blur)=\"blurInStates()\" (keyup)=\"fillFiltredStates()\" required>\r\n            <mat-autocomplete #autoStates=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredStates\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"estado.invalid\">{{getEstadoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input id=\"cidade\"  [(ngModel)]=\"pjuridica.cidade\" name=\"cidade\" [matAutocomplete]=\"autoCities\" type=\"text\" matInput placeholder=\"Cidade\"  (click)=\"blurInStates()\" (keyup)=\"fillFiltredCities()\" required>\r\n            <mat-autocomplete #autoCities=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredCities\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"cidade.invalid\">{{getCidadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.endereco\" name=\"endereco\" type=\"text\" matInput placeholder=\"Endereço\" required>\r\n            <mat-error *ngIf=\"endereco.invalid\">{{getEnderecoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.numero\" [textMask]=\"{mask: numMask}\" name=\"numero\" type=\"text\" matInput placeholder=\"Número\"\r\n              required>\r\n              <mat-error *ngIf=\"numero.invalid\">{{getNumeroErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.complemento\" name=\"complemento\" type=\"text\" matInput placeholder=\"Complemento\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"pjuridica.senha\" name=\"senha\" type=\"password\" matInput placeholder=\"Senha\" required>\r\n            <mat-error *ngIf=\"senha.invalid\">{{getSenhaErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"button-row row justify-content-center\">\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" form=\"add-pjuridica\" class=\"w-100\" (click)=\"registerPj()\">Confirmar</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"goTo('login')\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-pjuridica/add-pjuridica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPjuridicaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__p_juridica__ = __webpack_require__("./src/app/add-pjuridica/p-juridica.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
var AddPjuridicaComponent = /** @class */ (function () {
    function AddPjuridicaComponent(httpClient, router, snackBar, appComponent) {
        this.httpClient = httpClient;
        this.router = router;
        this.snackBar = snackBar;
        this.appComponent = appComponent;
        this.filtredStates = {};
        this.citiesArrays = {};
        this.json = {};
        this.cityStates = {};
        this.data = {};
        this.postData = {};
        this.pjuridica = new __WEBPACK_IMPORTED_MODULE_1__p_juridica__["a" /* PJuridica */]();
        this.apiUrl = api_url + '/api/users/create';
        this.api_urlCityState = api_url + '/api/citystate';
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.razaoSocial = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].email]);
        this.cnpj = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(14)]);
        this.telefone = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cep = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(8)]);
        this.estado = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cidade = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.endereco = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.numero = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.completo = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.senha = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',
            /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    AddPjuridicaComponent.prototype.getRazaoSocialErrorMessage = function () {
        return this.razaoSocial.hasError('required') ? 'Preencha sua razão social' : '';
    };
    AddPjuridicaComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'Preencha seu email' :
            this.email.hasError('email') ? 'Email incorreto' :
                '';
    };
    AddPjuridicaComponent.prototype.getCnpjErrorMessage = function () {
        return this.cnpj.hasError('required') ? 'Preencha seu cnpj' :
            this.cnpj.hasError('minlength') ? 'Preencha corretamente o cnpj' :
                '';
    };
    AddPjuridicaComponent.prototype.getTelefoneErrorMessage = function () {
        return this.telefone.hasError('required') ? 'Preencha seu telefone' : '';
    };
    AddPjuridicaComponent.prototype.getCepErrorMessage = function () {
        return this.cep.hasError('required') ? 'Preencha seu cep' :
            this.cep.hasError('minlength') ? 'Preencha corretamente o cep' :
                '';
    };
    AddPjuridicaComponent.prototype.getEstadoErrorMessage = function () {
        return this.estado.hasError('required') ? 'Preencha seu estado' : '';
    };
    AddPjuridicaComponent.prototype.getCidadeErrorMessage = function () {
        return this.cidade.hasError('required') ? 'Preencha seu cidade' : '';
    };
    AddPjuridicaComponent.prototype.getEnderecoErrorMessage = function () {
        return this.endereco.hasError('required') ? 'Preencha seu endereço' : '';
    };
    AddPjuridicaComponent.prototype.getNumeroErrorMessage = function () {
        return this.numero.hasError('required') ? 'Preencha seu numero' : '';
    };
    AddPjuridicaComponent.prototype.getSenhaErrorMessage = function () {
        return this.senha.hasError('required') ? 'Preencha sua senha' : '';
    };
    AddPjuridicaComponent.prototype.getCityState = function () {
        var _this = this;
        this.filtredStates = [];
        this.httpClient.get(this.api_urlCityState).subscribe(function (jsonStates) {
            _this.json = jsonStates;
            _this.cityStates = _this.json.estados;
            _this.cityStates.forEach(function (state) {
                _this.filtredStates.push(state.sigla);
            });
        });
    };
    AddPjuridicaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        this.getCityState();
    };
    AddPjuridicaComponent.prototype.blurInStates = function () {
        if (!!this.pjuridica.estado) {
            this.fillCitiesFromStates();
        }
    };
    AddPjuridicaComponent.prototype.emptyInput = function () {
        if (this.pjuridica.estado == '') {
            this.getCityState();
        }
    };
    AddPjuridicaComponent.prototype.fillFiltredStates = function () {
        if (!!this.pjuridica.estado) {
            this.fillCitiesFromStates();
        }
    };
    AddPjuridicaComponent.prototype.fillCitiesFromStates = function () {
        var _this = this;
        this.filtredStates = [];
        this.citiesArrays = [];
        this.filtredCities = [];
        this.cityStates.forEach(function (state) {
            if (_this.pjuridica.estado.toLowerCase() === state.sigla.slice(0, _this.pjuridica.estado.length).toLowerCase()) {
                _this.filtredStates.push(state.sigla);
                _this.citiesArrays.push(state.cidades);
            }
        });
        this.citiesArrays.forEach(function (cities) {
            cities.forEach(function (city) {
                _this.filtredCities.push(city);
            });
        });
    };
    AddPjuridicaComponent.prototype.fillFiltredCities = function () {
        var _this = this;
        this.filtredCities = [];
        if (!!this.pjuridica.cidade) {
            this.citiesArrays.forEach(function (element) {
                element.forEach(function (element2) {
                    if (_this.pjuridica.cidade.toLowerCase() === element2.slice(0, _this.pjuridica.cidade.length).toLowerCase()) {
                        _this.filtredCities.push(element2);
                    }
                });
            });
        }
    };
    AddPjuridicaComponent.prototype.formIsValid = function () {
        return !!this.pjuridica.email &&
            !!this.pjuridica.senha &&
            !!this.pjuridica.cnpj &&
            !!this.pjuridica.razaoSocial &&
            !!this.pjuridica.telefone &&
            !!this.pjuridica.cep &&
            !!this.pjuridica.estado &&
            !!this.pjuridica.cidade &&
            !!this.pjuridica.endereco &&
            !!this.pjuridica.numero &&
            !!this.pjuridica.complemento;
    };
    AddPjuridicaComponent.prototype.registerPj = function () {
        this.auxState = false;
        this.auxCity = false;
        if (!!this.cityStates) {
            this.searchStateAndCity();
            if (!this.auxState) {
                document.getElementById("estado").focus();
                this.snackBar.open('Estado não encontrado', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && !this.auxCity) {
                document.getElementById("cidade").focus();
                this.snackBar.open('Cidade não encontrada', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && this.auxCity) {
                this.submit();
            }
        }
    };
    AddPjuridicaComponent.prototype.submit = function () {
        var _this = this;
        if (this.formIsValid()) {
            this.removeMasks();
            this.postData = {
                nm_email_usuario: this.pjuridica.email,
                cd_senha_usuario: this.pjuridica.senha,
                nm_tipo_usuario: 'Pessoa Jurídica',
                cd_cnpj_usuario: this.pjuridica.cnpj,
                nm_razao_social_usuario: this.pjuridica.razaoSocial,
                cd_telefone_usuario: this.pjuridica.telefone,
                cd_cep_usuario: this.pjuridica.cep,
                nm_estado_usuario: this.pjuridica.estado,
                nm_cidade_usuario: this.pjuridica.cidade,
                nm_endereco_usuario: this.pjuridica.endereco,
                cd_numero_endereco_usuario: this.pjuridica.numero,
                ds_complemento_endereco_usuario: this.pjuridica.complemento
            };
            return this.httpClient.post(this.apiUrl, this.postData)
                .subscribe(function (res) {
                console.log(res);
                _this.snackBar.open('Usuário Cadastrado com Sucesso!', 'OK', {
                    duration: 2000,
                });
                _this.goTo('login');
            }, function (err) {
                _this.snackBar.open('Erro ao Cadastrar Usuário', 'OK', {
                    duration: 2000,
                });
            });
        }
        else {
            this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
                duration: 2000,
            });
        }
    };
    AddPjuridicaComponent.prototype.searchStateAndCity = function () {
        var _this = this;
        this.cityStates.forEach(function (state) {
            if (_this.pjuridica.estado.toLowerCase() === state.sigla.toLowerCase() && _this.auxState == false) {
                _this.auxState = true;
                if (!!_this.citiesArrays) {
                    _this.citiesArrays.forEach(function (cities) {
                        cities.forEach(function (city) {
                            if (_this.pjuridica.cidade.toLowerCase() === city.toLowerCase() && _this.auxCity == false) {
                                _this.auxCity = true;
                            }
                        });
                    });
                }
            }
        });
    };
    AddPjuridicaComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
    };
    AddPjuridicaComponent.prototype.removeMasks = function () {
        this.removeCnpjMask();
        this.removeCelMask();
        this.removeCepMask();
        this.removeNumeroMask();
    };
    AddPjuridicaComponent.prototype.removeNumeroMask = function () {
        var numberHome = this.pjuridica.numero.toString();
        var beforeNumberH = numberHome;
        for (var x = 0; x <= beforeNumberH.length; x++) {
            if (!parseInt(numberHome.slice(x, x + 1))) {
                numberHome.replace('_', '');
            }
        }
        this.pjuridica.numero = parseInt(numberHome);
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
        var cel = this.pjuridica.telefone.toString();
        var beforeCel = cel.replace('(', '');
        beforeCel = beforeCel.replace(')', '');
        beforeCel = beforeCel.replace(' ', '');
        beforeCel = beforeCel.replace('-', '');
        this.pjuridica.telefone = parseInt(beforeCel);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_pet_edit_pet_component__ = __webpack_require__("./src/app/edit-pet/edit-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_usuario_edit_usuario_component__ = __webpack_require__("./src/app/edit-usuario/edit-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__add_fast_pet_add_fast_pet_component__ = __webpack_require__("./src/app/add-fast-pet/add-fast-pet.component.ts");
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
        path: 'add-fast-pet',
        component: __WEBPACK_IMPORTED_MODULE_15__add_fast_pet_add_fast_pet_component__["a" /* AddFastPetComponent */]
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
    },
    {
        path: 'edit-pet',
        component: __WEBPACK_IMPORTED_MODULE_13__edit_pet_edit_pet_component__["a" /* EditPetComponent */]
    },
    {
        path: 'edit-usuario',
        component: __WEBPACK_IMPORTED_MODULE_14__edit_usuario_edit_usuario_component__["a" /* EditUsuarioComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n\r\n.navmenu{\r\n  position: fixed;\r\n  z-index: 2;\r\n  -webkit-box-shadow: 0 1px 6px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);\r\n          box-shadow: 0 1px 6px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);\r\n  color: #ffffff;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.navmenu .title{\r\n  float: right;\r\n}\r\n\r\n.subnav{\r\n  position: fixed;\r\n  background: #f5f5f5;\r\n  color: #333333;\r\n  bottom: 0;\r\n  z-index: 2;\r\n  padding: 0px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24);\r\n          box-shadow: 0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24);\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.subnav.scrollUp {\r\n  -webkit-transform: translateY(60px);\r\n          transform: translateY(60px);\r\n  -webkit-transition: all .3s ease-in-out;\r\n  transition: all .3s ease-in-out;\r\n}\r\n\r\n.mat-toolbar-row{\r\n  padding: 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row .mat-button{\r\n  margin: 0px 0px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  min-width: 72px;\r\n}\r\n\r\n.subnav .mat-toolbar-row .mat-button{\r\n  padding: 8px 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row a{\r\n  padding: 0px 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row ul{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row li{\r\n  list-style: none;\r\n  max-height: 20px;\r\n}\r\n\r\n.mat-icon{\r\n  font-size: 22px;\r\n}\r\n\r\n.example-container {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\nul#sidenav-menu{\r\n  padding: 0px 60px 0px 0px;\r\n  margin: 0px;\r\n}\r\n\r\n#sidenav-menu li{\r\n  list-style: none;\r\n  padding: 15px 0px;\r\n  margin: 0px;\r\n}\r\n\r\n#sidenav-menu li .icon-menu{\r\n  color: #f2f2f2;\r\n  font-size: 18px;\r\n  margin-right: 10px;\r\n}\r\n\r\n#sidenav-menu li a{\r\n  margin: 0px;\r\n  color: #f2f2f2;\r\n  font-size: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\n.btn-fast-add{\r\n  position: fixed;\r\n  bottom: 80px;\r\n  right: 20px;\r\n  z-index: 2;\r\n}\r\n\r\n/*\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}*/\r\n\r\n.example-sidenav-content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 20px 10px;\r\n  background: #755DCA !important;\r\n}\r\n\r\n.loading-area {\r\n  border-radius: 50%;\r\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n          box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n  height: 40px;\r\n  width: 40px;\r\n  margin: auto;\r\n  top: 70px;\r\n  position: relative;\r\n}\r\n\r\n.spinner {\r\n  margin: auto;\r\n  top: 5px;\r\n}\r\n\r\n/* Responsive */\r\n\r\n@media only screen and (min-width: 400px){\r\n  .subnav .mat-toolbar-row .mat-button{\r\n    min-width: 83px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 340px){\r\n  .subnav .mat-toolbar-row .mat-button{\r\n    min-width: 64px;\r\n    font-size: 10px;\r\n  }\r\n  .mat-icon{\r\n    font-size: 16px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav #sidenav class=\"example-sidenav\">\r\n        <ul id=\"sidenav-menu\">\r\n          <li> <a href=\"\" (click)=\"logoff('login')\"><i class=\"fas fa-sign-out-alt icon-menu\"></i> Logoff</a></li>\r\n          <li *ngIf=\"mostrarMenu\"> <a routerLink=\"/edit-usuario\" [queryParams]=\"{id: mostrarId}\" (click)=\"sidenav.toggle()\"><i class=\"fas fa-pencil-alt icon-menu\"></i> Editar Perfil</a></li>\r\n          <!-- <li> <i class=\"fas fa-trash icon-menu\"></i> <a href=\"\"> Excluir Conta</a></li> -->\r\n        </ul>\r\n        </mat-sidenav>\r\n      <mat-sidenav-content>\r\n<mat-toolbar *ngIf=\"mostrarMenu\" class=\"navmenu\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <a mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon><i class=\"fas fa-bars\"></i></mat-icon>\r\n    </a>\r\n\r\n    <span class=\"nav-space\"></span>\r\n\r\n    <img class=\"nav-logo\" src=\"../assets/images/idot-logo-branca36.png\" alt=\"idot logo\">\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<div *ngIf=\"mostrarLoading\" class=\"loading-area\">\r\n  <mat-progress-spinner class=\"spinner\" strokeWidth=\"3\" diameter=\"30\" color=\"primary\" mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n<button *ngIf=\"mostrarButton\" class=\"btn-fast-add\" mat-mini-fab color=\"primary\" routerLink=\"/add-fast-pet\">\r\n  <mat-icon aria-label=\"Adicionar Pet Rapidamente\">add</mat-icon>\r\n</button>\r\n\r\n\r\n<mat-toolbar *ngIf=\"mostrarMenu\" class=\"subnav\">\r\n  <mat-toolbar-row>\r\n    <a mat-button routerLink=\"/home\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-home\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Home</span>\r\n        </li>\r\n      </ul>\r\n    </a>\r\n    <a mat-button routerLink=\"/meus-pets\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-paw\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Meus Pets</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/add-pet\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-plus\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Adicionar</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/favoritos\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-heart\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Favoritos</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/pesquisar\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-search\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Pesquisar</span>\r\n        </li>\r\n      </ul>\r\n    </a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n</mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
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





var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.mostrarMenu = false;
        this.mostrarButton = false;
        this.mostrarId = null;
        this.mostrarLoading = false;
        this.mostrarMenuEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mostrarButtonEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.idUsuario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.onload = function (event) {
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
        if ((!localStorage.getItem('token')) || (!sessionStorage.getItem('id')) || (this.mostrarMenu === false)) {
            this.logoff('login');
        }
        this.loginService.mostrarMenuEmitter.subscribe(function (mostrar) { return _this.mostrarMenu = mostrar; });
        this.loginService.mostrarButtonEmitter.subscribe(function (mostrarBtn) { return _this.mostrarButton = mostrarBtn; });
        this.loginService.idUsuario.subscribe(function (id) { return _this.mostrarId = id; });
        this.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
    };
    AppComponent.prototype.logoff = function (route) {
        this.router.navigate([route]);
        sessionStorage.clear();
        localStorage.clear();
        this.mostrarMenuEmitter.emit(false);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__meus_pets_modal_delete_pet_modal_delete_pet_component__ = __webpack_require__("./src/app/meus-pets/modal-delete-pet/modal-delete-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__edit_pet_edit_pet_component__ = __webpack_require__("./src/app/edit-pet/edit-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__edit_usuario_edit_usuario_component__ = __webpack_require__("./src/app/edit-usuario/edit-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_fast_pet_add_fast_pet_component__ = __webpack_require__("./src/app/add-fast-pet/add-fast-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__auth_auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__meus_pets_meus_pets__ = __webpack_require__("./src/app/meus-pets/meus-pets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__edit_pet_edit_pet__ = __webpack_require__("./src/app/edit-pet/edit-pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__edit_usuario_edit_usuario__ = __webpack_require__("./src/app/edit-usuario/edit-usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__add_fast_pet_add_fast_pet__ = __webpack_require__("./src/app/add-fast-pet/add-fast-pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_material_button_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/button-toggle.es5.js");
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
                __WEBPACK_IMPORTED_MODULE_20__meus_pets_modal_delete_pet_modal_delete_pet_component__["a" /* ModalDeletePetComponent */],
                __WEBPACK_IMPORTED_MODULE_37__auth_auth_component__["a" /* AuthComponent */],
                __WEBPACK_IMPORTED_MODULE_21__edit_pet_edit_pet_component__["a" /* EditPetComponent */],
                __WEBPACK_IMPORTED_MODULE_22__edit_usuario_edit_usuario_component__["a" /* EditUsuarioComponent */],
                __WEBPACK_IMPORTED_MODULE_23__add_fast_pet_add_fast_pet_component__["a" /* AddFastPetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_28__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_34__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_35__angular_material__["g" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_36_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_35__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_43__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_44__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].production })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_24__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_16__meus_pets_meus_pets_component__["a" /* MeusPetsComponent */], __WEBPACK_IMPORTED_MODULE_38__meus_pets_meus_pets__["a" /* MeusPets */], __WEBPACK_IMPORTED_MODULE_39__edit_pet_edit_pet__["a" /* EditPet */], __WEBPACK_IMPORTED_MODULE_40__edit_usuario_edit_usuario__["a" /* EditUsuario */], __WEBPACK_IMPORTED_MODULE_23__add_fast_pet_add_fast_pet_component__["a" /* AddFastPetComponent */], __WEBPACK_IMPORTED_MODULE_41__add_fast_pet_add_fast_pet__["a" /* AddFastPet */],
                {
                    provide: 'externalUrlRedirectResolver',
                    useValue: function (route, state) {
                        window.location.href = route.data.externalUrl;
                    }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_19__login_modal_add_p_modal_add_p_component__["a" /* ModalAddPComponent */], __WEBPACK_IMPORTED_MODULE_20__meus_pets_modal_delete_pet_modal_delete_pet_component__["a" /* ModalDeletePetComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  auth works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
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

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("./src/app/auth/auth.component.html"),
            styles: [__webpack_require__("./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
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

/***/ "./src/app/edit-pet/edit-pet.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-card{\r\n  padding-top: 0px !important;\r\n}\r\n\r\n.pet-form{\r\n  border-bottom: 1px solid #ccc;\r\n  padding: 20px 0px\r\n}\r\n\r\n.pet-sub-form{\r\n  padding-top: 10px;\r\n}\r\n\r\n.col-3{\r\n  padding-left: 10px;\r\n}\r\n\r\nh6{\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  padding-top: 17px !important;\r\n  margin: 0px;\r\n  vertical-align: middle;\r\n  color: #755DCA;\r\n}\r\n\r\n.checkbox-align {\r\n  padding: .1375em 0 !important;\r\n  border-top: .84375em solid transparent !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Editando Pet - {{editPet.nm_animal}} </h1>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card>\r\n\r\n    <form id=\"edit-pet\" name=\"edit-pet\">\r\n\r\n      <div class=\"row pet-form\">\r\n        <div class=\"col-4\">\r\n          <button mat-fab color=\"primary\" (click)='imgFileInput.click()'>\r\n            <mat-icon aria-label=\"Tirar Foto\">add_a_photo</mat-icon>\r\n            <input hidden type=\"file\" accept=\"image/*\" id=\"imgupload\" capture=\"camera\" #imgFileInput />\r\n          </button>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editPet.nm_animal\" name=\"nome\" matInput placeholder=\"Nome\" required>\r\n            <mat-error *ngIf=\"nome.invalid\">{{getNomeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row pet-sub-form\">\r\n        <div class=\"col-4\"><h6>Informações</h6></div>\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editPet.cd_idade_animal\" name=\"idade\" matInput placeholder=\"Idade\" pattern=\"[0-9]\" max-length=\"2\" required>\r\n            <mat-error *ngIf=\"idade.invalid\">{{getIdadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"editPet.nm_idade_animal\" name=\"text_idade\" placeholder=\"Meses\" required>\r\n              <mat-option *ngFor=\"let idades of idadeArray\" [value]=\"idades.value\">\r\n                {{ idades.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"text_idade.invalid\">{{getTextIdadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"editPet.nm_sexo_animal\" name=\"sexo\" placeholder=\"Sexo\" required>\r\n              <mat-option *ngFor=\"let sexos of sexoArray\" [value]=\"sexos.value\">\r\n                {{ sexos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"sexo.invalid\">{{getSexoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"editPet.nm_tamanho_animal\" name=\"tamanho\" placeholder=\"Tamanho\" required>\r\n              <mat-option *ngFor=\"let tamanhos of tamanhoArray\" [value]=\"tamanhos.value\">\r\n                {{ tamanhos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"tamanho.invalid\">{{getTamanhoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editPet.nm_cor_animal\" name=\"cor\" matInput placeholder=\"Cor\" required>\r\n            <mat-error *ngIf=\"cor.invalid\">{{getCorErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"editPet.cd_especie_fk\" name=\"especie\" placeholder=\"Espécie\" required>\r\n              <mat-option *ngFor=\"let especie of especies\" [value]=\"especie.id\">\r\n                {{ especie.nm_especie }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"especie.invalid\">{{getEspecieErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"editPet.cd_raca_fk\" name=\"raca\" placeholder=\"Raça\" required>\r\n              <mat-option *ngFor=\"let raca of racas\" [value]=\"raca.id\">\r\n                {{ raca.nm_raca }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"raca.invalid\">{{getRacaErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\">\r\n          <div class=\"checkbox-align\">\r\n            <mat-checkbox [(ngModel)]=\"editPet.ic_deficiencia_animal\" name=\"deficiencia\" color=\"primary\">Há alguma deficiência?</mat-checkbox>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row pet-form\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-8\" *ngIf=\"!!editPet.ic_deficiencia_animal\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"editPet.ds_deficiencia_animal\" name=\"ds_deficiencia\" matInput placeholder=\"Qual?\">\r\n            </mat-form-field>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <div class=\"button-submit-row row justify-content-center\">\r\n          <button mat-raised-button form=\"edit-pet\" type=\"submit\" color=\"primary\" class=\"w-50\" (click)=\"updatePet('/update')\">Confirmar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n  </mat-card>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/edit-pet/edit-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_pet__ = __webpack_require__("./src/app/edit-pet/edit-pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
var EditPetComponent = /** @class */ (function () {
    function EditPetComponent(httpClient, editPet, router, route, snackBar, appComponent) {
        this.httpClient = httpClient;
        this.editPet = editPet;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.appComponent = appComponent;
        this.postData = {};
        this.editpet = new __WEBPACK_IMPORTED_MODULE_1__edit_pet__["a" /* EditPet */]();
        this.apiUrl = api_url;
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dataPets = {};
        this.dataRacas = {};
        this.elementData = {};
        this.dataEspecies = {};
        this.dataUsuarios = {};
        this.nome = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.idade = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.text_idade = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.sexo = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.tamanho = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cor = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.raca = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.especie = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.id = this.route.snapshot.queryParams['id'];
    }
    EditPetComponent.prototype.getNomeErrorMessage = function () {
        return this.nome.hasError('required') ? 'Preencha o nome do pet' : '';
    };
    EditPetComponent.prototype.getIdadeErrorMessage = function () {
        return this.idade.hasError('required') ? 'Preencha a idade do pet' : '';
    };
    EditPetComponent.prototype.getTextIdadeErrorMessage = function () {
        return this.text_idade.hasError('required') ? 'Preencha o complemento da idade do pet' : '';
    };
    EditPetComponent.prototype.getSexoErrorMessage = function () {
        return this.sexo.hasError('required') ? 'Preencha o sexo do pet' : '';
    };
    EditPetComponent.prototype.getTamanhoErrorMessage = function () {
        return this.tamanho.hasError('required') ? 'Preencha o tamanho do pet' : '';
    };
    EditPetComponent.prototype.getCorErrorMessage = function () {
        return this.cor.hasError('required') ? 'Preencha a cor do pet' : '';
    };
    EditPetComponent.prototype.getRacaErrorMessage = function () {
        return this.raca.hasError('required') ? 'Preencha a raça do pet' : '';
    };
    EditPetComponent.prototype.getEspecieErrorMessage = function () {
        return this.especie.hasError('required') ? 'Preencha a espécie do pet' : '';
    };
    EditPetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editPet.cd_raca_fk = 1;
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        document.querySelector('#imgupload').addEventListener('change', function () {
            var fotoAnimal;
            var filesSelected = document.getElementById('imgupload').files;
            if (filesSelected.length > 0) {
                var fileToLoad = filesSelected[0];
                var fileReader = new FileReader();
                fileReader.onload = function (fileLoadEvent) {
                    var base64value = event.target;
                    document.getElementById('imgupload').setAttribute('base64-value', base64value.result);
                };
                fileReader.readAsDataURL(fileToLoad);
            }
        });
        this.sexoArray = [
            { value: 'Macho', viewValue: 'Macho' },
            { value: 'Femêa', viewValue: 'Femêa' }
        ];
        this.idadeArray = [
            { value: 'Mes(es)', viewValue: 'Mes(es)' },
            { value: 'Ano(s)', viewValue: 'Ano(s)' }
        ];
        this.tamanhoArray = [
            { value: 'Pequeno', viewValue: 'Pequeno' },
            { value: 'Médio', viewValue: 'Médio' },
            { value: 'Grande', viewValue: 'Grande' }
        ];
        this.getDataPet();
    };
    EditPetComponent.prototype.getRacas = function (url) {
        var _this = this;
        this.httpClient.get(api_url + url).subscribe(function (racas) {
            _this.dataRacas = racas;
            _this.racas = _this.dataRacas.payload;
        });
    };
    EditPetComponent.prototype.getEspecies = function (url) {
        var _this = this;
        this.httpClient.get(api_url + url).subscribe(function (especies) {
            _this.dataEspecies = especies;
            _this.especies = _this.dataEspecies.payload;
            _this.getRacas('/api/racas/all');
        });
    };
    EditPetComponent.prototype.getDataPet = function () {
        var _this = this;
        this.apiUrl = this.apiUrl + '/api/animals/' + this.id;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(this.apiUrl, { headers: headers }).subscribe(function (pets) {
            _this.getEspecies('/api/especies/all');
            _this.dataPets = pets;
            _this.editPet = _this.dataPets.payload;
            console.log(_this.editPet);
            _this.editPet.cd_especie_fk = _this.dataPets.payload.Especie.id;
            _this.editPet.cd_raca_fk = _this.dataPets.payload.Raca.id;
            console.log('this.editPet -->', _this.editPet);
        });
    };
    EditPetComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
    };
    EditPetComponent.prototype.formIsValid = function () {
        return !!this.editPet.cd_idade_animal &&
            !!this.editPet.nm_animal &&
            !!this.editPet.nm_idade_animal &&
            !!this.editPet.nm_sexo_animal &&
            !!this.editPet.nm_tamanho_animal &&
            !!this.editPet.nm_cor_animal &&
            !!this.editPet.cd_especie_fk &&
            !!this.editPet.cd_raca_fk;
    };
    EditPetComponent.prototype.updatePet = function (URL) {
        var _this = this;
        if (this.formIsValid()) {
            var userToken = localStorage.getItem('token');
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
            var fotobase64 = document.getElementById('imgupload').getAttribute('base64-value');
            if (!fotobase64) {
                fotobase64 = '../../assets/images/ft-pet.png';
            }
            this.postData = {
                nm_animal: this.editPet.nm_animal,
                cd_idade_animal: this.editPet.cd_idade_animal,
                nm_idade_animal: this.editPet.nm_idade_animal,
                nm_cor_animal: this.editPet.nm_cor_animal,
                nm_sexo_animal: this.editPet.nm_sexo_animal,
                nm_tamanho_animal: this.editPet.nm_tamanho_animal,
                ic_deficiencia_animal: this.editPet.ic_deficiencia_animal,
                ds_deficiencia_animal: this.editPet.ds_deficiencia_animal,
                ds_foto_animal: fotobase64,
                cd_raca_fk: this.editPet.cd_raca_fk,
                cd_usuario_fk: localStorage.getItem('id'),
                cd_especie_fk: this.editPet.cd_especie_fk
            };
            this.httpClient.put(this.apiUrl + URL, this.postData, { headers: headers })
                .subscribe(function (res) {
                _this.snackBar.open('Pet Editado com Sucesso!', 'OK', {
                    duration: 2000,
                });
                _this.goTo('meus-pets');
            }, function (err) {
                _this.snackBar.open('Erro ao Editar Pet', 'OK', {
                    duration: 2000,
                });
                _this.goTo('meus-pets');
            });
        }
        else {
            this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
                duration: 2000,
            });
        }
    };
    EditPetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-pet',
            template: __webpack_require__("./src/app/edit-pet/edit-pet.component.html"),
            styles: [__webpack_require__("./src/app/edit-pet/edit-pet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__edit_pet__["a" /* EditPet */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]])
    ], EditPetComponent);
    return EditPetComponent;
}());



/***/ }),

/***/ "./src/app/edit-pet/edit-pet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPet; });
var EditPet = /** @class */ (function () {
    function EditPet() {
    }
    return EditPet;
}());



/***/ }),

/***/ "./src/app/edit-usuario/edit-usuario.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-usuario/edit-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid animated fadeIn\">\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n      <h1 *ngIf=\"!tipoFisico\" class=\"title\">Editando Usuário - {{editUsuario.nm_usuario}}</h1>\r\n      <h1 *ngIf=\"!tipoJuridico\" class=\"title\">Editando Usuário - {{editUsuario.nm_razao_social_usuario}}</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card>\r\n    <form *ngIf=\"!tipoFisico\" id=\"usuarioFisico\" name=\"usuarioFisico\">\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.nm_usuario\" name=\"nome\" type=\"text\" matInput placeholder=\"Nome\" required>\r\n            <mat-error *ngIf=\"nome.invalid\">{{getNomeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.nm_email_usuario\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n            <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_cpf_usuario\" [textMask]=\"{mask: cpfMask}\" name=\"cpf\" minlength=\"11\" type=\"text\" matInput placeholder=\"CPF\" required>\r\n            <mat-error *ngIf=\"cpf.invalid\">{{getCpfErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"editUsuario.nm_sexo_usuario\" name=\"sexo\" placeholder=\"Sexo\" required>\r\n              <mat-option *ngFor=\"let sexos of sexoArray\" [value]=\"sexos.value\">\r\n                {{ sexos.viewValue }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"sexo.invalid\">{{getSexoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_telefone_usuario\" [textMask]=\"{mask: celMask}\" name=\"telefone\" type=\"text\" matInput placeholder=\"Celular\" required>\r\n            <mat-error *ngIf=\"senha.telefone\">{{getTelefoneErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_cep_usuario\" [textMask]=\"{mask: cepMask}\" name=\"cep\" minlength=\"8\" type=\"text\" matInput placeholder=\"CEP\" required>\r\n            <mat-error *ngIf=\"cep.invalid\">{{getCepErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input id=\"estado\" [(ngModel)]=\"editUsuario.nm_estado_usuario\" [matAutocomplete]=\"autoStates\" name=\"estado\" type=\"text\" matInput placeholder=\"Estado\" (click)=\"emptyInput()\" (blur)=\"blurInStates()\" (keyup)=\"fillFiltredStates()\" required>\r\n            <mat-autocomplete #autoStates=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredStates\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"estado.invalid\">{{getEstadoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input id=\"cidade\" [(ngModel)]=\"editUsuario.nm_cidade_usuario\" name=\"cidade\" [matAutocomplete]=\"autoCities\" type=\"text\" matInput placeholder=\"Cidade\" (click)=\"blurInStates()\" (keyup)=\"fillFiltredCities()\" required>\r\n            <mat-autocomplete #autoCities=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredCities\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"cidade.invalid\">{{getCidadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.nm_endereco_usuario\" name=\"endereco\" type=\"text\" matInput placeholder=\"Endereço\" required>\r\n            <mat-error *ngIf=\"endereco.invalid\">{{getEnderecoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_numero_endereco_usuario\" [textMask]=\"{mask: numMask}\" name=\"numero\" type=\"text\" matInput placeholder=\"Número\" required>\r\n            <mat-error *ngIf=\"numero.invalid\">{{getNumeroErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.ds_complemento_endereco_usuario\" name=\"complemento\" type=\"text\" matInput placeholder=\"Complemento\">\r\n            <mat-error *ngIf=\"endereco.invalid\">{{getEnderecoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_senha_usuario\" name=\"senha\" type=\"password\" matInput placeholder=\"Senha\" required>\r\n            <mat-error *ngIf=\"senha.invalid\">{{getSenhaErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"button-row row justify-content-center\">\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" form=\"usuarioFisico\" class=\"w-100\" (click)=\"registerPf()\">Confirmar</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"goTo('home')\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <form *ngIf=\"!tipoJuridico\" id=\"usuarioJuridico\" name=\"usuarioJuridico\">\r\n\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.nm_razao_social_usuario\" name=\"razaoSocial\" type=\"text\" matInput placeholder=\"Razão Social\" required>\r\n            <mat-error *ngIf=\"razaoSocial.invalid\">{{getRazaoSocialErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.nm_email_usuario\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n            <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_cnpj_usuario\" [textMask]=\"{mask: cnpjMask}\" name=\"cnpj\" minlength=\"14\" type=\"text\" matInput placeholder=\"CNPJ\" required>\r\n            <mat-error *ngIf=\"cnpj.invalid\">{{getCnpjErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_telefone_usuario\" [textMask]=\"{mask: celMask}\" name=\"telefone\" type=\"text\" matInput placeholder=\"Celular\"\r\n              required>\r\n              <mat-error *ngIf=\"telefone.invalid\">{{getTelefoneErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_cep_usuario\" [textMask]=\"{mask: cepMask}\" name=\"cep\" minlength=\"8\" type=\"text\" matInput placeholder=\"CEP\" required>\r\n            <mat-error *ngIf=\"cep.invalid\">{{getCepErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input id=\"estado\" [(ngModel)]=\"editUsuario.nm_estado_usuario\" [matAutocomplete]=\"autoStates\" name=\"estado\" type=\"text\" matInput placeholder=\"Estado\" (click)=\"emptyInput()\" (blur)=\"blurInStates()\" (keyup)=\"fillFiltredStates()\" required>\r\n            <mat-autocomplete #autoStates=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredStates\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"estado.invalid\">{{getEstadoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <input id=\"cidade\" [(ngModel)]=\"editUsuario.nm_cidade_usuario\" name=\"cidade\" [matAutocomplete]=\"autoCities\" type=\"text\" matInput placeholder=\"Cidade\" (click)=\"blurInStates()\" (keyup)=\"fillFiltredCities()\" required>\r\n            <mat-autocomplete #autoCities=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let option of filtredCities\" [value]=\"option\">\r\n                {{ option }}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n            <mat-error *ngIf=\"cidade.invalid\">{{getCidadeErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.nm_endereco_usuario\" name=\"endereco\" type=\"text\" matInput placeholder=\"Endereço\" required>\r\n            <mat-error *ngIf=\"endereco.invalid\">{{getEnderecoErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-4\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_numero_endereco_usuario\" [textMask]=\"{mask: numMask}\" name=\"numero\" type=\"text\" matInput placeholder=\"Número\"\r\n              required>\r\n              <mat-error *ngIf=\"numero.invalid\">{{getNumeroErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-8\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.ds_complemento_endereco_usuario\" name=\"complemento\" type=\"text\" matInput placeholder=\"Complemento\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"editUsuario.cd_senha_usuario\" name=\"senha\" type=\"password\" matInput placeholder=\"Senha\" required>\r\n            <mat-error *ngIf=\"senha.invalid\">{{getSenhaErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"button-row row justify-content-center\">\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button type=\"submit\" color=\"primary\" form=\"usuarioJuridico\" class=\"w-100\" (click)=\"registerJr()\">Confirmar</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button mat-raised-button color=\"primary\" class=\"w-100\" (click)=\"goTo('home')\">Cancelar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-usuario/edit-usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUsuarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_usuario__ = __webpack_require__("./src/app/edit-usuario/edit-usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
var EditUsuarioComponent = /** @class */ (function () {
    function EditUsuarioComponent(httpClient, editUsuario, router, route, snackBar, appComponent) {
        this.httpClient = httpClient;
        this.editUsuario = editUsuario;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.appComponent = appComponent;
        this.apiUrl = api_url;
        this.filtredStates = {};
        this.citiesArrays = {};
        this.json = {};
        this.cityStates = [];
        this.api_urlCityState = api_url + '/api/citystate';
        this.dataUsuarios = {};
        this.postData = {};
        this.editusuario = new __WEBPACK_IMPORTED_MODULE_1__edit_usuario__["a" /* EditUsuario */]();
        this.tipoJuridicoEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tipoFisicoEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tipoJuridico = false;
        this.tipoFisico = false;
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nome = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.razaoSocial = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].email]);
        this.cpf = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(11)]);
        this.cnpj = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(13)]);
        this.telefone = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.sexo = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cep = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(8)]);
        this.estado = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.cidade = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.endereco = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.numero = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.completo = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.senha = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required]);
        this.id = this.route.snapshot.queryParams['id'];
        this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }
    EditUsuarioComponent.prototype.getNomeErrorMessage = function () {
        return this.nome.hasError('required') ? 'Você deve preencher seu nome' : '';
    };
    EditUsuarioComponent.prototype.getRazaoSocialErrorMessage = function () {
        return this.razaoSocial.hasError('required') ? 'Você deve preencher sua razão social' : '';
    };
    EditUsuarioComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'Preencha seu email' :
            this.email.hasError('email') ? 'Email incorreto' :
                '';
    };
    EditUsuarioComponent.prototype.getCpfErrorMessage = function () {
        return this.cpf.hasError('required') ? 'Preencha seu cpf' :
            this.cpf.hasError('minlength') ? 'Preencha o cpf corretamente' :
                '';
    };
    EditUsuarioComponent.prototype.getCnpjErrorMessage = function () {
        return this.cnpj.hasError('required') ? 'Preencha seu cnpj' :
            this.cnpj.hasError('minlength') ? 'Preencha o cnpj corretamente' :
                '';
    };
    EditUsuarioComponent.prototype.getTelefoneErrorMessage = function () {
        return this.telefone.hasError('required') ? 'Preencha seu telefone' : '';
    };
    EditUsuarioComponent.prototype.getSexoErrorMessage = function () {
        return this.sexo.hasError('required') ? 'Preencha seu sexo' : '';
    };
    EditUsuarioComponent.prototype.getCepErrorMessage = function () {
        return this.cep.hasError('required') ? 'Preencha seu cep' :
            this.cep.hasError('minlength') ? 'Preencha o cep corretamente' :
                '';
    };
    EditUsuarioComponent.prototype.getEstadoErrorMessage = function () {
        return this.estado.hasError('required') ? 'Preencha seu estado' : '';
    };
    EditUsuarioComponent.prototype.getCidadeErrorMessage = function () {
        return this.cidade.hasError('required') ? 'Preencha seu cidade' : '';
    };
    EditUsuarioComponent.prototype.getEnderecoErrorMessage = function () {
        return this.endereco.hasError('required') ? 'Preencha seu endereço' : '';
    };
    EditUsuarioComponent.prototype.getNumeroErrorMessage = function () {
        return this.numero.hasError('required') ? 'Preencha seu numero' : '';
    };
    EditUsuarioComponent.prototype.getSenhaErrorMessage = function () {
        return this.senha.hasError('required') ? 'Preencha sua senha' : '';
    };
    EditUsuarioComponent.prototype.getCityState = function () {
        var _this = this;
        this.filtredStates = [];
        this.httpClient.get(this.api_urlCityState).subscribe(function (jsonStates) {
            _this.json = jsonStates;
            _this.cityStates = _this.json.estados;
            _this.cityStates.forEach(function (state) {
                _this.filtredStates.push(state.sigla);
            });
        });
    };
    EditUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        this.sexoArray = [
            { value: 'Masculino', viewValue: 'Masculino' },
            { value: 'Feminino', viewValue: 'Feminino' }
        ];
        this.getDataUsuario();
    };
    EditUsuarioComponent.prototype.getDataUsuario = function () {
        var _this = this;
        this.apiUrl = this.apiUrl + '/api/users/' + this.id;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(this.apiUrl, { headers: headers }).subscribe(function (pets) {
            _this.dataUsuarios = pets;
            _this.editUsuario = _this.dataUsuarios.payload;
        });
        if (this.editUsuario.nm_tipo_usuario === 'Pessoa Física') {
            this.tipoFisicoEmitter.subscribe(function (tipoUsuario) { return _this.tipoFisico = tipoUsuario; });
            this.tipoFisicoEmitter.emit(true);
        }
        else {
            this.tipoJuridicoEmitter.subscribe(function (tipoUsuario) { return _this.tipoJuridico = tipoUsuario; });
            this.tipoJuridicoEmitter.emit(true);
        }
    };
    EditUsuarioComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
    };
    EditUsuarioComponent.prototype.blurInStates = function () {
        if (!!this.editUsuario.nm_estado_usuario) {
            this.fillCitiesFromStates();
        }
    };
    EditUsuarioComponent.prototype.emptyInput = function () {
        if (this.editUsuario.nm_estado_usuario == '') {
            this.getCityState();
        }
    };
    EditUsuarioComponent.prototype.fillFiltredStates = function () {
        if (!!this.editUsuario.nm_estado_usuario) {
            this.fillCitiesFromStates();
        }
    };
    EditUsuarioComponent.prototype.fillCitiesFromStates = function () {
        var _this = this;
        console.log(this);
        this.filtredStates = [];
        this.citiesArrays = [];
        this.filtredCities = [];
        this.cityStates.forEach(function (state) {
            if (_this.editUsuario.nm_estado_usuario.toLowerCase() === state.sigla.slice(0, _this.editUsuario.nm_estado_usuario.length).toLowerCase()) {
                _this.filtredStates.push(state.sigla);
                _this.citiesArrays.push(state.cidades);
            }
        });
        this.citiesArrays.forEach(function (cities) {
            cities.forEach(function (city) {
                _this.filtredCities.push(city);
            });
        });
    };
    EditUsuarioComponent.prototype.fillFiltredCities = function () {
        var _this = this;
        this.filtredCities = [];
        if (!!this.editUsuario.nm_cidade_usuario) {
            this.citiesArrays.forEach(function (cities) {
                cities.forEach(function (city) {
                    if (_this.editUsuario.nm_cidade_usuario.toLowerCase() === city.slice(0, _this.editUsuario.nm_cidade_usuario.length).toLowerCase()) {
                        _this.filtredCities.push(city);
                    }
                });
            });
        }
    };
    EditUsuarioComponent.prototype.registerPf = function () {
        this.auxState = false;
        this.auxCity = false;
        if (!!this.cityStates) {
            this.searchStateAndCity();
            if (!this.auxState) {
                document.getElementById("estado").focus();
                this.snackBar.open('Estado não encontrado', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && !this.auxCity) {
                document.getElementById("cidade").focus();
                this.snackBar.open('Cidade não encontrada', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && this.auxCity) {
                this.updateUsuarioFisico('/update');
            }
        }
    };
    EditUsuarioComponent.prototype.registerJr = function () {
        this.auxState = false;
        this.auxCity = false;
        if (!!this.cityStates) {
            this.searchStateAndCity();
            if (!this.auxState) {
                document.getElementById("estado").focus();
                this.snackBar.open('Estado não encontrado', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && !this.auxCity) {
                document.getElementById("cidade").focus();
                this.snackBar.open('Cidade não encontrada', 'OK', {
                    duration: 2000,
                });
            }
            else if (this.auxState && this.auxCity) {
                this.updateUsuarioJuridico('/update');
            }
        }
    };
    EditUsuarioComponent.prototype.searchStateAndCity = function () {
        var _this = this;
        this.cityStates.forEach(function (state) {
            if (_this.editUsuario.nm_estado_usuario.toLowerCase() === state.sigla.toLowerCase() && _this.auxState == false) {
                _this.auxState = true;
                if (!!_this.citiesArrays) {
                    _this.citiesArrays.forEach(function (cities) {
                        cities.forEach(function (city) {
                            if (_this.editUsuario.nm_cidade_usuario.toLowerCase() === city.toLowerCase() && _this.auxCity == false) {
                                _this.auxCity = true;
                            }
                        });
                    });
                }
            }
        });
    };
    EditUsuarioComponent.prototype.formIsValidFisico = function () {
        return !!this.editUsuario.nm_email_usuario &&
            !!this.editUsuario.cd_senha_usuario &&
            !!this.editUsuario.cd_cpf_usuario &&
            !!this.editUsuario.nm_usuario &&
            !!this.editUsuario.nm_sexo_usuario &&
            !!this.editUsuario.cd_telefone_usuario &&
            !!this.editUsuario.cd_cep_usuario &&
            !!this.editUsuario.nm_estado_usuario &&
            !!this.editUsuario.nm_cidade_usuario &&
            !!this.editUsuario.nm_endereco_usuario &&
            !!this.editUsuario.cd_numero_endereco_usuario &&
            !!this.editUsuario.ds_complemento_endereco_usuario;
    };
    EditUsuarioComponent.prototype.updateUsuarioFisico = function (URL) {
        //if (this.formIsValidFisico()) {
        var _this = this;
        this.removeMasksFisico();
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.postData = {
            nm_usuario: this.editUsuario.nm_usuario,
            nm_email_usuario: this.editUsuario.nm_email_usuario,
            cd_cpf_usuario: this.editUsuario.cd_cpf_usuario,
            nm_sexo_usuario: this.editUsuario.nm_sexo_usuario,
            cd_telefone_usuario: this.editUsuario.cd_telefone_usuario,
            cd_cep_usuario: this.editUsuario.cd_cep_usuario,
            nm_estado_usuario: this.editUsuario.nm_estado_usuario,
            nm_cidade_usuario: this.editUsuario.nm_cidade_usuario,
            nm_endereco_usuario: this.editUsuario.nm_endereco_usuario,
            cd_numero_endereco_usuario: this.editUsuario.cd_numero_endereco_usuario,
            ds_complemento_endereco_usuario: this.editUsuario.ds_complemento_endereco_usuario,
            cd_senha_usuario: this.editUsuario.cd_senha_usuario,
        };
        this.httpClient.put(this.apiUrl + URL, this.postData, { headers: headers })
            .subscribe(function (res) {
            _this.snackBar.open('Usuário Editado com Sucesso!', 'OK', {
                duration: 2000,
            });
            _this.goTo('home');
        }, function (err) {
            _this.snackBar.open('Erro ao Editar o Usuário', 'OK', {
                duration: 2000,
            });
            _this.goTo('home');
        });
        /*} else {
          this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
            duration: 2000,
          });
        }*/
    };
    EditUsuarioComponent.prototype.formIsValidJuridico = function () {
        return !!this.editUsuario.nm_email_usuario &&
            !!this.editUsuario.cd_senha_usuario &&
            !!this.editUsuario.cd_cnpj_usuario &&
            !!this.editUsuario.nm_razao_social_usuario &&
            !!this.editUsuario.cd_telefone_usuario &&
            !!this.editUsuario.cd_cep_usuario &&
            !!this.editUsuario.nm_estado_usuario &&
            !!this.editUsuario.nm_cidade_usuario &&
            !!this.editUsuario.nm_endereco_usuario &&
            !!this.editUsuario.cd_numero_endereco_usuario &&
            !!this.editUsuario.ds_complemento_endereco_usuario;
    };
    EditUsuarioComponent.prototype.updateUsuarioJuridico = function (URL) {
        //if (this.formIsValidJuridico()) {
        var _this = this;
        this.removeMasksJuridico();
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.postData = {
            nm_razao_social_usuario: this.editUsuario.nm_razao_social_usuario,
            nm_email_usuario: this.editUsuario.nm_email_usuario,
            cd_cnpj_usuario: this.editUsuario.cd_cnpj_usuario,
            cd_telefone_usuario: this.editUsuario.cd_telefone_usuario,
            cd_cep_usuario: this.editUsuario.cd_cep_usuario,
            nm_estado_usuario: this.editUsuario.nm_estado_usuario,
            nm_cidade_usuario: this.editUsuario.nm_cidade_usuario,
            nm_endereco_usuario: this.editUsuario.nm_endereco_usuario,
            cd_numero_endereco_usuario: this.editUsuario.cd_numero_endereco_usuario,
            ds_complemento_endereco_usuario: this.editUsuario.ds_complemento_endereco_usuario,
            cd_senha_usuario: this.editUsuario.cd_senha_usuario
        };
        this.httpClient.put(this.apiUrl + URL, this.postData, { headers: headers })
            .subscribe(function (res) {
            _this.snackBar.open('Usuário Editado com Sucesso!', 'OK', {
                duration: 2000,
            });
            _this.goTo('meus-pets');
        }, function (err) {
            _this.snackBar.open('Erro ao Editar o Usuário', 'OK', {
                duration: 2000,
            });
            _this.goTo('home');
        });
        /*} else {
          this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
            duration: 2000,
          });
        }*/
    };
    EditUsuarioComponent.prototype.removeMasksFisico = function () {
        this.removeCpfMask();
        this.removeCelMask();
        this.removeCepMask();
        this.removeNumeroMask();
    };
    EditUsuarioComponent.prototype.removeMasksJuridico = function () {
        this.removeCnpjMask();
        this.removeCelMask();
        this.removeCepMask();
        this.removeNumeroMask();
    };
    EditUsuarioComponent.prototype.removeNumeroMask = function () {
        var numberHome = this.editUsuario.cd_numero_endereco_usuario.toString();
        var beforeNumberH = numberHome;
        for (var x = 0; x <= beforeNumberH.length; x++) {
            if (!parseInt(numberHome.slice(x, x + 1))) {
                numberHome.replace('_', '');
            }
        }
        this.editUsuario.cd_numero_endereco_usuario = parseInt(numberHome);
    };
    EditUsuarioComponent.prototype.removeCpfMask = function () {
        var cpf = this.editUsuario.cd_cpf_usuario.toString();
        var beforeCpf = cpf.replace('.', '');
        beforeCpf = beforeCpf.replace('.', '');
        beforeCpf = beforeCpf.replace('-', '');
        this.editUsuario.cd_cpf_usuario = parseInt(beforeCpf);
    };
    EditUsuarioComponent.prototype.removeCelMask = function () {
        var cel = this.editUsuario.cd_telefone_usuario.toString();
        var beforeCel = cel.replace('(', '');
        beforeCel = beforeCel.replace(')', '');
        beforeCel = beforeCel.replace(' ', '');
        beforeCel = beforeCel.replace('-', '');
        this.editUsuario.cd_telefone_usuario = parseInt(beforeCel);
    };
    EditUsuarioComponent.prototype.removeCepMask = function () {
        var cep = this.editUsuario.cd_cep_usuario.toString();
        var beforeCep = cep.replace('.', '');
        beforeCep = beforeCep.replace('-', '');
        this.editUsuario.cd_cep_usuario = parseInt(beforeCep);
    };
    EditUsuarioComponent.prototype.removeCnpjMask = function () {
        var cnpj = this.editUsuario.cd_cnpj_usuario.toString();
        var beforeCnpj = cnpj.replace('.', '');
        beforeCnpj = beforeCnpj.replace('.', '');
        beforeCnpj = beforeCnpj.replace('/', '');
        beforeCnpj = beforeCnpj.replace('-', '');
        this.editUsuario.cd_cnpj_usuario = parseInt(beforeCnpj);
    };
    EditUsuarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-usuario',
            template: __webpack_require__("./src/app/edit-usuario/edit-usuario.component.html"),
            styles: [__webpack_require__("./src/app/edit-usuario/edit-usuario.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__edit_usuario__["a" /* EditUsuario */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]])
    ], EditUsuarioComponent);
    return EditUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/edit-usuario/edit-usuario.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUsuario; });
var EditUsuario = /** @class */ (function () {
    function EditUsuario() {
    }
    return EditUsuario;
}());



/***/ }),

/***/ "./src/app/favoritos/favoritos.component.css":
/***/ (function(module, exports) {

module.exports = "#home .mat-card{\r\n    padding: 0px !important;\r\n}\r\n\r\n.card-content{\r\n    position: absolute;\r\n    left: 50%;\r\n    padding: 10px 10px;\r\n    width: 50%;\r\n}\r\n\r\n.card-content  li{\r\n    padding: 5px 0px;\r\n}\r\n\r\n.card-content ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.img-animals{\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.content-date{\r\n    position: absolute;\r\n    left: 53%;\r\n    top: 87%;\r\n}\r\n\r\n.img-square {\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 50%;\r\n    height: 150px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/favoritos/favoritos.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Pets Favoritos</h1>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card *ngFor=\"let favoritePet of pets\" routerLink=\"/pet-info\" [queryParams]=\"{id: favoritePet.cd_animal_fk, fav: true, favd:favoritePet.id}\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"img-square\" [ngStyle]=\"{ 'background-image': 'url(' + favoritePet.Animal.ds_foto_animal + ') '}\"></div>\r\n      </div>\r\n      <div class=\"col-md-2 card-content\">\r\n        <ul>\r\n          <li class=\"font-bold\">{{favoritePet.Animal.nm_animal}}</li>\r\n          <li>{{favoritePet.Animal.nm_raca}}</li>\r\n          <!-- <li>{{pets.cd_idade_animal}} ano(s)</li> -->\r\n          <li>{{favoritePet.Animal.nm_cor_animal}}</li>\r\n          <li>{{favoritePet.address1}}</li>\r\n          <li>{{favoritePet.address2}}</li>\r\n        </ul>\r\n      </div>\r\n      <!-- <label class=\"content-date\">{{pet.date}}</label> -->\r\n      <!-- <div class=\"heart\">\r\n        <i class=\"fas fa-heart\"></i>\r\n      </div> -->\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/favoritos/favoritos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
var FavoritosComponent = /** @class */ (function () {
    function FavoritosComponent(router, httpClient, appComponent) {
        this.router = router;
        this.httpClient = httpClient;
        this.appComponent = appComponent;
        this.elementFavorite = {};
        this.pets = {};
        this.elementData = {};
        this.postData = {};
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FavoritosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        this.getFavoritePets();
    };
    FavoritosComponent.prototype.moreInfo = function (id) {
        this.router.navigate(["pet-info"]);
    };
    FavoritosComponent.prototype.getFavoritePets = function () {
        var _this = this;
        this.pets = [];
        var id = parseInt(localStorage.getItem("id"));
        var userToken = localStorage.getItem("token");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set("Authorization", userToken);
        this.httpClient
            .get(api_url + "/api/animal/myfavorites/" + id, { headers: headers })
            .subscribe(function (element) {
            _this.elementFavorite = element;
            _this.elementFavorite = _this.elementFavorite.payload;
            _this.elementFavorite.forEach(function (favorite) {
                _this.httpClient
                    .get(api_url + "/api/users/" + favorite.cd_usuario_fk, { headers: headers })
                    .subscribe(function (elementUser) {
                    _this.elementData = elementUser;
                    favorite.address1 =
                        _this.elementData.payload.nm_cidade_usuario +
                            " - " +
                            _this.elementData.payload.nm_estado_usuario;
                    favorite.address2 = _this.elementData.payload.nm_endereco_usuario;
                });
                _this.pets.push(favorite);
            });
        });
    };
    FavoritosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-favoritos",
            template: __webpack_require__("./src/app/favoritos/favoritos.component.html"),
            styles: [__webpack_require__("./src/app/favoritos/favoritos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], FavoritosComponent);
    return FavoritosComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#home .mat-card{\r\n    padding: 0px !important;\r\n}\r\n\r\n.card-content{\r\n    position: absolute;\r\n    left: 50%;\r\n    padding: 10px 10px;\r\n    width: 50%;\r\n}\r\n\r\n.card-content  li{\r\n    padding: 5px 0px;\r\n}\r\n\r\n.card-content ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.img-animals{\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n\r\n.content-date{\r\n    position: absolute;\r\n    left: 53%;\r\n    top: 87%;\r\n}\r\n\r\n.img-square {\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 50%;\r\n    height: 150px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Pets Cadastrados Recentemente Perto de Você</h1>\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card *ngFor=\"let pets of petsHome\" routerLink=\"/pet-info\" [queryParams] =\"{id: pets.id}\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"img-square\" [ngStyle]=\"{ 'background-image': 'url(' + pets.ds_foto_animal + ') '}\"></div>\r\n      </div>\r\n      <div class=\"col-md-2 card-content\">\r\n        <ul>\r\n          <li class=\"font-bold\">{{pets.nm_animal}}</li>\r\n          <li>{{pets.Raca.nm_raca}}</li>\r\n          <li>{{pets.cd_idade_animal}} {{pets.nm_idade_animal}}</li>\r\n          <li>{{pets.Usuario.nm_cidade_usuario}} - {{pets.Usuario.nm_estado_usuario}}</li>\r\n          <li>{{pets.Usuario.nm_endereco_usuario}}</li>\r\n        </ul>\r\n      </div>\r\n      <!-- <label class=\"content-date\">{{pet.date}}</label> -->\r\n      <!-- <div class=\"heart\">\r\n        <i class=\"fas fa-heart\"></i>\r\n      </div> -->\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
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







var api_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, httpClient, appComponent) {
        this.router = router;
        this.httpClient = httpClient;
        this.appComponent = appComponent;
        this.apiUrl = api_url;
        this.dataPets = {};
        this.dataRacas = {};
        this.elementData = {};
        this.dataEspecies = {};
        this.dataUsuarios = {};
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
                this.getPets('/api/animals/getAllAnimals');
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.getPets = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var userToken, headers;
            return __generator(this, function (_a) {
                userToken = localStorage.getItem('token');
                headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
                this.httpClient.get(api_url + url, { headers: headers }).subscribe(function (pets) {
                    _this.dataPets = pets;
                    _this.petsHome = _this.dataPets.payload;
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n  margin-bottom: 0px !important;\r\n}\r\n.bg-login{\r\n  background: #755DCA !important;\r\n  height: 100vh;\r\n}\r\n.mat-card{\r\n  margin-top: 125px;\r\n}\r\n.logo{\r\n  margin-top: -100px;\r\n}\r\n.logo img{\r\n  margin: auto;\r\n  display: block;\r\n}\r\nform{\r\n  margin-top: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-login animated fadeIn\">\r\n\r\n  <mat-card>\r\n    <div class=\"col-md-12\">\r\n      <div class=\"logo\">\r\n        <img src=\"../../assets/images/idot-logo-branca128.png\" alt=\"\" srcset=\"\">\r\n      </div>\r\n    </div>\r\n\r\n      <form>\r\n\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-12\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"usuario.email\" name=\"email\" type=\"email\" matInput placeholder=\"Email\" required>\r\n              <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"col-12\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"senha\" name=\"senha\" matInput placeholder=\"Senha\" [type]=\"hide ? 'password' : 'text'\" required>\r\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"errorLogin\"><div class=\"col-12\"><a style=\"color:red;font-size: 11px;\">Senha ou Usuário incorretos*</a></div></div>\r\n        <div class=\"col-12\">\r\n          <div class=\"button-row row justify-content-center\">\r\n            <button (click)=\"getAuth()\" mat-raised-button type=\"submit\" color=\"primary\" class=\"w-50\">Confirmar</button>\r\n          </div>\r\n          <div class=\"button-row row justify-content-center\">\r\n              <button mat-raised-button color=\"primary\" class=\"w-50\" (click)=\"openDialog()\">Cadastre-se</button>\r\n            </div>\r\n        </div>\r\n\r\n      </form>\r\n\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("./src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario__ = __webpack_require__("./src/app/login/usuario.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_add_p_modal_add_p_component__ = __webpack_require__("./src/app/login/modal-add-p/modal-add-p.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
    function LoginComponent(httpClient, loginService, dialog, snackBar) {
        this.httpClient = httpClient;
        this.loginService = loginService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.apiUrl = api_url + '/token';
        this.data = {};
        this.dataError = {};
        this.postData = {};
        this.usuario = new __WEBPACK_IMPORTED_MODULE_5__usuario__["a" /* Usuario */]();
        this.hide = true;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]);
    }
    LoginComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'Você deve preencher seu email' :
            this.email.hasError('email') ? 'Email incorreto' :
                '';
    };
    LoginComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modal_add_p_modal_add_p_component__["a" /* ModalAddPComponent */], {
            width: '300px',
            height: '210px',
            data: {}
        });
    };
    LoginComponent.prototype.getAuth = function () {
        var _this = this;
        this.usuario.senha = this.senha;
        this.postData = {
            nm_email_usuario: this.usuario.email,
            cd_senha_usuario: this.usuario.senha
        };
        this.httpClient.post(this.apiUrl, this.postData).subscribe(function (auth) {
            _this.data = auth;
            _this.fazerLogin();
        }, function (error) {
            _this.dataError = error;
            if (_this.dataError) {
                _this.snackBar.open('Senha ou Usuário incorreto*', 'OK', {
                    duration: 2000,
                });
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.fazerLogin = function () {
        this.loginService.fazerLogin(this.usuario, this.data);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatSnackBar */]])
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
        this.authCheck = {};
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mostrarButtonEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.idUsuario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginService.prototype.fazerLogin = function (usuario, auth) {
        this.authCheck = auth;
        console.log(this.authCheck);
        if (this.authCheck.token) {
            sessionStorage.setItem('id', this.authCheck.id);
            sessionStorage.setItem('email', this.authCheck.email);
            localStorage.setItem('id', this.authCheck.id);
            localStorage.setItem('token', 'jwt ' + this.authCheck.token);
            this.usuarioAutenticado = true;
            this.mostrarMenuEmitter.emit(true);
            this.mostrarButtonEmitter.emit(true);
            this.idUsuario.emit(localStorage.getItem('id'));
            this.router.navigate(['/home']);
        }
        else {
            this.usuarioAutenticado = false;
            this.mostrarMenuEmitter.emit(false);
            this.mostrarButtonEmitter.emit(false);
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
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

module.exports = "#meus-pets .mat-card {\r\n  padding: 10px 5px !important;\r\n  font-size: 14px;\r\n  margin-bottom: 10px;\r\n}\r\n.col-md-12{\r\n  padding-right: 20px;\r\n}\r\n.mat-expansion-panel:not([class*=mat-elevation-z]){\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.mat-expansion-panel{\r\n  min-width: 100%;\r\n  -webkit-box-sizing: inherit !important;\r\n          box-sizing: inherit !important;\r\n  background: transparent;\r\n}\r\n.mat-expansion-panel-body{\r\n  padding: 0 15px !important;\r\n}\r\n.mat-expansion-panel-header{\r\n  padding: 0px;\r\n  min-width: 100%;\r\n  background: transparent;\r\n}\r\n.mat-expansion-panel-header-title{\r\n  margin-right: 0px;\r\n}\r\n.mat-expansion-indicator{\r\n  margin-left: -5px;\r\n}\r\n.mat-expansion-panel:not(.mat-expanded) \r\n.mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, \r\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused, \r\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{\r\n  background: transparent;\r\n}\r\n.meus-pets-img{\r\n  padding: 0px 10px;\r\n}\r\n.meus-pets-list {\r\n  padding: 10px 0px 0px 0px;\r\n  margin: 0px;\r\n  max-width: 250px;\r\n  display: block;\r\n  white-space: nowrap;                  \r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.meus-pets-list li {\r\n  list-style: none;\r\n  vertical-align: middle;\r\n}\r\n.meus-pets-text {\r\n  text-align: center;\r\n  color: #755dca;\r\n}\r\n.meus-pets-sub-text {\r\n  text-align: center;\r\n  padding: 10px 5px 0px 0px;\r\n}\r\n.meus-pets-desc{\r\n  margin-top:10px;\r\n  margin-bottom: 0px;\r\n  padding: 0px !important;\r\n  font-size: 14px;\r\n}\r\n.meus-pets-desc li{\r\n  padding: 5px 0px;\r\n  list-style: none;\r\n}\r\n.meus-pets-desc li .svg-inline--fa{\r\n  color: #755dca;\r\n  margin-right: 5px;\r\n}\r\n.buttons-inline {\r\n\r\n}\r\n.buttons-inline li {\r\n  display: inline-block;\r\n  list-style: none;\r\n  padding: 0px 0px;\r\n}\r\n.buttons-inline {\r\n  margin-left: 68%;\r\n}\r\n.buttons-inline .edit {\r\n  color: #755dca;\r\n}\r\n.buttons-inline .remove {\r\n  color: #ff4d4d;\r\n}\r\n.img-circle {\r\n  background-position: center;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n  border: 2px solid #755dca;\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/meus-pets/meus-pets.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"meus-pets\" class=\"container-fluid animated fadeIn\">\r\n\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Meus Pets</h1>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card *ngFor=\"let pet of pets\">\r\n\r\n    <div class=\"col-md-12\">\r\n      <div class=\"row\">\r\n\r\n\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <div class=\"col-3 meus-pets-img\">\r\n                <div class=\"img-circle\" [ngStyle]=\"{ 'background-image': 'url(' + pet.ds_foto_animal + ') '}\"></div>\r\n              </div>\r\n              <ul class=\"meus-pets-list\">\r\n                <li>\r\n                  <span class=\"meus-pets-text font-bold\">{{pet.nm_animal}}</span>\r\n                </li>\r\n                <li>\r\n                  <span class=\"meus-pets-sub-text\">{{pet.cd_idade_animal}} {{pet.nm_idade_animal}}</span>\r\n                  <span class=\"meus-pets-sub-text\">{{pet.Especie.nm_especie}}</span>\r\n                  <span class=\"meus-pets-sub-text text-end\">{{pet.Raca.nm_raca}}</span>\r\n                </li>\r\n              </ul>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <ul class=\"meus-pets-desc\">\r\n            <li><i class=\"fas fa-tint\"></i> {{pet.nm_cor_animal}}</li>\r\n            <li><i class=\"fas fa-ruler-vertical\"></i> {{pet.nm_tamanho_animal}}</li>\r\n            <li><i class=\"fas fa-venus-mars\"></i> {{pet.nm_sexo_animal}}</li>\r\n          </ul>\r\n          \r\n            <ul class=\"meus-pets-list buttons-inline\">\r\n              <li>\r\n                <button mat-icon-button routerLink=\"/edit-pet\" [queryParams]=\"{id: pet.id}\">\r\n                  <i class=\"fas fa-pencil-alt edit\"></i>\r\n                </button>\r\n              </li>\r\n              <li>\r\n                <button mat-icon-button (click)=\"openDialog(pet.id)\">\r\n                  <i class=\"fas fa-trash-alt remove\"></i>\r\n                </button>\r\n              </li>\r\n            </ul>\r\n\r\n        </mat-expansion-panel>\r\n\r\n\r\n\r\n\r\n\r\n        <!--\r\n        <span class=\"nav-space\"></span>\r\n\r\n        <ul class=\"meus-pets-list buttons-inline \">\r\n          <li>\r\n            <button mat-mini-fab routerLink=\"/edit-pet\" [queryParams]=\"{id: pet.id}\">\r\n              <i class=\"fas fa-pencil-alt edit\"></i>\r\n            </button>\r\n          </li>\r\n          <li>\r\n            <button mat-mini-fab (click)=\"openDialog(pet.id)\">\r\n              <i class=\"fas fa-trash-alt remove\"></i>\r\n            </button>\r\n          </li>\r\n        </ul>-->\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/meus-pets/meus-pets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusPetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meus_pets__ = __webpack_require__("./src/app/meus-pets/meus-pets.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_delete_pet_modal_delete_pet_component__ = __webpack_require__("./src/app/meus-pets/modal-delete-pet/modal-delete-pet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
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








var api_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl;
var MeusPetsComponent = /** @class */ (function () {
    function MeusPetsComponent(httpClient, dialog, meusPets, router, appComponent) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.meusPets = meusPets;
        this.router = router;
        this.appComponent = appComponent;
        this.apiUrl = api_url;
        this.dataPets = {};
        this.dataRacas = {};
        this.dataEspecies = {};
        this.petsObject = {};
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MeusPetsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
                this.getMeusPets('/api/animals/myanimals/' + localStorage.getItem('id'));
                return [2 /*return*/];
            });
        });
    };
    MeusPetsComponent.prototype.getRacas = function (url) {
        var _this = this;
        this.httpClient.get(api_url + url).subscribe(function (racas) {
            _this.dataRacas = racas;
            _this.racas = _this.dataRacas.payload;
        });
    };
    MeusPetsComponent.prototype.getEspecies = function (url) {
        var _this = this;
        this.httpClient.get(api_url + url).subscribe(function (especies) {
            _this.dataEspecies = especies;
            _this.especies = _this.dataEspecies.payload;
        });
    };
    MeusPetsComponent.prototype.getMeusPets = function (url) {
        var _this = this;
        this.appComponent.mostrarLoadingEmmiter.emit(true);
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + url, { headers: headers }).subscribe(function (data) {
            _this.dataPets = data;
            _this.pets = _this.dataPets.payload;
        });
        this.appComponent.mostrarLoadingEmmiter.emit(false);
    };
    MeusPetsComponent.prototype.openDialog = function (id) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__modal_delete_pet_modal_delete_pet_component__["a" /* ModalDeletePetComponent */], {
            width: '300px',
            height: '210px',
            data: {
                id: id
            }
        });
    };
    MeusPetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-meus-pets",
            template: __webpack_require__("./src/app/meus-pets/meus-pets.component.html"),
            styles: [__webpack_require__("./src/app/meus-pets/meus-pets.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__meus_pets__["a" /* MeusPets */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]])
    ], MeusPetsComponent);
    return MeusPetsComponent;
}());



/***/ }),

/***/ "./src/app/meus-pets/meus-pets.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeusPets; });
var MeusPets = /** @class */ (function () {
    function MeusPets() {
    }
    return MeusPets;
}());



/***/ }),

/***/ "./src/app/meus-pets/modal-delete-pet/modal-delete-pet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meus-pets/modal-delete-pet/modal-delete-pet.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h3 class=\"title\">Deseja realmente deletar?</h3>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"col-12\">\r\n    <div class=\"button-row row justify-content-center\">\r\n      <button mat-raised-button color=\"primary\" class=\"w-50\" (click)=\"deletePet()\">Deletar</button>\r\n    </div>\r\n    <div class=\"button-row row justify-content-center\">\r\n      <button (click)=\"cancel()\" mat-raised-button type=\"submit\" color=\"primary\" class=\"w-50\">Cancelar</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/meus-pets/modal-delete-pet/modal-delete-pet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDeletePetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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





var api_url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
var ModalDeletePetComponent = /** @class */ (function () {
    function ModalDeletePetComponent(dialogRef, data, httpClient, snackBar, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.httpClient = httpClient;
        this.snackBar = snackBar;
        this.router = router;
    }
    ModalDeletePetComponent.prototype.ngOnInit = function () { };
    ModalDeletePetComponent.prototype.goTo = function (route) {
        this.router.navigate([route]);
    };
    ModalDeletePetComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    ModalDeletePetComponent.prototype.deletePet = function () {
        var _this = this;
        var url = '/api/animals/' + this.data.id + '/destroy';
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.delete(api_url + url, { headers: headers }).subscribe(function (destroy) {
            _this.snackBar.open('Pet Excluído com Sucesso', 'OK', {
                duration: 2000,
            });
            _this.cancel();
            _this.goTo('home');
        }, function (err) {
            _this.snackBar.open('Erro ao Exlcuir Pet', 'OK', {
                duration: 2000,
            });
            _this.goTo('home');
        });
    };
    ModalDeletePetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal-delete-pet',
            template: __webpack_require__("./src/app/meus-pets/modal-delete-pet/modal-delete-pet.component.html"),
            styles: [__webpack_require__("./src/app/meus-pets/modal-delete-pet/modal-delete-pet.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], ModalDeletePetComponent);
    return ModalDeletePetComponent;
}());



/***/ }),

/***/ "./src/app/pesquisar/filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
var Filter = /** @class */ (function () {
    function Filter() {
    }
    return Filter;
}());



/***/ }),

/***/ "./src/app/pesquisar/pesquisar.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-button-toggle-group {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n.mat-button-toggle {\r\n  color: #333333;\r\n  border: 1px solid #ffffff;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.mat-button-toggle-checked {\r\n  border: 1px solid #755dca;\r\n  color: #ffffff;\r\n  background: #755dca;\r\n}\r\n.row-filter {\r\n  padding-top: 10px;\r\n}\r\n.col-md-12 {\r\n  padding: 0px;\r\n}\r\nh6 {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin: 0px;\r\n  vertical-align: middle;\r\n  color: #755dca;\r\n  padding: 0px 0px 15px 0px !important;\r\n}\r\n.mat-card.no-padding{\r\n    padding: 0px !important;\r\n}\r\n.card-content{\r\n    position: absolute;\r\n    left: 50%;\r\n    padding: 10px 10px;\r\n    width: 50%;\r\n}\r\n.card-content  li{\r\n    padding: 5px 0px;\r\n}\r\n.card-content ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.img-animals{\r\n    width: 50%;\r\n    height: 100%;\r\n}\r\n.content-date{\r\n    position: absolute;\r\n    left: 53%;\r\n    top: 87%;\r\n}\r\n.img-square {\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 50%;\r\n    height: 150px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/pesquisar/pesquisar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"row justify-content-center\">\r\n      <h1 class=\"title\">Pesquisar</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-card>\r\n\r\n    <div class=\"col-12\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <h6>O que deseja pesquisar?</h6>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center\">\r\n        <mat-button-toggle-group [(ngModel)]=\"filter.tipoPesquisa\" #group=\"matButtonToggleGroup\">\r\n\r\n          <mat-button-toggle ngDefaultControl value=\"Pessoa Jurídica\" (click)=\"fillFilter()\">ONG</mat-button-toggle>\r\n          <mat-button-toggle ngDefaultControl value=\"Animal\" (click)=\"fillFilter()\">Animais</mat-button-toggle>\r\n\r\n        </mat-button-toggle-group>\r\n      </div>\r\n\r\n      <div *ngIf=\"filter.tipoPesquisa\" class=\"row row-filter\">\r\n        <div class=\"col-12\">\r\n          <h6>Filtro</h6>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"filter.tipoPesquisa === 'Pessoa Jurídica'\" class=\"row\">\r\n        <div class=\"col-12\">\r\n          <mat-form-field>\r\n            <input [(ngModel)]=\"filter.ong\" type=\"text\" matInput placeholder=\"Digite o nome da ONG\">\r\n            <mat-icon matSuffix>search</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"button-submit-row row justify-content-center\">\r\n            <button mat-raised-button type=\"submit\" color=\"primary\" class=\"w-50\" (click)=\"getOngFilter()\">Confirmar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"filter.tipoPesquisa === 'Animal'\" class=\"row\">\r\n        <div class=\"col-6\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"filter.id_especie\" name=\"especie\" placeholder=\"Espécie\" (change)=\"fillRacas()\" required>\r\n              <mat-option *ngFor=\"let especies of especieArray\" [value]=\"especies.id\">\r\n                {{ especies.nm_especie }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"especie.invalid\">{{getEspecieErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"col-6\" *ngIf=\"!!filter.id_especie\">\r\n          <mat-form-field>\r\n            <mat-select [(ngModel)]=\"filter.id_raca\" name=\"raca\" placeholder=\"Raça\" required>\r\n              <mat-option *ngFor=\"let racas of racaArray\" [value]=\"racas.id\">\r\n                {{ racas.nm_raca }}\r\n              </mat-option>\r\n            </mat-select>\r\n            <mat-error *ngIf=\"raca.invalid\">{{getRacaErrorMessage()}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"button-submit-row row justify-content-center\">\r\n            <button mat-raised-button type=\"submit\" color=\"primary\" class=\"w-50\" (click)=\"getAnimalFilter()\">Confirmar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </mat-card>\r\n\r\n\r\n  <mat-card class=\"no-padding\" *ngFor=\"let pet of pets\" routerLink=\"/pet-info\" [queryParams] =\"{id: pet.id}\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"img-square\" [ngStyle]=\"{ 'background-image': 'url(' + pet.ds_foto_animal + ') '}\"></div>\r\n      </div>\r\n      <div class=\"col-md-2 card-content\">\r\n        <ul>\r\n          <li class=\"font-bold\">{{pet.nm_animal}}</li>\r\n          <li>{{pet.Raca.nm_raca}}</li>\r\n          <li>{{pet.cd_idade_animal}} {{pet.nm_idade_animal}}</li>\r\n          <li>{{pet.Usuario.nm_cidade_usuario}} - {{pet.Usuario.nm_estado_usuario}}</li>\r\n          <li>{{pet.Usuario.nm_endereco_usuario}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"no-padding\" *ngFor=\"let ong of ongs\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"img-square\" [ngStyle]=\"{ 'background-image': 'url(' + ong.ds_foto_usuario + ') '}\"></div>\r\n      </div>\r\n      <div class=\"col-md-2 card-content\">\r\n        <ul>\r\n          <li class=\"font-bold\">{{ong.nm_razao_social_usuario}}</li>\r\n          <li>{{ong.cd_cep_usuario}}</li>\r\n          <li>{{ong.nm_cidade_usuario}} - {{ong.nm_estado_usuario}}</li>\r\n          <li>{{ong.nm_endereco_usuario}}</li>\r\n          <li>{{ong.cd_numero_endereco_usuario}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/pesquisar/pesquisar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__("./src/app/pesquisar/filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
var PesquisarComponent = /** @class */ (function () {
    function PesquisarComponent(httpClient, snackBar) {
        this.httpClient = httpClient;
        this.snackBar = snackBar;
        this.filterData = {};
        this.especieArray = {};
        this.racaArray = [];
        this.pets = {};
        this.ongs = {};
        this.filter = new __WEBPACK_IMPORTED_MODULE_1__filter__["a" /* Filter */]();
        this.apiUrl = api_url;
        this.raca = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]);
        this.especie = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]);
    }
    PesquisarComponent.prototype.getRacaErrorMessage = function () {
        return this.raca.hasError('required') ? 'Preencha a raça do pet' : '';
    };
    PesquisarComponent.prototype.getEspecieErrorMessage = function () {
        return this.especie.hasError('required') ? 'Preencha a espécie do pet' : '';
    };
    PesquisarComponent.prototype.ngOnInit = function () {
        this.fillEspecie();
    };
    PesquisarComponent.prototype.fillRacas = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + '/api/racas/getracas/' + this.filter.id_especie, { headers: headers }).subscribe(function (element) {
            _this.racaArray = element;
            _this.racaArray = _this.racaArray.payload;
        });
    };
    PesquisarComponent.prototype.fillEspecie = function () {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + '/api/especies/all', { headers: headers }).subscribe(function (element) {
            _this.especieArray = element;
            _this.especieArray = _this.especieArray.payload;
        });
    };
    PesquisarComponent.prototype.fillFilter = function () {
        this.filterData = {
            tipoPesquisa: this.filter.tipoPesquisa
        };
    };
    PesquisarComponent.prototype.getAnimalFilter = function () {
        var _this = this;
        delete this.ongs;
        delete this.pets;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        var especie = this.filter.id_especie;
        var raca = this.filter.id_raca;
        this.httpClient.get(api_url + '/api/animals/getByFilter/' + especie + '&' + raca, { headers: headers }).subscribe(function (element) {
            _this.pets = element;
            _this.pets = _this.pets.payload;
        });
    };
    PesquisarComponent.prototype.getOngFilter = function () {
        var _this = this;
        delete this.pets;
        delete this.ongs;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        var ong = this.filter.ong;
        this.httpClient.get(api_url + '/api/users/getByFilter/' + ong, { headers: headers }).subscribe(function (element) {
            _this.ongs = element;
            _this.ongs = _this.ongs.payload;
        });
    };
    PesquisarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pesquisar',
            template: __webpack_require__("./src/app/pesquisar/pesquisar.component.html"),
            styles: [__webpack_require__("./src/app/pesquisar/pesquisar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatSnackBar */]])
    ], PesquisarComponent);
    return PesquisarComponent;
}());



/***/ }),

/***/ "./src/app/pet-info/pet-info.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-card{\r\n    padding: 0px !important;\r\n}\r\n\r\n.card-content{\r\n    padding: 10px 10px;\r\n    width: 100%;\r\n}\r\n\r\n.btn-favorite-area{\r\n  margin-top: -25px;\r\n}\r\n\r\nul .row{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.card-content li{\r\n    padding: 2px 0px;\r\n}\r\n\r\n.card-content ul{\r\n    list-style: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.img-animals{\r\n    width: 100%;\r\n    height: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"container-fluid animated fadeIn\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"row justify-content-center\">\r\n\r\n      <h1 class=\"title\">Mais Informações do Pet </h1>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <mat-card>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <img src=\"{{pet.ds_foto_animal}}\" alt=\"\" class=\"img-animals\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"fav\">\r\n      <div class=\"col-1 offset-9 btn-favorite-area\">\r\n        <button mat-mini-fab color=\"primary\" (click)='favoritarPet(pet.id)'>\r\n          <mat-icon aria-label=\"Favoritar\">favorite</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!fav\">\r\n      <div class=\"col-1 offset-9 btn-favorite-area\">\r\n        <button mat-mini-fab color=\"primary\" (click)='removerFavPet(pet.id)'>\r\n          <mat-icon aria-label=\"Remover\">remove</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-12 card-content\">\r\n      <ul>\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold\">Nome</li>\r\n            <li> {{pet.nm_animal}} </li>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold\">Idade</li>\r\n            <li> {{pet.cd_idade_animal}} {{pet.nm_idade_animal}} </li>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold space-top\">Espécie</li>\r\n            <li> {{pet.Especie.nm_especie}} </li>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold space-top\">Raça</li>\r\n            <li> {{pet.Raca.nm_raca}} </li>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold space-top\">Sexo</li>\r\n            <li> {{pet.nm_sexo_animal}} </li>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold space-top\">Cor</li>\r\n            <li> {{pet.nm_cor_animal}} </li>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold space-top\">Tamanho</li>\r\n            <li> {{pet.nm_tamanho_animal}} </li>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold space-top\">Telefone</li>\r\n            <li>{{pet.Usuario.cd_telefone_usuario}}</li>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <li class=\"font-bold space-top\">Endereço</li>\r\n            <li>{{pet.Usuario.nm_cidade_usuario}} - {{pet.Usuario.nm_estado_usuario}}</li>\r\n            <li>{{pet.Usuario.nm_endereco_usuario}}</li>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <span *ngIf='deficiencia_view'>\r\n              <li class=\"font-bold space-top\">Deficiência</li>\r\n              <li> {{pet.ds_deficiencia_animal}} </li>\r\n            </span>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <li class=\"font-bold space-top\">Cadastrado por:</li>\r\n            <li>\r\n              <span>{{pet.Usuario.nm_razao_social_usuario}}</span>\r\n              <span>{{pet.Usuario.nm_usuario}}</span>\r\n            </li>\r\n          </div>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pet-info/pet-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetInfoComponent; });
/* unused harmony export Pet */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
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
var PetInfoComponent = /** @class */ (function () {
    function PetInfoComponent(route, httpClient, router, appComponent) {
        this.route = route;
        this.httpClient = httpClient;
        this.router = router;
        this.appComponent = appComponent;
        this.pet = {};
        this.dataRacas = {};
        this.dataEspecies = {};
        this.elementDataPet = {};
        this.elementDataUser = {};
        this.postData = {};
        this.mostrarLoading = false;
        this.mostrarLoadingEmmiter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getPetInfo(this.route.snapshot.queryParams['id']);
        this.fav = !this.route.snapshot.queryParams['fav'];
        this.favd = this.route.snapshot.queryParams['favd'];
        this.url = '/api/favoritos/create';
        this.urlRemove = '/api/favoritos/';
    }
    PetInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComponent.mostrarLoadingEmmiter.subscribe(function (mostrarSpinner) { return _this.mostrarLoading = mostrarSpinner; });
        /*if (this.pet.ic_deficiencia_animal === undefined) {
          this.pet.ic_deficiencia_animal = false;
          const deficiencia_view = false;
        } else if (this.pet.ic_deficiencia_animal === true) {
          this.pet.ic_deficiencia_animal = true;
          const deficiencia_view = true;
        }*/
    };
    PetInfoComponent.prototype.favoritarPet = function (id) {
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.postData = {
            cd_animal_fk: id,
            cd_usuario_fk: localStorage.getItem('id')
        };
        return this.httpClient.post(api_url + this.url, this.postData, { headers: headers })
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log('Error occured');
        });
    };
    PetInfoComponent.prototype.removerFavPet = function (id) {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.postData = {
            cd_animal_fk: id,
            cd_usuario_fk: localStorage.getItem('id')
        };
        return this.httpClient.delete(api_url + this.urlRemove + this.favd + '/destroy', { headers: headers })
            .subscribe(function (res) {
            _this.router.navigate(['/favoritos']);
        }, function (err) {
            console.log('Error occured');
        });
    };
    PetInfoComponent.prototype.getPetInfo = function (id) {
        var _this = this;
        var userToken = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', userToken);
        this.httpClient.get(api_url + '/api/animals/' + id, { headers: headers }).subscribe(function (element) {
            _this.elementDataPet = element;
            _this.pet = _this.elementDataPet.payload;
            _this.pet.title = '';
        });
    };
    PetInfoComponent.prototype.formatNumberPhone = function (number) {
        var length = number.length;
        var phoneFormated;
        if (length === 10) {
            phoneFormated = '(' + number.substring(0, 2) + ') ' + number.substring(2, 6) + '-' + number.substring(6, 10);
        }
        else if (length === 11) {
            phoneFormated = '(' + number.substring(0, 2) + ') ' + number.substring(2, 7) + '-' + number.substring(7, 11);
        }
        return phoneFormated;
    };
    PetInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pet-info',
            template: __webpack_require__("./src/app/pet-info/pet-info.component.html"),
            styles: [__webpack_require__("./src/app/pet-info/pet-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]])
    ], PetInfoComponent);
    return PetInfoComponent;
}());

var Pet = /** @class */ (function () {
    function Pet() {
    }
    return Pet;
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
    apiUrl: 'http://ec2-18-231-49-205.sa-east-1.compute.amazonaws.com:8080'
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