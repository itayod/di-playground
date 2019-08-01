import {Component, OnInit} from '@angular/core';
import {docsToken} from '../docs.token';
import {DocsService2Service} from './docs-service2.service';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css'],
  providers: [{provide: docsToken, useClass: DocsService2Service}]
})
export class MyComponent2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
