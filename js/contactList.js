function ContactList() 
{
    this.name = "";
    this.contacts = new Array();

    this.setName = function(name)
    {
        this.name = name;
    }
    
    this.getName = function() 
    {
        return this.name;
    }


    this.addContact = function (contact)
    {
        this.contacts.push(contact);
    }

    this.removeContact = function (id)
    {
        this.contacts = this.contacts.filter( contact => contact.id !== id);
    }

    this.editContact = function (id, contactUpdate)
    {
        for(var i = 0; i < this.contacts.length; i++) {
            if(this.contacts[i].getId() == id)
            {
                var cont1 = new Contact();
                cont1.setId(id);
                cont1.setName(contactUpdate.getName());
                cont1.setEmail(contactUpdate.getEmail());
                cont1.setPhone(contactUpdate.getPhone());
                this.contacts[i] = cont1;
                break;
            }
        }
    }

    this.getContact = function (id)
    {
        var newCotnact = this.contacts.filter( contact => contact.id === id);
        return newCotnact;
    }
    this.getAllContacts = function ()
    {
        return this.contacts;
    }

}