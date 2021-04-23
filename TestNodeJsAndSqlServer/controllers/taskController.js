const Task = require('../models/appModel');


exports.list_all_tasks = (req, res) => {
    Task.getAllTasks(function callBack(error, task) {
        if (error) {
            return res.send(error);
        }
        return res.send(task);
    })
}

exports.find_task_by__id = (req, res) => {
    Task.findTaskById(req.params.id, function callback(error, result) {
        if (error) {
            return res.send(error);
        }
        return res.send(result);
    })
}

exports.create_new_task = (req, res) => {
    var task = new Task(req.body);
    Task.createNewTask(task, function callback(error, result) {
        if (error) {
            return res.send(error);
        }
        return res.send("Create new Task successful");
    })
}

exports.update_task = (req, res) => {
    var task = new Task(req.body);
    Task.updateTask(task, function callback(error, result) {
        if (error) {
            return res.send("Update task failed!");
        }
        return res.send("Update task successful");
    })
}

exports.delete_task_by_id = (req, res) => {
    var id = req.params.id;
    Task.deleteTaskById(id, function callback(error, result) {
        if (error) {
            return res.send(error);
        }
        return res.send("Delete task with id = " + id + " successful.")
    })
}