export default function PropsComponente(props: any) {
    /*  */
    return(
        <p>Eine benutzerdefinierte Eigenschaft aus dem Objekt props: {props.zahl ? props.zahl : 'props.zahl nicht befüllt'}</p>
    )
}