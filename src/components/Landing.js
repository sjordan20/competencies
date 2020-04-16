import React from 'react';
import { Link } from 'react-router-dom'

function Landing(props) {
    return (
        <div>
            <section className='section'>
                <header>
                    HTML5
                </header>
                <h1 className='semantic-tag'>
                    I Am a Semantic Tag
                </h1>
                <Link to='/profile'>
                    Routing
                        </Link>
            </section>
        </div>
    );
}

export default Landing;