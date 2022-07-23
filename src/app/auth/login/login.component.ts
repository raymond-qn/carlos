import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitLogin() {
       console.log('user', this.user);
       console.log('password', this.password);
       if (this.user == "ftd") {
         this.router.navigateByUrl('/ftd/order/create');
       } else if (this.user == "supp") {
         this.router.navigateByUrl('/supp/order/view');
       } else {

       }
  }

}
