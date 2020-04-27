const axios = require('axios');

function request(n, type) {
	const reqs = Array(n).fill(() => axios.get('http://localhost:3000/'));
	if (type === 0){
		return axios.all(reqs.map((req) => req()));
	} else {
		return (async () => {
			let resps = [];
			for (const req of reqs) {
				const resp = await req();
				resps.push(resp);
			}
			return resps;
		})();
	}
}

module.exports = request;
