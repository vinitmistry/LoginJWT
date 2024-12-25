const express= require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRoute = require('./routes/register.js');
const loginRoute = require('./routes/login');
const authenticateToken = require('./middleware/authjwt');
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());  
app.use(express.json());
app.get('/',(req,res)=>{
  res.send("Triggered")
})

app.use('/register', registerRoute);
app.use('/login', loginRoute);


// app.get('/check', authenticateToken, (req, res) => {
//   res.json({ 
//     message: 'JWT token is valid',
//     user: req.user 
//   });
// });

app.post('/main', authenticateToken, (req, res) => {
  const data = req.body;

  res.status(200).json({
    message: 'Data received successfully',
    data,
    user: req.user
  });
});
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
