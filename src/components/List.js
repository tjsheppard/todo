import React from "react";
import Item from "./Item"

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    async componentDidMount() {
        let items = await fetch(process.env.REACT_APP_URL).then(response => response.json());
        this.setState({
            items: items
        })
    }

    render() {

        let dog = this.state.items.map(item => <Item key={item._id}name={item.name} status={item.status}/>)

        return (
            <div>
                {dog}
            </div>
        )
    }
}

export default List;