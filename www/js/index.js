var formArr;    

function submitForm() {
	var text = $('#textinput').val();
    var name = ...
    var email = ...
    
    
    var jsonObject = { "text" : text, "name" : name, ..}
    

	alert(text);
    storeValue("forms", jsonObject);
}

function storeValue(key, value) {

    
    fomrArr.push(value);
    
    
    localStorage.setItem(key, formArr);
    
    
    
}
