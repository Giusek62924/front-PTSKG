import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { BsModalRef, ModalOptions } from "ngx-bootstrap/modal";

import { Servers } from "./servers.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
