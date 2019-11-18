import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { CrudService } from './../services/crud.service';
import { StorageService, Item } from '../services/storage.service'
import { SafeMethodCall } from '@angular/compiler';
import { ToastController, Platform } from '@ionic/angular';




 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  newItem: Item = <Item>{}; 
  menu: boolean = false;
  recent: boolean = true;
  data: any;
  user_id: any;
 
  userEmail: string;
 
  constructor(
    private navCtrl: NavController,
    public toastController: ToastController,
    private authService: AuthenticateService,
    private crudService: CrudService,
    private storageService: StorageService
    
    
    
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
        Drinks: JSON.parse(e.payload.doc.data()['Drink']),
        Total: e.payload.doc.data()['Total'],
        Entree: JSON.parse(e.payload.doc.data()['Entree']),
        Side: JSON.parse(e.payload.doc.data()['Side'])
        
      };
    })
    data = this.data.sort((a, b) => b.Date - a.Date)
    
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

  async openModal(items){
    const alert = document.createElement('ion-alert');
    alert.header = 'Confirmation';
    alert.inputs = [
    
      {
        name: 'parking_id',
        id: 'parking_id',
        placeholder: 'Parking Lot Number'
      },
      {
        name: 'comments',
        id: 'comments',
        
        placeholder: 'Order Comments'
      }
    ];
    alert.buttons = [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel')
        }
      }, {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok')
        }
      }
    ];

    document.body.appendChild(alert);
    await alert.present();
    let result = await alert.onDidDismiss();




    var total = 0;
    
    var multiplier = 1;
    var ticket = {};


    
    for  (let key in items.Entree){
      if(items.Entree[key].quantity>1){
        multiplier = items.Entree[key].quantity;
      }
      
    total = total+(items.Entree[key].price*multiplier);
    }
    for  (let key in items.Side){
      if(items.Side[key].quantity>1){
        multiplier = items.Side[key].quantity;
      }
      
      total = total+(items.Side[key].price*multiplier)
      }
    for  (let key in items.Drinks){
      if(items.Drinks[key].quantity>1){
        multiplier = items.Drinks[key].quantity;
      }
      
        total = total+(items.Drinks[key].price*multiplier)
        }

        

        ticket["Date"] = new Date();
        ticket["Drink"] = JSON.stringify(items.Drinks);
        ticket["Entree"] = JSON.stringify(items.Entree);
        ticket["ID"] = "T-" + Math.round((new Date().getTime() / 1000));
        ticket["Is_active"] = true;
        ticket["Side"] = JSON.stringify(items.Side);
        ticket["Status"] = "Order Placed";
        ticket["Total"] = Math.round(total * 100) / 100;
        ticket["UID"] = this.authService.userDetails().uid;
        ticket["Comments"] = result.data.values.comments;
        ticket["space_id"] = result.data.values.parking_id;
        this.crudService.create_ticket(ticket);
        this.navCtrl.navigateBack('/dashboard');
        

    

  }
  
  

}
