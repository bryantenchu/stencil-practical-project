export default {
    title: 'Atoms/Button',
};

const Template = (args) => `<pichincha-button type="${args.type}" text-button="${args.text}" />`;

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    text: 'OK Button'
}

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
    text: 'Cancel Button'
}