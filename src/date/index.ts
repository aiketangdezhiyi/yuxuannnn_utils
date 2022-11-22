import * as dayjs from 'dayjs';

export const formatDate = (
  time: string | number | undefined,
  format: string,
) => {
  return dayjs(time).format(format);
};

export * from 'dayjs';
