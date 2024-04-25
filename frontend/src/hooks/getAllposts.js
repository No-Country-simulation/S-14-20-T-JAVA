import axios from "axios";

const url = "http://34.49.227.176/posts/get/posts/a";

async function getAllPosts() {
    const posts = await axios.get(url);
    console.log(posts.data)
    return posts.data;
}

export default getAllPosts;