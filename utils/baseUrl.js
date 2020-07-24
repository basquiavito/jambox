const baseUrl = 
process.env.Node_ENV === "production" 
? 'https://hoopscript.com'
: 'http://localhost:3000'

export default baseUrl;