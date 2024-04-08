
const NewPost = ({handleSubmit, postTitttle, postBody, setPostTittle, setPostBody}) => {
  return (
    <main className="NewPost">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitttle">Tittle:</label>
        <input
        id="postTittle"
        type="text"
        required
        value={postTitttle}
        onChange={(e)=> setPostTittle(e.target.value)}
        />

      </form>
    </main>
  )
}

export default NewPost
