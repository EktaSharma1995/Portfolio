import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/scss/App.sass";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Title from "./Title/Title";
import Work from "./Work/Work";

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app">
        <Header />
        <Title />
        <About />
        <Work />
        <Footer />
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
