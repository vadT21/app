export const calculateValues = (
  {
    operator, 
    values,
  }
) => {
  switch(operator){
  case '+':
    return values[0] + values[1];
  case '-':
    return values[0] - values[1];
  case '*':
    return values[0] * values[1];
  case '/':
    return values[0] / values[1]; 
  default:
    return;
  }        

};

export const roundNumber = (value) => {
  return Math.ceil(Number(value) * 1000) / 1000; 
};

export const checkInfinity = (value) => {
  const result = Number.isFinite(value) 
    ?
    roundNumber(value)
    :
    `${value}`;

  return result;
};