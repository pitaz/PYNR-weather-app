export const groupBy = (arr: any, key:any) => {
  const initialValue = {};
  return arr.reduce((acc: any, cval: any) => {
    const myAttribute = new Date(cval[key]).getDate();
    acc[myAttribute] = [...(acc[myAttribute] || []), cval]
    return acc;
  }, initialValue);
};