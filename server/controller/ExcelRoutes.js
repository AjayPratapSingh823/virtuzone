const express=require('express');
const FormModel= require('../model/form');
const excel = require('exceljs'); 

const Excel=async(req,res)=>{
    try{
        const allFormData=await FormModel.find({});
        //create a new Excel workbook
        const workbook= new excel.Workbook();
        const worksheet=workbook.addWorksheet('Form Data');
        worksheet.addRow(['First Name', 'Last Name', 'Email', 'Phone Number', 'Nationality', 'Message']);

        allFormData.forEach(data=>{
            worksheet.addRow([data.firstName, data.lastName, data.email, data.phoneNumber, data.nationality, data.message]);
        })

        const filePath='form-data.xlsx';
        await workbook.xlsx.writeFile(filePath);

        res.download(filePath, 'form_data.xlsx', (err) => {
            if (err) {
                console.error('Error downloading Excel file:', err);
                res.status(500).json({ error: 'Internal server error' });
            } 
        });
    }catch (error) { t                                                     
        console.error('Error generating Excel file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports=Excel;