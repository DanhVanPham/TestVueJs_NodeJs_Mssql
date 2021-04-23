const connection = require('../models/db.js');
const sql = require('mssql');

var Task = function(task) {
    this.id = task.id;
    this.task = task.task;
    this.status = task.status;
    let d = new Date();
    this.createdAt = [d.getMonth() + 1,
        d.getDate(),
        d.getFullYear()
    ].join('/') + ' ' + [d.getHours(),
        d.getMinutes(),
        d.getSeconds()
    ].join(':');;
}


Task.getAllTasks = function getAllTasks(callback) {
    connection.then(() => {
        return sql.query("SELECT * FROM tasks;");
    }).then(result => {
        callback(null, result.recordset)
    }).catch(err => {
        callback(err, null)
    })
}

Task.findTaskById = function findTaskById(id, callback) {
    connection.then(() => {
        return sql.query(`SELECT * FROM tasks WHERE id = ${id}`);
    }).then((result) => {
        callback(null, result.recordset);
    }).catch(error => {
        callback(error, null);
    })
}

Task.createNewTask = function createNewTask(task, callback) {
    if (!task.task) {
        callback("Require input all field!", null);
    } else {
        connection.then(() => {
            return sql.query("INSERT INTO tasks VALUES( '" + task.task + "', '" + task.status + "' ,'" + task.createdAt + "')")
        }).then((result) => {
            callback(null, result);
        }).catch((error) => {
            callback(error, null);
        })
    }

}

Task.updateTask = function updateTask(task, callback) {
    if (task.id && task.task) {
        connection.then(() => {
            return sql.query("Update tasks set task = '" + task.task + "' , status = '" + task.status + "' , createdAt =  '" + task.createdAt + "'" +
                " where id = " + task.id);
        }).then((result) => {
            callback(null, result);
        }).catch((error) => {
            callback(error, null);
        })
    } else {
        callback("Require input all field!", null);
    }

}

Task.deleteTaskById = function deleteTaskById(id, callback) {
    if (!id) {
        callback("Require choose task to delete!", null);
    } else {
        connection.then(() => {
            return sql.query(`Update tasks set status = 0  where id = ${id}`);
        }).then(result => {
            callback(null, result);
        }).catch(error => {
            callback(error, null);
        })
    }
}

module.exports = Task;