import { Component, OnInit } from '@angular/core';
import { SuppInventoryModel } from '../../models/inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventoryList: SuppInventoryModel [] = [];
  inventoryObj: SuppInventoryModel = {
    codigo: '',
    nombre: '',
    costo_unitario: 0,
    inventario: 0
  }
  constructor() { }

  ngOnInit(): void {
    this.inventoryObj = {
      codigo: 'X0000',
      nombre: 'Harina Pan',
      costo_unitario: 20,
      inventario: 1000
    }
    this.inventoryList.push(this.inventoryObj);
    this.inventoryObj = {
        codigo: 'X0001',
        nombre: 'Jugo Frica',
        costo_unitario: 20,
        inventario: 100
    }
    this.inventoryList.push(this.inventoryObj);
    this.inventoryObj = {
      codigo: 'X0001',
      nombre: 'Jugo Frica',
      costo_unitario: 20,
      inventario: 100
    }
    this.inventoryList.push(this.inventoryObj);
    this.inventoryObj = {
      codigo: 'X0001',
      nombre: 'Yogur',
      costo_unitario: 5,
      inventario: 1250
    }
    this.inventoryList.push(this.inventoryObj);
  }

}
