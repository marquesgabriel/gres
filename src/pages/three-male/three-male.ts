import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  templateUrl: 'three-male.html',
  providers: [Slides]
})
export class ThreeMale {
  @ViewChild('sequence') slides: Slides;
  pt: number;
  ab: number;
  cx: number;
  height: number;
  weight: number;
  age: number;

  imc:string;
  fat:string;
  ga:string;
  mcm:string;
  pce:string;

  constructor(private navCtrl: NavController) {}

  goToNextSlide(){
    this.slides.slideNext(300, false);
  };
  goToPreviousSlide(){
    this.slides.slidePrev(300, false);
  };
  private calcImc(){
    return (this.weight/(this.height*this.height)).toFixed(2);
  };
  private calcFat(){
    let pt = Number(this.pt);
    let ab = Number(this.ab);
    let cx = Number(this.cx);
    let age = Number(this.age);

    let sum = pt+ab+cx;
    let pow = sum*sum;

    let dc = 1.109380-(0.0008267*sum)+(0.0000016*pow)-(0.0002574*age);
    return (Math.abs(((4.95/dc)-4.5)*100)).toFixed(2);
  };
  private calcGa(){
    let weight = this.weight;
    let fat = Number(this.calcFat());
    return (weight*(fat/100)).toFixed(2);
  }
  private calcMcm(){
    let weight = this.weight;
    let ga = Number(this.calcGa());
    return (weight-ga).toFixed(2);
  }
  private calcPce(){
    let fat = Number(this.calcFat());
    let mcm = Number(this.calcMcm());
    return (mcm/(1-fat)).toFixed(2)
  }

  enter(event){
    if(event.keyCode===13)
      this.goToNextSlide();
  }
  // calc(){
  //   this.imc = this.calcImc();
  //   this.fat = this.calcFat();
  //   this.ga = this.calcGa();
  //   this.mcm = this.calcMcm();
  //   // this.pce = this.calcPce();
  //
  //   this.goToNextSlide();
  // }
}
