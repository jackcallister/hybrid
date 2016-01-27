var React = require('react');

var NewsItem = React.createClass({

  render: function() {
    return (
      <li><a href={this.props.url}>{this.props.title}</a></li>
    )
  }
})

var App = React.createClass({

  renderNewsItems: function() {
    var newsItems = this.props.payload.hits

    return newsItems.map(function(item) {
      return <NewsItem url={item.url} title={item.title} />
    })
  },

  render: function() {
    var newsItems = this.renderNewsItems()

    return (
      <section className="app">
        <ul>
          {newsItems}
        </ul>
      </section>
    )
  }
})

module.exports = App;
