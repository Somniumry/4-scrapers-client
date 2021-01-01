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

      localStorage.setItem("Authorization", response.data.accessToken);

      return {
        userData: response.data,
        userInfo: userInfo.data,
        success: true,
      };
    } catch (error) {
      return { success: false };
    }
  }

  async userEdit(userEditInfo, imgFile) {
    try {
      if (!userEditInfo.name && !userEditInfo.password && !imgFile) {
        throw Error();
      } else if (!userEditInfo.name) {
        delete userEditInfo.name;
      } else if (!userEditInfo.password) {
        delete userEditInfo.password;
      }

      if (userEditInfo.name || userEditInfo.password) {
        await this.user.patch("/user", userEditInfo);
      }

      if (imgFile) {
        const data = new FormData();
        data.append("img", imgFile);
        await this.user.post("/user/icon", data);
      }

      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  async userDelete(password) {
    try {
      console.log(password);
      const response = await this.user.delete("/user", {
        data: password,
      });
      console.log(response);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }
}

export default User;
