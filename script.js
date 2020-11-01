marked.setOptions({ breaks: true });
const initialState = `# This is the react markdown
[links](freecodecamp.org)
>BlockQuotes 
## smaller heading size
### even smaller heading size
\`<h1>code denoted by backticks</h1>\`
\`\`\`
//multi line code
function random(this, that) {
  //do something with this and that
}
\`\`\`
**bold** text
- list items
  - item1
  - item2
  - item3
list2
1. item1
1. item2
1. item3
![twitter-image](https://wepushbuttons.com.au/wp-content/uploads/2012/03/twitter-logo-small.jpg)
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: initialState };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value });

  }

  render() {
    const handleMark = marked(this.state.input);
    return (
      React.createElement("div", { class: "container" },
      React.createElement("h1", { class: "title" }, "Markdown previewer in React"),
      React.createElement("div", { id: "workspace" },
      React.createElement("textarea", { id: "editor", onChange: this.handleChange, value: this.state.input }),
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: handleMark } }))));




  }}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));