import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
// declare var showMenu: any;

@Component({
  selector: 'app-animation-portfolio',
  standalone: true,
  imports: [RouterModule,NavbarComponent],
  templateUrl: './animation-portfolio.component.html',
  styleUrl: './animation-portfolio.component.scss'
})
export class AnimationPortfolioComponent {

  constructor(){
    // getMenu();
  }
  ngOnInit(){
    // getToday();
    // getMenu();
    // showMenu;
    

  }

  navbar(menu:any){
    console.log('menu: ', menu);

  }
}
