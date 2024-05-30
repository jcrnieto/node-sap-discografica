const artistAdapters = require("../adapters/artist.Adapter");


exports.ArtistAllController = (req, res) => {
    // console.log("controller Artist");
    artistAdapters.artistgetAdapter(
    (value) => {
      res.status(200).send(value);
    },
    (err) => {
      res.status(500).send(err);
    }
  );
};

exports.ArtistCreationController = (req,res) => {
    console.log("All Invoices");
    artistAdapters.artistCreationAdapter(
    (value) => {
      res.status(200).send(value);
    },
    (err) => {
      res.status(500).send(err);
    }
  );
}

exports.ArtistModificationController = (req,res) => {
    console.log("All Invoices");
    artistAdapters.artistModificationAdapter(
    (value) => {
      res.status(200).send(value);
    },
    (err) => {
      res.status(500).send(err);
    }
  );
}

exports.ArtistDeleteController = (req,res) => {
    console.log("All Invoices");
    artistAdapters.ArtistDeleteController(
    (value) => {
      res.status(200).send(value);
    },
    (err) => {
      res.status(500).send(err);
    }
  );
}

