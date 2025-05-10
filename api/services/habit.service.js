// services/habitService.js
import Habit from '../models/Habit.js';

export const createHabit = async (habitData, userId) => {
  const newHabit = new Habit({ ...habitData, user: userId });
  return await newHabit.save();
};

export const getAllHabits = async (userId) => {
  return await Habit.find({ user: userId });
};

export const getHabitById = async (id, userId) => {
  const habit = await Habit.findOne({ _id: id, user: userId });
  if (!habit) throw new Error('Hábito não encontrado ou acesso não autorizado');
  return habit;
};

export const fullUpdateHabit = async (id, updateData, userId) => {
  return await Habit.findOneAndUpdate(
    { _id: id, user: userId },
    updateData,
    { new: true, runValidators: true }
  );
};

export const partialUpdateHabit = async (id, updateData, userId) => {
  return await Habit.findOneAndUpdate(
    { _id: id, user: userId },
    { $set: updateData },
    { new: true, runValidators: true }
  );
};

export const deleteHabit = async (id, userId) => {
  return await Habit.findOneAndDelete({ _id: id, user: userId });
};