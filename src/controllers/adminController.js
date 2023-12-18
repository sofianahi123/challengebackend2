const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage }).single('imagenes'); 

const adminControllers = {
  admin: (req, res) => res.render('admin'),
  createconsult: (req, res) => res.render('create'),
  create: (req, res) => {
    upload(req, res, function (err) {
      if (err) {
        if (err instanceof multer.MulterError) {
          
          console.error('Error de Multer:', err.message);
          return res.status(500).send('Error al subir el archivo: ' + err.message);
        } else if (err) {
          
          console.error('Error general:', err);
          return res.status(500).send('Error interno del servidor.');
        }
      }
      
      res.render('edit');
    });
  },
  idconsult: (req, res) => res.render(''),
  idput: (req, res) => res.send('Ruta para enviar ID'),
  iddelete: (req, res) => res.send('Ruta para eliminar ID')
};

module.exports = adminControllers;




/*const adminControllers={
    admin:(req,res) => res.render ('admin'),
    createconsult:(req,res) => res.render ('create'),
    create:(req,res) => res.render ('edit'),
    idconsult:(req,res) => res.render (''),
    idput:(req,res) => res.send ('route for send id'),
    iddelete:(req,res) => res.send ('route for delete id'),
}

module.exports=adminControllers;    

/*
    let tareas = [
        { id: 1, title: "Tarea 1", completed: false },
        { id: 2, title: "Tarea 2", completed: false },
        { id: 3, title: "Tarea 3", completed: false },
        { id: 4, title: "Tarea 4", completed: false },
      ];                               
      
      const index = (req, res) => {
        console.log(tareas);
        res.render("index", { tareas });
        // res.render("index", { tareas, layout: "layouts/admin" });
      };
      
      const store = (req, res) => {
        const tarea = {
          id: Date.now(),
          title: req.body.title,
          completed: false,
        };
      
        tareas.push(tarea);              
      
        res.redirect("/");
      };
      
      const update = (req, res) => {
        tareas.forEach((tarea) => {
          if (tarea.id == req.params.id) {
            tarea.completed = !tarea.completed;
          }
        });
      
        res.redirect("/");
      };
      
      const destroy = (req, res) => {
        tareas = tareas.filter((tarea) => tarea.id != req.params.id);
      
        res.redirect("/");
      };
      
      module.exports = {
        index,
        store,
        update,
        destroy,
      };  
          */