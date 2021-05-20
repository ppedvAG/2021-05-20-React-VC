export default function Destructuring() {
    let myArray = [1, 2, 3];
    let [a, b, c] = myArray;

    return (
        <>
        <h3>Destructuring</h3>
        <pre>Variablen, angelegt durch Destrukturierung</pre>
        <p>{a}</p>
        <p>{b}</p>
        <p>{c}</p>
        </>
    )
}