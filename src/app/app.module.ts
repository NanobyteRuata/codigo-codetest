import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button'
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { EditorModule } from 'primeng/editor';
import {PanelMenuModule} from 'primeng/panelmenu';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { AboutRwsInvitesComponent } from './about-rws-invites/about-rws-invites.component';
import { CustomInputFieldComponent } from './components/custom-input-field/custom-input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageDropzoneComponent } from './components/image-dropzone/image-dropzone.component';
import { DropzoneDirective } from './components/directives/dropzone.directive';
import { HttpClientModule } from '@angular/common/http';
import { NoPageComponent } from './no-page/no-page.component';
import { AppAccountComponent } from './app-account/app-account.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AboutRwsInvitesComponent,
    CustomInputFieldComponent,
    ImageDropzoneComponent,
    DropzoneDirective,
    NoPageComponent,
    AppAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    MenuModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    EditorModule,
    PanelMenuModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
