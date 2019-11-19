import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';  

@Pipe({
  name: 'includehtml'
})
export class IncludehtmlPipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) { }  

  transform(value: string, event?: number): SafeHtml {  
    let termsApply = value + '<span style="color:#b30000;"> <img width="50" alt="MVP Logo" src="./assets/images/MVP.png">  *</span>';  
  
    if (event > 60) {  
      return this._sanitizer.bypassSecurityTrustHtml(termsApply);   
    }  
    else {  
      return this._sanitizer.bypassSecurityTrustHtml(value);  
    }  
  }
}