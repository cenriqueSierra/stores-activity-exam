const mongoose = require('mongoose');

const uri = 'mongodb+srv://carlos:assr1234@cluster0.atwuvnv.mongodb.net/storesDB?retryWrites=true&w=majority';

async function connectionDB() {
  try {
      await mongoose.connect(process.env.MONGODB_URI || uri , {
        useNewUrlParser: true,
      });
      console.log('Connection suceeded');
  } catch (error) {
    console.log('Error in connection' + err);
  }
}

module.exports = {
  connectionDB
};







/*
mongoose.connect(process.env.MONGODB_URI || uri , {
  useNewUrlParser: true,
},
(err) => {
  if (!err) {
      console.log('Connection suceeded');
  } else {
      console.log('Error in connection' + err);
  }
});

*/