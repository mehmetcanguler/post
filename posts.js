const posts = [
    { post: "post 1", object: "obje 1" },
    { post: "post 2", object: "obje 2" },
    { post: "post 3", object: "obje 3" }
]

const listPost = () => {
    
    posts.map(postss => {
        console.log(postss.post)
    })
}


const addPost = (newPost,callback) => {

    posts.push(newPost)
    callback()
    
}

addPost({post:"post 6",object:"obje 6"},listPost)
