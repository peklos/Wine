document.getElementById('error').style = 'display: none;';
document.getElementById('confirmed').style = 'display: none;';

function checkForm(el) {
	document.getElementById('error').style = 'display: none;';
	document.getElementById('confirmed').style = 'display: none;';
	function showResult() {
		console.log("---------------");
		console.log("tasting")
		console.log("NAME: " + name);
		console.log("TEL: " + tel);
		console.log("---------------");
	}

	var name = document.getElementById('inputName').value;
	var inputTel = document.getElementById('inputTel');
	var tel = inputTel.value.replace(/[^0-9]/g, '');

	var fail = ""

	if(name == "" && tel == "") {
		fail = "Заполните все поля"
	}
	else if(tel.length <= 5) {
		fail = "Введите корректный номер телефона";
	}
	else if(name.length <= 1 || name.length > 50) {
		fail = "Введите корректное имя";
	}
	else if(tel.length <= 5 || tel.length > 14) {
		fail = "Введите корректный номер телефона";
	}

	if(fail != "") {
		document.getElementById('error').innerHTML = fail;
		document.getElementById('error').style = 'display: block;';
	}

	if(fail == "") {
		showResult();
		document.getElementById('error').style = 'display: none;';
		document.getElementById('confirmed').style = 'display: block;';
	}
}
