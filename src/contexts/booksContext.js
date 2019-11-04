import React , {useState , createContext} from 'react';

export const BookContext = createContext();

const BookListProvider = (props) => {

    const [books , setBook] = useState([{
        title : 'book 1',
        id : 1
    } , {
        title : 'book 2',
        id : 2
    } , {
        title : 'book 3',
        id : 3
    }])

    const addBook = (title) => {
        return setBook([...books , {title , id : books.length + 1}]);
    }

    return (
        <BookContext.Provider value={{books , addBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookListProvider;