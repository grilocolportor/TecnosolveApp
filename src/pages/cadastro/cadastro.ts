import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  list: any[] = [];

  public cadastro = {
    nome: "",
    cpf: "",
    telefone: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    //carrega lista 
    this.atualizarList();
  }

  //novo usuario
  newUsuario() {

  
    let c = JSON.parse(localStorage.getItem("usuario"));

    
    if (c != null) {
        //adciona um novo cadastro na lista
        this.list.unshift(JSON.parse(JSON.stringify(this.cadastro)));
        localStorage.setItem("usuario", JSON.stringify(this.list));
        this.limparCampos();
        this.atualizarList();

    } else {
      //inicializa a lista e insere primeiro cadastro na lista
      this.list = [];
      this.list.unshift(JSON.parse(JSON.stringify(this.cadastro)));
      localStorage.setItem("usuario", JSON.stringify(this.list));
      this.limparCampos();
      this.atualizarList();
    }

  }

  limparCampos(){
    this.cadastro.cpf = "";
    this.cadastro.nome = "";
    this.cadastro.telefone = "";
  }

  atualizarList(){
    this.list = JSON.parse(localStorage.getItem("usuario"));
    //console.log(this.list);
  }

  //volta para a pagina home
  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(HomePage);
  }

}


