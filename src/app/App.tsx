import * as React from "react";
import { hot } from "react-hot-loader";
import "./../assets/sass/App.css";
import { About } from "./components/About/about";
import { Footer } from "./components/Footer/footer";
import { Header } from "./components/Header/header";
import { Title } from "./components/Title/title";
import { Work } from "./components/Work/work";

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
