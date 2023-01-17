import {
  IList,
  IListColumnData,
  IListDiariesRecord,
  IListExerciseRecord,
} from '@/interfaces';

export const filterListPerPage = (arr: any, num: number) => {
  // FILTER LIST BLOGS
  const filterList = [...arr].slice(0, num);
  return filterList;
};

export const listDataTopPage: IList[] = [
  {
    thumbnail: '../../assets/images/home/m01.jpg',
    text: '05.21.Morning',
  },
  {
    thumbnail: '../../assets/images/home/l03.jpg',
    text: '05.21.Lunch',
  },
  {
    thumbnail: '../../assets/images/home/d01.jpg',
    text: '05.21.Dinner',
  },
  {
    thumbnail: '../../assets/images/home/l01.jpg',
    text: '05.21.Snack',
  },
  {
    thumbnail: '../../assets/images/home/m01.jpg',
    text: '05.21.Morning',
  },
  {
    thumbnail: '../../assets/images/home/l03.jpg',
    text: '05.21.Lunch',
  },
  {
    thumbnail: '../../assets/images/home/d01.jpg',
    text: '05.21.Dinner',
  },
  {
    thumbnail: '../../assets/images/home/l01.jpg',
    text: '05.21.Snack',
  },
  {
    thumbnail: '../../assets/images/home/m01.jpg',
    text: '05.21.Morning',
  },
  {
    thumbnail: '../../assets/images/home/l03.jpg',
    text: '05.21.Lunch',
  },
  {
    thumbnail: '../../assets/images/home/d01.jpg',
    text: '05.21.Dinner',
  },
  {
    thumbnail: '../../assets/images/home/l01.jpg',
    text: '05.21.Snack',
  },
  {
    thumbnail: '../../assets/images/home/m01.jpg',
    text: '05.21.Morning',
  },
  {
    thumbnail: '../../assets/images/home/l03.jpg',
    text: '05.21.Lunch',
  },
  {
    thumbnail: '../../assets/images/home/d01.jpg',
    text: '05.21.Dinner',
  },
  {
    thumbnail: '../../assets/images/home/l01.jpg',
    text: '05.21.Snack',
  },
  {
    thumbnail: '../../assets/images/home/m01.jpg',
    text: '05.21.Morning',
  },
  {
    thumbnail: '../../assets/images/home/l03.jpg',
    text: '05.21.Lunch',
  },
  {
    thumbnail: '../../assets/images/home/d01.jpg',
    text: '05.21.Dinner',
  },
  {
    thumbnail: '../../assets/images/home/l01.jpg',
    text: '05.21.Snack',
  },
  {
    thumbnail: '../../assets/images/home/m01.jpg',
    text: '05.21.Morning',
  },
  {
    thumbnail: '../../assets/images/home/l03.jpg',
    text: '05.21.Lunch',
  },
];

export const listExerciseRecord: IListExerciseRecord[] = [
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
  {
    name: '家事全般（立位・軽い）',
    consumption: 26,
    time: 10,
  },
];

export const listDiariesRecord: IListDiariesRecord[] = [
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    date: '2021.05.2',
    time: '23:25',
    title: '私の日記の記録が一部表示されます。',
    description:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
];

export const listColumnData: IListColumnData[] = [
  {
    thumbnail: '../../assets/images/column/column-1.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-2.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-3.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-4.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-5.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-6.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-7.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-8.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-1.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-2.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-3.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-4.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-5.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-6.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-7.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-8.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-6.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-7.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
  {
    thumbnail: '../../assets/images/column/column-8.jpg',
    tagDate: '2021.05.17',
    tagTime: '23:25',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
  },
];
