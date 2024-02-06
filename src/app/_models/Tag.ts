export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'var(--blue-color)');
  static readonly TYPESCRIPT = new Tag('TypeScrpt', 'var(--blue-color)');
  static readonly PYTHON = new Tag('Python', 'var(--blue-color)');
  static readonly NODEJS = new Tag('NodeJs', 'var(--blue-color)');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'var(--blue-color)');
  static readonly FLASK = new Tag('Flask', 'var(--blue-color)');
  static readonly ELECTRON = new Tag('Electron', 'var(--blue-color)');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
