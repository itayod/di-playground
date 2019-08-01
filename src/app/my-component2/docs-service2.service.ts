import { Injectable } from '@angular/core';
import {IDocs} from '../docs.token';

@Injectable()
export class DocsService2Service implements IDocs {

  constructor() { }

  public name = 'Docs 2';
}
