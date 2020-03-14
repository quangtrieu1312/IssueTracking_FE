import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthRequest } from '../_models/auth-request';

describe('authRequest', () => {
  let component: AuthRequest;
  let fixture: ComponentFixture<AuthRequest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRequest ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
