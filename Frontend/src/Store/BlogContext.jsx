import { useState, createContext } from "react";




export const BlogContext = createContext();


export function BlogProvider(props) {

  const [user, setUser] = useState(null);
  const [picture, setPicture] = useState(null);
  const [contract_Id, setContract_Id] = useState(null);


  return (
    <div>
      <BlogContext.Provider
        value={{
          user,
          setUser,
          picture,
          setPicture,
          contract_Id,
          setContract_Id,
        }}
      >
        {props.children}
      </BlogContext.Provider>
    </div>
  );
}


  