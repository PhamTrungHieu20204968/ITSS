import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './NavBar.scss';
function NavBar() {
    return (
        <div className="nav-bar">
            <div className="sub-nav">
                <Link to="/getLesson">Lesson</Link>
                <div>Quiz</div>
                <div>Forum</div>
            </div>
            <Link to="/" className="web-name">
                ITpedia
            </Link>
            <div className="sub-nav login">
                <Button>Login</Button>
                <Button>Sign up</Button>
            </div>
        </div>
    );
}

export default NavBar;
