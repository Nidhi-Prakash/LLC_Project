import React from 'react';
import FormComponent from '../FormComponent/FormComponent';
import background from '../../images/BKG.jpg';
import './Home.css';

const Home = ({setIsUserHaveAccount}) => {
    return (
        <div className='d-flex justify-content-between align-items-center home__container'>
            <div className="home__left w-50">
                <img src={background} alt="background" width={500} height={500} />
                <h3 className='text-dark'>Choose a date range</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet.</p>
            </div>
            <div className="home__right w-50">
                <FormComponent setIsUserHaveAccount={setIsUserHaveAccount} />
            </div>
        </div>
    )
}

export default Home