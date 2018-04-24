import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import AnimalRoutes from '../../modules/Animal/routes';

class Routes{

  private router: UserRoutes;
  private tokenRoute;
  private auth;

  constructor(app: Application, auth: any){
    this.router = new UserRoutes();
    this.auth = auth;
    this.getRoutes(app);
  }

  getRoutes(app: Application): void{

    //user routes
    app.route('/api/users/all').get(this.router.index);
    app.route('/api/users/create').post(this.router.create);
    app.route('/api/users/:id').get(this.router.findOne);
    app.route('/api/users/:id/update').put(this.router.update);
    app.route('/api/users/:id/destroy').delete(this.router.destroy);
    app.route('/token').post(this.tokenRoute.auth);

    //animal routes
    app.route('/api/animals/all').get(this.router.index);
    app.route('/api/animals/create').post(this.router.create);
    app.route('/api/animals/:id').get(this.router.findOne);
    app.route('/api/animals/:id/update').put(this.router.update);
    app.route('/api/animals/:id/destroy').delete(this.router.destroy);
  }
}

export default Routes;
