import React, { memo, useState } from 'react';
import { IListExerciseRecord } from '@/interfaces';
import { listExerciseRecord } from '@/utils/utils';

const formatDataListRecord = () => {
  let data = [...listExerciseRecord];
  let idx = 0;

  let temp: IListExerciseRecord[] = [];
  const newData: IListExerciseRecord[][] = [];
  const object: { [key: number]: IListExerciseRecord[] } = {};

  // Handle group 2 elements of data
  // Example: [1,2,3,4,5] => [[1,2], [3,4], [5,6]]
  data.forEach((item) => {
    temp.push(item);
    object[idx] = [...temp];
    if (object[idx].length === 2) {
      idx += 1;
      temp = [];
    }
  });

  const keys = Object.keys(object);

  keys.forEach((item) => {
    newData.push(object[+item]);
  });

  return newData;
};

const MyExercise = () => {
  const [dataTable, setDataTable] = useState<IListExerciseRecord[][]>(
    formatDataListRecord()
  );
  return (
    <div className='w-full overflow-y-auto max-h-[192px] relative'>
      <table className='table-fixed mt-8 w-full h-auto'>
        <thead>
          <tr>
            <th scope='col' className='tablet_max:w-[500px] w-[100%]' />
            <th scope='col' className='tablet_max:w-[500px] w-[40px]' />
            <th scope='col' className='tablet_max:w-[500px] w-[100%]' />
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data, index) => (
            <tr key={index}>
              {data.map((item, idx) => (
                <React.Fragment key={idx}>
                  <th
                    scope='row'
                    className='text-left border-b border-solid border-gray-400'
                  >
                    <div className='w-full flex-between items-start'>
                      <div>
                        <ul className='list-disc list-inside'>
                          <li className='text-[15px] font-light leading-[22px] tracking-[0.075px] text-white'>
                            <span>{item.name}</span>
                          </li>
                        </ul>
                        <p className='pl-5 font-inter text-[15px] font-normal leading-[18px] tracking-[0.075px] text-primary-300'>
                          {item.consumption}kcal
                        </p>
                      </div>
                      <div>
                        <p className='font-inter text-[18px] font-normal leading-[22px] tracking-[0.09px] text-primary-300'>
                          {item.time} min
                        </p>
                      </div>
                    </div>
                  </th>
                  <th />
                </React.Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(MyExercise);
