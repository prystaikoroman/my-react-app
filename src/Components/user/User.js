export default function User({user, searchUser}){
    return (
        <div>
                <h3>{user.id} - {user.name}</h3>
<button onClick={() => searchUser(user.id)}>details</button>
        </div>
    )
}