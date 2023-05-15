import * as _ from "lodash";

let minLen = 2;

const isValid = () => {
  return _.trim(name).length >= minLen;
};

export default { isValid };
