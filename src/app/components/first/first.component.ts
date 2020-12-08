import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  template: '<h1>First Component!</h1>'
})
export class FirstComponent implements OnInit {

  constructor(
    private metaService: Meta,
    private router: Router,
    private titleService: Title,
  ) { 
    /**
     * Set dynamic value from component
     */
    this.titleService.setTitle("Title of First A Component");
    this.metaService.updateTag({ name: 'description', content: "Description of First A Component" });
    this.metaService.updateTag({ name: 'robots', content: "Robots of First A Component" });
    this.metaService.updateTag({ property: 'og:url', content: this.router.url });
    this.metaService.updateTag({ property: 'og:title', content: "Title of First A Component for social media" });
    this.metaService.updateTag({ property: 'og:description', content: "Description of First A Component for social media" });
  }

  ngOnInit(): void {
  }
}