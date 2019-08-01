import {Component, OnInit, Inject} from '@angular/core';
import {docsToken, IDocs} from '../docs.token';

@Component({
  selector: 'app-docs-presentor',
  templateUrl: './docs-presentor.component.html',
  styleUrls: ['./docs-presentor.component.css']
})
export class DocsPresentorComponent implements OnInit {


  constructor(@Inject(docsToken) public service: IDocs) { }

  ngOnInit() {
  }

}
