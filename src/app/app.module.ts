import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

import { Dialogs } from '@ionic-native/dialogs';

export const firebaseConfig = {
  apiKey: "AIzaSyBaQCLh2nmZQoD_es2ZOj07U5VBi4Rhol0",
  authDomain: "ionic2do-7efac.firebaseapp.com",
  databaseURL: "https://ionic2do-7efac.firebaseio.com",
  projectId: "ionic2do-7efac",
  storageBucket: "ionic2do-7efac.appspot.com",
  messagingSenderId: "717072248640"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
