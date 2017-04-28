import * as mongoose from 'mongoose';

let userSchema = new mongoose.Schema({//registering user
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['P', 'A', 'U'],
    required: true
    }
  });

export default mongoose.model('User', userSchema);
