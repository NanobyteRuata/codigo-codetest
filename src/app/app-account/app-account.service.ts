import { Injectable } from '@angular/core';
import { BaseServiceService } from '../services/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppAccountService {

  constructor(private _baseService: BaseServiceService) { }

  getMasterheadImages() {
    return this._baseService.get('masterheadImages');
  }

  updateMasterheadImage(data) {
    return this._baseService.put(`masterheadImages/${data.id}`,data)
  }

  createMasterheadImage(data) {
    return this._baseService.post(`masterheadImages`,data)
  }
}
