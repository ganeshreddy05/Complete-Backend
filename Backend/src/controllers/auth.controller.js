export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  // example login logic
  if (email === "admin@test.com" && password === "123456") {
    return res.json({
      message: "Login successful"
    });
  }

  return res.status(401).json({
    message: "Invalid credentials"
  });

};