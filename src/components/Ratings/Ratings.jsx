import React, { useState } from 'react';
import '../Feedback/Feedback.css';
const Ratings = ({ select }) => {
    const [selected, setSelected] = useState(10);
    const handleChange = (e) => {
        select(+e.currentTarget.value)
        setSelected(+e.currentTarget.value)
    }
    return (
        <>
            <ul className='d-flex flex-wrap justify-content-center'>
                <li key={1}>
                    <input
                        type='radio'
                        id='num1'
                        name='rating'
                        value='1'
                        onChange={handleChange}
                        checked={selected === 1}
                    />
                    <label htmlFor='num1'>1</label>
                </li>
                <li key={2}>
                    <input
                        type='radio'
                        id='num2'
                        name='rating'
                        value='2'
                        onChange={handleChange}
                        checked={selected === 2}
                    />
                    <label htmlFor='num2'>2</label>
                </li>
                <li key={3}>
                    <input
                        type='radio'
                        id='num3'
                        name='rating'
                        value='3'
                        onChange={handleChange}
                        checked={selected === 3}
                    />
                    <label htmlFor='num3'>3</label>
                </li>
                <li key={4}>
                    <input
                        type='radio'
                        id='num4'
                        name='rating'
                        value='4'
                        onChange={handleChange}
                        checked={selected === 4}
                    />
                    <label htmlFor='num4'>4</label>
                </li>
                <li key={5}>
                    <input
                        type='radio'
                        id='num5'
                        name='rating'
                        value='5'
                        onChange={handleChange}
                        checked={selected === 5}
                    />
                    <label htmlFor='num5'>5</label>
                </li>
                <li key={6}>
                    <input
                        type='radio'
                        id='num6'
                        name='rating'
                        value='6'
                        onChange={handleChange}
                        checked={selected === 6}
                    />
                    <label htmlFor='num6'>6</label>
                </li>
                <li key={7}>
                    <input
                        type='radio'
                        id='num7'
                        name='rating'
                        value='7'
                        onChange={handleChange}
                        checked={selected === 7}
                    />
                    <label htmlFor='num7'>7</label>
                </li>
                <li key={8}>
                    <input
                        type='radio'
                        id='num8'
                        name='rating'
                        value='8'
                        onChange={handleChange}
                        checked={selected === 8}
                    />
                    <label htmlFor='num8'>8</label>
                </li>
                <li key={9}>
                    <input
                        type='radio'
                        id='num9'
                        name='rating'
                        value='9'
                        onChange={handleChange}
                        checked={selected === 9}
                    />
                    <label htmlFor='num9'>9</label>
                </li>
                <li key={10}>
                    <input
                        type='radio'
                        id='num10'
                        name='rating'
                        value='10'
                        onChange={handleChange}
                        checked={selected === 10}
                    />
                    <label htmlFor='num10'>10</label>
                </li>
            </ul>
        </>
    );
};

export default Ratings;