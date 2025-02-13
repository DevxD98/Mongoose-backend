const postSchema = new mongoose.Schema({
    userID:Number,
    id:Number,
    userName:String,
    age:Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const User = mongoose.model('User', postSchema);
