import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ListarticletableComponent } from './listarticletable/listarticletable.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListproductsComponent,
    CreateproductComponent,
    EditproductComponent,
    ListarticletableComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DataTablesModule,  
    FormsModule
  ]
})
export class ProductsModule { }
