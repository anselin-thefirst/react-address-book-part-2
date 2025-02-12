import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ContactContext} from '../App';

function ContactDetails() {
    const {id} = useParams();
    const {contacts} = useContext(ContactContext);
    const [contact, setContact] = useState({});

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find((contact) => 
                Number(contact.id) === Number(id) // with curly brackets above and below, need to return this line
            )
            setContact(matchingContact)
        }
    }, [contacts, id])

    if (!contact) return <div>Loading...</div>

    return (
        <div>
            <h1>Contact Details</h1>
            <p>First Name: {contact.firstName}</p>
            <p>Last Name: {contact.lastName}</p>
            <p>Street: {contact.street}</p>
            <p>City: {contact.city}</p>
        </div>
    );
}

export default ContactDetails;