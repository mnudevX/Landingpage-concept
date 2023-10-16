import { Component, HostListener, OnInit } from '@angular/core';
import { CloseNavService } from 'src/app/close-nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private cnService: CloseNavService) {}

  ngOnInit(): void {
    this.cnService.openNav.subscribe((open) => {
      this.classApplied = open;
    });
  }

  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  // Navbar Sticky
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
}
