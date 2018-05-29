
const getBackend = () => localStorage.getItem('backend') || `http://localhost:8081`;

export const post = (url, data = {}) => {

	const backend = getBackend();

	let headers = {'content-type': 'application/json'};
	if (localStorage.getItem("token")) headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

	return fetch(`${backend}${url}`, {
		body: JSON.stringify(data),
		headers,
		method: 'POST'
	})
		.then(response => response.json()) // parses response to JSON
		.catch((err) => console.log(err));
};

export const get = async (url) => {

	const backend = getBackend();

	let headers = {cache: "no-cache"};
	if (localStorage.getItem("token")) headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

	const response = await fetch(`${backend}${url}`, {
		headers
	});
	return response.json();
};
