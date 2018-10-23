export class TodoItem {

  id:number;
  content: string;
  rank: number;
  done: boolean;

  constructor(content: string) {
    this.content = content;
    this.done = false;
  }
}
