import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-members-ranking',
  templateUrl: './card-members-ranking.component.html',
  styleUrls: ['./card-members-ranking.component.scss']
})

export class CardMembersRankingComponent implements OnInit {
  @Input() data: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
