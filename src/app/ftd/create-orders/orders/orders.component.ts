import { Component, OnInit } from '@angular/core';
import { ProductsModel } from '../../models/products';
import { SupplierModel } from '../../models/supplier';
import swal from 'sweetalert2'
  
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  suppliers:  SupplierModel [] = [];
  suppObj: SupplierModel = {
    codigo: '',
    nombre: ''
  };
  products: ProductsModel [] = [];
  prodObj: ProductsModel = {
    codigo: '',
    nombre: '',
    costo_unitario: 0,
    codigo_proveedor: '',
    inventario: 0
  }
  productsSelected: ProductsModel [] = [];
  cantidad: string = '';
  constructor() { }

  ngOnInit(): void {
       this.suppliers.push({
          nombre: "Polar",
          codigo: "P123"
       });
       this.suppliers.push({
          nombre: "Procter & Gable",
          codigo: "P345"
       });
       this.suppliers.push({
          nombre: "Coca-Cola",
          codigo: "P456"
       });
       this.suppliers.push({
          nombre: "Pepsico",
          codigo: "P578"
       });
       // Productos Poler
       // ---------------------------------
       this.products.push({
          codigo: 'X0000',
          nombre: 'Harina Pan',
          costo_unitario: 20,
          codigo_proveedor: 'P123',
          inventario: 1000
       });
       this.products.push({
        codigo: 'X0001',
        nombre: 'Jugo Frica',
        costo_unitario: 20,
        codigo_proveedor: 'P123',
        inventario: 100
       });
       this.products.push({
        codigo: 'X0001',
        nombre: 'Yogur',
        costo_unitario: 5,
        codigo_proveedor: 'P123',
        inventario: 1250
       });
       // Productos Procter
       // ---------------------------------
       this.products.push({
        codigo: 'P0000',
        nombre: 'Crema dental',
        costo_unitario: 25,
        codigo_proveedor: 'P345',
        inventario: 1250
       });
       this.products.push({
        codigo: 'P0001',
        nombre: 'Jabon de Lavar',
        costo_unitario: 50,
        codigo_proveedor: 'P345',
        inventario: 300
       });
       this.products.push({
        codigo: 'P0002',
        nombre: 'Jabon de Baño',
        costo_unitario: 50,
        codigo_proveedor: 'P345',
        inventario: 300
       });
      // Productos Coca-Cola
      // ---------------------------------
      this.products.push({
        codigo: 'C0000',
        nombre: 'Refrescos Colita',
        costo_unitario: 50,
        codigo_proveedor: 'P456',
        inventario: 300
       });
       this.products.push({
        codigo: 'C0003',
        nombre: 'Refrescos Naranja',
        costo_unitario: 50,
        codigo_proveedor: 'P456',
        inventario: 300
       });
       this.products.push({
        codigo: 'C0004',
        nombre: 'Refrescos Uva',
        costo_unitario: 50,
        codigo_proveedor: 'P456',
        inventario: 300
       });
       // Productos Pepsico
       // ---------------------------------
      this.products.push({
        codigo: 'PC0004',
        nombre: 'Refrescos Negro',
        costo_unitario: 50,
        codigo_proveedor: 'P578',
        inventario: 300
       });
       this.products.push({
        codigo: 'PC0004',
        nombre: 'Refrescos Mediano',
        costo_unitario: 50,
        codigo_proveedor: 'P578',
        inventario: 300
       });
       this.products.push({
        codigo: 'PC0005',
        nombre: 'Refrescos Lata',
        costo_unitario: 50,
        codigo_proveedor: 'P578',
        inventario: 300
       });
  }

  onSubmit() {
    swal.fire({
      icon: 'success',
      title: 'Operacion exitosa',
    });
  }

  onChangeSupp (target: any) {
    console.log(target.value);
    const selected = this.products.filter(c => c.codigo_proveedor == target.value);
    console.log(selected);
    this.productsSelected = selected;
  }

}
