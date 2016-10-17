import {editPost} from '../managers/postsManager'

export default async function(ctx) {
    const {id, title, text} = ctx.query;
    ctx.body = await editPost({id, title, text});
}