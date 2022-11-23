import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NumericValueAccessor } from '@ionic/angular';

import { PrimeroPage } from './primero.page';

describe('PrimeroPage', () => {
  let component: PrimeroPage;
  let fixture: ComponentFixture<PrimeroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('************************ votaciones', () => {
  let component: PrimeroPage;

  beforeEach(waitForAsync(() => {
    component = new PrimeroPage();
  }));

  it('Voto apruebo 1', () => {
    component.contadorApruebo();
    expect(component.apruebo).toEqual(1);
  });
  it('Suma', () => {
    
    expect(component.sumar(1,1)).toEqual(2);
  });

});