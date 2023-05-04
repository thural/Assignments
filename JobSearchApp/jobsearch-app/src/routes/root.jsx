import { Outlet, Link, useLoaderData} from "react-router-dom";
import Button from '@mui/material/Button';
import { getContacts, createContact } from "../contacts";
import {Main} from '../components/Main/Main';
import { Description } from "../components/Description/Description";
import { Provider } from "react-redux";
import store from "../redux/store";

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export async function action() {
    const contact = await createContact();
    return { contact };
}


export default function Root() {
    const { contacts } = useLoaderData();
    return (
        <Provider store={store}>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                    <Button variant="contained" style={{width : "55%"}}>Elanar</Button> <br /> <br />
                    <Button variant="contained" style={{width : "55%"}}>Kategoriyalar</Button> <br /> <br />
                    <Button variant="contained" style={{width : "55%"}}>Sənaye</Button> <br /> <br />
                    <Button variant="contained" style={{width : "55%"}}>Şirkət</Button>
                </nav>
            </div>
            <div id="detail" style={{paddingInline : 0}}>
                {/* <Outlet /> */}
                    <div style={{display : 'flex', justifyContent : "space-between"}}>
                    <Main/>
                    <Description/>
                    </div>
            </div>
        </Provider>
    );
}