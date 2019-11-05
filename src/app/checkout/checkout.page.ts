import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StorageService, Item } from '../services/storage.service'
import { ToastController, Platform } from '@ionic/angular';
import { CrudService } from './../services/crud.service';



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
      console.log(this.items);

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
  submit(){
    var entree = {};
    var drink = {};
    var side = {};
    var ticket = {};

    this.storageService.getItem().then(items => {
      this.items = items;
      

    })
    for(var i = 0; i < this.items.length; ++i){
      if(this.items[i].category == "entree"){
        entree[i] = this.items[i];
      }
      if(this.items[i].category == "drink"){
        drink[i] = this.items[i];
      }
      if(this.items[i].category == "side"){
        side[i] = this.items[i];
      }

    }

    ticket["Date"] = new Date();
    ticket["Drink"] = JSON.stringify(drink);
    ticket["Entree"] = JSON.stringify(entree);
    ticket["ID"] = "T-1";
    ticket["Is_active"] = true;
    ticket["Side"] = JSON.stringify(side);
    ticket["Status"] = "Order Placed";
    ticket["Total"] = "20.42";
    ticket["UID"] = this.authService.userDetails().uid;
    ticket["Comments"] = "Hot sauce";
    ticket["space_id"] = "A-1"

    this.crudService.create_ticket(ticket);


    console.log(ticket);





    
    
  }

}
