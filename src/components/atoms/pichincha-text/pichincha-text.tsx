import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
    tag: 'pichincha-text',
    styleUrl: 'pichincha-text.scss',
    shadow: true
})

export class PichinchaText implements ComponentInterface{

    @Prop() public text: string;
    @Prop() public type?: string;

    render() {
        let mainClass = "text ";
        if(this.type) mainClass += " text__"+this.type;
        return (
            <div class={mainClass}>{this.text}</div>
        )
    }
}