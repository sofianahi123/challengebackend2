const express= require ('express');
const app= express ();
const mainRoutes= require ('./src/routes/mainRoutes');
const shopRoutes=require ('./src/routes/shopRoutes');
const adminRoutes=require ('./src/routes/adminRoutes');
const authRoutes=require ('./src/routes/authRoutes' );



app.use (express.static('public_html'));

app.use('/',mainRoutes ); 
app.use('/',shopRoutes );
app.use('/',adminRoutes );
app.use('/', authRoutes );

app.listen (3000, () => console.log ("servidor corriendo en http://localhost:3000"));  