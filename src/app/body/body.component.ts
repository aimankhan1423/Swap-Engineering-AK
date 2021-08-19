import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css', './body.component.scss']
})

export class BodyComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) { 
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/0_ZcCqqpS2o");
  }
  slides = [{'image': "../../assets/images/c1.jfif"},
   {'image': "../../assets/images/c2.jpg"},
   {'image': "../../assets/images/c3.jfif"}, 
   {'image': "../../assets/images/c4.jpg"}, 
  {'image': "../../assets/images/c5.jpg"}];



 


  ngOnInit(): void {

 

}
}