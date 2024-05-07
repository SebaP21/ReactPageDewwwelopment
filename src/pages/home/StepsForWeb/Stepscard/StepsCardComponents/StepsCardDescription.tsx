import { FC } from "react";

type StepsDescriptionProps = {
    description:string
}

export const StepsDescription: FC<StepsDescriptionProps>=({description}) =>{
    return(
        <p className="step-description">
            {description}
          </p>
    )
}