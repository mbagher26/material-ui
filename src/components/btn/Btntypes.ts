interface IBtn {
    children?: any;
    variant?:  "outlined" | "contained"| undefined;
    isloading?: boolean;
    title?: string;
    onclick?: () => void;
}
export default IBtn