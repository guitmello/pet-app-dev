"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/auth/auth");
var Routes = /** @class */ (function () {
    function Routes(app, auth) {
        this.router = new routes_1.default();
        this.tokenRoute = auth_1.default;
        this.auth = auth;
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        //user routes
        app.route('/api/users/all').all(this.auth.authenticate()).get(this.router.index);
        app.route('/api/users/create').all(this.auth.authenticate()).post(this.router.create);
        app.route('/api/users/:id').all(this.auth.authenticate()).get(this.router.findOne);
        app.route('/api/users/:id/update').all(this.auth.authenticate()).put(this.router.update);
        app.route('/api/users/:id/destroy').all(this.auth.authenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth);
        //animal routes
        app.route('/api/animals/all').get(this.router.index);
        app.route('/api/animals/create').post(this.router.create);
        app.route('/api/animals/:id').get(this.router.findOne);
        app.route('/api/animals/:id/update').put(this.router.update);
        app.route('/api/animals/:id/destroy').delete(this.router.destroy);
    };
    return Routes;
}());
exports.default = Routes;
