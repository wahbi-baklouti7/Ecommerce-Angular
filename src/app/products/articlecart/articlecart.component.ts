import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-articlecart',
  templateUrl: './articlecart.component.html',
  styleUrls: ['./articlecart.component.css']
})
export class ArticlecartComponent implements OnInit {




articles:Products[]=[]

  constructor(private prodServ: ProductsService) {
    
  }
  ngOnInit() {
    

    this.loadArticles()

  }
  loadArticles() {
    this.prodServ.getAllProduct().subscribe(data=> {

      this.articles = data
    })
  }
}
