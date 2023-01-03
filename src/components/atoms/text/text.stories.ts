export default {
    title: 'Atoms/Text'
}

const Template = (args) => `<pichincha-text text="${args.text}" type="${args.type}" />`;

export const Normal = Template.bind({});
Normal.args = {
    text: 'Texto Normal'
}

export const Title = Template.bind({});
Title.args = {
    text: 'Texto Titulo',
    type: 'title'
}

export const Subtitle = Template.bind({});
Subtitle.args = {
    text: 'Texto Subtitulo',
    type: 'subtitle'
}