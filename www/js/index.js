    
function submitForm() {
	var text = $('#textinput').val();
	alert(text);
    storeValue();
}

function storeValue(key, value) {
   localStorage.setItem('userInput', $('#textinput').val());
}
