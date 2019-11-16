import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { CrudService } from './../services/crud.service';




 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  menu: boolean = false;
  recent: boolean = true;
  data: any;
  user_id: any;
 
  userEmail: string;
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private crudService: CrudService
    
    
    
  ) 
  {
  //  this.setTheValue();
  //  this.getTheValue();
  }
 
 
  ngOnInit(){
    this.user_id = this.authService.userDetails().uid;
    
    this.crudService.recent_orders(this.user_id).subscribe(data => {
 
    this.data = data.map(e => {
      return {
        id: e.payload.doc.id,
        Date:  new Date(e.payload.doc.data()['Date'].seconds*1000),
        Drinks: e.payload.doc.data()['Drink'],
        Total: e.payload.doc.data()['Total'],
        Entree: e.payload.doc.data()['Entree'],
        Side: e.payload.doc.data()['Side']
        
      };
    })
    console.log(this.data);
    ;

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
  Sides(){
    this.navCtrl.navigateForward('/sides')
  }
  checkout(){
    this.navCtrl.navigateForward('/checkout')
  }
  
  menuselect(){
    this.recent = false;
    this.menu = true;
  }
  homeselect(){
    this.menu = false;
    this.recent = true;
  }
  
  


}