
import { useLocation } from 'react-router-dom'

export const getTitle = () => {    
    const location = useLocation(); 
    switch (location.pathname) {
        case '/la-calculator':
                return 'Loan Amortization Calculator';
        default:
            return 'Welcome!';
    }
}
export const isTitleActive = (linkPath) => {  
    const location = useLocation();   
    if (linkPath == location.pathname)
        return true;
    else 
        return false;
}