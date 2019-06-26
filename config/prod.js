// module.exports = {
//     googleClientID:
//         "415814595200-kam5qn5o9un1qhbo27e06ed5dgv7h9om.apps.googleusercontent.com",
//     googleClientSecret: "xo_-cyhgY-Bn_el45FRhTlj7",
//     mongoURI:
//         "mongodb+srv://admin:D5jxMuHGe6Ly8Wr3>@cluster0-fbiqj.mongodb.net/test?retryWrites=true&w=majority",
//     cookieKey: "sdlafasfsa8161816*"
// };

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
