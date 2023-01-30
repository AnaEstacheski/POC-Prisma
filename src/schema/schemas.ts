import Joi from "joi";

export const artistSchema = Joi.object({
    artist_name: Joi.string().required()
});

export const artWorkSchema = Joi.object({
    artwork: Joi.string().required()
});

export const expositionSchema = Joi.object({
    gallery_name: Joi.string().required(),
    artwork: Joi.number().required(),
    artist: Joi.number().required()
});
