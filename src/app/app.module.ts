import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CourseComponent } from './course/course.component';
import { CartComponent } from './cart/cart.component';
import { InventoryService } from './inventory.service';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CourseComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    CalendarModule.forRoot(),
    BrowserModule,CalendarModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ToastModule.forRoot(),BrowserAnimationsModule,
    RouterModule.forRoot([
      
      {path:'inventory',component:InventoryComponent},
      {path:'',redirectTo:'inventory',pathMatch:'full'}, 
      {path:'course/:courseId',component:CourseComponent},
      {path:'cart/:cartId',component:CartComponent},
      { path: '*', component: InventoryComponent },
      { path: '**', component: InventoryComponent }
      ])
  ],
  providers: [InventoryService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
