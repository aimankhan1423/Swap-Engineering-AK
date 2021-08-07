import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

    
  constructor() { }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_mm5sx6m', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  ngOnInit(): void {
  }

}
