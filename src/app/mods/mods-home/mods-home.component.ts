import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items: any = [
    { title: 'Why is the sky blue?', content: 'The sky is blue becuse it is!' },
    { title: 'What does an orange taste like?', content: 'Like an orange!' },
    { title: 'What does an orange taste like?', content: 'Like an orange!' },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
