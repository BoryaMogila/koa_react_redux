import Router from 'koa-router';
import reactApp from '../controllers/reactAppController';
import getPosts from '../controllers/getPostsController';
import editPost from '../controllers/editPostController';
import deletePost from '../controllers/deletePostController';
let router = Router();

router.get('/getPosts/', getPosts);
router.get('/editPost/', editPost);
router.get('/deletePost/', deletePost);
router.get('/app/*', reactApp);

export default router;