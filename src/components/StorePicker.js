import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    nameInput = React.createRef();

    goToStore = event => {
        event.preventDefault();
        const name = this.nameInput.current.value;
        this.props.history.push(`/store/${name}`);
    };

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" ref={this.nameInput} required placeholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store →</button>
            </form>
        );
    }
}

export default StorePicker;
