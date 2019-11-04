import React , {useContext} from 'react';
import { BookContext } from '../contexts/booksContext';


const Booklist = () => {
    const {books} = useContext(BookContext);
    return (
        <div>
            <h4>Book List</h4>
            <ul>
                {books.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
}

export default Booklist;