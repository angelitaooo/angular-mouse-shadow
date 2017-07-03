import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('titleElement') h1ElementInTemplate;
  @ViewChild('heroElement') heroElementInTemplate;

  walk = 500; // 100px

  shadow(e) {
    const height = this.heroElementInTemplate.nativeElement.offsetHeight;
    const width = this.heroElementInTemplate.nativeElement.offsetWidth;
    let x = e.offsetX;
    let y = e.offsetY;

    if (this.heroElementInTemplate.nativeElement !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * this.walk) - (this.walk / 2));
    const yWalk = Math.round((y / height * this.walk) - (this.walk / 2));

    const newStyles = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

    this.h1ElementInTemplate.nativeElement.style.textShadow = newStyles;
  }
}
