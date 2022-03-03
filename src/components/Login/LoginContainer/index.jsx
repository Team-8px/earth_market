import React, { useState, useEffect } from "react";

function LoginContainer() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))?.user?.token) {
      document.location.href = "/home";
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>LoginContainer</div>;
}
export default LoginContainer;
