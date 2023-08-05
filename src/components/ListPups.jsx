const ListPups = ({listAll, handleDetail}) => {
    return (
        <ul id="container">
          {
            listAll.map((list) => {
                return (
                    <div id="card" key={list.id}>
                        <img src={list.imageUrl} alt={list.name}/>
                        <p>Pupper Name: {list.name}</p>
                        <p>Pupper ID #{list.id}</p>
                        <button onClick={() => handleDetail(list.id)}>{list.name} Details</button>
                    </div>
                )
            })
          }        
        </ul>
    )
}

export default ListPups