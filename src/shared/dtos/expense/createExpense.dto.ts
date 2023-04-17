export class CreateExpenseDTO {
  public value: number;

  public periodInit: Date;

  public periodFinal: Date;

  public local: string;

  public description: string;

  public status: string;
}
