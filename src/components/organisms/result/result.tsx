import { Component, ComponentInterface, h, Prop } from "@stencil/core/internal";

@Component({
    tag: 'pichincha-result',
    styleUrl: 'result.scss',
    shadow: true
})

export class Result implements ComponentInterface {

    @Prop() public primaryText: string;
    @Prop() public secondaryText: string;
    @Prop() public type: 'success' | 'error';
    @Prop() public size: string;

    @Prop() public done: string;
    @Prop() public cancel: string;

    render() {
        return (
            <div class="result">
                <pichincha-info
                    primary-text={this.primaryText}
                    secondary-text={this.secondaryText}
                    type={this.type}
                    size={this.size}
                />
                <div class="result__buttons">
                    <pichincha-button
                        text-button={this.done}
                        type="primary"
                    />
                    <pichincha-button
                        text-button={this.cancel}
                        type="secondary"
                    />
                </div>
            </div>
        )
    }
}