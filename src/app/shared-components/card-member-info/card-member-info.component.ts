import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-member-info',
  templateUrl: './card-member-info.component.html',
  styleUrls: ['./card-member-info.component.scss']
})
export class CardMemberInfoComponent implements OnInit {
  @Input() data: any = {};
  @Input() program: any = {};

  constructor() {

  }

  ngOnInit(): void {
  }

}
