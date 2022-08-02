import React, { useContext, useEffect, useState } from 'react'
import { VotingContext } from '../providers/VotingProviderComp';
import { allOptions } from '../data';
import VoteResultListItem from './VoteResultListItem';

export default function LeaderBoard() {
  const { votes } = useContext(VotingContext);
  const [results, setResults] = useState([]);

  //sort the array according to points 
  function sort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].points < arr[i + 1].points) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)

    return arr
  }

  //parse the votes to collect the total points for each option 
  function parseArray(arr) {
    const resultArr = allOptions.map(i => {
      const totalPoints = arr.map(j => j.option == i ? j.points : 0).reduce((p, c) => {
        p += c
        return p
      })
      return {
        option: i,
        points: totalPoints
      }
    })
    const filteredArr = resultArr.filter(j=>j.points!=0)
    const sortedArr = sort(filteredArr)
    setResults(sortedArr)
  }

  //whenever votes get updated parse the array
  useEffect(() => {
    if (votes.length > 0) {
      parseArray(votes)
    }
  }, [votes]);

  return (
    <div className='leaderBoardComp'>
      <h2 className='title'>LeaderBoard</h2>
      <div>
        {results.map((result, i) => {
          return <VoteResultListItem key={i} result={result} index={i}/>
        })}
      </div>
    </div>
  )
}
