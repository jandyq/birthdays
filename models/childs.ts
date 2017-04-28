import * as mongoose from 'mongoose';

export interface Child extends mongoose.Document {
  child: string;
  dob: number;
  parents: string;
  phone: number;
  active: boolean;
}

let childSchema = new mongoose.Schema({
  child: {
    type: String,
    required: true
  },
  dob: {
    type: Number,
    required: true
  },
  parents: String,
  phone: Number,
  active: Boolean
});

export default mongoose.model<Child>('Child', childSchema);
