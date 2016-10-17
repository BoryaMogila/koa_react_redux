//Ваша логика по обработке данных
let data = [
    {
        id   : 1,
        title: 'React',
        text : 'React is a good framework'
    },
    {
        id   : 2,
        title: 'React + Redux',
        text : 'React + Redux is a cool thing for isomorphic apps'
    },
    {
        id   : 3,
        title: 'React + Redux + React-router',
        text : 'React + Redux + React-router is a cool thing for isomorphic flexible apps'
    }
];

export const getAllPosts = async function getAllPosts(){
    return data;
};

export const editPost = async function editPost({id, title, text}){
    let status = 'error';
    if(id && text && title){
        data.map((post, index) => {
            if(post.id == id){
                post.title = title;
                post.text = text;
                status = 'ok';
            }
        });
    } else if(text && title){
        id = data.length + 1;
        data.push({id,title, text});
        status = 'ok';
    }
    return {id, status, posts: data};

};

export const deletePost = async function deletePost(id){
    let status = 'error';
    data.map((post, index) => {
        if(post.id == id){
            data = [...data.slice(0, index), ...data.slice(index + 1)];
            status = 'ok';
        }
    });
    return {status, posts: data};
};
