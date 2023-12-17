// import mongoose from "mongoose";

// const MONGODB_URL = `mongodb+srv://rcmongoose:reignckley1008@cluster0.wopk8bh.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.set("strictQuery", false);
// mongoose.connect(MONGODB_URL);

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// });

// const Note = mongoose.model("Note", noteSchema);

//Saving data to database like posting in restful api
// const note2 = new Note({
//   content: "I am now learning Mongo DB",
//   important: false,
// });
// note2.save().then((result) => {
//   console.log(result);
//   console.log("note saved!");
//   mongoose.connection.close();
// });

//Fetching data from data base
// Note.find({}).then((result)=>{
//     result.forEach(element => {
//         console.log(element);
//     });
//     mongoose.connection.close();
// });

//Fetching Specific data from database
// Note.findById("657af4fefa01ae904269bdfd").then((result)=>{
// console.log(result);
// mongoose.connection.close();
// });

// Note.findByIdAndDelete("657af4fefa01ae904269bdfd").then((result)=>{
//   console.log(This Note has been deleted);
//   mongoose.connection.close();
// });


//Updating the specific data
// const newNote = {
//   content: "kakaibabe",
//   important: true
// };
// Note.findByIdAndUpdate("6579e3c2aeea8b7729a84963", newNote, {new: true}).then((result)=>{
//   console.log(result);
//   console.log("Note has been updated");
//mongoose.connection.close();
// });

