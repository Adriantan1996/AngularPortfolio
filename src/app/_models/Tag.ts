export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('Typescript', 'violet');
  static readonly REACT = new Tag('React', 'blue');
  static readonly JAVASCRIPT = new Tag('Javascript', 'orange');
  static readonly NODEJS = new Tag('NodeJs', 'purple');
  static readonly EXPRESSJS = new Tag('ExpressJs', 'green');
  static readonly PYTHON = new Tag('Python', 'limegreen');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}
  toString() {
    return this.key;
  }
}
