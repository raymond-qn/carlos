import { Component, OnInit } from '@angular/core';
import { OrdersModel } from '../../models/orders';
import { ProductsModel } from '../../models/products';
import { SupplierModel } from '../../models/supplier';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  orders: OrdersModel [] = [];
  suppObj: SupplierModel = {
    codigo: '',
    nombre: ''
  };
  prodObj: ProductsModel = {
    codigo: '',
    nombre: '',
    costo_unitario: 0,
    codigo_proveedor: '',
    inventario: 0
  };
  done: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.done = true;
    this.suppObj = 
    {
        nombre: "Polar",
        codigo: "P123"
    };
    this.prodObj = {
      codigo: 'X0000',
      nombre: 'Harina Pan',
      costo_unitario: 20,
      codigo_proveedor: 'P123',
      inventario: 1000
    }
    // Procter
    this.orders.push({
      proveedor: this.suppObj,
      producto: this.prodObj,
      cantidad: 10
    });
    this.suppObj = 
    {
      nombre: "Procter & Gable",
      codigo: "P345"
    };
    this.prodObj = {
        codigo: 'P0000',
        nombre: 'Crema dental',
        costo_unitario: 25,
        codigo_proveedor: 'P345',
        inventario: 1250
    };
    this.orders.push({
      proveedor: this.suppObj,
      producto: this.prodObj,
      cantidad: 5
    });
  
    // Coca cola
    this.suppObj = 
    {
       nombre: "Coca-Cola",
       codigo: "P456"
    };
    this.prodObj = {
      codigo: 'C0000',
      nombre: 'Refrescos Colita',
      costo_unitario: 50,
      codigo_proveedor: 'P456',
      inventario: 300
    };
    this.orders.push({
      proveedor: this.suppObj,
      producto: this.prodObj,
      cantidad: 15
    });
    // Pepsico
    this.suppObj = 
    {
      nombre: "Pepsico",
      codigo: "P578"
    };
    this.prodObj = {
      codigo: 'PC0004',
      nombre: 'Refrescos Mediano',
      costo_unitario: 50,
      codigo_proveedor: 'P578',
      inventario: 300
    };
    this.orders.push({
      proveedor: this.suppObj,
      producto: this.prodObj,
      cantidad: 20
    });

    this.done = true;

    console.log("orders", this.orders);

  }

}
