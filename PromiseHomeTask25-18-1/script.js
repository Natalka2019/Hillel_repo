
let listFinal;

let listConcat = new Promise(
	(resolve, reject) => {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'data.json');
		xhr.send();

		xhr.onload = function () {

			if (xhr.status >= 200 && xhr.status < 400) {
				resolve(JSON.parse(xhr.responseText))
			} else {
				reject(xhr.statusText)
			}

		}

	}
)

listConcat.then(

	(data) => {

		let listOne = data.slice();

			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'data2.json');
			xhr.send();

			xhr.onload = function () {

				if (xhr.status >= 200 && xhr.status < 400) {
					let listTwo = JSON.parse(xhr.responseText);
					
					console.log(listOne);
					console.log(listTwo);

					listFinal = listOne.concat(listTwo);

				} 

				console.log(listFinal);

			}

	}
)

