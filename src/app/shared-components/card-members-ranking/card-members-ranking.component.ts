import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-members-ranking',
  templateUrl: './card-members-ranking.component.html',
  styleUrls: ['./card-members-ranking.component.scss']
})

export class CardMembersRankingComponent implements OnInit {
  @Input() data: Array<any> = [];
  @Output() userSelected = new EventEmitter<{ userId: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleUserData(userId: string) {
    this.userSelected.emit({ userId: userId });
  }
}
