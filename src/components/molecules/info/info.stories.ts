export default {
    title: 'Molecules/Info'
}

const Template = (args) => `<pichincha-info primary-text="${args.primary_text}" secondary-text="${args.secondary_text}" type="${args.type}" size="${args.size}" />`;

export const InfoSuccess = Template.bind({});
InfoSuccess.args = {
    primary_text: "Titulo de la información",
    secondary_text: "Subtitulo de la información",
    type: "success",
    size: "big"
}

export const InfoError = Template.bind({});
InfoError.args = {
    primary_text: "Titulo de la información",
    secondary_text: "Subtitulo de la información",
    type: "error",
    size: "big"
}