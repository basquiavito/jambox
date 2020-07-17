const baseUrl = 
process.env.Node_ENV === "production" 
? 'https://hoopscript.vercel.app'
: 'http://localhost:3000'

export default baseUrl;