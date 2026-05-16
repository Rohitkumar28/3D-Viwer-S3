const Model = require("../models/Model");

const s3 = require("../config/s3");

const {
  PutObjectCommand
} = require("@aws-sdk/client-s3");

const uploadModel = async (req, res) => {
  try {
    const file = req.file;

    const fileName =
      Date.now() + "-" + file.originalname;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,

      Key: fileName,

      Body: file.buffer,

      ContentType: file.mimetype
    };

    await s3.send(
      new PutObjectCommand(params)
    );

    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;

    const model = await Model.create({
      user: req.user.id,

      modelName: file.originalname,

      modelUrl: fileUrl
    });

    res.status(201).json(model);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getModels = async (req, res) => {
  try {
    const models = await Model.find({
      user: req.user.id
    });

    res.json(models);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  uploadModel,
  getModels
};