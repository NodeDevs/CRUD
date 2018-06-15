import { AddCoursePage } from './../pages/add-course/add-course';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FeedsPage } from '../pages/feeds/feeds';
import { AddQuestionPage } from '../pages/add-question/add-question';


@NgModule({
  declarations: [
    MyApp,
    FeedsPage,
    AddQuestionPage,
    AddCoursePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedsPage,
    AddQuestionPage,
    AddCoursePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
