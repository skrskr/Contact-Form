// Input Elements
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var phoneInput = document.getElementById("phoneInput");
// Error Pargraph Elements
var nameErrorPar = document.getElementById("nameErrorMessage");
var emailErrorPar = document.getElementById("emailErrorMessage");
var phoneErrorPar = document.getElementById("phoneErrorMessage");
//Table of data
var dataTable = document.getElementById("dataTable");

//Contact List 
var contactList = new ContactList();
//Update vars
var updatedFlag = false;
var updatedId = "";

// Submit Button
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener('click',function(event) {
    event.preventDefault();
    validateInputs();
});

function validateInputs() {
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var validStatus = true;

    nameErrorPar.style.visibility = "hidden";
    emailErrorPar.style.visibility = "hidden";
    phoneErrorPar.style.visibility = "hidden";

    if(name == "") {
        nameErrorPar.textContent = "Name * Required..";
        nameErrorPar.style.visibility = "visible";
        validStatus = false;
    }
    if(email == "") {
        emailErrorPar.textContent = "Email * Required..";
        emailErrorPar.style.visibility = "visible";
        validStatus = false;
    } 
    else if(!(validateEmail(email))) {
        emailErrorPar.textContent = "Please Enter Valid Email.."
        emailErrorPar.style.visibility = "visible";
        validStatus = false;
    }

    if(phone == "") {
        phoneErrorPar.textContent = "Phone * Required..";
        phoneErrorPar.style.visibility = "visible";
        validStatus = false;
    } 
    else if(!(validatePhone(phone))) {
        phoneErrorPar.textContent = "Phone must be 11 digit..";
        phoneErrorPar.style.visibility = "visible";
        validStatus = false;
    }

    if(validStatus) {
        if(updatedFlag)
        {
            var updatedContact = new Contact();
            updatedContact.setId(updatedId);
            updatedContact.setName(name);
            updatedContact.setPhone(phone);
            updatedContact.setEmail(email);
            contactList.editContact(updatedId,updatedContact);
            updatedFlag = false;
            updatedId = "";
        }
        else
        {
            var contact = new Contact();
            contact.setId(uuidv4());
            contact.setName(name);
            contact.setPhone(phone);
            contact.setEmail(email);
            contactList.addContact(contact);
        }
        refreshTable();
        restInputs();
    } 
}

// Set update, delete events
function updateAndDeleteListener()
{
    var index = -1;
    var rowsCount = dataTable.rows.length;
    for(var i = 1; i < rowsCount; i++)
    {
        //Update events
        dataTable.rows[i].cells[3].onclick = function()
        {
            index = this.parentElement.rowIndex;   
            var contact = contactList.getAllContacts()[index - 1];
            nameInput.value = contact.getName();
            phoneInput.value = contact.getPhone();
            emailInput.value = contact.getEmail();
            updatedFlag = true;
            updatedId = contact.getId();
        };

        //delete events
        dataTable.rows[i].cells[4].onclick = function()
        {
            var c = confirm("do you want to delete this row");
            if(c === true)
            {
                index = this.parentElement.rowIndex;
                var contact = contactList.getAllContacts()[index - 1];
                contactList.removeContact(contact.getId());
                refreshTable();
            }
            
        };
    }
}

//Generate Unique ID
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function refreshTable()
{
    deleteTableRows();
    creatTableRows();
    updateAndDeleteListener();
}

function restInputs()
{
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
}

function deleteTableRows ()
{
    var rowCount = dataTable.rows.length;
    for(var i = rowCount-1; i > 0; i--)
        dataTable.deleteRow(i);
}

function creatTableRows() {
    var contacts = contactList.getAllContacts();
    var contactsLen = contacts.length;
    for(var i = 0; i < contactsLen; i++)
    {
        var row = dataTable.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        
        var currentContact = contacts[i];
        cell1.innerHTML = currentContact.getName();
        cell2.innerHTML = currentContact.getEmail();
        cell3.innerHTML = currentContact.getPhone();
        cell4.innerHTML = "<a><img src=\"./img/edit.png\" width=\"25\" height=\"25\"></a>";
        cell5.innerHTML = "<a><img src=\"./img/delete.png\" width=\"25\" height=\"25\"></a>";
    }
  }