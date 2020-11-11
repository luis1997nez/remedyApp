import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlUserPage } from './control-user.page';

describe('ControlUserPage', () => {
  let component: ControlUserPage;
  let fixture: ComponentFixture<ControlUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
