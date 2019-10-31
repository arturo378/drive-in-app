import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';




 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
 
  userEmail: string;
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private storage: Storage,
    
    
  ) 
  {
  //  this.setTheValue();
  //  this.getTheValue();
  }
  setTheValue(){
  this.storage.set('name', "ironMan")
  }
  getTheValue(){
    this.storage.get('name').then( (val) => {
      console.log("value is " + val)
    })
  }

 
  ngOnInit(){
    
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
    this.storage.set('age', '23');

  // Or to get a key/value pair
  this.storage.get('age').then((val) => {
    console.log('Your age is', val);
  });


  }
 

  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }
  Burger_Menu(){
    this.navCtrl.navigateForward('/burger-menu');
  }
  Pizza_Menu(){
    this.navCtrl.navigateForward('/pizza-menu');
  }
  Beverages_Menu(){
    this.navCtrl.navigateForward('/beverages-menu');

  }
  Alcohol(){
    this.navCtrl.navigateForward('/alcohol');

  }
  


}