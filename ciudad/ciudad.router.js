import express from 'express';
const router = express.Router();

router.route('/')
    .get()
    .put()

router.route('/ciudad')
    .post()

router.route('/ciudad/:ciudadId')
    .delete()

export {router}