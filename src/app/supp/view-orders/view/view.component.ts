import { Component, OnInit } from '@angular/core';
import { SuppOrdersModel } from '../../models/order';
import swal from 'sweetalert2'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  orderList: SuppOrdersModel [] = [];
  orderObj: SuppOrdersModel = {
    codigo_producto: '',
    nombre_producto: '',
    cantidad_solicitada: 0,
    costo: 0
  }
  constructor() { }

  ngOnInit(): void {
    this.orderObj = {
      codigo_producto: 'X0000',
      nombre_producto: 'Harina Pan',
      cantidad_solicitada: 20,
      costo: 5
    };
    this.orderList.push(this.orderObj);
    this.orderObj = {
      codigo_producto: 'X0001',
      nombre_producto: 'Jugo Frica',
      cantidad_solicitada: 10,
      costo: 3
    };
    this.orderList.push(this.orderObj);
    this.orderObj = {
      codigo_producto: 'X0002',
      nombre_producto: 'Yogur',
      cantidad_solicitada: 10,
      costo: 3
    };
    this.orderList.push(this.orderObj);
  }

  aprobar() {
    swal.fire({
      icon: 'success',
      title: 'Operacion exitosa',
    });
  }

}
