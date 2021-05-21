import React from "react";
import { DateComponentFunctionArrow } from "./DateComponent";

/* in den spitzen Klammern werden Datentypen für Props- und State-Objekte definiert.
<propsDatenTyp, stateDatenTyp>
 */
class ComponentInState extends React.Component<{}, any> {
    /* Datentyp von props muss dem Datentyp in den spitzen Klammern entsprechen */
    constructor(props: {}) {
        super(props);
        this.state = {
            uhr: DateComponentFunctionArrow
            /* uhr : <></> */
        }
    }
    handleClick = () => {
        /* DateComponentFunctionArrow wurde durch eine anonyme Komponente ersetzt, die nichts rendert */
        this.setState({uhr: () => {
            return(
                <></>
            )
        }})
    }
    render() {
        return (
            <>
                <this.state.uhr />
                <button onClick={this.handleClick}>hide clock</button>
            </>
        )
    }
}
export default ComponentInState;