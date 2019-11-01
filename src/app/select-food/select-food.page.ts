import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.page.html',
  styleUrls: ['./select-food.page.scss'],
})
export class SelectFoodPage implements OnInit {
@Input() data: any;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.data);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
  
}
