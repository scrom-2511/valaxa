export const formatAmount = (input: string | number) => {
    const amount = typeof input === "string" ? parseFloat(input) : input;
  
    if (isNaN(amount)) return "Invalid input";
  
    const absAmount = Math.abs(amount);
  
    let value: number;
    let suffix: string = "";
  
    if (absAmount >= 1_000_000_000_000) {
      value = amount / 1_000_000_000_000;
      suffix = "T";
    } else if (absAmount >= 1_000_000_000) {
      value = amount / 1_000_000_000;
      suffix = "B";
    } else if (absAmount >= 1_000_000) {
      value = amount / 1_000_000;
      suffix = "M";
    } else if (absAmount >= 1_000) {
      value = amount / 1_000;
      suffix = "K";
    } else {
      value = amount;
      suffix = "";
    }
    
    const formattedValue: string = parseFloat(value.toFixed(2)).toString();
  
    return `$${formattedValue}${suffix}`;
  }
  