import React from "react";
import "../style/ConnectWallet.css";
import { Outlet } from "react-router";

const LandingPageLayout = () => {
  return (
    <section className="p-4 p-md-5">
      <header className="text-uppercase">logo</header>
      <main className="main-wallet mt-4 p-2 p-md-5">
        <article className="text-center art-wallet">
          <h3>Sociogram</h3>
          <p>Everything is about empowering communities to serve you </p>
        </article>
       <Outlet />
      </main>
    </section>
  );
};

export default LandingPageLayout;
