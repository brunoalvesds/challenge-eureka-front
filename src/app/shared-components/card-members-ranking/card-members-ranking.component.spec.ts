import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMembersRankingComponent } from './card-members-ranking.component';

describe('CardMembersRankingComponent', () => {
  let component: CardMembersRankingComponent;
  let fixture: ComponentFixture<CardMembersRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMembersRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMembersRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
