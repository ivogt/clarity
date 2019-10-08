import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRemoteComponent } from './errorRemote.component';

describe('ErrorRemoteComponent', () => {
  let component: ErrorRemoteComponent;
  let fixture: ComponentFixture<ErrorRemoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorRemoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
