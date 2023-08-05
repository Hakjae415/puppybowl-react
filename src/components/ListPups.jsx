// Dont forget to make onClick for details
const ListPups = ({listAll}) => {
    return (
        <>
          {
            listAll.map((list) => {
                return (
                    <div key={list.id}>
                        <img src={list.imageUrl} alt={list.name}/>
                        <p>Pupper Name: {list.name}</p>
                        <p>Pupper ID #{list.id}</p>
                        <button>{list.name} Details</button>
                    </div>
                )
            })
          }        
        </>
    )
}

export default ListPups