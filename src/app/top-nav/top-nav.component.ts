import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {
  @Input() openNav!: Function;
  @Input() closeNav!: Function;
  opened: boolean = false;

  toggleNav(): void {
    if (this.opened) {
      this.closeNav();
      this.opened = false;
    } else {
      this.openNav();
      this.opened = true;
    }
    console.log(this.opened);
  }

  constructor() {}

  ngOnInit() {}
}
