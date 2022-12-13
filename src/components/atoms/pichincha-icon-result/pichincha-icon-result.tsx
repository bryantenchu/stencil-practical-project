import { Component, ComponentInterface, h, Prop } from "@stencil/core";

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
            <img src={this.type == 'success' ? 'https://www.pngkey.com/png/detail/432-4327705_ico-sostenibilidad-reciclaje-icono-visto-bueno-png.png' : 'http://www.setra.com/hubfs/Sajni/crc_error.jpg'} 
            class={mainClass}
            />
        )
    }
}