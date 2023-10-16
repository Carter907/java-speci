import { SortQuestionsByDateAddedPipe } from './sort-questions-by-date-added.pipe';

describe('SortQuestionsByDateAddedPipe', () => {
  it('create an instance', () => {
    const pipe = new SortQuestionsByDateAddedPipe();
    expect(pipe).toBeTruthy();
  });
});
