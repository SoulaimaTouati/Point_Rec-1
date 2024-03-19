import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivreComponent } from './suivre.component';

describe('SuivreComponent', () => {
  let component: SuivreComponent;
  let fixture: ComponentFixture<SuivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuivreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
