import React from "react";
import Header from "../components/header/Header";
import KPICards from "../components/kpi cards/KPICards";
import Charts from "../components/charts/Charts";
import AllInsights from "../components/allinsightpanel/AllInsights";
import RecentActivity from "../components/activity section/RecentActivity";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <KPICards />
      <Charts />
      <AllInsights />
      <RecentActivity />
      <Footer />
    </div>
  );
};

export default Home;
