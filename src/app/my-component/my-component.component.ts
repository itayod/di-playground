import { Component, OnInit } from '@angular/core';
import {docsToken} from '../docs.token';
import {DocsServiceService} from './docs-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [{provide: docsToken, useClass: DocsServiceService}]
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
