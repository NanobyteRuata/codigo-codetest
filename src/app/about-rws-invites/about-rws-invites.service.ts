import { Injectable } from '@angular/core';
import { AboutRwsInvites } from '../models/about-rws-invites.model';
import { BaseServiceService } from '../services/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AboutRwsInvitesService {

  constructor(private _baseService: BaseServiceService) { }

  getAboutRwsInvites() {
    return this._baseService.get('aboutRwsInvites')
  }

  updateAboutRwsInvites(data: FormData) {
    return this._baseService.put('aboutRwsInvites',data)
  }
}
