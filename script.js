const postContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

async function getPosts() {
	const respond = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

	const data = await respond.json();

	return data;
}

async function showPosts() {
	const posts = await getPosts();

	posts.forEach(post => {
		const postEl = document.createElement('div');
		postEl.classList.add('post');
		postEl.innerHTML = ` 
				<div class="number">${post.id}</div>
				<div class="post-info">
					<h2 class="post-title">${post.title}</h2>
					<p class="post-body">${post.body}</p>
				</div>	
		`;

		postContainer.appendChild(postEl);
	})
}

showPosts()