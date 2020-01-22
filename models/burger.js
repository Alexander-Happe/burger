var orm = require('../config/orm.js');

var burgers = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    insertOne: function(cols, values, cb){
        orm.insertOne('burgers', cols, values, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete('burgers', condition, function(res){
            cb(res);
        });
    }
};

module.exports = burgers;