import mongoose from 'mongoose';
const { Schema } = mongoose;

const yeastSchema = new Schema({
    strain: String,
    gen: Number,
    received: Date,
    source: String,
    purchased_from: String,
    quantity: String,
    prop_type: String,
    count_at_pitch: String,
    //add history - a copy of self
});