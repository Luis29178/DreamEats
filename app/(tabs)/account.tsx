import React from "react";

import AccountLO from "@/screens/account/AccountLO";
import AccountLI from "@/screens/account/AccountLI";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/constants/Redux/ReduxStore";

export default function account() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(
    (state: RootState) => state.LoggedState.isLoggedIn
  );

  return isLoggedIn ? <AccountLI></AccountLI> : <AccountLO></AccountLO>;
}
