export default {
    title: 'Organisms/Result'
}

const Template = (args) => `<pichincha-result primary-text="${args.primary_text}" secondary-text="${args.secondary_text}" type="${args.type}" size="${args.size}" done="${args.done}" cancel="${args.cancel}" />`;

export const OkResult = Template.bind({});
OkResult.args = {
    primary_text: "Titulo de la información",
    secondary_text: "Subtitulo de la información",
    type: "success",
    size: "big",
    done: "Continuar",
    cancel: "Regresar"
}

export const ErrorResult = Template.bind({});
ErrorResult.args = {
    primary_text: "Titulo de la información",
    secondary_text: "Subtitulo de la información",
    type: "error",
    size: "big",
    done: "Volver a intentar",
    cancel: "Cancelar"
}