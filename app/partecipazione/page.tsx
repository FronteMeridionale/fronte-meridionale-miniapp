import { ROUTES } from '../../routes';

const Button = () => { 
    const handleRedirect = () => {
        // Updated to navigate to verification instead of portafoglio
        window.location.href = ROUTES.verification;
    };

    return (
        <button onClick={handleRedirect}>
            Continua
        </button>
    );
};

export default Button;