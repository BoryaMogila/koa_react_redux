import {deletePost} from '../managers/postsManager'

export default async function(ctx) {
    const {id} = ctx.query;
    ctx.body = await deletePost(id);
}