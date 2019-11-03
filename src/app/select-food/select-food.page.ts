import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service'

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.page.html',
  styleUrls: ['./select-food.page.scss'],
})
export class SelectFoodPage implements OnInit {

items: Item[] = [];
newItem: Item = <Item>{};  
private currentNumber = 0;
@Input() data: any;
  constructor(
    private modalController: ModalController,
    private storage: Storage,
    public toastController: ToastController,
    private storageService: StorageService,
    ) { }

  ngOnInit() {
    console.log(this.items);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async confirm(){
    // this.newItem.id = this.data.id;
    // this.newItem.name = this.data.Name;
    // this.newItem.category = this.data.category;
    // this.newItem.quantitiy = this.data.currentNumber;


    // this.storageService.addItem(this.newItem).then(item => {
    //   this.newItem = <Item>{};
    //   // this.showToast('Item Added!');
    //   this.loadItems();
    // })
    
      await this.modalController.dismiss();
    
    
    // this.storage.get('age').then((val) => {
    //   console.log('Your age is', val);
    // });

    
  }
  loadItems(){
    // this.storageService.getItem().then(items => {
    //   this.items = items;
    // })
  }



  private increment () {
    if(this.currentNumber < 10){
      this.currentNumber++;
    }
    
  }
  
  private decrement () {

    if(this.currentNumber >0){
      this.currentNumber--;
    }
    
  }
  
}
