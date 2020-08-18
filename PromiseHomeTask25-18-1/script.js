
 function getList (JSONfile) {

	return new Promise((resolve, reject) => {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', JSONfile);
		xhr.send();

		xhr.onload = function () {

			if (xhr.status >= 200 && xhr.status < 400) {
				
				resolve(JSON.parse(xhr.responseText))

			} 

		}

	} )

}

Promise.all([getList('data.json'), getList('data2.json')]).then((values) => {

let list = values.reduce((sum, current) => sum + ',' + current).split(',');
console.log(list)

} );


//ALTERNATIVE VARIANT 1
/*

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
)*/

//ALTERNATIVE VARIANT 2

/*function getList (JSONfile) {

	return new Promise((resolve, reject) => {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', JSONfile);
		xhr.send();

		xhr.onload = function () {

			if (xhr.status >= 200 && xhr.status < 400) {
				
				resolve(JSON.parse(xhr.responseText))

			} 

		}

	} )

}


let listConcat = new Promise(
	(resolve, reject) => {
	
		resolve(getList('data.json'));

	}

)

listConcat.then(

	(data) => {

		let listOne = data.slice();

		getList('data2.json').then(

				(data) => {

					let listConcat = listOne.concat(data);

					console.log(listOne);
					console.log(data);
					console.log(listConcat);
				}

		);

	}
)

*/