const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    created_at: {
       type: Date,
       default: Date.now() 
    }
})

ProductSchema.plugin(mongoosePaginate)

// registering a model in our application
mongoose.model('Product', ProductSchema)