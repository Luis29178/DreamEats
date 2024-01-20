import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/constants/Redux/ReduxStore";
import { LogIn, LogOut } from "@/constants/Redux/Slices/AccountInfoSlice";

import RewardsLO from "@/screens/rewards/RewardsLO";
import RewardsLI from "@/screens/rewards/RewardsLI";

const rewards = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(
    (state: RootState) => state.LoggedState.isLoggedIn
  );
  console.log(isLoggedIn);

  const handleLogIn = () => {
    dispatch(LogIn());
  };

  return isLoggedIn ? (
    <RewardsLI></RewardsLI>
  ) : (
    <RewardsLO handleLogIn={handleLogIn}></RewardsLO>
  );
};

export default rewards;
