import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmodelPageComponent } from './ngmodel-page.component';

describe('NgmodelPageComponent', () => {
  let component: NgmodelPageComponent;
  let fixture: ComponentFixture<NgmodelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgmodelPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgmodelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
