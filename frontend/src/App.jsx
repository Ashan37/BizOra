import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import KPICards from './components/kpi cards/KPICards'
import Charts from './components/charts/Charts'
import LiveChart from './components/charts/LiveChart'

function App() {


  return (
    <>
    
     <Header/>
     <KPICards/>
     <Charts/>
     <LiveChart/>
    </>
  )
}

export default App
