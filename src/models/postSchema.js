const postSchema = new mongoose.Schema({
    userID:Number,
    id:Number,
    title:String,
    body:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const User = mongoose.model('Post', postSchema);
