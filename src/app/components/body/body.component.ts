import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  img1 : string;
  img2 : string;
  img3 : string;

  constructor() {
    this.img1 = "../../../assets/img/colorado-5156229_1920.jpg"
    this.img2 = "../../../assets/img/landscape-5186058_1920.jpg"
    this.img3 = "../../../assets/img/leaves-5163801_1920.jpg"
   }

  ngOnInit(): void {
  }

}
