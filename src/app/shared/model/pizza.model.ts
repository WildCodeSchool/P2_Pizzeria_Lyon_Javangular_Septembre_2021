export class Pizza {
  // membres privés (donc avec les _ devant)
  private _nom: string;
  private _description: string;
  private _imageUrl: string;
  private _cout: number;
  private _ingredients: string[];

  constructor(
    nom: string,
    description: string,
    imageUrl: string,
    cout: number,
    ingredients: string[]
  ) {
    this._nom = nom;
    this._description = description;
    this._imageUrl = imageUrl;
    this._cout = cout;
    this._ingredients = ingredients;
  }

  /**
   * Getter nom
   * @return {string}
   */
  public get nom(): string {
    return this._nom;
  }

  /**
   * Setter nom
   * @param {string} value
   */
  public set nom(value: string) {
    this._nom = value;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Getter imageUrl
   * @return {string}
   */
  public get imageUrl(): string {
    return this._imageUrl;
  }

  /**
   * Setter imageUrl
   * @param {string} value
   */
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }

  /**
   * Getter cout
   * @return {number}
   */
  public get cout(): number {
    return this._cout;
  }

  /**
   * Setter cout
   * @param {number} value
   */
  public set cout(value: number) {
    this._cout = value;
  }

  /**
   * Getter ingredients
   * @return {string[]}
   */
  public get ingredients(): string[] {
    return this._ingredients;
  }

  /**
   * Setter ingredients
   * @param {string[]} value
   */
  public set ingredients(value: string[]) {
    this._ingredients = value;
  }
}
