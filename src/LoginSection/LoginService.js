// import { data } from "vue-awesome";

class LoginService { 
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
  }

  async register(registrationDto) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationDto),
      });
      var data = await response.json();
      if (!response.ok) {
        data = data.errorResponse
        throw new Error(`Registration failed: ${data}`);
      }
      return data;
    } catch (error) {
      console.error('Error during registration:', error.message);
      throw error;
    }
  }
  async completeProfile(token, completeProfileDto) {
    try {
        const response = await fetch(`${this.apiBaseUrl}/complete-profile?token=${token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(completeProfileDto)
      });
      if (!response.ok) {
          throw new Error('Complete Profile process failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
        console.error('Error during complete profile:', error.message);
        throw error;
    }
  }
  async completeLoginByToken(token) {
    try {
        const response = await fetch(`${this.apiBaseUrl}/user?token=${token}`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token,
          },
      });
      if (!response.ok) {
          throw new Error('Login Failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
        console.error('Error during authentication:', error.message);
        throw error;
    }
  }

  async authenticateWithGoogle() {
    try {
        const response = await fetch(`${this.apiBaseUrl}/authenticate/google`, {
          method: 'POST',
      });
      if (!response.ok) {
          throw new Error('Authentication failed');
      }
      const data = await response.json();
      window.location.href = data.redirectUrl;
    } catch (error) {
        console.error('Error during authentication:', error.message);
        throw error;
    }
  }

  async login(loginDto) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/authenticate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginDto),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`Registration failed: ${data.message}`);
      }
      return data;
    } catch (error) {
      console.error('Error during registration:', error.message);
      throw error;
    }
  }
  async forgotPasscode(email) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/forgot-passcode?email=`+email, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      var data = await response.json();
      if (!response.ok) {
        data = data.errorResponse
        throw new Error(`Change Password operation failed: ${data}`);
      }
      return data;
    } catch (error) {
      console.error('Error during Change Password operation:', error.message);
      throw error;
    }
  }  
  async passcodeChange(email, passcode) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/reset-passcode?email=`+email+ '&&passcode='+ passcode, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Change Password operation failed: ${errorData.message}`);
      }
      return response;
    } catch (error) {
      console.error('Error during Change Password operation:', error.message);
      throw error;
    }
  }  
  async checkUserNameAvailability(username) {
    try {
      const response = await fetch(`${this.apiBaseUrl}/check-username?username=` + username, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      var data = await response.json();
      if (!response.ok) {
        data = data.errorResponse;
        throw new Error(data);
      }
      return data.responseMessage;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default LoginService;
