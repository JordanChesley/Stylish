let path = require('path')
let express = require('express')
let dynamicStatic = require('express-dynamic-static')(path.join(__dirname, 'public', 'stylesheets', 'magic'))

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(dynamicStatic)

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views/index.html')))
app.post('/', (req, res) => {
  if (req.body.style == '') req.body.style = 'molecule'
  dynamicStatic.setPath(path.join(__dirname, 'public', 'stylesheets', req.body.style.toLowerCase()))
  res.redirect('/')
})
app.get('/robots.txt', (req, res) => res.sendFile(path.join(__dirname, 'views/robots.txt')))

app.use((req, res) =>res.sendFile(path.join(__dirname, 'views/404.html')));

app.listen(PORT, () => console.log(`App at http://localhost:${PORT}`))