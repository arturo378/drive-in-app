import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_ticket(record) {
    console.log(record);
    return this.firestore.collection('tickets').add(record);
  }
  recent_orders(userid){
    return this.firestore.collection('tickets', ref => ref.where('UID', '==', userid) ).snapshotChanges();
  }

  read_burger() {
    return this.firestore.collection('burgers').snapshotChanges();
  }
  read_sides() {
    return this.firestore.collection('sides').snapshotChanges();
  }

  read_beverages() {
    return this.firestore.collection('beverages').snapshotChanges();
  }
  read_alcohol() {
    return this.firestore.collection('cocktails_beer').snapshotChanges();
  }
  read_pizza() {
    return this.firestore.collection('pizza').snapshotChanges();
  }

  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }

  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
}