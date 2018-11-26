import { State } from './state.model';

export class CityState implements State {
    sigla: string;
    nome: string;
    cidades: [string];
    estados: [State];
}
