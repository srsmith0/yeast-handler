import { Schema, model, models } from 'mongoose';

const yeastSchema = new Schema({
    strain: String,
    gen: Number,
    received: Date,
    current_tank: String,
    brand: String,
    batch_size: String,
    source: String,
    source_brand: String,
    purchased_from: String,
    quantity: String,
    prop_type: String,
    count_at_pitch: String,
    //add history - a copy of self
});

const Yeast = models.Yeast || model('Yeast', yeastSchema);

export default Yeast;