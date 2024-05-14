const express = require('express');
const FormModel = require('../model/form');

const Form = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, nationality, message } = req.body;

        // Create a new form document
        const formData = new FormModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            nationality: nationality,
            message: message
        });

        // Save the form data to the database
        await formData.save();

        // Respond with success message
        res.status(200).json({form:formData });
    } catch (error) {
        // Handle errors
        console.error('Error saving form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const GetFormdata=async(req,res)=>{
    try {
        const allFormData = await FormModel.find({});

        res.status(200).json({ formData: allFormData });
    } catch (error) {
        console.error('Error fetching form data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
      
}
module.exports = {
    Form,
    GetFormdata
};
