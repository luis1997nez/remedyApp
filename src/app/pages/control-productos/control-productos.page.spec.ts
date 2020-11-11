import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlProductosPage } from './control-productos.page';

describe('ControlProductosPage', () => {
  let component: ControlProductosPage;
  let fixture: ComponentFixture<ControlProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
