const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nodemon = require('nodemon');
const port = 8000;
const app = express();

const models = require('./models/index')
// const queryInterface = sequelize.getQueryInterface()
const { DataTypes } = require('sequelize')
// const Company = require('./models/company.model')

// routing 
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const companiesRouter = require('./routes/companies')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/companies', companiesRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Company.sync()
// .then(() => {
//   console.log('Company table is created!')
// })
// .catch(() => {
//   console.log('Fail!')
// })
app.enable("trust proxy");


// queryInterface.addColumn('Users', 'age', { type: DataTypes.INTEGER });
// queryInterface.addColumn('Users', 'gender', {type: DataTypes.STRING });
// queryInterface.addColumn('Users', 'status', {type: DataTypes.STRING});

// queryInterface.addColumn('Companies', 'profit', { type: DataTypes.INTEGER })
// queryInterface.addColumn('Companies', 'type', { type: DataTypes.STRING })

models.sequelize.authenticate()

models.sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`http://127.0.0.1:${port}/`)
    })
  })
  .catch((err) => console.log(err))

