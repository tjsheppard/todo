import React from "react";

class Item extends React.Component {
    render() {

        let emoji = "👎";

        if (this.props.status) {
            emoji = "👍";
        }

        return (
            <div>
                <ul>
                    <li>
                        <p>{this.props.name} {emoji}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Item;