import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CloseNavService {
  public openNav = new Subject<boolean>();
  constructor() {}
}
