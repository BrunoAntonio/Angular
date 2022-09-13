import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionTemplateDrivenComponent } from './encryption-template-driven.component';

describe('EncryptionTemplateDrivenComponent', () => {
  let component: EncryptionTemplateDrivenComponent;
  let fixture: ComponentFixture<EncryptionTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncryptionTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncryptionTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
