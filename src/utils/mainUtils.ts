// The function is used to get the index for each element in filterButtons array.
export function getFilterId(filterButtons: string[], content: string): number {
  let key: number = 0;

  for (let i = 0; i < filterButtons.length; i++) {
    if (filterButtons[i] === content) {
      key = i;
      break;
    }
    key++;
  }

  return key;
}
