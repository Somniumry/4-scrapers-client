class User {
  constructor(httpClient) {
    this.user = httpClient;
  }

  async userSignIn(userLoginInfo) {
    try {
      const response = await this.user.post("/user/login", userLoginInfo);
      return { userData: response.data, success: true };
    } catch (error) {
      return { success: false };
    }
  }

  async userSignUp(userRegisterInfo) {
    try {
      await this.user.post("/user", userRegisterInfo);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  async userLogout() {
    try {
      await this.user.post("/user/logout");
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  async userToken() {
    try {
      const token = localStorage.getItem("Authorization");
      if (!token) throw Error();

      const response = await this.user.post("/user/token");
      const userInfo = await this.user.get("/user");

      return {
        userData: response.data,
        userInfo: userInfo.data,
        success: true,
      };
    } catch (error) {
      return { success: false };
    }
  }
}

export default User;
