import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  listData: any[] = [];
  
  constructor(
    private logger: LoggerService,
    private productService: ProductService
  ) {}
  
  handleLocalData() {
   this.logger.log("console from ListComponent");
  }
  
  handleApiData() {
    console.log("sdvsv", this.productService);
    
    this.productService.getProduct().subscribe((s) => {
      this.listData = s;
    })
  }
}
