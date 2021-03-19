import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addContact, getContacts, removeContact } from '../../redux/contacts/contacts.operations'
// import { deletePhone } from "../../redux/phoneBook/phone.action"
import styles from "./ContactList.module.css"


class ContactList extends PureComponent {
     

    componentDidMount() {
    this.props.getContacts()
}


    //  filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
    handleDelete = (event) => {
        const { id } = event.target.dataset;
        this.props.removeContact(id)

}
     
    render() {
        const {contacts, filter}=this.props

    return (

        <>
            {!contacts.length ? <h2 className={styles.noContacts}>There are no added contacts yet</h2> :
                <ul className={styles.list}>
                    {/* {contacts && contacts.map((contact) => (
                <li key={contact.id}>
                    <p>{contact.name}</p>
                    <p>{contact.phone}</p>
                </li>
            ))} */}
                    {contacts.map((contact) => (
                        <li key={contact.id} data-id={contact.id} className={styles.item}>
                            <p className={styles.text}>{contact.name}</p>
                            <p className={styles.text}>{contact.phone}</p>
                            <button type="button" onClick={this.handleDelete} className={styles.deleteBtn}>Delete</button>
                        </li>
                    ))}
                </ul>
            }
        </>

    )
}}

const mapStateToProps = (state) => ({
    contacts: state.contacts.items,
    filter: state.contacts.filter
})

const mapDispatchToProps = {
    addContact,
    getContacts,
    removeContact
    
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
