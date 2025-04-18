import { useState} from "react";

const usePost = (url, blog) =>{
    
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    setIsLoading(true);
        fetch(url,{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
            .then(()=>{
                setIsLoading(false);
                setError(null);
            })
            .catch(err =>{
                if (err.name === "AbortError") {
                    console.log("POST aborted.");
                }else{
                    setIsLoading(false);
                    setError(err.message);
                }
            });

    return {isLoading, error}
}
export default usePost;