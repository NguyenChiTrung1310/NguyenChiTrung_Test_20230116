import { IList } from '@/interfaces';

export const filterListPerPage = (arr: IList[], num: number) => {
  // FILTER LIST BLOGS
  const filterList = [...arr].slice(0, num);
  return filterList;
};
