import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortQuestionsByDateAdded',
  pure: true,
  standalone: false,

})
export class SortQuestionsByDateAddedPipe implements PipeTransform {

  transform(): unknown {
    return null;
  }

}
