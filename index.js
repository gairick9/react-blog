const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gairick9:W00XWPiM8N8hWQsy@react-blog.mwcpxzg.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser : true}).then(() => console.log('DB connected'))
                         .catch(err => console.error(err));

app.get('/',(req,res) => {
    res.send('hello world')
});

app.listen(5000);