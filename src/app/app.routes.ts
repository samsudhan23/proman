import { Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { AnimationPortfolioComponent } from '../animation-portfolio/animation-portfolio.component';
import { AboutComponent } from '../about/about.component';

export const routes: Routes = [
    {
        path:'',component:AnimationPortfolioComponent
    },
    {
        path:'port',component:PortfolioComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'about', component: AboutComponent
    }
];
