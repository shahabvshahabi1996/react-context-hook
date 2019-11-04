import React , {useContext , useState} from 'react';
import { BookContext } from '../contexts/booksContext';


const AddBook = () => {

    const [title , setTitle] = useState('');
    const {addBook} = useContext(BookContext);

    const submitBook = e => {
        e.preventDefault();
        addBook(title);
        return setTitle('')
    }

    const onChangeHandler = e => {
        return setTitle(e.target.value);
    }

    return (
        <form onSubmit={submitBook}>
            <div><label>Book title</label></div>
            <input value={title} onChange={onChangeHandler} placeholder="Enter a book name"  />
            <br/>
            <input type="submit" value="Add Book" />
        </form>
    )
}

export default AddBook;