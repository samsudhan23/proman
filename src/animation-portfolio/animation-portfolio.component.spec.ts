import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationPortfolioComponent } from './animation-portfolio.component';

describe('AnimationPortfolioComponent', () => {
  let component: AnimationPortfolioComponent;
  let fixture: ComponentFixture<AnimationPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
