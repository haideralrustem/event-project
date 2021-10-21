
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Card from './components/Card';
import EventsListing from './pages/EventsListing';
import About from './pages/About';
import EventDetail from './pages/EventDetail';
import Home from './pages/Home';

function App() {

  const name = 'Haider'
  const x = true

  const doSomething = (e)=>{
    console.log('clicked: ', e)
  }

  const recievedData = [{'eventTitle': 'Event Title 1', 'eventContent': 'Event content 1'},
                        {'eventTitle': 'Event Title 2', 'eventContent': 'Event content 2'},
                        {'eventTitle': 'Event Title 3', 'eventContent': 'Event content 3'},
                        {'eventTitle': 'Event Title 4', 'eventContent': 'Event content 4'},
                        {'eventTitle': 'Event Title 5', 'eventContent': 'Event content 5'},
                        {'eventTitle': 'Event Title 6', 'eventContent': 'Event content 6'},
                        {'eventTitle': 'Event Title 7', 'eventContent': 'Event content 7'},
                      ];

  return (
    <div className="main-container">
      <Router>

      <Navbar>
      </Navbar>
      

      <div className='content-body-wrap'>
                  
            <Switch>

            <Route path="/"  exact
                    render={( {match} ) => 
                   
                    <Home m={JSON.stringify(match)}
                    ></Home> }
              >
              </Route>

              <Route path="/events_listing" exact>
                <EventsListing recievedData={recievedData} ></EventsListing>
              </Route>

              <Route path="/event_detail/:id" 
                    render={( {match} ) => 
                   
                    <EventDetail m={JSON.stringify(match)}
                                 urlEventId={match.params.id}
                    ></EventDetail> }
              >
                
              </Route>

              <Route path="/about" exact>
                <About></About>
              </Route>
            </Switch>
            
          
                
      </div>

      </Router>
    </div>
  );
}

export default App;
