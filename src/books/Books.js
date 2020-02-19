import React, {Component} from "react";
import "./Books.css";
import {BookDisplay} from "./BookDisplay";

export default class Books extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author:"Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Circe",
                    author: "Margaret Miller",
                    isbn: "978-1234567890"
                },
                {
                    id: 4,
                    title: "Andromeda Evolution",
                    author: "Michael Crichton",
                    isbn: "978-2345678901"
                },
                {
                    id: 5,
                    title: "Good as Gone",
                    author: "Amy Gentry",
                    isbn: "978-3456789012"
                },
                {
                    id: 6,
                    title: "The Girl in Red",
                    author: "Christina Henry",
                    isbn: "978-4567890123"
                },
                {
                    id: 7,
                    title: "Kindred",
                    author: "Octavia Butler",
                    isbn: "978-5678901234"
                },
                {
                    id: 8,
                    title: "My Sister, the Serial Killer",
                    author: "Oyinkan Braithwaite",
                    isbn: "978-6789012345"
                }
            ]
        };
    }
    render () {
        return(
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}


