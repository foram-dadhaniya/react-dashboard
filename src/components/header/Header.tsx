import { UserCircleIcon } from "lucide-react"
import { HeaderTop } from "./Header.styles"

export const Header: React.FC = () => {
    return(
        <HeaderTop>
            <input type="text" placeholder="Search here..." className="serachInput" ></input>
            <UserCircleIcon color="white" size={30} className="ms-2" />
        </HeaderTop>
    )
}