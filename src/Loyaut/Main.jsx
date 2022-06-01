import React from "react";
import Movie from "../Components/Movie";

export default class Main extends React.Component {
    state = {
        movies: [],
        search: "batman",
        type: ""
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a99675a8&s=batman`)
            .then((response) => response.json())
            .then(data => { this.setState({ movies: data.Search }) })
    }

    SearchInp = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    SearchFunc = () => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a99675a8&s=${this.state.search}&type=${this.state.type}`)
            .then((response) => response.json())
            .then(data => { this.setState({ movies: data.Search }) })
    }

    handleFilter = (e) => {
        this.setState({
            type: e.target.dataset.type
        })
    }

    render() {
        const { search } = this.state
        return (
            <>

                <div className="serarchBar">
                    <input className="searchInput"
                        type="search"
                        name="search"
                        value={search}
                        placeholder="Seach movies..."
                        onChange={this.SearchInp} />

                    <button onClick={this.SearchFunc}>Search</button>
                </div>

                <div className="checks">
                    <label>Only Movies </label>
                    <input type="radio" name="type" onChange={this.handleFilter} data-type="movie" />
                    <label>Only Series </label>
                    <input type="radio" name="type" onChange={this.handleFilter} data-type="series" />
                </div>

                <Movie movies={this.state.movies} />




            </>
        )
    }
}