import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third',
  template: '<h1>Third Component!</h1>'
})
export class ThirdComponent implements OnInit {

  constructor(
    private metaService: Meta,
    private router: Router,
    private titleService: Title,
  ) { 
    // Set dynamic value from component
    this.titleService.setTitle("Title of Third A Component");
    this.metaService.updateTag({ name: 'description', content: "Description of Third A Component" });
    this.metaService.updateTag({ name: 'robots', content: "Robots of Third A Component" });
    this.metaService.updateTag({ property: 'og:url', content: this.router.url });
    // Remove property
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("property='og:description'");
  }

  ngOnInit(): void {
  }
}