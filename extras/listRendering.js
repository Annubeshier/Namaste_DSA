const ListRender =()=>{

 const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Mike" }
  ];
  return (
    <ul>
        {users.map(user =>(
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  )
}