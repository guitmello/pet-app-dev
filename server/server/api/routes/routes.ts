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
    app.route('/api/animals/all').all(auth.config().authenticate()).get(AnimalRoutes.index);
    app.route('/api/animals/create').all(auth.config().authenticate()).post(AnimalRoutes.create);
    app.route('/api/animals/:id').all(auth.config().authenticate()).get(AnimalRoutes.findOne);
    app.route('/api/animals/:id/update').all(auth.config().authenticate()).put(AnimalRoutes.update);
    app.route('/api/animals/:id/destroy').all(auth.config().authenticate()).delete(AnimalRoutes.destroy);
  }
}

export default new Routes();
