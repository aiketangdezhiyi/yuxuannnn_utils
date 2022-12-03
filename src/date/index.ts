import * as dayjs from 'dayjs';

export const formatDate = (
  time: string | number | undefined,
  format: string | undefined,
) => {
  return dayjs(time).format(format);
};
