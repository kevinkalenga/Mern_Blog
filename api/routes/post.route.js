import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {create, getposts} from '../controllers/post.controller.js'

const router = express.Router();
router.post('/create', verifyToken, create);
router.get('/getposts', getposts)


// export so as to add to index.js
export default router