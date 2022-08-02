import React,{useState} from 'react'
import { createContext } from 'react'
import { allVotes } from '../data';

const VotingContext = createContext()

export default function VotingPorviderComp({children}) {
    const [votes, setVotes] = useState(allVotes);
  return (
    <VotingContext.Provider value={{votes, setVotes}}>
        {children}
    </VotingContext.Provider>
  )
}

export {VotingContext}