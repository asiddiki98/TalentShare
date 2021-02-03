
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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));