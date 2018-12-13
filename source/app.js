var React = require('react')
var ReactDOM = require('react-dom')

var content = React.createElement('p', {className: 'contet', key: 'content'}, 'Content')
var title = React.createElement('h1', {className: 'title', key: 'title'}, 'Title')
var fragment = [title, content]
var section = React.createElement('section', {className: 'section'}, fragment)

ReactDOM.render(section, document.getElementById('react-application'))
