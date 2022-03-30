const http = require('http')
const fs = require('fs')

const PORT = 8000
const errorPage = fs.readFileSync('./public/html/error.html')

const server = http.createServer((req, res) => {
    const path = (req.url === '/') ? '/public/html/index.html' : req.url
    // console.log(path.extname);
    fs.readFile(`.${path}`, (err, data) => {
        if (err) {
            res.write(errorPage)
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(PORT)