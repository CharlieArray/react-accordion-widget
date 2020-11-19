import React from 'react'
import './App.css';
import HelloWorld from './state-drills/Helloworld'
import { MyName } from './Components/FunctionalComp'
import Bomb from './state-drills/Bomb.js'
import RouletteGun from './state-drills/RouletteGun'
import { BankLogInComponent, InvestmentComponent } from './Components/BankComponent';
import CounterPractice from './state-drills/Counter';
import {EventHandlerClass, EventHandlerFunctional} from './Components/EventHandler';
import Greeting from './Components/Greeting'
import Tabs from './state/Tabs'
import Accordion from './state-drills/Accordion';

const sections = [
  {title: 'sections 1',
   content: 'Lorem ipsum dolor sit amet consectetur'},
   {title: 'sections 2',
   content: 'Cupiditate tenetur aliquam necessitatibus'},
   {title: 'sections 3',
   content: 'Animi amet cumque sint cupiditate officia'}
  ]


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            {<Greeting name="Charlie" heroName="Neo"/>}
            {/*<Tabs tabs={tabsProp}/> */} 
            <h1>Accordion</h1>
            <Accordion sections={sections}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
