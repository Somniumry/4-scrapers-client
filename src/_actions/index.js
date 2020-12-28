export const USER_SIGNIN = "USER_SIGNIN";
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_SIGNOUT = "USER_SIGNOUT";

export const usersignin = data => ({
    type: USER_SIGNIN,
    data
});

export const usersignup = data => ({
    type: USER_SIGNUP,
    data
});

export const usersignout = data => ({
    type: USER_SIGNOUT,
    data
});