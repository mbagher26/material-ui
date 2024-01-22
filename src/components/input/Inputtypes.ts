interface IInput extends React.ImgHTMLAttributes<HTMLInputElement>{
    label?: string,
    error?: string,
    icon?: React.ReactNode,
}
export default IInput