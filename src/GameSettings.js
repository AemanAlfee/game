import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import {
  updateTournamnet,
  updateTurn
} from "../src/redux/actions/actionTypes";

export default function GameSettings() {
  const dispatch = useDispatch();
  const tournamentOptions = [
    {
      key: "3",
      text: "3",
      value: "3"
    },
    {
      key: "5",
      text: "5",
      value: "5"
    },
    {
      key: "2",
      text: "2",
      value: "2"
    }
  ];
  const turnOptions = [
    {
      key: "player1",
      text: "player1",
      value: "player1"
    },
    {
      key: "player2",
      text: "player2",
      value: "player2"
    },
    {
      key: "losser first",
      text: "losser first",
      value: "losser first"
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <Dropdown
        placeholder="Select Tournament"
        fluid
        search
        selection
        options={tournamentOptions}
        onChange={(value, text, $selectedItem) => {
          console.log("--->", value);
          console.log("--->22", text.value);
          console.log("----->234", $selectedItem);
          dispatch(updateTournamnet(text.value));
        }}
      />
      <br />
      <Dropdown
        placeholder="Select Turn"
        fluid
        selection
        options={turnOptions}
        onChange={(e) => dispatch(updateTurn(e.target.value))}
      />
    </div>
  );
}
