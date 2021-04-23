const connection = require('../models/db.js');
const sql = require('mssql');
const baseUrl = '/v1/api/product';
const controller = require('../controllers/taskController.js');

// Testing send email
const nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'Danhskipper18@gmail.com',
//         pass: 'Danh@18082000'
//     }
// })

// var mailOptions = {
//     from: 'Danhskipper18@gmail.com',
//     to: 'Danhpvse141028@fpt.edu.vn',
//     subject: 'Test send email with nodejs and module nodemailer',
//     text: 'Test successfull',
//     html: '<h1>Hello World</h1>'
// };

module.exports = function(app) {
    app.route(baseUrl).get(controller.list_all_tasks).post(controller.create_new_task)
    app.route(baseUrl + "/:id").get(controller.find_task_by__id).delete(controller.delete_task_by_id).put(controller.update_task)
        // app.get("/send-email", (req, res) => {
        //     transporter.sendMail(mailOptions, function(error, info) {
        //         if (error) {
        //             console.log(error);
        //         } else {
        //             console.log(info);
        //         }
        //     })
        // })
}