import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ControlUser2Page } from './control-user2.page';

describe('ControlUser2Page', () => {
  let component: ControlUser2Page;
  let fixture: ComponentFixture<ControlUser2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlUser2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ControlUser2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
