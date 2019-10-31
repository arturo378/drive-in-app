import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-food',
  templateUrl: './select-food.page.html',
  styleUrls: ['./select-food.page.scss'],
})
export class SelectFoodPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
