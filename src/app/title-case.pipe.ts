import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value || value == undefined) {
      return null;
    } else {
      let preposition = ['of', 'the'];
      let words = value.split(' ');
      for (var i = 0; i < words.length; i++) {
        if (i > 0 && preposition.includes(words[i].toLowerCase() as string)) {
          words[i] = words[i].toLowerCase();
        } else {
          words[i] =
            words[i].substring(0, 1).toUpperCase() +
            words[i].substring(1).toLowerCase();
        }
      }
      return words.join(' ');
    }
  }
}
