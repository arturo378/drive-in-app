import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController, ModalController } from '@ionic/angular';
import { SelectFoodPage } from '../menu-items/select-food/select-food.page';
import { CrudService } from './../services/crud.service';


@Component({
  selector: 'app-sides',
  templateUrl: './sides.page.html',
  styleUrls: ['./sides.page.scss'],
})
export class SidesPage implements OnInit {
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
    
    this.crudService.read_sides().subscribe(data => {
 
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
 
    });
    
  }
  
  async openModal(items) {

    
    
    const modal = await this.modalController.create({
      component: SelectFoodPage,
      componentProps: {
        data: items
      }
    });
    return await modal.present();

  }

  }
