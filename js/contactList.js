function ContactList() 
{
    // this.name;
    this.contacts = new Array();

    // this.setName(name)
    // {
    //     this.name = name;
    // }
    
    // this.getName() 
    // {
    //     return this.name;
    // }


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
        //return this.contacts;
        for(var i = 0; i < this.contacts.length; i++)
            console.log(this.contacts[i]);
    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
    }
}

// var conList = new ContactList();

// var cont1 = new Contact();
// cont1.setId('1223');
// cont1.setName('Mohamed skar ali');
// cont1.setEmail('mm@gm.com');
// cont1.setPhone('01157347777');



// conList.addContact(cont1);


// var cont2 = new Contact();
// cont2.setId('122df3');
// cont2.setName('Mohamed ska');
// cont2.setEmail('mm@gm.com');
// cont2.setPhone('01157347777');

// conList.addContact(cont2);

// console.log(conList.getAllContacts());


// var contUpdate = new Contact();
// contUpdate.setId('1223');
// contUpdate.setName('Mohamed');
// contUpdate.setEmail('mdfdm@gm.com');
// contUpdate.setPhone('01157346677');

// // console.log(contUpdate.getName());


// conList.addContact(cont1);
// conList.addContact(cont2);
// console.log(conList.getAllContacts());
// console.log('-----------------');
// conList.editContact('1223',contUpdate);
// console.log(conList.getContact('1223'));