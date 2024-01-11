import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRPROFEPage } from './qrprofe.page';

describe('QRPROFEPage', () => {
  let component: QRPROFEPage;
  let fixture: ComponentFixture<QRPROFEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRPROFEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
