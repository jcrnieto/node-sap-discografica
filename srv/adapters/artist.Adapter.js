const artistAdapter = require("../repository/artist.repository")


exports.artistgetAdapter = async(success, error) =>{
    console.log("adapter")
    artistAdapter.getAllArtistRepository()
    .then(resp=> {
        success(resp.data, resp.status);
  }).catch(err=>{
        error(err?.response?.data || err?.data || err, err?.response?.status || err?.status || 500)
  });

}

exports.artistCreationAdapter = async(data, success, error) =>{


}

exports.artistModificationAdapter = async(data, success, error) =>{


}

exports.artistDeleteAdapter = async(data, success, error) =>{


}