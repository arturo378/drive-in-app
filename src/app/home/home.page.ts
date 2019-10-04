import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';





interface User{
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: User = {
    email: 'amadrid378@hotmail.com',
    password: 'test1234',

  };
 

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
    

    ) {}

  async createAccount() {
    const user = await this.afAuth.auth.createUserWithEmailAndPassword(
      this.user.email,
    this.user.password,
    );

    console.log(user);
  }

  async login() {
      this.router.navigateByUrl('/login');
      const user = await this.afAuth.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
      
    );


    console.log(user);
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }

}
