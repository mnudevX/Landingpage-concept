import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  private textToTypeArray = [
    'Komponentenbasiert.',
    'Databinding.',
    'Routing.',
    'und vieles mehr.',
  ];

  private typingSpeed = 80;
  private currentIndex = 0;
  private intervalId: any;

  constructor() {}

  ngAfterViewInit() {
    this.startTypewriter();
  }

  startTypewriter() {
    const textElement = document.getElementById('typewriter-text');
    const currentText = this.textToTypeArray[this.currentIndex];
    let currentCharIndex = 0;

    if (textElement && currentText) {
      this.intervalId = setInterval(() => {
        if (currentCharIndex < currentText.length) {
          const currentChar = currentText.charAt(currentCharIndex);
          textElement.innerHTML += currentChar;
          currentCharIndex++;
        } else {
          clearInterval(this.intervalId);

          setTimeout(() => {
            this.deleteTextCharacterByCharacter(textElement, () => {
              this.currentIndex++;
              if (this.currentIndex >= this.textToTypeArray.length) {
                this.currentIndex = 0; // Loop to the beginning
              }
              this.startTypewriter(); // Start typing the next text
            });
          }, 3000); // Adjust the delay (milliseconds) before clearing
        }
      }, this.typingSpeed);
    }
  }

  deleteTextCharacterByCharacter(element: HTMLElement, callback: () => void) {
    const text = element.innerHTML;
    let index = text.length;
    const deleteIntervalId = setInterval(() => {
      if (index > 0) {
        element.innerHTML = text.slice(0, index - 1);
        index--;
      } else {
        clearInterval(deleteIntervalId);
        callback(); // Call the provided callback function after clearing
      }
    }, this.typingSpeed / 2); // Adjust the clearing speed (milliseconds per character)
  }
}
