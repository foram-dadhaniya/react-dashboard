import { useState } from "react"

export const Concepts: React.FC = () => {
    const [isHover, setIsHover] = useState(true);
    return(
        <div className="concepts">
            <p onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Covered concepts</p>
                { isHover &&  
                <ul className="conceptsBlock list-unstyled text-start">
                    <li>Formik</li>
                    <li>Yup Validation</li>
                </ul>
                }
        </div>
    )
}