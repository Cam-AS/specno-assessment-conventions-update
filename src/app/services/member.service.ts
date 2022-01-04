import { Member } from '../models/member';
import { Injectable } from '@angular/core';
import { CrudService } from '@appstrax/database';

@Injectable()
export class MemberService extends CrudService<Member> {
  constructor() {
    super('members', Member);
  }
}
