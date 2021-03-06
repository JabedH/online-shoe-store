/**
 * 1. create react projects in console.firebase.google.com
 * 2. npm install firebase
 * 3. create firebase.init.js and import getAuth to export auth
 * 4 firebase setting > authentication > enable email and password auth
 * 5 create login, signup, component, setup route
 * 6. attach form field handler and form submit handler.
 * 7. set useState(), set onBlur() and onSubmit()
 * 8. set condition in form section.
 * 9. npm install --save react-firebase-hooks
 * 10. useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 11. set createUserWithEmailAndPassword(email, password) in submit handler.
 * 12. and set if condition for changing navigation  navigate("/");
 * 13. useSignInWithEmailAndPassword for sign in
 * require auth
 * 14. set children , useAuthState and  useLocation
 * 15. set conditione to change location and return children
 * come back to previous page
 * 16. set {const location = useLocation(); const from = location?.state?.from?.pathname || "/";}
 * 17. change to condition in login section [if (user) {navigate(from, { replace: true });}]
 * 18. set logout button with condition in Navbar and set signOut(auth) in signoutHandle
 * 19 set shipping information
 */

/** hosting
 * 1 npm install -g firebase-tools
 * 2 firebase login
 * 3 firebase init
 * 4 firebase diploy
 *
 */
