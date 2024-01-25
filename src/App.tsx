import './App.css'
import {Film} from "./types";
import {useState} from "react";
import AddFilm from "./components/AddFilm";

function App() {
    const [films, setFilms] = useState<Film[]>([]);

    const FilmAdded = (films:Film) => {
        setFilms(prevState => [...prevState, films]);
    }

    const remove = (id:number) => {
        const onRemove = films.filter(remove => remove.id !== id);
        setFilms(onRemove)
    }

    let num = 1

  return (
    <>
        <div>
            <AddFilm onSubmit={FilmAdded}/>
        </div>
        <div>
            {films.map(films => (
                <div key={films.id} className="container mt-3 d-flex align-content-center justify-content-around border">
                    <div suppressContentEditableWarning={true} contentEditable={true}>{films.name}</div>
                    <p>#{num++}</p>
                    <button className="btn btn-danger" onClick={() => remove(films.id)}>X</button>
                </div>
            ))}
        </div>
    </>
  )
}

export default App
