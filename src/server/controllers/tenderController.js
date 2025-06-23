import Tender from "../models/Tender.js";

// Create
export const createTender = async (req, res) => {
    try {
        // console.log(req.body)
        const fileData = req.files?.map(file => ({
            filename: file.originalname,
            contentType: file.mimetype,
            data: file.buffer
        })) || [];

        const newTender = new Tender({
            ...req.body,
            user: req.user.id,
            files: fileData
        });

        await newTender.save();
        res.status(201).json(newTender);
    } catch (err) {
        res.status(500).json({ error: "Failed to create tender", details: err.message });
    }
};

// Get all
export const getAllTenders = async (req, res) => {
    try {
        const tenders = await Tender.find().select("-files.data").sort({ createdAt: -1 }); // exclude large buffers
        res.json(tenders);
    } catch (err) {
        res.status(500).json({ error: "Error fetching tenders", details: err });
    }
};
// Get all
export const getAllMyTenders = async (req, res) => {
    // console.log(req.user)
    try {
        const tenders = await Tender.find({ user: req.user.id }).select("-files.data").sort({ createdAt: -1 }); // exclude large buffers
        res.json(tenders);
    } catch (err) {
        res.status(500).json({ error: "Error fetching tenders", details: err });
    }
};

// Get tender with image (base64)
export const getTenderById = async (req, res) => {
    try {
        const tender = await Tender.findById(req.params.id);
        if (!tender) return res.status(404).json({ error: "Tender not found" });

        // convert image buffer to base64 string
        const files = tender.files.map(file => ({
            filename: file.filename,
            contentType: file.contentType,
            base64: file.data.toString("base64")
        }));

        res.json({ ...tender.toObject(), files });
    } catch (err) {
        res.status(500).json({ error: "Error fetching tender", details: err });
    }
};

// Update
export const updateTender = async (req, res) => {
    // console.log(req.body)

    try {
        const fileData = req.files?.map(file => ({
            filename: file.originalname,
            contentType: file.mimetype,
            data: file.buffer
        })) || [];
        if (req.body.files === "null" || req.body.files === null) {
            delete req.body.files;
        }

        const updatePayload = {
            ...req.body,
            ...(fileData.length > 0 && { files: fileData }),
        };

        const updated = await Tender.findByIdAndUpdate(
            req.params.id,
            {
                ...updatePayload
            },
            { new: true }
        );
        // console.log(updatePayload, updated)
        if (!updated) return res.status(404).json({ error: "Tender not found" });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Error updating tender", details: err });
    }
};

// Delete
export const deleteTender = async (req, res) => {
    try {
        const deleted = await Tender.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Tender not found" });
        res.json({ message: "Tender deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting tender", details: err });
    }
};
