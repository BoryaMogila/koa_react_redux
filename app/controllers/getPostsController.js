
export default async function(ctx) {
    ctx.body = [
        {
            title: 'React',
            text: 'React is a good framework'
        },
        {
            title: 'React + Redux',
            text: 'React + Redux is a cool thing for isomorphic apps'
        },
        {
            title: 'React + Redux + React-router',
            text: 'React + Redux + React-router is a cool thing for isomorphic flexible apps'
        }
    ]
}