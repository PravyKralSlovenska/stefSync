import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  obrazky: string[] = [
    "/images/login.image01.jpg",
    "/images/login.image02.jpg",
    "/images/login.image04.jpg",
    "/images/login.image05.jpg",
    "/images/login.image06.jpg",
    "/images/login.image07.jpg",
    "/images/login.image09.jpg",
    "/images/login.image10.jpg",
    "/images/login.image11.jpg",
    "/images/login.image12.jpg"
  ]

  randomObrazok: string = this.obrazky[Math.floor(Math.random() * this.obrazky.length)];

  // ngOnInit() {
  //   console.log('Selected random image:', this.randomObrazok);
  // }
}
