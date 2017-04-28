import * as mongoose from 'mongoose';
import ChildModel from './childs';
import {Child} from './childs';

export interface AgeGroup extends mongoose.Document {
  class: string;
  classroom: number;
  teacher: string;
}

let ageGroupSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true
  },
  classroom: {
    type: Number,
    required: true
  },
  teacher: {
    type: String

  }
  });


export default mongoose.model<AgeGroup>('AgeGroup', ageGroupSchema);
