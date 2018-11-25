import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {

  isAdding = true;

  user: User;
  userType: string;

  userFormPhysical: FormGroup;
  userFormLegal: FormGroup;

  hide = true;
  hideConfirm = true;

  minDate = new Date(1900, 1, 1);
  maxDate = new Date(2000, new Date().getUTCMonth(), new Date().getUTCDate());

  genderArray: Array<Object> = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Feminino', viewValue: 'Feminino' }
  ];

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    if (this.activatedRoute.snapshot.routeConfig.path === 'usuario-fisico') {
      this.userType = 'pf';
    } else {
      this.userType = 'pj';
    }

    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.userService.getUser(params.id);
        this.isAdding = false;
      }
    });

    // Fisica
    this.userFormPhysical = new FormGroup({
      nm_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      nm_email_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2), Validators.email]
      }),
      cd_cpf_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(11)]
      }),
      dt_nascimento_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      nm_sexo_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_telefone_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_cep_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      nm_estado_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_cidade_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_numero_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      ds_complemento_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_confirmacao_usuario: new FormControl('', {
        validators: [Validators.required]
      })
    }, {validators: [this.equalsTo], updateOn: 'change'});

    // Juridica
    this.userFormLegal = new FormGroup({
      nm_razao_social_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      nm_email_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2), Validators.email]
      }),
      cd_cnpj_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(13)]
      }),
      cd_telefone_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_cep_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      nm_estado_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_cidade_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_numero_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      ds_complemento_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_confirmacao_usuario: new FormControl('', {
        validators: [Validators.required]
      })
    }, {validators: [this.equalsTo], updateOn: 'change'});

    // this.changePhoto();
  }

  changePhoto() {
    document.querySelector('#imgupload').addEventListener('change', function() {
      const filesSelected = (<HTMLInputElement>(
        document.getElementById('imgupload')
      )).files;
      if (filesSelected.length > 0) {
        const fileToLoad = filesSelected[0];
        const fileReader = new FileReader();
        fileReader.onload = function(fileLoadEvent) {
          const base64value = <FileReader>event.target;
          (<HTMLInputElement>document.getElementById('imgupload')).setAttribute(
            'base64-value', base64value.result.toString()
          );
        };
        fileReader.readAsDataURL(fileToLoad);
      }
    });
  }

  userRegister() {
    let fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');

    if (!fotobase64) {
      fotobase64 = '../../../assets/images/ft-user.png';
    }

    if (this.isAdding) {
      this.userService.createUser(this.user).subscribe(response => {
        console.log(response);
      });
    } else {
      this.userService.editUser(this.user).subscribe(response => {
        console.log(response);
      });
    }
  }

  equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const password = group.get('cd_senha_usuario');
    const passwordConfirm = group.get('passwordConfirm');

    if (!password || !passwordConfirm) {
      return undefined;
    }

    if (password.value !== passwordConfirm.value) {
      return { passwordNotMatch: true };
    } else {
      return undefined;
    }
  }

}
