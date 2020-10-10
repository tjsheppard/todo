import React from "react";
import Form from "./components/Form";
import List from "./components/List"

class App extends React.Component {
    render() {
        return (
            <div>
                <Form />
                <List />
            </div>
        )
    }
}

export default App;