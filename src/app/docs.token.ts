import {InjectionToken} from '@angular/core';

export interface IDocs {
  name: string;
}

export const docsToken = new InjectionToken<IDocs>('docs');
