import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon, MessagesIcon, NotificationsIcon } from "./icons";
import {
  BellIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  InboxIcon,
} from "@heroicons/react/outline";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { userState } from "../atom/userAtom.js";
import { useRouter } from "next/router";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExploreIcon from "./icons/ExploreIcon";
import BookmarkIcon from "./icons/BookmarkIcon";
import MoreIcon from "./icons/MoreIcon";
import UserIcon from "./icons/UserIcon";
import ListIcon from "./icons/ListIcon";
import TweetIcon from "./icons/TweetIcon";
import { IconButton } from "@mui/material";
import { Fingerprint } from "@material-ui/icons";
export default function Sidebar() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  console.log(currentUser);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchUser = async () => {
          const docRef = doc(db, "users", auth.currentUser.providerData[0].uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setCurrentUser(docSnap.data());
          }
        };
        fetchUser();
      }
    });
  }, []);

  function onSignOut() {
    signOut(auth);
    setCurrentUser(null);
  }
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="cursor-pointer fill-[#1da1f2] p-0 xl:px-1">
        <TwitterIcon className="h-8 w-full" />
      </div>

      {/* Menu */}

      <div className="mt-4 mb-2.5 xl:items-start bg-midnight-">
        <SidebarMenuItem className="" text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem className="" text="Explore" Icon={ExploreIcon} />
        {currentUser && (
          <>
            <SidebarMenuItem text="Notifications" Icon={NotificationsIcon} />
            <SidebarMenuItem text="Messages" Icon={MessagesIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ListIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={MoreIcon} />
          </>
        )}
      </div>

      {/* Button */}

      {currentUser ? (
        <>
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>

          <button className="bg-blue-400 text-white rounded-full w-10 h-10 font-bold shadow-md hover:brightness-95 text-lg  md:inline  xl:hidden xs:inline sm:inline mx-auto ">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="icons w-7 h-8  rounded-full mx-auto"
            >
              <g>
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </g>
            </svg>
          </button>

          {/* Mini-Profile */}

          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              onClick={onSignOut}
              src={currentUser?.userImg}
              alt="user-img"
              className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{currentUser?.name}</h4>
              <p className="text-gray-500">@{currentUser?.username}</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
      ) : (
        <button
          onClick={() => router.push("/auth/signin")}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
          Sign in
        </button>
      )}
    </div>
  );
}
