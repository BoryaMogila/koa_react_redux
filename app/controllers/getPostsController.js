
import {getAllPosts} from '../managers/postsManager';

export default async function(ctx) {
    ctx.body = await getAllPosts();
}