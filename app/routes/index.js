import Router from 'koa-router';
import reactApp from '../controllers/reactAppController';
import baseAutoApp from '../controllers/baseAutoAppController';
import convert from 'koa-convert';

let router = Router();

router.get('/jsadmin/', reactApp);
router.get('/jsadmin/baseAuto/listAuto/', baseAutoApp.listAuto);


export default router;