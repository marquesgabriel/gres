import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

import {ThreeMale} from '../three-male/three-male';
import {ThreeFemale} from '../three-female/three-female';

@Component({
  templateUrl: 'page1.html'
})
export class Page1 {
  constructor(public navCtrl: NavController) {
  }

  setGender(gender){
    if(gender==1){
      this.navCtrl.push(ThreeMale);
    }else{
      this.navCtrl.push(ThreeFemale);
    }
  };
}
