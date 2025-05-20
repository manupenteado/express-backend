// controllers/habitController.js
import * as habitService from '../services/habit.service.js';
import validator from 'validator';

const createHabit = async (req, res) => {
    try {
        // Validação dos campos obrigatórios
        if (!req.body.name || !req.body.frequency) {
            return res.status(400).json({ 
                success: false,
                message: "All fields are required: name and frequency" 
            });
        }

        // Validação da frequência
        const validFrequencies = ['daily', 'weekly', 'specific_days'];
        if (!req.body.frequency.every(f => validFrequencies.includes(f))) {
            return res.status(400).json({
                success: false,
                message: "Invalid frequency value"
            });
        }

        // Validação dos dias da semana se for specific_days
        if (req.body.frequency.includes('specific_days') && (!req.body.daysOfWeek || !Array.isArray(req.body.daysOfWeek))) {
            return res.status(400).json({
                success: false,
                message: "DaysOfWeek is required for specific_days frequency"
            });
        }

        const habit = await habitService.createHabit(req.body, req.userId);
        
        res.status(201).json({
            success: true,
            message: 'Habit created successfully',
            data: habit
        });

    } catch (error) {
        console.error("Create habit error:", error);

        // Duplicate key error (se houver algum campo único)
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Habit already exists"
            });
        }
        
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};







const getAllHabits = async (req, res) => {
    try {
        const habits = await habitService.getAllHabits(req.userId);
        
        res.status(200).json({
            success: true,
            message: 'Habits retrieved successfully',
            data: habits
        });

    } catch (error) {
        console.error("Get habits error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};








const getHabitById = async (req, res) => {
    try {
        const habit = await habitService.getHabitById(req.params.id, req.userId);
        
        if (!habit) {
            return res.status(404).json({
                success: false,
                message: "Habit not found"
            });
        }

        res.status(200).json({
            success: true,
            message: 'Habit retrieved successfully',
            data: habit
        });

    } catch (error) {
        console.error("Get habit error:", error);
        
        if (error.message.includes('Cast to ObjectId failed')) {
            return res.status(400).json({
                success: false,
                message: "Invalid habit ID format"
            });
        }
        
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};









// Método para PUT (atualização completa)
const updateHabit = async (req, res) => {
    try {
        // Validação de campos obrigatórios para atualização completa
        if (!req.body.name || !req.body.frequency) {
            return res.status(400).json({
                success: false,
                message: "For full update, name and frequency are required"
            });
        }

        const habit = await habitService.fullUpdateHabit(
            req.params.id,
            req.body, // Espera todos os campos obrigatórios
            req.userId
        );

        if (!habit) {
            return res.status(404).json({
                success: false,
                message: "Habit not found"
            });
        }

        res.status(200).json({
            success: true,
            message: 'Habit fully updated successfully',
            data: habit
        });

    } catch (error) {
        // ... manter o tratamento de erros existente
    }
};

// Método separado para PATCH (atualização parcial)
const partialUpdateHabit = async (req, res) => {
    try {
        const updatableFields = ['name', 'description', 'frequency', 'daysOfWeek'];
        const receivedFields = Object.keys(req.body);
        
        // Validação de campos permitidos para atualização parcial
        if (!receivedFields.some(field => updatableFields.includes(field))) {
            return res.status(400).json({
                success: false,
                message: "At least one valid field must be provided for update"
            });
        }

        const habit = await habitService.partialUpdateHabit(
            req.params.id,
            req.body,
            req.userId
        );

        if (!habit) {
            return res.status(404).json({
                success: false,
                message: "Habit not found"
            });
        }

        res.status(200).json({
            success: true,
            message: 'Habit partially updated successfully',
            data: habit
        });

    } catch (error) {
        // ... tratamento de erros
    }
};







const deleteHabit = async (req, res) => {
    try {
        const deletedHabit = await habitService.deleteHabit(req.params.id, req.userId);
        
        if (!deletedHabit) {
            return res.status(404).json({
                success: false,
                message: "Habit not found"
            });
        }

        res.status(200).json({
            success: true,
            message: 'Habit deleted successfully',
            data: deletedHabit
        });

    } catch (error) {
        console.error("Delete habit error:", error);
        
        if (error.message.includes('Cast to ObjectId failed')) {
            return res.status(400).json({
                success: false,
                message: "Invalid habit ID format"
            });
        }
        
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};






export default {
    createHabit,
    getAllHabits,
    getHabitById,
    updateHabit,
    partialUpdateHabit,
    deleteHabit
};