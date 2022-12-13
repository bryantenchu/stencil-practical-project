import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
    tag: 'pichincha-info',
    styleUrl: 'pichincha-info.scss',
    shadow: true
})

export class PichinchaInfo implements ComponentInterface{

    @Prop() public primaryText: string;
    @Prop() public secondaryText: string;
    @Prop() public type: 'success' | 'error';
    @Prop() public size: string;

    render() {
        return (
            <div class="info">
                <pichincha-icon-result type={this.type} size={this.size}></pichincha-icon-result>
                <pichincha-text type="title" text={this.primaryText}></pichincha-text>
                <pichincha-text type="subtitle" text={this.secondaryText}></pichincha-text>
            </div>
        )
    }
}