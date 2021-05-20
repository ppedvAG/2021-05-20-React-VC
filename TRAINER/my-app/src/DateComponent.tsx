/* 
LAB 2
legen Sie eine Komponente DateComponent an. Diese gibt das aktuelle Datum aus.
Benutzen Sie diese Komponente innerhabl von der App-Komponente. */

import React from "react";

function DateComponent() {
    let myDate = new Date()
    console.log('typeof myDate :>> ', typeof myDate);
    return (
        <span>aktuelles Datum: {myDate.toLocaleDateString()}</span>
    )
}

export default DateComponent;


/* 
LAB 5

Ausgegeben wird nicht nur Datum sondern auch Uhrzeit und zwar jede Sekunde neu. Sprich eine digitale Uhr.

Wie muss die Komponente DateComponent umgebaut werden, damit alles React-conform abläuft?

*/

// Variante 1, mit Fehler: Can't call setState on a component that is not yet mounted. 
// export class DateComponentClass extends React.Component {
//     uhrzeit: string | undefined;
//     constructor(props: any) {
//         super(props);
//         setInterval(() => {
//             this.uhrzeit = new Date().toLocaleTimeString();
//             console.log('this.uhrzeit :>> ', this.uhrzeit);
//             this.setState({});
//         }, 1000)
//     }
//     render() {
//         return (
//             <>
//                 <span>aktuelle Uhrzeit: {this.uhrzeit}</span>
//             </>
//         )
//     }
// }
export class DateComponentClass extends React.Component<{}, { uhrzeit: string }> {

    constructor(props: any) {
        super(props);
        this.state = {
            uhrzeit: new Date().toLocaleTimeString()
        }
    }
    tick = () => {
        setInterval(() => {
            this.setState({ uhrzeit: new Date().toLocaleTimeString() });
            console.log('this.state.uhrzeit :>> ', this.state.uhrzeit);
        }, 1000)
    }
    componentDidMount() {
        this.tick();
    }
    render() {
        return (
                <span>aktuelle Uhrzeit: {this.state.uhrzeit}</span>
        )
    }
}
