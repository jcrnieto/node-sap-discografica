const express = require('express');
const router = express.Router();
const {sapAxiosQuery} = require("../helpers/queries");


router.get('/getCabecera', async (req, res) => {
     
    try {
        const response = await sapAxiosQuery({
            method: "GET",
            baseUrl: `/cabecera`,
            params: {},
        });

         res.status(200).send(response.data); 

    } catch (error) {
        console.error('Error al conectar destination:', error);
        res.status(500).send('Error al conectar destination o al obtener artista.');
    }
});

router.post('/creationCabecera', async (req, res) => {
     
    try {
        
        const {
            ID_PEDIDO, ID_ORDEN_COMPRA , MONTO, TIPO_MONEDA, F_ALTA, C_USER, ID_PROVEEDOR, ID_ESTADO, DESCRIPCION, PROVEEDOR_ID_PROVEEDOR, ESTADO_ID_ESTADO
        } = req.body;
        
        const response = await sapAxiosQuery({
            method: "POST",
            baseUrl: `/cabecera`,
            data: {
                ID_PEDIDO, ID_ORDEN_COMPRA, MONTO, TIPO_MONEDA, F_ALTA, C_USER,
                ID_PROVEEDOR, ID_ESTADO, DESCRIPCION, PROVEEDOR_ID_PROVEEDOR, ESTADO_ID_ESTADO
            }
        });

        res.status(201).send('Cabecera creada exitosamente');

    } catch (error) {
        console.error('Error al conectar destination:', error);
        res.status(500).send('Error al conectar destination o al obtener artista.');
    }
});


router.delete('/deleteCabecera/:id', async (req, res) => {
     
     try {
      
        const { ID_PEDIDO } = req.params;

        const response = await sapAxiosQuery({
            method: "DELETE",
            url: `/cabecera/${ID_PEDIDO}`
        });

        if (response.status === 200) {
            res.status(200).send('Cabecera eliminada exitosamente');
        } else {
            res.status(response.status).send('Error al eliminar la cabecera');
        }

    } catch (error) {
        console.error('Error al conectar destination:', error);
        res.status(500).send('Error al conectar destination o al obtener artista.');
    }
});


router.put('/modificationCabecera/:id', async (req, res) => {
   
    try {
        // console.log("id pedido",ID_PEDIDO)
        const { ID_PEDIDO } = req.params;
        const updateData = req.body;

       const response = await sapAxiosQuery({
           method: "PUT",
           url: `/cabecera/${ID_PEDIDO}`,
           data: updateData
       });

       if (response.status === 200) {
           res.status(200).send('Cabecera actualizada exitosamente');
       } else {
           res.status(response.status).send('Error al actualizar la cabecera');
       }

   } catch (error) {
       console.error('Error al conectar destination:', error);
       res.status(500).send('Error al conectar destination o al obtener artista.');
   }
});


router.get('/cabeceraByUser', async (req, res) => {
    try {
         const { C_USER } = req.query;
        
        const response = await sapAxiosQuery({
            method: "GET",
            url: `/cabecera/${C_USER}`,
            params: {
                user: C_USER
            }
        });

        if (response.status === 200) {
            res.status(200).json(response.data);
        } else {
            res.status(response.status).send('Error al obtener la cabecera');
        }
        res.send("hola")
    } catch (error) {
        console.error('Error al conectar a la base de datos o al obtener artistas por género:', error);
        res.status(500).send('Error al conectar a la base de datos o al obtener artistas por género.');
    }
});

router.get('/getArticulo', async (req, res) => {
     
    try {
        const response = await sapAxiosQuery({
            method: "GET",
            baseUrl: `/tca_articulo`,
            params: {},
        });

         res.status(200).send(response.data); 

    } catch (error) {
        console.error('Error al conectar destination:', error);
        res.status(500).send('Error al conectar destination o al obtener artista.');
    }
});


// router.get('/getArtist', async (req, res) => {
     
//     try {
//         const response = await sapAxiosQuery({
//             method: "GET",
//             baseUrl: `/Artist`,
//             params: {},
//         });

//          res.status(200).send(response.data); 

//     } catch (error) {
//         console.error('Error al conectar destination:', error);
//         res.status(500).send('Error al conectar destination o al obtener artista.');
//     }
// });

module.exports = router;
