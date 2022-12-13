import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
    tag: 'pichincha-button',
    styleUrl: 'pichincha-button.scss',
    shadow: true
})

export class PichinchaButton implements ComponentInterface{
    
    @Prop() public textButton: string;
    @Prop() public type: string ;

    render(){
        return (
            <button class={`button button__${this.type}`}>
                <span>{this.textButton}</span>
            </button>
        )
    }
}