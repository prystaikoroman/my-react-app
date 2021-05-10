import {useEffect, useState} from "react";
import User from "../user/User";
import axiosInstance from "../../services/api"
import './Users.css'

export default function Users(){
    let [posts, setPosts] = useState([]);
    let [users, setUsers] = useState([]);
let [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then (value => value.json())
            .then(value => setPosts([...value]))
    }, []);
 useEffect(() => {
    axiosInstance.get('/users').then(value =>setUsers(value.data))
})

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value => value.json())
//         .then(value => setUsers([...value]))
// },[]);

    function searchUser(id){
        let findedUser = users.find(value => value.id === id);
        setUser(findedUser);
    }


return(
    <div className={'wrapper'}>
       <div className={'users-box'}> {

            users.map(value => <User key={value.id}
                                     user={value}
                                     searchUser={searchUser}
            />)

        }</div>

        <div className={'single-user-box'}>
            {user && <h2>{user.id} - {user.username}</h2>
            }
        </div>
    </div>
);

}
