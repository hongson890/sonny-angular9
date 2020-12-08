import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: '<h1>Second Component!</h1>'
})
export class SecondComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private metaService: Meta,
    private titleService: Title,
  ) { 
    // Set value from route data
    this.titleService.setTitle(this.route.snapshot.data.title)
    this.metaService.updateTag({ name: 'description', content: this.route.snapshot.data.descrption });
    this.metaService.updateTag({ name: 'robots', content: this.route.snapshot.data.robots });
    this.metaService.updateTag({ property: 'og:url', content: this.router.url });
    this.metaService.updateTag({ property: 'og:title', content: this.route.snapshot.data.ogTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.route.snapshot.data.ogDescription });
  }

  ngOnInit(): void {
  }
}