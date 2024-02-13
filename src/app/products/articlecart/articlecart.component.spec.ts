import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecartComponent } from './articlecart.component';

describe('ArticlecartComponent', () => {
  let component: ArticlecartComponent;
  let fixture: ComponentFixture<ArticlecartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlecartComponent]
    });
    fixture = TestBed.createComponent(ArticlecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
