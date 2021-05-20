/* 
LAB 4

Teil 1
Erstellen Sie eine Komponente Rating. Diese rendert Sterne 4: '*'. ('*'.repeat(4))
Wie viele Sterne gerendert werden, ist durch eine Eigenschaft im Objekt Props definiert. 
Diese Eigenschaft wird befüllt beim Aufruf der Komponente.

Teil 2
Todos bekommen Eigenschaft Rating, wo mit einem Number definiert ist, wie wichtig dieses Todo ist.
Diese Number wird für die neu erstellte Komponente Rating genutzt.

*/

export default function Rating(propsObjekt: { starsNumber: number; }) {
    return(
        <span>{'*'.repeat(propsObjekt.starsNumber)}</span>
    )
}
