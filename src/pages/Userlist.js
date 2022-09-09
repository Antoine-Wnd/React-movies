import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

const Userlist = () => {

    const [listData, setListData] = useState([])

    useEffect(() => {


        let moviesId = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : []


        for (let i = 0; i < moviesId.length; i++) {

            axios
                .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=db9e8352e75b21c295069eea386874e6&language=en-US&external_source=imdb_id`)
                .then((res) => setListData((listData) => [...listData, res.data]))

        }

    }, [])

    return (
        <div className='user-list-page'>

            <Header />

            <h2>Coup de coeur<span>❤️</span></h2>
            <div className='result'>
                {listData.length > 0 ?
                    listData.map((movie) => <Card movie={movie} key={movie.id} />)
                    : <h2>Aucun coup de coeurs </h2>}

            </div>
        </div>


    );
};

export default Userlist;