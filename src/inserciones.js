db.ventas.insertOne()



db.ventas.insertMany([

    {
    "id":1,   
    "ArticuloVendido":"Camiseta",
    "PrecioUnitario":15, 
    "NumeroUnidades":3, 
    "FechaVenta":new Date("2020-2-12"), 
    "PrecioUnitarioEmpresa":4,
    "Cliente":"AnaCR",
    "Vendedor":"MartinPD"
    }

    ,

    {
    "id":2,
    "ArticuloVendido":"Gorro",
    "PrecioUnitario":10, 
    "NumeroUnidades":3, 
    "FechaVenta":new Date("2019-3-13"), 
    "PrecioUnitarioEmpresa":5,
    "Cliente":"RobertoNM",
    "Vendedor":"AlmudenaFG"
    }

    ,

    {
    "id":3,
    "ArticuloVendido":"Camiseta",
    "PrecioUnitario":15, 
    "NumeroUnidades":1, 
    "FechaVenta":new Date("2009-4-14"), 
    "PrecioUnitarioEmpresa":4,
    "Cliente":"AnaCR",
    "Vendedor":"AlmudenaFG"
    }

    ,

    {
    "id":4,
    "ArticuloVendido":"Gorro",
    "PrecioUnitario":10, 
    "NumeroUnidades":4, 
    "FechaVenta":new Date("2019-3-13"), 
    "PrecioUnitarioEmpresa":5,
    "Cliente":"EduardoVM",
    "Vendedor":"EstrellaTG"
    }

    ,

    {
    "id":5,
    "ArticuloVendido":"Bufanda",
    "PrecioUnitario":8, 
    "NumeroUnidades":2, 
    "FechaVenta":new Date("2019-3-13"), 
    "PrecioUnitarioEmpresa":3,
    "Cliente":"ChemaSC",
    "Vendedor":"EstrellaTG"
    }

    ,
    
    {
    "id":6,
    "ArticuloVendido":"Reloj",
    "PrecioUnitario":75, 
    "NumeroUnidades":1, 
    "FechaVenta":new Date("2019-3-13"), 
    "PrecioUnitarioEmpresa":40,
    "Cliente":"ChemaSC",
    "Vendedor":"EstrellaTG"
    }
    

])

