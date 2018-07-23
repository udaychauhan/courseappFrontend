import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartId : string;
  public cart;
  public cartCost;

  constructor(private _route: ActivatedRoute, private router: Router
    , public httpService: HttpService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.cartId = this._route.snapshot.paramMap.get('cartId');
    
    if(this.httpService.isEmpty(this.cartId)){
      this.toastr.error("Cart Id Is Missing!", 'Whoops!!');
    }

    this.getCart();
  }

  getCart(){
    let data = {
      cartId : this.cartId
    }
    this.httpService.getCart(data).subscribe(
      data => {
        let error = data.error;
        let message = data.message;
        if (error) {
          this.toastr.error(message, 'Fail!!');
          console.log(data);
        } else {
          if (data.status === 200) {
            console.log(data.data);
            //this.toastr.success(message, 'Success!');
            console.log(data.data);
            this.cart = data.data.cartItems;
            this.cartCost = 0;
            for(let c  of this.cart){
              this.cartCost += c.itemCost;
            }       
          }
        }
      },
      error => {
        this.toastr.error(error.message, 'Oops!');
      }
    );

  }//end get cart

  removeItemFromCart(item){
    let data = {
      cartId : this.cartId,
      itemId : item.itemId
    }
    this.httpService.deleteItemFromCart(data).subscribe(
      data => {
        let error = data.error;
        let message = data.message;
        if (error) {
          this.toastr.error(message, 'Fail!!');
          console.log(data);
        } else {
          if (data.status === 200) {
            console.log(data.data);
           // this.toastr.success(message, 'Success!');
            this.getCart();
          }
        }
      },
      error => {
        this.toastr.error(error.message, 'Oops!');
      }
    );
  }

  redirectToCourses(){
    setTimeout(() => {
      this.router.navigate(['/inventory']);
    },
      2000);
  }

}
