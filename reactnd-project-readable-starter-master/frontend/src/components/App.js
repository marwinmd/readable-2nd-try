import React, { Component } from 'react';
import '../App.css';
import { Grid, PageHeader, Row } from "react-bootstrap"
import Categories from './Categories';

class App extends Component {
  render() {
    return (
      <div className="Grid">
        <Grid>
          <Row><PageHeader className={"text-center"}>Online Learning - Your place to start learning!
              <p className={"text-center"}>
              <small>Choose a topic you are interested in.</small>
            </p>
          </PageHeader><Row />
          </Row>
          <Categories />
        </Grid>
      </div>
    );
  }
}

export default App;
