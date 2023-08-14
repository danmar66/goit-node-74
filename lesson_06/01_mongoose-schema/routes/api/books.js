const express = require('express')
const Joi = require('joi')
const RequestError = require('../../helpers')
const Book = require('../../models/book')

const bookShema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  qty: Joi.number().required(),
  favourite: Joi.boolean().default(false),
  genre: Joi.string().valid('love', 'tech').required(),
  isbn: Joi.string().pattern(/[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/).required()
})

const bookUpdateFavoriteSchema = Joi.object({
  favourite: Joi.boolean().required(),
})

const router = express.Router()

router.get('', async (req, res) => {
  try {
    // const result = await Book.find({}, {createdAt: false, updatedAt: false, _id: false})
    const result = await Book.find()
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const {id } = req.params
    const result = await Book.findById(id)
    // const result = await Book.find({_id: id})
    // const result = await Book.findOne({_id: id})
    if (!result) {
      throw RequestError(404)
    }
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.post('', async (req, res, next) => {
  try {
    const { error } = bookShema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }
    const result = await Book.create(req.body)
    return res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { error } = bookShema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }
    const { id } = req.params
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true})
    if (!result) {
      throw RequestError(404)
    }
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.patch('/:id/favorite', async (req, res, next) => {
  try {
    const { error } = bookUpdateFavoriteSchema.validate(req.body)
    if (error) {
      throw RequestError(400, error.message)
    }
    const { id } = req.params
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true})
    if (!result) {
      throw RequestError(404)
    }
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await Book.findByIdAndDelete(id)
    if (!result) {
      throw RequestError(404)
    }
    return res.status(200).json(result)
  } catch (error) {
    next(error)
  }
})

module.exports = router
