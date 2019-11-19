import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'passedOneStringParameter'
}
)

export class passedOneStringParameterPipe implements PipeTransform {
    transform(value: string, Sex: string): string {
        if (Sex === "Male") {
            return "Mr." + value;
        } else {
            return "Miss." + value;
        }
    }
}