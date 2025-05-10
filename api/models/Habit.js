// models/Habit.js
import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  frequency: {
    type: [String],
    required: true,
    enum: ['daily', 'weekly', 'specific_days']
  },
  daysOfWeek: [{
    type: String,
    enum: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']
  }],
  completedDates: [Date],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Habit', habitSchema);