import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
    tag: 'pichincha-button',
    styleUrl: 'button.scss',
    shadow: true
})

export class Button implements ComponentInterface{
    
    @Prop() public textButton: string;
    @Prop() public type: string ;

    render(){
        return (
            <button class={`button button--${this.type}`}>
                <span>{this.textButton}</span>
            </button>
        )
    }
}