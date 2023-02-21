import { AuthService } from 'src/app/auth/services/auth.service';
import { UserProfile } from './../../interfaces/interfaceProfile';
import { ProfileService } from './../../services/profile.service';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  @ViewChild('subhijaContainer', { read: ViewContainerRef }) subhijaContainer: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    const subhija = this.activatedRoute.snapshot.paramMap.get('settings');
    if (subhija) {
      const factory = this.resolver.resolveComponentFactory(ProfileSettingsComponent);
      const component = this.subhijaContainer.createComponent(factory);
      return component;
    }
  }
}


