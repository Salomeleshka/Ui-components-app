import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input('class') public classNames: string = '';

  @Input() public data: any = [];

  @Input() public headers: any = [];

  constructor() {}

  ngOnInit(): void {}
}
