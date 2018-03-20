import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CadastradosPage } from '../pages/cadastrados/cadastrados';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
    private alertCtrl: AlertController) {
    this.initializeApp();

    //menu lateral
    this.pages = [
      { title: 'Atualizar Página', component: this.doRefresh },
      { title: 'Cadastro', component: CadastroPage },
      { title: 'Cadastrados', component: CadastradosPage},
      { title: 'Sair', component: this.presentConfirm}

    ];

  }

  


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  //mostrar alerta ao clicar no menu sair
  //pedindo para confirmar
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      message: 'Deseja mesmo sair do aplicativo',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present();
  }

  doRefresh(){
    this.nav.setRoot(HomePage);
  }
  //volta para pagina Home
  openPage(page) {
   
    if(page.title=="Sair"){
      this.presentConfirm();
    }else if(page.title=="Atualizar Página"){
      this.doRefresh();
    }else{
      this.nav.push(page.component);
    }
   
  }
}
