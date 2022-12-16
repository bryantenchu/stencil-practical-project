export default {
    title: 'Atoms/Icon Result'
}

const Template = (args) => `<pichincha-icon-result type="${args.type}" size="${args.size}" />`;

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    size: 'big'
}

export const Error = Template.bind({});
Error.args = {
    type: 'error',
    size: 'big'
}