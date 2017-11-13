   

function submitForm() {
    
    
    var newUser = new Object();
	
     newUser.name = $('#nameInput').val();
     newUser.email = $('#emailInput').val();
     newUser.tn = $('#tnInput').val();
     newUser.dob = $('#dobInput').val();
     newUser.password = $('#passwordInput').val();
    
    
 if(sessionStorage.user)
    {
     user= JSON.parse(sessionStorage.getItem('user'));
    }else{
     user=[];
    }
 user.push(newUser )   
    console.log(user);
    sessionStorage.setItem('user', JSON.stringify(user));
    
    var retrievedObject = sessionStorage.getItem('user');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

