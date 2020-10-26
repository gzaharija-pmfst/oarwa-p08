require('dotenv').config()
const PORT = process.env.PORT

// Baza podataka
const password = process.env.ATLAS_PASS

const dbname = process.env.NODE_ENV === 'test'
? 'poruke-api-test'
: 'poruke-api'

/* const dbname = 'poruke-api'
if(process.env.NODE_ENV === 'test'){
  dbname =
} */
const DB_URI = `mongodb+srv://oarwa-gz:${password}@cluster0.l0kev.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}