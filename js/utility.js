// Valid Phone
function validatePhone (phone)
{
    var res = phone.match(/\d/g);
    if(res == null)
        return false;
       
    return res.length === 11;
}

// Valid Email
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

