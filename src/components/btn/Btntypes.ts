interface IBtn {
    children?: any;
    variant?:  "outlined" | "contained"|"text"| undefined;
    isloading?: boolean;
    title?: string;
    onclick?: () => void;
}
export default IBtn