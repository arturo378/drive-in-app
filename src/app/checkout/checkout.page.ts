import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StorageService, Item } from '../services/storage.service'
import { ToastController, Platform } from '@ionic/angular';
import { CrudService } from './../services/crud.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  
  items: Item[] = [];
newItem: Item = <Item>{};  
  userEmail: string;
  constructor(
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storageService: StorageService,
    private plt: Platform,
    private crudService: CrudService,
    public alertController: AlertController
  ) {
    this.plt.ready().then(() => {
      this.loadItems();
    })
   }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }

  }
  loadItems(){
    this.storageService.getItem().then(items => {
      this.items = items;
      

    })
  }
  async updateItem(item){
    const alert = document.createElement('ion-alert');
    alert.header = 'Update Quantity';
    alert.inputs = [
    
      {
        name: 'quantity',
        id: 'quantity',
        placeholder: 'Quantity'
      }
    ]
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
   

    this.storageService.updateItem(item, result.data.values.quantity).then(item => {
      this.newItem = <Item>{};
      // this.showToast('Item Added!');
      this.loadItems();
    })

      



  }
  deleteItem(item){
    this.storageService.deleteItem(item.id).then(item => {
      //this.showToast('Item Removed!');
      this.loadItems();
    })
  }

  close(){
    this.navCtrl.navigateBack('/dashboard');
  }
  async presentAlertPrompt() {
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
    
    var entree = {};
    var drink = {};
    var side = {};
    var ticket = {};
    var total = 0;
    
    var multiplier = 1;

    this.storageService.getItem().then(items => {
      this.items = items;
      
      
      

    })
    
    for(var i = 0; i < this.items.length; ++i){
      if(this.items[i].category == "entree"){
        if(this.items[i].quantity >1){
          multiplier = this.items[i].quantity;
        }
        total = total+ (this.items[i].price*multiplier);
        entree[i] = this.items[i];
      }

      if(this.items[i].category == "drink"){
        if(this.items[i].quantity>1){
          multiplier = this.items[i].quantity;
        }
        total = total + (this.items[i].price*multiplier);
        drink[i] = this.items[i];
      }

      if(this.items[i].category == "side"){
        if(this.items[i].quantity>1){
          multiplier = this.items[i].quantity;
        }
        total = total + (this.items[i].price*multiplier);
        side[i] = this.items[i];
      }

    }
    console.log(Math.round(total * 100) / 100);
    ticket["Date"] = new Date();
    ticket["Drink"] = JSON.stringify(drink);
    ticket["Entree"] = JSON.stringify(entree);
    ticket["ID"] = "T-" + Math.round((new Date().getTime() / 1000));
    ticket["Is_active"] = true;
    ticket["Side"] = JSON.stringify(side);
    ticket["Status"] = "Order Placed";
    ticket["Total"] = Math.round(total * 100) / 100;
    ticket["UID"] = this.authService.userDetails().uid;
    ticket["Comments"] = result.data.values.comments;
    ticket["space_id"] = result.data.values.parking_id;

    this.crudService.create_ticket(ticket);
    this.storageService.clearall();

    this.navCtrl.navigateBack('/dashboard');
    
    
    
    
  }
  
  submit(){
    

   




    
    
  }

}
