const createBook = require('../../controllers/books/createBook')
require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const {URL_Railway_back} = require ('../../../rutas.js')

const {
    CLOUD_NAME, CLOUD_API, CLOUD_SECRET
  } = process.env

  // Configuration 
  cloudinary.config({ 
    cloud_name: 'digrts68o', 
    api_key: '874312443229167', 
    api_secret: '2tg2nXtug4Bda27Ne6lhM5VOhjk' 
  });

const createBookHandler = async (req,res) => {

    const {title, publisher, description, price, stock, publishedDate, createdDb, genders, authors} = req.body;
    
    // const { secure_url } = rta;
    //   console.log(secure_url);

    try {
      console.log(URL_Railway_back);
      UrlImagen=URL_Railway_back+'/'+req.file.filename;
    const NameSinextencion=req.file.filename.slice(0,req.file.filename.length - 4)
    console.log('subir archivo');
    console.log(NameSinextencion);
     console.log(UrlImagen);
     console.log('-----');


    // const result = await cloudinary.uploader.destroy('image-1686072809001');
    // console.log('boraddp');
    // console.log(result);
    // console.log('4$$$$$$$boraddp');

    //const rta =  cloudinary.uploader.upload(UrlImagen, {public_id: NameSinextencion})
  //   const resup = await cloudinary.uploader.upload(UrlImagen, {public_id: NameSinextencion})
  //  const { secure_url } = resup;
  cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });

   console.log('hola');
   console.log('####');

        if (!title || !publisher || !description || !price || !stock || !publishedDate || !secure_url) {
            res.status(400).send('Please check that you have completed all the required fields')
        } else {
            const newBook = await createBook(title, publisher, description, price, stock, publishedDate, secure_url, createdDb, genders, authors,NameSinextencion)
            res.status(200).send('Congratulations! Your book has been created!')}
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = createBookHandler;


// const createBook = require('../../controllers/books/createBook')

// const createBookHandler = async (req,res) => {

//     const {title, publisher, description, price, stock, publishedDate, image, createdDb, genders, authors} = req.body;

//     try {
//         if (!title || !publisher || !description || !price || !stock || !publishedDate || !image) {
//             res.status(400).send('Please check that you have completed all the required fields')
//         } else {
//             const newBook = await createBook(title, publisher, description, price, stock, publishedDate, image, createdDb, genders, authors)
//             res.status(200).send('Congratulations! Your book has been created!')}
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// }

// module.exports = createBookHandler;