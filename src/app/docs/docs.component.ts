import {Component, OnInit, Inject} from '@angular/core';
import {docsToken, IDocs} from '../docs.token';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(@Inject(docsToken) public service: IDocs) { }

  ngOnInit() {
  }

}
