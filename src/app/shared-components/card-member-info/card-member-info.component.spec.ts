import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMemberInfoComponent } from './card-member-info.component';

describe('CardMemberInfoComponent', () => {
  let component: CardMemberInfoComponent;
  let fixture: ComponentFixture<CardMemberInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMemberInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMemberInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
