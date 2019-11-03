import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.page.html',
  styleUrls: ['./select-food.page.scss'],
})
export class SelectFoodPage implements OnInit {
private currentNumber = 0;
@Input() data: any;
  constructor(
    private modalController: ModalController,
    private storage: Storage,
    public toastController: ToastController
    ) { }

  ngOnInit() {
    console.log(this.data);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async confirm(){
    if(this.currentNumber<1)
    {
      const toast = await this.toastController.create({
        message: 'Please Select.',
        duration: 2000
      });
      toast.present();
    }else{
      this.storage.set(this.data.id, {name: this.data.Name, category: this.data.Category, quantity: this.currentNumber});
      await this.modalController.dismiss();
    }
    
    // this.storage.get('age').then((val) => {
    //   console.log('Your age is', val);
    // });

    
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
