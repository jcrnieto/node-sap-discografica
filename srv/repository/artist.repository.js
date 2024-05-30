const { sapAxiosQuery } = require("../helpers/queries");


exports.getAllArtistRepository = async () => {
  return await sapAxiosQuery({
    method: "GET",
    baseUrl:  `/Artist`,
    params: {},
  });

};


exports.postArtistRepository = async () => {
   
  
};


exports.patchArtistRepository = async () => {
   
  
};


exports.deleteArtistRepository = async () => {
   
  
};