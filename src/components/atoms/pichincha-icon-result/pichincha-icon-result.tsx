import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { CHECK_IMG, ERROR_IMG } from "../../../utils/constants/global";

@Component({
    tag: 'pichincha-icon-result',
    styleUrl: 'pichincha-icon-result.scss',
    shadow: true
})

export class IconResult implements ComponentInterface{

    @Prop() public type: 'success' | 'error' = 'success';
    @Prop() public size: string;

    render() {
        let mainClass = "icon-result";
        if(this.size) mainClass += '--' + this.size;
        return (
            <img src={this.type == 'success' ? CHECK_IMG : ERROR_IMG} 
            class={mainClass}
            />
        )
    }
}