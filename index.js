var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index) {
    
    if(field.name == "gender"){

        if(field.checked){
            console.log('Ta', field);

        }

    }
    else{
        console.log('não');
    }

});