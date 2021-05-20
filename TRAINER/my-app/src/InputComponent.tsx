/* 
LAB 6
Erstellen Sie eine Komponente mit einem Inputfeld. Z.B. kann damit ein neues Todo abgefragt werden. */

import React from "react";


export default class InputComponent extends React.Component<{}, { inputValue: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: 'placeholder'
        }
    }
    handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ inputValue: e.currentTarget.value })
    }
    render() {
        console.log('this.state.inputValue :>> ', this.state.inputValue);
        return (
            <>
                <label htmlFor="">New Todo: </label>
                <input type="text" value={this.state.inputValue} onInput={this.handleInput} />
            </>
        )
    }
}