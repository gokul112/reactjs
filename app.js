
const root = ReactDOM.createRoot(document.getElementById('root'))
const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"head"},"hello i am h1"),
React.createElement("h2",{id:"head2"},"hello i am h2")
]),React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"head"},"hello i am h1"),
React.createElement("h2",{id:"head2"},"hello i am h2")
])])

root.render(parent)

const heading = React.createElement("h1",{id:"heading"},"Hello world from react")

console.log(heading,"heading")
// root.render(heading)