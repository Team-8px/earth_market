import React, { useState, useEffect } from "react";

function LoginContainer() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))?.user?.token) {
      document.location.href = "/home";
    }
    // 로그인 상태일 경우 home 으로 가라
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? <div>로딩상태 보여줘</div> : <div>이제 로그인 보여줘</div>;
}
export default LoginContainer;
