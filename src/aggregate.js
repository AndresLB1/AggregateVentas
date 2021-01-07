//Métodos aggregate 


//Siguiendo el ejemplo
db.ventas.aggregate([
    {$match:{ArticuloVendido: "Camiseta"}},
    {$group:{_id: "$ArticuloVendido", UnidadesTotales: {$sum:"$NumeroUnidades"}}}
])


//Dinero cobrado en un día
db.ventas.aggregate([
    {$match:{FechaVenta:{$eq:ISODate("2019-03-13T00:00:00Z")}}},
    {$group: {_id:"$ArticuloVendido", PrecioTotal: {$sum: "$PrecioUnitario"}}}
])



//Dinero total
db.ventas.aggregate(
[
    {$project: {PrecioUnitario: 1, NumeroUnidades:1, Total: {$multiply:["$PrecioUnitario", "$NumeroUnidades"]}}}
]
)


//Medias
db.ventas.aggregate(
    [
        {
            $group:{
                _id:"$Vendedor",
                MediaProductos:{$avg:"$NumeroUnidades"},
                MediaPrecios:{$avg:"$PrecioUnitario"}
            }
        }
    ]
)



db.sales.aggregate(
    [
      {
        $group:
          {
            _id: "$PrecioUnitario",
            maxTotalAmount: { $max: { $multiply: [ "$PrecioUnitario", "$PrecioUnitarioEmpresa" ] } },
            maxQuantity: { $max: "$NumeroUnidades" }
          }
      }
    ]
 )