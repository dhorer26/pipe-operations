import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getPositionofElement',
  pure: true
})
export class GetPositionofElementPipe implements PipeTransform {

  transform(value: HTMLElement, xLerp: number, yLerp: number): any | null {
    if (value != null) {
        const boundingRect = value.getBoundingClientRect();
        return {
            x: boundingRect.left + xLerp * boundingRect.width,
            y: boundingRect.top + yLerp * boundingRect.height,
        };
    } else {
        return null;
    }
  }
}