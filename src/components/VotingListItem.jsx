import React from 'react'

export function VotingListItem({ vote }) {

    //parsing the timestamp to get the date and time
    function parseDateAndTime(timestamp) {
        var date = new Date(timestamp)
        const day = date.getDate()<10?'0'+date.getDate():date.getDate()
        const month = date.getMonth()<10?'0'+date.getMonth():date.getMonth()
        const hours =  date.getHours()<10?'0'+date.getHours():date.getHours()
        const mins =  date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()
        const secs =  date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds()
        const parsedDate = day+'/'+month+'/'+date.getFullYear()
        const parsedTime = hours+':'+mins+':'+secs

        return parsedDate+' '+parsedTime
    }

    return <div className='votingListItem' >
        <p>{parseDateAndTime(vote.timestamp)}</p>
        <p>{vote.voter!=''?vote.voter:'anonymous'}</p>
        <p>{vote.option}</p>
        <p>{vote.points}</p>
    </div>
}