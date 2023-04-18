export class UpdateExpenseDTO { 
  id: string;
  value?: number;
  periodInit?: Date;
  periodFinal?: Date;
  local?: string;
  description?: string;
  status?: string;
}
