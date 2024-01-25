import React, {useState} from 'react';
import {Film, FilmMutation} from "../types";

interface AddFilmProps {
    onSubmit: (film:Film) => void
}

const AddFilm:React.FC<AddFilmProps> = React.memo(({onSubmit}) => {
    const [film, setFilm] =useState<FilmMutation>({
        name: ''
    });

    const onFormSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            ...film,
            id:Math.random(),
        })
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFilm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="container mt-3">
            <form className="input-group mb-3" onSubmit={onFormSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Film name"
                    required
                    name="name"
                    id="name"
                    value={film.name}
                    onChange={onChange}
                />
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
});

export default AddFilm;