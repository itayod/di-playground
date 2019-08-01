import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsPresentorComponent } from './docs-presentor.component';

describe('DocsPresentorComponent', () => {
  let component: DocsPresentorComponent;
  let fixture: ComponentFixture<DocsPresentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocsPresentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsPresentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
