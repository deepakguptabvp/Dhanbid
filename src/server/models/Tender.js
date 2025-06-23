import mongoose from "mongoose";

const TenderSchema = new mongoose.Schema({
    requirement: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    location: { type: String, required: true },
    quantity: { type: String, required: true },
    timeline: { type: Date, required: true },
    minPrice: Number,
    maxPrice: Number,
    files: [
        {
            filename: String,
            contentType: String,
            data: Buffer, // actual image data
        }
    ],
    agreed: { type: Boolean, default: false },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true });

export default mongoose.models.Tender || mongoose.model("Tender", TenderSchema);
