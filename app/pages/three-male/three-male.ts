import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/three-male/three-male.html',
  providers: [Slides]
})
export class ThreeMale {
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
  calcFat(pt, ab, cx, age){
    let dc = 1.109380-
      (0.0008267*(pt+ab+cx))+
      (0.0000016*((pt+ab+cx)*(pt+ab+cx)))-
      (0.0002574*age);
    return Math.abs(((4.95/dc)-4.5)*100).toFixed(2);
  };
  banana(event){
    if(event.keyCode===13)
      this.goToNextSlide();
  }
}
