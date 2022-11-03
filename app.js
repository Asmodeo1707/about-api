const express = require('express')

const app = express();

app.get('/me', (req, res)=>{
    res.status(250).json({
        nombre: 'Branon',
        edad: '22 años',
        país: 'México',
    })

})

app.post('/metas', (req, res)=>{
    res.status(250).json({
        hobbies1: 'Videojuegos',
        hobbies2: 'Dibujar',
        hobbies3: 'Leer',
    })

})
app.patch('/metas', (req, res)=>{
    res.status(250).json({
        metas_profesional1: 'Programador senior',
        metas_profesional2: 'Aprender Inglés',
    })

})
app.put('/business', (req, res)=>{
    res.status(250).json({
       empres1: 'Globant',
       empresa2: 'BBVA',
       empresa3: 'Microsoft',
    })

})

app.listen(8000, ()=>{
    console.log('puerto 8000')
})