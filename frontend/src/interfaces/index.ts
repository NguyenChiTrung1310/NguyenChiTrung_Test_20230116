export type IList = {
  thumbnail: string;
  text: string;
};

export type IListExerciseRecord = {
  name: string;
  consumption: number;
  time: number;
};

export type IListDiariesRecord = {
  date: string;
  time: string;
  title: string;
  description: string;
};

export type IListColumnData = {
  thumbnail: string;
  tagDate: string;
  tagTime: string;
  title: string;
};
