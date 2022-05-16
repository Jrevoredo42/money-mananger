import { GlobalStyle } from './styles/global';
import { Header } from '../src/components/Header'
import { Dashboard } from './components/Dashboard';


export function App () {
  return (
       <>
      <Header /> 
      <Dashboard/> 
    <GlobalStyle/>
  </>
  )
}