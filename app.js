
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const bodyParser = require('body-parser');
const User = require("./models/User");
const cors = require('cors');
const keys = require('./config/keys');
const path = require("path");
const Post = require('./models/Post');
const posts = require("./routes/api/posts");
const Message = require('./models/Message');
const messages = require('./routes/api/messages')
const comments = require("./routes/api/comments");
const passport = require('passport');

const crypto = require('crypto');
const methodOverride = require('method-override');
const multer = require("multer");
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require("gridfs-stream");
const { pathToFileURL } = require('url');
const imageRouter = require('./routes/image');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}


app.use(cors());
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        
        methods: ["GET", "POST"],
        credentials: true
    }
});
io.on('connection', function(socket){
    // debugger
    console.log('user is connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on("connect user", socket.join);
    socket.on("disconnect user", socket.leave);
    
    socket.on('chat message', function(msg) {
        const newMessage = new Message(msg)
        newMessage.save().then(msg => {
            io.emit('chat message', msg)
            io.emit('chat message', msg)
        })
        
    })
})
// http.listen(process.env.NODE_ENV === 'production' ? "http://talentshare-aa.herokuapp.com/" : 8000);
http.listen(8000);

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(passport.initialize());
require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use("/api/users", users);
// app.use("/api/document", fileUploadRoutes);

const storage = new GridFsStorage({
    url: db,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) return reject(err);
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            })
        })
    }
})

const upload = multer({storage});

// app.post('/upload', upload.single('file'))

app.use('/content', imageRouter(upload));
app.use("/api/posts", posts)
app.use('/api/messages', messages)

app.use("/api/comments", comments);

// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));