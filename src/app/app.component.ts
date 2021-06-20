import { Component } from '@angular/core';
import { MenuItem } from 'primeng-lts/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codigo-test';

  panelItems: MenuItem[] = [
    {
      label: "Partnets Management", url: '/'
    },
    {
      label: "Content Management", items: [
        {
          label: "Contact Us Content", url: '/'
        },
        {
          label: "Hotel Masterhead Images", url: '/app-account'
        },
        {
          label: "Getting Rewards", url: '/about-rws-invites'
        },
        {
          label: "RWS Invites", url: '/'
        },
        {
          label: "About RWS", url: '/'
        },
        {
          label: "Legal Content", url: '/'
        },
        {
          label: "URLs Set up RWS", url: '/'
        }
      ]
    },
    {
      label: "GR Campaigns and Promos", url: '/'
    },
    {
      label: "Push Notifications", url: '/'
    },
    {
      label: "Admin Management", url: '/'
    },
    {
      label: "User Data Export", url: '/'
    },
    {
      label: "Master Setting", url: '/'
    }
  ]
}
