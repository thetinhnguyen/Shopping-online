let express=require('express')
var exphbs  = require('express-handlebars');
let app=express()

//set public static folder
app.use(express.static('public'))
//use view engine
app.engine('handlebars', exphbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname+'/views/layouts/',
    partialsDir: __dirname+'/views/partials/'
}));
app.set('view engine', 'handlebars');

//defile router
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/cart',(req,res)=>{
    res.render('cart')
})
app.get('/category',(req,res)=>{
    res.render('category')
})

app.get('/single-product',(req,res)=>{
    res.render('single-product')
})

app.get('/checkout',(req,res)=>{
    res.render('checkout')
})

app.get('/confirmation',(req,res)=>{
    res.render('confirmation')
})
app.get('/tracking-order',(req,res)=>{
    res.render('tracking-order')
})
app.get('/single-blog',(req,res)=>{
    res.render('single-blog')
})

app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.set('port',process.env.PORT || 5000)
app.listen(app.get('port'),()=>{
    console.log(`server is running at ${app.get('port')}`)
})