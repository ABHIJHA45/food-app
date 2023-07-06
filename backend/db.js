const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://jabhi414:Abhi%404518@cluster0.3bzaiit.mongodb.net/foodiemern?retryWrites=true&w=majority";

const connectDB = async () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, (error, result) => {
    if (error) console.log(error);
    else {
      console.log("connected db");
      const fetched_data = mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(function (err, data) {
        if (err) console.log(err);
        else console.log();
      });
    }
  });
};

mongoose.set("strictQuery", true);
// module.exports = {
//   uri: "mongodb+srv://jabhi414:Abhi@4518@cluster0.3bzaiit.mongodb.net/",
// };
module.exports = connectDB;
