function Contact() 
{

    this.setId = function (id) {
        this.id = id;
    }

    this.setEmail = function (email) {
        this.email = email;
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
        this.phone = phone;
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
}