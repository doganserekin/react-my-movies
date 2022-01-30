// import './App.css';
import React from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditMovie from './components/EditMovie';

class App extends React.Component {

  constructor(props) {
    super(props);

   
    this.state = {
      movies: [
        {
          "name": "The Matrix 3",
          "rating": "8.1",
          "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
          "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
          "id": 1
        },
        {
          "name": "The Matrix Reloaded",
          "rating": "6.9",
          "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
          "overview": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion.",
          "id": 2
        },
        {
          "name": "Saw 3D",
          "rating": "7.5",
          "overview": "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
          "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
          "id": 3
        },
        {
          "id": 4,
          "name": "Rogue",
          "rating": 7.4,
          "overview": "This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content.",
          "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
        },
  
        {
          "id": 5,
          "name": "Project Power",
          "rating": 6.7,
          "overview": "This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content.",
          "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
        },
  
        {
          "id": 6,
          "name": "Superman",
          "rating": 7.6,
          "overview": "This is a wider card with supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content.",
          "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
        }
      ],
      searchQuery: '',
      editMovie: ''
    };
   }

  componentDidMount() {
    // movies datası fetch veya exios kütüphanesi ile bir api aracılığıyla json olarak da çekilebilir fakat şimdilik elle yazdım
    // eğer datadaki id'ler düzensizse veya çakışıyor ise şu şekilde her item ı gezerek id'sini güncelleyebiliriz

    // let count = 0;
    // let newData = this.state.movies.map(v => {
    //   count = count + 1;
    //   return {
    //     ...v,
    //     id: count,
    //   }
    // })
    // this.state.movies = newData;
  }

  // bu fonksiyon props yardımıyla tetikleniyor ve props ile içerisinde silinen itemi gönderiyoruz
  deleteMovie = (movie) => {

    // gelen item ile listemizdeki eşleşmez ise, eşleşmeyenlerle yeni liste oluşturuyoruz. Yani silinen hariç hepsi. 
    // filter ile belli bir koşula göre süzebiliyoruz.
    const newMovieList = this.state.movies.filter(m =>
      m.id !== movie.id
    );

    // önceden sabit bir data yok ise mantıklı ancak 
    // this.setState({ movies: newMovieList })

    // data var ve sürekli değişiyor ise, set etmeden önce son state durumunu alıp değiştirmek daha mantıklı
    this.setState(state => ({ movies: newMovieList }))
  }

  // searchbar componentindeki elementte değişiklik olduğunda props ile bir event alıyoruz
  searchBar = (event) => {
    // search alanına yazılan değeri anlık olarak tutuyoruz
    this.setState({searchQuery: event.target.value})
  }

  // gelen movie'yi movies array'inin başın atıyoruz. üç nokta kullanımı, başına yazılan değişkeni sıralar.
  // yeni bir array içerisinde, ilk değeri yazdıktan sonra, eski array elemanlarını sonunda bu şekilde dönersek, yeni item başa gelir.
  addMovie = (movie) => {
    this.setState({movies: [movie, ...this.state.movies]})
  }

  // props ile aldığımız id ve yeni datalara göre, asıl datamızda ilgili item ı bulup güncelliyoruz ve set ediyoruz.
  editMovie = (id, movie) => {
    let data = this.state.movies.map(v=>{
      if(v.id === id){
        return{
          id: id,
          name: movie.name,
          rating: movie.rating,
          overview: movie.overview,
          imageURL: movie.imageURL
        }
      } else {
        return{
          ...v,
        }
      }
    })

    console.log(data)
    this.setState({movies: data})
  }

  // düzenlenmek üzere seçilen item'ı dönüyor.
  getMovieForEdit = (movie) => {
    this.setState({editMovie: movie})
  }

  render() {

    // indexOf, bir dizi içerinde bir şeyin geçip geçmediğini kontrol eder. Yoksa -1 döner. -1 dönmeyenleri, yani geçenleri tutuyoruz.
    let filteredMovies = this.state.movies.filter(
      (movie) => {
          return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
  )

    return (
      // classname içine yazılanlar, bootstrap css'leri.

      <Router>
        <div className="container" style={{paddingTop: 20}}>
          <Switch>
          
            <Route path = "/" exact>
              <React.Fragment>
                <div className='row'>
                  <div className='col-lg-12'>
                    <SearchBar searchBarProp={this.searchBar}/>
                  </div>
                  
                </div>

                <MovieList
                  movies={filteredMovies}
                  deleteMovieProp={this.deleteMovie}
                  editMovieProp={this.getMovieForEdit}
                />
              </React.Fragment>
            </Route>

            <Route path="/add" render={({ history }) => (

              <AddMovie

                  onAddMovie={(movie) => {
                      this.addMovie(movie)
                      history.push("/")
                  }
                  }

              />

            )}>

            </Route>

            <Route path="/edit/:id" render={({ history }) => (

              <EditMovie

                  onEditMovie={(id, movie) => {
                      this.editMovie(id, movie)
                      history.push("/")
                  }}
                  movie={this.state.editMovie}

              />

              )}>

            </Route>

          </Switch>
        </div>

      </Router>
    );
  }

}

export default App;
