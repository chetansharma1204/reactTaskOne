import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Dashboard = ():ReactElement => {
return (<>
<h2>Dashboard</h2>
<br /><br />
<Link to='/home'>
<button>Back to Home</button>
</Link>
</>)
}

export default Dashboard