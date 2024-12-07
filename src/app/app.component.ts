import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoginComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stefSync';

  ngOnInit(): void {
    console.log("init")
  }

  isDarkTheme: boolean = false;

  constructor(private renderer: Renderer2) {}

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    const themeClass = this.isDarkTheme ? 'dark-theme' : '';
    this.renderer.setAttribute(document.body, 'class', themeClass);
    console.log("toggle theme")
  }
}