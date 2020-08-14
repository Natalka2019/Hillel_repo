let xhr = new XMLHttpRequest();
xhr.open("GET", "users.json");
xhr.send();


xhr.onload = function() {
 	render( JSON.parse(xhr.responseText) )
};


let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);


function render (data) {
	
	let users = data.users,
		roles = data.roles,
		ratings = data.rating;

 	let renderedUsers = users.map( user => {

		let userCard = document.createElement('div');
		userCard.className = "card";
		mainDiv.append(userCard);

		let cardInfo = document.createElement("div");
		cardInfo.className = "card__info";
		userCard.append(cardInfo);

		cardInfo.innerHTML =

			`<div class="card__info--data">
				<img src="${user.icon}" class="data__img" alt="${user.name}" height="50">
				<div class="user__info">
					<p>Name: <b>${user.name}</b></p>
					<p>Age: <b>${user.age}</b></p>
				</div>
			</div>
			<div class="card__info--role">
				<img src="${userPositionImage (user.position, roles)}" alt="student">
				<span>${user.position}</span>
			</div>`;

				if (user.courses) {

					let cardCourses = document.createElement('div');
					cardCourses.className = "card__courses";

					userCard.append(cardCourses);
					cardCourses.innerHTML = `${userCourses(user, ratings)}`

				}

	} ).join("");

	}

function userPositionImage (userPosition, obj) {

	for (let key of Object.keys(obj)){

		if (key == userPosition) {

			return obj[key];

		}
	}
}


function userCourses(user, obj) {

	let renderedCourses = user.courses.map( course => {

		for (let key of Object.keys(obj)){

			if (obj[key] >= course.rating) {

				let style = ((key.toLowerCase()).split(" ")).join("");

				return `<p class="card__courses--course ${style}">${course.name}: <span>${key}</span></p>`

		   	}

		}

	 }).join("");
	
	return renderedCourses;
}



/*function userCourses(user, obj) {

	let renderedCourses = user.courses.map( course => {

		for (let key of Object.keys(obj)){

			if (obj[key] >= course.rating) {

				switch(key) {
					case "Excellent":
						return `<p class="card__courses--course excellent">${course.name}: <span>${key}</span></p>`
						break;
					case "Very Good":
						return `<p class="card__courses--course verygood">${course.name}: <span>${key}</span></p>`
						break;
					case "Good":
						return `<p class="card__courses--course good">${course.name}: <span>${key}</span></p>`
						break;
					default:
						return `<p class="card__courses--course satisfactory">${course.name}: <span>${key}</span></p>`
						break;
				}

		   	}

		}

	 }).join("");
	
	return renderedCourses;
}
*/


