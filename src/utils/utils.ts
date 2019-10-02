export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
  );
}

export interface IWorkerService {
  name: string;
  id: string;
  isInfoHighPriority: false;
  selected: boolean;
}
