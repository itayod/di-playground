import { Injectable } from '@angular/core';
import {IDocs} from '../docs.token';

@Injectable()
export class DocsServiceService implements IDocs {

  constructor() { }

  public name = 'Docs 1';
}
