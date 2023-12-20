const express= require('express');
const app= express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");


const mainRoutes= require ('./src/routes/mainRoutes');
const shopRoutes=require ('./src/routes/shopRoutes');
const adminRoutes=require ('./src/routes/adminRoutes');
const authRoutes=require ('./src/routes/authRoutes' );

app.set ('view engine','ejs'); 
app.set('views',  './src/views');

app.use (express.static(__dirname +'/public_html'));
app.use(methodOverride('_method'));

// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Para incluir archivos estáticos que no están en public
app.use(express.static('./src/uploads'));

app.use(require('./src/routes/tareasRouter'));

/* app.use(expressLayouts);
app.set('layout', 'layouts/public'); */

app.use(authRoutes);
app.use(mainRoutes);
app.use(shopRoutes);
app.use(adminRoutes);


app.listen (3000, () => console.log ("servidor corriendo en http://localhost:3000"));  
