import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from './../../BooksAPI';
import Books from '../../components/books';

const WANT_TO_READ = 'wantToRead';
const CURRENTLY_READING = 'currentlyReading';
const READ = 'read';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [read, setRead] = useState([]);

    useEffect(() => {
        getAllBook();
    }, [])

    useEffect(() => {
        const lstWantToRead = books.filter(x => x.shelf === WANT_TO_READ);
        const lstCurrentlyReading = books.filter(x => x.shelf === CURRENTLY_READING);
        const lstRead = books.filter(x => x.shelf === READ);
        setWantToRead(lstWantToRead);
        setCurrentlyReading(lstCurrentlyReading);
        setRead(lstRead);
    }, [books])

    const getAllBook = async () => {
        try {
            const data = await getAll();
            setBooks(data);
        } catch (err) { }
    }

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <Books books={currentlyReading} reloadData={getAllBook} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <Books books={wantToRead} reloadData={getAllBook} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <Books books={read} reloadData={getAllBook} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">
                    Add a book
                </Link>
            </div>
        </div>
    )
}

export default Home;