import Router from 'koa-router';
import reactApp from '../controllers/reactAppController';
import getPosts from '../controllers/getPostsController';
let router = Router();

router.get('/getPosts/', getPosts);
router.get('/app/*', reactApp);

export default router;