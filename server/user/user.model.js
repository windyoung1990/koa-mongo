import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let counter = 1;
let countedId = {type: Number, default: () => counter++}
const UserSchema = new Schema({
    id: countedId,
    userName: String,
    password: String
})
const User = mongoose.model('User', UserSchema);
User.find({id: {$gt:0}}).sort({id: -1})
    .then(([first, ...others]) => {
        if (first) {
            counter = first.id + 1
        }
    })
export default User
