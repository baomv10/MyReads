import { update } from '../../BooksAPI';

const Books = ({ books, reloadData }) => {

    const onBookShelfChange = async (event, book) => {
        try {
            const shelf = event.target.value;
            await update(book, shelf);
            reloadData?.();
        } catch (err) { }
    }
    return (
        <ol className="books-grid">
            {books?.map(book => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div
                                className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage:
                                        `url(${book.imageLinks?.thumbnail})`,
                                }}
                            ></div>
                            <div className="book-shelf-changer">
                                <select onChange={(event) => onBookShelfChange(event, book)} defaultValue={book.shelf || 'none'}>
                                    <option value="none" disabled>
                                        Move to...
                                    </option>
                                    <option value="currentlyReading">
                                        Currently Reading
                                    </option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read" >Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors?.map((author, index) => (<p key={index}>{author}</p>))}</div>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default Books