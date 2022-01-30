import React from 'react';
import { Link } from 'react-router-dom';

// functional componente bir örnek. class componenet olarak yazılıp, render fonksiyonu ile de kullanılabilir.
// o örnek de SearchBar sayfasında mevcut.

const MovieList = (props) => {

        // ekrandaki text alanının belli bir standartı olsun diye, yazıyı sınırlandırabiliriz

        const truncateString = (text) => {
            // return text.substring(0, 200) + '...'
            return `${text.substring(0, 200)} ...`
        }

        // className'e yazılanlar bootstrap'in hazır css'leri

        return (
            <div className='row'>

                {props.movies.map( (movie, i) => (

                    <div key={i} className='col-lg-4'>
                        <div className='card mb-4 shadow-sm'>
                            <img src={movie.imageURL} className='card-img-top' alt='Sample Movie' />
                            <div className='card-body'>
                                <h5 className='card-title'>{movie.name}</h5>
                                <p className='card-text'>{truncateString(movie.overview)}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button onClick={() => props.deleteMovieProp(movie)} type='button' className='btn btn-md btn-outline-danger'>Delete</button>
                                    <Link type='button'
                                    className='btn btn-md btn-outline-primary mg-l'
                                    onClick={() => props.editMovieProp(movie)}
                                    to={`edit/${movie.id}`}
                                    >
                                    Edit
                                    </Link>
                                    <h2><span className='badge bg-info text-white'>{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        )
}

export default MovieList;