import React from 'react'

export default function VoteResultListItem({ result,index}) {
    return (
        <div className='voteResultListItem' >
            <p>#{index + 1} {result.option}</p>
            <p>{result.points} Points</p>
        </div>
    )
}
