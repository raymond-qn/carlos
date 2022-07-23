import { ProductsModel } from "./products";
import { SupplierModel } from "./supplier";

export interface OrdersModel {
    proveedor:                 SupplierModel;
    producto:                  ProductsModel;
    cantidad:                  number;
}