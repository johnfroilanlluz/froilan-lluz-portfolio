export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('Angular', 'darkred');
  static readonly PYTHON = new Tag('Angular', 'pink');
  static readonly CSHARP = new Tag('Angular', 'green');
  static readonly JAVA = new Tag('Angular', 'orange');
  static readonly NODEJS = new Tag('Angular', 'brown');
  static readonly ASPNET = new Tag('Angular', 'purple');
  static readonly JAVASCRIPT = new Tag('Angular', 'orange');
  static readonly REACT = new Tag('Angular', 'blue');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
