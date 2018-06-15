import { AddCoursePage } from './../add-course/add-course';
import { AddQuestionPage } from './../add-question/add-question';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');
  }

  addQuestion(){
    this.navCtrl.push(AddQuestionPage);
  }
  addCourse(){
    
    this.navCtrl.push(AddCoursePage);
  }

}
