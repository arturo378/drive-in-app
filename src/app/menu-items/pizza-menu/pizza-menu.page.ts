import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authentication.service';
import { NavController, ModalController } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import { SelectFoodPage } from '../select-food/select-food.page';
@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.page.html',
  styleUrls: ['./pizza-menu.page.scss'],
})
export class PizzaMenuPage implements OnInit {

  userEmail: string;
  data: any;

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private crudService: CrudService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
    this.crudService.read_pizza().subscribe(data => {
 
      this.data = data.map(e => {
        return {
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['name'],
          Price: e.payload.doc.data()['price'],
          Description: e.payload.doc.data()['description'],
          Category: e.payload.doc.data()['category'],
          URL: e.payload.doc.data()['pic']
          
          
        };
      })
      console.log(this.data);
 
    });
  }

  async openModal(pizza) {
    const modal = await this.modalController.create({
      component: SelectFoodPage,
      componentProps: {
        data: pizza
      }
    });
    return await modal.present();
  }

}
