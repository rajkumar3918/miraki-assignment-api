const {Schema, SchemaTypes, model } = require("mongoose");

const taskSchema = Schema({
    title:{
        type: SchemaTypes.String,
        require: true,
        trim: true,
        maxLenght: [40, "name cannot be more then 40 characters"]
    },
    description:{
        type: SchemaTypes.String,
        require: true,
        trim: true,
        maxLenght: [500, "name cannot be more then 500 characters"]

    },
    complete: {
        type: SchemaTypes.Boolean,
        default: false
    },
    userId: {
        type: SchemaTypes.ObjectId,
        require: true
    },
    username:{
        type: SchemaTypes.String,
        require: true,
    },
    createdAt:{
        type: SchemaTypes.String,
        require:true
    },
    updatedAt:{
        type: SchemaTypes.String,
        require:true
    },
})

module.exports = model("tasks", taskSchema)