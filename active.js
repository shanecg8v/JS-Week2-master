const obj = {
	data: {
		user: {
			uuid: '7d6af3ec-1d81-48f8-8d68-f01597cd5fd6',
			token: 'avoZ1tzZngVGMXNz9nJgHkitOEqwyqbGXsPwPu51TVggTUhdaq9T3c4pmo1d'
		},
		apiPath: 'https://course-ec-api.hexschool.io/',
		products: [],
	},
	getData() {
		const vm = this;
		const url = `${vm.data.apiPath}api/${vm.data.user.uuid}/ec/products`;

		axios.get(url).then((res) => {
			vm.data.products = res.data.data;
			vm.render();
		});
	},
	deleteData() {
		const vm = this;
		const url = `${vm.data.apiPath}api/${vm.data.user.uuid}/admin/ec/product/${id}`;

		axios.delete(url).then(res => {
			console.log(res);
		});
	},
	render() {
		const app = document.getElementById('app');
		let products = this.data.products;
		let str = '';
		products.forEach((item) => {
			str += `<div class="card">
			<img src="${item.imageUrl[0]}" class="card-img-top">
			<div class="card-body">
			   <h5 class="card-title">${item.title}</h5>
			   <p class="card-text">${item.content}</p>
			   ${item.id}${item.origin_price}
			</div>
            </div>`;
		});
		app.innerHTML = str;
	}
};

axios.defaults.headers['Authorization'] = `Bearer ${obj.data.user.token}`;
obj.getData();