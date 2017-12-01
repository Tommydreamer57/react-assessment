const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3003
const CONNECTION_STRING = process.env.CONNECTION_STRING

const app = express()

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(cors())
app.use(bodyParser.json())


const db = app.get('db')

app.post(`/register`, (req, res) => {
    console.log(req.body)
    let db = req.app.get('db');
    db.create_user([req.body.username, req.body.password])
        .then(user => {
            console.log(user)
            res.send(user)
        })
})
app.post(`/login`, (req, res) => {
    console.log('body', req.body)
    let db = req.app.get('db')
    db.find_user([req.body.username, req.body.password])
        .then(user => {
            console.log(user[0])
            res.send(user[0])
        })
})
app.get(`/books`, (req, res) => {
    console.log('books body', req.body)
    let db = req.app.get('db')
    db.get_books()
        .then(books => {
            res.send(books)
        })
})
app.get(`/details/:id`, (req, res) => {
    console.log('details params', req.params)
    let db = req.app.get('db')
    db.get_details([req.params.id])
        .then(details => {
            res.send(details[0])
        })
})
app.delete(`/book/:id`, (req, res) => {
    console.log(req.params)
    let db = req.app.get('db')
    db.delete_book([req.params.id])
        .then(() => {
            res.send('deleted')
        })
})
app.post(`/addtocart/:id`, (req, res, next) => {
    console.log(req.params, req.body)
    let db = req.app.get('db')
    db.add_to_cart([req.body.id, req.params.id])
        .then(book => {
            res.send(book)
        })
})


app.listen(PORT, () => console.log(`assessment running on port ${PORT}`))
