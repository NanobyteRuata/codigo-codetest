import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';
import { AboutRwsInvites } from '../models/about-rws-invites.model';
import { AboutRwsInvitesService } from './about-rws-invites.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Feature } from '../models/feature.model';

@Component({
  selector: 'app-about-rws-invites',
  templateUrl: './about-rws-invites.component.html',
  styleUrls: ['./about-rws-invites.component.css']
})
export class AboutRwsInvitesComponent implements OnInit {
  isMenuShow: boolean = false;

  breadcrumbItems: MenuItem[];
  profileItems: MenuItem[];

  aboutRwsInvites: AboutRwsInvites;
  aboutRwsInvitesFg: FormGroup;
  features: FormArray;

  constructor(private _aboutRwsInvites: AboutRwsInvitesService, private _formBuilder: FormBuilder) { }
    
  ngOnInit(): void {
    this.breadcrumbItems = [
        {label:'Content Management - Getting Rewards', url: '/'},
        {label:'About RWS Invites', routerLink: '/about-rws-invites'},
    ];
    this.profileItems = [
      {label: "Profile"},
      {label: "Log Out"}
    ]
    this.getAboutRwsInvites()

  }

  async getAboutRwsInvites() {
    let response = await this._aboutRwsInvites.getAboutRwsInvites()
    if(response.success) {
      this.aboutRwsInvites = response.data as AboutRwsInvites;
      this.aboutRwsInvitesFg = this._formBuilder.group(this.aboutRwsInvites)
      this.features = this._formBuilder.array(this.aboutRwsInvites.features.map(f => this._formBuilder.group(f)))
      this.aboutRwsInvitesFg.patchValue({features: this.features})
    } else {
      // show error alert
    }
  }

  addNewFeature() {
    this.features.push(this._formBuilder.group(new Feature()))
    this.aboutRwsInvitesFg.patchValue({features: this.features})
  }

  removeFeature(index) {
    this.features.removeAt(index);
    this.aboutRwsInvitesFg.patchValue({features: this.features})
  }

  onSubmit(): void {
    let aboutRwsInvitesFormData = this.aboutRwsInvitesFg.value
    aboutRwsInvitesFormData['features'] = this.features.value
    console.log(aboutRwsInvitesFormData)
    this._aboutRwsInvites.updateAboutRwsInvites(aboutRwsInvitesFormData);
  }



}
