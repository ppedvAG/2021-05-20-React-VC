import React from "react";

export default function ElementChildren() {
    const myDiv = (
        <div>
            text in div
            <p>paragraph 1</p>
            <p>paragraph 2</p>
        </div>
    )
    console.log('myDiv.props.children :>> ', myDiv.props.children);
    return (
        <div>
            <pre>myDiv</pre>
            {myDiv}
            <pre>myDiv.props.children</pre>
            {myDiv.props.children}
        </div>
    )

}

export function ReactChildrenComponent(props: any) {
    const childrenArray = React.Children.toArray(props.children)
    console.log('childrenArray :>> ', childrenArray);
    return (
        <>
        liste aus React.Children
        <ul>

            {React.Children.map(props.children, function(child, index) {
                return (<li>{child.type}, {index}</li>)
                
            })}
        </ul>
        {React.Children.count(props.children)}
        </>
    )
}