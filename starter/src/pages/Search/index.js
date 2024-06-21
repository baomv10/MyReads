import { useState } from "react";
import { Link } from "react-router-dom";
import { search } from './../../BooksAPI';
import Books from '../../components/books';

const Search = () => {
    const [bookSearch, setBookSearch] = useState([]);

    const searchBook = async (event) => {
        const keyword = event.target.value.trim();
        if (!keyword) {
            setBookSearch([]);
            return;
        }
        try {
            const result = await search(keyword, 20);
            if (Array.isArray(result)) {
                setBookSearch(result);
            } else {
                setBookSearch([]);
            }
        } catch (err) { }
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(event) => searchBook(event)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <Books books={bookSearch}/>
            </div>
        </div>
    )
}

export default Search