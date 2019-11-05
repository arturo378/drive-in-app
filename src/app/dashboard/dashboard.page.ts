import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';





 
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
    
    
    
  ) 
  {
  //  this.setTheValue();
  //  this.getTheValue();
  }
 
 
  ngOnInit(){
    
    

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
  checkout(){
    this.navCtrl.navigateForward('/checkout')
  }
  


}