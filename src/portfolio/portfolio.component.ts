import { Component, ElementRef, ViewChild } from '@angular/core';
// import {MatIconModule} from '@angular/material/icon'
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';
declare function getToday():any;


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  // filmIcon = faFilm;
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  ngOnInit(){
    // getToday();

    const options = {
      strings: ['Anything', 'Everything'],
      typeSpeed: 100,
      backSpeed: 80,
      fadeOut: true,
      backDelay: 1500,
      loop: true,
    };

    new Typed(this.typedElement.nativeElement, options);
  }
}
