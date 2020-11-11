import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlRemedioPage } from './control-remedio.page';

describe('ControlRemedioPage', () => {
  let component: ControlRemedioPage;
  let fixture: ComponentFixture<ControlRemedioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRemedioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlRemedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
