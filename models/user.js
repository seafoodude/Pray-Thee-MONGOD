const { Schema, model } = require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email address is required'],
            match: /.+\@.+\..+/,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
            },
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            },
        ],
        },
        {
        toJSON: {
            virtuals: true,
        },
    }         
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema
    .virtual ('friendCount')
    .get (function (){
        return this.friends.length;
    });

// initilaize User model
    const User = model ('user', userSchema);

    module.exports = User;