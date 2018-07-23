import React from 'react';

// Provider to avoid prop drilling
export const MasterShiftContext = React.createContext();

export class MasterShiftProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closed: true
        }
    }

    componentWillMount(props) {
        // console.log(this.props);
        this.setState({
            ...this.props.value
        });
    }

    render() {
        return (
            <MasterShiftContext.Provider value={this.props.value}>
                {this.props.children}
            </MasterShiftContext.Provider>
        )
    }
}
