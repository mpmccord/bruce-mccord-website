import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})

export class SidenavListComponent implements OnInit {
aboutUs: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToIndex() {
    this.router.navigate(['/', 'index']);
  }
  goToAboutUs() {
    this.router.navigate(['/', 'aboutUs']);
  }
  goToLinks() {
    this.router.navigate(['/', 'links']);
  }
  goToMedia() {
    this.router.navigate(['/', 'media']);
  }
  goToPublications() {
    this.router.navigate(['/', 'publications']);
  }
  goToResearch() {
    this.router.navigate(['/', 'research']);
  }
  goToTestimonials() {
    this.router.navigate(['/', 'testimonials']);
  }
  goToUpdates() {
    this.router.navigate(['/', 'updates']);
  }
  goToCollaborations() {
    this.router.navigate(['/', 'collaborations'])
  }
  goToBruceMcCord() {
    this.router.navigate(['/', 'brucemccord'])
  }
  goToPeople() {
    this.router.navigate(['/', 'people'])
  }
}