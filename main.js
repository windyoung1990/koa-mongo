import router from './routes/index'
const  Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose');
const config = require('./config/index')
mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Database connected')
})
const app = new Koa();
app.use(bodyParser())
app.use(router.routes())
app.listen(3010)
