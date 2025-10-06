import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import KPICards from './components/kpi cards/KPICards'
import Charts from './components/charts/Charts'
import LiveChart from './components/charts/LiveChart'
import AllInsights from './components/allinsightpanel/AllInsights'

function App() {


  return (
    <>
    
     <Header/>
     <KPICards/>
     <Charts/>
     <LiveChart/>
     <AllInsights/>
    </>
  )
}

export default App
