import { Injectable } from '@angular/core';
import { TokenType } from '@angular/compiler/src/ml_parser/lexer';
import { Storage } from '@ionic/storage'


export interface Item{
  id: number,
  name: string,
  category: string,
  quantity: number,
  price: number,
}

const ITEMS_KEY = 'items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(

    private storage: Storage

  ) { }

  addItem(item: Item): Promise<any>{

    var counter = 0;
    return this.storage.get(ITEMS_KEY).then((items: Item []) => {
      
      if(items.length == 0){
          items.push(item);
          return this.storage.set(ITEMS_KEY, items);
      }else{
        
        for (let i of items){
          if (i.id === item.id){
            counter++;
            i.quantity = i.quantity+item.quantity;
          }
        }
        console.log(counter);
        if(counter == 0){
          console.log("Hii");

          items.push(item);
        }
        return this.storage.set(ITEMS_KEY, items)

      }

      
    });
  }
  getItem(): Promise<Item[]> {
    
    return this.storage.get(ITEMS_KEY);

  }
  updateItem(item: Item){
    return this.storage.get(ITEMS_KEY).then((items: Item[]) =>{
      if (!items || items.length === 0){
        return null;
      }
      let newItems: Item[] = [];
      for (let i of items){
        if (i.id === item.id){
          newItems.push(item);
        }else{
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItems)
    
    });


  }

  deleteItem(id: number): Promise<Item>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) =>{
      if (!items || items.length === 0) {
        return null;
      }
      let toKeep: Item[] = [];

      for (let i of items) {
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
      
    });

  }


}
