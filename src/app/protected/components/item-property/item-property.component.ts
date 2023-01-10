import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-property',
  templateUrl: './item-property.component.html',
  styleUrls: ['./item-property.component.css'],
})
export class ItemPropertyComponent implements OnInit {
  constructor() {}

  @Input() label: string = '';
  @Input() value: string = '';

  ngOnInit(): void {}
}
