
import { InventoryService } from '../inventory.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public courseList = [];
  public cartItemCount = 0;
  public cartId = '';
  constructor(private _route: ActivatedRoute, private router: Router
    , public toastr: ToastsManager, public httpService: HttpService, private inventoryService: InventoryService, vcr: ViewContainerRef, private httpClient: HttpClient) {
    this.toastr.setRootViewContainerRef(vcr);

  }

  ngOnInit() {
    this.courseList = this.inventoryService.getCourseItems();
    let dataFromLocalStorage = this.httpService.getUserInfoFromLocalstorage();

    console.log("data from local storage " + dataFromLocalStorage);

    if (this.httpService.isEmpty(dataFromLocalStorage)) {
      this.cartId = null;
    } else {
      this.cartId = this.httpService.getUserInfoFromLocalstorage().cartId;
      this.getCart();
    }

    // console.log("Cart id "+this.cartId);
  }

  redirectToViewCourse(course) {
    console.log("View Course" + JSON.stringify(course));
  }

  getCart() {
    let data = {
      cartId: this.cartId
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

           // this.toastr.success(message, 'Success!');
            console.log(data.data);
            this.cartItemCount = data.data.cartItems.length;

            console.log("Cart items length " + this.cartItemCount);

          }

        }

      },
      error => {

        this.toastr.error(error.message, 'Oops!');

      }
    );

  }

  addCourseToCart(course) {
    console.log("Add course to cart " + JSON.stringify(course));
    let data = {
      cartId: this.cartId,
      itemId: course.itemId,
      itemTitle: course.itemTitle,
      itemShortDescription: course.itemShortDescription,
      itemLongDescription: course.itemShortDescription,
      itemCost: course.itemCost
    }
    this.httpService.addItemToCart(data).subscribe(

      data => {
        let error = data.error;
        let message = data.message;

        if (error) {
          this.toastr.error(message, 'Fail!!');
          console.log(data);

        } else {
          if (data.status === 200) {

            if (this.httpService.isEmpty(this.cartId)) {
              let val = {
                cartId: data.data.cartId
              }
              this.httpService.setUserInfoInLocalStorage(val);
              this.cartId = this.httpService.getUserInfoFromLocalstorage().cartId;
            }


            //this.toastr.success(message, 'Success!');
            console.log(data.data);
            this.getCart();
            // if(data.data.userDetails.admin === 'admin'){
            //   setTimeout(() => {
            //     this.router.navigate(['/alluser']);
            //   },
            //     2000);
            // }else{
            //   setTimeout(()=>{
            //     this.router.navigate(['/usercalendar'],{ queryParams: { 'adminId': "" , 
            //     'userId':data.data.userDetails.userId}});
            //   },2000);

            // }

          }

        }

      },
      error => {

        this.toastr.error(error.message, 'Oops!');

      }
    );

  }

  redirectToCart() {
    if (this.httpService.isEmpty(this.cartId)) {
      this.toastr.error('Add items to cart', "Sorry!")
    } else {
      setTimeout(() => {
        this.router.navigate(['/cart/' + this.cartId]);
      },
        2000);
    }
    console.log("Redirect to cart" + this.cartItemCount);
  }

}
