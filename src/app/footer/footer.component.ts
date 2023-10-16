import { Component } from '@angular/core';
import { CopyrightService } from '../copyright.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear: number;
  copyRightName: string = 'Manuel Utzeri';

  constructor(private copyrightService: CopyrightService) {
    this.currentYear = this.copyrightService.getCurrentYear();
  }
}
