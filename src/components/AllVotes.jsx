
import React, { useContext } from 'react'
import { VotingContext } from '../providers/VotingProviderComp';
import { VotingListItem } from './VotingListItem';

export default function AllVotes() {
    const { votes } = useContext(VotingContext);

    return (
        <div className='allVotesComp'>
            <h2 className='title'>All Votes</h2>
            <section>
                <div className='tableHead'>
                    <p>Date</p>
                    <p>Voter</p>
                    <p>Option</p>
                    <p>Points</p>
                </div>
                <div>
                    {votes.map((vote, i) => {
                        return <VotingListItem key={i} vote={vote} />
                    })}
                </div>
            </section>
        </div>
    )
}


