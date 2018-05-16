import { Component, OnInit, EventEmitter } from '@angular/core';
import { EditUsuario } from './edit-usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  sexo: Array<any>;
  dataUsuarios: any = {};
  postData: any = {};
  editusuario: EditUsuario = new EditUsuario();
  pets: Array<any>;
  private apiUrl = api_url;

  tipoUsuarioEmitter = new EventEmitter<string>();
  mostrarTipoUsuario: string = null;

  constructor(private httpClient: HttpClient, private editUsuario: EditUsuario, public router: Router,
    private route: ActivatedRoute, public snackBar: MatSnackBar) { }

    id = this.route.snapshot.queryParams['id'];

  ngOnInit() {

    this.sexo = [
      {value: 'Masculino', viewValue: 'Masculino'},
      {value: 'Feminino', viewValue: 'Feminino'}
    ];

    this.getDataUsuario();

  }

  getDataUsuario() {
    this.apiUrl = this.apiUrl + '/api/users/' + this.id ;
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);
    let tipoUsuarioForm;

    this.httpClient.get(this.apiUrl, { headers }).subscribe( pets => {
      this.dataUsuarios = pets;
      this.editUsuario = this.dataUsuarios.payload;
      });

      if (this.editUsuario.tipoUsuario === 'Pessoa Física') {
        this.tipoUsuarioEmitter.emit('Pessoa Física');
        console.log('fisica');
      } else {
        this.tipoUsuarioEmitter.emit('Pessoa Jurídica');
        console.log('juridica');
      }

      this.tipoUsuarioEmitter.subscribe(
        tipoUsuario => this.mostrarTipoUsuario = tipoUsuario,
      );
  }



  goTo(route: string) {
    this.router.navigate([route]);
  }


  updateUsuarioFisico(URL) {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      nm_usuario: this.editUsuario.nome,
      nm_email_usuario: this.editUsuario.email,
      cd_cpf_usuario: this.editUsuario.cpf,
      nm_sexo_usuario: this.editUsuario.sexo,
      cd_telefone_usuario: this.editUsuario.telefone,
      cd_cep_usuario: this.editUsuario.cep,
      nm_estado_usuario: this.editUsuario.estado,
      nm_cidade_usuario: this.editUsuario.cidade,
      nm_endereco_usuario: this.editUsuario.endereco,
      cd_numero_endereco_usuario: this.editUsuario.numero,
      ds_complemento_endereco_usuario: this.editUsuario.complemento,
      dt_nascimento_usuario: this.editUsuario.data,
      cd_senha_usuario: this.editUsuario.senha,
    };

    this.httpClient.put<EditUsuario>(this.apiUrl + URL, this.postData, { headers })
      .subscribe(
        res => {
          this.snackBar.open('Usuário Editado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.goTo('meus-pets');
        },
        err => {
          this.snackBar.open('Erro ao Editar o Usuário', 'OK', {
            duration: 2000,
          });
          this.goTo('home');
        }
      );
  }

  updateUsuarioJuridico(URL) {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      nm_razao_social_usuario: this.editUsuario.razaoSocial,
      nm_email_usuario: this.editUsuario.email,
      cd_cnpj_usuario: this.editUsuario.cnpj,
      cd_telefone_usuario: this.editUsuario.telefone,
      cd_cep_usuario: this.editUsuario.cep,
      nm_estado_usuario: this.editUsuario.estado,
      nm_cidade_usuario: this.editUsuario.cidade,
      nm_endereco_usuario: this.editUsuario.endereco,
      cd_numero_endereco_usuario: this.editUsuario.numero,
      ds_complemento_endereco_usuario: this.editUsuario.complemento,
      cd_senha_usuario: this.editUsuario.senha
    };

    this.httpClient.put<EditUsuario>(this.apiUrl + URL, this.postData, { headers })
      .subscribe(
        res => {
          this.snackBar.open('Usuário Editado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.goTo('meus-pets');
        },
        err => {
          this.snackBar.open('Erro ao Editar o Usuário', 'OK', {
            duration: 2000,
          });
          this.goTo('home');
        }
      );
  }

}
