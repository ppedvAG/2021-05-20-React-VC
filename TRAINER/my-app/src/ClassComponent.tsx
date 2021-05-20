import React from "react";

export default class ClassComponent extends React.Component<{testEigenschaft: string}, any> {
    render() {
        return(
            <>
            {this.props.testEigenschaft}
            </>
        );
    }
}