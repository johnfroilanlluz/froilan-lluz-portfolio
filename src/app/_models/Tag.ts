export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'darkred');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
  static readonly PYTHON = new Tag('Python', 'DarkGreen');
  static readonly NODEJS = new Tag('NodeJs', 'Green');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'Orange');
  static readonly FLASK = new Tag('Flask', 'Grey');
  static readonly ELECTRON = new Tag('Electron', 'DarkGrey');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
