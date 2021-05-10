    import axiosInstance from "../../services/api"
    import {useEffect, useState} from "react";
    
    export default function Posts(){
    
    let [posts,setPosts] = useState([]);

    useEffect(() => {
        axiosInstance.get('/posts').then(value => console.log(value.data))

    })
    return (
        <div>
            {
                
            }
        </div>
    )
    
    }