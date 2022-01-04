import { Injectable } from '@angular/core';
import { CrudService } from '@appstrax/database';
import { Office } from '../models/office';

@Injectable()
export class OfficeService extends CrudService<Office> {
  constructor() {
    super('offices', Office);
  }
}
