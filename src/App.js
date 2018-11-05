import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducer'

const Statistiikka = () => {

  const hyvat = () => {
    const nimittaja = store.getState().good+store.getState().ok+store.getState().bad
    if (nimittaja===0) return '-'
    return (100*store.getState().good/nimittaja).toFixed(1) + '%'
  }
  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState().good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState().ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState().bad}</td>
          </tr>
          <tr>
            <td>hyviä</td>
            <td>{hyvat()}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={e => store.dispatch({ type: 'ZERO' })}>nollaa tilasto</button>
    </div >
  ) 
}

const store = createStore(counterReducer)

class App extends React.Component {
  klik = (nappi) => () => {
    const action = {type: nappi}
    console.log('Action:', action)
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)

export default App