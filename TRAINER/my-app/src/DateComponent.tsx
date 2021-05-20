/* 
LAB 2
legen Sie eine Komponente DateComponent an. Diese gibt das aktuelle Datum aus.
Benutzen Sie diese Komponente innerhabl von der App-Komponente. */

function DateComponent() {
    let myDate = new Date()
    console.log('typeof myDate :>> ', typeof myDate);
    return(
        <span>aktuelles Datum: {myDate.toLocaleDateString()}</span>
    )
}

export default DateComponent;
