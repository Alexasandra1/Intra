const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger'); // Импорт вашей Swagger спецификации

const cors = require('cors');

const styleRouter = require('../backend/routes/style.routes');
const roleRouter = require('../backend/routes/role.routes');
const roomtypeRouter = require('../backend/routes/roomtype.routes');
const intrauserRouter = require('../backend/routes/intrauser.routes');
const consultantRouter = require('../backend/routes/consultant.routes');
const designphotosRouter = require('../backend/routes/designphotos.routes');
const designRouter = require('../backend/routes/design.routes');
const ordersRouter = require('../backend/routes/orders.routes');


const app = express();
const port = process.env.PORT || 3000;
require('./routes')(app);

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(express.json());
app.use('/api', styleRouter);
app.use('/api', roleRouter);
app.use('/api', roomtypeRouter);
app.use('/api', intrauserRouter);
app.use('/api', consultantRouter);
app.use('/api', designphotosRouter);
app.use('/api', designRouter);
app.use('/api', ordersRouter);


// Добавление маршрута для Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});



// const express = require('express');
// const app = express();
// const port = process.env.PORT || 8000;
// // const port = 8000;
// // const userRouter = require('../routes/user.routes')
// // const userRouter = require('../routes/user.routes')
// const userRouter = require('../backend/routes/user.routes')

// // import "../backend/routes/user.routes"


// app.use(function (req, res, next){
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// })

// app.use(express.json())
// app.use('/api', userRouter)

// require('./routes')(app);

// app.listen(port,()=>{
//     console.log('Ne viyobivaisya ' + port);
// })