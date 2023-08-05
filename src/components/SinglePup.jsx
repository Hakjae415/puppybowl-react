const SinglePup = ({onePup, handleGoBack}) => {
    return (
        <>
          {
            <div id="card" key={onePup.id}>
              <img src={onePup.imageUrl}></img>
              <p>Pupper Name: {onePup.name}</p>
              <p>Pupper ID #{onePup.id}</p>
              <p>Breed: {onePup.breed}</p>
              <p>Status: {onePup.status}</p>
              <button onClick={handleGoBack}>Go Back</button>
            </div>
          }
        </>
    )
}

export default SinglePup