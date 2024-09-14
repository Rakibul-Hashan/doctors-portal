import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://doctors-portal-server-iota-plum.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            console.log("eida access token",data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
            
            setToken(data.accessToken);
            console.log(data.accessToken);
          }

        });
    }
    return
  }, [email]);
  return [token];
};

export default useToken;
