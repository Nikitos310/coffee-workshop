export interface BaseModel{
  id: number;
  uid: string;
}
export interface CoffeeModel extends BaseModel{
  blend_name: string;
  origin: string;
  variety: string;
  notes: string;
  intensifier: string;
}
