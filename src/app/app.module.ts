import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroProvider } from '../providers/cadastro/cadastro';
import { CadastroPage } from '../pages/cadastro/cadastro';

import { BrMaskerModule } from 'brmasker-ionic-3';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CadastroProvider
  ]
})
export class AppModule {}
