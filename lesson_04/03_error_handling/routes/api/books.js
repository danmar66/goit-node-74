const books = require('../../models/books')
const express = require('express')
const router = express.Router()
const RequestError = require('../../helpers')
const Joi = require('joi')

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required()
})

router.get('', async (req, res) => {
    try {
        const result = await books.getAll()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await books.getOneById(id)
        if (!result) {
            throw RequestError(404, "Message")
        }
        res.status(200).json(result)

    } catch (error) {
        next(error)
    }
})

router.post('', async (req, res, next) => {
    try {
        const { error } = bookSchema.validate(req.body)
        if (error) {
            throw RequestError(400, error.message)
        }
        const result = await books.add(req.body)
        return res.status(201).json(result)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const { error } = bookSchema.validate(req.body)
        if (error) {
            throw RequestError(400, error.message)
        } 
        const { id } = req.params
        const result = await books.updateById(id, req.body)
        if (!result) {
            throw RequestError(404)
        }
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await books.removeById(id)
        if (!result) {
            throw RequestError(404)
        }
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
})

module.exports = router
