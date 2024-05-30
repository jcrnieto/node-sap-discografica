const SapCfAxios = require('sap-cf-axios').default;
const sapAxios = SapCfAxios("requisitions");  //crea una instancia de conexion de la destination
require('dotenv').config();

//console.log("jwtauth:",process.env.JWTauth);

exports.sapAxiosQuery = async ({method, baseUrl, params = {},  headers = { "content-type": "application/json"},data = {} }) => {
     console.log("url",baseUrl)
    try {
      // console.log("los headers en axios: ", headers)
      const resp = await sapAxios({
        method: `${method}`,
        url: `${baseUrl}`,
        headers: headers,
        data: data,
        params: params
      });
    
      return resp
    } catch (error) {
      console.log(error.response)
        return Promise.reject(error.response)
    }
      
  };


