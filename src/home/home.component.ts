import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
declare function getToday():any;
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  ngOnInit(){
    getToday();

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
