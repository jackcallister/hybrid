var React = require('react'),
    App = require('./components/app.js.jsx');

document.addEventListener('DOMContentLoaded', function() {
  var appElement = document.getElementById('app');
  var payload = JSON.parse(appElement.getAttribute('data-payload'));

  React.render(<App payload={payload} />, appElement);
});
