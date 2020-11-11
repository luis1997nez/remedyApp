import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlProductos2Page } from './control-productos2.page';

describe('ControlProductos2Page', () => {
  let component: ControlProductos2Page;
  let fixture: ComponentFixture<ControlProductos2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlProductos2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlProductos2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
