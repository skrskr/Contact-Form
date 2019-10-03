function Contact() 
{

    this.setId = function (id) {
        this.id = id;
    }

    this.setEmail = function (email){
        if(validateEmail(email))
        {
            this.email = email;
            return true;
        }
        return false;
    }

    this.setName = function(name) {
        var arr = name.split(' ');
        if(arr.length == 1)
        {
            this.name = name;
        }  
        else
        {
            
            var newName = arr[0].charAt(0) + ".";
            for(var i = 1; i < arr.length - 1 ; i++)
                newName += arr[i].charAt(0) + ".";
        
            newName += arr[arr.length -1];
            this.name = newName;
        }
    }

    this.setPhone = function (phone) {
        if(phone.length < 11)
            return false;
        this.phone = phone;
        return true;
    }

    this.getId = function ()
    {
        return this.id;
    }

    this.getEmail = function ()
    {
        return this.email;
    }

    this.getName = function ()
    {
        return this.name;
    }

    this.getPhone = function () 
    {
        return this.phone;
    }

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}



// var cont = new Contact();
// cont.setId('1223');
// cont.setName('Mohamed skar ali');
// cont.setEmail('mm@gm.com');
// cont.setPhone('01157347777');

// console.log(cont.getId(), cont.getName(), cont.getEmail(), cont.getPhone());

  
 