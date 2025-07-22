import { useState } from "react"

export const Concepts: React.FC = () => {
    const [isHover, setIsHover] = useState(false);
    return(
        <div className="concepts">
            <p onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Covered concepts</p>
                { isHover &&  
                <ul className="conceptsBlock list-unstyled text-start">
                    <li>Formik</li>
                    <li>Yup Validation</li>
                    <li>useNavigate</li>
                    <li>Typescript</li>
                    <li>useState, useEffect, useContext,<br></br> useReducer, useDispatch</li>
                    <li>Redux with Redux Toolkit</li>
                    <li>Firebase: data storage</li>
                    <li>Thunk</li>
                </ul>
                }
        </div>
    )
}