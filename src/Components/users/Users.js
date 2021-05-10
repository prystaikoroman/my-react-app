import {useEffect, useState} from "react";
import User from "../user/User";
import axiosInstance from "../../services/api"

export default function Users(){
    let [posts, setPosts] = useState([]);
    let [users, setUsers] = useState([]);

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



return(
    <div>
        {

            users.map(value => <User key={value.id} user={value}/>)

        }
    </div>
);
}