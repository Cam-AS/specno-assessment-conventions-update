import { Model } from '@appstrax/database';

export class Office extends Model {
  name: string = '';
  address: string = '';
  email: string = '';
  phone: string = ''; 
  capacity: number = 0;
  color: string = '';
  members: string[] = [];
}