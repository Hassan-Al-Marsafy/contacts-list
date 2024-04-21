import { Component } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  number: string;
}

const Contacts: Contact[] = [
  {
    id: 0,
    name: 'Mohamed',
    number: '01113826539',
  },
  {
    id: 1,
    name: 'Ahmed',
    number: '01000406782',
  },
  {
    id: 2,
    name: 'Wael',
    number: '01562820371',
  },
  {
    id: 3,
    name: 'Fawzy',
    number: '01836428172',
  },
];

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  filteredContacts = Contacts;
  contactToAdd: Contact | any = {
    id: 0,
    name: '',
    number: '',
  };
  contactToEdit: Contact | any = {
    id: 0,
    name: '',
    number: '',
  };
  isEdit = false;

  handleChangeMode(id: number) {
    this.isEdit = true;
    this.contactToEdit.id = id;
  }
  handleEditContact(name: Contact | any, event: any) {
    this.contactToEdit[name] = event.target.value;
  }
  handleAddContact(name: Contact | any, event: any) {
    this.contactToAdd[name] = event.target.value;
  }
  deleteContact(id: any) {
    this.filteredContacts = this.filteredContacts?.filter((contact) => {
      return contact.id !== id;
    });
    this.filteredContacts.forEach((contact: any, index) => {
      this.filteredContacts[index].id = index;
    });
  }
  handleSubmit(event: any) {
    const nextId =
      this.filteredContacts[this.filteredContacts.length - 1].id + 1;
    this.contactToAdd['id'] = nextId;
    this.filteredContacts = [...this.filteredContacts, this.contactToAdd];
  }
  handleEditSubmit(event: any) {
    this.filteredContacts.forEach((contact, index) => {
      if (contact.id == this.contactToEdit?.id) {
        this.filteredContacts[index] = this.contactToEdit;
      }
    });
    this.isEdit = false;
  }
}
