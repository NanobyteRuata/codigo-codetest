import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { MenuItem } from 'primeng-lts/api';
import { AppAccountService } from './app-account.service';

@Component({
  selector: 'app-app-account',
  templateUrl: './app-account.component.html',
  styleUrls: ['./app-account.component.css']
})
export class AppAccountComponent implements OnInit {
  isMenuShow: boolean = false;

  breadcrumbItems: MenuItem[];
  profileItems: MenuItem[];

  masterheadImages = [];

  constructor(private _formBuilder: FormBuilder, private _appAccountService: AppAccountService) { }
    
  ngOnInit(): void {
    this.breadcrumbItems = [
        {label:'Content Management - Home Masterhead Images', url: '/'},
        {label:'App Account', routerLink: '/app-account'},
    ];
    this.profileItems = [
      {label: "Profile"},
      {label: "Log Out"}
    ]
    this.getMasterheadImages()
  }

  async getMasterheadImages() {
    let response = await this._appAccountService.getMasterheadImages()
    if(response.success) {
      this.masterheadImages = response.data as any[];
      let start = this.masterheadImages.length;
      if(start < 4) {
        for(let i = start; i <= 4; i++) {
          this.masterheadImages = [...this.masterheadImages, {id:null, imageUrl:"", publishDateTime: null, isCurrent: false}]
        }
      }
    }
  }

  async onCreate(masterheadImage) {
    let response = await this._appAccountService.createMasterheadImage(masterheadImage);
    if(response.success) {
      this.masterheadImages = [...this.masterheadImages, masterheadImage]
    } else {
      // show error
    }
  }

  async onUpdate(masterheadImage) {
    let response = await this._appAccountService.updateMasterheadImage(masterheadImage);
    if(response.success) {
      this.masterheadImages = this.masterheadImages.map(mI => mI.id == masterheadImage.id ? response.data : mI)
    } else {
      // show error
    }
  }

  async onSave(masterheadImage) {
    if(masterheadImage.id == null) {
      this.onCreate(masterheadImage)
    } else {
      this.onUpdate(masterheadImage)
    }
  }

}
