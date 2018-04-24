"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../../modules/User/routes");
var auth_1 = require("../../modules/Auth/auth");
var Routes = /** @class */ (function () {
    function Routes() {
        this.tokenRoute = auth_1.default;
    }
    Routes.prototype.initRoutes = function (app, auth) {
        //user routes
        app.route('/api/users/all').all(auth.config().authenticate()).get(routes_1.default.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(routes_1.default.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(routes_1.default.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(routes_1.default.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(routes_1.default.destroy);
        app.route('/token').post(this.tokenRoute.auth);
        //animal routes
        app.route('/api/animals/all').get(routes_1.default.index);
        app.route('/api/animals/create').post(routes_1.default.create);
        app.route('/api/animals/:id').get(routes_1.default.findOne);
        app.route('/api/animals/:id/update').put(routes_1.default.update);
        app.route('/api/animals/:id/destroy').delete(routes_1.default.destroy);
    };
    return Routes;
}());
exports.default = new Routes();
