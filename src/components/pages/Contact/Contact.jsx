

import ContactForm from '../../ContactForm/ContactForm';
const Contact = (props) => {

    return (
        <div>
            <h1 style={{ fontSize: "70px" }}>Contact Page</h1>
            {/* <ContactForm /> */}
            {/* <ContactProvider>
                <ContactFormWithContext />
            </ContactProvider> */}

            <ContactForm />
        </div>
    )
}
export default Contact;