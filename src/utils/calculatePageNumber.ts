type PageSize = number;
type ItemIndex = number;

/**
 * Function to calculate page
 * number
 * @param pageSize
 * @param itemIndex
 * @returns number
 */
const calculatePageNumber = (
  pageSize: PageSize,
  itemIndex: ItemIndex,
) => Math.ceil(++itemIndex / pageSize);

export default calculatePageNumber;
