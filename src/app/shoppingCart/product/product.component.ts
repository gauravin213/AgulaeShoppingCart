import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id: number;

  loaderCheck: boolean = true;

  singleProduct = {
    "name": "",
    "images": "",
    "description": "",
    "price": ""
  };

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.productService.get(this.id).subscribe(data => {
      console.log(data);
      this.singleProduct = data;
      this.loaderCheck = false;
    });

    console.log(this.id);
    
  }

  addtocart(singleProduct: any){
    console.log(singleProduct);
  }

}
