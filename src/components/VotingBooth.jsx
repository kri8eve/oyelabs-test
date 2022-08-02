import React, { useState, useContext, useEffect } from 'react'

import { VotingContext } from '../providers/VotingProviderComp';
import { allOptions } from '../data'

export default function VotingBooth() {
    const [form, setform] = useState({
        name: '',
        point: '',
        option: allOptions[0]
    });
    const { votes, setVotes } = useContext(VotingContext);

    //reseting the form
    function reset() {
        setform({
            name: '',
            point: '',
            option: allOptions[0]
        })
    }

    //handling all form state changes
    function handleChange(e) {
        const { name, value } = e.target
        setform(old => ({ ...old, [name]: value }))
    }

    //submitting the form
    function submit(e) {
        e.preventDefault()
        const temp = {
            timestamp: Date.now(),
            voter: form.name,
            points: parseInt(form.point),
            option: form.option
        }
        setVotes(old => ([...old, temp]))
        reset()
    }

    return (

        <form className='votingBoothComp' onSubmit={submit}>
            <h2 className='title'>Vooting Booth</h2>
            <div className='userInputWrapper'>
                <label htmlFor='name'>Your name</label>
                <input type={'text'} required className='userInput' id='name' name='name'
                    value={form.name} onChange={handleChange} />
            </div>
            <div className='userInputWrapper'>
                <label htmlFor='point'>Points(1-100)</label>
                <input required type={'number'} min={1} max={100} className='userInput' id='point' name='point'
                    value={form.point} onChange={handleChange} />
            </div>
            <div className='userInputWrapper'>
                <label htmlFor='name'>Option</label>
                <select className='userInput' id='option' name='option' value={form.option} onChange={handleChange}>
                    {allOptions.map((opt, i) => {
                        return <option key={i}>{opt}</option>
                    })}
                </select>
            </div>
            <button type='submit' className='submitBtn'>Give points!</button>
        </form>
    )
}
