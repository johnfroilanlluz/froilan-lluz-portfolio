export class Tag {
  static readonly ANGULAR = new Tag('Angular', '#dc3545');
  static readonly TYPESCRIPT = new Tag('TypeScript', '#dc3545');
  static readonly PYTHON = new Tag('Python', '#dc3545');
  static readonly NODEJS = new Tag('NodeJs', '#dc3545');
  static readonly JAVASCRIPT = new Tag('JavaScript', '#dc3545');
  static readonly FLASK = new Tag('Flask', '#dc3545');
  static readonly ELECTRON = new Tag('Electron', '#dc3545');


  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
