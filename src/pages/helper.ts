export const readableNumber = (number:number) => {
    if (number >= 1000000000) {
        return (number / 1000000000).toFixed(2).toString() + " B";
      } else if (number >= 1000000) {
        return (number / 1000000).toFixed(2).toString() + " M";
      } else if (number >= 1000) {
        return (number / 1000).toFixed(2).toString() + " K";
      } else if(number < 1) {
        return number.toFixed(3).toString()
      }else {
        return Number.isInteger(number) ? number.toString() : number.toFixed(3).toString();
      }
}