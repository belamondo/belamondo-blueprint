import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'stringToHtml'
})
export class StringToHtmlPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) {
    
  }

  transform(value: any, args?: any): any {
    if (!value) return value;
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }
}
