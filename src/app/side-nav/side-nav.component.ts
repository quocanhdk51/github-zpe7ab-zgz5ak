import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {
  public innerWidth: any;
  isOpened: boolean = false;
  public isDesktop: boolean;

  closeNav(): void {
    (document.getElementById("mySidenav") as HTMLElement).classList.remove(
      "sidenav--open"
    );
    (document.getElementById("main") as HTMLElement).classList.remove(
      "main--open"
    );
    (document.getElementById("opacity") as HTMLElement).classList.remove(
      "opacity-overlay"
    );

    var sidenavTexts: HTMLCollection = document.getElementsByClassName(
      "sidenav-item-text"
    ) as HTMLCollection;
    for (var sidenavText of sidenavTexts) {
      (sidenavText as HTMLElement).style.display = "none";
    }
  }

  openNav(): void {
    (document.getElementById("mySidenav") as HTMLElement).classList.add(
      "sidenav--open"
    );
    (document.getElementById("main") as HTMLElement).classList.add(
      "main--open"
    );
    (document.getElementById("opacity") as HTMLElement).classList.add(
      "opacity-overlay"
    );

    var sidenavTexts: HTMLCollection = document.getElementsByClassName(
      "sidenav-item-text"
    ) as HTMLCollection;
    setTimeout(() => {
      for (var sidenavText of sidenavTexts) {
        (sidenavText as HTMLElement).style.display = "inline";
      }
    }, 500);
  }

  toggleNav() {
    if (this.isOpened) {
      this.closeNav();
      this.isOpened = false;
    } else {
      this.openNav();
      this.isOpened = true;
    }
  }

  constructor() {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.checkWindowSizeHandler();
  }

  ngOnInit(): void {
    this.checkWindowSizeHandler();
  }

  checkWindowSizeHandler() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.isDesktop = false;
      (document.getElementById("mySidenav") as HTMLElement).classList.remove(
        "sidenav--desktop"
      );
      (document.getElementById("mySidenav") as HTMLElement).classList.add(
        "sidenav--mobile"
      );
    } else {
      this.isDesktop = true;
      (document.getElementById("mySidenav") as HTMLElement).classList.remove(
        "sidenav--mobile"
      );
      (document.getElementById("mySidenav") as HTMLElement).classList.add(
        "sidenav--desktop"
      );
    }
  }
}
