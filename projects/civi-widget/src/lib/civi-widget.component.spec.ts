import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiviWidgetComponent } from './civi-widget.component';

describe('CiviWidgetComponent', () => {
  let component: CiviWidgetComponent;
  let fixture: ComponentFixture<CiviWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiviWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiviWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
