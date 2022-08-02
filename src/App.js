

import './App.css';
import Navbar from './components/Navbar';
import VotingBooth from './components/VotingBooth';
import LeaderBoard from './components/LeaderBoard';
import AllVotes from './components/AllVotes';
import VotingProviderComp from './providers/VotingProviderComp';


function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <VotingProviderComp>
          <div className='votingLayout_div1' >
            <div className='votingBoothWrapper'>
              <VotingBooth />
            </div>
            <div  className='leaderBoardWrapper'>
              <LeaderBoard />
            </div>
          </div>

          <div className='allVotesWrapper'>
            <AllVotes />
          </div>
        </VotingProviderComp>
      </main>
    </div>
  );
}

export default App;
