import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(value => value.json())
    //     .then(value => {
    //         // setUsers([...value]);
    //         console.log(value);
    //     });
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
                console.log(value);
            });
    }, [])

    const search = (id) => {
        let find = users.find(value => value.id === id);

        console.log(find);
    }
    

    return (
        <div>
            {
                users.map(value => <User key={value.id}
                                         item={value}
                                         search={search}
                />)
            }
        </div>
    );
}