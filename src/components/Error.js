import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return(
        <div>
            OOPS!! {err.status} {err.statusText} !!
        </div>
    );
}

export default Error;