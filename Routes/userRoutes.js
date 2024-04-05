
import express from 'express'
import { homeController, signup, getUser, getGithubDetails,getcountry } from '../controllers/user.js';

const router = express.Router();

router.get('/', homeController);

router.get('/getuser/:userid', getUser);

router.post('/signup', signup);



router.get('/getdet/:username', getGithubDetails);
router.get('/get/:name', getcountry);

export default router;