import React from "react";

import Rule from "./Rule";

const validateStartOrEndWithSpace = password => password.match(/^[^\s]+(\s+[^\s]+)*$/);

const validateLowerCaseLetter = password => password.match(/[a-z]/);

const validateUpperCaseLetter = password => password.match(/[A-Z]/);

const validateHasNumber = password => password.match(/[0-9]/);

const validateBetween9to50 = password => password.match(/^.{9,50}$/);

const rules = [
  { rule: "Password cannot start or end with a space", handler: validateStartOrEndWithSpace },
  { rule: "include lower case letter", handler: validateLowerCaseLetter },
  { rule: "include an upper case letter", handler: validateUpperCaseLetter },
  { rule: "include a number", handler: validateHasNumber },
  { rule: "be 9-50 characters long", handler: validateBetween9to50 }
];

function Rules({ password }) {
  return (
    <ul>
      {rules.map(({ rule, handler }, index) => <Rule key={index} pass={handler(password)}>{rule}</Rule>)}
    </ul>
  );
}

export default Rules;