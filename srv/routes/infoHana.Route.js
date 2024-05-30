const express = require('express');
const router = express.Router();
const {connectDb} = require("../helpers/dbConect");

router.get('/getArtist', async (req, res) => {
    try {
       
        const client = await connectDb();
    
        client.exec('SELECT * FROM "024AD6A8908347BEA66EF9F3EC8BEF5A"."SAP_CAPIRE_DISCOGRAFICA_ARTIST"', (err, artist) => {
          client.end(); 
    
          if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return res.status(500).send('Error al obtener los artistas de la base de datos.');
          }
    
          res.json(artist);
        });
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        res.status(500).send('Error al conectar a la base de datos.');
      }
  });


  router.post('/addArtist', async (req, res) => {
    try {
        const {id, name , genders_id, age} = req.body; 

        const client = await connectDb();
        
        const result = await client.exec(
            `INSERT INTO "024AD6A8908347BEA66EF9F3EC8BEF5A"."SAP_CAPIRE_DISCOGRAFICA_ARTIST" 
         (id, name , genders_id, age) VALUES ('${id}', '${name}', ${genders_id} ,${age})`,
         function(err, rows){
            client.end();
            if (err) {
              return console.error('Execute error:', err);
            }
            console.log('Results:', rows);
         }
        );

        
        res.status(201).send('Artista agregado exitosamente');
        client.end(); 

    } catch (error) {
        console.error('Error al conectar a la base de datos o al insertar un artista:', error);
        res.status(500).send('Error al conectar a la base de datos o al insertar un artista.');
    }
     
});


router.put('/modificationArtist/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id)
        const { name , genders_id, age } = req.body;

        const client = await connectDb(); 
        
        const result = await client.exec(
            `UPDATE "024AD6A8908347BEA66EF9F3EC8BEF5A"."SAP_CAPIRE_DISCOGRAFICA_ARTIST"
             SET name = '${name}', genders_id = '${genders_id}', age = ${age} WHERE id = '${id}'`,
             function(err, rows){
                client.end();
                if (err) {
                  return console.error('Execute error:', err);
                }
                console.log('Results:', rows);
             }
        );
        //  console.log(result)
         client.end(); 

        if (result.affectedRows === 0) {
            return res.status(404).send('No se encontró ningún artista con el ID proporcionado');
        }

        res.status(200).send('Artista actualizado exitosamente');
    } catch (error) {
        console.error('Error al conectar a la base de datos o al actualizar un artista:', error);
        res.status(500).send('Error al conectar a la base de datos o al actualizar un artista.');
    }
});


router.delete('/deleteArtist/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const client = await connectDb();
        
        const result = await client.exec(
            `DELETE FROM "024AD6A8908347BEA66EF9F3EC8BEF5A"."SAP_CAPIRE_DISCOGRAFICA_ARTIST" WHERE id = '${id}'`,
            function(err, rows){
               client.end();
               if (err) {
                 return console.error('Execute error:', err);
               }
               console.log('Results:', rows);
            }
        );

        client.end(); 

        if (result.affectedRows === 0) {
            return res.status(404).send('No se encontró ningún artista con el ID proporcionado');
        }

        res.status(200).send('Artista eliminado exitosamente');
    } catch (error) {
        console.error('Error al conectar a la base de datos o al eliminar un artista:', error);
        res.status(500).send('Error al conectar a la base de datos o al eliminar un artista.');
    }
});


router.get('/artistByGender', async (req, res) => {
    try {
        const { genders_id } = req.query;

        const client = await connectDb();
        
        const result = await client.exec(
            `SELECT * FROM "024AD6A8908347BEA66EF9F3EC8BEF5A"."SAP_CAPIRE_DISCOGRAFICA_ARTIST" WHERE genders_id = '${genders_id}'`,
            function(err, rows){
               client.end();
               if (err) {
                 return console.error('Execute error:', err);
               } else {
                // console.log('Results:', rows);
                res.json(rows); 
              }
              
            }
        );
      
         client.end(); 
    } catch (error) {
        console.error('Error al conectar a la base de datos o al obtener artistas por género:', error);
        res.status(500).send('Error al conectar a la base de datos o al obtener artistas por género.');
    }
});

module.exports = router;