import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passedAnymultiparameters'
})
export class PassedAnymultiparametersPipe implements PipeTransform {
  transform(value: string, Sex: string, Year: number): string {
    if (Year == 2019) {
      return "Current year" + value;
    }
    else {
      return "old year" + (value + 1);
    }
  }
}
