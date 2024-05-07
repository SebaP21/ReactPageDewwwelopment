import { FC } from "react";

type StepsTitleProps = {
    title:string
}

export const StepsTitle: FC<StepsTitleProps> = ({title}) =>{
    return(
        <h3>{title}</h3>
    )
}