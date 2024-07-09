import { hasPrimaryKey } from '@astrojs/db/runtime';
import { defineDb, defineTable, column } from 'astro:db';

const Cliente = defineTable ({
  columns:{
    id_cliente: column.number({primaryKey:true}),
    nombre_cliente: column.text(),
    a_paterno: column.text(),
    a_materno: column.text(),
    direccion: column.text(),
    telefono: column.number(),
    correo: column.text(),
  }
})

const Venta = defineTable({
  columns:{
    id_venta: column.number({primaryKey:true}),
    id_cliente: column.number({references:()=> Cliente.columns.id_cliente}),
    fecha_venta: column.date(),
    total_venta: column.number(),
    tipo_pago: column.text(),
  }
})

const Productos = defineTable({
  columns:{
    id_producto: column.number({primaryKey:true}),
   // id_categoria: column.number({references:()=>CatProductos.columns.id_categoria}),
    nombre_producto: column.text(),
    precio: column.number(),
  }
})

const VentaProducto = defineTable({
  columns:{
    id_ventaProducto: column.number({primaryKey:true}),
    id_producto: column.number({references:()=>Productos.columns.id_producto}),
    id_venta: column.number({references:()=>Venta.columns.id_venta})
  }
})

const Devolucion = defineTable({
  columns: {
    id_devolucion: column.number({primaryKey:true}),
    id_venta: column.number({references:()=>Venta.columns.id_venta}),
    fecha_devolucion: column.date(),
  }
})

const CatProductos = defineTable({
  columns:{
    id_categoria: column.number({primaryKey:true}),
    nombre_categoria: column.text(),
    nombre_familia: column.text(),
  }
})

const Provedor = defineTable({
  columns: {
    id_provedor: column.number({primaryKey:true}),
    id_producto: column.number({references:()=>Productos.columns.id_producto}),
    nombre_provedor: column.text(),
  }
})

const Inventario = defineTable({
  columns:{
    id_inventario: column.number({primaryKey:true}),
    id_producto: column.number({references:()=>Productos.columns.id_producto}),
    id_categoria: column.number({references:()=>CatProductos.columns.id_categoria}),
  }
})




// https://astro.build/db/config
export default defineDb({
  tables: {
    Cliente,
    Venta,
    Productos,
    VentaProducto,
    Devolucion,
    CatProductos,
    Provedor,
    Inventario,
  }
});
