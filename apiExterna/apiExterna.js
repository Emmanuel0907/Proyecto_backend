const axios = require('axios');

const traerApi = async (req, res) =>{
   const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
   res.status(200).json(data)
} 

module.exports = {traerApi}