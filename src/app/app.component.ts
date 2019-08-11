import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  public items = [];
  public item = '';

  ngOnInit(): void {
    this.getList();
  }

  public addToList(): void {
    this.items.push(this.item);
    this.item = '';
  }

  public getList(): void {
    this.items = [
      'somethinng',
      'something else'
    ];
  }
}
