import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/sass/App.css";
import { About } from "./components/About/About";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { Work } from "./components/Work/Work";

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app entire-page">
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
