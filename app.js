import 'bootstrap/dist/css/bootstrap.min.css'; import './index.css';
import React, { useEffect, useState } from 'react' function App() {
const [Users, fetchUsers] = useState([]) useEffect(() => { 
fetch("http://localhost:4000/Restaurant")
.then((res) => res.json())
.then((res) => { fetchUsers(res) console.log(res);
})
}, []);
return (
<div className="container p-5">
<h1 className='mb-5'>Name:Mansur Alam</h1>
<table className="table">
<thead>
<tr>
<th scope="col">Dish</th>
<th scope="col">Image</th>
<th scope="col">Comment</th>
<th scope="col">Description</th>
</tr>
</thead>
<tbody>
{Users.map((Restaurant, i) => { return <tr>
<td>{Restaurant.Dishid}</td>
<img className='foodimage' src={Restaurant.Image}
alt={Restaurant.Image}></img>
<td>{Restaurant.Comment}</td>
<td className='descri'>{Restaurant.Description}</td>
</tr>
})}
<tr>
</tr>
</tbody>
</table>
</div>
)
}
export default App;
