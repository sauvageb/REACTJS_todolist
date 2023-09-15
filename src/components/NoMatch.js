import {Link} from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <h5>Nothing to see here!</h5>
            <p>
                <Link to="/tasks">Go to the home page</Link>
            </p>
        </div>
    );
}
