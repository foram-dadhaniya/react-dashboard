// import { useSelector } from "react-redux";
import { LayoutFrame } from "../pages/Dashboard.style";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
// import { RootState } from "../../app/store";
import { Outlet } from "react-router-dom";

export const Layout:React.FC = () => {
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    // if(!isAuthenticated){
    //     return <Navigate to='./signUp' />
    // }

    return(
        <LayoutFrame>
            <Sidebar/>
            <div style={{ width: 'calc(100% - 300px)' }}>
                <Header/>
                <main className="p-3">
                    <Outlet/>
                </main>
            </div>
        </LayoutFrame>
    )
}
    
