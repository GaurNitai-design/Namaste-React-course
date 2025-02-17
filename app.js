
const parent = React.createElement("div",{id:"Parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm an h1 tag.... buddy"),React.createElement("h2",{},"I'm an h2 tag.... buddy")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I'm an h1 tag.... buddy"),React.createElement("h2",{},"I'm an h2 tag.... buddy")])])


const heading = React.createElement("h1",{},"Hello world from react");
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);