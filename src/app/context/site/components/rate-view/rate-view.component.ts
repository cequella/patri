import { Component, Input, OnInit } from '@angular/core';
import { faStar, faStarHalfAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'site-rate-view',
  templateUrl: './rate-view.component.html',
  styleUrls: ['./rate-view.component.scss']
})
export class RateViewComponent implements OnInit {
  @Input("value") value!: number;
  @Input("max") max = 5;

  _starList: IconDefinition[] | undefined;

  constructor() { }

  get starList(): IconDefinition[] {
    return this._starList || [];
  }

  ngOnInit(): void {
    if(this.max<0) throw("Max value must not be negative");

    this._starList = Array(this.max).fill(faStarOutline);

    const correctedValue = Math.min(Math.max(this.value, 0), this.max);
    const fullStarCount = Math.floor(correctedValue);
    const hasHalf = this.value!=fullStarCount;

    for(let i=0; i<fullStarCount; i++) {
      this._starList[i] = faStar;
    }
    if(hasHalf) {
      this._starList[fullStarCount] = faStarHalfAlt;
    }
  }

}
