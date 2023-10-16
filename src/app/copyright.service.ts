import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyrightService {
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
