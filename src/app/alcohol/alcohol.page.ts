import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController, ModalController } from '@ionic/angular';

import { CrudService } from './../services/crud.service';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.page.html',
  styleUrls: ['./alcohol.page.scss'],
})
export class AlcoholPage implements OnInit {

  userEmail: string;
  data: any;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private crudService: CrudService
  ) { }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
    this.crudService.read_alcohol().subscribe(data => {
 
      this.data = data.map(e => {
        return {
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['name'],
          Price: e.payload.doc.data()['price'],
          Description: e.payload.doc.data()['description'],
          
        };
      })
      console.log(this.data);
 
    });
  }

}
