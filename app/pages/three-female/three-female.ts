import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/three-female/three-female.html',
  providers: [Slides]
})
export class ThreeFemale {
  @ViewChild('sequence') slides: Slides;

  constructor(private navCtrl: NavController) {}

  goToNextSlide(){
    this.slides.slideNext(300, false);
  };
  goToPreviousSlide(){
    this.slides.slidePrev(300, false);
  };
  calcImc(weight, height){
    return (weight/(height*height)).toFixed(2);
  };
  calcFat(tr, si, cx, age){
    let dc = 1.0994921-
      (0.0009929*(tr+si+cx))+
      (0.0000023*((tr+si+cx)*(tr+si+cx)))-
      (0.0001392*age);
    return Math.abs(((4.95/dc)-4.5)*100).toFixed(2);
  };
}
