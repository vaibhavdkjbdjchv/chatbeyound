import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButtons() {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex justify-between items-center space-y-4">
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="font-semibold text-white rounded-lg px-5 py-2 cursor-pointer loginButton"
        >
          Login
        </button>
        
      ) : (
        <div className="flex justify-center items-center  w-auto gap-3">
          <img src={user.picture} className=" rounded-full w-10" />
          <h2 className="font-bold text-lg">{user.name}</h2>
          <button
            className="font-semibold w-30 py-2 text-sm text-white rounded-lg px-5 cursor-pointer loginButton"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
