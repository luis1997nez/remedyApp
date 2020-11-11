import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlRemedio2Page } from './control-remedio2.page';

describe('ControlRemedio2Page', () => {
  let component: ControlRemedio2Page;
  let fixture: ComponentFixture<ControlRemedio2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRemedio2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlRemedio2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
