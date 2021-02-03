import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    fetch('Your_API_KEY')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        //console.log(myJson);
        this.setState({ articles: myJson.articles });
      });
  }

  render() {
    console.log(this.state); //to check intial state
    return (
      <div className="App">
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <h2 style={{ textAlign: 'left' }} >{item.title}</h2>
              <b style={{ textAlign: 'right' }}>{item.author}</b>
              <img src={item.urlToImage} style={{ width: '50vw' }} alt={''} />
              <p>{item.content}</p>
              <a href={item.url}>Read More</a>

            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
