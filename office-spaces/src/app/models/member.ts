import { Model } from '@appstrax/database';

export class Member extends Model {
  name: string = '';
  surname: string = '';
  avatar: string = '';
  officeId: string = '';
}