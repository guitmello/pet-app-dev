import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import AnimalRoutes from '../../modules/Animal/routes';
import TokenRoutes from '../../modules/Auth/auth';


class Routes {

  private tokenRoute;

  constructor(){
    this.tokenRoute = TokenRoutes;
  }

  initRoutes(app: Application, auth: any): void{

    //user routes
    app.route('/api/users/all').all(auth.config().authenticate()).get(UserRoutes.index);
    app.route('/api/users/create').all(auth.config().authenticate()).post(UserRoutes.create);
    app.route('/api/users/:id').all(auth.config().authenticate()).get(UserRoutes.findOne);
    app.route('/api/users/:id/update').all(auth.config().authenticate()).put(UserRoutes.update);
    app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(UserRoutes.destroy);
    app.route('/token').post(this.tokenRoute.auth);

    //animal routes
    app.route('/api/animals/all').get(UserRoutes.index);
    app.route('/api/animals/create').post(UserRoutes.create);
    app.route('/api/animals/:id').get(UserRoutes.findOne);
    app.route('/api/animals/:id/update').put(UserRoutes.update);
    app.route('/api/animals/:id/destroy').delete(UserRoutes.destroy);
  }
}

export default new Routes();
