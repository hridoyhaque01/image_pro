// import { createContext, useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   updateProfile,
//   updateEmail,
//   deleteUser,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   sendPasswordResetEmail,
//   sendEmailVerification,
// } from "firebase/auth";
// import { firebaseApp } from "../firebase/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(firebaseApp);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [subscriptionStatus, setSubscriptionStatus] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const updateUser = (profile) => {
//     setLoading(true);
//     return updateProfile(auth.currentUser, profile);
//   };

//   const updateEmailAddress = (newEmail) => {
//     updateEmail(auth.currentUser, newEmail)
//       .then(() => {
//         console.log("Email Updated");
//       })
//       .catch((error) => {
//         console.error(error.message);
//       });
//   };

//   const providerLogin = (provider) => {
//     setLoading(true);
//     return signInWithPopup(auth, provider);
//   };

//   const loginUserEmail = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const resetUserPassword = (email) => {
//     sendPasswordResetEmail(auth, email)
//       .then(() => {
//         console.log("password reset email sent");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//   };

//   const deletCurrentUser = () => {
//     deleteUser(user)
//       .then(() => {
//         console.log("User deleted");
//       })
//       .catch((error) => {
//         console.error(error.message);
//       });
//   };

//   const verifyEmail = () => {
//     sendEmailVerification(auth.currentUser).then(() => {
//       console.log("verification email sent");
//     });
//   };

//   const createNewUserEmail = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const logout = () => {
//     setLoading(true);
//     signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   useEffect(() => {
//     if (!user?.email) {
//       return;
//     }
//     const fetchSubscriptions = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://api.stripe.com/v1/customers?email=${user?.email}`,
//           {
//             headers: {
//               Authorization: `Bearer ${import.meta.env.VITE_Stripe_secret_key}`,
//             },
//             method: "GET",
//           }
//         );
//         const data = await response.json();
//         if (data?.data?.length > 0) {
//           setSubscriptionStatus(true);
//         }
//         //  else {
//         //   setSubscriptionStatus(false);
//         // }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchSubscriptions();
//     setLoading(false);
//   }, [user]);

//   const authInfo = {
//     user,
//     setUser,
//     updateUser,
//     verifyEmail,
//     deletCurrentUser,
//     updateEmailAddress,
//     createNewUserEmail,
//     loginUserEmail,
//     resetUserPassword,
//     providerLogin,
//     logout,
//     loading,
//     subscriptionStatus,
//   };
//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default AuthProvider;
